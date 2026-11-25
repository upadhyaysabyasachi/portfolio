'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Bot, ClipboardList, Database, Building2 } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const groups = [
    {
      icon: Bot,
      title: 'AI Product',
      skills: [
        'GenAI',
        'LLMs',
        'RAG',
        'Agent Systems',
        'Prompt Engineering',
        'Evaluation Harnesses',
        'Guardrails',
        'Human-in-the-Loop Workflows',
        'LLM-as-Judge',
        'Vector Stores',
        'Model Selection (LLM vs SLM)',
      ],
    },
    {
      icon: ClipboardList,
      title: 'Product Management',
      skills: [
        'Product Strategy',
        'Roadmap',
        'PRD Writing',
        'Agile/Scrum',
        'User Research',
        'Backlog Prioritisation',
        'Go-to-Market',
        'KPI Definition',
        'A/B Testing',
      ],
    },
    {
      icon: Database,
      title: 'Data & Engineering',
      skills: [
        'Python',
        'SQL',
        'FastAPI',
        'Next.js',
        'Supabase',
        'Apache Spark',
        'GraphX',
        'MapReduce/Hadoop',
        'Playwright',
      ],
    },
    {
      icon: Building2,
      title: 'Public Sector & Stakeholders',
      skills: [
        'Central & State Government Engagement',
        'Multi-ministry Coordination',
        'Regulatory Framework Authorship',
        'Industry-Academia-Foundation Partnerships',
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-24 bg-white dark:bg-gray-950" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Skills & <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-5 sm:p-8 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shrink-0">
                  <group.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs sm:text-sm bg-white dark:bg-gray-800 text-primary-700 dark:text-primary-400 rounded-full border border-primary-200 dark:border-primary-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
