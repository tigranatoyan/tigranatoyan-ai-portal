import { OpenChatButton } from "@/components/OpenChatButton";
import { CopyEmailButton } from "@/components/CopyEmailButton";
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
        {process.env.NEXT_PUBLIC_IS_GITHUB_PAGES !== "true" && (
          <div id="chatbot" className="glass-card p-6 md:p-8 mb-6 scroll-mt-20">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="eyebrow">Not sure where to start?</p>
                <h2 className="mt-1 text-xl font-semibold text-white">Ask the AI assistant directly</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">Describe your situation — automation need, role fit, or collaboration idea — and get a direct answer about whether Tigran is the right fit.</p>
              </div>
              <div className="shrink-0">
                <OpenChatButton />
              </div>
            </div>
          </div>
        )}
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
      <section className="section-shell pt-0 pb-20">
        <div className="glass-card p-6 md:p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Ready to reach out?</p>
            <h2 className="mt-1 text-xl font-semibold text-white">Start the conversation directly.</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">Email or LinkedIn — both are checked regularly. Pick the path that matches the conversation above.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <CopyEmailButton />
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="secondary-button">Connect on LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}
