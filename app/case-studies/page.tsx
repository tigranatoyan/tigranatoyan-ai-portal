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
          title="Deep-dive proof for each project."
          description="Architecture context, role breakdown, what was built, and what each project proves about Tigran's capabilities."
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
        eyebrow="Next: role fit and offers"
        title="See where these capabilities translate into employer and client value."
        description="Hiring tracks, fixed-scope automation offers, and role positioning — separated clearly so you can find the right conversation path."
        primaryLabel="View role fit & offers"
        primaryHref="/services"
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />
    </>
  );
}
