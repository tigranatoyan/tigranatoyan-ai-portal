# Evidence Collection Checklist

Phase 2 creates clean homes for proof assets. This checklist tells the next evidence pass exactly what to collect, sanitize, and add.

## Global rules

- Use screenshots and diagrams as evidence, not decoration.
- Remove all secrets, tokens, private customer names, employee names, supplier details, pricing, costs, private repo URLs, internal tickets, and sensitive business data.
- Prefer `.webp` or optimized `.png` for screenshots.
- Use clear filenames matching the expected paths in `content/assets.ts`.
- Add final CV files to `public/cv` before preview deployment.

---

## 1. BreadCost

- **Required screenshots:** dashboard, recipe/costing flow, inventory/production screen, repo structure, Playwright/test evidence.
- **Required diagrams:** domain architecture, backend/frontend/data flow, manufacturing cost accounting model.
- **Required links:** GitHub or sanitized repo link, demo link if available, docs link if safe.
- **Required video/demo evidence:** 3–5 minute BreadCost walkthrough.
- **Sensitive-data cleanup notes:** remove actual costs, supplier names, employee names, private repo details, internal data, and customer/order data.
- **Mandatory for v0.1?** yes
- **Can wait until v1?** no
- **Completion evidence:** at least 3 sanitized images placed in `public/images/breadcost` and linked in `content/portfolio.ts`.

## 2. The.Director

- **Required screenshots:** CLI flow, dashboard, agent map, workflow trace, arbiter/human review step, repo structure if safe.
- **Required diagrams:** Director/Arbiter/expert-role flow, MCP tool layer, persistence/audit/metrics flow.
- **Required links:** public sanitized repo or private-proof note, demo URL if available.
- **Required video/demo evidence:** 3–5 minute The.Director walkthrough.
- **Sensitive-data cleanup notes:** remove prompts, API keys, tokens, internal local paths, logs, private endpoint URLs, and proprietary implementation details.
- **Mandatory for v0.1?** yes
- **Can wait until v1?** no
- **Completion evidence:** decision on public vs sanitized repo, plus at least 3 visual proof assets in `public/images/director`.

## 3. SystemForge / Architektr

- **Required screenshots:** not required if product is mostly architecture-stage, but diagrams are required.
- **Required diagrams:** SystemForge operating model, Director as nerve center, Arbiter quality gates, Knowledge Engine, human approval gates, recursive sub-Directors, architecture-to-Jira-to-code path.
- **Required links:** docs link, roadmap link if public, The.Director link.
- **Required video/demo evidence:** optional short architecture explainer.
- **Sensitive-data cleanup notes:** remove internal strategy details not intended for public proof.
- **Mandatory for v0.1?** yes
- **Can wait until v1?** no
- **Completion evidence:** at least 2 diagrams in `public/images/systemforge` and one concise architecture note.

## 4. AI Weekly Business Report

- **Required screenshots:** input spreadsheet/CRM export, KPI dashboard, status logic, executive summary, PDF/HTML output.
- **Required diagrams:** optional report generation flow.
- **Required links:** sample report, demo page, or hosted HTML output.
- **Required video/demo evidence:** 2–4 minute report transformation demo.
- **Sensitive-data cleanup notes:** use mock data only unless client explicitly approves public use.
- **Mandatory for v0.1?** no
- **Can wait until v1?** yes
- **Completion evidence:** sample input, sample dashboard, and sample output placed under `public/images/business-reporting`.

## 5. AI Project Progress Reporting Framework

- **Required screenshots:** progress overview, timeline/milestones, risk status, dependency/status change flow, customer-facing static portal view.
- **Required diagrams:** source-of-truth data flow from Jira/Excel to static portal/report.
- **Required links:** sample portal or static HTML proof.
- **Required video/demo evidence:** optional 2–3 minute project reporting demo.
- **Sensitive-data cleanup notes:** remove customer names, real project deadlines, budgets, team members, and private delivery details.
- **Mandatory for v0.1?** no
- **Can wait until v1?** yes
- **Completion evidence:** at least 2 screenshots in `public/images/project-progress`.

## 6. Delivery Transformation

- **Required screenshots:** sanitized before/after KPI chart, governance dashboard, delivery cadence or executive status template.
- **Required diagrams:** delivery governance model, escalation/status cadence map.
- **Required links:** none required unless public references exist.
- **Required video/demo evidence:** optional.
- **Sensitive-data cleanup notes:** keep metrics generalized unless explicitly safe; do not expose client-private delivery performance.
- **Mandatory for v0.1?** no
- **Can wait until v1?** yes
- **Completion evidence:** one sanitized metrics visual and one governance visual under `public/images/delivery-transformation`.

## 7. CV and identity/contact assets

- **Required screenshots/files:** final CV PDF, final CV DOCX, profile photo/avatar, final OpenGraph image.
- **Required diagrams:** none.
- **Required links:** final LinkedIn URL, final GitHub URL, final public email or contact alias.
- **Required video/demo evidence:** homepage hero video link if available.
- **Sensitive-data cleanup notes:** remove phone/address/private references if not intended for public publishing.
- **Mandatory for v0.1?** CV files and real contact links are mandatory. Profile photo and OG image can wait if needed.
- **Can wait until v1?** profile photo/OG image yes; CV/contact no.
- **Completion evidence:** files added to `public/cv`, links updated in `content/site.ts`, and placeholder disabled states converted to working download links.

---

## D2 Evidence Checklist Evidence

```text
D2 Evidence Checklist Evidence:
- BreadCost checklist complete? yes
- The.Director checklist complete? yes
- SystemForge checklist complete? yes
- AI Weekly Business Report checklist complete? yes
- Project Progress Portal checklist complete? yes
- Delivery Transformation checklist complete? yes
- CV/contact checklist complete? yes
- Mandatory vs later assets marked? yes
- Sensitive-data cleanup notes included? yes
- Output location: docs/EVIDENCE_COLLECTION_CHECKLIST.md
- Open questions: Decide whether The.Director will be public, private-proof, or sanitized public demo.
```
