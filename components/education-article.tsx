import { Link } from "@/navigation";
import type { EducationArticle } from "@/lib/education/types";

type RelatedLink = { slug: string; title: string };

export function EducationArticleView({
  article,
  related = [],
}: {
  article: EducationArticle;
  related?: RelatedLink[];
}) {
  return (
    <article>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
        {article.category}
        {article.updatedAt ? (
          <span className="mt-1 block normal-case text-muted">
            Poslední obsahová revize: {article.updatedAt}
          </span>
        ) : null}
      </p>
      <h1 className="mt-2 text-balance text-2xl font-semibold leading-tight text-[var(--color-brand-950)] sm:text-3xl lg:[text-wrap:wrap]">
        {article.title}
      </h1>
      <p className="mt-4 text-pretty text-sm leading-relaxed text-body sm:text-base lg:[text-wrap:wrap]">
        {article.description}
      </p>

      <div className="mt-10 space-y-10">
        {article.sections.map((sec) => (
          <section key={sec.h2}>
            <h2 className="text-lg font-semibold text-[var(--color-brand-950)] sm:text-xl">
              {sec.h2}
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-body sm:text-[15px]">
              {sec.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {article.takeaways && article.takeaways.length > 0 && (
        <aside className="card-surface mt-12 border-l-[3px] border-l-[var(--color-brand-600)] p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            V kostce
          </p>
          <ul className="mt-3 space-y-2 text-sm text-body">
            {article.takeaways.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand-600)]" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      )}

      {related.length > 0 && (
        <nav
          className="card-surface mt-10 p-5"
          aria-label="Související články"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Související články
          </p>
          <ul className="mt-3 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/vzdelavani/${r.slug}`}
                  className="text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </article>
  );
}
