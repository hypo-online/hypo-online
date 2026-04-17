import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SeoLanding } from "@/components/seo-landing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = borrowCopy(locale);
  return {
    title: c.metaTitle,
  };
}

export default async function KolikDostanuHypotekuPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = borrowCopy(locale);
  return (
    <SeoLanding
      title={c.title}
      intro={c.intro}
      bullets={c.bullets}
      ctaLabel={c.cta}
    />
  );
}

function borrowCopy(locale: string) {
  const en = {
    metaTitle: "How much mortgage can I get | hypo.online",
    title: "How much mortgage can I get?",
    intro: "Quickly check if your expectations match common bank limits and what may hold the result back.",
    bullets: [
      "Considers income type and timeline.",
      "Traffic light + probability instead of generic output.",
      "Broker handoff available for yellow/red outcomes too.",
    ],
    cta: "Check indicative limit",
  };
  if (locale === "cs") {
    return {
      metaTitle: "Kolik dostanu hypotéku | hypo.online",
      title: "Kolik dostanu hypotéku?",
      intro: "Rychle ověřte, jestli vaše očekávání odpovídá typickým limitům bank a co může výsledek brzdit.",
      bullets: [
        "Zohlednění typu příjmu a časového horizontu.",
        "Semafor + procento místo obecné odpovědi.",
        "Možnost předat případ makléři i u žlutého/červeného výsledku.",
      ],
      cta: "Zjistit orientační limit",
    };
  }
  if (locale === "uk") return { ...en, metaTitle: "Скільки іпотеки можу отримати | hypo.online", title: "Скільки іпотеки я можу отримати?", cta: "Перевірити орієнтовний ліміт" };
  if (locale === "ru") return { ...en, metaTitle: "Сколько ипотеки я могу получить | hypo.online", title: "Сколько ипотеки я могу получить?", cta: "Проверить ориентировочный лимит" };
  if (locale === "vi") return { ...en, metaTitle: "Toi co the vay the chap bao nhieu | hypo.online", title: "Toi co the vay the chap bao nhieu?", cta: "Kiem tra gioi han uoc tinh" };
  if (locale === "ro") return { ...en, metaTitle: "Cat pot imprumuta pentru ipoteca | hypo.online", title: "Cat pot imprumuta pentru ipoteca?", cta: "Verifica limita orientativa" };
  if (locale === "es") return { ...en, metaTitle: "Cuanta hipoteca puedo conseguir | hypo.online", title: "Cuanta hipoteca puedo conseguir?", cta: "Comprobar limite orientativo" };
  if (locale === "fr") return { ...en, metaTitle: "Combien puis-je emprunter en hypotheque | hypo.online", title: "Combien puis-je emprunter en hypotheque ?", cta: "Verifier la limite indicative" };
  if (locale === "it") return { ...en, metaTitle: "Quanto mutuo posso ottenere | hypo.online", title: "Quanto mutuo posso ottenere?", cta: "Verifica limite indicativo" };
  if (locale === "tr") return { ...en, metaTitle: "Ne kadar ipotek alabilirim | hypo.online", title: "Ne kadar ipotek alabilirim?", cta: "Tahmini limiti kontrol et" };
  if (locale === "zh") return { ...en, metaTitle: "我能获得多少按揭 | hypo.online", title: "我能获得多少按揭额度？", cta: "查看预估额度" };
  if (locale === "sk") return { ...en, metaTitle: "Koľko hypotéky môžem získať | hypo.online", title: "Koľko hypotéky môžem získať?", cta: "Zistiť orientačný limit" };
  if (locale === "de") return { ...en, metaTitle: "Wie viel Hypothek kann ich erhalten | hypo.online", title: "Wie viel Hypothek kann ich erhalten?", cta: "Richtwert prüfen" };
  if (locale === "pl") return { ...en, metaTitle: "Ile kredytu hipotecznego mogę dostać | hypo.online", title: "Ile kredytu hipotecznego mogę dostać?", cta: "Sprawdź orientacyjny limit" };
  return en;
}
