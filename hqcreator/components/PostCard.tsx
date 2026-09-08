import Link from "next/link";
import { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="ledger-row group flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
    >
      <div className="flex-1">
        <div className="mb-1.5 flex items-center gap-3">
          <span className="stamp text-stamp">{post.category}</span>
          <span className="font-mono text-[11px] text-charcoal/40">
            {date}
          </span>
        </div>
        <h3 className="font-display text-xl text-ink group-hover:underline">
          {post.title}
        </h3>
        <p className="mt-1 max-w-xl font-body text-sm text-charcoal/70">
          {post.description}
        </p>
      </div>
      <span className="font-mono text-xs uppercase tracking-widest text-charcoal/40 group-hover:text-ink">
        Read →
      </span>
    </Link>
  );
}
