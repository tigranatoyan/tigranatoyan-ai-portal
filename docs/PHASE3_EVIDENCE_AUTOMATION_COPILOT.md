# Phase 3 Evidence Automation — VS Code / GitHub Copilot Brief

You are working inside the repository:

```text
tigranatoyan-ai-portal
```

You are executing the final Phase 3 evidence gathering for the Tigran Atoyan AI Demo Portal.

Your job is to create automation that gathers the evidence needed to mark Phase 3 complete.

Do **not** redesign the site.  
Do **not** change content except where required for evidence generation scripts.  
Do **not** commit evidence ZIPs unless explicitly requested by Tigran.  
Do **not** expose API keys, secrets, `.env` files, Vercel secrets, OpenAI keys, tokens, private URLs, customer names, or private repo data.

---

## Goal

Create scripts that automatically produce these evidence packages:

```text
phase3-final-out.zip
phase3-live-qa-screenshots.zip
phase3-build-deploy-evidence.zip
```

Optional, only if the AI bot is part of this repo:

```text
phase3-ai-bot-safety-evidence.zip
```

All evidence should be generated under:

```text
_phase3_evidence/
```

Add `_phase3_evidence/` to `.gitignore` if it is not already ignored.

---

## Required script files to create

Create:

```text
scripts/collect-phase3-evidence.ps1
scripts/capture-phase3-screenshots.mjs
```

Optional helper:

```text
scripts/README_PHASE3_EVIDENCE.md
```

The PowerShell script should orchestrate everything.

The Playwright script should capture live screenshots from Vercel and GitHub Pages.

---

## Default live URLs

Use these defaults, but allow them to be overridden by PowerShell parameters:

```text
Vercel:
https://tigranatoyan-ai-portal.vercel.app

GitHub Pages:
https://tigranatoyan.github.io/tigranatoyan-ai-portal
```

---

## PowerShell script requirements

Create `scripts/collect-phase3-evidence.ps1`.

It should support:

```powershell
param(
  [string]$VercelUrl = "https://tigranatoyan-ai-portal.vercel.app",
  [string]$GithubPagesUrl = "https://tigranatoyan.github.io/tigranatoyan-ai-portal",
  [switch]$SkipScreenshots,
  [switch]$IncludeBotEvidence
)
```

The script must:

1. Confirm it is running from repo root by checking:

```text
package.json
app/
content/
public/
```

2. Create this folder structure:

```text
_phase3_evidence/
  terminal/
  screenshots/
    vercel/
    github-pages/
    mobile/
  deploy/
  bot/
  zips/
```

3. Run and capture command outputs:

```powershell
git status
npm run typecheck
npm run lint
npm run build
```

Save outputs to:

```text
_phase3_evidence/terminal/01-git-status.txt
_phase3_evidence/terminal/02-typecheck-output.txt
_phase3_evidence/terminal/03-lint-output.txt
_phase3_evidence/terminal/04-build-output.txt
```

Important:
- Capture stdout and stderr.
- Preserve exit codes.
- Continue long enough to package evidence, but clearly mark failures.
- If typecheck/lint/build fails, write a clear failure note in the final index.

4. After `npm run build`, confirm `out/` exists.

If `out/` exists, create:

```text
_phase3_evidence/zips/phase3-final-out.zip
```

from:

```text
out/*
```

5. Create deployment evidence templates:

```text
_phase3_evidence/deploy/05-github-actions-result.txt
_phase3_evidence/deploy/06-vercel-deployment-result.txt
_phase3_evidence/deploy/07-live-links.txt
_phase3_evidence/deploy/08-phase3-cleanup-evidence.txt
```

`07-live-links.txt` must contain:

```text
Vercel:
https://tigranatoyan-ai-portal.vercel.app/

GitHub Pages:
https://tigranatoyan.github.io/tigranatoyan-ai-portal/

GitHub repo:
https://github.com/tigranatoyan/tigranatoyan-ai-portal
```

The GitHub Actions and Vercel files should include placeholders for manual copy/paste if API access is not available:

```text
GitHub Actions result:
- workflow name:
- latest run status:
- commit hash:
- deployed URL:
- checked by:
- checked at:

Vercel result:
- deployment URL:
- build status:
- commit hash:
- deployment time:
- checked by:
- checked at:
```

6. Run screenshot capture unless `-SkipScreenshots` is passed.

Use:

```powershell
node scripts/capture-phase3-screenshots.mjs
```

Pass the Vercel and GitHub Pages URLs through environment variables:

```powershell
$env:PHASE3_VERCEL_URL = $VercelUrl
$env:PHASE3_GITHUB_PAGES_URL = $GithubPagesUrl
```

7. After screenshots are captured, zip screenshots:

```text
_phase3_evidence/zips/phase3-live-qa-screenshots.zip
```

from:

```text
_phase3_evidence/screenshots/*
```

8. Create terminal/deploy evidence zip:

```text
_phase3_evidence/zips/phase3-build-deploy-evidence.zip
```

containing:

```text
_phase3_evidence/terminal/*
_phase3_evidence/deploy/*
_phase3_evidence/PHASE3_EVIDENCE_INDEX.md
```

9. Search for dangerous secret exposure.

Search tracked and working files, excluding:

```text
node_modules/
.next/
out/
_phase3_evidence/
.git/
```

Look for:

```text
OPENAI_API_KEY
sk-
api_key
secret
token
.env
Vercel
```

Write results to:

```text
_phase3_evidence/terminal/09-secret-scan-output.txt
```

Important:
- Do not print actual secret values if found.
- Mask anything that looks like a secret.
- If `.env` or `.env.local` exists, note that it exists but do not copy it into evidence.

10. AI bot evidence, only if `-IncludeBotEvidence` is passed or if bot files are detected.

Detect likely bot files by searching for:

```text
app/api
openai
chat
assistant
responses
completion
```

If bot exists, create:

```text
_phase3_evidence/bot/01-bot-screenshot-needed.txt
_phase3_evidence/bot/02-bot-question-answer-examples.txt
_phase3_evidence/bot/03-env-safety-check.txt
_phase3_evidence/bot/04-api-key-not-in-repo-proof.txt
_phase3_evidence/bot/05-bot-disclaimer-screenshot-needed.txt
```

Then zip:

```text
_phase3_evidence/zips/phase3-ai-bot-safety-evidence.zip
```

The bot evidence should prove:

```text
- No API key is in GitHub
- API calls are server-side only
- Vercel environment variable is used
- Bot has a disclaimer
- Bot answers about Tigran only from approved profile/CV/portfolio data
```

Do not copy any `.env` file into evidence.

11. Generate final index:

```text
_phase3_evidence/PHASE3_EVIDENCE_INDEX.md
```

It must include:

```md
# Phase 3 Evidence Index

Generated at:
Commit hash:
Branch:
Repo:
Vercel URL:
GitHub Pages URL:

## Evidence ZIPs

- phase3-final-out.zip
- phase3-live-qa-screenshots.zip
- phase3-build-deploy-evidence.zip
- phase3-ai-bot-safety-evidence.zip, if generated

## Validation Summary

- git status clean? yes/no
- typecheck passed? yes/no
- lint passed? yes/no
- build passed? yes/no
- out folder generated? yes/no
- screenshots captured? yes/no
- secret scan clean? yes/no/manual review needed

## Routes Checked

Vercel:
- /
- /portfolio
- /case-studies
- /services
- /cv
- /contact

GitHub Pages:
- /
- /portfolio
- /case-studies
- /services
- /cv
- /contact

## Proof Assets Expected

- BreadCost
- The.Director
- SystemForge / Architektr
- Project Semantic Engine
- AI Project Progress Reporting Framework
- AI Business OS / BlackScaleMedia
- AI Weekly Business Report Demo

## Manual QA Still Required

- Confirm no broken image icons
- Confirm CV downloads
- Confirm contact links
- Confirm mobile layout
- Confirm no secrets visible
- Confirm AI bot safety, if bot is included

## Notes

Do not commit evidence ZIPs unless explicitly requested.
```

---

## Playwright screenshot script requirements

Create `scripts/capture-phase3-screenshots.mjs`.

It should:

1. Use Playwright Chromium.

If Playwright is missing, the PowerShell script should install it with:

```powershell
npm install -D playwright
npx playwright install chromium
```

Ask before changing package.json only if needed. If you can use `npx playwright` without permanent dependency, prefer that.

2. Read:

```text
PHASE3_VERCEL_URL
PHASE3_GITHUB_PAGES_URL
```

3. Capture desktop screenshots at 1440x1200.

For Vercel, create:

```text
_phase3_evidence/screenshots/vercel/01-vercel-home.png
_phase3_evidence/screenshots/vercel/02-vercel-portfolio-top.png
_phase3_evidence/screenshots/vercel/03-vercel-portfolio-breadcost.png
_phase3_evidence/screenshots/vercel/04-vercel-portfolio-director.png
_phase3_evidence/screenshots/vercel/05-vercel-portfolio-systemforge.png
_phase3_evidence/screenshots/vercel/06-vercel-portfolio-semantic-engine.png
_phase3_evidence/screenshots/vercel/07-vercel-cv.png
_phase3_evidence/screenshots/vercel/08-vercel-contact.png
```

Use these URLs:

```text
/
/portfolio
/portfolio#breadcost
/portfolio#the-director
/portfolio#systemforge-architektr
/portfolio#project-semantic-engine
/cv
/contact
```

If anchor screenshots do not scroll correctly, load `/portfolio`, then use JavaScript to scroll to the element by ID:

```js
document.getElementById("breadcost")?.scrollIntoView()
document.getElementById("the-director")?.scrollIntoView()
document.getElementById("systemforge-architektr")?.scrollIntoView()
document.getElementById("project-semantic-engine")?.scrollIntoView()
```

4. Capture mobile screenshots at 390x844:

```text
_phase3_evidence/screenshots/mobile/09-vercel-mobile-home.png
_phase3_evidence/screenshots/mobile/10-vercel-mobile-portfolio.png
```

5. Capture optional GitHub Pages screenshots:

```text
_phase3_evidence/screenshots/github-pages/11-github-pages-home.png
_phase3_evidence/screenshots/github-pages/12-github-pages-portfolio.png
_phase3_evidence/screenshots/github-pages/13-github-pages-cv.png
```

6. Detect broken images.

In every inspected page, evaluate:

```js
Array.from(document.images)
  .filter(img => !img.complete || img.naturalWidth === 0)
  .map(img => img.src)
```

Save result to:

```text
_phase3_evidence/screenshots/broken-images-report.txt
```

7. Detect page load errors.

Listen for console errors and failed network requests. Save to:

```text
_phase3_evidence/screenshots/browser-errors-report.txt
```

Do not fail the whole script on one screenshot failure. Continue and log failures.

---

## `.gitignore` requirement

Ensure this exists in `.gitignore`:

```gitignore
_phase3_evidence/
```

Do not add generated evidence ZIPs to Git by default.

---

## Run command for Tigran

After implementing the scripts, Tigran should run:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\scripts\collect-phase3-evidence.ps1
```

Or with explicit URLs:

```powershell
.\scripts\collect-phase3-evidence.ps1 `
  -VercelUrl "https://tigranatoyan-ai-portal.vercel.app" `
  -GithubPagesUrl "https://tigranatoyan.github.io/tigranatoyan-ai-portal"
```

If AI bot is included:

```powershell
.\scripts\collect-phase3-evidence.ps1 -IncludeBotEvidence
```

---

## Final output required from Copilot

When done, output:

```text
PHASE 3 EVIDENCE AUTOMATION COMPLETE

Files created:
- scripts/collect-phase3-evidence.ps1
- scripts/capture-phase3-screenshots.mjs
- scripts/README_PHASE3_EVIDENCE.md, if created

Evidence generated:
- _phase3_evidence/zips/phase3-final-out.zip
- _phase3_evidence/zips/phase3-live-qa-screenshots.zip
- _phase3_evidence/zips/phase3-build-deploy-evidence.zip
- _phase3_evidence/zips/phase3-ai-bot-safety-evidence.zip, if applicable

Validation:
- typecheck passed? yes/no
- lint passed? yes/no
- build passed? yes/no
- screenshots captured? yes/no
- broken images found? yes/no
- secret scan clean? yes/no/manual review needed

Manual evidence still needed:
-

Do not commit evidence zips unless explicitly requested by Tigran.
```

---

## Success criteria

Phase 3 evidence gathering is successful when the folder:

```text
_phase3_evidence/zips/
```

contains at least:

```text
phase3-final-out.zip
phase3-live-qa-screenshots.zip
phase3-build-deploy-evidence.zip
```

And `PHASE3_EVIDENCE_INDEX.md` clearly says:

```text
typecheck passed: yes
lint passed: yes
build passed: yes
out folder generated: yes
screenshots captured: yes
secret scan clean: yes or manual review needed with no exposed secret values
```
