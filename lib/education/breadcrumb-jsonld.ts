import type { EducationArticle } from "@/lib/education/types";
import { getSiteUrl } from "@/lib/site-url";

type BreadcrumbItem = {
  name: string;
  path: string;
};

function absoluteUrl(locale: string, path: string): string {
  const base = getSiteUrl();
  if (path === "" || path === "/") {
    return `${base}/${locale}`;
  }
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}/${locale}${p}`;
}

function breadcrumbList(items: BreadcrumbItem[], locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(locale, item.path),
    })),
  };
}

export function educationHubBreadcrumbJsonLd(locale: string) {
  return breadcrumbList(
    [
      { name: "hypo.online", path: "" },
      { name: "Průvodce hypotékou v ČR", path: "/vzdelavani" },
    ],
    locale,
  );
}

export function educationArticleBreadcrumbJsonLd(
  locale: string,
  article: EducationArticle,
) {
  return breadcrumbList(
    [
      { name: "hypo.online", path: "" },
      { name: "Průvodce hypotékou v ČR", path: "/vzdelavani" },
      { name: article.title, path: `/vzdelavani/${article.slug}` },
    ],
    locale,
  );
}
