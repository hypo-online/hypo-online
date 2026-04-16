import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";
import { LocaleSwitcher } from "@/components/locale-switcher";

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

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 pb-16 pt-10 sm:max-w-2xl sm:px-6">
      <header className="mb-10 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold tracking-tight text-[var(--color-brand-800)]">
          {t("brand")}
        </span>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link
            href="/privacy"
            className="text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
          >
            {t("nav.privacy")}
          </Link>
        </div>
      </header>

      <p className="mb-3 inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--color-brand-800)] shadow-sm ring-1 ring-black/5">
        {t("home.badge")}
      </p>
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-brand-950)] sm:text-4xl">
        {t("home.headline")}
      </h1>
      <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
        {t("home.sub")}
      </p>

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
          {t("home.cta")}
        </Link>
        <a
          href="#how"
          className="inline-flex h-12 items-center justify-center rounded-xl px-4 text-base font-semibold text-zinc-800 underline-offset-4 hover:underline"
        >
          {t("home.secondary")}
        </a>
      </div>

      <section id="how" className="mt-16 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
        <h2 className="text-lg font-semibold text-[var(--color-brand-950)]">
          {t("home.howTitle")}
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-zinc-700">
          <li>{t("home.how1")}</li>
          <li>{t("home.how2")}</li>
          <li>{t("home.how3")}</li>
        </ol>
      </section>
    </div>
  );
}
