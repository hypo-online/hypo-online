import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/** Root and unprefixed URLs default to Czech (`cs`), not browser `Accept-Language`. */
export default createMiddleware({
  ...routing,
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
