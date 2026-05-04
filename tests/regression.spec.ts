import { test, expect } from "@playwright/test";

// ─── Pages that must load without errors ─────────────────────────────────────

const pages = [
  { name: "Home",         path: "/" },
  { name: "Portfolio",    path: "/portfolio" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Services",     path: "/services" },
  { name: "CV",           path: "/cv" },
  { name: "Contact",      path: "/contact" },
];

for (const { name, path } of pages) {
  test(`${name} page loads without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(path);
    await expect(page).not.toHaveTitle(/error|not found/i);
    expect(errors).toHaveLength(0);
  });
}

// ─── Navbar consistency ───────────────────────────────────────────────────────

test("Navbar: 'Contact' nav link goes to /contact", async ({ page }) => {
  await page.goto("/");
  // Contact is the last nav link in site.navigation rendered inside header
  const link = page.locator("header a[href='/contact']").first();
  await expect(link).toBeAttached();
});

test("Navbar: 'Talk to AI' pill button goes to /contact#chatbot", async ({ page }) => {
  await page.goto("/");
  const btn = page.locator("header a[href='/contact#chatbot']");
  await expect(btn).toBeAttached();
  await expect(btn).toContainText("Talk to AI");
});

test("Navbar: 'Talk to AI' button is present on every page", async ({ page }) => {
  for (const { path } of pages) {
    await page.goto(path);
    await expect(page.locator("header a[href='/contact#chatbot']")).toBeAttached();
  }
});

// ─── No dev/placeholder remnants in rendered HTML ────────────────────────────

const devStrings = [
  "#placeholder-",
  "honest placeholders",
  "missing evidence",
  "[placeholder]",
];

for (const str of devStrings) {
  test(`No dev remnant: "${str}" not in any page`, async ({ page }) => {
    for (const { path } of pages) {
      await page.goto(path);
      const html = await page.content();
      expect(html).not.toContain(str);
    }
  });
}

// ─── Footer consistency ───────────────────────────────────────────────────────

test("Footer has 'Services / Role Fit' link (matches navbar label)", async ({ page }) => {
  await page.goto("/");
  const link = page.locator("footer a[href='/services']");
  await expect(link).toContainText("Services / Role Fit");
});

test("Footer links are present on every page", async ({ page }) => {
  const footerHrefs = ["/portfolio", "/case-studies", "/services", "/cv", "/contact"];
  for (const { path } of pages) {
    await page.goto(path);
    for (const href of footerHrefs) {
      await expect(page.locator(`footer a[href='${href}']`)).toBeAttached();
    }
  }
});

// ─── CV proof links all go to /case-studies ──────────────────────────────────

const cvProofLinks = [
  { label: "BreadCost",                href: "/case-studies#breadcost" },
  { label: "The.Director",             href: "/case-studies#the-director" },
  { label: "SystemForge / Architektr", href: "/case-studies#systemforge-architektr" },
  { label: "Project Semantic Engine",  href: "/case-studies#project-semantic-engine" },
  { label: "AI Weekly Business Report",href: "/case-studies#ai-weekly-business-report" },
];

for (const { label, href } of cvProofLinks) {
  test(`CV proof link "${label}" → ${href}`, async ({ page }) => {
    await page.goto("/cv");
    const link = page.locator(`a[href='${href}']`).first();
    await expect(link).toBeAttached();
    await expect(link).toContainText(label);
  });
}

// ─── Contact page ─────────────────────────────────────────────────────────────

test("Contact: 'Send an email' copy button is present", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator("button", { hasText: /Send an email/i })).toBeVisible();
});

test("Contact: 'Connect on LinkedIn' link is external", async ({ page }) => {
  await page.goto("/contact");
  const link = page.locator("a", { hasText: /Connect on LinkedIn/i });
  const href = await link.getAttribute("href");
  expect(href).toContain("linkedin.com");
});

test("Contact: chatbot section anchor #chatbot exists", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator("#chatbot")).toBeAttached();
});

// ─── Page-to-page CTA journey ─────────────────────────────────────────────────

test("CTA journey: Home has primary CTA to /portfolio", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("a[href='/portfolio']").first()).toBeAttached();
});

test("CTA journey: Portfolio has primary CTA to /case-studies", async ({ page }) => {
  await page.goto("/portfolio");
  await expect(page.locator("a[href='/case-studies']").first()).toBeAttached();
});

test("CTA journey: CV has primary CTA to /contact", async ({ page }) => {
  await page.goto("/cv");
  // Primary CTA button "Start contact" → /contact
  await expect(page.locator("a[href='/contact']").first()).toBeAttached();
});

// ─── Case study anchors exist in DOM ─────────────────────────────────────────

const caseStudySlugs = [
  "systemforge-architektr",
  "breadcost",
  "the-director",
  "delivery-transformation",
  "ai-weekly-business-report",
  "project-semantic-engine",
];

test("Case studies page: all project anchors exist", async ({ page }) => {
  await page.goto("/case-studies");
  for (const slug of caseStudySlugs) {
    await expect(page.locator(`#${slug}`)).toBeAttached();
  }
});

// ─── No broken #placeholder- links in portfolio ───────────────────────────────

test("Portfolio: no #placeholder- hrefs in rendered links", async ({ page }) => {
  await page.goto("/portfolio");
  const count = await page.locator("a[href^='#placeholder']").count();
  expect(count).toBe(0);
});
