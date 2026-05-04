export type CaseStudy = {
  slug: string;
  title: string;
  problem: string;
  role: string;
  approach: string[];
  whatWasBuilt: string[];
  technologies: string[];
  resultOrProof: string;
  whatThisProves: string;
  missingEvidence: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "systemforge-architektr",
    title: "SystemForge / Architektr: AI-first software delivery architecture as a product",
    problem:
      "Most AI coding tools operate at the assistant layer: they autocomplete, generate snippets, or run isolated tasks. None of them address the operating system layer — how business intent becomes governed architecture, how architecture becomes delivery artifacts, how delivery artifacts become code execution paths, and how quality gates and human approval prevent runaway automation.",
    role:
      "Founder, product architect, and AI-assisted system designer. Responsible for concept, operating model design, agent role classification, governance layer design, and product architecture documentation.",
    approach: [
      "Separated AI-first software delivery into distinct layers: discovery, architecture, artifact generation, delivery execution, and quality arbitration.",
      "Designed a recursive sub-Director model where orchestration can be delegated without losing control.",
      "Placed human approval gates and Arbiter quality control at the architecture level, not as optional overlays.",
      "Defined a Knowledge Engine concept to accumulate and apply institutional context across delivery cycles.",
      "Linked SystemForge to The.Director as its proof-of-concept implementation layer."
    ],
    whatWasBuilt: [
      "Product architecture concept and operating model for an AI-first software delivery factory.",
      "Agent role taxonomy: Director, Arbiter, Analyst, Architect, Coder, Reviewer, QA, Domain Expert, Ops/Resource.",
      "Architecture-to-Jira-to-code pipeline model.",
      "Governance layer design: human review gates, Arbiter quality gates, audit trails.",
      "Knowledge Engine concept for institutional memory across delivery cycles.",
      "SystemForge/Architektr product documentation and delivery vision."
    ],
    technologies: [
      "Agentic workflow design",
      "Architecture-to-Jira-to-code model",
      "Human approval gates",
      "Arbiter quality gates",
      "Knowledge Engine concept",
      "Recursive sub-Director model"
    ],
    resultOrProof:
      "The.Director serves as the concrete proof-of-concept for the SystemForge vision. Architecture documentation, operating model diagrams, and agent role specifications are the primary evidence assets. Public or sanitized access decision pending.",
    whatThisProves:
      "Tigran can design serious AI product systems at the platform architecture level — not just prompt isolated assistants or wire together API calls, but build the governance, orchestration, and delivery operating model that makes AI-assisted software delivery trustworthy and scalable.",
    missingEvidence: [
      "SystemForge operating model diagram",
      "Architecture-to-delivery pipeline visual",
      "Agent role taxonomy diagram",
      "Governance layer architecture diagram",
      "Knowledge Engine concept diagram"
    ]
  },
  {
    slug: "breadcost",
    title: "BreadCost: From bakery operations chaos to full-stack management system",
    problem:
      "Bakery operations contain real-world complexity: recipes, yields, raw materials, production planning, inventory, costs, POS flows, and reporting. The problem is not simply making screens; it is turning an operating model into software.",
    role:
      "Product owner, domain analyst, architecture driver, AI-assisted builder, QA planner, and delivery planner.",
    approach: [
      "Mapped bakery operations into domains, workflows, rules, and invariants.",
      "Structured the system around manufacturing cost accounting instead of generic inventory screens.",
      "Separated backend, frontend, testing, role access, bilingual UI, and delivery planning artifacts.",
      "Used AI-assisted workflows to accelerate specification, architecture, and implementation planning while keeping human review gates."
    ],
    whatWasBuilt: [
      "Java / Spring Boot backend plan and implementation structure.",
      "PostgreSQL data model direction.",
      "Event-sourced CQRS architecture direction.",
      "Next.js / React / TypeScript frontend structure.",
      "RBAC, bilingual Armenian/English UI, QA plans, Playwright E2E coverage, architecture docs, requirements docs, Jira/release planning."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "CQRS",
      "Event sourcing",
      "Next.js",
      "React",
      "TypeScript",
      "Playwright",
      "Jira"
    ],
    resultOrProof:
      "Primary proof will come from screenshots, architecture diagrams, repo structure, requirement artifacts, and test evidence. Current site version marks these as placeholders until sanitized assets are collected.",
    whatThisProves:
      "Tigran can turn messy business operations into structured product architecture, implementation plans, tested software, and executive-visible proof.",
    missingEvidence: [
      "Sanitized dashboard screenshots",
      "Architecture diagram",
      "Repo or sanitized repo screenshots",
      "Playwright test screenshot or terminal output",
      "Demo video walkthrough"
    ]
  },
  {
    slug: "the-director",
    title: "The.Director: Controlled multi-agent orchestration for AI software delivery",
    problem:
      "Agentic software work can become unreliable when agents act without clear roles, arbitration, audit, persistence, or human approval. The.Director addresses the control layer, not just the assistant layer.",
    role:
      "Founder/product architect, workflow designer, role-class designer, governance designer, and AI-assisted implementation driver.",
    approach: [
      "Designed a Director / Arbiter / expert-role model for controlled agent orchestration.",
      "Separated human review, persistence, audit, metrics, tracing, and tool access from raw agent output.",
      "Linked the platform to the wider SystemForge vision: AI-first architecture-to-delivery workflow.",
      "Defined agent classes such as Analyst, Architect, Coder, Validator, Arbiter, Product Owner, Project Manager, Designer, and QA."
    ],
    whatWasBuilt: [
      "Kotlin / Spring Boot backend direction.",
      "CLI and REST API interface concepts.",
      "React dashboard direction.",
      "MCP tool layer concept.",
      "Human review flow, persistence, audit, metrics, tracing, Docker, and migrations direction."
    ],
    technologies: [
      "Kotlin",
      "Spring Boot",
      "REST API",
      "CLI",
      "React",
      "MCP",
      "Docker",
      "Database migrations",
      "Observability"
    ],
    resultOrProof:
      "Current proof is expected through repo screenshots, workflow examples, CLI/API/dashboard screen captures, and a walkthrough video. Public or sanitized access still needs a decision.",
    whatThisProves:
      "Tigran can think and build at the AI platform layer: orchestration, governance, role design, human-in-the-loop review, and controlled software delivery.",
    missingEvidence: [
      "Public or sanitized repo decision",
      "CLI screenshot",
      "Dashboard screenshot",
      "Workflow trace screenshot",
      "Agent/arbiter diagram",
      "Demo video"
    ]
  },
  {
    slug: "delivery-transformation",
    title: "Delivery Transformation: From chaotic execution to governed delivery systems",
    problem:
      "Delivery organizations can have unclear ownership, weak metrics, delayed visibility, low predictability, and fragmented governance. The issue is usually system design, not just team effort.",
    role:
      "Delivery, product, operations, and governance leader responsible for improving execution systems and executive visibility.",
    approach: [
      "Built governance cadence around delivery status, KPI visibility, and accountability.",
      "Reduced ambiguity with clearer SDLC controls, dashboarding, reporting, and escalation logic.",
      "Focused on lead time, cycle time, on-time delivery, change failure, stakeholder communication, and executive-facing clarity.",
      "Converted operational chaos into inspectable management systems."
    ],
    whatWasBuilt: [
      "Delivery dashboards and KPI cadence.",
      "SDLC governance and reporting structures.",
      "Executive communication routines.",
      "Operational accountability model."
    ],
    technologies: [
      "Delivery governance",
      "KPI dashboards",
      "SDLC controls",
      "Executive reporting",
      "Operational cadence"
    ],
    resultOrProof:
      "Career proof includes 15+ years of leadership and reported delivery improvement from approximately 30% on-time delivery to approximately 90%, plus reduced lead/cycle times and change-failure rate. Supporting references or sanitized visuals should be collected before public claim expansion.",
    whatThisProves:
      "Tigran brings senior delivery judgment to AI systems, which matters when prototypes need to become reliable operating infrastructure.",
    missingEvidence: [
      "Sanitized before/after metrics chart",
      "Delivery dashboard screenshot",
      "Reference-safe project context notes",
      "CV evidence alignment"
    ]
  },
  {
    slug: "ai-weekly-business-report",
    title: "AI Weekly Business Report: From spreadsheet noise to executive clarity",
    problem:
      "Small teams often have CRM exports, spreadsheets, and status notes, but no concise weekly executive view showing what is growing, what is stuck, and what action is needed.",
    role:
      "Offer designer, reporting systems builder, KPI logic designer, and AI-assisted summary workflow designer.",
    approach: [
      "Defined a simple input path from Excel, Google Sheets, or CRM exports.",
      "Mapped raw metrics into a business review format with red/yellow/green status logic.",
      "Created executive summary structure focused on decisions and next actions.",
      "Packaged the workflow as a fixed-scope service suitable for fast freelance/client delivery."
    ],
    whatWasBuilt: [
      "Input template direction.",
      "KPI dashboard direction.",
      "Status logic direction.",
      "AI-style executive summary output.",
      "PDF/HTML report direction."
    ],
    technologies: [
      "Excel",
      "Google Sheets",
      "CRM exports",
      "KPI dashboarding",
      "AI summary generation",
      "PDF / HTML report output"
    ],
    resultOrProof:
      "This is positioned as a practical demo and service offer. The v0.1 portal needs sample input data, a sample dashboard, and a sample generated report screenshot.",
    whatThisProves:
      "Tigran can turn AI automation into a useful business deliverable, not just a technical experiment.",
    missingEvidence: [
      "Sample input sheet screenshot",
      "Sample dashboard screenshot",
      "Generated report screenshot or PDF",
      "Demo video"
    ]
  },
  {
    slug: "project-semantic-engine",
    title: "Project Semantic Engine: From fuzzy discovery to traceable delivery artifacts",
    problem:
      "Software discovery often moves too quickly from conversation to backlog, losing context, rules, exceptions, state, data, non-functional constraints, and traceability. This weakens AI-assisted delivery because code generation begins before the system meaning is stable.",
    role:
      "Creator and system designer of the public semantic artifact model, stage pipeline, ArcMap concept, repository structure, schemas, prompts, examples, and validation direction.",
    approach: [
      "Defined software discovery as a staged semantic pipeline rather than a feature list.",
      "Placed ArcMap at the center as the durable unit connecting actors, value flows, operational arcs, handoffs, permissions, timing rules, outcomes, and recovery paths.",
      "Structured the repository around docs, artifacts, schemas, prompts, tools, examples, and CI/CD validation direction.",
      "Designed the engine to be human-readable, machine-friendly, versioned, traceable, and suitable for AI-assisted delivery workflows."
    ],
    whatWasBuilt: [
      "Public GitHub repository for Project Semantic Engine.",
      "Semantic stage model from mandate through validation and learning loop.",
      "Artifact-driven repository structure with docs, artifacts, schemas, prompts, tools, examples, and GitHub workflow direction.",
      "Traceability-first language for turning business/system understanding into requirements, architecture, delivery artifacts, and validation loops."
    ],
    technologies: [
      "Python",
      "Markdown",
      "YAML / JSON schema concepts",
      "GitHub repository structure",
      "Artifact validation direction",
      "CI/CD workflow direction",
      "AI-assisted discovery prompts"
    ],
    resultOrProof:
      "Public repository available at https://github.com/tigranatoyan/project-semantic-engine. Current status is version 0.1 working foundation, with language and schema formalization in progress.",
    whatThisProves:
      "Tigran can design the semantic control layer needed before AI-assisted code generation: discovery artifacts, traceability, validation, critique gates, and architecture-to-delivery continuity.",
    missingEvidence: [
      "Repository overview screenshot",
      "Semantic layers diagram",
      "ArcMap pipeline diagram",
      "Short walkthrough video or architecture explainer"
    ]
  }
];
