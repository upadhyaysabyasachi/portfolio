# CMS Content Management Guide

A comprehensive guide to managing content on your portfolio website using Sanity Studio.

## 📍 Accessing the CMS

**URL**: `http://localhost:3000/admin` (local) or `https://yourdomain.com/admin` (production)

**Login**: Use your Sanity.io credentials

## 📋 Content Types Overview

Your CMS has three main content types:

1. **Projects** - Showcase your work
2. **Blog Posts & Ideas** - Share your thoughts and writings
3. **Settings** - Configure site-wide settings

---

## 1. 📂 Managing Projects

Projects showcase your portfolio work with images, descriptions, and tech stack.

### Creating a New Project

1. Click **Projects** in the left sidebar
2. Click **Create** button (top right)
3. Fill in the form:

#### Required Fields

- **Title**: Name of your project
  - Example: "GenAI Healthcare Assistant"
  
- **Slug**: URL-friendly version (auto-generated)
  - Click "Generate" next to the slug field
  - Example: `genai-healthcare-assistant`
  
- **Description**: Brief overview (1-2 sentences)
  - Example: "AI-powered assistant for frontline health workers to monitor anemia in women."

#### Optional Fields

- **Long Description**: Detailed project information
  - Use the rich text editor
  - Add headings, bullet points, links
  
- **Image**: Project thumbnail/cover
  - Click "Upload" or drag & drop
  - Recommended size: 1200x800px
  - Max file size: 2MB
  
- **Tech Stack**: Technologies used
  - Click "+ Add item"
  - Enter each technology separately
  - Example: "Python", "Next.js", "TensorFlow"
  
- **Link**: Live project URL
  - Example: `https://wep.gov.in`
  
- **GitHub Link**: Repository URL
  - Example: `https://github.com/username/project`
  
- **Featured**: Toggle to show on homepage
  - Only featured projects appear in hero section
  
- **Order**: Sort order (0 = first)
  - Lower numbers appear first

4. Click **Publish** (bottom right)

### Editing a Project

1. Click **Projects** → Select project
2. Make changes
3. Click **Publish** to save

### Deleting a Project

1. Click **Projects** → Select project
2. Click the **⋮** menu (top right)
3. Select **Delete**
4. Confirm deletion

---

## 2. ✍️ Managing Blog Posts & Ideas

Share your thoughts, frameworks, and insights.

### Creating a New Blog Post

1. Click **Blog Posts & Ideas** in sidebar
2. Click **Create** button

#### Required Fields

- **Title**: Post title
  - Example: "Digital Banks: A Regulatory Framework for India"
  
- **Slug**: URL-friendly version
  - Click "Generate"
  - Example: `digital-banks-regulatory-framework`
  
- **Excerpt**: Summary (150-200 characters)
  - This appears in blog listings
  - Example: "Comprehensive strategy paper on building a regulatory framework for digital banking in India."

#### Content Editor

The rich text editor supports:

**Formatting**:
- **Bold**, *Italic*, `Code`
- Headings (H1-H4)
- Bullet lists and numbered lists
- Block quotes

**Links**:
1. Select text
2. Click link icon
3. Enter URL
4. Click "Insert"

**Images**:
1. Click image icon in toolbar
2. Upload or select image
3. Add alt text for accessibility

**Code Blocks**:
1. Click code block icon
2. Paste code
3. Select language (optional)

#### Optional Fields

- **Cover Image**: Featured image
  - Recommended: 1600x900px
  - Appears at top of blog post
  
- **Published At**: Publication date/time
  - Auto-filled with current time
  - Can be changed for scheduling
  
- **Category**: Post category
  - Product Management
  - AI & Technology
  - Growth Strategy
  - Social Impact
  - Personal Reflections
  
- **Tags**: Keywords for organization
  - Click "+ Add item"
  - Enter one tag per field
  - Example: "AI", "healthcare", "product"
  
- **Featured**: Show on homepage
  - Toggle on for important posts

3. Click **Publish**

### Best Practices for Blog Posts

✅ **Do**:
- Write clear, engaging titles
- Keep excerpts under 200 characters
- Use headings to structure content
- Add relevant images
- Use tags for better organization

❌ **Avoid**:
- Very long paragraphs
- Too many categories per post
- Duplicate content
- Publishing without proofreading

---

## 3. ⚙️ Managing Site Settings

Control global site configuration.

### Accessing Settings

1. Click **Settings** in sidebar
2. Only ONE settings document should exist
3. If none exists, click **Create**

### Settings Fields

#### Basic Information

- **Site Title**: Website name
  - Example: "Sabyasachi Upadhyay - Portfolio"
  
- **Homepage Tagline**: Subtitle for hero
  - Example: "Building products that create meaningful impact"

#### Rotating Headlines

Keywords that rotate in the hero section:

1. Click "+ Add item" under **Rotating Headlines**
2. Enter headline text
3. Add 3-5 headlines for best effect
4. Examples:
   - "Product Leader"
   - "Growth Strategist"
   - "AI Innovator"
   - "AI for Good Advocate"

#### About Section

- **Short Bio**: 2-3 sentences about you
  - Appears in hero section
  - Keep it personal and engaging

#### Contact Information

- **Email**: Your email address
- **Phone**: Phone number with country code
  - Example: "+91 9741263004"
- **Location**: City, Country
  - Example: "Bengaluru, India"

#### Social Links

- **LinkedIn**: Full profile URL
  - Example: `https://linkedin.com/in/your-profile`
- **GitHub**: Profile URL
- **Twitter**: Profile URL
- **Medium**: Blog URL (optional)

#### Featured Content

Select which projects/blogs to highlight:

**Featured Projects**:
1. Click "+ Add item"
2. Select from dropdown (max 3)
3. These appear in homepage hero

**Featured Blogs**:
1. Click "+ Add item"
2. Select from dropdown (max 3)
3. These appear in ideas section

### Important: Publishing Settings

After making changes, click **Publish** at the bottom.

Settings changes are INSTANT on the live site.

---

## 📸 Working with Images

### Image Guidelines

**Formats Supported**:
- JPEG/JPG (best for photos)
- PNG (best for graphics with transparency)
- WebP (best compression, modern browsers)
- SVG (vector graphics)

**Recommended Sizes**:
- Project Images: 1200x800px
- Blog Cover Images: 1600x900px
- Profile Photos: 400x400px

**File Size**:
- Keep under 500KB for fast loading
- Compress images before upload using:
  - [TinyPNG](https://tinypng.com/)
  - [Squoosh](https://squoosh.app/)

### Uploading Images

**Method 1: Drag & Drop**
1. Drag image file from your computer
2. Drop onto the upload area

**Method 2: Click to Upload**
1. Click the upload area
2. Browse and select file
3. Click "Open"

**Method 3: URL**
1. Click "Upload from URL" (if available)
2. Paste image URL
3. Click "Upload"

### Image Hotspot

For better cropping on different screen sizes:

1. After upload, click "Edit hotspot"
2. Drag the circle to the most important part
3. This ensures that part is always visible
4. Click "Done"

---

## 🔍 Search and Filter

### Finding Content

**Search Bar** (top of CMS):
- Enter title or keyword
- Results update in real-time

**Filters**:
- Click filter icon
- Filter by:
  - Published/Draft status
  - Featured items
  - Date range

### Bulk Actions

1. Check boxes next to multiple items
2. Click bulk action menu
3. Options:
   - Publish all
   - Unpublish all
   - Delete all

---

## 📊 Content Status

### Draft vs Published

**Draft** (📝):
- Content saved but not live
- Only visible in CMS
- Shows "Draft" badge

**Published** (✅):
- Live on website
- Visible to all visitors
- Shows "Published" badge

### Publishing Workflow

1. Create content (auto-saved as draft)
2. Preview (click eye icon)
3. Make final edits
4. Click **Publish**
5. Content goes live immediately

### Unpublishing

1. Open published content
2. Click **⋮** menu (top right)
3. Select **Unpublish**
4. Content becomes draft (hidden from site)

---

## 🔄 Version History

Sanity automatically saves versions.

### Viewing History

1. Open any document
2. Click **History** tab (top right)
3. See all past versions with timestamps

### Restoring Previous Version

1. Open **History** tab
2. Click on a past version
3. Click **Restore this revision**
4. Confirm

---

## ⚡ Quick Tips

### Keyboard Shortcuts

- `Ctrl/Cmd + S` - Save draft
- `Ctrl/Cmd + Alt + P` - Publish
- `Ctrl/Cmd + K` - Quick search
- `Esc` - Close dialog

### Content Best Practices

1. **Write for humans** - Clear, conversational tone
2. **Use visuals** - Add images to break up text
3. **Optimize images** - Compress before upload
4. **Publish regularly** - Keep content fresh
5. **Preview before publishing** - Check mobile view
6. **Use drafts** - Work on multiple pieces
7. **Tag consistently** - Use same tags across posts

### SEO Tips

1. **Titles**: Keep under 60 characters
2. **Excerpts**: Under 160 characters
3. **Images**: Add descriptive alt text
4. **URLs**: Keep slugs short and descriptive
5. **Content**: Aim for 500+ words for blog posts

---

## 🆘 Troubleshooting

### Can't Upload Image

**Solution**:
- Check file size (< 2MB)
- Verify file format (JPG, PNG, WebP)
- Try different browser
- Clear cache

### Changes Not Showing on Site

**Solution**:
1. Click **Publish** (not just save)
2. Wait 30-60 seconds for cache to clear
3. Hard refresh browser (`Ctrl/Cmd + Shift + R`)
4. Clear browser cache

### CMS Not Loading

**Solution**:
1. Check internet connection
2. Verify you're logged in
3. Clear browser cache
4. Try incognito/private mode
5. Contact support

### Lost Content

**Solution**:
1. Check **History** tab
2. Restore previous version
3. Check if it's in Drafts
4. Use browser back button

---

## 📞 Support

**Questions?** 
- Email: sabyasachi.upadhyay4@gmail.com
- Sanity Support: [sanity.io/help](https://www.sanity.io/help)

---

**Happy Content Creating! ✨**

