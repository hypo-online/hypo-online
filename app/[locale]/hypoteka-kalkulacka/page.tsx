import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = calcCopy(locale);
  return {
    title: copy.metaTitle,
  };
}

export default async function HypotekaKalkulackaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = calcCopy(locale);
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6">
      <Link
        href="/"
        className="text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
      >
        ← hypo.online
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-brand-950)]">
        {copy.h1}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-zinc-700">
        {copy.p1}
      </p>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {copy.s1Title}
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700">
          <li>
            •{" "}
            {copy.s1b1}
          </li>
          <li>
            •{" "}
            {copy.s1b2}
          </li>
          <li>
            •{" "}
            {copy.s1b3}
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {copy.s2Title}
        </h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          {copy.s2p1}
        </p>
        <p className="text-sm leading-relaxed text-zinc-700">
          {copy.s2p2}
        </p>
      </section>

      <section className="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {copy.s3Title}
        </h2>
        <ul className="space-y-2 text-sm text-zinc-700">
          <li>• {copy.s3b1}</li>
          <li>• {copy.s3b2}</li>
          <li>• {copy.s3b3}</li>
        </ul>
      </section>

      <div className="mt-8 rounded-2xl finance-panel p-6">
        <h2 className="text-xl font-semibold">
          {copy.ctaTitle}
        </h2>
        <p className="mt-2 text-sm text-indigo-100">
          {copy.ctaText}
        </p>
        <Link
          href="/quiz"
          className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-[var(--color-brand-900)]"
        >
          {copy.ctaButton}
        </Link>
      </div>
    </div>
  );
}

function calcCopy(locale: string) {
  const en = {
    metaTitle: "Mortgage calculator | hypo.online",
    h1: "Mortgage calculator: orientation without chaos",
    p1: "This page explains how to quickly estimate whether a mortgage is realistic for your profile. It is indicative, not a binding bank approval.",
    s1Title: "What this calculator actually solves",
    s1b1: "Fast pre-screening before entering a full application.",
    s1b2: "Probability signal (percentage + traffic light) instead of vague “maybe”.",
    s1b3: "Concrete next step for you and your broker.",
    s2Title: "How to read your result",
    s2p1: "Green is not automatic approval and red is not game over. It is a risk map: income, liabilities, own funds, timing, and documentation.",
    s2p2: "The highest value comes when the result is followed by an experienced broker who adjusts your profile before submission.",
    s3Title: "Most common applicant mistakes",
    s3b1: "Starting too late when deadlines are already tight.",
    s3b2: "Incomplete income and liability documentation.",
    s3b3: "Underestimating own costs beyond purchase price.",
    ctaTitle: "Want a fast indicative result now?",
    ctaText: "It takes around 2 minutes and returns a probability plus a recommended next step.",
    ctaButton: "Start quick check",
  };
  if (locale === "cs") {
    return {
      metaTitle: "Hypotéka kalkulačka | hypo.online",
      h1: "Hypotéka kalkulačka: orientace bez chaosu",
      p1: "Tato stránka vysvětluje, jak rychle odhadnout, jestli je hypotéka pro váš profil realistická. Jde o orientační výsledek, ne závazné schválení banky.",
      s1Title: "Co kalkulačka reálně řeší",
      s1b1: "Rychlý předběžný screening, než půjdete do plné žádosti.",
      s1b2: "Signál pravděpodobnosti (procento + semafor) místo nejasného „možná“.",
      s1b3: "Konkrétní další krok pro vás i makléře.",
      s2Title: "Jak číst výsledek",
      s2p1: "Zelená neznamená automatické schválení a červená neznamená konec. Ve skutečnosti jde o mapu rizik: příjem, závazky, vlastní zdroje, časování a dokumentace.",
      s2p2: "Nejvyšší hodnotu má výsledek, když na něj naváže zkušený makléř a navrhne úpravy profilu před podáním.",
      s3Title: "Nejčastější chyby žadatelů",
      s3b1: "Řešit banku příliš pozdě (když už tlačí termín).",
      s3b2: "Nedotažené podklady k příjmu a závazkům.",
      s3b3: "Podcenění vlastních nákladů mimo kupní cenu.",
      ctaTitle: "Chcete rychlý orientační výsledek teď?",
      ctaText: "Vyplnění zabere zhruba 2 minuty a dostanete procento + doporučený další krok.",
      ctaButton: "Spustit rychlý check",
    };
  }
  if (locale === "de") return { ...en, metaTitle: "Hypothekenrechner | hypo.online", h1: "Hypothekenrechner: Orientierung ohne Chaos", ctaButton: "Schnellprüfung starten" };
  if (locale === "pl") return { ...en, metaTitle: "Kalkulator hipoteczny | hypo.online", h1: "Kalkulator hipoteczny: orientacja bez chaosu", ctaButton: "Uruchom szybki check" };
  if (locale === "sk") return { ...en, metaTitle: "Hypotekárna kalkulačka | hypo.online", h1: "Hypotekárna kalkulačka: orientácia bez chaosu", ctaButton: "Spustiť rýchly check" };
  if (locale === "uk") return { ...en, metaTitle: "Іпотечний калькулятор | hypo.online", h1: "Іпотечний калькулятор: орієнтація без хаосу", ctaButton: "Запустити швидку перевірку" };
  if (locale === "ru") return { ...en, metaTitle: "Ипотечный калькулятор | hypo.online", h1: "Ипотечный калькулятор: ориентация без хаоса", ctaButton: "Запустить быстрый чек" };
  if (locale === "vi") return { ...en, metaTitle: "May tinh the chap | hypo.online", h1: "May tinh the chap: dinh huong khong roi", ctaButton: "Bat dau kiem tra nhanh" };
  if (locale === "ro") return { ...en, metaTitle: "Calculator ipotecar | hypo.online", h1: "Calculator ipotecar: orientare fara haos", ctaButton: "Porneste verificarea rapida" };
  if (locale === "es") return { ...en, metaTitle: "Calculadora hipotecaria | hypo.online", h1: "Calculadora hipotecaria: orientacion sin caos", ctaButton: "Iniciar chequeo rapido" };
  if (locale === "fr") return { ...en, metaTitle: "Calculateur hypothecaire | hypo.online", h1: "Calculateur hypothecaire : orientation sans chaos", ctaButton: "Demarrer la verification rapide" };
  if (locale === "it") return { ...en, metaTitle: "Calcolatore mutuo | hypo.online", h1: "Calcolatore mutuo: orientamento senza caos", ctaButton: "Avvia controllo rapido" };
  if (locale === "tr") return { ...en, metaTitle: "Ipotek hesaplayici | hypo.online", h1: "Ipotek hesaplayici: karmasa olmadan yonlendirme", ctaButton: "Hizli kontrolu baslat" };
  if (locale === "zh") return { ...en, metaTitle: "按揭计算器 | hypo.online", h1: "按揭计算器：清晰快速判断", ctaButton: "开始快速评估" };
  return en;
}
