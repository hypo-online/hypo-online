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
};

/**
 * Full hypo.online brand mark (PNG). Always wrapped for contrast on any background.
 */
export function HypoOnlineLogo({
  label = "hypo.online",
  className = "",
  variant = "default",
}: Props) {
  const shell =
    variant === "onDark"
      ? "inline-flex rounded-xl bg-white/95 p-2 shadow-lg ring-2 ring-white/50"
      : "inline-flex rounded-lg bg-white/95 p-1 shadow-sm ring-1 ring-neutral-200/90 dark:bg-white/[0.98] dark:ring-white/15 dark:shadow-[0_2px_12px_rgba(0,0,0,0.35)]";

  return (
    <span className={shell}>
      <Image
        src="/brand/hypo-online-logo.png"
        alt={label}
        width={720}
        height={240}
        priority
        sizes="(max-width: 640px) 220px, 280px"
        className={`h-auto w-auto object-contain object-left ${className}`.trim()}
      />
    </span>
  );
}
