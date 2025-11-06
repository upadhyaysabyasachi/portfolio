'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiSubstack } from 'react-icons/si'

interface HeroProps {
  rotatingHeadlines?: string[]
  bio?: string
}

const Hero = ({ rotatingHeadlines, bio }: HeroProps) => {
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
          className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
              Hi, I'm{' '}
              <span className="text-gradient whitespace-nowrap">
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
            <div className="text-3xl md:text-4xl font-semibold text-gray-700 h-16 flex items-center justify-center">
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
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {bio ||
              "Building innovative products that drive growth and create meaningful impact. Passionate about leveraging AI and technology to solve real-world problems and empower communities."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-full font-semibold hover:bg-primary-50 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16"
          >
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/upadhyaysabyasachi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl font-semibold text-gray-800 text-lg shadow-lg transition-all hover:scale-110 hover:shadow-2xl hover:bg-gray-50"
                aria-label="GitHub"
              >
                <FaGithub className="text-3xl" />
                <span>GitHub</span>
              </a>
              <a
                href="https://huggingface.co/sachihugsai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl font-semibold text-gray-800 text-lg shadow-lg transition-all hover:scale-110 hover:shadow-2xl hover:bg-yellow-50"
                aria-label="HuggingFace"
              >
                <span className="text-3xl">🤗</span>
                <span>HuggingFace</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sabyasachi-upadhyay-293b0134/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl font-semibold text-gray-800 text-lg shadow-lg transition-all hover:scale-110 hover:shadow-2xl hover:bg-blue-50"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-3xl text-blue-600" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://topmate.io/sabyasachi_upadhyay/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl font-semibold text-gray-800 text-lg shadow-lg transition-all hover:scale-110 hover:shadow-2xl hover:bg-red-50"
                aria-label="Topmate"
              >
                <span className="text-3xl">📅</span>
                <span>Topmate</span>
              </a>
              <a
                href="https://substack.com/@sabyasachiupadhyay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl font-semibold text-gray-800 text-lg shadow-lg transition-all hover:scale-110 hover:shadow-2xl hover:bg-orange-50"
                aria-label="Substack"
              >
                <SiSubstack className="text-3xl text-orange-600" />
                <span>Substack</span>
              </a>
            </div>
          </motion.div>
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
        <ArrowDown className="w-8 h-8 text-gray-400 hover:text-primary-600 transition-colors" />
      </motion.button>
    </section>
  )
}

export default Hero

