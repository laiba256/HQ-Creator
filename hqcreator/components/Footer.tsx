export default function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-ink">
      <div className="mx-auto max-w-4xl px-6 py-8 font-mono text-[11px] uppercase tracking-widest text-charcoal/50">
        <p>HQ Creator — Filed {new Date().getFullYear()}</p>
        <p className="mt-1 normal-case tracking-normal text-charcoal/40">
          Some links on this site are affiliate links. If you buy through
          them, we may earn a commission at no extra cost to you.
        </p>
      </div>
    </footer>
  );
}
