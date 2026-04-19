import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HypoOnlineLogo } from "@/components/hypo-online-logo";
import { SiteLogoNav } from "@/components/site-logo-nav";
import { Link } from "@/navigation";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { HeroGraphic } from "@/components/hero-graphic";
import { AiFlowGraphic } from "@/components/ai-flow-graphic";
import { PrivacyDocument } from "@/components/privacy-document";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const copy = homeCopy(locale);

  const steps = [
    { title: t("home.how_step1_title"), body: t("home.how_step1_body") },
    { title: t("home.how_step2_title"), body: t("home.how_step2_body") },
    { title: t("home.how_step3_title"), body: t("home.how_step3_body") },
    { title: t("home.how_step4_title"), body: t("home.how_step4_body") },
    { title: t("home.how_step5_title"), body: t("home.how_step5_body") },
    { title: t("home.how_step6_title"), body: t("home.how_step6_body") },
  ] as const;

  const seoLinks = [
    {
      href: "/hypoteka-kalkulacka",
      label: copy.seoLinkCalculator,
    },
    {
      href: "/kolik-dostanu-hypoteku",
      label: copy.seoLinkBorrow,
    },
    {
      href: "/ltv-vypocet",
      label: copy.seoLinkLtv,
    },
    {
      href: "/hypoteka-prijem",
      label: copy.seoLinkIncome,
    },
    {
      href: "/vzdelavani",
      label: "Průvodce hypotékou v ČR",
    },
  ] as const;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: copy.faqQ1,
        acceptedAnswer: {
          "@type": "Answer",
          text: copy.faqA1,
        },
      },
      {
        "@type": "Question",
        name: copy.faqQ2,
        acceptedAnswer: {
          "@type": "Answer",
          text: copy.faqA2,
        },
      },
    ],
  };

  return (
    <div className="mx-auto flex min-h-dvh max-w-full flex-col px-4 pb-16 pt-7 sm:max-w-2xl sm:px-8 sm:pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="home-top-bar mb-5 flex items-center justify-between gap-2 sm:mb-6 sm:gap-4">
        <SiteLogoNav
          className="min-w-0 shrink"
          logoClassName="h-[2.85rem] w-auto max-h-[3.25rem] sm:h-[3.35rem] sm:max-h-none md:h-16"
        />
        <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3">
          <LocaleSwitcher
            className="shrink-0"
            selectClassName="home-toolbar-select max-w-[min(11rem,32vw)] min-h-10 border-[color-mix(in_srgb,var(--color-brand-600)_28%,var(--color-border))] bg-[var(--color-surface)] px-2.5 text-[11px] sm:min-h-11 sm:max-w-[13rem] sm:px-3 sm:text-xs"
          />
          <Link
            href="/vzdelavani"
            title={t("nav.guide")}
            className="home-toolbar-guide inline-flex min-h-10 max-w-[min(11.5rem,40vw)] shrink-0 items-center justify-center whitespace-normal rounded-lg bg-gradient-to-br from-[var(--color-brand-gradient-from)] to-[var(--color-brand-gradient-to)] px-2.5 py-1.5 text-center text-[11px] font-bold leading-snug text-white shadow-[0_3px_16px_color-mix(in_srgb,var(--color-brand-600)_38%,transparent)] transition hover:brightness-[1.06] active:brightness-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] sm:min-h-11 sm:max-w-[13.5rem] sm:px-3 sm:text-xs sm:leading-snug md:max-w-[17rem] md:text-sm"
          >
            {t("nav.guide")}
          </Link>
        </div>
      </header>

      <section
        className="hero-cta-panel mb-8 rounded-xl p-4 sm:p-5"
        aria-label={copy.heroCta}
      >
        <Link
          href="/quiz"
          className="btn-gradient-primary inline-flex w-full min-h-[52px] items-center justify-center rounded-xl px-5 text-base font-bold tracking-tight transition active:scale-[0.99] sm:min-h-[56px] sm:text-lg"
        >
          {copy.heroCta}
        </Link>
        <p className="mt-2 text-center text-xs leading-relaxed text-[var(--color-brand-800)] sm:text-sm dark:text-[var(--color-brand-900)]">
          {copy.heroMicro}
        </p>
        <div className="mt-3 flex justify-center">
          <a
            href="#how"
            className="text-sm font-semibold text-[var(--color-brand-600)] underline-offset-4 hover:underline"
          >
            {t("home.secondary")}
          </a>
        </div>
      </section>

      <p className="mb-3 inline-flex w-fit rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-brand-800)] ring-1 ring-[var(--color-border)]">
        {t("home.badge")}
      </p>
      <h1 className="text-balance text-[2rem] font-semibold leading-tight tracking-tight text-[var(--color-brand-950)] sm:text-4xl">
        {copy.heroHeadline}
      </h1>
      <p className="mt-4 text-pretty text-[15px] leading-relaxed text-body sm:text-lg">
        {copy.heroSub}
      </p>
      <aside
        className="mt-4 rounded-xl border border-[var(--color-border)] border-l-[3px] border-l-[var(--color-brand-600)] bg-[var(--color-brand-soft)] px-4 py-3 sm:px-5"
        aria-labelledby="data-callout-title"
      >
        <p
          id="data-callout-title"
          className="text-sm font-semibold text-[var(--color-brand-950)]"
        >
          {t("home.dataCalloutTitle")}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-body">{t("home.dataCalloutBody")}</p>
      </aside>
      <div className="mt-6">
        <Link
          href="/kolik-dostanu-hypoteku"
          className="inline-flex w-full min-h-[48px] items-center justify-center rounded-xl border-2 border-[var(--color-brand-600)] bg-[var(--color-surface)] px-5 text-base font-semibold text-[var(--color-brand-600)] shadow-sm transition hover:bg-[var(--color-brand-soft)] active:scale-[0.99] dark:hover:bg-white/5"
        >
          {copy.borrowCta}
        </Link>
      </div>

      <div className="mt-6">
        <HeroGraphic />
      </div>

      <ul className="mt-10 space-y-3 text-[15px] leading-relaxed text-body">
        <li className="flex gap-2">
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-600)]" />
          {t("home.trust1")}
        </li>
        <li className="flex gap-2">
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-600)]" />
          {t("home.trust2")}
        </li>
        <li className="flex gap-2">
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-600)]" />
          {t("home.trust3")}
        </li>
      </ul>

      <section className="card-surface mt-10 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {copy.coverageTitle}
        </p>
        <p className="mt-2 text-sm text-body">
          {copy.coverageText}
        </p>
      </section>

      <section className="card-surface mt-8 p-6">
        <h2 className="text-xl font-semibold leading-snug text-[var(--color-brand-950)]">
          {copy.aiTitle}
        </h2>
        <div className="mt-3 space-y-2 text-sm text-body">
          <p>• {copy.aiBullet1}</p>
          <p>• {copy.aiBullet2}</p>
          <p>• {copy.aiBullet3}</p>
        </div>
        <div className="mt-4">
          <AiFlowGraphic locale={locale} />
        </div>
      </section>

      <section className="card-surface mt-8 p-6">
        <h2 className="text-xl font-semibold leading-snug text-[var(--color-brand-950)]">
          {copy.brokerFlowTitle}
        </h2>
        <ol className="mt-3 space-y-2 text-sm text-body">
          <li>1. {copy.brokerFlow1}</li>
          <li>2. {copy.brokerFlow2}</li>
          <li>3. {copy.brokerFlow3}</li>
        </ol>
      </section>

      <section className="card-surface mt-8 p-6">
        <h2 className="text-xl font-semibold leading-snug text-[var(--color-brand-950)]">
          {copy.compareTitle}
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)] text-muted">
                <th className="py-2 pr-3">{copy.compareColFactor}</th>
                <th className="py-2 pr-3 align-bottom">
                  <HypoOnlineLogo
                    density="compact"
                    className="h-5 max-h-5 w-auto"
                    label="hypo.online"
                  />
                </th>
                <th className="py-2 pr-3">{copy.compareColBank}</th>
                <th className="py-2">{copy.compareColNoGuide}</th>
              </tr>
            </thead>
            <tbody className="text-body">
              <tr className="border-b border-[var(--color-border)]/70">
                <td className="py-2 pr-3">{copy.compareRow1a}</td>
                <td className="py-2 pr-3">{copy.compareRow1b}</td>
                <td className="py-2 pr-3">{copy.compareRow1c}</td>
                <td className="py-2">{copy.compareRow1d}</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]/70">
                <td className="py-2 pr-3">{copy.compareRow2a}</td>
                <td className="py-2 pr-3">{copy.compareRow2b}</td>
                <td className="py-2 pr-3">{copy.compareRow2c}</td>
                <td className="py-2">{copy.compareRow2d}</td>
              </tr>
              <tr>
                <td className="py-2 pr-3">{copy.compareRow3a}</td>
                <td className="py-2 pr-3">{copy.compareRow3b}</td>
                <td className="py-2 pr-3">{copy.compareRow3c}</td>
                <td className="py-2">{copy.compareRow3d}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="how" className="card-surface mt-16 space-y-6 p-6 sm:p-8">
        <div>
          <h2 className="text-xl font-semibold leading-snug text-[var(--color-brand-950)]">
            {t("home.howTitle")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-body">
            {t("home.howIntro")}
          </p>
        </div>
        <ol className="space-y-5">
          {steps.map((s, i) => (
            <li key={i} className="text-sm leading-relaxed text-body">
              <p className="font-semibold text-[var(--color-brand-950)]">{s.title}</p>
              <p className="mt-1 text-body">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="text-xs leading-relaxed text-muted">{t("home.how_lead_note")}</p>
      </section>

      <section className="card-surface mt-8 p-6 sm:p-8">
        <h2 className="text-xl font-semibold leading-snug text-[var(--color-brand-950)]">
          {copy.seoSectionTitle}
        </h2>
        <p className="mt-2 text-sm text-body">
          {copy.seoSectionText}
        </p>
        <div className="mt-4 grid gap-2">
          {seoLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-brand-600)] transition hover:border-[var(--color-brand-600)] hover:bg-[var(--color-brand-soft)] dark:hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section
        className="mt-14 border-t border-[var(--color-border)] pt-10"
        aria-labelledby="privacy-policy-heading"
      >
        <PrivacyDocument titleLevel="h2" />
      </section>
    </div>
  );
}

type HomeCopy = {
  heroHeadline: string; heroSub: string; borrowCta: string; heroCta: string; heroMicro: string;
  coverageTitle: string; coverageText: string; aiTitle: string; aiBullet1: string; aiBullet2: string; aiBullet3: string;
  brokerFlowTitle: string; brokerFlow1: string; brokerFlow2: string; brokerFlow3: string;
  compareTitle: string; compareColFactor: string; compareColBank: string; compareColNoGuide: string;
  compareRow1a: string; compareRow1b: string; compareRow1c: string; compareRow1d: string;
  compareRow2a: string; compareRow2b: string; compareRow2c: string; compareRow2d: string;
  compareRow3a: string; compareRow3b: string; compareRow3c: string; compareRow3d: string;
  seoSectionTitle: string; seoSectionText: string;
  seoLinkCalculator: string; seoLinkBorrow: string; seoLinkLtv: string; seoLinkIncome: string;
  faqQ1: string; faqA1: string; faqQ2: string; faqA2: string;
};

function homeCopy(locale: string): HomeCopy {
  const en: HomeCopy = {
    heroHeadline: "See in 2 minutes if your mortgage case is realistically approvable.",
    heroSub: "No running between banks. One-off automated scoring routes you to the right licensed broker for your case — questionnaire answers are not stored.",
    borrowCta: "Check how much I can borrow",
    heroCta: "Run the 2-minute mortgage check",
    heroMicro: "No commitment, ~2 minutes. Answers stay only for this live check and broker matching; we do not keep them afterwards.",
    coverageTitle: "Coverage", coverageText: "We work with mortgage specialists across CZ/SK market coverage. Bank choice depends on your profile.",
    aiTitle: "What AI does for you", aiBullet1: "One-off scoring from your answers — nothing is kept as a long-term dossier.", aiBullet2: "Suggests the best-matching broker by language, financing goal, and case complexity (e.g. foreign income, enforcement, non‑EU).", aiBullet3: "Surfaces weak points before you talk to a human broker.",
    brokerFlowTitle: "How broker collaboration works", brokerFlow1: "After result, send contact (optional).", brokerFlow2: "Broker calls and confirms document needs.", brokerFlow3: "You get a realistic path and next action.",
    compareTitle: "Mortgage path comparison", compareColFactor: "Factor", compareColBank: "Bank branch", compareColNoGuide: "No guidance",
    compareRow1a: "Speed to orientation", compareRow1b: "2-min check", compareRow1c: "Longer consultation", compareRow1d: "Unclear",
    compareRow2a: "Personalization", compareRow2b: "AI + broker", compareRow2c: "Single-bank lens", compareRow2d: "Low context",
    compareRow3a: "Next step clarity", compareRow3b: "Clear recommendation", compareRow3c: "Capacity-dependent", compareRow3d: "High uncertainty",
    seoSectionTitle: "SEO entry points for faster decisions", seoSectionText: "Practical pages for top mortgage questions. Each page leads into the quick check and broker handoff.",
    seoLinkCalculator: "Mortgage calculator", seoLinkBorrow: "How much can I borrow", seoLinkLtv: "LTV calculation", seoLinkIncome: "Mortgage and income",
    faqQ1: "Is this a binding bank approval?", faqA1: "No. It is an indicative probability estimate and next-step guidance with a broker.",
    faqQ2: "Do you store questionnaire answers?", faqA2: "No. They are used only for the live calculation and to propose the most suitable licensed mortgage broker for your specifics (language, product, life situation). After that run we do not retain them as a profile.",
  };
  const cs: HomeCopy = {
    heroHeadline: "Zjistěte během 2 minut, jestli má hypotéka reálnou šanci.",
    heroSub: "Bez běhání po bankách. Jednorázový automatický výpočet vás navede k nejvhodnějšímu licencovanému makléři pro váš případ — odpovědi z dotazníku neukládáme.",
    borrowCta: "Zjistit, kolik si mohu půjčit",
    heroCta: "Spustit 2minutový hypoteční check",
    heroMicro: "Bez závazku, cca 2 minuty. Odpovědi slouží jen této živé kontrole a párování s makléřem; poté je neuchováváme.",
    coverageTitle: "Spolupráce", coverageText: "Spolupracujeme s hypotečními specialisty napříč CZ/SK trhem. Konkrétní banka záleží na vašem profilu.",
    aiTitle: "Co dělá AI za vás", aiBullet1: "Jednorázový scoring z odpovědí — z dotazníku neukládáme dlouhodobý spis.", aiBullet2: "Navrhne nejvhodnějšího makléře podle jazyka, cíle financování a složitosti (např. příjem ze zahraničí, exekuce, mimo EU).", aiBullet3: "Odhalí slabá místa dřív, než jedete k makléři osobně.",
    brokerFlowTitle: "Jak probíhá spolupráce s makléřem", brokerFlow1: "Po výsledku odešlete kontakt (volitelné).", brokerFlow2: "Makléř se ozve a upřesní dokumenty.", brokerFlow3: "Dostanete realistický postup a další krok.",
    compareTitle: "Srovnání cesty k hypotéce", compareColFactor: "Faktor", compareColBank: "Banka (pobočka)", compareColNoGuide: "Bez vedení",
    compareRow1a: "Rychlost orientace", compareRow1b: "Kontrola za 2 min", compareRow1c: "Delší konzultace", compareRow1d: "Nejasná",
    compareRow2a: "Personalizace", compareRow2b: "AI + makléř", compareRow2c: "Podle jedné banky", compareRow2d: "Bez kontextu",
    compareRow3a: "Další krok", compareRow3b: "Jasné doporučení", compareRow3c: "Závislé na kapacitě", compareRow3d: "Vysoká nejistota",
    seoSectionTitle: "SEO vstupy pro rychlé rozhodnutí", seoSectionText: "Praktické stránky pro nejčastější dotazy. Každá navazuje na rychlý check a předání na makléře.",
    seoLinkCalculator: "Hypotéka kalkulačka", seoLinkBorrow: "Kolik dostanu hypotéku", seoLinkLtv: "LTV výpočet", seoLinkIncome: "Hypotéka a příjem",
    faqQ1: "Je výsledek závazné schválení bankou?", faqA1: "Ne. Jde o orientační odhad pravděpodobnosti a další krok s makléřem.",
    faqQ2: "Ukládáte odpovědi z dotazníku?", faqA2: "Ne. Použijeme je jen pro živý výpočet a návrh nejvhodnějšího licencovaného makléře podle specifik (jazyk, produkt, životní situace). Po dokončení běhu je neuchováváme jako profil.",
  };
  const de: HomeCopy = {
    heroHeadline: "In 2 Minuten sehen, ob Ihr Hypothekenfall realistisch genehmigungsfähig ist.",
    heroSub: "Ohne Filial-Marathon. Automatisches Scoring plus Makler für den nächsten Schritt.",
    borrowCta: "Prüfen, wie viel ich aufnehmen kann",
    heroCta: "2-Minuten-Hypotheken-Check starten",
    heroMicro: "Unverbindlich, in etwa 2 Minuten.",
    coverageTitle: "Abdeckung",
    coverageText: "Wir arbeiten mit Hypothekenspezialisten im CZ/SK-Markt. Die Bankauswahl hängt von Ihrem Profil ab.",
    aiTitle: "Was KI für Sie übernimmt",
    aiBullet1: "Sofortiger Vor-Scoring Ihres Falls.",
    aiBullet2: "Profilbasierter Eignungsvergleich.",
    aiBullet3: "Schwachstellen vor der Einreichung sichtbar machen.",
    brokerFlowTitle: "So läuft die Zusammenarbeit mit dem Makler",
    brokerFlow1: "Nach dem Ergebnis Kontaktdaten senden (optional).",
    brokerFlow2: "Der Makler ruft an und klärt den Dokumentenbedarf.",
    brokerFlow3: "Sie erhalten einen realistischen Plan und den nächsten Schritt.",
    compareTitle: "Vergleich des Hypothekenwegs",
    compareColFactor: "Faktor",
    compareColBank: "Bankfiliale",
    compareColNoGuide: "Ohne Begleitung",
    compareRow1a: "Orientierungsgeschwindigkeit",
    compareRow1b: "Prüfung in 2 Min.",
    compareRow1c: "Längere Beratung",
    compareRow1d: "Unklar",
    compareRow2a: "Personalisierung",
    compareRow2b: "KI + Makler",
    compareRow2c: "Sicht einer einzelnen Bank",
    compareRow2d: "Wenig Kontext",
    compareRow3a: "Klarheit zum nächsten Schritt",
    compareRow3b: "Klare Empfehlung",
    compareRow3c: "Kapazitätsabhängig",
    compareRow3d: "Hohe Unsicherheit",
    seoSectionTitle: "SEO-Einstiege für schnellere Entscheidungen",
    seoSectionText: "Praktische Seiten zu häufigen Hypothekenfragen. Jede führt zum Schnellcheck und zur Maklerübergabe.",
    seoLinkCalculator: "Hypothekenrechner",
    seoLinkBorrow: "Wie viel kann ich leihen",
    seoLinkLtv: "LTV-Berechnung",
    seoLinkIncome: "Hypothek und Einkommen",
    faqQ1: "Ist das eine verbindliche Bankzusage?",
    faqA1: "Nein. Es ist ein unverbindlicher Wahrscheinlichkeitswert und die nächste Empfehlung mit einem Makler.",
    faqQ2: "Speichern Sie Fragebogenantworten?",
    faqA2: "Nein. Antworten werden nur für die sofortige Ergebnisberechnung genutzt.",
  };
  const pl: HomeCopy = {
    heroHeadline: "W 2 minuty sprawdzisz, czy Twoja sprawa hipoteczna ma realną szansę na akceptację.",
    heroSub: "Bez biegania po bankach. Automatyczny scoring i broker do kolejnego kroku.",
    borrowCta: "Sprawdź, ile mogę pożyczyć",
    heroCta: "Uruchom 2-minutowy check hipoteczny",
    heroMicro: "Bez zobowiązań, wynik orientacyjny w około 2 minuty.",
    coverageTitle: "Zakres",
    coverageText: "Współpracujemy ze specjalistami hipotecznymi na rynku CZ/SK. Wybór banku zależy od Twojego profilu.",
    aiTitle: "Co robi dla Ciebie AI",
    aiBullet1: "Natychmiastowy wstępny scoring Twojej sprawy.",
    aiBullet2: "Porównanie dopasowania do profilu klienta.",
    aiBullet3: "Wykrycie słabszych punktów przed złożeniem wniosku.",
    brokerFlowTitle: "Jak wygląda współpraca z brokerem",
    brokerFlow1: "Po wyniku wysyłasz kontakt (opcjonalnie).",
    brokerFlow2: "Broker oddzwania i potwierdza wymagane dokumenty.",
    brokerFlow3: "Dostajesz realistyczną ścieżkę i kolejny krok.",
    compareTitle: "Porównanie ścieżki hipotecznej",
    compareColFactor: "Czynnik",
    compareColBank: "Oddział banku",
    compareColNoGuide: "Bez wsparcia",
    compareRow1a: "Szybkość orientacji",
    compareRow1b: "Weryfikacja w 2 min",
    compareRow1c: "Dłuższa konsultacja",
    compareRow1d: "Niejasna",
    compareRow2a: "Personalizacja",
    compareRow2b: "AI + broker",
    compareRow2c: "Perspektywa jednego banku",
    compareRow2d: "Mało kontekstu",
    compareRow3a: "Jasność kolejnego kroku",
    compareRow3b: "Jasna rekomendacja",
    compareRow3c: "Zależne od obłożenia",
    compareRow3d: "Wysoka niepewność",
    seoSectionTitle: "Wejścia SEO do szybszych decyzji",
    seoSectionText: "Praktyczne strony pod najczęstsze pytania o hipotekę. Każda prowadzi do szybkiej weryfikacji i kontaktu z brokerem.",
    seoLinkCalculator: "Kalkulator hipoteczny",
    seoLinkBorrow: "Ile mogę pożyczyć",
    seoLinkLtv: "Kalkulacja LTV",
    seoLinkIncome: "Hipoteka i dochód",
    faqQ1: "Czy to wiążąca decyzja banku?",
    faqA1: "Nie. To orientacyjny wynik prawdopodobieństwa i wskazanie kolejnego kroku z brokerem.",
    faqQ2: "Czy przechowujecie odpowiedzi z ankiety?",
    faqA2: "Nie. Odpowiedzi są używane tylko do natychmiastowego obliczenia wyniku.",
  };
  const sk: HomeCopy = {
    heroHeadline: "Za 2 minúty zistíte, či má váš hypotékový profil reálnu šancu.",
    heroSub: "Bez behania po bankách. Automatické skórovanie + maklér pre ďalší krok.",
    borrowCta: "Zistiť, koľko si môžem požičať",
    heroCta: "Spustiť 2-minútový hypotekárny check",
    heroMicro: "Bez záväzku, orientačne do 2 minút.",
    coverageTitle: "Pokrytie",
    coverageText: "Spolupracujeme s hypotekárnymi špecialistami na trhu CZ/SK. Výber banky závisí od vášho profilu.",
    aiTitle: "Čo za vás robí AI",
    aiBullet1: "Okamžitý predbežný scoring vášho prípadu.",
    aiBullet2: "Porovnanie vhodnosti podľa profilu.",
    aiBullet3: "Odhalenie slabých miest pred podaním.",
    brokerFlowTitle: "Ako prebieha spolupráca s maklérom",
    brokerFlow1: "Po výsledku odošlete kontakt (voliteľné).",
    brokerFlow2: "Maklér sa ozve a upresní dokumenty.",
    brokerFlow3: "Dostanete realistický postup a ďalší krok.",
    compareTitle: "Porovnanie cesty k hypotéke",
    compareColFactor: "Faktor",
    compareColBank: "Pobočka banky",
    compareColNoGuide: "Bez sprievodcu",
    compareRow1a: "Rýchlosť orientácie",
    compareRow1b: "Kontrola za 2 min",
    compareRow1c: "Dlhšia konzultácia",
    compareRow1d: "Nejasná",
    compareRow2a: "Personalizácia",
    compareRow2b: "AI + maklér",
    compareRow2c: "Perspektíva jednej banky",
    compareRow2d: "Málo kontextu",
    compareRow3a: "Jasnosť ďalšieho kroku",
    compareRow3b: "Jasné odporúčanie",
    compareRow3c: "Závislé od kapacity",
    compareRow3d: "Vysoká neistota",
    seoSectionTitle: "SEO vstupy pre rýchlejšie rozhodnutie",
    seoSectionText: "Praktické stránky k najčastejším otázkam o hypotéke. Každá vedie na rýchlu kontrolu a odovzdanie maklérovi.",
    seoLinkCalculator: "Hypotekárna kalkulačka",
    seoLinkBorrow: "Koľko si môžem požičať",
    seoLinkLtv: "LTV výpočet",
    seoLinkIncome: "Hypotéka a príjem",
    faqQ1: "Je výsledok záväzné schválenie bankou?",
    faqA1: "Nie. Ide o orientačný odhad pravdepodobnosti a ďalší krok s maklérom.",
    faqQ2: "Ukladáte odpovede z dotazníka?",
    faqA2: "Nie. Odpovede používame len na okamžitý výpočet výsledku.",
  };
  const uk: HomeCopy = {
    heroHeadline: "За 2 хвилини дізнайтесь, чи ваш іпотечний кейс реально може бути схвалений.",
    heroSub: "Без походів по банках. Автоскоринг + брокер для наступного кроку.",
    borrowCta: "Перевірити, скільки можу позичити",
    heroCta: "Запустити 2-хвилинну перевірку",
    heroMicro: "Без зобов’язань, орієнтовно за 2 хвилини.",
    coverageTitle: "Покриття",
    coverageText: "Ми працюємо з іпотечними спеціалістами на ринку CZ/SK. Вибір банку залежить від вашого профілю.",
    aiTitle: "Що AI робить для вас",
    aiBullet1: "Миттєвий попередній скоринг вашої справи.",
    aiBullet2: "Порівняння відповідності за профілем.",
    aiBullet3: "Виявлення слабких місць до подання заявки.",
    brokerFlowTitle: "Як проходить робота з брокером",
    brokerFlow1: "Після результату надішліть контакт (необов’язково).",
    brokerFlow2: "Брокер передзвонить і уточнить документи.",
    brokerFlow3: "Ви отримаєте реалістичний план і наступний крок.",
    compareTitle: "Порівняння шляху до іпотеки",
    compareColFactor: "Фактор",
    compareColBank: "Відділення банку",
    compareColNoGuide: "Без супроводу",
    compareRow1a: "Швидкість орієнтації",
    compareRow1b: "Перевірка за 2 хв",
    compareRow1c: "Довша консультація",
    compareRow1d: "Незрозуміло",
    compareRow2a: "Персоналізація",
    compareRow2b: "AI + брокер",
    compareRow2c: "Одна банківська оптика",
    compareRow2d: "Мало контексту",
    compareRow3a: "Зрозумілість наступного кроку",
    compareRow3b: "Чітка рекомендація",
    compareRow3c: "Залежить від завантаження",
    compareRow3d: "Висока невизначеність",
    seoSectionTitle: "SEO-сторінки для швидших рішень",
    seoSectionText: "Практичні сторінки з типовими питаннями про іпотеку. Кожна веде до швидкої перевірки та передачі брокеру.",
    seoLinkCalculator: "Іпотечний калькулятор",
    seoLinkBorrow: "Скільки можу позичити",
    seoLinkLtv: "Розрахунок LTV",
    seoLinkIncome: "Іпотека і дохід",
    faqQ1: "Чи це обов’язкове схвалення банку?",
    faqA1: "Ні. Це орієнтовна ймовірність і наступний крок з брокером.",
    faqQ2: "Чи зберігаєте відповіді анкети?",
    faqA2: "Ні. Відповіді використовуються лише для миттєвого розрахунку.",
  };
  const ru: HomeCopy = {
    heroHeadline: "За 2 минуты узнайте, насколько реалистично одобрение вашей ипотеки.",
    heroSub: "Без походов по банкам. Автоскоринг + брокер для следующего шага.",
    borrowCta: "Проверить, сколько могу получить",
    heroCta: "Запустить 2-минутную проверку",
    heroMicro: "Без обязательств, ориентировочно за 2 минуты.",
    coverageTitle: "Покрытие",
    coverageText: "Мы работаем с ипотечными специалистами на рынке CZ/SK. Выбор банка зависит от вашего профиля.",
    aiTitle: "Что AI делает для вас",
    aiBullet1: "Мгновенный предварительный скоринг вашей заявки.",
    aiBullet2: "Сравнение соответствия по профилю.",
    aiBullet3: "Выявление слабых мест до подачи.",
    brokerFlowTitle: "Как проходит работа с брокером",
    brokerFlow1: "После результата отправьте контакт (по желанию).",
    brokerFlow2: "Брокер перезвонит и уточнит документы.",
    brokerFlow3: "Вы получите реалистичный план и следующий шаг.",
    compareTitle: "Сравнение пути к ипотеке",
    compareColFactor: "Фактор",
    compareColBank: "Отделение банка",
    compareColNoGuide: "Без сопровождения",
    compareRow1a: "Скорость ориентации",
    compareRow1b: "Проверка за 2 мин.",
    compareRow1c: "Длинная консультация",
    compareRow1d: "Неясно",
    compareRow2a: "Персонализация",
    compareRow2b: "AI + брокер",
    compareRow2c: "Одна банковская оптика",
    compareRow2d: "Мало контекста",
    compareRow3a: "Понятность следующего шага",
    compareRow3b: "Чёткая рекомендация",
    compareRow3c: "Зависит от загрузки",
    compareRow3d: "Высокая неопределённость",
    seoSectionTitle: "SEO-страницы для более быстрого решения",
    seoSectionText: "Практичные страницы по типовым вопросам об ипотеке. Каждая ведёт к быстрой проверке и передаче брокеру.",
    seoLinkCalculator: "Ипотечный калькулятор",
    seoLinkBorrow: "Сколько могу получить",
    seoLinkLtv: "Расчёт LTV",
    seoLinkIncome: "Ипотека и доход",
    faqQ1: "Это обязательное одобрение банка?",
    faqA1: "Нет. Это ориентировочная вероятность и следующий шаг с брокером.",
    faqQ2: "Храните ли вы ответы анкеты?",
    faqA2: "Нет. Ответы используются только для мгновенного расчёта.",
  };
  const vi: HomeCopy = {
    heroHeadline: "Trong 2 phút, biết ngay hồ sơ vay thế chấp của bạn có khả năng được duyệt hay không.",
    heroSub: "Không cần chạy từng ngân hàng. Chấm điểm tự động + môi giới cho bước tiếp theo.",
    borrowCta: "Kiểm tra tôi có thể vay bao nhiêu",
    heroCta: "Chạy kiểm tra 2 phút",
    heroMicro: "Không ràng buộc, khoảng 2 phút là có kết quả tham khảo.",
    coverageTitle: "Phạm vi",
    coverageText: "Chúng tôi hợp tác với chuyên gia thế chấp trên thị trường CZ/SK. Ngân hàng phù hợp phụ thuộc hồ sơ của bạn.",
    aiTitle: "AI làm gì cho bạn",
    aiBullet1: "Sàng lọc sơ bộ tức thì cho hồ sơ của bạn.",
    aiBullet2: "So khớp mức phù hợp theo hồ sơ.",
    aiBullet3: "Chỉ ra điểm yếu trước khi nộp.",
    brokerFlowTitle: "Quy trình làm việc với môi giới",
    brokerFlow1: "Sau kết quả, gửi thông tin liên hệ (tùy chọn).",
    brokerFlow2: "Môi giới gọi lại và xác nhận giấy tờ cần có.",
    brokerFlow3: "Bạn nhận lộ trình thực tế và bước tiếp theo.",
    compareTitle: "So sánh hành trình vay thế chấp",
    compareColFactor: "Yếu tố",
    compareColBank: "Chi nhánh ngân hàng",
    compareColNoGuide: "Không có hướng dẫn",
    compareRow1a: "Tốc độ định hướng",
    compareRow1b: "Kiểm tra trong 2 phút",
    compareRow1c: "Tư vấn lâu hơn",
    compareRow1d: "Không rõ ràng",
    compareRow2a: "Cá nhân hóa",
    compareRow2b: "AI + môi giới",
    compareRow2c: "Góc nhìn một ngân hàng",
    compareRow2d: "Ít ngữ cảnh",
    compareRow3a: "Rõ ràng bước tiếp theo",
    compareRow3b: "Khuyến nghị rõ ràng",
    compareRow3c: "Phụ thuộc khả năng tiếp nhận",
    compareRow3d: "Bất định cao",
    seoSectionTitle: "Điểm vào SEO để quyết định nhanh hơn",
    seoSectionText: "Các trang thực tế cho câu hỏi thế chấp phổ biến. Mỗi trang dẫn tới kiểm tra nhanh và bàn giao môi giới.",
    seoLinkCalculator: "Máy tính thế chấp",
    seoLinkBorrow: "Tôi vay được bao nhiêu",
    seoLinkLtv: "Tính LTV",
    seoLinkIncome: "Thế chấp và thu nhập",
    faqQ1: "Đây có phải phê duyệt ràng buộc của ngân hàng?",
    faqA1: "Không. Đây là xác suất tham khảo và bước tiếp theo với môi giới.",
    faqQ2: "Bạn có lưu câu trả lời khảo sát không?",
    faqA2: "Không. Câu trả lời chỉ dùng để tính kết quả ngay lập tức.",
  };
  const ro: HomeCopy = {
    heroHeadline: "Află în 2 minute dacă profilul tău ipotecar are șanse reale de aprobare.",
    heroSub: "Fără drumuri între bănci. Scor automat + broker pentru pasul următor.",
    borrowCta: "Verifică suma pe care o pot împrumuta",
    heroCta: "Pornește verificarea de 2 minute",
    heroMicro: "Fără angajament, orientativ în circa 2 minute.",
    coverageTitle: "Acoperire",
    coverageText: "Colaborăm cu specialiști ipotecari pe piața CZ/SK. Alegerea băncii depinde de profilul tău.",
    aiTitle: "Ce face AI pentru tine",
    aiBullet1: "Pre-screening instant pentru cazul tău.",
    aiBullet2: "Compararea potrivirii în funcție de profil.",
    aiBullet3: "Evidențierea punctelor slabe înainte de depunere.",
    brokerFlowTitle: "Cum funcționează colaborarea cu brokerul",
    brokerFlow1: "După rezultat, trimiți datele de contact (opțional).",
    brokerFlow2: "Brokerul sună și confirmă documentele necesare.",
    brokerFlow3: "Primești un parcurs realist și următorul pas.",
    compareTitle: "Comparație parcurs ipotecar",
    compareColFactor: "Factor",
    compareColBank: "Sucursală bancară",
    compareColNoGuide: "Fără ghidare",
    compareRow1a: "Viteză de orientare",
    compareRow1b: "Verificare în 2 min",
    compareRow1c: "Consultanță mai lungă",
    compareRow1d: "Neclar",
    compareRow2a: "Personalizare",
    compareRow2b: "AI + broker",
    compareRow2c: "Perspectiva unei singure bănci",
    compareRow2d: "Puțin context",
    compareRow3a: "Claritate următor pas",
    compareRow3b: "Recomandare clară",
    compareRow3c: "Depinde de capacitate",
    compareRow3d: "Incertitudine mare",
    seoSectionTitle: "Pagini SEO pentru decizii mai rapide",
    seoSectionText: "Pagini practice pentru întrebări frecvente despre ipotecă. Fiecare duce la verificare rapidă și predare către broker.",
    seoLinkCalculator: "Calculator ipotecar",
    seoLinkBorrow: "Cât pot împrumuta",
    seoLinkLtv: "Calcul LTV",
    seoLinkIncome: "Ipotecă și venit",
    faqQ1: "Este o aprobare bancară obligatorie?",
    faqA1: "Nu. Este o probabilitate orientativă și următorul pas cu un broker.",
    faqQ2: "Stocați răspunsurile din chestionar?",
    faqA2: "Nu. Răspunsurile sunt folosite doar pentru calculul imediat al rezultatului.",
  };
  const es: HomeCopy = {
    heroHeadline: "En 2 minutos, comprueba si tu caso hipotecario tiene opciones reales de aprobación.",
    heroSub: "Sin ir de banco en banco. Scoring automático + broker para el siguiente paso.",
    borrowCta: "Comprobar cuánto puedo pedir",
    heroCta: "Iniciar la comprobación de 2 minutos",
    heroMicro: "Sin compromiso, orientativo en unos 2 minutos.",
    coverageTitle: "Cobertura",
    coverageText: "Trabajamos con especialistas hipotecarios del mercado CZ/SK. El banco adecuado depende de tu perfil.",
    aiTitle: "Qué hace la IA por ti",
    aiBullet1: "Pre-evaluación instantánea de tu caso.",
    aiBullet2: "Comparación de idoneidad según perfil.",
    aiBullet3: "Detectar puntos débiles antes de presentar.",
    brokerFlowTitle: "Cómo funciona la colaboración con el broker",
    brokerFlow1: "Tras el resultado, envías el contacto (opcional).",
    brokerFlow2: "El broker llama y confirma la documentación.",
    brokerFlow3: "Recibes un camino realista y el siguiente paso.",
    compareTitle: "Comparativa del camino hipotecario",
    compareColFactor: "Factor",
    compareColBank: "Sucursal bancaria",
    compareColNoGuide: "Sin guía",
    compareRow1a: "Velocidad de orientación",
    compareRow1b: "Verificación en 2 min",
    compareRow1c: "Consulta más larga",
    compareRow1d: "Poco clara",
    compareRow2a: "Personalización",
    compareRow2b: "IA + broker",
    compareRow2c: "Óptica de un solo banco",
    compareRow2d: "Poco contexto",
    compareRow3a: "Claridad del siguiente paso",
    compareRow3b: "Recomendación clara",
    compareRow3c: "Depende de capacidad",
    compareRow3d: "Alta incertidumbre",
    seoSectionTitle: "Entradas SEO para decidir más rápido",
    seoSectionText: "Páginas prácticas para las dudas hipotecarias más frecuentes. Cada una lleva al chequeo rápido y al broker.",
    seoLinkCalculator: "Calculadora hipotecaria",
    seoLinkBorrow: "Cuánto puedo pedir",
    seoLinkLtv: "Cálculo LTV",
    seoLinkIncome: "Hipoteca e ingresos",
    faqQ1: "¿Es una aprobación bancaria vinculante?",
    faqA1: "No. Es una probabilidad orientativa y el siguiente paso con un broker.",
    faqQ2: "¿Guardáis las respuestas del cuestionario?",
    faqA2: "No. Solo se usan para calcular el resultado al instante.",
  };
  const fr: HomeCopy = {
    heroHeadline: "En 2 minutes, voyez si votre dossier hypothécaire a une chance réelle d'être accepté.",
    heroSub: "Sans courir entre les banques. Scoring auto + courtier pour l'étape suivante.",
    borrowCta: "Vérifier combien je peux emprunter",
    heroCta: "Lancer le contrôle de 2 minutes",
    heroMicro: "Sans engagement, indicatif en environ 2 minutes.",
    coverageTitle: "Couverture",
    coverageText: "Nous travaillons avec des spécialistes hypothécaires sur le marché CZ/SK. Le choix de la banque dépend de votre profil.",
    aiTitle: "Ce que l'IA fait pour vous",
    aiBullet1: "Pré-évaluation instantanée de votre dossier.",
    aiBullet2: "Comparaison d'adéquation selon le profil.",
    aiBullet3: "Mise en évidence des points faibles avant dépôt.",
    brokerFlowTitle: "Comment se déroule la collaboration avec le courtier",
    brokerFlow1: "Après le résultat, vous envoyez vos coordonnées (facultatif).",
    brokerFlow2: "Le courtier rappelle et précise les documents.",
    brokerFlow3: "Vous obtenez un parcours réaliste et la prochaine action.",
    compareTitle: "Comparatif du parcours hypothécaire",
    compareColFactor: "Facteur",
    compareColBank: "Agence bancaire",
    compareColNoGuide: "Sans accompagnement",
    compareRow1a: "Rapidité d'orientation",
    compareRow1b: "Vérification en 2 min",
    compareRow1c: "Consultation plus longue",
    compareRow1d: "Peu claire",
    compareRow2a: "Personnalisation",
    compareRow2b: "IA + courtier",
    compareRow2c: "Vision d'une seule banque",
    compareRow2d: "Peu de contexte",
    compareRow3a: "Clarté de l'étape suivante",
    compareRow3b: "Recommandation claire",
    compareRow3c: "Dépend de la capacité",
    compareRow3d: "Forte incertitude",
    seoSectionTitle: "Points d'entrée SEO pour décider plus vite",
    seoSectionText: "Pages pratiques pour les questions hypothécaires fréquentes. Chacune mène au contrôle rapide et au courtier.",
    seoLinkCalculator: "Calculateur hypothécaire",
    seoLinkBorrow: "Combien puis-je emprunter",
    seoLinkLtv: "Calcul LTV",
    seoLinkIncome: "Hypothèque et revenu",
    faqQ1: "S'agit-il d'une approbation bancaire contraignante ?",
    faqA1: "Non. C'est une probabilité indicative et la prochaine étape avec un courtier.",
    faqQ2: "Conservez-vous les réponses au questionnaire ?",
    faqA2: "Non. Elles servent uniquement au calcul immédiat du résultat.",
  };
  const it: HomeCopy = {
    heroHeadline: "In 2 minuti capisci se il tuo profilo mutuo ha una reale possibilità di approvazione.",
    heroSub: "Senza girare tra banche. Scoring automatico e broker per il passo successivo.",
    borrowCta: "Verifica quanto posso ottenere",
    heroCta: "Avvia il check di 2 minuti",
    heroMicro: "Nessun impegno, risultato indicativo in circa 2 minuti.",
    coverageTitle: "Copertura",
    coverageText: "Collaboriamo con specialisti mutui sul mercato CZ/SK. La scelta della banca dipende dal tuo profilo.",
    aiTitle: "Cosa fa l'IA per te",
    aiBullet1: "Pre-screening immediato del tuo caso.",
    aiBullet2: "Confronto di idoneità in base al profilo.",
    aiBullet3: "Individuazione dei punti deboli prima dell'invio.",
    brokerFlowTitle: "Come funziona la collaborazione con il broker",
    brokerFlow1: "Dopo il risultato, invii i contatti (facoltativo).",
    brokerFlow2: "Il broker ti richiama e conferma i documenti necessari.",
    brokerFlow3: "Ricevi un percorso realistico e il prossimo passo.",
    compareTitle: "Confronto sul percorso mutuo",
    compareColFactor: "Fattore",
    compareColBank: "Filiale bancaria",
    compareColNoGuide: "Senza guida",
    compareRow1a: "Velocità di orientamento",
    compareRow1b: "Verifica in 2 min",
    compareRow1c: "Consulenza più lunga",
    compareRow1d: "Poco chiara",
    compareRow2a: "Personalizzazione",
    compareRow2b: "IA + broker",
    compareRow2c: "Prospettiva di una sola banca",
    compareRow2d: "Poco contesto",
    compareRow3a: "Chiarezza del passo successivo",
    compareRow3b: "Raccomandazione chiara",
    compareRow3c: "Dipende dai tempi di lavorazione",
    compareRow3d: "Alta incertezza",
    seoSectionTitle: "Pagine SEO per decidere più in fretta",
    seoSectionText: "Pagine pratiche sulle domande mutuo più frequenti. Ognuna porta alla verifica rapida e al passaggio al broker.",
    seoLinkCalculator: "Calcolatore mutuo",
    seoLinkBorrow: "Quanto posso ottenere",
    seoLinkLtv: "Calcolo LTV",
    seoLinkIncome: "Mutuo e reddito",
    faqQ1: "È un'approvazione bancaria vincolante?",
    faqA1: "No. È una stima indicativa della probabilità e il passo successivo consigliato con il broker.",
    faqQ2: "Conservate le risposte del questionario?",
    faqA2: "No. Le risposte servono solo al calcolo immediato del risultato.",
  };
  const tr: HomeCopy = {
    heroHeadline: "2 dakikada ipoteğinizin gerçekten onaylanma ihtimalini görün.",
    heroSub: "Bankadan bankaya koşmadan. Otomatik skor + sonraki adım için broker.",
    borrowCta: "Ne kadar kredi alabileceğimi kontrol et",
    heroCta: "2 dakikalık kontrolü başlat",
    heroMicro: "Taahhüt yok, yaklaşık 2 dakikada gösterge sonuç.",
    coverageTitle: "Kapsam",
    coverageText: "CZ/SK pazarında ipotek uzmanlarıyla çalışıyoruz. Banka seçimi profilinize bağlıdır.",
    aiTitle: "AI sizin için ne yapar",
    aiBullet1: "Başvurunuz için anında ön skorlama.",
    aiBullet2: "Profile göre uygunluk karşılaştırması.",
    aiBullet3: "Başvurudan önce zayıf noktaları gösterme.",
    brokerFlowTitle: "Broker iş birliği nasıl işler",
    brokerFlow1: "Sonuçtan sonra iletişim bilgisi gönderirsiniz (isteğe bağlı).",
    brokerFlow2: "Broker arar ve belge ihtiyacını netleştirir.",
    brokerFlow3: "Gerçekçi bir yol ve sonraki adımı alırsınız.",
    compareTitle: "İpotek yolunun karşılaştırması",
    compareColFactor: "Faktör",
    compareColBank: "Banka şubesi",
    compareColNoGuide: "Rehbersiz",
    compareRow1a: "Yönlendirme hızı",
    compareRow1b: "2 dakikada kontrol",
    compareRow1c: "Daha uzun danışmanlık",
    compareRow1d: "Belirsiz",
    compareRow2a: "Kişiselleştirme",
    compareRow2b: "AI + broker",
    compareRow2c: "Tek banka perspektifi",
    compareRow2d: "Az bağlam",
    compareRow3a: "Sonraki adım netliği",
    compareRow3b: "Net öneri",
    compareRow3c: "Kapasiteye bağlı",
    compareRow3d: "Yüksek belirsizlik",
    seoSectionTitle: "Daha hızlı karar için SEO girişleri",
    seoSectionText: "Sık ipotek soruları için pratik sayfalar. Her biri hızlı kontrole ve brokere aktarıma gider.",
    seoLinkCalculator: "İpotek hesaplayıcı",
    seoLinkBorrow: "Ne kadar borç alabilirim",
    seoLinkLtv: "LTV hesaplama",
    seoLinkIncome: "İpotek ve gelir",
    faqQ1: "Bu bağlayıcı banka onayı mı?",
    faqA1: "Hayır. Gösterge olasılık tahmini ve broker ile sonraki adımdır.",
    faqQ2: "Anket yanıtlarını saklıyor musunuz?",
    faqA2: "Hayır. Yanıtlar yalnızca anında sonuç hesaplaması için kullanılır.",
  };
  const zh: HomeCopy = {
    heroHeadline: "2分钟内判断你的按揭申请是否有现实获批机会。",
    heroSub: "无需跑多家银行。自动评分 + 经纪人协助下一步。",
    borrowCta: "查看我大概能贷多少",
    heroCta: "开始2分钟快速评估",
    heroMicro: "无承诺，约2分钟给出参考结果。",
    coverageTitle: "覆盖范围",
    coverageText: "我们与CZ/SK市场的按揭顾问合作，具体银行取决于你的资料。",
    aiTitle: "AI能为你做什么",
    aiBullet1: "即时预评估你的案例。",
    aiBullet2: "按资料匹配度比较。",
    aiBullet3: "在提交前提示薄弱环节。",
    brokerFlowTitle: "与经纪人协作流程",
    brokerFlow1: "查看结果后可提交联系方式（可选）。",
    brokerFlow2: "经纪人回电并确认所需材料。",
    brokerFlow3: "获得可行路径与下一步行动。",
    compareTitle: "按揭路径对比",
    compareColFactor: "因素",
    compareColBank: "银行网点",
    compareColNoGuide: "无人指导",
    compareRow1a: "获得方向的速度",
    compareRow1b: "2分钟快速评估",
    compareRow1c: "更长咨询",
    compareRow1d: "不清晰",
    compareRow2a: "个性化",
    compareRow2b: "AI + 经纪人",
    compareRow2c: "单一银行视角",
    compareRow2d: "缺少背景",
    compareRow3a: "下一步是否清楚",
    compareRow3b: "明确建议",
    compareRow3c: "取决于受理能力",
    compareRow3d: "不确定性高",
    seoSectionTitle: "更快决策的SEO入口页",
    seoSectionText: "针对常见按揭问题的实用页面，均可进入快速评估并转交经纪人。",
    seoLinkCalculator: "按揭计算器",
    seoLinkBorrow: "我能贷多少",
    seoLinkLtv: "LTV计算",
    seoLinkIncome: "按揭与收入",
    faqQ1: "这是银行的正式批复吗？",
    faqA1: "不是。这是概率参考与经纪人协助的下一步指引。",
    faqQ2: "会保存问卷答案吗？",
    faqA2: "不会。答案仅用于即时计算结果。",
  };
  if (locale === "cs") return cs;
  if (locale === "de") return de;
  if (locale === "pl") return pl;
  if (locale === "sk") return sk;
  if (locale === "uk") return uk;
  if (locale === "ru") return ru;
  if (locale === "vi") return vi;
  if (locale === "ro") return ro;
  if (locale === "es") return es;
  if (locale === "fr") return fr;
  if (locale === "it") return it;
  if (locale === "tr") return tr;
  if (locale === "zh") return zh;
  return en;
}
