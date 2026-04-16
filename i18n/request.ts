import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { deepMerge } from "@/lib/deep-merge";

type Messages = Record<string, unknown>;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  const base = (await import("../messages/en.json")).default as Messages;

  if (locale === "en") {
    return { locale, messages: base };
  }

  try {
    const overrides = (await import(`../messages/${locale}.json`))
      .default as Messages;
    return { locale, messages: deepMerge(base, overrides) };
  } catch {
    return { locale, messages: base };
  }
});
