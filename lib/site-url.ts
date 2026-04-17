/**
 * Canonical site origin for sitemaps, JSON-LD, and absolute URLs.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://hypo.online).
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://hypo.online";
}
