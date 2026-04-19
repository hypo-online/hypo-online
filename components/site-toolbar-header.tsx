import { SiteLogoNav } from "@/components/site-logo-nav";
import { LocaleSwitcher } from "@/components/locale-switcher";

/** Same top bar as the homepage: inline logo + gradient locale switcher. */
export function SiteToolbarHeader() {
  return (
    <header className="home-top-bar mb-6 flex min-h-14 items-center justify-between gap-2 sm:mb-8 sm:min-h-[3.75rem] sm:gap-3">
      <SiteLogoNav
        logoLayout="inline"
        className="home-top-bar-logo min-w-0 flex-1 basis-0 overflow-hidden pr-1 sm:pr-2"
      />
      <div className="home-top-bar-locale-shell flex min-h-11 w-[12.5rem] max-w-[calc(100%-6.5rem)] shrink-0 items-center justify-end sm:min-h-[3.25rem] sm:w-[14rem]">
        <LocaleSwitcher gradientFrame className="h-full min-h-0 w-full" />
      </div>
    </header>
  );
}
