import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { LOCALE_PATH_PREFIXES } from "@/lib/sitemap-paths";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const suffix of LOCALE_PATH_PREFIXES) {
      const path = suffix === "" ? `/${locale}` : `/${locale}${suffix}`;
      const url = `${base}${path}`;
      const isEducation = suffix.startsWith("/vzdelavani");
      entries.push({
        url,
        lastModified,
        changeFrequency: isEducation ? "monthly" : "weekly",
        priority:
          suffix === ""
            ? 1
            : suffix === "/quiz"
              ? 0.9
              : isEducation
                ? 0.85
                : 0.7,
      });
    }
  }

  return entries;
}
