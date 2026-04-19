"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export type HowStep = { title: string; body: string };

type Props = {
  steps: HowStep[];
  expandLabel: string;
  collapseLabel: string;
  footNote: string;
};

export function HomeHowAccordion({ steps, expandLabel, collapseLabel, footNote }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-how-accordion">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-left text-sm font-semibold text-[var(--color-brand-950)] shadow-sm transition hover:border-[color-mix(in_srgb,var(--color-brand-600)_35%,var(--color-border))] sm:px-5 sm:py-3.5"
        aria-expanded={open}
      >
        <span>{open ? collapseLabel : expandLabel}</span>
        <span
          className={cn(
            "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-brand-soft)] text-[var(--color-brand-700)] transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open ? (
        <ol className="mt-4 space-y-5 border-t border-[var(--color-border)] pt-5">
          {steps.map((s, i) => (
            <li key={i} className="text-sm leading-relaxed text-body">
              <p className="font-semibold text-[var(--color-brand-950)]">{s.title}</p>
              <p className="mt-1 text-body">{s.body}</p>
            </li>
          ))}
        </ol>
      ) : null}
      <p className="mt-3 text-xs leading-relaxed text-muted">{footNote}</p>
    </div>
  );
}
