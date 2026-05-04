import { CTASection } from "@/components/CTASection";
import { PortfolioCard } from "@/components/PortfolioCard";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioItems } from "@/content/portfolio";

export const metadata = {
  title: "Portfolio",
  description: "Proof assets for Tigran Atoyan: BreadCost, The.Director, SystemForge, reporting systems, and AI automation demos."
};

export default function PortfolioPage() {
  return (
    <>
      <section className="section-shell pt-14 md:pt-20">
        <SectionHeader
          eyebrow="Portfolio"
          title="Actual systems, architectures, and proof assets."
          description="Business context, technical relevance, proof assets, and what each project demonstrates — from agentic platforms to full-stack business software."
        />
      </section>
      <section className="section-shell pt-0">
        <div className="grid gap-6">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
      <CTASection
        title="Want the fastest read? Start with BreadCost, The.Director, and SystemForge."
        description="Those three assets show the arc: real business software, controlled agentic orchestration, and AI-first software delivery architecture."
        primaryLabel="Read case studies"
        primaryHref="/case-studies"
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />
    </>
  );
}
