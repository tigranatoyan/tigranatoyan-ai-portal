import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { cv } from "@/content/cv";
import { assetPath } from "@/lib/assetPath";

export const metadata = {
  title: "CV",
  description: "CV summary, core skills, and downloadable CV files for Tigran Atoyan."
};

export default function CVPage() {
  return (
    <>
      <section className="section-shell pt-14 md:pt-20">
        <SectionHeader eyebrow="CV" title="AI systems, delivery, product, and operations leadership." description={cv.intro} />
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={assetPath(cv.downloads.pdf.path)} download className="secondary-button">{cv.downloads.pdf.label}</a>
          <a href={assetPath(cv.downloads.docx.path)} download className="secondary-button">{cv.downloads.docx.label}</a>
          <Link href="/contact" className="primary-button">Contact</Link>
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
