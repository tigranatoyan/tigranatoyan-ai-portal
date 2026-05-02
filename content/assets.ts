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
    expectedFiles: ["Tigran_Atoyan_AI_CV.pdf", "Tigran_Atoyan_AI_CV.docx"],
    currentStatus: "placeholder",
    mandatoryForV01: true,
    canWaitUntilV1: false,
    notes: "Add final tailored CV files before preview deployment."
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
    expectedFiles: ["dashboard.webp", "architecture.webp", "tests.webp", "repo-structure.webp"],
    currentStatus: "missing",
    mandatoryForV01: true,
    canWaitUntilV1: false,
    sensitiveDataWarning: "Remove customer, employee, supplier, cost, pricing, and private repo details unless explicitly safe.",
    notes: "Primary proof asset. Needs at least 3 sanitized images."
  },
  {
    group: "The.Director screenshots",
    folder: "/public/images/director",
    expectedFiles: ["cli-flow.webp", "dashboard.webp", "agent-map.webp", "workflow-trace.webp"],
    currentStatus: "private-needs-sanitizing",
    mandatoryForV01: true,
    canWaitUntilV1: false,
    sensitiveDataWarning: "Sanitize repo names, tokens, internal paths, prompts, and logs before publishing.",
    notes: "Primary proof asset. Public/sanitized repo decision still open."
  },
  {
    group: "SystemForge diagrams",
    folder: "/public/images/systemforge",
    expectedFiles: ["architecture.webp", "director-arbiter-flow.webp", "knowledge-engine.webp"],
    currentStatus: "missing",
    mandatoryForV01: true,
    canWaitUntilV1: false,
    notes: "Architecture diagrams can be created before working screenshots exist."
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
    expectedFiles: ["og-image.png"],
    currentStatus: "placeholder",
    mandatoryForV01: false,
    canWaitUntilV1: true,
    notes: "Use final LinkedIn-friendly preview art before public launch."
  }
];
