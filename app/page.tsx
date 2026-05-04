import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { ProofBadge } from "@/components/ProofBadge";
import { SectionHeader } from "@/components/SectionHeader";
import { ProofPathSection } from "@/components/ProofPathSection";
import { caseStudies } from "@/content/caseStudies";
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
      <section className="section-shell">
        <SectionHeader eyebrow="Case studies" title="Proof narratives ready for evidence assets." />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((study) => (
            <article key={study.slug} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white">{study.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{study.whatThisProves}</p>
              <Link href={`/case-studies#${study.slug}`} className="mt-5 inline-flex secondary-button">Read case study</Link>
            </article>
          ))}
        </div>
      </section>
      <CTASection
        eyebrow="CV and contact"
        title="Use the portal as the proof layer, then continue with the CV or a direct conversation."
        description="Download the CV or start a direct conversation."
        primaryLabel="Open CV page"
        primaryHref="/cv"
        secondaryLabel="Contact Tigran"
        secondaryHref="/contact"
      />
    </>
  );
}
