# Vamsi Krishna Padarthi — Portfolio

Premium light portfolio built with React, TypeScript, Vite and Tailwind CSS v4.

## Run

```bash
npm install
npm run dev        # local development
npm run lint       # oxlint
npm run build      # type-check + production build
npm run preview    # serve the production build
```

## Structure

```
src/
  data/         All content (profile, experience, skills, framework, projects, AI) — edit text here
  types/        Shared TypeScript types
  components/
    layout/     Sidebar (lg+), TabletHeader (md), MobileHeader + BottomNav (<md), Footer
    sections/   Hero, About, Experience, Skills, Framework, Projects, AiAutomation, Contact
    ui/         Section, Disclosure (accessible expandable), Tag, LinkButton, ProfilePhoto, BrandIcons
  hooks/        useActiveSection (scroll-aware navigation)
  index.css     Design tokens (@theme): colours, fonts, shadows
public/
  images/       Optimized photo variants (resized/cropped only, no filters)
  resume/       Downloadable resume PDF
```

## Before deploying

- Copy `.env.example` to `.env` and set `VITE_SITE_URL` to your live origin (used for og:image and canonical URL).
- Replace `public/resume/*.pdf` with the updated resume.
- See DATA_NOTES.md for content decisions.
