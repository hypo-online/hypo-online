"use client";

import { useEffect, useState } from "react";
import { Link } from "@/navigation";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  label: string;
};

/** Fixed bottom CTA on small screens after scroll — keeps primary action reachable. */
export function HomeStickyQuizCta({ href, label }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 220);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 md:hidden",
        visible ? "opacity-100" : "pointer-events-none opacity-0 translate-y-2",
      )}
      style={{ transition: "opacity 0.2s ease, transform 0.2s ease" }}
      aria-hidden={!visible}
    >
      <div className={cn("mx-auto max-w-lg", visible ? "pointer-events-auto" : "pointer-events-none")}>
        <Link
          href={href}
          className="btn-gradient-primary flex min-h-[48px] w-full items-center justify-center rounded-xl px-4 text-sm font-bold shadow-lg"
        >
          {label}
        </Link>
      </div>
    </div>
  );
}
