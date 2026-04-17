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
  const isCs = locale === "cs";

  const steps = [
    { title: t("home.how_step1_title"), body: t("home.how_step1_body") },
    { title: t("home.how_step2_title"), body: t("home.how_step2_body") },
    { title: t("home.how_step3_title"), body: t("home.how_step3_body") },
    { title: t("home.how_step4_title"), body: t("home.how_step4_body") },
    { title: t("home.how_step5_title"), body: t("home.how_step5_body") },
    { title: t("home.how_step6_title"), body: t("home.how_step6_body") },
  ] as const;

  const seoLinks = [
    { href: "/hypoteka-kalkulacka", label: "Hypotéka kalkulačka" },
    { href: "/kolik-dostanu-hypoteku", label: "Kolik dostanu hypotéku" },
    { href: "/ltv-vypocet", label: "LTV výpočet" },
    { href: "/hypoteka-prijem", label: "Hypotéka a příjem" },
  ] as const;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isCs ? "Je výsledek závazné schválení bankou?" : "Is this a binding bank approval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isCs
            ? "Ne. Jde o orientační odhad pravděpodobnosti a další krok s makléřem."
            : "No. It is an indicative probability estimate and next-step guidance with a broker.",
        },
      },
      {
        "@type": "Question",
        name: isCs
          ? "Ukládáte odpovědi z dotazníku?"
          : "Do you store questionnaire answers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isCs
            ? "Ne. Odpovědi používáme jen pro okamžitý výpočet výsledku."
            : "No. Answers are used only for immediate result computation.",
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
        {isCs
          ? "Zjistěte během 2 minut, jestli má hypotéka reálnou šanci."
          : "See in 2 minutes if your mortgage case is realistically approvable."}
      </h1>
      <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
        {isCs
          ? "Bez běhání po bankách. Automatický scoring + lidský makléř pro další krok."
          : "No running between banks. Automated scoring plus a human broker for the next step."}
      </p>
      <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <strong>{isCs ? "Dnes:" : "Today:"}</strong>{" "}
        {isCs
          ? "bankovní pravidla i sazby se mění. Výsledek berte jako rychlou orientaci."
          : "bank rules and rates move often. Treat the result as rapid orientation."}
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
          {isCs ? "Zjistit, kolik si mohu půjčit" : "Check how much I can borrow"}
        </Link>
        <a
          href="#how"
          className="inline-flex h-12 items-center justify-center rounded-xl px-4 text-base font-semibold text-zinc-800 underline-offset-4 hover:underline"
        >
          {t("home.secondary")}
        </a>
      </div>
      <p className="mt-3 text-xs text-zinc-500">
        {isCs ? "Bez závazku, orientačně do 2 minut." : "No commitment, indicative in about 2 minutes."}
      </p>

      <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          {isCs ? "Spolupráce" : "Coverage"}
        </p>
        <p className="mt-2 text-sm text-zinc-700">
          {isCs
            ? "Spolupracujeme s hypotečními specialisty napříč CZ/SK trhem. Konkrétní banka záleží na vašem profilu."
            : "We work with mortgage specialists across CZ/SK market coverage. Bank choice depends on your profile."}
        </p>
      </section>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {isCs ? "Co dělá AI za vás" : "What AI does for you"}
        </h2>
        <div className="mt-3 space-y-2 text-sm text-zinc-700">
          <p>• {isCs ? "Okamžitý předběžný scoring případu." : "Instant pre-scoring of your case."}</p>
          <p>• {isCs ? "Porovnání vhodnosti podle profilu." : "Profile-based suitability comparison."}</p>
          <p>• {isCs ? "Odhalení slabých míst před podáním." : "Surfacing weak points before submission."}</p>
        </div>
        <div className="mt-4">
          <AiFlowGraphic locale={locale} />
        </div>
      </section>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {isCs ? "Jak probíhá spolupráce s makléřem" : "How broker collaboration works"}
        </h2>
        <ol className="mt-3 space-y-2 text-sm text-zinc-700">
          <li>1. {isCs ? "Po výsledku odešlete kontakt (volitelné)." : "After result, send contact (optional)."}</li>
          <li>2. {isCs ? "Makléř se ozve a upřesní dokumenty." : "Broker calls and confirms document needs."}</li>
          <li>3. {isCs ? "Dostanete realistický postup a další krok." : "You get a realistic path and next action."}</li>
        </ol>
      </section>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {isCs ? "Srovnání cesty k hypotéce" : "Mortgage path comparison"}
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-500">
                <th className="py-2 pr-3">{isCs ? "Faktor" : "Factor"}</th>
                <th className="py-2 pr-3">hypo.online</th>
                <th className="py-2 pr-3">{isCs ? "Banka (pobočka)" : "Bank branch"}</th>
                <th className="py-2">{isCs ? "Bez vedení" : "No guidance"}</th>
              </tr>
            </thead>
            <tbody className="text-zinc-700">
              <tr className="border-b border-zinc-100">
                <td className="py-2 pr-3">{isCs ? "Rychlost orientace" : "Speed to orientation"}</td>
                <td className="py-2 pr-3">{isCs ? "2 min check" : "2-min check"}</td>
                <td className="py-2 pr-3">{isCs ? "Delší konzultace" : "Longer consultation"}</td>
                <td className="py-2">{isCs ? "Nejasná" : "Unclear"}</td>
              </tr>
              <tr className="border-b border-zinc-100">
                <td className="py-2 pr-3">{isCs ? "Personalizace" : "Personalization"}</td>
                <td className="py-2 pr-3">{isCs ? "AI + makléř" : "AI + broker"}</td>
                <td className="py-2 pr-3">{isCs ? "Podle jedné banky" : "Single-bank lens"}</td>
                <td className="py-2">{isCs ? "Bez kontextu" : "Low context"}</td>
              </tr>
              <tr>
                <td className="py-2 pr-3">{isCs ? "Další krok" : "Next step clarity"}</td>
                <td className="py-2 pr-3">{isCs ? "Jasné doporučení" : "Clear recommendation"}</td>
                <td className="py-2 pr-3">{isCs ? "Závislé na kapacitě" : "Capacity-dependent"}</td>
                <td className="py-2">{isCs ? "Vysoká nejistota" : "High uncertainty"}</td>
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
          SEO vstupy pro rychlé rozhodnutí
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Praktické stránky pro nejčastější dotazy. Každá navazuje na rychlý check a předání na makléře.
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
