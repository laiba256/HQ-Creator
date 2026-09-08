import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { ArticleJsonLd } from "@/components/JsonLd";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug);
    return {
      title: post.title,
      description: post.description,
      alternates: { canonical: `/blog/${post.slug}` },
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  let post;
  try {
    post = await getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const date = new Date(post!.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="py-14">
      <ArticleJsonLd post={post!} />

      <span className="stamp text-stamp">{post!.category}</span>
      <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
        {post!.title}
      </h1>
      <div className="mt-3 flex gap-4 font-mono text-[11px] uppercase tracking-widest text-charcoal/50">
        <span>By {post!.author}</span>
        <span>{date}</span>
      </div>

      {/* Answer-first block: gives AI engines and skimming readers the
          direct answer immediately, per the AEO structure discussed. */}
      <div className="mt-8 border-2 border-ink bg-white/40 p-5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal/50">
          Short answer
        </p>
        <p className="mt-2 font-body text-lg text-ink">
          {post!.directAnswer}
        </p>
      </div>

      <div
        className="prose prose-headings:font-display prose-headings:text-ink prose-a:text-ink prose-p:font-body prose-p:text-charcoal/80 mt-10 max-w-none"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post!.contentHtml }}
      />
    </article>
  );
}
