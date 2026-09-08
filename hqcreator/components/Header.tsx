import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-2 border-ink">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
        <Link href="/" className="group">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold text-ink">
              HQ
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/60">
              Creator
            </span>
          </div>
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal/50">
            The back office, sorted
          </p>
        </Link>
        <nav className="flex gap-6 font-mono text-xs uppercase tracking-widest text-charcoal/70">
          <Link href="/blog" className="hover:text-ink">
            Ledger
          </Link>
          <Link href="/#about" className="hover:text-ink">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
