type Props = {
  locale: string;
  /** Path under Czech locale, e.g. `/vzdelavani` or `/vzdelavani/refinancovani` */
  csPath: string;
};

/**
 * Educational content is authored in Czech first; other locales see a short gate with a link to the Czech version.
 */
export function EducationLocaleGate({ locale, csPath }: Props) {
  if (locale === "cs") return null;

  const path = csPath.startsWith("/") ? csPath : `/${csPath}`;
  const href = `/cs${path}`;

  return (
    <div className="card-surface mb-8 border-l-[3px] border-l-[var(--color-brand-600)] p-4 text-sm text-body">
      <p className="font-semibold text-[var(--color-brand-950)]">
        Tento průvodce je zatím k dispozici jen v češtině.
      </p>
      <p className="mt-2 text-xs text-muted">
        Překlady přidáme později. Můžete otevřít českou verzi stránky nebo použít překladač v prohlížeči.
      </p>
      <a
        href={href}
        className="mt-3 inline-flex text-sm font-semibold text-[var(--color-brand-600)] underline-offset-4 hover:underline"
      >
        → česká verze
      </a>
    </div>
  );
}
