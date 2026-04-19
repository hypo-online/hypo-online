"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { LOCALE_LABELS } from "@/lib/locale-labels";
import { cn } from "@/lib/cn";

type LocaleSwitcherProps = {
  /** Extra classes on the outer `<label>`. */
  className?: string;
  /** Merged into the `<select>` (e.g. home toolbar styling). */
  selectClassName?: string;
};

export function LocaleSwitcher({ className, selectClassName }: LocaleSwitcherProps = {}) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <label
      className={cn("flex items-center gap-2 text-xs font-semibold text-body", className)}
    >
      <span className="sr-only">{t("language")}</span>
      <select
        className={cn(
          "max-w-[11rem] min-h-[44px] truncate rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs font-semibold text-[var(--color-brand-950)] shadow-sm focus-visible:border-[var(--color-brand-600)] sm:max-w-xs",
          selectClassName,
        )}
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
