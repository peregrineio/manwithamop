import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Man With a Mop — House Cleaning in Northwest Houston, TX";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Inline the logo as a data URI so it renders in both dev and prod
// without an outbound fetch (Satori needs the bytes, not a relative URL).
const logoSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "logo.png"),
).toString("base64")}`;

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F6F1E7",
          color: "#1B1F24",
          display: "flex",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
          borderBottom: "16px solid #E2501C",
        }}
      >
        {/* Logo spec drawing — right side */}
        <img
          src={logoSrc}
          width={520}
          height={520}
          style={{
            position: "absolute",
            right: 24,
            top: 40,
            opacity: 0.92,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 80,
            maxWidth: 760,
          }}
        >
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#E2501C",
              fontWeight: 700,
            }}
          >
            Northwest Houston · Residential Cleaning
          </div>
          <div
            style={{
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: -3,
              marginTop: 24,
              textTransform: "uppercase",
            }}
          >
            Man With a Mop
          </div>
          <div
            style={{
              fontSize: 34,
              marginTop: 20,
              color: "#3E4347",
            }}
          >
            A man. A mop. A spotless home.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 60,
              fontSize: 21,
              letterSpacing: 1,
              color: "#3E4347",
              textTransform: "uppercase",
            }}
          >
            Cypress · Katy · Hockley · Magnolia · Tomball · Conroe
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
