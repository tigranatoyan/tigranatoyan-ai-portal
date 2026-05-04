# Tigran Atoyan AI Demo Portal

Proof-first public portal for Tigran Atoyan: AI Systems & Operations Builder, AI Solutions Architect, AI-enabled Delivery Leader, and agentic systems/product builder.

This is not a generic portfolio site. It is a conversion asset for hiring managers, CTOs, founders, recruiters, and selected clients who need to inspect proof quickly.

## Live URLs

| Deployment | URL |
|------------|-----|
| **Primary (Vercel)** | https://tigranatoyan-ai-portal.vercel.app/ |
| **Secondary (GitHub Pages)** | https://tigranatoyan.github.io/tigranatoyan-ai-portal/ |

> **Note:** `robots: { index: false, follow: false }` is set intentionally. Public indexing will be enabled only when explicitly approved.

## Phase status

| Phase | Status |
|-------|--------|
| Phase 1 — Repo setup, Next.js scaffold | ✅ Complete |
| Phase 2 — Portfolio content, proof assets, CV | ✅ Complete |
| Phase 3 — Cleanup, dual deployment, AI bot | ✅ Complete |
| Phase 4 — Deployment validation, evidence scripts | ✅ Complete |
| Phase 5 — OG image, proof SVGs, site URL update | ✅ Complete |

## Proof assets

- **BreadCost** — full-stack bakery manufacturing cost accounting (Java/Spring Boot, Next.js, PostgreSQL)
- **The.Director** — controlled multi-agent orchestration platform (Kotlin/Spring Boot)
- **SystemForge / Architektr** — AI-first software delivery factory vision
- **Project Semantic Engine** — public artifact-driven discovery system ([GitHub](https://github.com/tigranatoyan/project-semantic-engine))

> Proof assets are real systems, not demos. Private proofs are labelled honestly.

## Tech stack

- Next.js
- TypeScript
- TailwindCSS
- React components
- App Router
- Vercel-ready structure


## Repository setup

See `docs/REPOSITORY_SETUP.md` for GitHub repo creation commands and the optional fresh `create-next-app` command.

## Local setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Optional checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Folder structure

```text
tigranatoyan-ai-portal/
  README.md
  package.json
  next.config.js
  tailwind.config.ts
  tsconfig.json
  postcss.config.js
  public/
    cv/
    images/
      profile/
      breadcost/
      director/
      systemforge/
      business-reporting/
      project-progress/
      delivery-transformation/
    videos/
    og/
  app/
    globals.css
    layout.tsx
    page.tsx
    portfolio/page.tsx
    case-studies/page.tsx
    services/page.tsx
    cv/page.tsx
    contact/page.tsx
  components/
  content/
  docs/
```

## Content editing guide

Edit content in `content/`, not inside page components wherever possible.

- `content/site.ts` — headline, bio, contact placeholders, CTAs, navigation, proof badges.
- `content/portfolio.ts` — portfolio cards and proof status.
- `content/caseStudies.ts` — case study narratives and missing evidence.
- `content/services.ts` — employer role cards and client offer cards.
- `content/cv.ts` — CV web content and download placeholders.
- `content/assets.ts` — evidence asset inventory and status.

## Asset placement guide

Place proof assets under `public/`.

- CV files: `public/cv/Tigran_Atoyan_AI_CV.pdf` and `public/cv/Tigran_Atoyan_AI_CV.docx`
- Profile image: `public/images/profile/profile-photo.webp`
- BreadCost proof: `public/images/breadcost/`
- The.Director proof: `public/images/director/`
- SystemForge diagrams: `public/images/systemforge/`
- Business reporting proof: `public/images/business-reporting/`
- Project progress proof: `public/images/project-progress/`
- Delivery transformation proof: `public/images/delivery-transformation/`
- Videos or video link files: `public/videos/`
- OpenGraph image: `public/og/og-image.png`

## Missing assets list

Mandatory before preview launch:

1. Final CV PDF.
2. Final CV DOCX.
3. Final email, LinkedIn, and GitHub links.
4. BreadCost screenshots or sanitized proof images.
5. The.Director screenshots or sanitized proof images.
6. SystemForge diagram.

Can wait until v1:

1. Profile photo/avatar.
2. Final OpenGraph image.
3. AI Weekly Business Report screenshots.
4. Project Progress Portal screenshots.
5. Delivery Transformation visuals.
6. Hero and walkthrough videos.

## Phase 2 status

This repo contains the technical skeleton, routes, components, content files, asset folders, evidence checklist, and completion report.

It does **not** deploy to Vercel yet.

## Next phases

### Phase 3 — First Portal Build Completion and Preview Deployment

- Replace placeholder contact links.
- Add CV files.
- Add proof screenshots and diagrams.
- Convert placeholder video section into real embed or link.
- Polish responsive UI.
- Run full local QA.
- Deploy preview to Vercel only after approval.

## Vercel deployment note

Do not deploy from Phase 2 unless explicitly approved.

When ready:

```bash
npm run build
```

Then connect the GitHub repository to Vercel and use the default Next.js settings.
