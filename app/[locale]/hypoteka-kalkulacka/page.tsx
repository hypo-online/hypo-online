import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Hypotéka kalkulačka | hypo.online" };
}

export default async function HypotekaKalkulackaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isCs = locale === "cs";
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6">
      <Link
        href="/"
        className="text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
      >
        ← hypo.online
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-brand-950)]">
        {isCs ? "Hypotéka kalkulačka: orientace bez chaosu" : "Mortgage calculator: orientation without chaos"}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-zinc-700">
        {isCs
          ? "Tato stránka vysvětluje, jak rychle odhadnout, jestli je hypotéka pro váš profil realistická. Jde o orientační výsledek, ne závazné schválení banky."
          : "This page explains how to quickly estimate whether a mortgage is realistic for your profile. It is indicative, not a binding bank approval."}
      </p>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {isCs ? "Co kalkulačka reálně řeší" : "What this calculator actually solves"}
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700">
          <li>
            •{" "}
            {isCs
              ? "Rychlý předběžný screening, než půjdete do plné žádosti."
              : "Fast pre-screening before entering a full application."}
          </li>
          <li>
            •{" "}
            {isCs
              ? "Signál pravděpodobnosti (procento + semafor) místo nejasného „možná“."
              : "Probability signal (percentage + traffic light) instead of vague “maybe”."}
          </li>
          <li>
            •{" "}
            {isCs
              ? "Konkrétní další krok pro vás i makléře."
              : "Concrete next step for you and your broker."}
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {isCs ? "Jak číst výsledek" : "How to read your result"}
        </h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          {isCs
            ? "Zelená neznamená automatické schválení a červená neznamená konec. Ve skutečnosti jde o mapu rizik: příjem, závazky, vlastní zdroje, časování a dokumentace."
            : "Green is not automatic approval and red is not game over. It is a risk map: income, liabilities, own funds, timing, and documentation."}
        </p>
        <p className="text-sm leading-relaxed text-zinc-700">
          {isCs
            ? "Nejvyšší hodnotu má výsledek, když na něj naváže zkušený makléř a navrhne úpravy profilu před podáním."
            : "The highest value comes when the result is followed by an experienced broker who adjusts your profile before submission."}
        </p>
      </section>

      <section className="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {isCs ? "Nejčastější chyby žadatelů" : "Most common applicant mistakes"}
        </h2>
        <ul className="space-y-2 text-sm text-zinc-700">
          <li>• {isCs ? "Řešit banku příliš pozdě (když už tlačí termín)." : "Starting too late when deadlines are already tight."}</li>
          <li>• {isCs ? "Nedotažené podklady k příjmu a závazkům." : "Incomplete income and liability documentation."}</li>
          <li>• {isCs ? "Podcenění vlastních nákladů mimo kupní cenu." : "Underestimating own costs beyond purchase price."}</li>
        </ul>
      </section>

      <div className="mt-8 rounded-2xl finance-panel p-6">
        <h2 className="text-xl font-semibold">
          {isCs ? "Chcete rychlý orientační výsledek teď?" : "Want a fast indicative result now?"}
        </h2>
        <p className="mt-2 text-sm text-indigo-100">
          {isCs
            ? "Vyplnění zabere zhruba 2 minuty a dostanete procento + doporučený další krok."
            : "It takes around 2 minutes and returns a probability plus a recommended next step."}
        </p>
        <Link
          href="/quiz"
          className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-[var(--color-brand-900)]"
        >
          {isCs ? "Spustit rychlý check" : "Start quick check"}
        </Link>
      </div>
    </div>
  );
}
