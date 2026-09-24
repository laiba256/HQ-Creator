import { ImageResponse } from "next/og";

export const alt = "HQ Creator post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Turns "best-invoicing-tools-for-solo-creators" into
// "Best Invoicing Tools For Solo Creators" — no filesystem access needed,
// so this is safe to bundle for either the edge or nodejs runtime.
function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Image({ params }: { params: { slug: string } }) {
  const title = titleFromSlug(params.slug);

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
          HQ Creator
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
            fontSize: 24,
            letterSpacing: 2,
            color: "#22221F",
          }}
        >
          HQ CREATOR
        </div>
      </div>
    ),
    { ...size }
  );
}
