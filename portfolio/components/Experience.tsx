'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: 'Sambodh IAS',
      role: 'Founder & Builder',
      duration: 'February 2026 - Present',
      location: 'Bengaluru, India',
      current: true,
      description: 'Solo-building an AI-powered exam-prep platform for UPSC',
      highlights: [
        'Solo-building an AI-powered assessment platform for UPSC and other competitive exams — instant, structured feedback on written answers plus personalized gap analysis with targeted recommendations',
        'Grounded LLM responses in a domain knowledge graph of the syllabus and primary source material via a GraphRAG retrieval layer that anchors answers to verified sources',
        'Architected the full stack end-to-end, including a 7-agent content and engagement pipeline (Fetcher, Relevance, Mapper, Content, Creative, Engagement, Publisher) on FastAPI, Next.js, and Supabase',
      ],
      tags: ['GenAI', 'GraphRAG', 'Knowledge Graphs', 'Agent Systems', 'FastAPI', 'Next.js'],
    },
    {
      company: 'Ola Foundation',
      role: 'Technical Product Architect / Owner',
      duration: 'January 2025 - May 2026',
      location: 'Bengaluru, India',
      description: 'National-scale, regulatory-sensitive GenAI in public health',
      highlights: [
        'Led SAHELI Actiquity AI, a GenAI clinical assistant rolled out across 6 blocks of Krishnagiri, Tamil Nadu — driving a 57% reduction in unnecessary clinical referrals and 80% CSAT among frontline workers',
        'Owned the full AI stack end-to-end: Retrieval Augmented Generation architecture, prompt design, evaluation harness, clinical-protocol guardrails, and human-in-the-loop workflows',
        'Rebuilt the eval harness in a two-week sprint after the pilot surfaced edge-case hallucinations, cutting the hallucination rate by 30%',
        'Defined the product and program roadmap across health, livelihood, and education for a women-centric digital platform reaching underserved communities',
      ],
      tags: ['GenAI', 'RAG', 'Eval Harness', 'Guardrails', 'Healthcare', 'Product Strategy'],
    },
    {
      company: 'NITI Aayog',
      role: 'Associate / Research Officer',
      duration: 'May 2020 - December 2024',
      location: 'New Delhi, India',
      description: 'National platforms, regulatory authorship & frontier-tech policy',
      highlights: [
        'Co-authored "Digital Banks: A Proposal for Licensing & Regulatory Regime for India", a foundational framework engaged with the RBI and the Department of Financial Services',
        'Led product development for the National Data Analytics Platform (NDAP) — 3,000+ datasets across 25+ ministries, with cross-ministry alignment driven at Joint Secretary and Secretary level',
        'Scaled the Women Entrepreneurship Platform (WEP) to 30,000+ users, 400+ mentors, and 26+ institutional partners; co-authored "Moving the Needle"',
        'Managed an AI-based Clinical Decision Support System pilot across Aspirational Districts in partnership with Elsevier (RELX) and multiple state health systems',
        'Supported the CEO Office and Frontier Technologies vertical on Web3, blockchain, and digital-asset policy research',
      ],
      tags: ['Product Management', 'Platform Building', 'Regulatory Policy', 'Stakeholder Management'],
    },
    {
      company: 'UPSC Civil Services & Mentorship',
      role: 'Study Sabbatical — Civil Services Examination',
      duration: 'June 2017 - April 2020',
      location: 'India',
      description: 'Intensive study, top 2% nationally, and mentorship',
      highlights: [
        'Cleared the UPSC CSE Prelims twice and appeared for Mains; ranked in the top 2% among 1M+ applicants',
        'Built exam-grade fluency in the Indian Constitution, federal architecture, central and state governance, economic policy, and public administration',
        'Mentored aspirants on Topmate, developing structured analytical and policy-evaluation skills',
      ],
      tags: ['Governance', 'Policy', 'Economics', 'Mentorship'],
    },
    {
      company: 'Ola',
      role: 'Research Engineer - Data Science',
      duration: 'October 2015 - February 2017',
      location: 'Bengaluru, India',
      description: 'Big Data & Machine Learning',
      highlights: [
        'Independently designed and shipped a Fraud Detection Engine for Ola Rides using graph algorithms (Spectral Clustering and Clique Detection) on Apache Spark',
        'Deployed to production with 80% field-validated accuracy for real-time fraud detection',
        'Foundational training in data-driven decision systems that now anchors my evidence-based product and policy work',
      ],
      tags: ['Machine Learning', 'Big Data', 'Graph Algorithms', 'Apache Spark'],
    },
    {
      company: 'Quikr',
      role: 'Associate Software Engineer',
      duration: 'September 2014 - September 2015',
      location: 'Bengaluru, India',
      description: 'Machine Learning & Web Development',
      highlights: [
        'Implemented ML-based Ad Filtering Classifier using Bayesian Models on Apache Mahout',
        'Developed Speech-to-Text recognition system for audio ads',
        'Contributed to multiple web development projects',
      ],
      tags: ['Machine Learning', 'NLP', 'Web Development'],
    },
    {
      company: 'EMC',
      role: 'Associate Consultant',
      duration: 'August 2013 - August 2014',
      location: 'Bengaluru, India',
      description: 'Big Data Engineering',
      highlights: [
        'Customer Churn Analysis on telecom data using MapReduce',
        'Hadoop programming and analytics for enterprise clients',
      ],
      tags: ['Big Data', 'Hadoop', 'Analytics'],
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Experience & <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto px-4 sm:px-0">
            From shipping ML systems to architecting India&apos;s national platforms to building GenAI products end-to-end, my journey has been about creating measurable impact at scale
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg card-hover border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-primary-600" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{exp.role}</h3>
                    {exp.current && (
                      <span className="px-3 py-1 text-xs font-semibold bg-gradient-primary text-white rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-lg sm:text-xl text-primary-600 font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-200 italic mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-4 text-sm text-gray-500 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700 dark:text-gray-200">
                    <span className="text-primary-600 dark:text-primary-400 mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-primary-700 dark:text-primary-400 rounded-full border border-primary-200 dark:border-primary-700"
                  >
                    {tag}
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

export default Experience

