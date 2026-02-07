'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Award, FileText } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

const CertificationsAwards = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="pt-20 sm:pt-24 pb-12 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Certifications <span className="text-gradient">&amp; Awards</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* GenAI Certification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden card-hover"
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    GenAI Certification
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Certified in Generative AI, covering LLMs, prompt engineering, and building AI-powered applications.
                  </p>
                  <a
                    href={getAssetPath('/Sabyasachi_Certificate_100x.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium hover:bg-primary-100 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    View Certificate (PDF)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ola Productivity Hackathon Winner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden card-hover"
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/5 shrink-0">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={getAssetPath('/image_prize.jpeg')}
                      alt="Ola Productivity Hackathon - Prize / Winner"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 inline-flex">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Winner — Ola Productivity Hackathon
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Recognized as a winner of the Ola Productivity Hackathon for building impactful solutions.
                  </p>
                  <a
                    href={getAssetPath('/Ola_Hackathon.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium hover:bg-primary-100 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    View Award (PDF)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CertificationsAwards
