"use client";

import { useState } from "react";

type Props = {
  title: string;
  summary: string;
  details: string;
  expandAria: string;
  collapseAria: string;
};

export function HomeDataAccordion({ title, summary, details, expandAria, collapseAria }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5"
      aria-labelledby="home-data-heading"
    >
      <h2 id="home-data-heading" className="text-sm font-semibold text-[var(--color-brand-950)]">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-body">{summary}</p>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="mt-2 text-sm font-semibold text-[var(--color-brand-600)] underline-offset-4 hover:underline"
        aria-expanded={open}
        aria-controls="home-data-details"
        id="home-data-toggle"
      >
        {open ? collapseAria : expandAria}
      </button>
      {open ? (
        <p id="home-data-details" className="pt-3 text-sm leading-relaxed text-body" role="region">
          {details}
        </p>
      ) : null}
    </section>
  );
}
