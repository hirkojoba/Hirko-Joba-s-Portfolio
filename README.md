# Hirko Joba - Portfolio Website

A modern, professional portfolio website built with React + Vite. Features clean design, smooth animations, and fully responsive layout.

## Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite 5
- **Styling:** CSS Modules
- **Fonts:** Google Fonts (Inter + Space Grotesk)

## Features

- ✨ Clean, modern design with smooth animations
- 📱 Fully responsive (mobile-first)
- 🎨 Professional color palette and typography
- 📊 Project case study cards
- 🎯 Skills categorization
- ⬆️ Scroll-to-top button
- ⚡ Lightning-fast performance with Vite

---

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 16 or higher recommended).

Check your Node version:
```bash
node --version
```

If you don't have Node.js, download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The terminal will show a local URL (usually `http://localhost:5173`)
   - Click the link or paste it into your browser
   - The site will auto-reload when you make changes!

---

## Customization Guide

### 1. Update Personal Information

**Hero Section** (`src/components/Hero.jsx`):
- Lines 17-23: Edit `personalInfo` object
- Update name, title, location, tagline
- Add your GitHub username

**About Section** (`src/components/About.jsx`):
- Lines 19-39: Edit `aboutData` object
- Update description paragraphs
- Customize your strengths

**Contact Section** (`src/components/Contact.jsx`):
- Line 16: **IMPORTANT - Update your email address!**
- Lines 20-23: Optionally add social links

### 2. Add/Edit Projects

**Projects Section** (`src/components/Projects.jsx`):
- Lines 23-86: The `projects` array contains all project data

**To add a new project:**
1. Copy one of the existing project objects (lines 23-34 for example)
2. Paste it at the end of the `projects` array
3. Update all fields:
   - `id`: Give it a unique number
   - `name`: Project name
   - `tagline`: One-line description
   - `description`: Full description
   - `highlights`: Array of 3-4 bullet points
   - `techStack`: Array of technologies used
   - `githubUrl`: Your GitHub repo URL
   - `liveUrl`: Live demo URL or `null`

**To remove a project:**
- Just delete the entire project object from the array

### 3. Update Skills

**Skills Section** (`src/components/Skills.jsx`):
- Lines 18-58: The `skillCategories` array

**To add/remove skills:**
- Edit the `skills` arrays within each category
- Add new categories by copying the structure

**To add a new category:**
```javascript
{
  title: "Your Category",
  icon: "🔥", // Any emoji
  skills: ["Skill 1", "Skill 2", "Skill 3"]
}
```

### 4. Customize Colors

**Global Styles** (`src/index.css`):
- Lines 7-14: Edit color variables
- Current palette:
  - Primary accent: `#2563EB` (deep blue)
  - Secondary accent: `#8B5CF6` (soft purple)
  - Background: `#FAFAFA` (off-white)

**To change colors:**
Replace the hex codes with your preferred colors.

### 5. Change Fonts

**HTML** (`index.html`):
- Line 10: Google Fonts import
- Current fonts: Inter (body) + Space Grotesk (headings)

**To use different fonts:**
1. Go to [fonts.google.com](https://fonts.google.com/)
2. Select your fonts
3. Copy the `<link>` tag
4. Replace line 10 in `index.html`
5. Update font variables in `src/index.css` (lines 24-25)

---

## Building for Production

When you're ready to deploy:

1. **Create production build:**
   ```bash
   npm run build
   ```

2. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

3. **Deploy:**
   - The `dist` folder contains your production-ready site
   - Upload this folder to any static hosting service

---

## Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder to Netlify
3. Done! You get a free URL

**OR** deploy from GitHub:
1. Push your code to GitHub
2. Connect Netlify to your repo
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 2: Vercel

1. Create account at [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Vercel auto-detects Vite
4. Deploy!

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. Uncomment and edit line 7 in `vite.config.js`:
   ```javascript
   base: '/your-repo-name/',
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.jsx         # Landing section
│   │   ├── About.jsx        # About me section
│   │   ├── Projects.jsx     # Project case studies
│   │   ├── Skills.jsx       # Technical skills
│   │   ├── Contact.jsx      # Contact section
│   │   ├── ScrollToTop.jsx  # Utility component
│   │   └── *.module.css     # Component styles
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

---

## Tips for Success

### Before Showing to Recruiters:

1. ✅ Update ALL placeholder content:
   - Your actual email in Contact section
   - Real GitHub URLs for projects
   - Your actual GitHub username in Hero

2. ✅ Add real project details:
   - Replace sample projects with your actual work
   - Update tech stacks to match what you used
   - Add live demo links if available

3. ✅ Proofread everything:
   - Check for typos
   - Ensure technical accuracy
   - Keep it concise and professional

4. ✅ Test responsiveness:
   - View on mobile, tablet, desktop
   - Use browser dev tools to test different screen sizes

5. ✅ Optimize performance:
   - Run `npm run build` and check the bundle size
   - Test the production build with `npm run preview`

### Making Changes:

- Always run `npm run dev` when editing
- Changes auto-reload in browser
- Edit comments show you exactly where to customize
- CSS Modules keep styles organized and scoped

---

## Troubleshooting

**Port already in use?**
- Vite will automatically try the next available port
- Or manually specify: `npm run dev -- --port 3000`

**Styles not updating?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Restart dev server

**Build fails?**
- Delete `node_modules` and run `npm install` again
- Make sure all imports are correct (case-sensitive!)
- Check for syntax errors in your edits

---

## Questions or Issues?

This portfolio is designed to be beginner-friendly. If you get stuck:
1. Check the comments in the code - they guide you
2. Read the error messages carefully
3. Google the error message
4. Check Vite docs: [vitejs.dev](https://vitejs.dev/)

---

## License

This portfolio template is free to use and customize for your personal portfolio.

---

**Built with React + Vite | Designed for Software Engineers**
