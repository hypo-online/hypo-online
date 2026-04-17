export function trackEvent(name: string, props?: Record<string, string | number>) {
  if (typeof window === "undefined") return;

  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, string | number> }) => void;
  };

  if (typeof w.gtag === "function") {
    w.gtag("event", name, props ?? {});
  }

  if (typeof w.plausible === "function") {
    w.plausible(name, props ? { props } : undefined);
  }
}
