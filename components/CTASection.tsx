import Link from "next/link";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: CTASectionProps) {
  return (
    <section className="section-shell">
      <div className="rounded-3xl border border-signal/20 bg-gradient-to-br from-signal/10 via-white/[0.04] to-acid/10 p-8 shadow-executive md:p-10">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">{description}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href={primaryHref} className="primary-button">{primaryLabel}</Link>
          {secondaryLabel && secondaryHref ? (
            secondaryHref.startsWith("http") || secondaryHref.startsWith("/cv-assets") || secondaryHref.endsWith(".pdf") || secondaryHref.endsWith(".docx") ? (
              <a href={secondaryHref} className="secondary-button">{secondaryLabel}</a>
            ) : (
              <Link href={secondaryHref} className="secondary-button">{secondaryLabel}</Link>
            )
          ) : null}
        </div>
      </div>
    </section>
  );
}
