export function HeroGraphic() {
  return (
    <div className="finance-panel relative overflow-hidden rounded-2xl p-4 shadow-lg ring-1 ring-black/10">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-indigo-400/20 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-blue-300/20 blur-2xl" />

      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
        Approval Snapshot
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white/10 p-3">
          <p className="text-[11px] text-indigo-100">Probability</p>
          <p className="mt-1 text-2xl font-bold">71%</p>
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <p className="text-[11px] text-indigo-100">Signal</p>
          <p className="mt-1 text-2xl font-bold text-emerald-300">GREEN</p>
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-white/10 p-3">
        <p className="text-[11px] text-indigo-100">Top next action</p>
        <p className="mt-1 text-sm leading-relaxed text-indigo-50">
          Prepare income docs and reduce one monthly liability before broker call.
        </p>
      </div>
    </div>
  );
}
