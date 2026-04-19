/**
 * One-off / maintenance: shift coral–orange–red accents in the hero PNG toward
 * purple–blue (brand-aligned) while leaving blues and typical skin tones mostly intact.
 * Run from repo root: node scripts/recolor-hero-warm-to-brand.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const inputPath = path.join(root, "public", "images", "home-hero-collaboration.png");

function rgbToHsl(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  const d = max - min;
  if (d > 1e-8) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      default:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return [h, s, l];
}

function hslToRgb(h, s, l) {
  if (s < 1e-8) {
    const v = Math.round(l * 255);
    return [v, v, v];
  }
  const hue2rgb = (p, q, t) => {
    let tt = t;
    if (tt < 0) tt += 1;
    if (tt > 1) tt -= 1;
    if (tt < 1 / 6) return p + (q - p) * 6 * tt;
    if (tt < 1 / 2) return q;
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function isNearWhite(r, g, b) {
  return r > 245 && g > 245 && b > 245;
}

/** Skip typical light skin so clothing/coral UI shift more than faces */
function looksLikeLightSkin(r, g, b, hDeg, s, l) {
  if (l < 0.62 || s > 0.48) return false;
  if (hDeg < 8 || hDeg > 48) return false;
  if (r - b < 0.06) return false;
  if (g < b * 0.88) return false;
  if (r - g > 0.12) return false;
  return true;
}

function processPixel(rf, gf, bf) {
  if (isNearWhite(rf, gf, bf)) return null;

  const [h, s, l] = rgbToHsl(rf, gf, bf);
  const hDeg = h * 360;

  // Already cool (blue–cyan–teal): leave
  if (hDeg > 160 && hDeg < 270 && s > 0.08) return null;

  // Warm band: red through orange (incl. coral); wrap magenta-red
  const inWarmHue = hDeg <= 58 || hDeg >= 285;
  if (!inWarmHue) return null;

  const warmStrength = Math.max(0, rf - gf, rf - bf, (rf + gf) / 2 - bf);
  if (s < 0.06 && warmStrength < 0.12) return null;
  if (s < 0.1 && l < 0.2) return null;

  if (looksLikeLightSkin(rf, gf, bf, hDeg, s, l)) return null;

  // Target hue ~255° (purple) blending toward ~228° (blue) for deeper reds
  const targetHue = hDeg < 25 || hDeg > 320 ? 0.64 : 0.62; // ~230–260° band in 0–1
  const satBoost = Math.min(1, s * 1.08);
  const blend = Math.min(0.92, 0.42 + s * 0.95 + Math.min(0.35, warmStrength * 1.2));
  let nh = h + (targetHue - h) * blend;
  nh = ((nh % 1) + 1) % 1;

  const [nr, ng, nb] = hslToRgb(nh, satBoost, Math.min(0.99, l * 1.01));
  return [nr, ng, nb];
}

async function main() {
  const buf = fs.readFileSync(inputPath);
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  if (ch !== 4) throw new Error(`Expected RGBA, got ${ch} channels`);

  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i] / 255;
    const g = out[i + 1] / 255;
    const b = out[i + 2] / 255;
    const next = processPixel(r, g, b);
    if (next) {
      out[i] = next[0];
      out[i + 1] = next[1];
      out[i + 2] = next[2];
    }
  }

  await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(inputPath);

  console.log("Wrote", inputPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
