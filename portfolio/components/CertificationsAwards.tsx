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
    <section id="certifications" className="pt-20 sm:pt-24 pb-12 bg-gray-950 dark:bg-gray-950" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-gray-100">Certifications</span>{' '}
            <span className="text-gradient">&amp; Awards</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* GenAI Certification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden card-hover"
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2">
                    GenAI Certification
                  </h3>
                  <p className="text-gray-400">
                    Certified in Generative AI, covering LLMs, prompt engineering, and building AI-powered applications.
                  </p>
                </div>
              </div>
              {/* Certificate viewer - visible as in Certifications & Awards */}
              <div className="rounded-xl overflow-hidden border border-gray-600 bg-gray-900">
                <p className="text-sm font-semibold text-gray-300 text-center py-2 px-3 border-b border-gray-700">
                  GenAI Certification
                </p>
                <div className="relative w-full aspect-[3/4] min-h-[280px] max-h-[420px] bg-gray-700">
                  <iframe
                    src={`${getAssetPath('/Sabyasachi_Certificate_100x.pdf')}#view=FitH`}
                    title="GenAI 100x Certificate"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
                <a
                  href={getAssetPath('/Sabyasachi_Certificate_100x.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-primary-400 hover:text-primary-300 font-medium py-2.5 border-t border-gray-700 hover:bg-gray-800/50 transition-colors"
                >
                  Open in new tab
                </a>
              </div>
            </div>
          </motion.div>

          {/* Ola Productivity Hackathon Winner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800 dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden card-hover"
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/5 shrink-0">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-700">
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
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2">
                    Winner — Ola Productivity Hackathon
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Recognized as a winner of the Ola Productivity Hackathon for building impactful solutions.
                  </p>
                  <a
                    href={getAssetPath('/Ola_Hackathon.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-900/50 text-primary-300 rounded-lg font-medium hover:bg-primary-800/50 transition-colors"
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
