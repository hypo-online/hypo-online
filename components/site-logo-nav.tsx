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
  logoClassName = "h-7 w-auto sm:h-8",
  variant = "default",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 ${className}`.trim()}
    >
      <HypoOnlineLogo className={logoClassName} variant={variant} />
    </Link>
  );
}
