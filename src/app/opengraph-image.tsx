import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#05070a",
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(59,130,246,0.28), transparent 55%), radial-gradient(circle at 85% 90%, rgba(34,211,238,0.18), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#22d3ee",
            fontFamily: "monospace",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {siteConfig.initials}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 28,
            fontSize: 64,
            fontWeight: 600,
            color: "#e6ebf2",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          <span>Network Security Engineer</span>
          <span style={{ color: "#3b82f6" }}>× AI Engineer</span>
        </div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 26, color: "#8a96a8", maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
