'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { Project } from '@/types'

interface ProjectsProps {
  projects?: Project[]
}

const Projects = ({ projects = [] }: ProjectsProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const personalProjects: Project[] = [
    {
      _id: 'personal-1',
      title: 'To Do App',
      slug: { current: 'todo-app' },
      description: 'A beautiful task manager built with Vibe Coding principles - clean, simple, and effective.',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://upadhyaysabyasachi.github.io/Vibe-Coding---Task-Manager/',
      githubLink: 'https://github.com/upadhyaysabyasachi/Vibe-Coding---Task-Manager',
      featured: false,
    },
    {
      _id: 'personal-2',
      title: 'Weather App - Tool Calling',
      slug: { current: 'weather-app' },
      description: 'AI-powered weather app using Groq AI with tool calling to fetch live weather data from Tomorrow.io API.',
      techStack: ['Python', 'Groq AI', 'FastAPI', 'Tomorrow.io'],
      link: 'https://upadhyaysabyasachi.github.io/WEATHER-APP/',
      githubLink: 'https://github.com/upadhyaysabyasachi/WEATHER-APP',
      featured: false,
    },
  ]

  const defaultProjects: Project[] = [
    {
      _id: '1',
      title: 'SAHELI AI - GenAI Healthcare Assistant',
      slug: { current: 'genai-healthcare' },
      description: 'AI-powered assistant for frontline health workers to monitor anemia in women, deployed across 6 blocks in Tamil Nadu.',
      techStack: ['LLMs', 'SLMs', 'Python', 'Healthcare APIs'],
      link: 'http://206.1.35.49:8501/',
      featured: true,
    },
    {
      _id: '2',
      title: 'Women Entrepreneurship Platform',
      slug: { current: 'wep' },
      description: 'National platform connecting 30,000+ women entrepreneurs with mentors, government schemes, and resources.',
      techStack: ['Product Strategy', 'Platform Design', 'Stakeholder Management'],
      link: 'https://wep.gov.in',
      featured: true,
    },
    {
      _id: '3',
      title: 'National Data Analytics Platform',
      slug: { current: 'ndap' },
      description: 'Open data platform with 3000+ datasets from 25+ government ministries, enabling data-driven decision making.',
      techStack: ['Data Engineering', 'API Design', 'Cloud Infrastructure'],
      link: 'https://ndap.niti.gov.in',
      featured: true,
    },
    {
      _id: '4',
      title: 'Fraud Detection Engine',
      slug: { current: 'fraud-detection' },
      description: 'ML-powered fraud detection system using graph algorithms to identify fraudulent ride patterns with 80% accuracy.',
      techStack: ['Apache Spark', 'GraphX', 'R', 'Machine Learning'],
      featured: false,
    },
  ]

  const displayProjects = projects.length > 0 ? projects : defaultProjects

  return (
    <section id="projects" className="pt-12 pb-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Personal Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Personal <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Side projects exploring new technologies and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden card-hover border border-gray-100 flex flex-col"
            >
              {!project.image && (
                <div className="h-48 bg-gradient-primary flex items-center justify-center">
                  {(project._id === 'personal-1' || project._id === 'personal-2') ? (
                    <div className="relative w-32 h-32">
                      <Image
                        src={project._id === 'personal-1' ? '/logos/TODO-logo.png' : '/logos/WEATHER-logo.png'}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-white text-6xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </div>
                  )}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-white text-primary-700 rounded-full border border-primary-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 mt-auto">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-semibold transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects at Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Projects at <span className="text-gradient">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building products that create impact at scale across healthcare, entrepreneurship, and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden card-hover border border-gray-100 flex flex-col"
            >
              {project.image && (
                <div className="relative h-48 bg-gradient-primary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {!project.image && (
                <div className="h-48 bg-gradient-primary flex items-center justify-center">
                  {(project._id === '2' || project._id === '3') ? (
                    <div className="relative w-32 h-32">
                      <Image
                        src={project._id === '2' ? '/logos/wep-logo.png' : '/logos/ndap-logo.png'}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-white text-6xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </div>
                  )}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-white text-primary-700 rounded-full border border-primary-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 mt-auto">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-semibold transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

