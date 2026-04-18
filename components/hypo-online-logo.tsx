type Props = {
  /** Accessible label (e.g. site name). */
  label?: string;
  className?: string;
  /** Unique ID fragment for SVG gradient (avoid clashes if multiple instances). */
  gradientId?: string;
  /** "default" = dark dot on light UI; "onDark" = light dot on purple/dark backgrounds. */
  variant?: "default" | "onDark";
};

/**
 * Wordmark with light-violet → purple gradient. SVG for sharp scaling (header, social-style assets).
 */
export function HypoOnlineLogo({
  label = "hypo.online",
  className = "",
  gradientId = "hypoWordmarkGrad",
  variant = "default",
}: Props) {
  const dotFill = variant === "onDark" ? "#faf5ff" : "#4c1d95";

  return (
    <svg
      className={className}
      viewBox="0 0 220 36"
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{label}</title>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faf5ff" />
          <stop offset="30%" stopColor="#e9d5ff" />
          <stop offset="65%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="27"
        fontFamily='ui-sans-serif, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        fontSize="26"
        letterSpacing="-0.02em"
      >
        <tspan fontWeight="700" fill={`url(#${gradientId})`}>
          hypo
        </tspan>
        <tspan fontWeight="700" fill={dotFill} opacity={variant === "onDark" ? 0.95 : 0.88}>
          .
        </tspan>
        <tspan fontWeight="600" fill={`url(#${gradientId})`}>
          online
        </tspan>
      </text>
    </svg>
  );
}
