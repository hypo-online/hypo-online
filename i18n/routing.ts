import { defineRouting } from "next-intl/routing";

/**
 * cs + en + Ukrainian + 12 other Prague-focused foreigner languages.
 * Messages: `en.json` is the merge base; other locales override in `request.ts`.
 */
export const routing = defineRouting({
  locales: [
    "cs",
    "en",
    "uk",
    "ru",
    "de",
    "vi",
    "pl",
    "sk",
    "ro",
    "es",
    "fr",
    "it",
    "tr",
    "zh",
  ],
  defaultLocale: "cs",
  localePrefix: "always",
});
