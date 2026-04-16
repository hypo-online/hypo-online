import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";
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
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 pb-16 pt-8 sm:max-w-xl sm:px-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
        >
          ← hypo.online
        </Link>
      </div>
      <QuizFlow locale={locale} />
    </div>
  );
}
