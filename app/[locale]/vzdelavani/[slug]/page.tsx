import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { EducationArticleView } from "@/components/education-article";
import { EducationLocaleGate } from "@/components/education-locale-gate";
import { JsonLdScript } from "@/components/json-ld-script";
import { SiteToolbarHeader } from "@/components/site-toolbar-header";
import { educationArticleBreadcrumbJsonLd } from "@/lib/education/breadcrumb-jsonld";
import { Link } from "@/navigation";
import {
  educationArticleSlugs,
  getEducationArticle,
} from "@/lib/education";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return educationArticleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getEducationArticle(slug);
  if (!article) return { title: "hypo.online" };
  return {
    title: `${article.title} | hypo.online`,
    description: article.description,
  };
}

export default async function VzdelavaniArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const article = getEducationArticle(slug);
  if (!article) notFound();

  const related =
    article.relatedSlugs?.flatMap((s) => {
      const rel = getEducationArticle(s);
      return rel ? [{ slug: rel.slug, title: rel.title }] : [];
    }) ?? [];

  return (
    <div className="site-shell">
      <JsonLdScript data={educationArticleBreadcrumbJsonLd(locale, article)} />
      <SiteToolbarHeader />

      <nav className="mb-6" aria-label={t("nav.guide")}>
        <Link
          href="/vzdelavani"
          className="text-sm font-semibold text-[var(--color-brand-600)] underline-offset-4 hover:underline sm:text-[15px]"
        >
          {t("nav.backToEducation")}
        </Link>
      </nav>

      <EducationLocaleGate locale={locale} csPath={`/vzdelavani/${slug}`} />

      {locale === "cs" ? (
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-7">
          <EducationArticleView article={article} related={related} />
        </div>
      ) : (
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5 text-sm text-body sm:p-7 sm:text-[15px]">
          <p className="font-semibold text-[var(--color-brand-950)]">{article.title}</p>
          <p className="mt-2 text-xs text-muted sm:text-sm">{article.description}</p>
        </div>
      )}

      <div className="mt-10">
        <Link
          href="/quiz"
          className="btn-gradient-primary inline-flex min-h-[52px] w-full items-center justify-center rounded-xl px-5 text-base font-bold tracking-tight transition active:scale-[0.99] sm:min-h-[56px] sm:w-auto sm:px-8 sm:text-lg"
        >
          {t("nav.start")}
        </Link>
      </div>
    </div>
  );
}
