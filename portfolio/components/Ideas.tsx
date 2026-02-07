'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Blog } from '@/types'
import { formatDate, getAssetPath } from '@/lib/utils'

interface IdeasProps {
  blogs?: Blog[]
}

const Ideas = ({ blogs = [] }: IdeasProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const defaultBlogs: Blog[] = [
    {
      _id: '1',
      title: 'Digital Banks: A Proposal for Licensing & Regulatory Regime for India',
      slug: { current: 'digital-banks-india' },
      excerpt: 'Comprehensive strategy paper on building a regulatory framework for digital banking in India.',
      publishedAt: '2022-06-15',
      category: 'Fintech',
      featured: true,
      link: 'https://www.niti.gov.in/sites/default/files/2023-02/DigitalBanking07202022_compressed.pdf',
    },
    {
      _id: '2',
      title: 'Moving the Needle – Creating an Enabling Environment for Women-led Enterprises',
      slug: { current: 'women-enterprises' },
      excerpt: 'Research on building ecosystems that support and empower women entrepreneurs across India.',
      publishedAt: '2023-03-10',
      category: 'Social Impact',
      featured: true,
      link: 'https://www.niti.gov.in/sites/default/files/2021-03/MovingTheNeedle_08032021-compressed.pdf',
      // TODO: Add the correct external URL here or via Sanity CMS
    },
    {
      _id: '3',
      title: 'Clinical Decision Support System – Health Pilot Study',
      slug: { current: 'cdss-health-pilot' },
      excerpt: 'Evaluation of AI-based clinical decision support systems in India\'s aspirational districts.',
      publishedAt: '2021-11-20',
      category: 'Healthcare Tech',
      featured: true,
      link: 'https://www.niti.gov.in/sites/default/files/2023-02/HAICReportNITIAayog.pdf'
      
      // TODO: Add the correct external URL here or via Sanity CMS
    },
    {
      _id: '4',
      title: 'Promoting Medical Tourism via Ayushman Bharat Digital Mission',
      slug: { current: 'medical-tourism-abdm' },
      excerpt: 'Economic Times article on leveraging digital health infrastructure for medical tourism.',
      publishedAt: '2023-08-05',
      category: 'Healthcare Policy',
      featured: false,
      link: 'https://health.economictimes.indiatimes.com/news/industry/promoting-medical-tourism-via-ayushman-bharat-digital-mission/87301743'
      // TODO: Add the correct external URL here or via Sanity CMS
    },
  ]

  const displayBlogs = blogs.length > 0 ? blogs : defaultBlogs

  const categoryColors: Record<string, string> = {
    'Fintech': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700',
    'Social Impact': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700',
    'Healthcare Tech': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700',
    'Healthcare Policy': 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-700',
    'product': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700',
    'ai': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700',
    'growth': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700',
    'impact': 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-700',
    'personal': 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700',
  }

  // The section heading for Ideas is below
  // It's a <h2> with "Ideas & Writings"
  // It is rendered inside a motion.div with intro/description below it
  // See below (copied for clarity):
  // <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
  //   Ideas & <span className="text-gradient">Writings</span>
  // </h2>

  return (
    <section id="ideas" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Heading is here */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Research and  <span className="text-gradient">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto px-4 sm:px-0">
            Thoughts on product, technology, policy, and creating meaningful impact
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {displayBlogs.map((blog, index) => (
            <motion.article
              key={blog._id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg card-hover border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {blog.category && (
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                          categoryColors[blog.category] || 'bg-gray-100 text-gray-700 border-gray-200'
                        }`}
                      >
                        {blog.category}
                      </span>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={blog.publishedAt}>{formatDate(blog.publishedAt)}</time>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-3">
                    {blog._id === '2' && (
                      <div className="flex-shrink-0">
                        <Image
                          src={getAssetPath('/logos/wep-logo.png')}
                          alt="Women Entrepreneurship Platform"
                          width={64}
                          height={64}
                          className="object-contain rounded-xl"
                        />
                      </div>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 dark:text-gray-100 transition-colors">
                      {blog.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 mb-4 leading-relaxed">{blog.excerpt}</p>

                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag) => (
                        <span key={tag} className="text-sm text-gray-500 dark:text-gray-300">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={blog.link || `/blog/${blog.slug.current}`}
                    target={blog.link ? '_blank' : undefined}
                    rel={blog.link ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors group-hover:gap-3"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-all" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ideas

