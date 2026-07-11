# Abdalkarim Kehail — Portfolio

React + Vite + Tailwind CSS v4 + Framer Motion single-page portfolio.

## Run locally

```
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```
npm run build
```

Output goes to `dist/`.

## Deploy

Deployed automatically to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

Live at: https://abdalkarimkehail-oss.github.io/portfolio-/

## Structure

```
src/
  components/   Nav, Hero, Projects, Experience, Tools, Blog, Contact, Footer
  lib/motion.js shared Framer Motion variants (fadeUp, stagger)
  lib/icons.jsx shared inline icon set
  index.css     Tailwind v4 theme tokens + grain overlay + reduced-motion handling
```

## Editing content

- Hero bio, socials, stats: `src/components/Hero.jsx`
- Projects: `src/components/Projects.jsx`
- Experience: `src/components/Experience.jsx`
- Skills/tools: `src/components/Tools.jsx`
- Blog posts: `src/components/Blog.jsx`
- Contact form fields: `src/components/Contact.jsx` (currently client-side only — wire `handleSubmit` to a backend/email service to actually receive messages)
