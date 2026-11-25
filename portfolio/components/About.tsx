'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Layers, Rocket, Landmark } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: '57%', label: 'fewer unnecessary clinical referrals with SAHELI Actiquity AI' },
    { value: '80%', label: 'CSAT among frontline health workers' },
    { value: '30,000+', label: 'women entrepreneurs on the national WEP platform' },
    { value: '3,000+', label: 'datasets from 25+ ministries onboarded to NDAP' },
  ]

  const pillars = [
    {
      icon: Layers,
      title: 'Full AI stack ownership',
      description:
        'Model architecture (LLM vs SLM), prompt design, eval harnesses, retrieval grounding, guardrails, and human-in-the-loop workflows.',
    },
    {
      icon: Rocket,
      title: 'Prototype to production',
      description:
        'I build the first version myself, then take it through pilots, eval-driven iteration, and rollout with measurable outcomes.',
    },
    {
      icon: Landmark,
      title: 'Delivery at national scale',
      description:
        'Three national AI and data platforms at NITI Aayog, aligned across ministries, state health systems, and international partners.',
    },
  ]

  return (
    <section id="about" className="pt-20 sm:pt-24 pb-12 bg-white dark:bg-gray-950" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Impact numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 sm:mb-16"
          >
            <div className="max-w-4xl text-gray-600 dark:text-gray-200">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
                I&apos;m a <strong>Lead AI Product Manager</strong> with a decade of shipping AI products end-to-end,
                from prototype to production. Today I&apos;m a <strong>Manager - Projects at Cognizant</strong>, working
                on Agentic AI solutions for BFSI workflows.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
                Before that I solo-built <strong>Sambodh IAS</strong>, an AI-powered assessment platform for UPSC
                aspirants, on a GraphRAG retrieval layer and a 7-agent content pipeline. At the{' '}
                <strong>Ola Foundation</strong> I led SAHELI Actiquity AI, a GenAI clinical assistant deployed across
                six blocks of Krishnagiri, Tamil Nadu. At <strong>NITI Aayog</strong> I led product development for
                three national AI and data platforms: NDAP, WEP (with an in-platform GenAI chatbot), and an AI-based
                Clinical Decision Support pilot.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                I studied Computer Science at BITS Pilani and ranked in the top 2% of the UPSC Civil Services
                examination. Outside work I&apos;m a stand-up comedian, a Manchester United fan, and a regular at
                weekend hackathons.
              </p>
            </div>
          </motion.div>

          {/* How I work */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-6 sm:p-8 rounded-2xl card-hover border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{pillar.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
