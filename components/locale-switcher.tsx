"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { LOCALE_LABELS } from "@/lib/locale-labels";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <label className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
      <span className="sr-only">{t("language")}</span>
      <select
        className="max-w-[11rem] truncate rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold shadow-sm outline-none focus:border-[var(--color-brand-600)] sm:max-w-xs"
        value={locale}
        onChange={(e) =>
          router.replace(pathname, { locale: e.target.value as (typeof routing.locales)[number] })
        }
        aria-label={t("language")}
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {LOCALE_LABELS[loc] ?? loc.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
