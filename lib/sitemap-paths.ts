import { educationArticleSlugs } from "@/lib/education";

/** Path segments after `/{locale}` (leading slash, empty string = home). */
export const LOCALE_PATH_PREFIXES: string[] = [
  "",
  "/quiz",
  "/privacy",
  "/hypoteka-kalkulacka",
  "/hypoteka-prijem",
  "/kolik-dostanu-hypoteku",
  "/ltv-vypocet",
  "/vzdelavani",
  ...educationArticleSlugs.map((slug) => `/vzdelavani/${slug}`),
];
