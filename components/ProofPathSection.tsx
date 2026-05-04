import Link from "next/link";

const proofPaths = [
  {
    title: "AI platform and agentic workflow fit",
    copy: "Start with The.Director and SystemForge to inspect controlled multi-agent orchestration, human review gates, agent roles, and architecture-to-delivery thinking.",
    cta: "View agentic systems proof",
    href: "/portfolio",
    external: false,
  },
  {
    title: "Business software and AI solutions fit",
    copy: "Start with BreadCost to see how messy operational complexity becomes structured software, architecture, requirements, testing, and product logic.",
    cta: "View BreadCost proof",
    href: "/portfolio",
    external: false,
  },
  {
    title: "Delivery, reporting, and operations fit",
    copy: "Start with AI Project Progress Reporting, AI Weekly Business Report, and Delivery Transformation to inspect dashboards, reporting flow, governance, and execution visibility.",
    cta: "View reporting systems",
    href: "/portfolio",
    external: false,
  },
  {
    title: "Semantic discovery and traceability",
    copy: "Start with Project Semantic Engine to inspect the public repo for artifact-driven discovery, requirements, architecture, delivery units, and validation loops.",
    cta: "Open Project Semantic Engine",
    href: "/portfolio",
    external: false,
  },
];

export function ProofPathSection() {
  return (
    <section className="section-shell">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Guided proof path
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Start with the proof path that matches your question.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300">
          Different visitors need different evidence. Use the paths below to inspect the work by role, proof type, or business need.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {proofPaths.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.copy}</p>
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="mt-5 inline-flex rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-200 hover:border-cyan-300 hover:text-white"
            >
              {item.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
