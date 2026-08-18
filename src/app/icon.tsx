import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 2,
            height: 18,
          }}
        >
          <div style={{ width: 5, height: 8, background: "#161615", borderRadius: 1 }} />
          <div style={{ width: 5, height: 12, background: "#161615", opacity: 0.4, borderRadius: 1 }} />
          <div style={{ width: 5, height: 18, background: "#1a5c55", borderRadius: 1 }} />
        </div>
      </div>
    ),
    size,
  );
}
