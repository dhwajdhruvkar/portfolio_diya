import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name} — ${site.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Original OG card drawn in the site's own palette — no third-party imagery.
 * Rendered with system-stack typography so no font binary has to be shipped.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08070a",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9a968d",
          }}
        >
          <span>Portfolio</span>
          <span style={{ color: "#ff5a3c" }}>{site.location}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#edeae0",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#9a968d",
              letterSpacing: "-0.01em",
            }}
          >
            {site.roleLine}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 120,
              height: 6,
              backgroundColor: "#e4381f",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#9a968d",
            }}
          >
            {site.availability}
          </span>
        </div>
      </div>
    ),
    size
  );
}
