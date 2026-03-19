export default {
  name: 'chatDataSource',
  title: 'Chat Data Sources',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Source Name',
      type: 'string',
      description: 'e.g., "LinkedIn Profile", "Resume", "Cover Letter"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sourceType',
      title: 'Source Type',
      type: 'string',
      options: {
        list: [
          { title: 'URL (webpage)', value: 'url' },
          { title: 'PDF Document', value: 'pdf' },
          { title: 'Plain Text', value: 'text' },
          { title: 'Uploaded File', value: 'file' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'URL to fetch content from (for URL source type)',
      hidden: ({ parent }: any) => parent?.sourceType !== 'url',
    },
    {
      name: 'file',
      title: 'File Upload',
      type: 'file',
      description: 'Upload a PDF or document',
      hidden: ({ parent }: any) => parent?.sourceType !== 'pdf' && parent?.sourceType !== 'file',
    },
    {
      name: 'textContent',
      title: 'Text Content',
      type: 'text',
      rows: 10,
      description: 'Paste text content directly (for plain text source type)',
      hidden: ({ parent }: any) => parent?.sourceType !== 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Brief description of what this source contains',
    },
    {
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle this source on/off for the chat context',
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      initialValue: 0,
      description: 'Higher priority sources appear first in context (higher = more important)',
    },
  ],
  orderings: [
    {
      title: 'Priority, High to Low',
      name: 'priorityDesc',
      by: [{ field: 'priority', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'sourceType',
      enabled: 'enabled',
    },
    prepare({ title, subtitle, enabled }: any) {
      return {
        title: `${enabled ? '' : '[Disabled] '}${title}`,
        subtitle: subtitle?.toUpperCase(),
      }
    },
  },
}
