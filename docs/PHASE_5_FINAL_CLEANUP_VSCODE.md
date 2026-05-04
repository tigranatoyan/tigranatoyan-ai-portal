# Phase 5 Final Cleanup - VS Code Execution MD

Project: **Tigran Atoyan AI Demo Portal**  
Repo: **https://github.com/tigranatoyan/tigranatoyan-ai-portal**  
Branch: **master**  
Primary preview: **https://tigranatoyan-ai-portal.vercel.app/**  
Secondary preview: **https://tigranatoyan.github.io/tigranatoyan-ai-portal/**  
Current indexing state: **noindex/nofollow preserved**

---

## 1. Purpose

This is the final small cleanup after Phase 5 was mostly applied in VS Code.

The previous Phase 5 patch has already been pushed to `master` and includes:

1. Clean hero/video placeholder copy.
2. Primary Vercel URL aligned in `content/site.ts`.
3. OG image path updated to `/og/og-image.png`.
4. Dynamic OG image route added at `app/og/og-image.png/route.tsx`.
5. Public-safe proof overview SVGs added for:
   - BreadCost
   - The.Director
   - SystemForge / Architektr
6. `out.zip` removed.
7. `tsconfig.tsbuildinfo` removed.
8. `.gitignore` updated for generated/private artifacts.
9. `noindex/nofollow` preserved.

This final cleanup is only to remove remaining evidence inconsistencies and verify launch readiness.

This is **not a rebuild**. This is a small cleanup and evidence pass.

---

## 2. Operating Rules

1. Do not redesign the site.
2. Do not rewrite positioning or copy unless explicitly requested below.
3. Do not remove `noindex/nofollow`.
4. Do not enable public indexing.
5. Do not add fake proof screenshots.
6. Do not publish raw SDIC/private proof.
7. Do not commit credentials, tokens, private URLs, private logs, customer names, internal employee names, or sensitive delivery evidence.
8. Keep BreadCost, The.Director, and SystemForge as the primary proof pillars.
9. Keep changes surgical and auditable.
10. Run validation before committing.
11. Produce evidence for each task.

---

# Final Cleanup Tasks

---

## F5.1 - Clean stale README sections

### What we are doing

The README now has correct live URLs and Phase 5 status near the top, but lower sections may still contain stale Phase 2/pre-deployment wording.

### Files to inspect

```text
README.md
```

### Stale text to remove or replace

Look for wording like:

```text
It does not deploy to Vercel yet.
Do not deploy from Phase 2 unless explicitly approved.
Phase 3 - First Portal Build Completion and Preview Deployment
Mandatory before preview launch
Can wait until v1
Final OpenGraph image
```

Remove or rewrite anything that incorrectly implies the portal is still a Phase 2 skeleton or not deployed.

### Required README state

The README must clearly include this current status section:

```md
## Current status

Phase 1: Content and positioning complete  
Phase 2: Technical skeleton complete  
Phase 3: Preview deployment complete  
Phase 4: Launch hardening and promotion package complete  
Phase 5: Public launch polish complete

Primary preview:
https://tigranatoyan-ai-portal.vercel.app/

Secondary preview:
https://tigranatoyan.github.io/tigranatoyan-ai-portal/

Current indexing:
noindex/nofollow preserved until explicit public indexing approval.
```

### Required proof safety note

Add or preserve this section:

```md
## Proof safety

Some proof assets are public-safe summaries or sanitized visuals. Raw private materials, unsanitized SDIC artifacts, private customer data, credentials, internal logs, private URLs, and confidential delivery evidence must not be committed or published.
```

### Recommended README cleanup structure

The README should be simple and current:

```md
# Tigran Atoyan AI Demo Portal

Proof-first public portal for Tigran Atoyan: AI Systems & Operations Builder, AI Solutions Architect, AI-enabled Delivery Leader, and agentic systems/product builder.

## Current status
...

## Live URLs
...

## Indexing
...

## Proof assets
...

## Proof safety
...

## Tech stack
...

## Local setup
...

## Validation
...

## Asset placement guide
...

## Deployment
...
```

Do not leave old Phase 2 deployment warnings in place.

### Evidence block

```text
F5.1 README Cleanup Evidence:
- README inspected? yes/no
- Stale Phase 2 deployment wording removed? yes/no
- Current deployed state documented? yes/no
- Primary preview URL present? yes/no
- Secondary preview URL present? yes/no
- noindex/nofollow status documented? yes/no
- Proof safety note present? yes/no
- Files changed:
- Verdict:
```

---

## F5.2 - Update content/assets.ts to match actual proof assets

### What we are doing

`content/assets.ts` still appears to describe several assets as missing or placeholder even after Phase 5 added public-safe proof visuals and a dynamic OG route.

The internal inventory should match the actual repo state.

### File to inspect

```text
content/assets.ts
```

### Actual files currently expected to exist

```text
public/images/breadcost/breadcost-proof-overview.svg
public/images/director/director-proof-overview.svg
public/images/systemforge/systemforge-proof-overview.svg
app/og/og-image.png/route.tsx
```

### Required updates

#### BreadCost asset group

Find the BreadCost asset group.

Change expected files so it includes:

```ts
"breadcost-proof-overview.svg"
```

Set:

```ts
currentStatus: "ready"
```

Update notes to:

```text
Primary proof asset. Public-safe overview visual added. Real screenshots can be added later only after sanitization.
```

Keep or add sensitive warning:

```text
Remove customer, employee, supplier, cost, pricing, and private repo details unless explicitly safe.
```

#### The.Director asset group

Find the The.Director asset group.

Change expected files so it includes:

```ts
"director-proof-overview.svg"
```

Set:

```ts
currentStatus: "ready"
```

Update notes to:

```text
Primary proof asset. Public-safe overview visual added. Raw logs, prompts, tokens, private paths, endpoints, and repo details must remain private.
```

Keep or add sensitive warning:

```text
Sanitize repo names, tokens, internal paths, prompts, and logs before publishing.
```

#### SystemForge asset group

Find the SystemForge asset group.

Change expected files so it includes:

```ts
"systemforge-proof-overview.svg"
```

Set:

```ts
currentStatus: "ready"
```

Update notes to:

```text
Primary proof asset. Public-safe architecture overview visual added. Deeper implementation diagrams can be added later.
```

#### OpenGraph asset group

Find the OpenGraph asset group.

If the repo keeps the dynamic route instead of a static PNG, set:

```ts
expectedFiles: ["app/og/og-image.png/route.tsx"]
currentStatus: "ready"
notes: "Dynamic Next.js OG image route serves /og/og-image.png at 1200x630. Static public/og/og-image.png can be added later if needed for social preview tooling."
```

If a static file is also added, use:

```ts
expectedFiles: ["og-image.png", "app/og/og-image.png/route.tsx"]
currentStatus: "ready"
notes: "Static and dynamic OG image support are available for /og/og-image.png at 1200x630."
```

### Important

Do not claim raw screenshots exist if only summary SVGs exist.

Acceptable wording:

```text
Public-safe overview visual added. Real screenshots can be added later after sanitization.
```

Not acceptable wording:

```text
Full screenshot proof complete.
```

### Evidence block

```text
F5.2 Asset Inventory Evidence:
- content/assets.ts inspected? yes/no
- BreadCost status updated? yes/no
- The.Director status updated? yes/no
- SystemForge status updated? yes/no
- OG image status updated? yes/no
- Public-safe visual filenames reflected? yes/no
- No fake screenshot claims introduced? yes/no
- Files changed:
- Verdict:
```

---

## F5.3 - Verify or add OpenGraph image support

### What we are doing

Phase 5 originally requested a literal file:

```text
public/og/og-image.png
```

The repo currently appears to use a dynamic Next.js route:

```text
app/og/og-image.png/route.tsx
```

This dynamic route should serve:

```text
/og/og-image.png
```

This can be acceptable on Vercel, but a static PNG is often safer for LinkedIn/social preview tooling.

### Required action

Inspect:

```text
app/og/og-image.png/route.tsx
content/site.ts
app/layout.tsx
```

Confirm:

1. `content/site.ts` has:

```ts
ogImage: "/og/og-image.png"
```

2. `app/layout.tsx` uses `seo.ogImage` inside OpenGraph images.
3. The route produces a 1200x630 image.
4. The text is public-safe.

### Optional action

If it is easy and clean, add a static file:

```text
public/og/og-image.png
```

Required static image content:

```text
Tigran Atoyan
AI Systems & Operations Builder
BreadCost · The.Director · SystemForge · Project Semantic Engine
```

Static image requirements:

```text
Dimensions: 1200x630
Style: dark, executive, clean
No private logos
No screenshots
No unsupported claims
No sensitive data
```

If adding the static PNG requires messy dependencies or risk, keep only the dynamic route and document the decision.

Do not break the existing dynamic route.

### Evidence block

```text
F5.3 OG Image Evidence:
- content/site.ts OG path checked? yes/no
- app/layout.tsx OG usage checked? yes/no
- Dynamic OG route present? yes/no
- Dynamic OG route declares 1200x630? yes/no
- Static public/og/og-image.png added? yes/no
- If no static PNG, dynamic route intentionally retained? yes/no
- OG image resolves locally or live at /og/og-image.png? yes/no/blocked
- Public-safe text only? yes/no
- Files changed:
- Verdict:
```

---

## F5.4 - Verify CV header manually

### What we are doing

The assistant could confirm CV files exist, but could not reliably inspect the binary PDF/DOCX header text.

### Files to inspect

```text
public/cv/Tigran_Atoyan.pdf
public/cv/Tigran_Atoyan.docx
```

### Required header text

Both CV files should include:

```text
Portfolio: https://tigranatoyan-ai-portal.vercel.app/
```

### Required action

Open both files manually.

If the portal URL is present in the header or top contact area, no file update is needed.

If missing, update both files carefully.

Do not corrupt the PDF or DOCX.

If editing the binary files safely is not practical, create a note in the final report:

```text
Manual CV update required: add Portfolio: https://tigranatoyan-ai-portal.vercel.app/ to PDF and DOCX header/contact area.
```

### Evidence block

```text
F5.4 CV Header Evidence:
- CV PDF opened? yes/no
- CV DOCX opened? yes/no
- Portal URL present in PDF header/contact area? yes/no
- Portal URL present in DOCX header/contact area? yes/no
- CV files updated? yes/no/not needed
- Manual update still needed? yes/no
- Verdict:
```

---

## F5.5 - Verify noindex/nofollow remains preserved

### What we are doing

Public indexing is still not approved.

### File to inspect

```text
app/layout.tsx
```

### Required state

Confirm this remains:

```ts
robots: {
  index: false,
  follow: false
}
```

### Important

Do not change this unless Tigran explicitly approves public indexing.

### Evidence block

```text
F5.5 Indexing Evidence:
- app/layout.tsx checked? yes/no
- noindex/nofollow preserved? yes/no
- Robots changed? no
- Explicit indexing approval received? no
- Verdict:
```

---

## F5.6 - Run final artifact hygiene scan

### What we are doing

Confirm unwanted archives or private artifacts are not tracked.

### Commands

Run:

```bash
find . -maxdepth 4 -type f \( -name "*.zip" -o -name "*.tar" -o -name "*.tar.gz" \)
find . -iname "*SDIC*" -o -iname "*sdic*"
git status --short
```

### Expected result

Acceptable:

```text
No out.zip tracked.
No raw SDIC.zip tracked.
No raw SDIC HTML tracked.
No generated archives tracked unless intentionally documented.
```

If a local `phase5_patch_bundle.zip` exists in the repo folder, do not commit it.

If a local extracted `phase5_patch_bundle/` folder exists, do not commit it.

### Evidence block

```text
F5.6 Artifact Hygiene Evidence:
- Archive scan run? yes/no
- out.zip found? yes/no
- raw SDIC.zip found? yes/no
- raw SDIC HTML found? yes/no
- phase5 patch bundle excluded from commit? yes/no/not applicable
- git status checked? yes/no
- Issues found:
- Fixes applied:
- Verdict:
```

---

## F5.7 - Run final local validation

### What we are doing

Validate the site after cleanup.

### Commands

Run:

```bash
npm run typecheck
npm run lint
npm run build
```

If dependencies are missing:

```bash
npm install
npm run typecheck
npm run lint
npm run build
```

### Evidence block

```text
F5.7 Validation Evidence:
- npm install run? yes/no/not needed
- npm run typecheck passed? yes/no
- npm run lint passed? yes/no
- npm run build passed? yes/no
- Warnings:
- Errors:
- Fixes applied:
- Verdict:
```

---

## F5.8 - Commit and push final cleanup

### What we are doing

Commit only after validation passes.

### Commands

```bash
git status
git add .
git commit -m "Finalize Phase 5 launch polish evidence"
git push origin master
```

### Evidence block

```text
F5.8 Commit Evidence:
- Git status checked? yes/no
- Git commit created? yes/no
- Commit hash:
- Pushed to master? yes/no
- Files changed:
- Verdict:
```

---

## F5.9 - Verify Vercel deployment status

### What we are doing

Confirm Vercel deployed the final cleanup commit.

### Required action

Check GitHub commit status or Vercel dashboard.

Confirm latest commit has a successful Vercel deployment.

### Evidence block

```text
F5.9 Deployment Evidence:
- Vercel deployment triggered? yes/no
- Vercel deployment successful? yes/no
- Latest deployed commit hash:
- Deployment URL:
- Issues found:
- Verdict:
```

---

## F5.10 - Live preview check

### What we are doing

Manually check the public preview after deploy.

### URLs to open in browser/incognito

```text
https://tigranatoyan-ai-portal.vercel.app/
https://tigranatoyan-ai-portal.vercel.app/portfolio
https://tigranatoyan-ai-portal.vercel.app/og/og-image.png
https://tigranatoyan-ai-portal.vercel.app/cv
https://tigranatoyan-ai-portal.vercel.app/contact
```

### Required checks

Confirm:

1. Home page loads.
2. Hero/video placeholder is public-safe.
3. Portfolio page loads.
4. BreadCost proof visual loads.
5. The.Director proof visual loads.
6. SystemForge proof visual loads.
7. OG image resolves at `/og/og-image.png`.
8. CV page loads.
9. CV download links work or are honestly marked.
10. Contact page loads.
11. Contact links work.
12. No obvious broken images above the fold.
13. `noindex/nofollow` still preserved.

### Optional social preview check

Use one of:

```text
LinkedIn Post Inspector
Browser page source
A social preview checker
Manual metadata inspection
```

Check:

1. OG title is correct.
2. OG description is correct.
3. OG image appears.
4. Canonical/social URL points to primary Vercel URL.

### Evidence block

```text
F5.10 Live Preview Evidence:
- Home checked? yes/no
- Hero placeholder public-safe? yes/no
- Portfolio checked? yes/no
- BreadCost visual checked? yes/no
- The.Director visual checked? yes/no
- SystemForge visual checked? yes/no
- OG image checked? yes/no
- CV page checked? yes/no
- CV downloads checked? yes/no
- Contact page checked? yes/no
- Contact links checked? yes/no
- No obvious broken images? yes/no
- noindex/nofollow preserved? yes/no
- Social preview checked? yes/no
- Issues found:
- Verdict:
```

---

# Final Report Template

After completing all final cleanup tasks, return this report to the main tracker.

```text
PHASE 5 FINAL CLEANUP REPORT

Overall status:
Done / Needs Review / Blocked

Public launch polish:
Complete / Partial / Blocked

Indexing:
Keep noindex/nofollow

Primary preview:
https://tigranatoyan-ai-portal.vercel.app/

Secondary preview:
https://tigranatoyan.github.io/tigranatoyan-ai-portal/

Repository:
https://github.com/tigranatoyan/tigranatoyan-ai-portal

Branch:
master

Final cleanup commit hash:

Fixes completed:
1.
2.
3.
4.
5.
6.
7.

F5.1 README Cleanup:
Done / Needs Review / Blocked
Evidence:

F5.2 Asset Inventory:
Done / Needs Review / Blocked
Evidence:

F5.3 OG Image:
Done / Needs Review / Blocked
Evidence:

F5.4 CV Header:
Done / Needs Review / Blocked
Evidence:

F5.5 Indexing:
Done / Needs Review / Blocked
Evidence:

F5.6 Artifact Hygiene:
Done / Needs Review / Blocked
Evidence:

F5.7 Validation:
Done / Needs Review / Blocked
Evidence:

F5.8 Commit:
Done / Needs Review / Blocked
Evidence:

F5.9 Deployment:
Done / Needs Review / Blocked
Evidence:

F5.10 Live Preview:
Done / Needs Review / Blocked
Evidence:

Remaining blockers:
1.
2.
3.

Safe-to-share channels:
1. Manual recruiter/hiring manager sharing.
2. Direct founder/client conversations.
3. CV/contact follow-up conversations.

Not-safe-yet channels:
1. Public search indexing.
2. Broad launch announcement if social preview is not verified.
3. Raw/private proof publication.

Recommended next phase:
Phase 6 - Manual Sharing Campaign / Outreach Execution
```

---

# Done Definition

Phase 5 final cleanup can be marked complete only when all required items below are done or honestly marked as manual follow-up.

| Requirement | Required | Status |
|---|---:|---|
| README stale Phase 2 deployment wording removed | Yes | Pending |
| README current deployed state documented | Yes | Pending |
| README proof safety note present | Yes | Pending |
| content/assets.ts reflects added public-safe visuals | Yes | Pending |
| OG image route or static PNG verified | Yes | Pending |
| CV header checked or manual update marked | Yes | Pending |
| noindex/nofollow preserved | Yes | Pending |
| artifact hygiene scan completed | Yes | Pending |
| typecheck passed | Yes | Pending |
| lint passed | Yes | Pending |
| build passed | Yes | Pending |
| final cleanup commit pushed | Yes | Pending |
| Vercel deployment successful | Yes | Pending |
| live preview manually checked | Yes | Pending |
| final report produced | Yes | Pending |

---

# Prompt to Copilot or Claude in VS Code

Use this exact prompt after creating this file:

```text
Execute docs/PHASE_5_FINAL_CLEANUP_VSCODE.md exactly.

Keep changes surgical.
Do not redesign the site.
Do not remove noindex/nofollow.
Do not enable public indexing.
Do not invent proof screenshots.
Do not publish raw SDIC/private proof.

After applying changes, run:
npm run typecheck
npm run lint
npm run build

Then prepare the final evidence report using the template in the MD.
```
