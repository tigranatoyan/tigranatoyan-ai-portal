import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/content/site";

export const metadata = {
  title: "Contact",
  description: "Contact Tigran Atoyan for AI systems roles, fixed-scope automation projects, and agentic software delivery collaboration."
};

const contactPaths = [
  {
    title: "Employment conversation",
    description:
      "For AI Solutions Architect, AI Product, Agentic Workflow, Forward Deployed AI Builder, AI-enabled Delivery Lead, or Technical Program Manager roles.",
    cta: "Send role context and why this proof stack is relevant."
  },
  {
    title: "Client project conversation",
    description:
      "For AI reporting, CRM/Sheets automation, project progress portals, Business OS starter kits, or MVP blueprints.",
    cta: "Send the current workflow, sample data shape, and desired business output."
  },
  {
    title: "AI/devtools collaboration",
    description:
      "For SystemForge, The.Director, agentic software delivery, architecture-to-code workflows, or human-in-the-loop AI governance.",
    cta: "Send the collaboration angle and proof you want to inspect."
  }
];

export default function ContactPage() {
  return (
    <>
      <section className="section-shell pt-14 md:pt-20">
        <SectionHeader
          eyebrow="Contact"
          title="Start with the path that matches the conversation."
          description="Choose the path that fits the conversation. Email, LinkedIn, or GitHub — all real."
        />
      </section>
      <section className="section-shell pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {contactPaths.map((path) => (
            <article key={path.title} className="glass-card p-6">
              <h2 className="text-xl font-semibold text-white">{path.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{path.description}</p>
              <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">{path.cta}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-shell pt-0">
        <div className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">Direct contact</h2>
          <dl className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <dt className="text-sm font-semibold text-white">Email</dt>
              <dd className="mt-2 break-words text-sm text-slate-300">{site.email}</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <dt className="text-sm font-semibold text-white">LinkedIn</dt>
              <dd className="mt-2 break-words text-sm text-slate-300">{site.linkedin}</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <dt className="text-sm font-semibold text-white">GitHub</dt>
              <dd className="mt-2 break-words text-sm text-slate-300">{site.github}</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <dt className="text-sm font-semibold text-white">Location / timezone</dt>
              <dd className="mt-2 text-sm text-slate-300">{site.location} · {site.timezone}</dd>
            </div>
          </dl>
        </div>
      </section>
      <CTASection
        title="Ready for proof inspection?"
        description="Start with the portfolio and case studies, then continue the conversation with the path above."
        primaryLabel="Open portfolio"
        primaryHref="/portfolio"
        secondaryLabel="Open CV"
        secondaryHref="/cv"
      />
    </>
  );
}
