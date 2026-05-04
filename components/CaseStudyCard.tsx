import type { CaseStudy } from "@/content/caseStudies";
import { PlaceholderAsset } from "@/components/PlaceholderAsset";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article id={study.slug} className="glass-card p-6 md:p-8 scroll-mt-20">
      <p className="eyebrow">Case study</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">{study.title}</h3>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-sm leading-6 text-slate-300">
          <section>
            <h4 className="font-semibold text-white">Problem</h4>
            <p className="mt-2">{study.problem}</p>
          </section>
          <section>
            <h4 className="font-semibold text-white">Tigran&apos;s role</h4>
            <p className="mt-2">{study.role}</p>
          </section>
          <section>
            <h4 className="font-semibold text-white">Approach</h4>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              {study.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className="space-y-5">
          <section>
            <h4 className="font-semibold text-white">What was built</h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
              {study.whatWasBuilt.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h4 className="font-semibold text-white">Result or proof</h4>
            <p className="mt-2 text-sm leading-6 text-slate-300">{study.resultOrProof}</p>
          </section>
          <section className="rounded-2xl border border-acid/30 bg-acid/5 p-4">
            <h4 className="font-semibold text-white">What this proves</h4>
            <p className="mt-2 text-sm leading-6 text-slate-200">{study.whatThisProves}</p>
          </section>
          <PlaceholderAsset title="Missing evidence to collect" note={study.missingEvidence.join(" · ")} />
        </div>
      </div>
    </article>
  );
}
