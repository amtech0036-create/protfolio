# Md Anjamul Islam Anim - Portfolio

A modern, professional portfolio website built with React, Vite, and Tailwind CSS.

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 3
- Lucide React Icons

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ErpShowcase.jsx
│   ├── Services.jsx
│   ├── Experience.jsx
│   ├── WorkProcess.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── SectionTitle.jsx
├── data/
│   ├── profile.js
│   ├── projects.js
│   ├── skills.js
│   ├── services.js
│   ├── experience.js
│   ├── erpFeatures.js
│   └── workProcess.js
├── hooks/
│   ├── useScrollAnimation.js
│   └── useDarkMode.js
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

All personal data is centralized in `src/data/` files. Edit these files to update:

- **profile.js** - Name, title, contact info, social links
- **projects.js** - Project details and URLs
- **skills.js** - Technical skills by category
- **services.js** - Services offered
- **experience.js** - Work experience and education

## Resume

Place your resume PDF at `public/resume.pdf` to enable the download button.

## Deployment to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy

The site will be automatically deployed with every push.
