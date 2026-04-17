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
  if (locale === "pl") return {
    ...en,
    metaTitle: "Kalkulator hipoteczny | hypo.online",
    h1: "Kalkulator hipoteczny: orientacja bez chaosu",
    p1: "Ta strona wyjaśnia, jak szybko oszacować, czy hipoteka jest realistyczna dla Twojego profilu. To wynik orientacyjny, nie wiążąca decyzja banku.",
    s1Title: "Co ten kalkulator realnie rozwiązuje",
    s1b1: "Szybki wstępny screening, zanim wejdziesz w pełny proces wniosku.",
    s1b2: "Sygnał prawdopodobieństwa (procent + semafor) zamiast ogólnego „może”.",
    s1b3: "Konkretny kolejny krok dla Ciebie i brokera.",
    s2Title: "Jak czytać wynik",
    s2p1: "Zielony nie oznacza automatycznej zgody, a czerwony nie oznacza końca. To mapa ryzyka: dochód, zobowiązania, środki własne, czas i dokumenty.",
    s2p2: "Największą wartość daje wtedy, gdy doświadczony broker przejmie wynik i dopracuje profil przed złożeniem wniosku.",
    s3Title: "Najczęstsze błędy wnioskodawców",
    s3b1: "Zaczynanie zbyt późno, gdy terminy już napierają.",
    s3b2: "Niepełna dokumentacja dochodów i zobowiązań.",
    s3b3: "Niedoszacowanie kosztów własnych poza ceną zakupu.",
    ctaTitle: "Chcesz szybki wynik orientacyjny teraz?",
    ctaText: "Zajmuje to około 2 minuty i zwraca prawdopodobieństwo oraz rekomendowany kolejny krok.",
    ctaButton: "Uruchom szybką weryfikację",
  };
  if (locale === "sk") return { ...en, metaTitle: "Hypotekárna kalkulačka | hypo.online", h1: "Hypotekárna kalkulačka: orientácia bez chaosu", ctaButton: "Spustiť rýchly check" };
  if (locale === "uk") return { ...en, metaTitle: "Іпотечний калькулятор | hypo.online", h1: "Іпотечний калькулятор: орієнтація без хаосу", ctaButton: "Запустити швидку перевірку" };
  if (locale === "ru") return { ...en, metaTitle: "Ипотечный калькулятор | hypo.online", h1: "Ипотечный калькулятор: ориентация без хаоса", ctaButton: "Запустить быстрый чек" };
  if (locale === "vi") return { ...en, metaTitle: "May tinh the chap | hypo.online", h1: "May tinh the chap: dinh huong khong roi", ctaButton: "Bat dau kiem tra nhanh" };
  if (locale === "ro") return { ...en, metaTitle: "Calculator ipotecar | hypo.online", h1: "Calculator ipotecar: orientare fara haos", ctaButton: "Porneste verificarea rapida" };
  if (locale === "es") return { ...en, metaTitle: "Calculadora hipotecaria | hypo.online", h1: "Calculadora hipotecaria: orientacion sin caos", ctaButton: "Iniciar chequeo rapido" };
  if (locale === "fr") return { ...en, metaTitle: "Calculateur hypothecaire | hypo.online", h1: "Calculateur hypothecaire : orientation sans chaos", ctaButton: "Demarrer la verification rapide" };
  if (locale === "it") return {
    ...en,
    metaTitle: "Calcolatore mutuo | hypo.online",
    h1: "Calcolatore mutuo: orientamento senza caos",
    p1: "Questa pagina spiega come stimare rapidamente se un mutuo è realistico per il tuo profilo. È un risultato indicativo, non un'approvazione bancaria vincolante.",
    s1Title: "Cosa risolve davvero questo calcolatore",
    s1b1: "Pre-screening rapido prima di entrare nella richiesta completa.",
    s1b2: "Segnale di probabilità (percentuale + semaforo) invece di un generico «forse».",
    s1b3: "Prossimo passo concreto per te e per il broker.",
    s2Title: "Come leggere il risultato",
    s2p1: "Il verde non significa approvazione automatica e il rosso non significa fine del percorso. È una mappa dei rischi: reddito, passività, fondi propri, tempistiche e documenti.",
    s2p2: "Il massimo valore si ottiene quando un broker esperto segue il risultato e ottimizza il profilo prima dell'invio.",
    s3Title: "Errori più comuni dei richiedenti",
    s3b1: "Partire troppo tardi quando le scadenze sono già strette.",
    s3b2: "Documentazione di reddito e passività incompleta.",
    s3b3: "Sottovalutare i costi propri oltre al prezzo di acquisto.",
    ctaTitle: "Vuoi subito un risultato indicativo veloce?",
    ctaText: "Servono circa 2 minuti e ottieni probabilità e prossimo passo consigliato.",
    ctaButton: "Avvia verifica rapida",
  };
  if (locale === "tr") return { ...en, metaTitle: "Ipotek hesaplayici | hypo.online", h1: "Ipotek hesaplayici: karmasa olmadan yonlendirme", ctaButton: "Hizli kontrolu baslat" };
  if (locale === "zh") return { ...en, metaTitle: "按揭计算器 | hypo.online", h1: "按揭计算器：清晰快速判断", ctaButton: "开始快速评估" };
  return en;
}
