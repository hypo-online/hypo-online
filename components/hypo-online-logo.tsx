"use client";

import Image from "next/image";

type Props = {
  /** Accessible label (e.g. site name). */
  label?: string;
  className?: string;
  /** @deprecated Kept for call-site compatibility; PNG logo ignores gradients. */
  gradientId?: string;
  /**
   * default: light UI — subtle ring/shadow so the mark stays readable on tinted cards.
   * onDark: padded light plate for purple/dark hero backgrounds.
   */
  variant?: "default" | "onDark";
  /** compact: minimal plate (tables, dense headers). default: standard padding scales up on sm+. */
  density?: "default" | "compact";
};

/**
 * Full hypo.online brand mark (PNG). Always wrapped for contrast on any background.
 */
export function HypoOnlineLogo({
  label = "hypo.online",
  className = "",
  variant = "default",
  density = "default",
}: Props) {
  const shell =
    density === "compact"
      ? variant === "onDark"
        ? "inline-flex rounded-md bg-white/95 p-0.5 shadow-sm ring-1 ring-white/45 dark:ring-white/20"
        : "inline-flex rounded-md bg-white/95 p-0.5 shadow-sm ring-1 ring-neutral-200/80 dark:bg-white/[0.98] dark:ring-white/12 dark:shadow-[0_1px_8px_rgba(0,0,0,0.28)]"
      : variant === "onDark"
        ? "inline-flex rounded-lg bg-white/95 p-0.5 shadow-md ring-2 ring-white/45 sm:rounded-xl sm:p-1.5 sm:shadow-lg sm:ring-white/50"
        : "inline-flex rounded-md bg-white/95 p-0.5 shadow-sm ring-1 ring-neutral-200/90 dark:bg-white/[0.98] dark:ring-white/15 dark:shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:rounded-lg sm:p-1";

  const sizes =
    density === "compact"
      ? "(max-width: 640px) 120px, 200px"
      : "(max-width: 640px) 168px, (max-width: 1024px) 260px, 320px";

  return (
    <span className={shell}>
      <Image
        src="/brand/hypo-online-logo.png"
        alt={label}
        width={720}
        height={240}
        priority
        sizes={sizes}
        className={`h-auto w-auto object-contain object-left ${className}`.trim()}
      />
    </span>
  );
}
