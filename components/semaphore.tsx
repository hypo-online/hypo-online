import type { Signal } from "@/lib/evaluation";

const ORDER: Signal[] = ["red", "yellow", "green"];

export function Semaphore({ signal }: { signal: Signal }) {
  return (
    <div
      className="flex items-center justify-center gap-3 rounded-2xl bg-zinc-900 px-5 py-4 shadow-inner"
      role="img"
      aria-label={`Signal: ${signal}`}
    >
      {ORDER.map((key) => {
        const active = key === signal;
        const color =
          key === "green"
            ? "bg-emerald-400"
            : key === "yellow"
              ? "bg-amber-300"
              : "bg-red-500";
        return (
          <span
            key={key}
            className={`h-10 w-10 rounded-full transition ${color} ${
              active
                ? "opacity-100 ring-4 ring-white/80 scale-110 shadow-lg"
                : "opacity-25 scale-95"
            }`}
          />
        );
      })}
    </div>
  );
}
