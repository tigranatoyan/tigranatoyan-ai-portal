import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/content/caseStudies";

export const metadata = {
  title: "Case Studies",
  description: "Proof narratives for BreadCost, The.Director, delivery transformation, and AI weekly business reporting."
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section-shell pt-14 md:pt-20">
        <SectionHeader
          eyebrow="Case studies"
          title="Proof narratives with missing evidence clearly marked."
          description="Phase 2 creates the structure and story. Screenshots, diagrams, videos, and sanitized links are collected through the evidence checklist."
        />
      </section>
      <section className="section-shell pt-0">
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
      <CTASection
        title="Evidence turns claims into proof."
        description="The next phase should add screenshots, diagrams, sanitized repo links, walkthrough videos, and CV files."
        primaryLabel="See evidence checklist"
        primaryHref="/portfolio"
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />
    </>
  );
}
