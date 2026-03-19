import { client } from '@/sanity/lib/client'
import { blogsQuery } from '@/sanity/lib/queries'
import { Blog } from '@/types'
import BlogList from '@/components/BlogList'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog | Sabyasachi Upadhyay',
  description: 'Thoughts on product management, AI, technology, policy, and creating meaningful impact.',
}

export default async function BlogPage() {
  let blogs: Blog[] = []

  try {
    blogs = await client.fetch(blogsQuery)
  } catch {
    // Sanity not configured — use empty array, BlogList has defaults
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogList blogs={blogs} />
      <Footer />
    </main>
  )
}
