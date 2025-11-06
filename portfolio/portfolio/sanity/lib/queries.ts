import { groq } from 'next-sanity'

export const settingsQuery = groq`
  *[_type == "settings"][0] {
    title,
    tagline,
    rotatingHeadlines,
    bio,
    email,
    phone,
    location,
    socialLinks,
    "featuredProjects": featuredProjects[]-> {
      _id,
      title,
      slug,
      description,
      image,
      techStack,
      link
    },
    "featuredBlogs": featuredBlogs[]-> {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category
    }
  }
`

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    longDescription,
    image,
    techStack,
    link,
    githubLink,
    featured
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    longDescription,
    image,
    techStack,
    link,
    githubLink
  }
`

export const blogsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    category,
    tags,
    featured
  }
`

export const blogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    coverImage,
    publishedAt,
    category,
    tags
  }
`

