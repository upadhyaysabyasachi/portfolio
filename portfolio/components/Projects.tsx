'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { Project } from '@/types'
import { getAssetPath } from '@/lib/utils'

interface ProjectsProps {
  projects?: Project[]
}

const Projects = ({ projects = [] }: ProjectsProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const personalProjects: Project[] = [
    {
      _id: 'personal-1',
      title: 'Sambodh IAS',
      slug: { current: 'sambodh-ias' },
      description: 'AI-powered assessment platform for UPSC aspirants. Capstone project from GenAI certification: get instant, detailed feedback on answers, personalized gap analysis with targeted recommendations, and connect with verified mentors for guidance. Built to help candidates master their UPSC journey with data-driven insights.',
      techStack: ['GenAI', 'LLMs', 'Assessment', 'UPSC'],
      link: 'https://www.sambodh-ias.in/login',
      featured: false,
    },
    {
      _id: 'personal-2',
      title: 'To Do App',
      slug: { current: 'todo-app' },
      description: 'A beautiful task manager built with Vibe Coding principles - clean, simple, and effective.',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://upadhyaysabyasachi.github.io/Vibe-Coding---Task-Manager/',
      githubLink: 'https://github.com/upadhyaysabyasachi/Vibe-Coding---Task-Manager',
      featured: false,
    },
    {
      _id: 'personal-3',
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
      link: 'http://206.1.35.55:8501/',
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
  ]

  const displayProjects = projects.length > 0 ? projects : defaultProjects

  return (
    <section id="projects" className="pt-12 pb-16 sm:pb-24 bg-white dark:bg-gray-950" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Personal Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Personal <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto px-4 sm:px-0">
            Side projects exploring new technologies and creative solutions
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 sm:mb-24">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden card-hover border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              {!project.image && (
                <div className="h-48 bg-gradient-primary flex items-center justify-center">
                  {(project._id === 'personal-1' || project._id === 'personal-2' || project._id === 'personal-3') ? (
                    <div className="relative w-32 h-32">
                      <Image
                        src={getAssetPath(
                          project._id === 'personal-1'
                            ? '/logos/sambodh-ias-logo.png'
                            : project._id === 'personal-2'
                              ? '/logos/TODO-logo.png'
                              : '/logos/WEATHER-logo.png'
                        )}
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

              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 dark:text-gray-100">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200 mb-4 flex-1">{project.description}</p>

                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs sm:text-sm bg-white dark:bg-gray-800 text-primary-700 dark:text-primary-400 rounded-full border border-primary-200 dark:border-primary-700"
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
                      className="flex items-center gap-2 text-sm sm:text-base text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors"
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
                      className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 font-semibold transition-colors"
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

        {/* NextLeap Fellowship Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 sm:p-8 border-2 border-primary-200 dark:border-primary-700 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <Image
                  src={getAssetPath('/images/NextLeap-logo.jpg')}
                  alt="NextLeap Product Manager Fellowship Top Fellow"
                  fill
                  className="rounded-2xl object-contain"
                  sizes="(min-width: 768px) 12rem, (min-width: 640px) 10rem, 8rem"
                  priority={false}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  🏆 Top Fellow - NextLeap Product Manager Fellowship
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                  Recognized as the Top Fellow in the NextLeap Product Manager Fellowship program. 
                  Capstone project: <strong>Prime Bee</strong> - An AI-powered digital assistant for Amazon Prime Video 
                  to solve the "Paradox of Choice" problem, featuring natural language search and personalized content discovery.
                </p>
                <a
                  href="https://assets.nextleap.app/submissions/NLAmazonPrimeVideo-56dae85e-11b4-4ee6-9395-8da4fe57b06a.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Capstone Project
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects at Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Projects at <span className="text-gradient">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto px-4 sm:px-0">
            Building products that create impact at scale across healthcare, entrepreneurship, and technology
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden card-hover border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              {project._id === '1' ? (
                <div className="relative w-full aspect-video bg-gradient-primary">
                  <iframe
                    src="https://www.youtube.com/embed/UdLFEb0n0c4"
                    title="SAHELI AI - GenAI Healthcare Assistant"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              ) : project._id === '3' ? (
                <div className="relative w-full aspect-video bg-gradient-primary">
                  <iframe
                    src="https://www.youtube.com/embed/PLw_BAaROvI"
                    title="National Data Analytics Platform"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              ) : project.image ? (
                <div className="relative h-48 bg-gradient-primary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-primary flex items-center justify-center">
                  {project._id === '2' ? (
                    <div className="relative w-32 h-32">
                      <Image
                        src={getAssetPath('/logos/wep-logo.png')}
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

              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 dark:text-gray-100">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200 mb-4 flex-1">{project.description}</p>

                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs sm:text-sm bg-white dark:bg-gray-800 text-primary-700 dark:text-primary-400 rounded-full border border-primary-200 dark:border-primary-700"
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
                      className="flex items-center gap-2 text-sm sm:text-base text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors"
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
                      className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 font-semibold transition-colors"
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

