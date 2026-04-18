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
  /** Smaller plate + height on phones; clearly larger from tablet up (avoids crowding the locale control). */
  logoClassName = "h-6 w-auto min-[420px]:h-7 sm:h-10 md:h-11 lg:h-12",
  variant = "default",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center rounded-md -ml-1.5 -mt-2 sm:-ml-1 sm:-mt-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] ${className}`.trim()}
    >
      <HypoOnlineLogo className={logoClassName} variant={variant} />
    </Link>
  );
}
