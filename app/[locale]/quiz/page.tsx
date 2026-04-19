import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteToolbarHeader } from "@/components/site-toolbar-header";
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
    <div className="site-shell">
      <SiteToolbarHeader />
      <div className="mx-auto w-full max-w-[640px] flex-1 pb-16">
        <QuizFlow locale={locale} />
      </div>
    </div>
  );
}
