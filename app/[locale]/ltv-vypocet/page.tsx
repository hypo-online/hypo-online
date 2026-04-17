import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SeoLanding } from "@/components/seo-landing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return { title: "LTV výpočet | hypo.online" };
}

export default async function LtvVypocetPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isCs = locale === "cs";
  return (
    <SeoLanding
      title={isCs ? "LTV výpočet pro hypotéku" : "LTV calculation for mortgages"}
      intro={
        isCs
          ? "Pochopte, jak poměr úvěru k hodnotě nemovitosti ovlivňuje schvalování i nabídnutou sazbu."
          : "Understand how loan-to-value impacts approval and offered rates."
      }
      bullets={
        isCs
          ? [
              "Co znamená vyšší LTV pro riziko a bankovní scoring.",
              "Jak vlastní prostředky mění výsledek.",
              "Kdy je vhodné řešit strukturu financování s makléřem.",
            ]
          : [
              "What higher LTV means for risk and bank scoring.",
              "How own funds change your result.",
              "When to involve a broker for financing structure.",
            ]
      }
      ctaLabel={isCs ? "Spustit LTV check" : "Run LTV check"}
    />
  );
}
