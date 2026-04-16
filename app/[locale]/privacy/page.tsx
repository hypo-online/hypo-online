import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return { title: t("title") };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  return (
    <div className="mx-auto max-w-lg px-4 pb-16 pt-10 sm:max-w-2xl sm:px-6">
      <Link
        href="/"
        className="text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
      >
        {t("back")}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-brand-950)]">
        {t("title")}
      </h1>
      <div className="prose prose-zinc mt-6 max-w-none space-y-4 text-sm leading-relaxed">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
      </div>
    </div>
  );
}
