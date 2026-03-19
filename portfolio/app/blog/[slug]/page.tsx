import { client } from '@/sanity/lib/client'
import { blogBySlugQuery, blogsQuery } from '@/sanity/lib/queries'
import { Blog } from '@/types'
import BlogPost from '@/components/BlogPost'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  try {
    const blog: Blog | null = await client.fetch(blogBySlugQuery, { slug })
    if (!blog) return { title: 'Post Not Found' }
    return {
      title: `${blog.title} | Sabyasachi Upadhyay`,
      description: blog.excerpt,
    }
  } catch {
    return { title: 'Blog | Sabyasachi Upadhyay' }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  let blog: Blog | null = null

  try {
    blog = await client.fetch(blogBySlugQuery, { slug })
  } catch {
    notFound()
  }

  if (!blog) {
    notFound()
  }

  if (blog.link && !blog.content) {
    const { redirect } = await import('next/navigation')
    redirect(blog.link)
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogPost blog={blog} />
      <Footer />
    </main>
  )
}
