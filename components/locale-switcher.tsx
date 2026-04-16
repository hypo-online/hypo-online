"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";

const locales = ["cs", "en"] as const;

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/80 px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-black/5 backdrop-blur">
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          className={
            loc === locale
              ? "rounded-full bg-[var(--color-brand-600)] px-2.5 py-1 text-white"
              : "rounded-full px-2.5 py-1 text-zinc-600 hover:bg-zinc-100"
          }
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
