// @ts-check
import { chromium } from "playwright";
import path from "path";
import fs from "fs";

const VERCEL_URL = process.env.PHASE3_VERCEL_URL || "https://tigranatoyan-ai-portal.vercel.app";
const GITHUB_PAGES_URL = process.env.PHASE3_GITHUB_PAGES_URL || "https://tigranatoyan.github.io/tigranatoyan-ai-portal";
const BASE = "_phase3_evidence/screenshots";

const brokenImages = [];
const browserErrors = [];

async function screenshot(page, filePath, label) {
  try {
    await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
    await page.screenshot({ path: filePath, fullPage: false });
    console.log(`  ✓ ${label}`);
  } catch (e) {
    console.error(`  ✗ ${label}: ${e.message}`);
  }
}

async function checkBrokenImages(page, label) {
  const broken = await page.evaluate(() =>
    Array.from(document.images)
      .filter(img => !img.complete || img.naturalWidth === 0)
      .map(img => img.src)
  );
  if (broken.length > 0) {
    brokenImages.push(`[${label}]`);
    broken.forEach(src => brokenImages.push(`  ${src}`));
  }
}

async function run() {
  const browser = await chromium.launch();

  // ── desktop screenshots (Vercel) ──────────────────────────────────────────
  console.log("\n==> Vercel desktop screenshots");
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 1200 } });
  const dp = await desktop.newPage();

  dp.on("console", msg => { if (msg.type() === "error") browserErrors.push(`[vercel] ${msg.text()}`); });
  dp.on("requestfailed", req => browserErrors.push(`[vercel] FAILED: ${req.url()}`));

  const vercelRoutes = [
    { url: "/",         file: "vercel/01-vercel-home.png",              label: "Vercel home" },
    { url: "/portfolio",file: "vercel/02-vercel-portfolio-top.png",     label: "Vercel portfolio top" },
    { url: "/cv",       file: "vercel/07-vercel-cv.png",                label: "Vercel CV" },
    { url: "/contact",  file: "vercel/08-vercel-contact.png",           label: "Vercel contact" },
  ];

  for (const r of vercelRoutes) {
    await dp.goto(`${VERCEL_URL}${r.url}`, { waitUntil: "domcontentloaded", timeout: 30000 });
    await screenshot(dp, path.join(BASE, r.file), r.label);
    await checkBrokenImages(dp, r.label);
  }

  // portfolio section scrolls
  const portfolioSections = [
    { id: "breadcost",               file: "vercel/03-vercel-portfolio-breadcost.png",       label: "Vercel portfolio BreadCost" },
    { id: "the-director",            file: "vercel/04-vercel-portfolio-director.png",        label: "Vercel portfolio The.Director" },
    { id: "systemforge-architektr",  file: "vercel/05-vercel-portfolio-systemforge.png",    label: "Vercel portfolio SystemForge" },
    { id: "project-semantic-engine", file: "vercel/06-vercel-portfolio-semantic-engine.png",label: "Vercel portfolio SemanticEngine" },
  ];

  for (const s of portfolioSections) {
    await dp.goto(`${VERCEL_URL}/portfolio`, { waitUntil: "domcontentloaded", timeout: 30000 });
    await dp.evaluate(id => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    }, s.id);
    await dp.waitForTimeout(600);
    await screenshot(dp, path.join(BASE, s.file), s.label);
    await checkBrokenImages(dp, s.label);
  }

  await desktop.close();

  // ── mobile screenshots (Vercel) ───────────────────────────────────────────
  console.log("\n==> Vercel mobile screenshots");
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mp = await mobile.newPage();

  await mp.goto(`${VERCEL_URL}/`, { waitUntil: "domcontentloaded", timeout: 30000 });
  await screenshot(mp, path.join(BASE, "mobile/09-vercel-mobile-home.png"), "Vercel mobile home");

  await mp.goto(`${VERCEL_URL}/portfolio`, { waitUntil: "domcontentloaded", timeout: 30000 });
  await screenshot(mp, path.join(BASE, "mobile/10-vercel-mobile-portfolio.png"), "Vercel mobile portfolio");

  await mobile.close();

  // ── GitHub Pages screenshots ───────────────────────────────────────────────
  console.log("\n==> GitHub Pages screenshots");
  const gp = await browser.newContext({ viewport: { width: 1440, height: 1200 } });
  const gpp = await gp.newPage();

  gpp.on("requestfailed", req => browserErrors.push(`[github-pages] FAILED: ${req.url()}`));

  const gpRoutes = [
    { url: "/",         file: "github-pages/11-github-pages-home.png",      label: "GitHub Pages home" },
    { url: "/portfolio",file: "github-pages/12-github-pages-portfolio.png", label: "GitHub Pages portfolio" },
    { url: "/cv",       file: "github-pages/13-github-pages-cv.png",        label: "GitHub Pages CV" },
  ];

  for (const r of gpRoutes) {
    await gpp.goto(`${GITHUB_PAGES_URL}${r.url}`, { waitUntil: "domcontentloaded", timeout: 30000 });
    await screenshot(gpp, path.join(BASE, r.file), r.label);
    await checkBrokenImages(gpp, r.label);
  }

  await gp.close();
  await browser.close();

  // ── write reports ─────────────────────────────────────────────────────────
  const biReport = path.join(BASE, "broken-images-report.txt");
  fs.writeFileSync(biReport, brokenImages.length > 0
    ? `Broken images found:\n${brokenImages.join("\n")}`
    : "No broken images detected.", "utf8");

  const beReport = path.join(BASE, "browser-errors-report.txt");
  fs.writeFileSync(beReport, browserErrors.length > 0
    ? `Browser errors:\n${browserErrors.join("\n")}`
    : "No browser errors detected.", "utf8");

  console.log(`\n  Broken images report: ${biReport}`);
  console.log(`  Browser errors report: ${beReport}`);

  if (brokenImages.length > 0) {
    console.error("\n  WARNING: Broken images found — check broken-images-report.txt");
    process.exit(1);
  }
}

run().catch(err => {
  console.error("Screenshot script failed:", err.message);
  process.exit(1);
});
