import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { ProofBadge } from "@/components/ProofBadge";
import { SectionHeader } from "@/components/SectionHeader";
import { ProofPathSection } from "@/components/ProofPathSection";
import { featuredPortfolioItems } from "@/content/portfolio";
import { employerRoles, clientOffers } from "@/content/services";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofPathSection />
      <section className="section-shell">
        <SectionHeader
          eyebrow="Proof, not fog"
          title="Three primary proof assets sit above the fold logic."
          description="BreadCost proves business software depth, The.Director proves agentic platform thinking, and SystemForge frames the product architecture vision."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {site.proofBadges.map((badge) => (
            <ProofBadge key={badge.label} badge={badge} />
          ))}
        </div>
      </section>
      <section className="section-shell">
        <SectionHeader
          eyebrow="Featured portfolio"
          title="Primary evidence assets"
          description="Each card explains the business problem, the technical system, and what the work proves for hiring managers or clients."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {featuredPortfolioItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} compact />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/portfolio" className="secondary-button">Open full portfolio</Link>
        </div>
        <div className="mt-12">
          <p className="eyebrow mb-6">What the work proves</p>
          <div className="grid gap-5 md:grid-cols-3">
            <blockquote className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-signal/10 via-white/[0.03] to-transparent p-6">
              <span className="pointer-events-none absolute -top-4 -left-1 select-none text-8xl font-serif leading-none text-signal/20" aria-hidden="true">&ldquo;</span>
              <p className="relative text-sm leading-relaxed text-slate-100 font-medium">Tigran turns messy business operations into structured product architecture, implementation plans, tested software, and executive-visible proof — end to end, no hand-offs lost.</p>
              <footer className="mt-5 flex items-center gap-2">
                <span className="h-px w-5 bg-signal/50" />
                <span className="text-xs font-medium text-signal/80 tracking-wide">BreadCost · Full-stack product build</span>
              </footer>
            </blockquote>
            <blockquote className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-acid/10 via-white/[0.03] to-transparent p-6">
              <span className="pointer-events-none absolute -top-4 -left-1 select-none text-8xl font-serif leading-none text-acid/20" aria-hidden="true">&ldquo;</span>
              <p className="relative text-sm leading-relaxed text-slate-100 font-medium">Tigran thinks and builds at the AI platform layer: orchestration, governance, role design, human-in-the-loop review, and controlled software delivery — not just wiring API calls.</p>
              <footer className="mt-5 flex items-center gap-2">
                <span className="h-px w-5 bg-acid/50" />
                <span className="text-xs font-medium text-acid/80 tracking-wide">The.Director · Multi-agent orchestration</span>
              </footer>
            </blockquote>
            <blockquote className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-white/[0.03] to-transparent p-6">
              <span className="pointer-events-none absolute -top-4 -left-1 select-none text-8xl font-serif leading-none text-purple-400/20" aria-hidden="true">&ldquo;</span>
              <p className="relative text-sm leading-relaxed text-slate-100 font-medium">Tigran designs serious AI product systems at the platform architecture level — governance, orchestration, and the delivery operating model that makes AI-assisted software trustworthy and scalable.</p>
              <footer className="mt-5 flex items-center gap-2">
                <span className="h-px w-5 bg-purple-400/50" />
                <span className="text-xs font-medium text-purple-400/80 tracking-wide">SystemForge · AI delivery architecture</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card p-6">
            <SectionHeader eyebrow="Employer role fit" title="Built for AI systems, product, platform, and delivery roles." />
            <div className="mt-6 space-y-4">
              {employerRoles.slice(0, 3).map((role) => (
                <div key={role.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <h3 className="font-semibold text-white">{role.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{role.whyFit}</p>
                </div>
              ))}
            </div>
            <Link href="/services" className="mt-6 inline-flex secondary-button">View role fit</Link>
          </div>
          <div className="glass-card p-6">
            <SectionHeader eyebrow="Client offers" title="Fixed-scope automation offers, separated from employment positioning." />
            <div className="mt-6 space-y-4">
              {clientOffers.slice(0, 3).map((offer) => (
                <div key={offer.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <h3 className="font-semibold text-white">{offer.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{offer.problemSolved}</p>
                </div>
              ))}
            </div>
            <Link href="/services#client-track" className="mt-6 inline-flex secondary-button">View client offers</Link>
          </div>
        </div>
      </section>
      <CTASection
        eyebrow="Next: the proof"
        title="The fastest path to proof is through the portfolio."
        description="Start with BreadCost, The.Director, and SystemForge — three assets showing real business software, agentic orchestration, and AI platform architecture."
        primaryLabel="Open portfolio"
        primaryHref="/portfolio"
        secondaryLabel="Contact Tigran"
        secondaryHref="/contact"
      />
    </>
  );
}
