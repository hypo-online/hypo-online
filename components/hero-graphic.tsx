/** Visual-only snapshot: no copy — avoids i18n drift; colors follow semantic signal tokens */
export function HeroGraphic() {
  return (
    <div className="card-surface p-5">
      <div className="flex flex-wrap items-center gap-5">
        <div
          className="flex h-[5.5rem] w-[5.5rem] shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-signal-green)] bg-[var(--color-signal-green-bg)] text-2xl font-semibold tabular-nums text-[var(--color-signal-green)]"
          aria-hidden
        >
          71%
        </div>
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex gap-2" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-signal-red)] opacity-35" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-signal-amber)] opacity-35" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-signal-green)]" />
          </div>
          <div className="h-px w-full bg-[var(--color-border)]" />
          <div className="h-2 w-3/4 max-w-[12rem] rounded bg-[var(--color-border)]" />
          <div className="h-2 w-1/2 max-w-[8rem] rounded bg-[var(--color-border)]/70" />
        </div>
      </div>
    </div>
  );
}
