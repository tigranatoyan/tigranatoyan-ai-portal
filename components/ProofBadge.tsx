import type { ProofBadge as ProofBadgeType } from "@/content/site";

type ProofBadgeProps = {
  badge: ProofBadgeType;
};

export function ProofBadge({ badge }: ProofBadgeProps) {
  return (
    <article className="glass-card p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-acid">{badge.asset}</p>
      <h3 className="mt-3 text-lg font-semibold text-white">{badge.label}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{badge.description}</p>
    </article>
  );
}
