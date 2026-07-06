import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const alt = "Field Notes — Man With a Mop";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CREAM = "#F6F1E7";
const INK = "#1B1F24";
const ORANGE = "#E2501C";

const categoryLabels: Record<string, string> = {
  pricing: "Pricing",
  "service-guide": "Service Guides",
  comparison: "Comparisons",
  faq: "FAQ",
  "how-to": "How-To",
  "local-guide": "Local Guides",
  commercial: "For Businesses",
};

// Fetch the TTF behind a Google Fonts stylesheet (no UA → truetype URLs).
async function loadGoogleFont(family: string, weight: number) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`
    )
  ).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );
  if (!resource) throw new Error(`failed to load font ${family}`);
  return (await fetch(resource[1])).arrayBuffer();
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const [bricolage, plexMono] = await Promise.all([
    loadGoogleFont("Bricolage Grotesque", 800),
    loadGoogleFont("IBM Plex Mono", 500),
  ]);

  const fonts = [
    { name: "Bricolage", data: bricolage, style: "normal" as const, weight: 800 as const },
    { name: "PlexMono", data: plexMono, style: "normal" as const, weight: 500 as const },
  ];

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: CREAM,
            color: INK,
            fontSize: 56,
            fontFamily: "Bricolage",
            textTransform: "uppercase",
          }}
        >
          Field Notes
        </div>
      ),
      { ...size, fonts }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: CREAM,
          padding: 40,
        }}
      >
        {/* Work-order card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            border: `4px solid ${INK}`,
            backgroundColor: CREAM,
          }}
        >
          {/* Ticket strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: INK,
              color: CREAM,
              padding: "18px 36px",
              fontFamily: "PlexMono",
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
            }}
          >
            <span>Field Note</span>
            <span style={{ color: ORANGE }}>Man With a Mop</span>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              padding: "20px 36px",
            }}
          >
            <div
              style={{
                fontSize: post.title.length > 60 ? 52 : 64,
                fontFamily: "Bricolage",
                fontWeight: 800,
                color: INK,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                maxWidth: "94%",
              }}
            >
              {post.title}
            </div>
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: `4px solid ${INK}`,
              padding: "20px 36px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: ORANGE,
                  color: CREAM,
                  fontFamily: "PlexMono",
                  fontSize: 18,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  padding: "8px 18px",
                }}
              >
                {categoryLabels[post.category] || post.category}
              </div>
              <div
                style={{
                  display: "flex",
                  color: INK,
                  opacity: 0.6,
                  fontFamily: "PlexMono",
                  fontSize: 18,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                }}
              >
                {post.readingTime}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                color: INK,
                fontFamily: "PlexMono",
                fontSize: 18,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
              }}
            >
              It&apos;s as if a man cleaned it ™
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
