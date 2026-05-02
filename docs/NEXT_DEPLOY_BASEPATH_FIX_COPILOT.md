# VS Code / GitHub Copilot Brief — Support Both Vercel Root and GitHub Pages Base Path

Project: **Tigran Atoyan AI Demo Portal**  
Repo: `tigranatoyan-ai-portal`  
Goal: Make the portal work correctly on both:

```text
https://tigranatoyan-ai-portal.vercel.app/
```

and:

```text
https://tigranatoyan.github.io/tigranatoyan-ai-portal/
```

## 0. Operating Rules

You are working inside the existing Next.js portal repo. Do **not** redesign the site. Do **not** rewrite unrelated content. Do **not** remove the GitHub Pages deployment workflow.

Make the smallest safe changes required so:

1. Vercel serves the site from root `/`.
2. GitHub Pages serves the same site from `/tigranatoyan-ai-portal`.
3. Static proof images work on both hosts.
4. CV downloads work on both hosts.
5. Local build passes before commit.

Keep `robots` as `noindex/nofollow` unless explicitly instructed otherwise.

---

## 1. Problem Summary

The current repo was configured for GitHub Pages using a fixed base path:

```js
basePath: '/tigranatoyan-ai-portal',
assetPrefix: '/tigranatoyan-ai-portal',
env: {
  NEXT_PUBLIC_BASE_PATH: '/tigranatoyan-ai-portal',
}
```

That is correct for GitHub Pages project hosting, but it is wrong for Vercel root hosting.

On Vercel, the public site should open at:

```text
/
```

not:

```text
/tigranatoyan-ai-portal/
```

We need conditional config.

---

## 2. Files to Inspect First

Inspect these files before editing:

```text
next.config.js
.github/workflows/deploy.yml
lib/assetPath.ts
app/cv/page.tsx
content/cv.ts
components/PlaceholderAsset.tsx
content/portfolio.ts
```

Also search the whole repo for hardcoded GitHub Pages path:

```text
/tigranatoyan-ai-portal
```

Use VS Code global search.

Any hardcoded user-facing or download path with `/tigranatoyan-ai-portal` must be reviewed. It should normally use `assetPath(...)` or rely on Next `basePath`, not hardcoding the prefix in page code.

---

## 3. Required Change A — Make `next.config.js` Conditional

Open:

```text
next.config.js
```

Replace the entire file with:

```js
/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/tigranatoyan-ai-portal" : "";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

module.exports = nextConfig;
```

Expected behavior:

```text
Local dev / Vercel: basePath = ""
GitHub Pages build: basePath = "/tigranatoyan-ai-portal"
```

---

## 4. Required Change B — Set GitHub Pages Build Env

Open:

```text
.github/workflows/deploy.yml
```

Find the build step:

```yaml
- name: Build static export
  run: npm run build
```

Replace it with:

```yaml
- name: Build static export
  run: npm run build
  env:
    GITHUB_PAGES: "true"
```

Do not change the rest of the workflow unless necessary.

The final workflow should still:

1. Checkout repo.
2. Setup Node.js.
3. Run `npm ci`.
4. Run `npm run build` with `GITHUB_PAGES: "true"`.
5. Upload the `out` folder.
6. Deploy to GitHub Pages.

---

## 5. Required Change C — Ensure Asset Paths Work on Both Hosts

Open:

```text
lib/assetPath.ts
```

Expected final content:

```ts
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
```

If this already exists, keep it.

This function should be used for:

```text
public images
CV download files if the page uses direct <a href>
Open Graph image if manually rendered somewhere
any other public asset that might be affected by GitHub Pages basePath
```

---

## 6. Required Change D — Fix CV Download Links for Both Hosts

Open:

```text
app/cv/page.tsx
```

If it has hardcoded links like this:

```tsx
href="/tigranatoyan-ai-portal/cv/Tigran_Atoyan_AI_CV.pdf"
```

that is wrong for Vercel.

Update the file to import `assetPath`:

```tsx
import { assetPath } from "@/lib/assetPath";
```

Then use:

```tsx
<a
  href={assetPath(cv.downloads.pdf.path)}
  className="primary-button"
  download
>
  {cv.downloads.pdf.label}
</a>
<a
  href={assetPath(cv.downloads.docx.path)}
  className="secondary-button"
  download
>
  {cv.downloads.docx.label}
</a>
```

Expected `content/cv.ts` paths should remain base-path-neutral:

```ts
path: "/cv/Tigran_Atoyan_AI_CV.pdf"
path: "/cv/Tigran_Atoyan_AI_CV.docx"
```

Do **not** put `/tigranatoyan-ai-portal` into `content/cv.ts`.

---

## 7. Required Change E — Confirm Proof Image Rendering Still Uses `assetPath`

Open:

```text
components/PlaceholderAsset.tsx
```

It should render image assets using:

```tsx
src={assetPath(path)}
```

If already present, keep it.

Do not rename this component unless necessary. It may still be called `PlaceholderAsset`, but it now renders either real images or fallback placeholder boxes.

---

## 8. Required Change F — Confirm Portfolio Image Paths Are Base-Path-Neutral

Open:

```text
content/portfolio.ts
```

Portfolio asset paths should look like this:

```ts
"/images/breadcost/breadcost-dashboard.webp"
"/images/director/director-agent-map.webp"
"/images/systemforge/systemforge-operating-model.webp"
```

They should **not** look like this:

```ts
"/tigranatoyan-ai-portal/images/breadcost/breadcost-dashboard.webp"
```

The base path must be applied only by `assetPath()` and Next config.

---

## 9. Required Change G — Confirm All Referenced Proof Files Exist

Check that the files referenced in `content/portfolio.ts` exist under `public/`.

Minimum required files:

```text
public/images/breadcost/breadcost-dashboard.webp
public/images/breadcost/breadcost-costing-flow.webp
public/images/breadcost/breadcost-architecture.webp

public/images/director/director-agent-map.webp
public/images/director/director-cli-or-dashboard.webp
public/images/director/director-review-flow.webp

public/images/systemforge/systemforge-operating-model.webp
public/images/systemforge/systemforge-architecture-to-code.webp
```

Optional semantic engine files, if referenced:

```text
public/images/project-semantic-engine/semantic-engine-overview.webp
public/images/project-semantic-engine/semantic-engine-output-contracts.webp
public/images/project-semantic-engine/semantic-engine-traceability.webp
```

Important:

If `content/portfolio.ts` references `/images/project-semantic-engine/...`, the folder must be:

```text
public/images/project-semantic-engine/
```

not:

```text
public/images/semantic-engine/
```

Either folder name is acceptable only if the code and files match exactly.

Case-sensitive check:

```text
SystemForge.webp != systemforge.webp
```

GitHub and Linux builds are case-sensitive.

---

## 10. Required Change H — Search for Hardcoded Base Path

Use global search for:

```text
/tigranatoyan-ai-portal
```

Allowed places:

```text
next.config.js
.github/workflows/deploy.yml comments or docs
README/docs explaining GitHub Pages
```

Suspicious places that should be fixed:

```text
app/*.tsx
components/*.tsx
content/*.ts
lib/*.ts except base path helper logic
```

Any runtime link or asset URL should be base-path-neutral and use either:

```tsx
<Link href="/portfolio">
```

or:

```tsx
href={assetPath("/cv/Tigran_Atoyan_AI_CV.pdf")}
```

---

## 11. Local Validation Commands

Run these commands from the repo root:

```bash
npm install
npm run typecheck
npm run build
```

If lint is still configured as `next lint`, try:

```bash
npm run lint
```

If `npm run lint` fails because of Next/ESLint config, do **not** ignore it silently. Report the exact error.

For this task, `npm run build` is the hard deployment gate.

---

## 12. Manual Local Test

Run:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Check:

```text
/
/portfolio
/case-studies
/services
/cv
/contact
```

Expected on local/Vercel root:

```text
URLs should not contain /tigranatoyan-ai-portal
Proof images should load
CV downloads should load from /cv/...
```

---

## 13. Commit and Push

If validation passes:

```bash
git status
git add next.config.js .github/workflows/deploy.yml lib/assetPath.ts app/cv/page.tsx content/cv.ts content/portfolio.ts components/PlaceholderAsset.tsx public/images public/cv
git commit -m "Support Vercel and GitHub Pages deployment paths"
git push origin master
```

If some files were unchanged, Git will ignore them.

---

## 14. Post-Push QA

After push, verify both deployments.

### Vercel

Open:

```text
https://tigranatoyan-ai-portal.vercel.app/
```

Check:

```text
Home opens
Portfolio opens
Proof images visible
CV page opens
CV PDF downloads
CV DOCX downloads
No broken image icons
Navbar works
Footer works
```

### GitHub Pages

Open:

```text
https://tigranatoyan.github.io/tigranatoyan-ai-portal/
```

Check the same items.

---

## 15. Completion Evidence Block

Return this block after finishing:

```text
DEPLOYMENT PATH FIX COMPLETION EVIDENCE

Files changed:
- next.config.js: yes/no
- .github/workflows/deploy.yml: yes/no
- lib/assetPath.ts: yes/no/already correct
- app/cv/page.tsx: yes/no/already correct
- content/cv.ts: yes/no/already correct
- components/PlaceholderAsset.tsx: yes/no/already correct
- content/portfolio.ts: yes/no/already correct

Validation:
- npm install completed? yes/no
- npm run typecheck passed? yes/no
- npm run build passed? yes/no
- npm run lint passed? yes/no/not run

Vercel QA:
- Vercel home opens? yes/no
- Vercel portfolio opens? yes/no
- Vercel proof images visible? yes/no
- Vercel CV downloads work? yes/no

GitHub Pages QA:
- GitHub Pages home opens? yes/no
- GitHub Pages portfolio opens? yes/no
- GitHub Pages proof images visible? yes/no
- GitHub Pages CV downloads work? yes/no

Remaining issues:
1.
2.
3.
```

---

## 16. Definition of Done

This task is done only when:

```text
- Vercel root deployment works without /tigranatoyan-ai-portal in the visible URL
- GitHub Pages deployment still works under /tigranatoyan-ai-portal
- proof images load on both
- CV downloads work on both
- npm run build passes locally
- changes are committed and pushed to master
```
