# Omar Alrayyan — Portfolio

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

## Deploy to Netlify

- Drag-and-drop the `dist/` folder onto https://app.netlify.com/drop, or
- Connect the repo in Netlify and set:
  - Build command: `npm run build`
  - Publish directory: `dist`

## Structure

```
src/
  components/   Nav, Hero, Marquee, Projects, Experience, Tools, Blog, Contact, Footer
  lib/motion.js shared Framer Motion variants (fadeUp, stagger)
  index.css     Tailwind v4 theme tokens + grain overlay + reduced-motion handling
```

## Editing content

- Hero bio, socials, stats: `src/components/Hero.jsx`
- Projects: `src/components/Projects.jsx`
- Experience: `src/components/Experience.jsx`
- Tools: `src/components/Tools.jsx`
- Blog posts: `src/components/Blog.jsx`
- Contact form fields: `src/components/Contact.jsx` (currently client-side only — wire `handleSubmit` to your backend/email service to actually receive messages)
