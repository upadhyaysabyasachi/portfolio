'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Award, ExternalLink, FileText, Trophy } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

const CertificationsAwards = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const hackathonPhotos = [
    {
      src: '/images/hackathon/bessemer-award.jpg',
      alt: 'Receiving the award on stage at the Bessemer Tech Catalyst hackathon',
    },
    {
      src: '/images/hackathon/bessemer-pitch.jpg',
      alt: 'Pitching Sambodh IAS on the hackathon floor',
    },
  ]

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
            <span className="text-gray-100">Awards</span>{' '}
            <span className="text-gradient">&amp; Fellowships</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Bessemer Tech Catalyst Hackathon - latest achievement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-800 rounded-2xl shadow-lg border-2 border-primary-700 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="lg:w-2/5 shrink-0">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-700">
                    <Image
                      src={getAssetPath('/images/hackathon/bessemer-cheque.jpg')}
                      alt="Holding the Second Runners-up cheque for one lakh rupees at the Bessemer Tech Catalyst hackathon"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <a
                    href={getAssetPath('/Bessemer_Second_Runners_Up_Certificate.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-3 rounded-xl overflow-hidden border border-gray-600 bg-white transition-transform hover:scale-[1.02]"
                    aria-label="Open the Second Runners Up certificate (PDF)"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={getAssetPath('/images/hackathon/bessemer-certificate.jpg')}
                        alt="Second Runners Up certificate of achievement, Bessemer Tech Catalyst, awarded to Sabyasachi Upadhyay"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold bg-gradient-primary text-white rounded-full">
                    <Trophy className="w-3.5 h-3.5" />
                    Latest · 5 September 2026
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2">
                    2nd Runners-up — Bessemer Tech Catalyst Hackathon
                  </h3>
                  <p className="text-sm text-primary-400 font-medium mb-4">
                    Presented by Bessemer Venture Partners · Managed by MetaMorph · Platform partner Sarvam · Polaris
                    School of Technology, Bengaluru
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Won with team <strong className="text-gray-100">Last Minute Mavericks</strong> and a prize of
                    ₹1,00,000, after qualifying through proctored coding rounds. We built{' '}
                    <strong className="text-gray-100">ATOM (Automated Test Orchestrator and Manager)</strong>, a
                    multi-agent harness and orchestration framework on a pipeline pattern. It scans a URL, generates
                    test cases on the fly based on coverage of the site&apos;s pages, and produces a quality test
                    report. The problem statement came from Aivar Innovations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {['Agentic AI', 'Multi-agent Orchestration', 'Pipeline Pattern', 'Automated QA'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs sm:text-sm bg-gray-900 text-primary-400 rounded-full border border-primary-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {hackathonPhotos.map((photo) => (
                      <div key={photo.src} className="relative aspect-[3/2] rounded-xl overflow-hidden bg-gray-700">
                        <Image
                          src={getAssetPath(photo.src)}
                          alt={photo.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    <a
                      href={getAssetPath('/Bessemer_Second_Runners_Up_Certificate.pdf')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      View certificate
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/sabyasachi-upadhyay-293b0134_hackathons-hackculture-bessemer-activity-7503556041725431809-a-Zh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Read the LinkedIn post
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

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
                    GenAI 100x Fellowship
                  </h3>
                  <p className="text-sm text-primary-400 font-medium mb-2">July 2025 - January 2026</p>
                  <p className="text-gray-400 dark:text-gray-200">
                    Fellowship covering LLMs, prompt engineering, and building AI-powered applications. Shipped
                    Sambodh IAS as the capstone project.
                  </p>
                </div>
              </div>
              {/* Certificate viewer - visible as in Certifications & Awards */}
              <div className="rounded-xl overflow-hidden border border-gray-600 bg-gray-900">
                <p className="text-sm font-semibold text-gray-200 text-center py-2 px-3 border-b border-gray-700">
                  GenAI 100x Certificate
                </p>
                <div className="relative w-full aspect-[3/4] min-h-[200px] sm:min-h-[280px] max-h-[320px] sm:max-h-[420px] bg-gray-700">
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
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
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
                  <p className="text-gray-400 dark:text-gray-200 mb-4">
                    Recognized as a winner of the Ola Productivity Hackathon for building impactful solutions.
                  </p>
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
