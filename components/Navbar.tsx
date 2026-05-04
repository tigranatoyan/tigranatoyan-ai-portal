import Link from "next/link";
import { site } from "@/content/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8" aria-label="Primary navigation">
        <Link href="/" className="group">
          <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-white">Tigran Atoyan</span>
          <span className="block text-xs text-slate-400 group-hover:text-signal">AI Systems & Operations Builder</span>
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          {site.navigation.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/contact#chatbot" className="hidden rounded-full border border-signal/30 px-4 py-2 text-sm font-medium text-signal transition hover:bg-signal/10 md:inline-flex">
          Talk to AI
        </Link>
      </nav>
    </header>
  );
}
