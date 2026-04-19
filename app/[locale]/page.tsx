import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";
import { SiteToolbarHeader } from "@/components/site-toolbar-header";
import { HeroGraphic } from "@/components/hero-graphic";
import { HomeHowAccordion } from "@/components/home-how-accordion";
import { HomeDataAccordion } from "@/components/home-data-accordion";
import { HomeStickyQuizCta } from "@/components/home-sticky-quiz-cta";

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

  const steps = [
    { title: t("home.how_step1_title"), body: t("home.how_step1_body") },
    { title: t("home.how_step2_title"), body: t("home.how_step2_body") },
    { title: t("home.how_step3_title"), body: t("home.how_step3_body") },
    { title: t("home.how_step4_title"), body: t("home.how_step4_body") },
    { title: t("home.how_step5_title"), body: t("home.how_step5_body") },
    { title: t("home.how_step6_title"), body: t("home.how_step6_body") },
  ] as const;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: t("home.schemaFaq1q"),
        acceptedAnswer: { "@type": "Answer", text: t("home.schemaFaq1a") },
      },
      {
        "@type": "Question",
        name: t("home.schemaFaq2q"),
        acceptedAnswer: { "@type": "Answer", text: t("home.schemaFaq2a") },
      },
    ],
  };

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-full flex-col px-4 pb-28 pt-7 sm:max-w-2xl sm:px-8 sm:pb-16 sm:pt-10 md:pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SiteToolbarHeader />

      <section className="home-hero-band mb-8 rounded-2xl px-4 py-7 sm:px-7 sm:py-9" aria-labelledby="home-hero-heading">
        <p className="mb-3 inline-flex w-fit rounded-full bg-[var(--color-surface)]/90 px-3 py-1 text-xs font-medium text-[var(--color-brand-800)] ring-1 ring-[color-mix(in_srgb,var(--color-brand-600)_22%,var(--color-border))] dark:text-[var(--color-brand-200)]">
          {t("home.badge")}
        </p>
        <h1
          id="home-hero-heading"
          className="text-balance text-[1.85rem] font-semibold leading-tight tracking-tight text-[var(--color-brand-950)] sm:text-4xl"
        >
          {t("home.headline")}
        </h1>
        <p className="mt-3 max-w-prose text-pretty text-[15px] leading-relaxed text-body sm:text-lg">
          {t("home.sub")}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold text-[var(--color-brand-800)] ring-1 ring-[var(--color-border)] dark:text-[var(--color-brand-200)]">
            {t("home.chipTime")}
          </span>
          <span className="inline-flex items-center rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold text-[var(--color-brand-800)] ring-1 ring-[var(--color-border)] dark:text-[var(--color-brand-200)]">
            {t("home.chipNoDossier")}
          </span>
        </div>

        <div className="hero-cta-panel mt-7 rounded-xl p-4 sm:mt-8 sm:p-5" aria-label={t("home.cta")}>
          <Link
            href="/quiz"
            className="btn-gradient-primary inline-flex w-full min-h-[52px] items-center justify-center rounded-xl px-5 text-base font-bold tracking-tight transition active:scale-[0.99] sm:min-h-[56px] sm:text-lg"
          >
            {t("home.cta")}
          </Link>
          <p className="mt-2 text-center text-xs leading-relaxed text-[var(--color-brand-800)] sm:text-sm dark:text-[var(--color-brand-300)]">
            {t("home.heroMicroShort")}
          </p>
          <nav
            className="mt-4 flex flex-col items-stretch justify-center gap-2 border-t border-[var(--color-border)] pt-4 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2"
            aria-label={t("home.toolsNavLabel")}
          >
            <a
              href="#how-flow"
              className="text-center font-semibold text-[var(--color-brand-600)] underline-offset-4 hover:underline sm:text-left"
            >
              {t("home.secondary")}
            </a>
            <span className="hidden text-muted sm:inline" aria-hidden>
              ·
            </span>
            <Link
              href="/vzdelavani"
              className="text-center font-semibold text-[var(--color-brand-600)] underline-offset-4 hover:underline sm:text-left"
            >
              {t("home.linkGuideShort")}
            </Link>
          </nav>
        </div>
      </section>

      <div className="home-tint-band mb-10">
        <HeroGraphic />
      </div>

      <div className="space-y-8 sm:space-y-10">
        <HomeDataAccordion
          title={t("home.dataAccordionTitle")}
          summary={t("home.dataAccordionSummary")}
          details={t("home.dataAccordionDetails")}
          expandAria={t("home.dataExpand")}
          collapseAria={t("home.dataCollapse")}
        />

        <section
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-7"
          aria-labelledby="home-value-title"
        >
          <h2
            id="home-value-title"
            className="text-lg font-semibold tracking-tight text-[var(--color-brand-950)] sm:text-xl"
          >
            {t("home.valueTitle")}
          </h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-body sm:text-[15px]">
            {t("home.valueLead")}
          </p>
          <div className="home-value-grid mt-6">
            <div className="home-value-pillar">
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-brand-600)]">
                {t("home.valueCoverageTitle")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-body">{t("home.valueCoverageBody")}</p>
            </div>
            <div className="home-value-pillar">
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-brand-600)]">
                {t("home.valueAiTitle")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-body">{t("home.valueAiBody")}</p>
            </div>
            <div className="home-value-pillar">
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-brand-600)]">
                {t("home.valueBrokerTitle")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-body">{t("home.valueBrokerBody")}</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-7">
          <h2 className="text-lg font-semibold tracking-tight text-[var(--color-brand-950)] sm:text-xl">
            {t("home.compareStripTitle")}
          </h2>
          <div className="mt-5 overflow-x-auto">
            <div className="min-w-[min(100%,22rem)]">
              <div className="home-compare-head">
                <span>{t("home.compareFact")}</span>
                <span>{t("home.compareColHypo")}</span>
                <span>{t("home.compareColBank")}</span>
                <span>{t("home.compareColNone")}</span>
              </div>
              <div className="home-compare-row">
                <span>{t("home.compareR1f")}</span>
                <span className="home-compare-highlight">{t("home.compareR1h")}</span>
                <span>{t("home.compareR1b")}</span>
                <span>{t("home.compareR1n")}</span>
              </div>
              <div className="home-compare-row">
                <span>{t("home.compareR2f")}</span>
                <span className="home-compare-highlight">{t("home.compareR2h")}</span>
                <span>{t("home.compareR2b")}</span>
                <span>{t("home.compareR2n")}</span>
              </div>
              <div className="home-compare-row">
                <span>{t("home.compareR3f")}</span>
                <span className="home-compare-highlight">{t("home.compareR3h")}</span>
                <span>{t("home.compareR3b")}</span>
                <span>{t("home.compareR3n")}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="how-flow" className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-7">
          <p className="text-sm leading-relaxed text-body">{t("home.howIntro")}</p>
          <div className="mt-5">
            <HomeHowAccordion
              steps={[...steps]}
              expandLabel={t("home.howAccordionExpand")}
              collapseLabel={t("home.howAccordionCollapse")}
              footNote={t("home.how_lead_note")}
            />
          </div>
        </section>

        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-7">
          <h2 className="text-lg font-semibold tracking-tight text-[var(--color-brand-950)] sm:text-xl">
            {t("home.moreToolsTitle")}
          </h2>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Link
              href="/vzdelavani"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-page)] px-4 text-sm font-semibold text-[var(--color-brand-700)] transition hover:border-[var(--color-brand-600)] hover:bg-[var(--color-brand-soft)] dark:text-[var(--color-brand-200)]"
            >
              {t("home.moreLinkGuide")}
            </Link>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">{t("home.moreToolsFoot")}</p>
        </section>

        <section
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-brand-soft)] px-5 py-6 sm:px-7"
          aria-labelledby="privacy-teaser-title"
        >
          <h2
            id="privacy-teaser-title"
            className="text-base font-semibold text-[var(--color-brand-950)] sm:text-lg"
          >
            {t("home.privacyTeaserTitle")}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-body">{t("home.privacyTeaserBody")}</p>
          <Link
            href="/privacy"
            className="mt-4 inline-flex font-semibold text-[var(--color-brand-600)] underline-offset-4 hover:underline"
          >
            {t("home.privacyTeaserLink")}
          </Link>
        </section>
      </div>

      <HomeStickyQuizCta href="/quiz" label={t("home.stickyQuizCta")} />
    </div>
  );
}
