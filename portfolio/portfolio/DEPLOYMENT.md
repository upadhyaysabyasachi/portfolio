# Deployment Guide

This guide will walk you through deploying your portfolio website to production.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Sanity.io account with a project set up

## Step 1: Set Up Sanity.io

### 1.1 Create a Sanity Project

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Create a new project
sanity init --create-project "Sabyasachi Portfolio" --dataset production
```

Note down your **Project ID** - you'll need this for deployment.

### 1.2 Configure CORS

Go to [manage.sanity.io](https://manage.sanity.io):
1. Select your project
2. Go to **API** → **CORS Origins**
3. Add your domains:
   - `http://localhost:3000` (for development)
   - `https://your-domain.vercel.app` (for production)
   - `https://your-custom-domain.com` (if applicable)

### 1.3 Get Your Project ID

Your Sanity Project ID can be found:
- In the URL: `manage.sanity.io/projects/[PROJECT-ID]`
- Or run: `sanity debug --secrets` in your project

## Step 2: Prepare for Deployment

### 2.1 Update Environment Variables

Create a `.env.local` file (for local development):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_CONTACT_EMAIL=sabyasachi.upadhyay4@gmail.com
```

### 2.2 Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000 to test
# Visit http://localhost:3000/admin to test CMS
```

## Step 3: Deploy to Vercel

### 3.1 Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

### 3.2 Deploy on Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in with GitHub**
3. **Click "Add New Project"**
4. **Import your repository**
5. **Configure the project**:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

6. **Add Environment Variables**:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID = your-project-id
   NEXT_PUBLIC_SANITY_DATASET = production
   NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-01
   NEXT_PUBLIC_CONTACT_EMAIL = sabyasachi.upadhyay4@gmail.com
   ```

7. **Click "Deploy"**

Your site will be live at `https://your-project.vercel.app` in 2-3 minutes!

### 3.3 Configure Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS settings as instructed
4. Update Sanity CORS settings with new domain

## Step 4: Set Up Continuous Deployment

Vercel automatically deploys on every push to `main`:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Vercel automatically rebuilds and deploys

## Step 5: Initial Content Setup

### 5.1 Access Admin Panel

Visit `https://your-domain.vercel.app/admin`

### 5.2 Add Initial Site Settings

1. Go to **Settings** section
2. Fill in:
   - Site Title: "Sabyasachi Upadhyay - Portfolio"
   - Tagline: Your custom tagline
   - Rotating Headlines: 
     - "Product Leader"
     - "Growth Strategist"
     - "AI Innovator"
     - "AI for Good Advocate"
   - Bio: Your short bio
   - Email: sabyasachi.upadhyay4@gmail.com
   - Phone: +91 9741263004
   - Location: Bengaluru, India
   - Social Links:
     - LinkedIn: your-linkedin-url
     - GitHub: your-github-url
     - Twitter: your-twitter-url
3. Click **Publish**

### 5.3 Add Projects

Create your first project:
1. Go to **Projects** → **Create new Project**
2. Fill in all fields
3. Upload an image
4. Add tech stack
5. Toggle "Featured" to show on homepage
6. Click **Publish**

Add at least 3-4 projects for a good showcase.

### 5.4 Add Blog Posts

Create your first blog post:
1. Go to **Blog Posts & Ideas** → **Create new Blog**
2. Fill in title, excerpt, and content
3. Upload a cover image
4. Select category
5. Add tags
6. Click **Publish**

## Step 6: Performance Optimization

### 6.1 Image Optimization

- Upload images in WebP format when possible
- Keep images under 500KB
- Use appropriate dimensions (max 1920px width)

### 6.2 Enable Caching

Vercel automatically handles caching. For Sanity:
- Data is cached for 1 hour in production
- Revalidation happens automatically

### 6.3 Monitor Performance

Use these tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Vercel Analytics (in Vercel Dashboard)

## Step 7: Maintenance

### Update Content

Simply go to `/admin` and update content. Changes reflect immediately.

### Update Code

1. Make changes locally
2. Test with `npm run dev`
3. Push to GitHub
4. Vercel auto-deploys

### Backup

Sanity.io provides automatic backups. To export manually:
```bash
sanity dataset export production backup.tar.gz
```

## Troubleshooting

### Build Fails on Vercel

1. Check build logs in Vercel dashboard
2. Ensure all environment variables are set
3. Test build locally: `npm run build`

### CMS Not Loading

1. Verify Sanity Project ID in environment variables
2. Check CORS settings in Sanity dashboard
3. Clear browser cache

### Images Not Loading

1. Add Sanity CDN domain to Next.js config (already done)
2. Check image URLs in Sanity
3. Verify image upload completed

### Contact Form Not Working

The current setup uses `mailto:`. For production email:
1. Integrate with SendGrid/Resend
2. Add API route in Next.js
3. Update Contact.tsx component

## Security Best Practices

1. **Never commit `.env.local`** (already in .gitignore)
2. **Use environment variables** for all sensitive data
3. **Keep dependencies updated**: `npm update`
4. **Monitor Vercel logs** for suspicious activity

## Cost Estimate

- **Vercel**: Free tier supports most personal portfolios
- **Sanity.io**: Free tier includes:
  - 3 users
  - 10,000 documents
  - 1GB bandwidth
  - 5GB assets

For most personal portfolios, you'll stay within free tiers!

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Set up custom domain
3. ✅ Add initial content
4. 📧 Set up email service for contact form
5. 📊 Add Google Analytics (optional)
6. 🔍 Submit sitemap to Google Search Console

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Sanity: [sanity.io/docs](https://www.sanity.io/docs)

---

**Happy Deploying! 🚀**

