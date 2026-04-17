import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SeoLanding } from "@/components/seo-landing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = incomeCopy(locale);
  return {
    title: c.metaTitle,
  };
}

export default async function HypotekaPrijemPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = incomeCopy(locale);
  return (
    <SeoLanding
      title={c.title}
      intro={c.intro}
      bullets={c.bullets}
      ctaLabel={c.cta}
    />
  );
}

function incomeCopy(locale: string) {
  const en = {
    metaTitle: "Mortgage and income | hypo.online",
    title: "Mortgage and income: what banks care about",
    intro: "See how banks commonly assess employed, self-employed, and foreign-income applicants.",
    bullets: [
      "Difference between stable and higher-risk income profiles.",
      "Typical documents that speed up approval.",
      "When to optimize profile first and apply later.",
    ],
    cta: "Check income profile",
  };
  if (locale === "cs") {
    return {
      metaTitle: "Hypotéka a příjem | hypo.online",
      title: "Hypotéka a příjem: co banku zajímá",
      intro: "Zjistěte, jak banky obvykle posuzují zaměstnance, OSVČ i příjmy ze zahraničí.",
      bullets: [
        "Rozdíl mezi stabilním a rizikovým profilem příjmu.",
        "Typické dokumenty, které urychlí schválení.",
        "Kdy je lepší nejdřív optimalizovat profil a žádat později.",
      ],
      cta: "Ověřit profil příjmu",
    };
  }
  if (locale === "uk") return { ...en, metaTitle: "Іпотека і дохід | hypo.online", title: "Іпотека і дохід: що важливо для банку", cta: "Перевірити профіль доходу" };
  if (locale === "ru") return { ...en, metaTitle: "Ипотека и доход | hypo.online", title: "Ипотека и доход: что важно для банка", cta: "Проверить профиль дохода" };
  if (locale === "vi") return { ...en, metaTitle: "The chap va thu nhap | hypo.online", title: "The chap va thu nhap: ngan hang quan tam gi", cta: "Kiem tra ho so thu nhap" };
  if (locale === "ro") return { ...en, metaTitle: "Ipoteca si venit | hypo.online", title: "Ipoteca si venit: ce conteaza pentru banca", cta: "Verifica profilul de venit" };
  if (locale === "es") return { ...en, metaTitle: "Hipoteca e ingresos | hypo.online", title: "Hipoteca e ingresos: que valora el banco", cta: "Comprobar perfil de ingresos" };
  if (locale === "fr") return { ...en, metaTitle: "Hypotheque et revenu | hypo.online", title: "Hypotheque et revenu : ce qui compte pour la banque", cta: "Verifier le profil de revenu" };
  if (locale === "it") return { ...en, metaTitle: "Mutuo e reddito | hypo.online", title: "Mutuo e reddito: cosa conta per la banca", cta: "Verifica profilo reddito" };
  if (locale === "tr") return { ...en, metaTitle: "Ipotek ve gelir | hypo.online", title: "Ipotek ve gelir: bankalar neye bakar", cta: "Gelir profilini kontrol et" };
  if (locale === "zh") return { ...en, metaTitle: "按揭与收入 | hypo.online", title: "按揭与收入：银行关注什么", cta: "检查收入画像" };
  if (locale === "sk") return { ...en, metaTitle: "Hypotéka a príjem | hypo.online", title: "Hypotéka a príjem: čo banku zaujíma", cta: "Overiť profil príjmu" };
  if (locale === "de") return { ...en, metaTitle: "Hypothek und Einkommen | hypo.online", title: "Hypothek und Einkommen: worauf Banken achten", cta: "Einkommensprofil prüfen" };
  if (locale === "pl") return { ...en, metaTitle: "Hipoteka i dochód | hypo.online", title: "Hipoteka i dochód: na co patrzą banki", cta: "Sprawdź profil dochodu" };
  return en;
}
