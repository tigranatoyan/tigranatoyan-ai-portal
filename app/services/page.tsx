import { CTASection } from "@/components/CTASection";
import { RoleFitCard } from "@/components/RoleFitCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceOfferCard } from "@/components/ServiceOfferCard";
import { clientOffers, employerRoles } from "@/content/services";

export const metadata = {
  title: "Services and Role Fit",
  description: "Separate hiring tracks for employers and fixed-scope AI automation offers for clients."
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-shell pt-14 md:pt-20">
        <SectionHeader
          eyebrow="Services / Role Fit"
          title="Two tracks, deliberately separated."
          description="Employers evaluate Tigran for AI systems, product, platform, and delivery roles. Clients can discuss fixed-scope reporting, automation, and operating-system projects. No pricing is shown in Phase 2."
        />
      </section>
      <section id="employer-track" className="section-shell pt-0">
        <SectionHeader
          eyebrow="For employers"
          title="Role fit cards"
          description="Each role is connected to proof assets, skills, and an interview conversation starter."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {employerRoles.map((role) => (
            <RoleFitCard key={role.title} role={role} />
          ))}
        </div>
      </section>
      <section id="client-track" className="section-shell pt-0">
        <SectionHeader
          eyebrow="For clients"
          title="Fixed-scope AI automation and reporting offers"
          description="Concrete project shapes for founders, agencies, small businesses, sales teams, delivery teams, and operations leaders."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {clientOffers.map((offer) => (
            <ServiceOfferCard key={offer.title} offer={offer} />
          ))}
        </div>
      </section>
      <CTASection
        title="Choose the conversation path."
        description="Hiring conversation, fixed-scope client project, or AI/devtools collaboration: the contact page separates the paths."
        primaryLabel="Contact"
        primaryHref="/contact"
        secondaryLabel="Open CV"
        secondaryHref="/cv"
      />
    </>
  );
}
