import { Link } from "@/navigation";
import { HypoOnlineLogo } from "@/components/hypo-online-logo";

type Props = {
  href?: string;
  className?: string;
  logoClassName?: string;
  variant?: "default" | "onDark";
};

/** Home (or custom) link wrapping the brand logo — use in headers and “back” rows. */
export function SiteLogoNav({
  href = "/",
  className = "",
  /** Vertical mark: default height works in toolbars and article headers. */
  logoClassName = "h-10 w-auto sm:h-11 md:h-12",
  variant = "default",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] ${className}`.trim()}
    >
      <HypoOnlineLogo className={logoClassName} variant={variant} />
    </Link>
  );
}
