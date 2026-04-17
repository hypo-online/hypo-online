type AiFlowGraphicProps = {
  locale: string;
};

export function AiFlowGraphic({ locale }: AiFlowGraphicProps) {
  const isCs = locale === "cs";
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
      <div className="grid gap-2 sm:grid-cols-3">
        <Node
          title={isCs ? "Vstup" : "Input"}
          text={isCs ? "Příjem, cíl, časování" : "Income, goal, timeline"}
        />
        <Node
          title={isCs ? "Scoring" : "Scoring"}
          text={isCs ? "AI model + bankovní pravidla" : "AI model + bank-like rules"}
        />
        <Node
          title={isCs ? "Match" : "Matching"}
          text={isCs ? "Makléř + další krok" : "Broker + next step"}
        />
      </div>
    </div>
  );
}

function Node({ title, text }: { title: string; text: string }) {
  return (
    <div className="relative rounded-xl border border-zinc-200 bg-zinc-50 p-3">
      <p className="text-sm font-semibold text-[var(--color-brand-900)]">{title}</p>
      <p className="mt-1 text-xs text-zinc-600">{text}</p>
    </div>
  );
}
