'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowLeft, ExternalLink } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { Blog } from '@/types'
import { formatDate } from '@/lib/utils'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) return null
      return (
        <div className="my-8 rounded-xl overflow-hidden">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl sm:text-4xl font-bold mt-10 mb-4 dark:text-gray-100">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-3 dark:text-gray-100">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-bold mt-6 mb-3 dark:text-gray-100">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg sm:text-xl font-bold mt-4 mb-2 dark:text-gray-100">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 my-6 italic text-gray-600 dark:text-gray-300">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-600 dark:text-primary-400 hover:underline"
      >
        {children}
      </a>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
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

interface BlogPostProps {
  blog: Blog
}

const BlogPost = ({ blog }: BlogPostProps) => {
  return (
    <section className="pt-28 pb-16 sm:pb-24 bg-white dark:bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4 dark:text-gray-100">
              {blog.title}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {blog.excerpt}
            </p>

            {blog.link && (
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Original Publication
              </a>
            )}

            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Cover Image */}
          {blog.coverImage && (
            <div className="mb-10 rounded-2xl overflow-hidden">
              <Image
                src={urlFor(blog.coverImage).width(800).height(450).url()}
                alt={blog.title}
                width={800}
                height={450}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          {/* Content */}
          {blog.content && (
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <PortableText value={blog.content} components={portableTextComponents} />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPost
