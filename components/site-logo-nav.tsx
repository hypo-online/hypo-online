import { Link } from "@/navigation";
import { HypoOnlineLogo } from "@/components/hypo-online-logo";
import { HypoOnlineLogoInline } from "@/components/hypo-online-logo-inline";

type Props = {
  href?: string;
  className?: string;
  logoClassName?: string;
  variant?: "default" | "onDark";
  /** `inline` = house + wordmark in one row (same height as toolbar controls). */
  logoLayout?: "vertical" | "inline";
};

/** Home (or custom) link wrapping the brand logo — use in headers and “back” rows. */
export function SiteLogoNav({
  href = "/",
  className = "",
  /** Vertical PNG mark — used when `logoLayout` is `vertical`. */
  logoClassName = "h-10 w-auto sm:h-11 md:h-12",
  variant = "default",
  logoLayout = "vertical",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] ${logoLayout === "inline" ? "min-h-0 min-w-0 max-w-full items-center self-center" : ""} ${className}`.trim()}
    >
      {logoLayout === "inline" ? (
        <HypoOnlineLogoInline className="min-w-0 max-w-full px-0.5" />
      ) : (
        <HypoOnlineLogo className={logoClassName} variant={variant} />
      )}
    </Link>
  );
}
