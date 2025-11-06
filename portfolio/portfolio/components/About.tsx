'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Target, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and approaches to solve complex problems.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Building products that create meaningful change and drive measurable outcomes.',
    },
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'Leveraging technology to empower communities and create inclusive growth.',
    },
  ]

  return (
    <section id="about" className="pt-24 pb-12 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                I'm a <strong>Product Leader</strong> and <strong>Growth Strategist</strong> with a passion for leveraging{' '}
                <strong>AI for social good</strong>. My journey spans from building fraud detection systems at Ola to shaping
                national-level platforms at NITI Aayog, and now leading GenAI initiatives at Ola Foundation.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                What drives me is the intersection of <strong>technology, impact, and scale</strong>. Whether it's empowering
                30,000+ women entrepreneurs, deploying AI assistants for healthcare workers, or diving deep into Web3 and
                frontier technologies, I'm always looking for opportunities to create meaningful change.
              </p>
              <p className="text-xl leading-relaxed">
                Beyond work, I'm a stand-up comedian, Manchester United fan, and lifelong learner who's passionate about
                exploring new technologies and ideas that can make the world a better place.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-0"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl card-hover border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
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

