import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const runtime = "edge";
export const alt = "HQ Creator post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  let title = "HQ Creator";
  let category = "Ledger";
  let author = "HQ Creator";

  try {
    const post = await getPostBySlug(params.slug);
    title = post.title;
    category = post.category;
    author = post.author;
  } catch {
    // fall back to defaults above if the post can't be loaded
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F4F2EC",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#B23A2E",
            border: "2px solid #B23A2E",
            padding: "8px 18px",
            alignSelf: "flex-start",
          }}
        >
          {category}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 600,
            color: "#16213A",
            lineHeight: 1.15,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: 2,
            color: "#22221F",
          }}
        >
          <div style={{ display: "flex" }}>HQ CREATOR</div>
          <div style={{ display: "flex", opacity: 0.6 }}>By {author}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
