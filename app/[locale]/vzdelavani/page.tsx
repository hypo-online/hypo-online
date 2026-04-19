import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { EducationLocaleGate } from "@/components/education-locale-gate";
import { JsonLdScript } from "@/components/json-ld-script";
import { SiteToolbarHeader } from "@/components/site-toolbar-header";
import { educationHubBreadcrumbJsonLd } from "@/lib/education/breadcrumb-jsonld";
import type { EducationArticle } from "@/lib/education/types";
import { Link } from "@/navigation";
import { listEducationArticles } from "@/lib/education";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Průvodce hypotékou v ČR | hypo.online",
    description:
      "Články pro cizince a nové rezidenty: proces v bance, typy hypoték, refinancování, účelové a neúčelové produkty, DTI/LTV a regulace.",
  };
}

export default async function VzdelavaniHubPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const articles = listEducationArticles();

  const categoryOrder = [
    "Začínám v Česku",
    "Proces",
    "Typy produktů",
    "Banky a regulace",
    "Bydlení a produkty",
    "Spoření a kombinace",
    "Podnikání a alternativy",
    "Segmenty nemovitostí",
    "Mezinárodní a speciální produkty",
    "Právo a daň (orientace)",
    "Rodina a závazky",
  ] as const;

  const byCategory = new Map<string, EducationArticle[]>();
  for (const a of articles) {
    const cur = byCategory.get(a.category);
    if (cur) cur.push(a);
    else byCategory.set(a.category, [a]);
  }

  const categorySet = new Set<string>(categoryOrder);
  const orderedCategories = [
    ...categoryOrder.filter((c) => byCategory.has(c)),
    ...[...byCategory.keys()].filter((c) => !categorySet.has(c)),
  ];

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-full flex-col px-4 pb-28 pt-7 sm:max-w-2xl sm:px-8 sm:pb-16 sm:pt-10 md:pb-16">
      <JsonLdScript data={educationHubBreadcrumbJsonLd(locale)} />
      <SiteToolbarHeader />

      <EducationLocaleGate locale={locale} csPath="/vzdelavani" />

      <section
        className="home-hero-band mb-8 rounded-2xl px-4 py-7 sm:px-7 sm:py-9"
        aria-labelledby="education-hub-heading"
      >
        <h1
          id="education-hub-heading"
          className="text-balance text-[1.85rem] font-semibold leading-tight tracking-tight text-[var(--color-brand-950)] sm:text-4xl"
        >
          Průvodce hypotékou v České republice
        </h1>
        <p className="mt-4 max-w-prose text-pretty text-[15px] leading-relaxed text-body sm:text-lg">
          Tyto stránky vysvětlují, jak u českých bank probíhá financování bydlení, jaké existují typy hypoték a jaké
          ukazatele banky používají v kontextu doporučení České národní banky. Texty jsou určené hlavně lidem, kteří v
          ČR nově žijí nebo tady plánují koupit nemovitost.
        </p>
      </section>

      <section
        className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-7"
        aria-labelledby="education-articles-heading"
      >
        <h2
          id="education-articles-heading"
          className="text-sm font-semibold uppercase tracking-wide text-muted"
        >
          Články
        </h2>
        <div className="mt-8 space-y-10">
          {orderedCategories.map((category) => (
            <div key={category} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">{category}</h3>
              <ul className="space-y-2">
                {(byCategory.get(category) ?? []).map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/vzdelavani/${a.slug}`}
                      className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-page)] px-4 py-3 transition hover:border-[var(--color-brand-600)] hover:bg-[var(--color-brand-soft)] dark:hover:bg-white/5 sm:rounded-2xl sm:px-5 sm:py-4"
                    >
                      <span className="block text-sm font-semibold text-[var(--color-brand-950)] sm:text-[15px]">
                        {a.title}
                      </span>
                      <span className="mt-1.5 block text-xs leading-relaxed text-body sm:text-sm">
                        {a.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-brand-soft)] px-5 py-4 text-xs leading-relaxed text-body sm:px-6 sm:py-5 sm:text-sm">
        Informace slouží k orientaci, nejsou právním ani daňovým poradenstvím a nenahrazují individuální rozhodnutí
        banky.
      </p>
    </div>
  );
}
