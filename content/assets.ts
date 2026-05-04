export type AssetStatus = "missing" | "placeholder" | "ready" | "private-needs-sanitizing";

export type AssetGroup = {
  group: string;
  folder: string;
  expectedFiles: string[];
  currentStatus: AssetStatus;
  mandatoryForV01: boolean;
  canWaitUntilV1: boolean;
  sensitiveDataWarning?: string;
  notes: string;
};

export const assetGroups: AssetGroup[] = [
  {
    group: "CV files",
    folder: "/public/cv",
    expectedFiles: ["Tigran_Atoyan.pdf", "Tigran_Atoyan.docx"],
    currentStatus: "ready",
    mandatoryForV01: true,
    canWaitUntilV1: false,
    notes: "CV files are present. Verify portal URL is in the header/contact area."
  },
  {
    group: "Profile photo/avatar",
    folder: "/public/images/profile",
    expectedFiles: ["profile-photo.webp"],
    currentStatus: "missing",
    mandatoryForV01: false,
    canWaitUntilV1: true,
    sensitiveDataWarning: "Use a professional photo or approved avatar; avoid private background details.",
    notes: "Optional for v0.1 because the proof assets matter more than portrait branding."
  },
  {
    group: "BreadCost screenshots",
    folder: "/public/images/breadcost",
    expectedFiles: ["breadcost-proof-overview.svg"],
    currentStatus: "ready",
    mandatoryForV01: true,
    canWaitUntilV1: false,
    sensitiveDataWarning: "Remove customer, employee, supplier, cost, pricing, and private repo details unless explicitly safe.",
    notes: "Primary proof asset. Public-safe overview visual added. Real screenshots can be added later only after sanitization."
  },
  {
    group: "The.Director screenshots",
    folder: "/public/images/director",
    expectedFiles: ["director-proof-overview.svg"],
    currentStatus: "ready",
    mandatoryForV01: true,
    canWaitUntilV1: false,
    sensitiveDataWarning: "Sanitize repo names, tokens, internal paths, prompts, and logs before publishing.",
    notes: "Primary proof asset. Public-safe overview visual added. Raw logs, prompts, tokens, private paths, endpoints, and repo details must remain private."
  },
  {
    group: "SystemForge diagrams",
    folder: "/public/images/systemforge",
    expectedFiles: ["systemforge-proof-overview.svg"],
    currentStatus: "ready",
    mandatoryForV01: true,
    canWaitUntilV1: false,
    notes: "Primary proof asset. Public-safe architecture overview visual added. Deeper implementation diagrams can be added later."
  },
  {
    group: "Project Semantic Engine",
    folder: "/public/images/project-semantic-engine",
    expectedFiles: ["repo-overview.webp", "semantic-layers.webp", "arcmap-pipeline.webp"],
    currentStatus: "missing",
    mandatoryForV01: false,
    canWaitUntilV1: true,
    sensitiveDataWarning: "Repo is public, but remove browser/account details from screenshots.",
    notes: "Secondary public proof asset. Strengthens SystemForge/The.Director by showing the semantic discovery layer behind AI-assisted delivery. Recommended for v1; not a Phase 3 blocker."
  },
  {
    group: "Business reporting screenshots",
    folder: "/public/images/business-reporting",
    expectedFiles: ["weekly-report-input.webp", "weekly-report-dashboard.webp", "weekly-report-output.webp"],
    currentStatus: "missing",
    mandatoryForV01: false,
    canWaitUntilV1: true,
    sensitiveDataWarning: "Use mock or anonymized data only.",
    notes: "Supports freelance/client conversion."
  },
  {
    group: "Project progress portal screenshots",
    folder: "/public/images/project-progress",
    expectedFiles: ["progress-overview.webp", "timeline.webp", "risk-status.webp"],
    currentStatus: "missing",
    mandatoryForV01: false,
    canWaitUntilV1: true,
    sensitiveDataWarning: "Remove customer names, dates, budgets, and project specifics unless public.",
    notes: "Useful for delivery/reporting role fit."
  },
  {
    group: "Delivery transformation proof",
    folder: "/public/images/delivery-transformation",
    expectedFiles: ["delivery-before-after.webp", "governance-dashboard.webp"],
    currentStatus: "missing",
    mandatoryForV01: false,
    canWaitUntilV1: true,
    sensitiveDataWarning: "Use generalized metrics or sanitized charts. Do not expose client-confidential performance data.",
    notes: "Supports seniority proof."
  },
  {
    group: "Videos",
    folder: "/public/videos",
    expectedFiles: ["hero-video-link.txt", "breadcost-walkthrough-link.txt", "director-walkthrough-link.txt"],
    currentStatus: "placeholder",
    mandatoryForV01: false,
    canWaitUntilV1: true,
    notes: "Store external video URLs or add local files later. Homepage placeholder is already safe."
  },
  {
    group: "OpenGraph image",
    folder: "/public/og",
    expectedFiles: ["app/og/og-image.png/route.tsx"],
    currentStatus: "ready",
    mandatoryForV01: false,
    canWaitUntilV1: true,
    notes: "Dynamic Next.js OG image route serves /og/og-image.png at 1200x630. Static public/og/og-image.png can be added later if needed for social preview tooling."
  }
];
