# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 14 (App Router) and Sanity.io CMS. The project lives in the `/portfolio` subdirectory. Configured for dual deployment: GitHub Pages (static export) and Vercel (SSR).

## Essential Commands

```bash
# Navigate to project directory first
cd portfolio/

# Development
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint

# Sanity CMS
sanity login         # Login to Sanity (global CLI)
sanity init          # Initialize Sanity project
```

**Note**: The CMS admin panel is accessible at `/admin` route (e.g., http://localhost:3000/admin)

## Architecture

### Deployment Modes

The project supports two deployment configurations via environment variables:

1. **GitHub Pages** (Static Export):
   - Set `NODE_ENV=production` and `USE_BASEPATH=true`
   - Exports to `/out` directory with basePath `/portfolio`
   - Configured in [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

2. **Vercel** (SSR/SSG):
   - Standard Next.js deployment without basePath
   - Set `NODE_ENV=production` only

Configuration in [next.config.js](portfolio/next.config.js):
```javascript
output: isProduction ? 'export' : undefined
basePath: useBasePath ? '/portfolio' : undefined
```

### Data Flow

```
Sanity CMS (sanity.io)
    ↓
GROQ Queries (sanity/lib/queries.ts)
    ↓
Server Components (app/page.tsx)
    ↓
UI Components (components/)
```

**Server-Side Data Fetching**: All Sanity data is fetched server-side in components using `client.fetch()` with GROQ queries. No client-side data fetching is used.

### Content Types (Sanity Schemas)

Located in [sanity/schemas/](portfolio/sanity/schemas/):

1. **project.ts**: Projects with title, description, tech stack, images, links
2. **blog.ts**: Blog posts with rich text (Portable Text), categories, tags
3. **settings.ts**: Global site settings (taglines, social links, featured content)

Type definitions are in [types/index.ts](portfolio/types/index.ts).

### Component Structure

Single-page application with section components:

- [app/page.tsx](portfolio/app/page.tsx) - Homepage that composes all sections
- [components/Hero.tsx](portfolio/components/Hero.tsx) - Hero section with rotating headlines
- [components/About.tsx](portfolio/components/About.tsx) - About section (hardcoded content)
- [components/Experience.tsx](portfolio/components/Experience.tsx) - Experience timeline (hardcoded)
- [components/Projects.tsx](portfolio/components/Projects.tsx) - Projects grid (CMS-driven)
- [components/Ideas.tsx](portfolio/components/Ideas.tsx) - Blog posts (CMS-driven)
- [components/Contact.tsx](portfolio/components/Contact.tsx) - Contact form and social links

**Important**: `About` and `Experience` components have hardcoded content. `Projects` and `Ideas` fetch from Sanity CMS.

### Styling

- **Tailwind CSS** with custom configuration in [tailwind.config.ts](portfolio/tailwind.config.ts)
- **Framer Motion** for animations (used extensively throughout components)
- **Color scheme**: Blue (#0ea5e9) and Purple (#a855f7) gradients
- **Fonts**: Poppins (headings) and Inter (body) via Google Fonts

## Environment Setup

Required environment variables in `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_CONTACT_EMAIL=sabyasachi.upadhyay4@gmail.com
```

**CORS Configuration**: After creating a Sanity project, add `http://localhost:3000` as an allowed origin in the Sanity dashboard (manage.sanity.io → API → CORS).

## Key Implementation Details

### Sanity Client Configuration

The Sanity client is configured in [sanity/lib/client.ts](portfolio/sanity/lib/client.ts) with these settings:
- `useCdn: false` for real-time content updates in development
- `apiVersion: '2024-01-01'` - should match env variable
- `perspective: 'published'` - only fetch published content

### Image Handling

Images are served from Sanity CDN:
- Remote patterns configured in [next.config.js](portfolio/next.config.js) for `cdn.sanity.io`
- Images are unoptimized (`unoptimized: true`) for static export compatibility
- Use `@sanity/image-url` builder for image transformations

### Static Export Considerations

When `output: 'export'` is set:
- No API routes or server-side features
- All data must be fetched at build time
- Images must be unoptimized
- `trailingSlash: true` required for proper routing

## Common Development Tasks

### Adding CMS Content

1. Start dev server: `npm run dev`
2. Navigate to http://localhost:3000/admin
3. Login with Sanity credentials
4. Create/edit Projects, Blogs, or Settings

### Modifying Hardcoded Content

Edit directly in component files:
- Hero headlines: [components/Hero.tsx](portfolio/components/Hero.tsx)
- About story: [components/About.tsx](portfolio/components/About.tsx)
- Experience: [components/Experience.tsx](portfolio/components/Experience.tsx)

### Adding New GROQ Queries

1. Add query to [sanity/lib/queries.ts](portfolio/sanity/lib/queries.ts)
2. Use `groq` template literal for syntax highlighting
3. Fetch in component: `await client.fetch(yourQuery)`

### Modifying Schemas

1. Edit schema in [sanity/schemas/](portfolio/sanity/schemas/)
2. Update type definition in [types/index.ts](portfolio/types/index.ts)
3. Restart dev server to see changes in CMS

## Deployment Notes

### GitHub Pages

Automatic deployment on push to `main` branch via GitHub Actions. Requires:
- GitHub Pages enabled in repository settings
- Source set to "GitHub Actions"
- Secrets configured (if using private Sanity project)

### Vercel

Standard Next.js deployment:
1. Import repository in Vercel
2. Add environment variables
3. Deploy (auto-detects Next.js configuration)

The admin panel will be available at `yourdomain.com/admin`.
