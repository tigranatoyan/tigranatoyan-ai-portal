import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="section-shell pt-14 md:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="eyebrow">{site.primaryTitle}</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{site.subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={site.ctas.primary.href} className="primary-button">{site.ctas.primary.label}</Link>
            <Link href={site.ctas.secondary.href} className="secondary-button">{site.ctas.secondary.label}</Link>
            <Link href={site.ctas.contact.href} className="secondary-button">{site.ctas.contact.label}</Link>
          </div>
        </div>
        <div className="glass-card p-6">
          <p className="eyebrow">Primary proof stack</p>
          <div className="mt-5 space-y-4">
            {site.proofBadges.slice(0, 3).map((badge) => (
              <div key={badge.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-semibold text-white">{badge.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
