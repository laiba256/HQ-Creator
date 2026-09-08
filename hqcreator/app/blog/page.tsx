import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "The Ledger — All Posts",
  description:
    "Every tool review and comparison for solo creators, filed in one place.",
};

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <div className="py-14">
      <span className="stamp text-stamp">Full Archive</span>
      <h1 className="mt-4 font-display text-3xl text-ink">The Ledger</h1>
      <p className="mt-2 max-w-xl font-body text-charcoal/70">
        Every post, filed newest first.
      </p>
      <div className="mt-8 border-t-2 border-ink">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
