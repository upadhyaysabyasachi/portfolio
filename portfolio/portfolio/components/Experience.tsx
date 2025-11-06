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
      company: 'Ola Foundation',
      role: 'Product Owner',
      duration: 'January 2025 - Present',
      location: 'Bengaluru, India',
      current: true,
      description: 'Building GenAI-powered healthcare platform for India',
      highlights: [
        'Led rollout of GenAI Assistant for Frontline Health Workers monitoring anemia in 6 blocks, Krishnagiri, Tamil Nadu',
        'Building platform leveraging LLMs and SLMs for responsive public healthcare',
        'Created roadmap for comprehensive women\'s platform across health, livelihoods, and education',
      ],
      tags: ['GenAI', 'LLMs', 'Healthcare', 'Product Strategy'],
    },
    {
      company: 'NITI Aayog',
      role: 'Associate',
      duration: 'May 2020 - December 2024',
      location: 'New Delhi, India',
      description: 'Product Development & Fintech Strategy',
      highlights: [
        'Led Women Entrepreneurship Platform (WEP) - 30,000+ entrepreneurs, 400+ mentors, 26+ partner organizations',
        'Founding team member of National Data Analytics Platform (NDAP) - 3000+ datasets, 25+ ministries',
        'Managed health pilot projects for Clinical Decision Support Systems in Aspirational Districts',
        'Co-authored Digital Banking Licensing & Regulatory Framework for India',
        'Supported CEO Office on Web3 Research (Blockchain & Crypto)',
      ],
      tags: ['Product Management', 'Fintech', 'Policy', 'Platform Building'],
    },
    {
      company: 'UPSC Preparation & Mentorship',
      role: 'Civil Services Examination',
      duration: 'June 2017 - April 2020',
      location: 'India',
      description: 'Intensive Study & Knowledge Development',
      highlights: [
        'Qualified Prelims twice (2019, 2022), appeared for Mains',
        'Top 2% among 1M+ candidates (0.1% acceptance rate)',
        'Developed expertise in Governance, Policy, Economics, Technology, and Social Sector',
        'Mentored UPSC candidates on Topmate with positive testimonials',
      ],
      tags: ['Policy', 'Governance', 'Research', 'Teaching'],
    },
    {
      company: 'Ola',
      role: 'Research Engineer - Data Science',
      duration: 'October 2015 - February 2017',
      location: 'Bengaluru, India',
      description: 'Big Data & Machine Learning',
      highlights: [
        'Built Fraud Detection Engine using Spectral Clustering and Clique Detection on graphs',
        'Deployed production system with 80% accuracy for real-time fraud detection',
        'Worked with Apache Spark GraphX and R Igraph for large-scale data analysis',
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
    <section id="experience" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Experience & <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From building ML systems to shaping national platforms, my journey has been about creating impact at scale
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-primary-600" />
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    {exp.current && (
                      <span className="px-3 py-1 text-xs font-semibold bg-gradient-primary text-white rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-xl text-primary-600 font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-600 italic mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
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
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-primary-600 mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-blue-50 text-primary-700 rounded-full border border-primary-200"
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

