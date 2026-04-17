import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SeoLanding } from "@/components/seo-landing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Kolik dostanu hypotéku | hypo.online" };
}

export default async function KolikDostanuHypotekuPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isCs = locale === "cs";
  return (
    <SeoLanding
      title={isCs ? "Kolik dostanu hypotéku?" : "How much mortgage can I get?"}
      intro={
        isCs
          ? "Rychle ověřte, jestli vaše očekávání odpovídá typickým limitům bank a co může výsledek brzdit."
          : "Quickly check if your expectations match common bank limits and what may hold the result back."
      }
      bullets={
        isCs
          ? [
              "Zohlednění typu příjmu a časového horizontu.",
              "Semafor + procento místo obecné odpovědi.",
              "Možnost předat případ makléři i u žlutého/červeného výsledku.",
            ]
          : [
              "Considers income type and timeline.",
              "Traffic light + probability instead of generic output.",
              "Broker handoff available for yellow/red outcomes too.",
            ]
      }
      ctaLabel={isCs ? "Zjistit orientační limit" : "Check indicative limit"}
    />
  );
}
