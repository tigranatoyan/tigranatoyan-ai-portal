export type NavLink = {
  label: string;
  href: string;
};

export type ProofBadge = {
  label: string;
  description: string;
  asset: string;
};

export const site = {
  name: "Tigran Atoyan",
  primaryTitle: "AI Systems & Operations Builder",
  headline: "AI Systems & Operations Builder turning business chaos into working software, dashboards, and agentic workflows.",
  subheadline:
    "Senior delivery, product, and operations leader with hands-on AI-assisted building experience across SystemForge, The.Director, BreadCost, GPT workflows, CRM automation, reporting systems, and full-stack prototypes.",
  shortBio:
    "Tigran Atoyan is an AI Systems & Operations Builder based in Yerevan, Armenia. He combines 15+ years of delivery, product, operations, and technology leadership with hands-on AI-assisted building. His work includes BreadCost, a full-stack bakery manufacturing cost accounting system, and The.Director, a controlled multi-agent orchestration proof point for the SystemForge vision.",
  location: "Yerevan, Armenia",
  timezone: "Asia/Yerevan, GMT+4",
  availability: "Open to AI systems, AI product, agentic workflow, delivery leadership, and focused automation projects.",
  emailLabel: "Email placeholder",
  email: "replace-with-email@example.com",
  url: "https://tigran-atoyan-ai.vercel.app",
  linkedin: "https://www.linkedin.com/in/replace-with-tigran-profile",
  github: "https://github.com/replace-with-tigran-github",
  ctas: {
    primary: { label: "Inspect the proof", href: "/portfolio" },
    secondary: { label: "Download CV", href: "/cv" },
    contact: { label: "Start a conversation", href: "/contact" }
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Services / Role Fit", href: "/services" },
    { label: "CV", href: "/cv" },
    { label: "Contact", href: "/contact" }
  ] satisfies NavLink[],
  footerLinks: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Services", href: "/services" },
    { label: "CV", href: "/cv" },
    { label: "Contact", href: "/contact" }
  ] satisfies NavLink[],
  proofBadges: [
    {
      label: "BreadCost",
      description: "Full-stack bakery manufacturing cost accounting system.",
      asset: "Business software proof"
    },
    {
      label: "The.Director",
      description: "Controlled multi-agent orchestration platform for AI software delivery.",
      asset: "Agentic platform proof"
    },
    {
      label: "SystemForge / Architektr",
      description: "AI-first software delivery factory vision with governed agent loops.",
      asset: "Product architecture proof"
    },
    {
      label: "Project Semantic Engine",
      description: "Artifact-driven discovery system connecting business reality to requirements, architecture, delivery, and validation.",
      asset: "Semantic discovery proof"
    },
    {
      label: "Delivery Transformation",
      description: "15+ years of delivery, product, operations, and technology leadership.",
      asset: "Seniority proof"
    }
  ] satisfies ProofBadge[]
};

export const seo = {
  title: "Tigran Atoyan | AI Systems & Operations Builder",
  description:
    "Proof-first portal for Tigran Atoyan: AI systems, agentic workflows, business automation, delivery leadership, BreadCost, The.Director, and SystemForge.",
  ogTitle: "Tigran Atoyan | AI Systems & Operations Builder",
  ogDescription:
    "Senior delivery and operations leader building AI systems, dashboards, agentic workflows, and full-stack business software.",
  ogImage: "/og/og-image-placeholder.png"
};
