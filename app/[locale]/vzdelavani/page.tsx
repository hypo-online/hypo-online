import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { EducationLocaleGate } from "@/components/education-locale-gate";
import { JsonLdScript } from "@/components/json-ld-script";
import { educationHubBreadcrumbJsonLd } from "@/lib/education/breadcrumb-jsonld";
import type { EducationArticle } from "@/lib/education/types";
import { Link } from "@/navigation";
import { SiteLogoNav } from "@/components/site-logo-nav";
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
    <div className="mx-auto flex min-h-dvh max-w-[720px] flex-col px-4 pb-16 pt-8 sm:px-8">
      <JsonLdScript data={educationHubBreadcrumbJsonLd(locale)} />
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <SiteLogoNav logoClassName="h-7 w-auto sm:h-8" />
      </header>

      <EducationLocaleGate locale={locale} csPath="/vzdelavani" />

      <h1 className="text-balance text-2xl font-semibold leading-tight text-[var(--color-brand-950)] sm:text-3xl">
        Průvodce hypotékou v České republice
      </h1>
      <p className="mt-4 text-pretty text-sm leading-relaxed text-body sm:text-[15px]">
        Tyto stránky vysvětlují, jak u českých bank probíhá financování bydlení, jaké existují typy hypoték a jaké ukazatele banky používají v kontextu doporučení České národní banky. Texty jsou určené hlavně lidem, kteří v ČR nově žijí nebo tady plánují koupit nemovitost.
      </p>

      <section className="mt-10 space-y-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Články
        </h2>
        {orderedCategories.map((category) => (
          <div key={category} className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">
              {category}
            </h3>
            <ul className="space-y-2">
              {(byCategory.get(category) ?? []).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/vzdelavani/${a.slug}`}
                    className="block rounded-lg border border-[var(--color-border)] px-4 py-3 transition hover:border-[var(--color-brand-600)] hover:bg-[#F5F9FF] dark:hover:bg-white/5"
                  >
                    <span className="mt-1 block text-sm font-semibold text-[var(--color-brand-950)]">
                      {a.title}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-body">
                      {a.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <p className="mt-10 text-xs leading-relaxed text-muted">
        Informace slouží k orientaci, nejsou právním ani daňovým poradenstvím a nenahrazují individuální rozhodnutí banky.
      </p>
    </div>
  );
}
