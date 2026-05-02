import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_1fr] md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{site.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{site.shortBio}</p>
        </div>
        <div className="md:text-right">
          <div className="flex flex-wrap gap-3 md:justify-end">
            {site.footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-300 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">{site.location} · {site.timezone}</p>
        </div>
      </div>
    </footer>
  );
}
