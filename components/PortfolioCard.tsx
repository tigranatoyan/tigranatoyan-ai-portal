import Link from "next/link";
import type { PortfolioItem } from "@/content/portfolio";
import { PlaceholderAsset } from "@/components/PlaceholderAsset";
import { StatusPill } from "@/components/StatusPill";

type PortfolioCardProps = {
  item: PortfolioItem;
  compact?: boolean;
};

export function PortfolioCard({ item, compact = false }: PortfolioCardProps) {
  const entries = Object.entries(item.links).filter(([, href]) => Boolean(href));
  return (
    <article id={item.slug} className={`glass-card p-6 ${item.priority === "primary" ? "ring-1 ring-signal/30" : ""}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="eyebrow">{item.type}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{item.name}</h3>
        </div>
        <StatusPill status={item.status} />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{item.shortDescription}</p>
      {!compact ? (
        <>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-white">Problem solved</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.problemSolved}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">What it proves</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.whatItProves}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.technologies.slice(0, 8).map((tech) => (
              <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                {tech}
              </span>
            ))}
          </div>
          {item.assetPlaceholders.length ? (
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {item.assetPlaceholders.slice(0, 2).map((asset) => (
                <PlaceholderAsset key={asset} title="Asset placeholder" path={asset} />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-3">
        {entries.map(([label, href]) =>
          href?.startsWith("/") ? (
            <Link key={label} href={href} className="secondary-button text-sm capitalize">
              {label}
            </Link>
          ) : (
            <span key={label} className="secondary-button cursor-not-allowed text-sm capitalize opacity-70" aria-disabled="true">
              {label} placeholder
            </span>
          )
        )}
      </div>
    </article>
  );
}
