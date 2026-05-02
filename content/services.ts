export type EmployerRole = {
  title: string;
  whyFit: string;
  proofAssets: string[];
  skills: string[];
  interviewAngle: string;
};

export type ClientOffer = {
  title: string;
  problemSolved: string;
  whatClientGets: string[];
  inputNeeded: string[];
  deliveryFormat: string;
  cta: string;
};

export const employerRoles: EmployerRole[] = [
  {
    title: "AI Solutions Architect",
    whyFit:
      "Combines delivery leadership, product thinking, architecture discipline, and hands-on AI-assisted build experience.",
    proofAssets: ["BreadCost", "The.Director", "SystemForge"],
    skills: ["Solution architecture", "AI workflow design", "Stakeholder translation", "Technical delivery governance"],
    interviewAngle: "Ask how a messy business workflow becomes a governed AI-enabled system without losing control."
  },
  {
    title: "AI Product Manager, AI Agents",
    whyFit:
      "Has designed agent roles, arbiter controls, human review gates, and productized AI workflows instead of treating agents as novelty demos.",
    proofAssets: ["The.Director", "SystemForge"],
    skills: ["Agent role design", "Human-in-the-loop workflows", "Product strategy", "Quality gates"],
    interviewAngle: "Ask how The.Director separates agent action, arbitration, persistence, and human review."
  },
  {
    title: "AI Platform / Agentic Workflow Lead",
    whyFit:
      "Can connect system architecture, governance, tool access, role-class libraries, and delivery workflows into one controlled AI platform direction.",
    proofAssets: ["SystemForge", "The.Director"],
    skills: ["Platform architecture", "Agentic orchestration", "MCP/tooling concepts", "Workflow governance"],
    interviewAngle: "Ask how SystemForge turns natural-language intent into architecture, Jira stories, code paths, and review gates."
  },
  {
    title: "Forward Deployed AI Builder",
    whyFit:
      "Comfortable translating real operational chaos into usable systems, dashboards, and automation workflows with business users close to the work.",
    proofAssets: ["BreadCost", "AI Weekly Business Report", "AI Business OS"],
    skills: ["Discovery", "Rapid prototyping", "Business process mapping", "Dashboard and workflow delivery"],
    interviewAngle: "Ask how BreadCost turns real bakery operations into structured software."
  },
  {
    title: "AI-enabled Delivery Lead",
    whyFit:
      "Brings 15+ years of delivery, product, operations, and technology leadership to AI adoption and execution reliability.",
    proofAssets: ["Delivery Transformation", "Project Progress Reporting", "The.Director"],
    skills: ["SDLC governance", "Executive reporting", "Program delivery", "AI-assisted delivery operations"],
    interviewAngle: "Ask how AI can improve project visibility without creating reporting theater."
  },
  {
    title: "Business Automation & Reporting Systems Builder",
    whyFit:
      "Can design practical reporting engines, CRM/Sheets automations, KPI scorecards, and weekly management routines for teams that need clarity quickly.",
    proofAssets: ["AI Weekly Business Report", "AI Business OS", "Project Progress Reporting"],
    skills: ["Google Sheets", "CRM workflows", "KPI logic", "Executive summaries", "Automation blueprints"],
    interviewAngle: "Ask how a weekly report can turn raw exports into decisions, status, and actions."
  }
];

export const clientOffers: ClientOffer[] = [
  {
    title: "AI Weekly Business Report",
    problemSolved:
      "Leadership has data but no concise weekly view of performance, risks, and next actions.",
    whatClientGets: [
      "Input template for spreadsheet or CRM export",
      "KPI dashboard structure",
      "Red/yellow/green status model",
      "Executive summary format",
      "PDF or HTML report output direction"
    ],
    inputNeeded: ["Sample spreadsheet or CRM export", "Target KPIs", "Reporting audience", "Weekly cadence"],
    deliveryFormat: "Fixed-scope reporting workflow and demo-ready report package.",
    cta: "Request a reporting workflow review"
  },
  {
    title: "AI Project Progress Portal",
    problemSolved:
      "Customer project reporting is difficult to update, inconsistent, and too dependent on manual PowerPoint editing.",
    whatClientGets: [
      "Single-source-of-truth status data model",
      "Static HTML or portal structure",
      "Customer-facing project status sections",
      "AI-assisted narrative update workflow",
      "QA checklist for weekly publishing"
    ],
    inputNeeded: ["Current report sample", "Milestones", "Deadlines", "Status fields", "Audience needs"],
    deliveryFormat: "Project reporting portal blueprint and v0.1 skeleton.",
    cta: "Discuss project visibility"
  },
  {
    title: "AI Business OS Starter Kit",
    problemSolved:
      "Founders lack a clean operating rhythm across KPIs, accountability, reporting, and weekly decisions.",
    whatClientGets: [
      "Executive KPI model",
      "Weekly cadence template",
      "Department scorecard outline",
      "Dashboard and SOP structure",
      "Automation opportunities backlog"
    ],
    inputNeeded: ["Current KPIs", "Team structure", "Management cadence", "Tools used", "Key bottlenecks"],
    deliveryFormat: "Business OS blueprint with templates and implementation backlog.",
    cta: "Map the operating system"
  },
  {
    title: "AI-Assisted MVP Blueprint",
    problemSolved:
      "A founder or team has a product idea but needs structured scope, architecture, backlog, and delivery path before building.",
    whatClientGets: [
      "Product scope map",
      "Domain model outline",
      "Architecture direction",
      "MVP backlog",
      "Risks and validation plan"
    ],
    inputNeeded: ["Idea summary", "Target users", "Must-have workflows", "Constraints", "Preferred stack"],
    deliveryFormat: "MVP blueprint and implementation-ready backlog.",
    cta: "Turn idea into build plan"
  },
  {
    title: "CRM / Google Sheets Automation Blueprint",
    problemSolved:
      "Teams rely on manual copy-paste work between CRM, sheets, status reports, and follow-up tasks.",
    whatClientGets: [
      "Workflow audit",
      "Automation map",
      "Data fields and source-of-truth model",
      "Implementation backlog",
      "Low-code/no-code and custom-code options"
    ],
    inputNeeded: ["CRM access screenshots or export", "Current sheet", "Manual steps", "Desired output", "Security constraints"],
    deliveryFormat: "Automation blueprint with prioritized build steps.",
    cta: "Audit the workflow"
  }
];
