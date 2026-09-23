import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HQ Creator — Business Tools for Solo Creators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#B23A2E",
            border: "2px solid #B23A2E",
            padding: "6px 16px",
            alignSelf: "flex-start",
          }}
        >
          Est. 2026 · Filed Weekly
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 600,
              color: "#16213A",
              lineHeight: 1.1,
            }}
          >
            The business side of being a creator, actually figured out.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#22221F",
              opacity: 0.75,
            }}
          >
            Invoicing, scheduling, contracts, and editing tools — tested by
            someone running a one-person creative business.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 2,
            color: "#16213A",
          }}
        >
          HQ CREATOR
        </div>
      </div>
    ),
    { ...size }
  );
}
