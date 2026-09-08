import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPostsMeta().slice(0, 6);

  return (
    <div>
      <section className="py-16 sm:py-24">
        <span className="stamp text-approved">Est. 2026 · Filed Weekly</span>
        <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          The business side of being a creator, actually figured out.
        </h1>
        <p className="mt-5 max-w-xl font-body text-lg text-charcoal/70">
          Invoicing, scheduling, contracts, and editing tools — tested by
          someone running a one-person creative business, not a marketing
          team.
        </p>
        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 border-2 border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-paper transition hover:bg-transparent hover:text-ink"
        >
          Open the ledger →
        </Link>
      </section>

      <section className="border-t-2 border-ink pt-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-widest text-charcoal/50">
            Latest entries
          </h2>
        </div>
        <div className="mt-2">
          {posts.length === 0 ? (
            <p className="py-10 font-body text-charcoal/60">
              No posts filed yet — add your first Markdown file to
              content/posts/.
            </p>
          ) : (
            posts.map((post) => <PostCard key={post.slug} post={post} />)
          )}
        </div>
      </section>

      <section id="about" className="border-t-2 border-ink py-14">
        <h2 className="font-display text-2xl text-ink">About this ledger</h2>
        <p className="mt-3 max-w-xl font-body text-charcoal/70">
          HQ Creator tracks the unglamorous tools that keep a solo creator
          business running — getting paid on time, staying booked without
          burning out, and keeping contracts and taxes from becoming a
          crisis. Everything here comes from actually running one.
        </p>
      </section>
    </div>
  );
}
