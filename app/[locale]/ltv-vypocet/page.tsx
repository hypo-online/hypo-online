import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SeoLanding } from "@/components/seo-landing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = ltvCopy(locale);
  return {
    title: c.metaTitle,
  };
}

export default async function LtvVypocetPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = ltvCopy(locale);
  return (
    <SeoLanding
      title={c.title}
      intro={c.intro}
      bullets={c.bullets}
      ctaLabel={c.cta}
    />
  );
}

function ltvCopy(locale: string) {
  const en = {
    metaTitle: "LTV calculation | hypo.online",
    title: "LTV calculation for mortgages",
    intro: "Understand how loan-to-value impacts approval and offered rates.",
    bullets: [
      "What higher LTV means for risk and bank scoring.",
      "How own funds change your result.",
      "When to involve a broker for financing structure.",
    ],
    cta: "Run LTV check",
  };
  if (locale === "cs") {
    return {
      metaTitle: "LTV výpočet | hypo.online",
      title: "LTV výpočet pro hypotéku",
      intro: "Pochopte, jak poměr úvěru k hodnotě nemovitosti ovlivňuje schvalování i nabídnutou sazbu.",
      bullets: [
        "Co znamená vyšší LTV pro riziko a bankovní scoring.",
        "Jak vlastní prostředky mění výsledek.",
        "Kdy je vhodné řešit strukturu financování s makléřem.",
      ],
      cta: "Spustit LTV check",
    };
  }
  if (locale === "uk") return { ...en, metaTitle: "Розрахунок LTV | hypo.online", title: "Розрахунок LTV для іпотеки", cta: "Запустити LTV перевірку" };
  if (locale === "ru") return { ...en, metaTitle: "Расчет LTV | hypo.online", title: "Расчет LTV для ипотеки", cta: "Запустить LTV проверку" };
  if (locale === "vi") return { ...en, metaTitle: "Tinh LTV | hypo.online", title: "Tinh LTV cho vay the chap", cta: "Chay LTV check" };
  if (locale === "ro") return { ...en, metaTitle: "Calcul LTV | hypo.online", title: "Calcul LTV pentru ipoteca", cta: "Ruleaza verificarea LTV" };
  if (locale === "es") return { ...en, metaTitle: "Calculo LTV | hypo.online", title: "Calculo LTV para hipotecas", cta: "Ejecutar verificacion LTV" };
  if (locale === "fr") return { ...en, metaTitle: "Calcul LTV | hypo.online", title: "Calcul LTV pour hypotheque", cta: "Lancer la verification LTV" };
  if (locale === "it") return {
    ...en,
    metaTitle: "Calcolo LTV | hypo.online",
    title: "Calcolo LTV per mutui",
    intro: "Capisci come il rapporto prestito/valore influisce su approvazione e tasso offerto.",
    bullets: [
      "Cosa significa un LTV più alto per rischio e scoring bancario.",
      "Come i fondi propri cambiano il risultato.",
      "Quando coinvolgere il broker per strutturare il finanziamento.",
    ],
    cta: "Avvia verifica LTV",
  };
  if (locale === "tr") return { ...en, metaTitle: "LTV hesaplama | hypo.online", title: "Ipotek icin LTV hesaplama", cta: "LTV kontrolunu calistir" };
  if (locale === "zh") return { ...en, metaTitle: "LTV计算 | hypo.online", title: "按揭LTV计算", cta: "开始LTV检查" };
  if (locale === "sk") return { ...en, metaTitle: "LTV výpočet | hypo.online", title: "LTV výpočet pre hypotéku", cta: "Spustiť LTV check" };
  if (locale === "de") return { ...en, metaTitle: "LTV-Berechnung | hypo.online", title: "LTV-Berechnung für Hypotheken", cta: "LTV-Check starten" };
  if (locale === "pl") return {
    ...en,
    metaTitle: "Kalkulacja LTV | hypo.online",
    title: "Kalkulacja LTV dla kredytu hipotecznego",
    intro: "Zrozum, jak wskaźnik LTV wpływa na akceptację i oferowane oprocentowanie.",
    bullets: [
      "Co wyższe LTV oznacza dla ryzyka i scoringu bankowego.",
      "Jak środki własne zmieniają wynik.",
      "Kiedy warto zaangażować brokera przy strukturze finansowania.",
    ],
    cta: "Uruchom weryfikację LTV",
  };
  return en;
}
