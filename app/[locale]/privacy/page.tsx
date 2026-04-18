import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";
import { SiteLogoNav } from "@/components/site-logo-nav";
import { PrivacyDocument } from "@/components/privacy-document";

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
    <div className="mx-auto max-w-lg px-4 pb-16 pt-10 sm:max-w-2xl sm:px-8">
      <div className="flex flex-wrap items-center gap-4">
        <SiteLogoNav />
        <Link
          href="/"
          className="text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
        >
          {t("back")}
        </Link>
      </div>
      <PrivacyDocument titleLevel="h1" />
    </div>
  );
}
