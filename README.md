# Christian Donato — analyst portfolio

Recruiter-facing portfolio for graduate Business Analyst, Data Analyst, and operations roles.

The site is built to show how the work is done — problem, analysis, insight, recommendation — not to prove that a website can be made.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide icons

Deploy on Vercel with the default Next.js settings.

## Still to add

These are not on the resume, so they are left blank on purpose:

- LinkedIn URL — `src/data/site.ts` → `linkedinUrl`
- GitHub URL — `src/data/site.ts` → `githubUrl`
- Production site URL — `src/data/site.ts` → `url`

The resume PDF in `public/resume.pdf` is the file supplied for this site.

Example case studies are labelled in the UI. Do not present their figures as client or employer results.

## Add a project

Append an object to `projects` in `src/data/projects.ts`. The case-study page, project grid, resume list, and sitemap update from that object.

Set `featured: true` on one project to pin it on the home page.
Set `isExample: true` until the work is yours.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Deploy

Push to GitHub and import the repo in Vercel. After you have a production URL, set `site.url` in `src/data/site.ts`.
