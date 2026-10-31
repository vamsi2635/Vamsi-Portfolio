# Content notes

## Applied per owner confirmation
- CNA Lawyers Insurance: Mar 2021 – Nov 2022. IDFC FIRST Bank: Dec 2023 – Nov 2025. Marriott: Dec 2025 – Present.
- Surname spelled "Padarthi". MCP concepts listed under hands-on AI. Location: Bangalore, India.
- Availability chip: "Open to new opportunities" (edit or set to null in `src/data/profile.ts`).
- Featured projects use standard defaults: resume-based descriptions and a link to the GitHub profile. Add dedicated
  repo/report/screenshot links through `evidence` in `src/data/projects.ts` when available.
- Social preview image: `public/images/og-image.png` (1200x630, generated from the photo). Set `VITE_SITE_URL`
  (see `.env.example`) before deploying so og:image / canonical use absolute URLs.

## Still open
1. Resume PDF in `public/resume/` is the original file (old spelling "Padharthi" and old dates). Replace it with the updated PDF; keep the file name or update `resumePath` in `src/data/profile.ts`.
2. BDD and Cucumber (from the resume) appear under Skills.

## Design note
- Secondary text colour is #5B6270 (slightly darker than #747B87) to meet WCAG AA contrast at small sizes.
