import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const alt = "hypo.online — hypotéky v ČR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "brand",
    "hypo-online-logo.png",
  );
  const buf = fs.readFileSync(filePath);
  const src = `data:image/png;base64,${buf.toString("base64")}`;

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
          background: "linear-gradient(135deg, #0f1226 0%, #3d19b0 38%, #5b2eff 72%, #3a8dff 100%)",
          fontFamily:
            'ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.97)",
            borderRadius: 28,
            padding: 32,
            boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
          }}
        >
          <img
            src={src}
            alt=""
            width={620}
            height={200}
            style={{ objectFit: "contain", maxHeight: 220 }}
          />
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            fontWeight: 600,
            color: "rgba(247, 248, 252, 0.95)",
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
