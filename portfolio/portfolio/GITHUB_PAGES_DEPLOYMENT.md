# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer

## Deployment Steps

### 1. Create a GitHub Repository

**Option A: User/Organization Site** (Recommended - deploys to `username.github.io`)
- Create a repository named: `yourusername.github.io`
- Replace `yourusername` with your actual GitHub username

**Option B: Project Site** (Deploys to `username.github.io/repo-name`)
- Create a repository with any name (e.g., `portfolio`)
- You'll need to uncomment the `basePath` and `assetPrefix` lines in `next.config.js`

### 2. Initialize Git (if not already done)

```bash
cd /Users/sabyasachiupadhyay/Documents/PORTFOLIO-WEBSITE/portfolio
git init
git add .
git commit -m "Initial commit"
```

### 3. Connect to GitHub Repository

```bash
# Replace with your repository URL
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**

### 5. Update Configuration (If using Project Site)

If you chose Option B (project site), edit `next.config.js`:

```javascript
// Uncomment and update these lines:
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name',
```

Then commit and push the changes:

```bash
git add next.config.js
git commit -m "Update config for project site"
git push
```

### 6. Deploy

The GitHub Action will automatically run when you push to the `main` branch. 

To manually trigger a deployment:
1. Go to your repository on GitHub
2. Click on **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow**

### 7. Access Your Site

**User/Organization Site:** `https://yourusername.github.io`
**Project Site:** `https://yourusername.github.io/repo-name`

## Environment Variables

If you need environment variables (like Sanity credentials), add them in:
1. GitHub Repository → Settings → Secrets and variables → Actions
2. Add your secrets (e.g., `NEXT_PUBLIC_SANITY_PROJECT_ID`)

## Updating Your Site

Every time you push changes to the `main` branch, GitHub Actions will automatically rebuild and deploy your site.

```bash
git add .
git commit -m "Update content"
git push
```

## Important Notes

- **Sanity Admin Portal Removed**: The `/admin` route has been removed because GitHub Pages only supports static sites. To edit content, you can:
  - Use Sanity Studio separately at `studio.sanity.io/your-project-id`
  - Deploy Sanity Studio to Vercel/Netlify
  
- **Build Time**: The first deployment might take 2-5 minutes
- **Custom Domain**: You can add a custom domain in GitHub Pages settings

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Verify `next.config.js` is correctly configured

### Images Not Loading
- Make sure all images are in the `/public` folder
- Check that image paths start with `/` (e.g., `/logos/wep-logo.png`)

### 404 Errors
- Ensure `trailingSlash: true` is set in `next.config.js`
- Check that `basePath` is correctly configured for project sites

## Need Help?

- [Next.js Static Exports Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

