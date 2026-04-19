/**
 * Horizontal brand mark: house symbol + “Hypo.online” for compact toolbars.
 * Height follows the parent (use with fixed h-* on the wrapping link).
 */
export function HypoOnlineLogoInline({
  className = "",
  /** Unique id prefix for SVG gradient defs (avoid clashes if multiple instances). */
  idPrefix = "hypo-inline",
}: {
  className?: string;
  idPrefix?: string;
}) {
  const gid = `${idPrefix}-house-grad`;

  return (
    <span
      className={`inline-flex max-w-full items-center gap-2 sm:gap-2.5 ${className}`.trim()}
    >
      <svg
        className="h-[1.5rem] w-[1.5rem] shrink-0 sm:h-7 sm:w-7"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id={gid} x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6d3bff" />
            <stop offset="1" stopColor="#3a8dff" />
          </linearGradient>
        </defs>
        <path
          d="M24 5 43 21v22H5V21L24 5Z"
          stroke={`url(#${gid})`}
          strokeWidth="2.25"
          strokeLinejoin="round"
          fill="none"
        />
        <rect
          x="17.5"
          y="25"
          width="13"
          height="11"
          rx="1.25"
          stroke={`url(#${gid})`}
          strokeWidth="2"
          fill="none"
        />
        <path d="M24 25v11M17.5 30.5h13" stroke={`url(#${gid})`} strokeWidth="1.75" />
        <path
          d="M7 39c5.5-4 12.5-5 17-4.5 4.5.5 10 2.5 17 5.5"
          stroke={`url(#${gid})`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="hypo-inline-wordmark min-w-0 truncate text-left text-sm font-semibold leading-none tracking-tight sm:text-base">
        <span className="text-[var(--color-brand-800)] dark:text-[var(--color-brand-200)]">Hypo</span>
        <span className="text-[var(--color-brand-600)]">.</span>
        <span className="hypo-inline-online bg-gradient-to-r from-[var(--color-brand-gradient-from)] to-[var(--color-brand-gradient-to)] bg-clip-text text-transparent">
          online
        </span>
      </span>
    </span>
  );
}
