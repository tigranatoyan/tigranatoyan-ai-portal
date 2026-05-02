# Repository Setup Instructions

The Phase 2 artifact already contains a local folder named:

```text
tigranatoyan-ai-portal
```

## Option A — Use the generated folder

From the parent directory:

```bash
cd tigranatoyan-ai-portal
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Option B — Create a fresh Next.js app manually

Use this only if you want to regenerate the app from scratch and then copy the generated files from this package into it.

```bash
npx create-next-app@latest tigranatoyan-ai-portal \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir false \
  --import-alias "@/*"

cd tigranatoyan-ai-portal
npm run dev
```

## Create the GitHub repo

1. Open GitHub.
2. Create a new private or public repository named:

```text
tigranatoyan-ai-portal
```

3. Do not initialize with README if you plan to push this generated folder as-is.
4. From the local project folder, run:

```bash
git init
git add .
git commit -m "Phase 2 technical skeleton and evidence prep"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tigranatoyan-ai-portal.git
git push -u origin main
```

## Do not deploy yet

Vercel deployment is intentionally deferred until Phase 3 or explicit approval.
