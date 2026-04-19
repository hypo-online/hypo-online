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
  /** Gradient border frame (same colours as primary buttons). */
  gradientFrame?: boolean;
};

export function LocaleSwitcher({
  className,
  selectClassName,
  gradientFrame = false,
}: LocaleSwitcherProps = {}) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");

  const selectBase = gradientFrame
    ? "h-full min-h-0 max-h-full min-w-0 max-w-full flex-1 cursor-pointer truncate rounded-[8px] border-0 bg-[var(--color-surface)] px-2.5 py-1.5 text-xs font-semibold text-[var(--color-brand-950)] shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-600)] focus-visible:ring-inset sm:rounded-[10px] sm:px-3 sm:py-2 sm:text-sm"
    : "max-w-[11rem] min-h-[44px] truncate rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs font-semibold text-[var(--color-brand-950)] shadow-sm focus-visible:border-[var(--color-brand-600)] sm:max-w-xs";

  const selectEl = (
    <select
      className={cn(selectBase, selectClassName)}
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
  );

  return (
    <label
      className={cn(
        gradientFrame
          ? "flex h-full min-h-0 w-full min-w-0 flex-col gap-0 text-body"
          : "flex items-center gap-2 text-xs font-semibold text-body",
        className,
      )}
    >
      <span className="sr-only">{t("language")}</span>
      {gradientFrame ? (
        <span className="home-toolbar-gradient-frame flex min-h-0 min-w-0 flex-1 flex-col rounded-lg p-[2px] sm:rounded-xl">
          {selectEl}
        </span>
      ) : (
        selectEl
      )}
    </label>
  );
}
