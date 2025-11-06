# Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
cd /Users/sabyasachiupadhyay/Documents/PORTFOLIO-WEBSITE/portfolio
npm install
```

### 2. Set Up Sanity.io

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Initialize Sanity (follow prompts)
sanity init
```

When prompted:
- **Create new project?** → Yes
- **Project name:** Sabyasachi Portfolio
- **Dataset:** production
- **Output path:** Use current folder
- **Project template:** Clean project with no predefined schemas

Copy your **Project ID** from the output.

### 3. Configure Environment

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_CONTACT_EMAIL=sabyasachi.upadhyay4@gmail.com
```

Replace `your-project-id-here` with your actual Sanity Project ID.

### 4. Configure CORS in Sanity

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Navigate to **API** → **CORS Origins**
4. Click **Add CORS origin**
5. Add: `http://localhost:3000`
6. Check **Allow credentials**
7. Click **Save**

### 5. Start Development Server

```bash
npm run dev
```

Your website will be available at:
- **Website**: http://localhost:3000
- **CMS Admin**: http://localhost:3000/admin

## 📝 First Steps

### Add Initial Content

1. **Go to Admin Panel**: http://localhost:3000/admin

2. **Create Site Settings**:
   - Click **Settings** in the sidebar
   - Click **Create new Settings document** (if it doesn't exist)
   - Fill in:
     - Site Title: "Sabyasachi Upadhyay - Portfolio"
     - Homepage Tagline: Your custom tagline
     - Rotating Headlines: Add 3-4 keywords
     - Bio: Your short bio
     - Email, Phone, Location
     - Social Links (LinkedIn, GitHub, Twitter)
   - Click **Publish**

3. **Add a Project**:
   - Click **Projects** → **Create**
   - Fill in title, description, tech stack
   - Add project link
   - Toggle **Featured** to show on homepage
   - Click **Publish**

4. **Add a Blog Post**:
   - Click **Blog Posts & Ideas** → **Create**
   - Add title, excerpt, and content
   - Select category
   - Click **Publish**

5. **View Your Site**: Go to http://localhost:3000

## 🎨 Customization

### Update Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // Your primary color
    600: '#0284c7',
  },
  purple: {
    500: '#a855f7',  // Your accent color
    600: '#9333ea',
  }
}
```

### Update Personal Info

Edit hardcoded content in components:
- `components/Hero.tsx` - Hero section
- `components/About.tsx` - About story and timeline
- `components/Experience.tsx` - Work experience
- `components/Footer.tsx` - Footer personal info

## 🌐 Deploy to Production

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

Quick deploy to Vercel:

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# Then go to vercel.com and import your repository
```

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run linter
```

## ❓ Troubleshooting

### CMS Admin Not Loading

1. Check if Sanity Project ID is correct in `.env.local`
2. Verify CORS is configured in Sanity dashboard
3. Clear browser cache and reload

### Build Errors

1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Run `npm run build`

### Images Not Showing

1. Ensure images are uploaded in Sanity
2. Check network tab for image URL errors
3. Verify Sanity CDN domain in `next.config.js`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 💡 Tips

1. **Content First**: Add at least 3 projects and 2 blog posts before deploying
2. **Images**: Keep image sizes under 500KB for best performance
3. **SEO**: Fill in all meta tags in `app/layout.tsx`
4. **Mobile**: Test on mobile devices before deploying

## 🎉 You're All Set!

Your portfolio is now ready. Start adding content and customize it to make it your own!

For detailed documentation, see [README.md](./README.md)

---

**Need Help?** Email: sabyasachi.upadhyay4@gmail.com

