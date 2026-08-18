import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f3f1ea",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#161615",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, color: "#1a5c55", letterSpacing: 3 }}>
          BUSINESS · DATA · TECHNOLOGY
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, lineHeight: 1.1 }}>{site.name}</div>
          <div style={{ marginTop: 16, fontSize: 28, color: "#3d3c38" }}>{site.role}</div>
          <div style={{ marginTop: 28, fontSize: 26, maxWidth: 900, color: "#5f5d57" }}>
            {site.headline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
