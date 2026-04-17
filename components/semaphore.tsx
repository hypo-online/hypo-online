import type { Signal } from "@/lib/evaluation";

const ORDER: Signal[] = ["red", "yellow", "green"];

export function Semaphore({ signal }: { signal: Signal }) {
  return (
    <div
      className="flex items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-5 py-4"
      role="img"
      aria-label={`Signal: ${signal}`}
    >
      {ORDER.map((key) => {
        const active = key === signal;
        const base =
          key === "green"
            ? "bg-[var(--color-signal-green)]"
            : key === "yellow"
              ? "bg-[var(--color-signal-amber)]"
              : "bg-[var(--color-signal-red)]";
        return (
          <span
            key={key}
            className={`h-10 w-10 rounded-full transition ${base} ${
              active
                ? "opacity-100 ring-2 ring-[var(--color-brand-950)]/15 scale-110"
                : "opacity-25 scale-95"
            }`}
          />
        );
      })}
    </div>
  );
}
