import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { EducationArticleView } from "@/components/education-article";
import { EducationLocaleGate } from "@/components/education-locale-gate";
import { JsonLdScript } from "@/components/json-ld-script";
import { educationArticleBreadcrumbJsonLd } from "@/lib/education/breadcrumb-jsonld";
import { Link } from "@/navigation";
import { SiteLogoNav } from "@/components/site-logo-nav";
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
  const article = getEducationArticle(slug);
  if (!article) notFound();

  const related =
    article.relatedSlugs?.flatMap((s) => {
      const rel = getEducationArticle(s);
      return rel ? [{ slug: rel.slug, title: rel.title }] : [];
    }) ?? [];

  return (
    <div className="mx-auto flex min-h-dvh max-w-[720px] flex-col px-4 pb-16 pt-8 sm:px-8">
      <JsonLdScript data={educationArticleBreadcrumbJsonLd(locale, article)} />
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/vzdelavani"
          className="text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
        >
          ← Průvodce hypotékou
        </Link>
        <SiteLogoNav />
      </header>

      <EducationLocaleGate locale={locale} csPath={`/vzdelavani/${slug}`} />

      {locale === "cs" ? (
        <EducationArticleView article={article} related={related} />
      ) : (
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 text-sm text-body">
          <p className="font-medium text-[var(--color-brand-950)]">{article.title}</p>
          <p className="mt-2 text-xs text-muted">{article.description}</p>
        </div>
      )}

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          href="/quiz"
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[var(--color-brand-600)] px-4 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-800)]"
        >
          Spustit orientační check
        </Link>
      </div>
    </div>
  );
}
