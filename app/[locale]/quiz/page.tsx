import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteLogoNav } from "@/components/site-logo-nav";
import { QuizFlow } from "@/components/quiz-flow";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: `${t("title")} — Quiz` };
}

export default async function QuizPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="mx-auto flex min-h-dvh max-w-[640px] flex-col px-4 pb-16 pt-8 sm:px-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <SiteLogoNav logoClassName="h-7 w-auto sm:h-8" />
      </div>
      <QuizFlow locale={locale} />
    </div>
  );
}
