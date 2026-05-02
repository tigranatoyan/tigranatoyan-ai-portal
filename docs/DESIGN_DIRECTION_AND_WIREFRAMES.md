# Phase 2 Design Direction, Sitemap, and Wireframes

## B1 — Visual Direction

### What we are doing

Define the portal visual language before coding the public pages.

### Why it matters

The portal must signal seniority, technical judgment, and proof. It should not feel like a generic freelancer template or a shiny AI toy shelf.

### Design Direction

- **Visual tone:** dark, executive, technical, calm, proof-first, and controlled.
- **Color direction:** ink-black base, slate panels, thin borders, high-contrast white text, restrained signal accents in cyan and acid green.
- **Typography direction:** strong headline scale, readable body text, small uppercase labels for proof categories and system sections.
- **Card style:** clean cards with subtle glass panels, border/ring emphasis for primary proof assets, generous spacing, and clear hierarchy.
- **Navigation style:** sticky top navigation, compact brand mark, simple route labels, no decorative maze.
- **CTA style:** rounded pill CTAs; primary action in signal cyan; secondary actions as bordered dark buttons.
- **Mobile layout principles:** single-column stacking, large tap targets, proof first, no dense grids forced onto small screens.
- **Proof asset presentation:** screenshots, diagrams, video, and repo evidence are treated as evidence objects with status labels and placeholder warnings, not decorative imagery.

### B1 Visual Direction Evidence

```text
B1 Visual Direction Evidence:
- Visual tone defined? yes
- Color direction defined? yes
- Typography direction defined? yes
- Card style defined? yes
- CTA style defined? yes
- Mobile rules defined? yes
- Output location: docs/DESIGN_DIRECTION_AND_WIREFRAMES.md
- Open questions: Final profile photo, final OpenGraph visual, and final screenshot style are still pending.
```

---

## B2 — Sitemap and Navigation Model

### What we are doing

Define the public page model and navigation paths.

### Why it matters

The portal must quickly route employers, clients, recruiters, and AI/devtools collaborators to proof, role fit, CV, and contact.

### Required Pages

1. Home — `/`
2. Portfolio — `/portfolio`
3. Case Studies — `/case-studies`
4. Services / Role Fit — `/services`
5. CV — `/cv`
6. Contact — `/contact`

### Main Navbar Links

- Portfolio
- Case Studies
- Services / Role Fit
- CV
- Contact

### Footer Links

- Portfolio
- Case Studies
- Services
- CV
- Contact

### Primary CTA

- Label: `Inspect the proof`
- Target: `/portfolio`

### Secondary CTA

- Label: `Download CV`
- Target: `/cv`

### Contact CTA

- Label: `Start a conversation`
- Target: `/contact`

### Recommended Homepage Section Order

1. Hero
2. Demo video placeholder
3. Proof badges
4. Featured portfolio
5. Role fit preview
6. Services preview
7. Case study preview
8. CV download CTA
9. Contact CTA

### CTA Routing by Page

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| Home | Portfolio | CV / Contact |
| Portfolio | Case Studies | Contact |
| Case Studies | Portfolio | Contact |
| Services | Contact | CV |
| CV | Contact | Portfolio |
| Contact | Portfolio | CV |

### B2 Sitemap Evidence

```text
B2 Sitemap Evidence:
- 6 required pages included? yes
- Navbar links defined? yes
- Footer links defined? yes
- Primary CTA defined? yes
- Secondary CTA defined? yes
- Homepage section order defined? yes
- Output location: docs/DESIGN_DIRECTION_AND_WIREFRAMES.md and content/site.ts
- Open questions: Replace placeholder email, LinkedIn, and GitHub URLs.
```

---

## B3 — Page Wireframe Specifications

### What we are doing

Define the page section blueprint for the six public routes.

### Why it matters

The build should not improvise structure while coding. The wireframes tell every page what it must prove.

## 1. Home

- **Purpose:** immediate positioning and conversion.
- **Sections:** Hero → Demo Video → Proof Badges → Featured Portfolio → Role Fit Preview → Services Preview → Case Study Preview → CV CTA → Contact CTA.
- **Main components:** `Hero`, `VideoSection`, `ProofBadge`, `PortfolioCard`, `SectionHeader`, `CTASection`.
- **Data source:** `content/site.ts`, `content/portfolio.ts`, `content/services.ts`, `content/caseStudies.ts`.
- **CTA placement:** above fold in hero and again at bottom.
- **Mobile notes:** stack proof cards and previews in a single column; preserve CTA visibility.

## 2. Portfolio

- **Purpose:** show actual work and what each project proves.
- **Sections:** Page intro → portfolio grid/list → proof CTA.
- **Main components:** `SectionHeader`, `PortfolioCard`, `StatusPill`, `PlaceholderAsset`, `CTASection`.
- **Data source:** `content/portfolio.ts`.
- **CTA placement:** bottom CTA to case studies/contact.
- **Mobile notes:** full-width cards, technology chips wrap, placeholder assets stack.

## 3. Case Studies

- **Purpose:** convert proof assets into credible narrative.
- **Sections:** Page intro → 4 case study cards → evidence CTA.
- **Main components:** `SectionHeader`, `CaseStudyCard`, `PlaceholderAsset`, `CTASection`.
- **Data source:** `content/caseStudies.ts`.
- **CTA placement:** bottom CTA to portfolio/contact.
- **Mobile notes:** problem/approach/proof columns collapse into one column.

## 4. Services

- **Purpose:** separate employer role fit from freelance/client offers.
- **Sections:** Page intro → employer track → role cards → client track → fixed-scope offers → contact CTA.
- **Main components:** `SectionHeader`, `RoleFitCard`, `ServiceOfferCard`, `CTASection`.
- **Data source:** `content/services.ts`.
- **CTA placement:** bottom CTA to contact and CV.
- **Mobile notes:** employer and client cards stack cleanly; no pricing block.

## 5. CV

- **Purpose:** quick recruiter scan and download path.
- **Sections:** Intro → target roles → core skills → experience summary → selected proof links → PDF/DOCX placeholders → availability → contact CTA.
- **Main components:** `SectionHeader`, `PlaceholderAsset`, `CTASection`.
- **Data source:** `content/cv.ts`.
- **CTA placement:** top near download buttons and bottom after availability.
- **Mobile notes:** use chips and short bullets; avoid wall-of-text CV blocks.

## 6. Contact

- **Purpose:** make action simple by separating conversation paths.
- **Sections:** Contact intro → employment CTA → client CTA → AI/devtools collaboration CTA → contact details → deferred form note → proof CTA.
- **Main components:** `SectionHeader`, `CTASection`.
- **Data source:** `content/site.ts`.
- **CTA placement:** contact path cards high on page; proof CTA at bottom.
- **Mobile notes:** direct contact details must be visible and wrap long URLs.

### B3 Wireframe Evidence

```text
B3 Wireframe Evidence:
- Home wireframe complete? yes
- Portfolio wireframe complete? yes
- Case Studies wireframe complete? yes
- Services wireframe complete? yes
- CV wireframe complete? yes
- Contact wireframe complete? yes
- CTA placement included? yes
- Mobile notes included? yes
- Output location: docs/DESIGN_DIRECTION_AND_WIREFRAMES.md
- Open questions: None blocking Phase 2. Visual polish belongs to Phase 3.
```
