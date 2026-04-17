import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SeoLanding } from "@/components/seo-landing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Hypotéka kalkulačka | hypo.online" };
}

export default async function HypotekaKalkulackaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isCs = locale === "cs";
  return (
    <SeoLanding
      title={isCs ? "Hypotéka kalkulačka: rychlá orientace" : "Mortgage calculator: quick orientation"}
      intro={
        isCs
          ? "Spočítejte orientační pravděpodobnost schválení a hned zjistěte, co zlepšit před žádostí."
          : "Estimate your approval probability and see what to improve before applying."
      }
      bullets={
        isCs
          ? [
              "Rychlý mobilní check do 60 sekund.",
              "Výsledek jako procento + semafor.",
              "Doporučení, jak zvýšit šanci na schválení.",
            ]
          : [
              "Fast mobile check in about 60 seconds.",
              "Result as percentage + traffic light.",
              "Concrete tips to improve approval odds.",
            ]
      }
      ctaLabel={isCs ? "Spustit kalkulačku" : "Start calculator"}
    />
  );
}
