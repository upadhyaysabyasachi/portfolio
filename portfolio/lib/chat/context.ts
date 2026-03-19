import { client } from '@/sanity/lib/client'
import { chatDataSourcesQuery } from '@/sanity/lib/queries'
import { ChatDataSource } from '@/types'

let cachedContext: string | null = null
let cacheTimestamp = 0
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

async function fetchUrlContent(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBot/1.0)' },
    })
    const html = await response.text()
    const text = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
    return text.slice(0, 5000)
  } catch (error) {
    console.error(`Failed to fetch URL ${url}:`, error)
    return '[URL content could not be fetched]'
  }
}

async function processSource(source: ChatDataSource): Promise<string> {
  const header = `\n--- ${source.name} ${source.description ? `(${source.description})` : ''} ---\n`

  switch (source.sourceType) {
    case 'text':
      return header + (source.textContent || '[No text content]')

    case 'pdf': {
      // PDF text should be pasted as a "text" source in Sanity CMS.
      // If a file URL is provided, we note it for reference.
      if (source.fileUrl) return header + `[PDF document available at: ${source.fileUrl}]`
      return header + '[No PDF file uploaded. Tip: export PDF text and add as a "text" source instead.]'
    }

    case 'url': {
      if (!source.url) return header + '[No URL provided]'
      const urlContent = await fetchUrlContent(source.url)
      return header + urlContent
    }

    case 'file': {
      if (!source.fileUrl) return header + '[No file uploaded]'
      return header + `[Document available at: ${source.fileUrl}]`
    }

    default:
      return header + '[Unknown source type]'
  }
}

const BASE_SYSTEM_PROMPT = `You are Sabyasachi Upadhyay's AI assistant on his personal portfolio website. You help visitors learn about Sabyasachi's background, experience, projects, publications, and skills.

Key facts about Sabyasachi:
- Product Leader & AI for Good Advocate
- Currently Product Owner at Ola Foundation, building GenAI-powered healthcare platform
- Previously at NITI Aayog (India's premier policy think tank) for 4+ years
- BITS Pilani graduate
- Experience in product management, data science, ML, fintech, healthcare tech, and public policy
- Built platforms like SAHELI AI, Women Entrepreneurship Platform (WEP), and National Data Analytics Platform (NDAP)
- Built PatchUp — a voice-first relationship simulator using Sarvam AI (Bulbul V3 TTS, Saarika STT, Sarvam-M LLM). Users practice convincing an angry AI girlfriend to forgive them, with real-time LLM judging and a live Patch-Up Meter. Live at https://patch-up-zeta.vercel.app/
- Passionate about using technology for social impact

Be helpful, concise, and professional. If asked about something not in your context, say you don't have that information and suggest the visitor reach out directly.`

export async function buildChatContext(): Promise<string> {
  const now = Date.now()
  if (cachedContext && (now - cacheTimestamp) < CACHE_TTL) {
    return cachedContext
  }

  let dynamicContext = ''

  try {
    const sources: ChatDataSource[] = await client.fetch(chatDataSourcesQuery)

    if (sources && sources.length > 0) {
      const processedSources = await Promise.all(sources.map(processSource))
      dynamicContext = '\n\nAdditional context from data sources:\n' + processedSources.join('\n')
    }
  } catch (error) {
    console.error('Failed to fetch chat data sources:', error)
  }

  cachedContext = BASE_SYSTEM_PROMPT + dynamicContext
  cacheTimestamp = now

  return cachedContext
}
