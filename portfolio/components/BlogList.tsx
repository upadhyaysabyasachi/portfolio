'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react'
import { Blog } from '@/types'
import { formatDate } from '@/lib/utils'

interface BlogListProps {
  blogs?: Blog[]
}

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
  },
  {
    _id: '3',
    title: 'Clinical Decision Support System – Health Pilot Study',
    slug: { current: 'cdss-health-pilot' },
    excerpt: 'Evaluation of AI-based clinical decision support systems in India\'s aspirational districts.',
    publishedAt: '2021-11-20',
    category: 'Healthcare Tech',
    featured: true,
    link: 'https://www.niti.gov.in/sites/default/files/2023-02/HAICReportNITIAayog.pdf',
  },
  {
    _id: '4',
    title: 'Promoting Medical Tourism via Ayushman Bharat Digital Mission',
    slug: { current: 'medical-tourism-abdm' },
    excerpt: 'Economic Times article on leveraging digital health infrastructure for medical tourism.',
    publishedAt: '2023-08-05',
    category: 'Healthcare Policy',
    featured: false,
    link: 'https://health.economictimes.indiatimes.com/news/industry/promoting-medical-tourism-via-ayushman-bharat-digital-mission/87301743',
  },
]

const BlogList = ({ blogs = [] }: BlogListProps) => {
  const displayBlogs = blogs.length > 0 ? blogs : defaultBlogs
  const categories = ['All', ...Array.from(new Set(displayBlogs.map(b => b.category).filter(Boolean)))]
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? displayBlogs
    : displayBlogs.filter(b => b.category === activeCategory)

  return (
    <section className="pt-28 pb-16 sm:pb-24 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Research & <span className="text-gradient">Publications</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
            Thoughts on product, technology, policy, and creating meaningful impact
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as string)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Blog cards */}
        <div className="max-w-5xl mx-auto space-y-6">
          {filtered.map((blog, index) => (
            <motion.article
              key={blog._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg card-hover border border-gray-100 dark:border-gray-700 group"
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
                    {blog.featured && (
                      <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full border border-yellow-200 dark:border-yellow-700">
                        Featured
                      </span>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={blog.publishedAt}>{formatDate(blog.publishedAt)}</time>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 dark:text-gray-100 transition-colors mb-3">
                    {blog.title}
                  </h2>
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

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500 dark:text-gray-400">No posts found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogList
