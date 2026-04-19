"use client";

import { useSyncExternalStore } from "react";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { LOCALE_LABELS, LOCALE_SHORT } from "@/lib/locale-labels";
import { cn } from "@/lib/cn";

const MOBILE_MQ = "(max-width: 639px)";

function subscribeMobileMq(onStoreChange: () => void) {
  const mq = window.matchMedia(MOBILE_MQ);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getMobileSnapshot() {
  return window.matchMedia(MOBILE_MQ).matches;
}

function getServerMobileSnapshot() {
  return false;
}

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
  const rawLocale = useLocale();
  const activeLocale = routing.locales.includes(
    rawLocale as (typeof routing.locales)[number],
  )
    ? rawLocale
    : routing.defaultLocale;

  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");

  const useShortOptionLabels = useSyncExternalStore(
    subscribeMobileMq,
    getMobileSnapshot,
    getServerMobileSnapshot,
  );

  const selectBase = gradientFrame
    ? cn(
        "h-full min-h-0 max-h-full min-w-0 max-w-full flex-1 cursor-pointer rounded-[8px] border-0 bg-[var(--color-surface)] px-3 py-2.5 text-center text-sm font-semibold leading-snug text-[var(--color-brand-950)] shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-600)] focus-visible:ring-inset sm:rounded-[10px] sm:px-3.5 sm:py-3 sm:text-left sm:text-base sm:leading-normal",
        useShortOptionLabels ? "tabular-nums tracking-wide" : "text-pretty",
      )
    : cn(
        "min-h-[48px] min-w-0 max-w-[12rem] rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm font-semibold leading-snug text-[var(--color-brand-950)] shadow-sm focus-visible:border-[var(--color-brand-600)] sm:max-w-xs sm:text-base",
        useShortOptionLabels
          ? "text-center tabular-nums tracking-wide"
          : "truncate text-left",
      );

  const selectEl = (
    <select
      className={cn(selectBase, selectClassName)}
      value={activeLocale}
      onChange={(e) =>
        router.replace(pathname, { locale: e.target.value as (typeof routing.locales)[number] })
      }
      aria-label={t("language")}
      title={
        useShortOptionLabels
          ? LOCALE_LABELS[activeLocale] ?? activeLocale.toUpperCase()
          : undefined
      }
    >
      {routing.locales.map((loc) => (
        <option key={loc} value={loc}>
          {useShortOptionLabels
            ? (LOCALE_SHORT[loc] ?? loc.toUpperCase())
            : (LOCALE_LABELS[loc] ?? loc.toUpperCase())}
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
        <span className="home-toolbar-gradient-frame flex h-full min-h-0 min-w-0 w-full flex-col rounded-lg p-[2px] sm:rounded-xl">
          {selectEl}
        </span>
      ) : (
        selectEl
      )}
    </label>
  );
}
