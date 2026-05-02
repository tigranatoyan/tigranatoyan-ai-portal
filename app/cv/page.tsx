import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PlaceholderAsset } from "@/components/PlaceholderAsset";
import { SectionHeader } from "@/components/SectionHeader";
import { cv } from "@/content/cv";

export const metadata = {
  title: "CV",
  description: "Web CV summary and download placeholders for Tigran Atoyan."
};

export default function CVPage() {
  return (
    <>
      <section className="section-shell pt-14 md:pt-20">
        <SectionHeader eyebrow="CV" title="AI systems, delivery, product, and operations leadership." description={cv.intro} />
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="secondary-button cursor-not-allowed opacity-70" aria-disabled="true">{cv.downloads.pdf.label} · placeholder</span>
          <span className="secondary-button cursor-not-allowed opacity-70" aria-disabled="true">{cv.downloads.docx.label} · placeholder</span>
          <Link href="/contact" className="primary-button">Contact</Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <PlaceholderAsset title="PDF CV placeholder" path={cv.downloads.pdf.path} note="Add final PDF to enable real download." />
          <PlaceholderAsset title="DOCX CV placeholder" path={cv.downloads.docx.path} note="Add final DOCX to enable real download." />
        </div>
      </section>
      <section className="section-shell pt-0">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-card p-6">
            <h2 className="text-2xl font-semibold text-white">Target roles</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {cv.targetRoles.map((role) => (
                <span key={role} className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">{role}</span>
              ))}
            </div>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-2xl font-semibold text-white">Experience summary</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-300">
              {cv.experienceSummary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section-shell pt-0">
        <SectionHeader eyebrow="Core skills" title="Grouped for quick recruiter scanning" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {cv.coreSkillGroups.map((group) => (
            <article key={group.title} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{group.skills.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-shell pt-0">
        <SectionHeader eyebrow="Selected proof links" title="CV claims connect back to portfolio proof." />
        <div className="mt-8 flex flex-wrap gap-3">
          {cv.selectedProofLinks.map((link) => (
            <Link key={link.href} href={link.href} className="secondary-button">{link.label}</Link>
          ))}
        </div>
      </section>
      <CTASection
        title="Availability"
        description={`${cv.availability} ${cv.contactCta}`}
        primaryLabel="Start contact"
        primaryHref="/contact"
        secondaryLabel="Open portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
