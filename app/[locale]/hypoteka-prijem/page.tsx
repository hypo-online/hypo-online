import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SeoLanding } from "@/components/seo-landing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Hypotéka a příjem | hypo.online" };
}

export default async function HypotekaPrijemPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isCs = locale === "cs";
  return (
    <SeoLanding
      title={isCs ? "Hypotéka a příjem: co banku zajímá" : "Mortgage and income: what banks care about"}
      intro={
        isCs
          ? "Zjistěte, jak banky obvykle posuzují zaměstnance, OSVČ i příjmy ze zahraničí."
          : "See how banks commonly assess employed, self-employed, and foreign-income applicants."
      }
      bullets={
        isCs
          ? [
              "Rozdíl mezi stabilním a rizikovým profilem příjmu.",
              "Typické dokumenty, které urychlí schválení.",
              "Kdy je lepší nejdřív optimalizovat profil a žádat později.",
            ]
          : [
              "Difference between stable and higher-risk income profiles.",
              "Typical documents that speed up approval.",
              "When to optimize profile first and apply later.",
            ]
      }
      ctaLabel={isCs ? "Ověřit profil příjmu" : "Check income profile"}
    />
  );
}
