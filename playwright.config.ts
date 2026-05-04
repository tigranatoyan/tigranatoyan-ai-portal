import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false, // sequential — avoids race conditions on first-load compilation
  forbidOnly: !!process.env.CI,
  retries: 1,
  timeout: 60_000,   // each test gets 60s (Next.js pages can be slow to first-compile)
  reporter: "list",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],
  // Uses the pre-built production server. Run `npm run build` before `npm test`.
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
