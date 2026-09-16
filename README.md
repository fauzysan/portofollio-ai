# Portfolio — Network Security Engineer × AI Engineer

A dark, technical, enterprise-grade personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Editing content

Almost everything on the page is data-driven. To personalize the site, edit:

- `src/config/site.ts` — name, role, tagline, links (LinkedIn, GitHub, email, CV), nav items, SEO keywords.
- `src/data/bento.ts` — the four engineering identity cards.
- `src/data/timeline.ts` — the About section career timeline labels.
- `src/data/experience.ts` — the "Professional Journey" timeline entries.
- `src/data/projects.ts` — the "Selected Engineering Projects" bento cards.
- `src/data/soc-lab.ts` — SOC stats and the simulated event feed.
- `src/data/ai-pipeline.ts` — AI ops pipeline stages and workflow steps.
- `src/data/techstack.ts` — the technology wall categories/badges.
- `src/data/certifications.ts` — certification cards (name, vendor, year, credential link). Replace the placeholder entries with real credentials.
- `src/data/philosophy.ts` — the three engineering principles.
- `src/data/lab.ts` — the home lab diagram branches and technology badges.
- `src/data/blog.ts` — blog/article cards.

Replace `siteConfig.links.cv` with a real CV file under `public/cv/`, and update `siteConfig.url` before deploying (it feeds canonical URLs, Open Graph tags, and the sitemap).

## Stack

Next.js · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide Icons
