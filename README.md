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
- OpenGraph image: generated at `/og/og-image.png` via `app/og/og-image.png/route.tsx`

## Deployment

### Vercel (primary)

Automatically deploys from `master`. Connect GitHub repo to Vercel with default Next.js settings.

```bash
npm run build
```

### GitHub Pages (secondary)

Deployed via GitHub Actions on push to `master`. See `.github/workflows/deploy.yml`.

The `GITHUB_PAGES=true` env var enables static export mode and sets `basePath: /tigranatoyan-ai-portal`.

