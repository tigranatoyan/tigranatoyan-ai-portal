export type PortfolioStatus = "proof-ready" | "needs-assets" | "private-proof";

export type PortfolioItem = {
  slug: string;
  name: string;
  type: string;
  shortDescription: string;
  problemSolved: string;
  technologies: string[];
  whatItProves: string;
  status: PortfolioStatus;
  priority: "primary" | "secondary";
  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;
    docs?: string;
    video?: string;
  };
  assetPlaceholders: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "systemforge-architektr",
    name: "SystemForge / Architektr",
    type: "AI-first software delivery architecture",
    shortDescription:
      "A product architecture for an AI-first software delivery factory that turns business intent into governed delivery artifacts and code execution paths.",
    problemSolved:
      "Most AI coding flows are tool-level helpers, not operating systems for architecture, product decisions, quality gates, and human approval.",
    technologies: [
      "Agentic workflow design",
      "Architecture-to-Jira-to-code model",
      "Human approval gates",
      "Arbiter quality gates",
      "Knowledge Engine concept",
      "Recursive sub-Director model"
    ],
    whatItProves:
      "Tigran can design serious AI product systems, not only prompt isolated assistants or build generic landing pages.",
    status: "needs-assets",
    priority: "primary",
    links: {
      docs: "#placeholder-systemforge-docs",
      caseStudy: "/case-studies#systemforge-architektr",
      video: "#placeholder-systemforge-video"
    },
    assetPlaceholders: [
      "/images/systemforge/systemforge-architecture-diagram-placeholder.png",
      "/images/systemforge/director-arbiter-flow-placeholder.png"
    ]
  },
  {
    slug: "the-director",
    name: "The.Director",
    type: "Controlled multi-agent orchestration platform",
    shortDescription:
      "A proof point for the SystemForge vision: Director, Arbiter, expert roles, CLI/API/dashboard flows, persistence, metrics, tracing, and human review.",
    problemSolved:
      "Uncontrolled agent chains are difficult to trust. The.Director structures role selection, workflow control, review gates, and traceable execution.",
    technologies: [
      "Kotlin / Spring Boot",
      "REST API",
      "CLI",
      "React dashboard",
      "MCP tool layer",
      "Docker",
      "Migrations",
      "Audit / metrics / tracing"
    ],
    whatItProves:
      "Tigran can move from AI vision to a concrete agentic platform architecture with governance, operator visibility, and delivery mechanics.",
    status: "private-proof",
    priority: "primary",
    links: {
      github: "#placeholder-private-or-sanitized-repo",
      demo: "#placeholder-director-demo",
      caseStudy: "/case-studies#the-director",
      video: "#placeholder-director-walkthrough"
    },
    assetPlaceholders: [
      "/images/director/cli-flow-placeholder.png",
      "/images/director/dashboard-placeholder.png",
      "/images/director/agent-class-map-placeholder.png"
    ]
  },
  {
    slug: "breadcost",
    name: "BreadCost",
    type: "Full-stack business software proof",
    shortDescription:
      "A bakery manufacturing cost accounting system built around real operational complexity: recipes, production, inventory, cost tracking, role-based workflows, bilingual UI, and QA.",
    problemSolved:
      "Bakery operations are messy when recipes, yields, material costs, production plans, and reporting live in disconnected spreadsheets and manual judgment.",
    technologies: [
      "Java / Spring Boot",
      "PostgreSQL",
      "Event-sourced CQRS architecture",
      "Next.js / React / TypeScript",
      "RBAC",
      "Armenian / English UI",
      "Playwright E2E",
      "Jira / release planning"
    ],
    whatItProves:
      "Tigran can translate a complex real-world business domain into structured requirements, architecture, working software, tests, and delivery artifacts.",
    status: "needs-assets",
    priority: "primary",
    links: {
      github: "#placeholder-breadcost-github",
      demo: "#placeholder-breadcost-demo",
      caseStudy: "/case-studies#breadcost",
      docs: "#placeholder-breadcost-docs",
      video: "#placeholder-breadcost-walkthrough"
    },
    assetPlaceholders: [
      "/images/breadcost/dashboard-placeholder.png",
      "/images/breadcost/architecture-placeholder.png",
      "/images/breadcost/test-evidence-placeholder.png"
    ]
  },
  {
    slug: "ai-project-progress-reporting",
    name: "AI Project Progress Reporting Framework",
    type: "Executive project visibility system",
    shortDescription:
      "A single-source-of-truth approach for project progress reporting that can generate static HTML, dashboards, status views, and customer-ready evidence from structured delivery data.",
    problemSolved:
      "PowerPoint-style reporting becomes brittle when project dates, deadlines, statuses, and visuals must be edited manually every week.",
    technologies: [
      "Jira or Excel source data",
      "Static HTML portal concept",
      "AI-assisted narrative generation",
      "Executive dashboard logic",
      "Project status governance"
    ],
    whatItProves:
      "Tigran can turn delivery reporting pain into a maintainable AI-assisted reporting product for customers and internal stakeholders.",
    status: "needs-assets",
    priority: "secondary",
    links: {
      demo: "#placeholder-project-progress-demo",
      docs: "#placeholder-project-progress-docs"
    },
    assetPlaceholders: [
      "/images/project-progress/progress-portal-placeholder.png"
    ]
  },
  {
    slug: "ai-business-os-blackscalemedia",
    name: "AI Business OS / BlackScaleMedia",
    type: "Operating system, dashboard, and CRM automation proof",
    shortDescription:
      "Business operating system concepts for executive visibility, KPI governance, CRM automation, reporting cadence, and cross-functional operating structure.",
    problemSolved:
      "Founder-led teams often lack a reliable management rhythm, KPI logic, and executive view across revenue, delivery, finance, and operations.",
    technologies: [
      "Google Sheets engines",
      "CRM workflow design",
      "KPI scorecards",
      "Executive dashboards",
      "Monday.com OKRs",
      "SOP and governance design"
    ],
    whatItProves:
      "Tigran can design operating infrastructure that connects strategy, dashboards, workflows, accountability, and weekly management cadence.",
    status: "private-proof",
    priority: "secondary",
    links: {
      docs: "#placeholder-business-os-docs",
      demo: "#placeholder-business-os-demo"
    },
    assetPlaceholders: [
      "/images/business-reporting/business-os-placeholder.png"
    ]
  },
  {
    slug: "ai-weekly-business-report-demo",
    name: "AI Weekly Business Report Demo",
    type: "Fast monetizable AI automation service proof",
    shortDescription:
      "A practical reporting demo that turns spreadsheet, Google Sheet, or CRM export data into KPI status, executive summary, recommendations, and PDF/HTML report output.",
    problemSolved:
      "Small teams need clear weekly business review outputs without manually interpreting noisy exports and rebuilding reports from scratch.",
    technologies: [
      "Excel / Google Sheets",
      "CRM export parsing",
      "KPI dashboard",
      "Red/yellow/green status logic",
      "AI-style executive summary",
      "PDF / HTML report output"
    ],
    whatItProves:
      "Tigran can package AI automation into a concrete business offer with immediate operational value.",
    status: "needs-assets",
    priority: "secondary",
    links: {
      demo: "#placeholder-weekly-report-demo",
      video: "#placeholder-weekly-report-video"
    },
    assetPlaceholders: [
      "/images/business-reporting/weekly-report-dashboard-placeholder.png"
    ]
  }
];

export const featuredPortfolioItems = portfolioItems.filter((item) => item.priority === "primary");
