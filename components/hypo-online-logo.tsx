"use client";

import Image from "next/image";

type Props = {
  /** Accessible label (e.g. site name). */
  label?: string;
  className?: string;
  /** @deprecated Kept for call-site compatibility; PNG logo ignores gradients. */
  gradientId?: string;
  /** Kept for API compatibility; mark always sits flush on the parent/page background. */
  variant?: "default" | "onDark";
  /** Smaller `sizes` hint for dense layouts (e.g. comparison table). */
  density?: "default" | "compact";
};

/** Full hypo.online brand mark (PNG). No plate — matches page or parent background. */
export function HypoOnlineLogo({
  label = "hypo.online",
  className = "",
  density = "default",
}: Props) {
  const shell = "inline-flex items-center bg-transparent p-0 shadow-none ring-0";

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
