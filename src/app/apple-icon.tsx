import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f3f1ea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 10,
            height: 88,
          }}
        >
          <div style={{ width: 24, height: 40, background: "#161615", borderRadius: 4 }} />
          <div style={{ width: 24, height: 60, background: "#161615", opacity: 0.35, borderRadius: 4 }} />
          <div style={{ width: 24, height: 88, background: "#1a5c55", borderRadius: 4 }} />
        </div>
      </div>
    ),
    size,
  );
}
