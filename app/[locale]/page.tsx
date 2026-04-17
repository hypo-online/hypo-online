import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { HeroGraphic } from "@/components/hero-graphic";
import { AiFlowGraphic } from "@/components/ai-flow-graphic";

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
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 pb-16 pt-10 sm:max-w-2xl sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="mb-10 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold tracking-tight text-[var(--color-brand-800)]">
          {t("brand")}
        </span>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
          <LocaleSwitcher />
          <Link
            href="/privacy"
            className="shrink-0 text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
          >
            {t("nav.privacy")}
          </Link>
        </div>
      </header>

      <p className="mb-3 inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--color-brand-800)] shadow-sm ring-1 ring-black/5">
        {t("home.badge")}
      </p>
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-brand-950)] sm:text-4xl">
        {copy.heroHeadline}
      </h1>
      <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
        {copy.heroSub}
      </p>
      <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <strong>{copy.todayLabel}</strong> {copy.todayText}
      </div>

      <div className="mt-6">
        <HeroGraphic />
      </div>

      <ul className="mt-8 space-y-3 text-sm leading-relaxed text-zinc-700">
        <li className="flex gap-2">
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-500)]" />
          {t("home.trust1")}
        </li>
        <li className="flex gap-2">
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-500)]" />
          {t("home.trust2")}
        </li>
        <li className="flex gap-2">
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-500)]" />
          {t("home.trust3")}
        </li>
      </ul>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/quiz"
          className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--color-brand-600)] px-6 text-base font-semibold text-white shadow-sm transition hover:bg-[var(--color-brand-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-600)]"
        >
          {copy.heroCta}
        </Link>
        <a
          href="#how"
          className="inline-flex h-12 items-center justify-center rounded-xl px-4 text-base font-semibold text-zinc-800 underline-offset-4 hover:underline"
        >
          {t("home.secondary")}
        </a>
      </div>
      <p className="mt-3 text-xs text-zinc-500">
        {copy.heroMicro}
      </p>

      <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          {copy.coverageTitle}
        </p>
        <p className="mt-2 text-sm text-zinc-700">
          {copy.coverageText}
        </p>
      </section>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {copy.aiTitle}
        </h2>
        <div className="mt-3 space-y-2 text-sm text-zinc-700">
          <p>• {copy.aiBullet1}</p>
          <p>• {copy.aiBullet2}</p>
          <p>• {copy.aiBullet3}</p>
        </div>
        <div className="mt-4">
          <AiFlowGraphic locale={locale} />
        </div>
      </section>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {copy.brokerFlowTitle}
        </h2>
        <ol className="mt-3 space-y-2 text-sm text-zinc-700">
          <li>1. {copy.brokerFlow1}</li>
          <li>2. {copy.brokerFlow2}</li>
          <li>3. {copy.brokerFlow3}</li>
        </ol>
      </section>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {copy.compareTitle}
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-500">
                <th className="py-2 pr-3">{copy.compareColFactor}</th>
                <th className="py-2 pr-3">hypo.online</th>
                <th className="py-2 pr-3">{copy.compareColBank}</th>
                <th className="py-2">{copy.compareColNoGuide}</th>
              </tr>
            </thead>
            <tbody className="text-zinc-700">
              <tr className="border-b border-zinc-100">
                <td className="py-2 pr-3">{copy.compareRow1a}</td>
                <td className="py-2 pr-3">{copy.compareRow1b}</td>
                <td className="py-2 pr-3">{copy.compareRow1c}</td>
                <td className="py-2">{copy.compareRow1d}</td>
              </tr>
              <tr className="border-b border-zinc-100">
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

      <section id="how" className="mt-16 space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
        <div>
          <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
            {t("home.howTitle")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700">
            {t("home.howIntro")}
          </p>
        </div>
        <ol className="space-y-5">
          {steps.map((s, i) => (
            <li key={i} className="text-sm leading-relaxed text-zinc-700">
              <p className="font-semibold text-[var(--color-brand-950)]">{s.title}</p>
              <p className="mt-1 text-zinc-700">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="text-xs leading-relaxed text-zinc-500">{t("home.how_lead_note")}</p>
      </section>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {copy.seoSectionTitle}
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          {copy.seoSectionText}
        </p>
        <div className="mt-4 grid gap-2">
          {seoLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium text-[var(--color-brand-700)] hover:bg-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

type HomeCopy = {
  heroHeadline: string; heroSub: string; todayLabel: string; todayText: string; heroCta: string; heroMicro: string;
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
    heroSub: "No running between banks. Automated scoring plus a human broker for the next step.",
    todayLabel: "Today:", todayText: "bank rules and rates move often. Treat the result as rapid orientation.",
    heroCta: "Check how much I can borrow", heroMicro: "No commitment, indicative in about 2 minutes.",
    coverageTitle: "Coverage", coverageText: "We work with mortgage specialists across CZ/SK market coverage. Bank choice depends on your profile.",
    aiTitle: "What AI does for you", aiBullet1: "Instant pre-scoring of your case.", aiBullet2: "Profile-based suitability comparison.", aiBullet3: "Surfacing weak points before submission.",
    brokerFlowTitle: "How broker collaboration works", brokerFlow1: "After result, send contact (optional).", brokerFlow2: "Broker calls and confirms document needs.", brokerFlow3: "You get a realistic path and next action.",
    compareTitle: "Mortgage path comparison", compareColFactor: "Factor", compareColBank: "Bank branch", compareColNoGuide: "No guidance",
    compareRow1a: "Speed to orientation", compareRow1b: "2-min check", compareRow1c: "Longer consultation", compareRow1d: "Unclear",
    compareRow2a: "Personalization", compareRow2b: "AI + broker", compareRow2c: "Single-bank lens", compareRow2d: "Low context",
    compareRow3a: "Next step clarity", compareRow3b: "Clear recommendation", compareRow3c: "Capacity-dependent", compareRow3d: "High uncertainty",
    seoSectionTitle: "SEO entry points for faster decisions", seoSectionText: "Practical pages for top mortgage questions. Each page leads into the quick check and broker handoff.",
    seoLinkCalculator: "Mortgage calculator", seoLinkBorrow: "How much can I borrow", seoLinkLtv: "LTV calculation", seoLinkIncome: "Mortgage and income",
    faqQ1: "Is this a binding bank approval?", faqA1: "No. It is an indicative probability estimate and next-step guidance with a broker.",
    faqQ2: "Do you store questionnaire answers?", faqA2: "No. Answers are used only for immediate result computation.",
  };
  const cs: HomeCopy = {
    heroHeadline: "Zjistěte během 2 minut, jestli má hypotéka reálnou šanci.",
    heroSub: "Bez běhání po bankách. Automatický scoring + lidský makléř pro další krok.",
    todayLabel: "Dnes:", todayText: "bankovní pravidla i sazby se mění. Výsledek berte jako rychlou orientaci.",
    heroCta: "Zjistit, kolik si mohu půjčit", heroMicro: "Bez závazku, orientačně do 2 minut.",
    coverageTitle: "Spolupráce", coverageText: "Spolupracujeme s hypotečními specialisty napříč CZ/SK trhem. Konkrétní banka záleží na vašem profilu.",
    aiTitle: "Co dělá AI za vás", aiBullet1: "Okamžitý předběžný scoring případu.", aiBullet2: "Porovnání vhodnosti podle profilu.", aiBullet3: "Odhalení slabých míst před podáním.",
    brokerFlowTitle: "Jak probíhá spolupráce s makléřem", brokerFlow1: "Po výsledku odešlete kontakt (volitelné).", brokerFlow2: "Makléř se ozve a upřesní dokumenty.", brokerFlow3: "Dostanete realistický postup a další krok.",
    compareTitle: "Srovnání cesty k hypotéce", compareColFactor: "Faktor", compareColBank: "Banka (pobočka)", compareColNoGuide: "Bez vedení",
    compareRow1a: "Rychlost orientace", compareRow1b: "2 min check", compareRow1c: "Delší konzultace", compareRow1d: "Nejasná",
    compareRow2a: "Personalizace", compareRow2b: "AI + makléř", compareRow2c: "Podle jedné banky", compareRow2d: "Bez kontextu",
    compareRow3a: "Další krok", compareRow3b: "Jasné doporučení", compareRow3c: "Závislé na kapacitě", compareRow3d: "Vysoká nejistota",
    seoSectionTitle: "SEO vstupy pro rychlé rozhodnutí", seoSectionText: "Praktické stránky pro nejčastější dotazy. Každá navazuje na rychlý check a předání na makléře.",
    seoLinkCalculator: "Hypotéka kalkulačka", seoLinkBorrow: "Kolik dostanu hypotéku", seoLinkLtv: "LTV výpočet", seoLinkIncome: "Hypotéka a příjem",
    faqQ1: "Je výsledek závazné schválení bankou?", faqA1: "Ne. Jde o orientační odhad pravděpodobnosti a další krok s makléřem.",
    faqQ2: "Ukládáte odpovědi z dotazníku?", faqA2: "Ne. Odpovědi používáme jen pro okamžitý výpočet výsledku.",
  };
  const de: HomeCopy = { ...en,
    heroHeadline: "In 2 Minuten sehen, ob Ihr Hypothekenfall realistisch genehmigungsfähig ist.",
    heroSub: "Ohne Filial-Marathon. Automatisches Scoring plus Makler für den nächsten Schritt.",
    todayLabel: "Heute:",
    coverageText: "Wir arbeiten mit Hypothekenspezialisten im CZ/SK-Markt. Die Bankauswahl hängt von Ihrem Profil ab.",
    heroCta: "Prüfen, wie viel ich aufnehmen kann", coverageTitle: "Abdeckung",
    aiTitle: "Was KI für Sie übernimmt", brokerFlowTitle: "So läuft die Zusammenarbeit mit dem Makler",
    compareTitle: "Vergleich des Hypothekenwegs", seoSectionTitle: "SEO-Einstiege für schnellere Entscheidungen",
    seoLinkCalculator: "Hypothekenrechner", seoLinkBorrow: "Wie viel kann ich leihen", seoLinkLtv: "LTV-Berechnung", seoLinkIncome: "Hypothek und Einkommen",
  };
  const pl: HomeCopy = { ...en,
    heroHeadline: "W 2 minuty sprawdź, czy Twój profil ma realną szansę na hipotekę.",
    heroSub: "Bez biegania po bankach. Automatyczny scoring i doradca do kolejnego kroku.",
    todayLabel: "Dzisiaj:",
    coverageText: "Wspolpracujemy ze specjalistami hipotecznymi na rynku CZ/SK. Wybor banku zalezy od Twojego profilu.",
    heroCta: "Sprawdź, ile mogę pożyczyć", coverageTitle: "Zakres",
    aiTitle: "Co AI robi za Ciebie", brokerFlowTitle: "Jak wygląda współpraca z doradcą",
    compareTitle: "Porównanie ścieżki hipotecznej", seoSectionTitle: "Wejścia SEO do szybszych decyzji",
    seoLinkCalculator: "Kalkulator hipoteczny", seoLinkBorrow: "Ile mogę dostać", seoLinkLtv: "Kalkulacja LTV", seoLinkIncome: "Hipoteka i dochód",
  };
  const sk: HomeCopy = { ...en,
    heroHeadline: "Za 2 minúty zistíte, či má váš hypotékový profil reálnu šancu.",
    heroSub: "Bez behania po bankách. Automatické skórovanie + maklér pre ďalší krok.",
    todayLabel: "Dnes:",
    coverageText: "Spolupracujeme s hypotekarnymi specialistami napriec trhom CZ/SK. Vyber banky zavisi od vasho profilu.",
    heroCta: "Zistiť, koľko si môžem požičať", coverageTitle: "Pokrytie",
    aiTitle: "Čo za vás robí AI", brokerFlowTitle: "Ako prebieha spolupráca s maklérom",
    compareTitle: "Porovnanie cesty k hypotéke", seoSectionTitle: "SEO vstupy pre rýchlejšie rozhodnutie",
    seoLinkCalculator: "Hypotekárna kalkulačka", seoLinkBorrow: "Koľko si môžem požičať", seoLinkLtv: "LTV výpočet", seoLinkIncome: "Hypotéka a príjem",
  };
  const uk: HomeCopy = { ...en,
    heroHeadline: "За 2 хвилини дізнайтесь, чи ваш іпотечний кейс реально може бути схвалений.",
    heroSub: "Без походів по банках. Автоскоринг + брокер для наступного кроку.",
    todayLabel: "Сьогодні:",
    coverageText: "Ми працюємо з іпотечними спеціалістами по ринку CZ/SK. Вибір банку залежить від вашого профілю.",
    heroCta: "Перевірити, скільки можу позичити",
    coverageTitle: "Покриття",
    aiTitle: "Що AI робить для вас",
    brokerFlowTitle: "Як проходить робота з брокером",
    compareTitle: "Порівняння шляху до іпотеки",
    seoSectionTitle: "SEO-сторінки для швидших рішень",
    seoLinkCalculator: "Іпотечний калькулятор", seoLinkBorrow: "Скільки можу позичити", seoLinkLtv: "Розрахунок LTV", seoLinkIncome: "Іпотека і дохід",
  };
  const ru: HomeCopy = { ...en,
    heroHeadline: "За 2 минуты узнайте, насколько реалистично одобрение вашей ипотеки.",
    heroSub: "Без походов по банкам. Автоскоринг + брокер для следующего шага.",
    todayLabel: "Сегодня:",
    coverageText: "Мы работаем с ипотечными специалистами по рынку CZ/SK. Выбор банка зависит от вашего профиля.",
    heroCta: "Проверить, сколько могу получить",
    coverageTitle: "Покрытие",
    aiTitle: "Что AI делает для вас",
    brokerFlowTitle: "Как проходит работа с брокером",
    compareTitle: "Сравнение пути к ипотеке",
    seoSectionTitle: "SEO-страницы для более быстрого решения",
    seoLinkCalculator: "Ипотечный калькулятор", seoLinkBorrow: "Сколько могу получить", seoLinkLtv: "Расчет LTV", seoLinkIncome: "Ипотека и доход",
  };
  const vi: HomeCopy = { ...en,
    heroHeadline: "Trong 2 phut, biet ngay ho so vay the chap cua ban co kha nang duoc duyet khong.",
    heroSub: "Khong can di tung ngan hang. Cham diem tu dong + moi gioi cho buoc tiep theo.",
    todayLabel: "Hom nay:",
    coverageText: "Chung toi hop tac voi chuyen gia the chap tren thi truong CZ/SK. Lua chon ngan hang phu thuoc vao ho so cua ban.",
    heroCta: "Kiem tra toi co the vay bao nhieu",
    coverageTitle: "Pham vi",
    aiTitle: "AI lam gi cho ban",
    brokerFlowTitle: "Quy trinh lam viec voi moi gioi",
    compareTitle: "So sanh con duong vay the chap",
    seoSectionTitle: "Diem vao SEO de quyet dinh nhanh hon",
    seoLinkCalculator: "May tinh the chap", seoLinkBorrow: "Toi vay duoc bao nhieu", seoLinkLtv: "Tinh LTV", seoLinkIncome: "The chap va thu nhap",
  };
  const ro: HomeCopy = { ...en,
    heroHeadline: "Afla in 2 minute daca profilul tau ipotecar are sanse reale de aprobare.",
    heroSub: "Fara drumuri intre banci. Scoring automat + broker pentru pasul urmator.",
    todayLabel: "Astazi:",
    coverageText: "Colaboram cu specialisti ipotecari pe piata CZ/SK. Alegerea bancii depinde de profilul tau.",
    heroCta: "Verifica suma pe care o pot imprumuta",
    coverageTitle: "Acoperire",
    aiTitle: "Ce face AI pentru tine",
    brokerFlowTitle: "Cum functioneaza colaborarea cu brokerul",
    compareTitle: "Comparatie drum ipotecar",
    seoSectionTitle: "Pagini SEO pentru decizii mai rapide",
    seoLinkCalculator: "Calculator ipotecar", seoLinkBorrow: "Cat pot imprumuta", seoLinkLtv: "Calcul LTV", seoLinkIncome: "Ipoteca si venit",
  };
  const es: HomeCopy = { ...en,
    heroHeadline: "En 2 minutos, comprueba si tu caso hipotecario tiene opciones reales de aprobacion.",
    heroSub: "Sin ir de banco en banco. Scoring automatico + broker para el siguiente paso.",
    todayLabel: "Hoy:",
    coverageText: "Trabajamos con especialistas hipotecarios del mercado CZ/SK. El banco adecuado depende de tu perfil.",
    heroCta: "Comprobar cuanto puedo pedir",
    coverageTitle: "Cobertura",
    aiTitle: "Que hace la IA por ti",
    brokerFlowTitle: "Como funciona la colaboracion con broker",
    compareTitle: "Comparativa de camino hipotecario",
    seoSectionTitle: "Entradas SEO para decidir mas rapido",
    seoLinkCalculator: "Calculadora hipotecaria", seoLinkBorrow: "Cuanto puedo pedir", seoLinkLtv: "Calculo LTV", seoLinkIncome: "Hipoteca e ingresos",
  };
  const fr: HomeCopy = { ...en,
    heroHeadline: "En 2 minutes, voyez si votre dossier hypothecaire a une chance reelle d'etre accepte.",
    heroSub: "Sans courir entre les banques. Scoring auto + courtier pour l'etape suivante.",
    todayLabel: "Aujourd'hui :",
    coverageText: "Nous travaillons avec des specialistes hypothecaires sur le marche CZ/SK. Le choix de la banque depend de votre profil.",
    heroCta: "Verifier combien je peux emprunter",
    coverageTitle: "Couverture",
    aiTitle: "Ce que l'IA fait pour vous",
    brokerFlowTitle: "Comment se deroule la collaboration avec le courtier",
    compareTitle: "Comparatif du parcours hypothecaire",
    seoSectionTitle: "Points d'entree SEO pour decider plus vite",
    seoLinkCalculator: "Calculateur hypothecaire", seoLinkBorrow: "Combien puis-je emprunter", seoLinkLtv: "Calcul LTV", seoLinkIncome: "Hypotheque et revenu",
  };
  const it: HomeCopy = { ...en,
    heroHeadline: "In 2 minuti scopri se il tuo profilo mutuo ha reali possibilita di approvazione.",
    heroSub: "Senza girare tra banche. Scoring automatico + broker per il passo successivo.",
    todayLabel: "Oggi:",
    coverageText: "Collaboriamo con specialisti mutuo sul mercato CZ/SK. La banca dipende dal tuo profilo.",
    heroCta: "Verifica quanto posso ottenere",
    coverageTitle: "Copertura",
    aiTitle: "Cosa fa l'AI per te",
    brokerFlowTitle: "Come funziona la collaborazione con il broker",
    compareTitle: "Confronto percorso mutuo",
    seoSectionTitle: "Ingressi SEO per decidere piu velocemente",
    seoLinkCalculator: "Calcolatore mutuo", seoLinkBorrow: "Quanto posso ottenere", seoLinkLtv: "Calcolo LTV", seoLinkIncome: "Mutuo e reddito",
  };
  const tr: HomeCopy = { ...en,
    heroHeadline: "2 dakikada ipotek basvurunuzun gercek onay sansini gorun.",
    heroSub: "Banka banka gezmeden. Otomatik skor + sonraki adim icin broker.",
    todayLabel: "Bugun:",
    coverageText: "CZ/SK pazarinda ipotek uzmanlariyla calisiyoruz. Banka secimi profilinize baglidir.",
    heroCta: "Ne kadar borc alabilecegimi kontrol et",
    coverageTitle: "Kapsam",
    aiTitle: "AI sizin icin ne yapar",
    brokerFlowTitle: "Broker is birligi nasil ilerler",
    compareTitle: "Ipotek yolunun karsilastirmasi",
    seoSectionTitle: "Daha hizli karar icin SEO girisleri",
    seoLinkCalculator: "Ipotek hesaplayici", seoLinkBorrow: "Ne kadar borc alabilirim", seoLinkLtv: "LTV hesaplama", seoLinkIncome: "Ipotek ve gelir",
  };
  const zh: HomeCopy = { ...en,
    heroHeadline: "2分钟内判断你的按揭申请是否有现实获批机会。",
    heroSub: "无需跑多家银行。自动评分 + 经纪人给出下一步。",
    todayLabel: "今日：",
    coverageText: "我们与CZ/SK市场的按揭顾问合作，具体银行选择取决于你的个人资料。",
    heroCta: "查看我大概能贷多少",
    coverageTitle: "覆盖范围",
    aiTitle: "AI能为你做什么",
    brokerFlowTitle: "与经纪人协作流程",
    compareTitle: "按揭路径对比",
    seoSectionTitle: "更快决策的SEO入口页",
    seoLinkCalculator: "按揭计算器", seoLinkBorrow: "我能贷多少", seoLinkLtv: "LTV计算", seoLinkIncome: "按揭与收入",
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
