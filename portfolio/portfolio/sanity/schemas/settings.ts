export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Homepage Tagline',
      type: 'string',
    },
    {
      name: 'rotatingHeadlines',
      title: 'Rotating Headlines',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords that rotate in the hero section (e.g., "Product Leader", "Growth Strategist")',
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'github', title: 'GitHub', type: 'url' },
        { name: 'twitter', title: 'Twitter', type: 'url' },
        { name: 'medium', title: 'Medium', type: 'url' },
      ],
    },
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      validation: (Rule: any) => Rule.max(3),
    },
    {
      name: 'featuredBlogs',
      title: 'Featured Blog Posts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blog' }] }],
      validation: (Rule: any) => Rule.max(3),
    },
  ],
}

