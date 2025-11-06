export interface Project {
  _id: string
  title: string
  slug: { current: string }
  description: string
  longDescription?: any[]
  image?: any
  techStack?: string[]
  link?: string
  githubLink?: string
  featured?: boolean
}

export interface Blog {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  content?: any[]
  coverImage?: any
  publishedAt: string
  category?: string
  tags?: string[]
  featured?: boolean
}

export interface Settings {
  title: string
  tagline?: string
  rotatingHeadlines?: string[]
  bio?: string
  email?: string
  phone?: string
  location?: string
  socialLinks?: {
    linkedin?: string
    github?: string
    twitter?: string
    medium?: string
  }
  featuredProjects?: Project[]
  featuredBlogs?: Blog[]
}

export interface Experience {
  company: string
  role: string
  duration: string
  description: string
  highlights: string[]
  current?: boolean
}

