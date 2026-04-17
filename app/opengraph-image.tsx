import { ImageResponse } from "next/og";

export const alt = "hypo.online — hypotéky v ČR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 42%, #6d28d9 100%)",
          fontFamily:
            'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              backgroundImage:
                "linear-gradient(90deg, #faf5ff 0%, #e9d5ff 35%, #c4b5fd 70%, #a78bfa 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            hypo
          </span>
          <span style={{ color: "#f5f3ff", marginLeft: 4, marginRight: 4 }}>.</span>
          <span
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ede9fe 0%, #ddd6fe 40%, #c4b5fd 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            online
          </span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            fontWeight: 600,
            color: "rgba(245, 243, 255, 0.92)",
            letterSpacing: "0.02em",
          }}
        >
          Orientace na hypotéku v České republice
        </div>
      </div>
    ),
    { ...size },
  );
}
