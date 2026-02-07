'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiSubstack } from 'react-icons/si'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

interface HeroProps {
  rotatingHeadlines?: string[]
  bio?: string
  imageSrc?: string
  imageAlt?: string
}

const Hero = ({ rotatingHeadlines, bio, imageSrc, imageAlt = 'Hero image' }: HeroProps) => {
  const [currentHeadline, setCurrentHeadline] = useState(0)
  
  const headlines = rotatingHeadlines || [
    'Product Leader',
    '0-1 Builder',
    'GenAI Innovator',
    'AI for Good Advocate',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [headlines.length])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Image Section - Left */}
            {imageSrc && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 flex justify-center lg:justify-start"
              >
                <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg flex flex-col items-center lg:items-start">
                  <div className="relative w-full">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={getAssetPath(imageSrc)}
                        alt={imageAlt}
                        width={600}
                        height={800}
                        className="w-full h-auto object-cover"
                        priority
                      />
                    </div>
                    {/* Decorative gradient overlay */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-purple-200 rounded-2xl opacity-20 blur-2xl -z-10" />
                  </div>
                  <a
                    href="https://www.bits-pilani.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-100 dark:border-gray-700 px-4 py-3 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
                  >
                    <Image
                      src={getAssetPath('/images/bits-logo.png')}
                      alt="BITS Pilani"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 text-center sm:text-left">
                      B.E. (Hons) Computer Science<br />
                      BITS Pilani
                    </span>
                  </a>
                  <a
                    href={getAssetPath('/resume.pdf')}
                    download
                    className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full shadow-lg transition-transform hover:scale-105"
                  >
                    Download Resume (PDF)
                  </a>
                </div>
              </motion.div>
            )}

            {/* Content Section - Right */}
            <div className={`w-full ${imageSrc ? 'lg:w-1/2' : 'max-w-4xl mx-auto'} text-center lg:text-left pb-8 overflow-hidden`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 break-words">
                  Hi, I'm{' '}
                  <span className="text-gradient">
                    Sabyasachi Upadhyay
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 h-12 sm:h-16 flex items-center justify-center lg:justify-start">
                  <motion.span
                    key={currentHeadline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"
                  >
                    {headlines[currentHeadline]}
                  </motion.span>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
              >
                {bio ||
                  "Building innovative products that drive growth and create meaningful impact. Passionate about leveraging AI and technology to solve real-world problems and empower communities."}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center px-2 sm:px-0"
              >
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-center text-sm sm:text-base"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 rounded-full font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:scale-105 transition-all duration-300 text-center text-sm sm:text-base"
                >
                  View My Work
                </a>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-12 sm:mt-16 mb-12 sm:mb-16 lg:mb-20"
              >
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                  <a
                    href="https://github.com/upadhyaysabyasachi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base md:text-lg shadow-lg transition-all hover:scale-110 hover:shadow-2xl hover:bg-gray-50 dark:hover:bg-gray-700"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl sm:text-2xl md:text-3xl" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                  <a
                    href="https://huggingface.co/sachihugsai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base md:text-lg shadow-lg transition-all hover:scale-110 hover:shadow-2xl hover:bg-yellow-50 dark:hover:bg-gray-700"
                    aria-label="HuggingFace"
                  >
                    <span className="text-xl sm:text-2xl md:text-3xl">🤗</span>
                    <span className="hidden sm:inline">HuggingFace</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sabyasachi-upadhyay-293b0134/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base md:text-lg shadow-lg transition-all hover:scale-110 hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-gray-700"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl sm:text-2xl md:text-3xl text-blue-600" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                  <a
                    href="https://topmate.io/sabyasachi_upadhyay/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base md:text-lg shadow-lg transition-all hover:scale-110 hover:shadow-2xl hover:bg-red-50 dark:hover:bg-gray-700"
                    aria-label="Topmate"
                  >
                    <span className="text-xl sm:text-2xl md:text-3xl">📅</span>
                    <span className="hidden sm:inline">Topmate</span>
                  </a>
                  <a
                    href="https://substack.com/@sabyasachiupadhyay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base md:text-lg shadow-lg transition-all hover:scale-110 hover:shadow-2xl hover:bg-orange-50 dark:hover:bg-gray-700"
                    aria-label="Substack"
                  >
                    <SiSubstack className="text-xl sm:text-2xl md:text-3xl text-orange-600" />
                    <span className="hidden sm:inline">Substack</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ArrowDown className="w-8 h-8 text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" />
      </motion.button>
    </section>
  )
}

export default Hero

