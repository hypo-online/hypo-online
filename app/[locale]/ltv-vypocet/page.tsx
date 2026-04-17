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
  if (locale === "uk") {
    return {
      metaTitle: "Розрахунок LTV | hypo.online",
      title: "Розрахунок LTV для іпотеки",
      intro: "Зрозумійте, як співвідношення кредиту до вартості впливає на схвалення та запропоновану ставку.",
      bullets: [
        "Що вищий LTV означає для ризику та банківського скорингу.",
        "Як власні кошти змінюють результат.",
        "Коли варто залучити брокера до структури фінансування.",
      ],
      cta: "Запустити перевірку LTV",
    };
  }
  if (locale === "ru") {
    return {
      metaTitle: "Расчёт LTV | hypo.online",
      title: "Расчёт LTV для ипотеки",
      intro: "Поймите, как соотношение кредита к стоимости влияет на одобрение и предлагаемую ставку.",
      bullets: [
        "Что более высокий LTV значит для риска и банковского скоринга.",
        "Как собственные средства меняют результат.",
        "Когда подключать брокера к структуре финансирования.",
      ],
      cta: "Запустить проверку LTV",
    };
  }
  if (locale === "vi") {
    return {
      metaTitle: "Tính LTV | hypo.online",
      title: "Tính LTV cho vay thế chấp",
      intro: "Hiểu cách tỷ lệ vay trên giá trị tài sản ảnh hưởng đến phê duyệt và lãi suất đề xuất.",
      bullets: [
        "LTV cao hơn nghĩa gì đối với rủi ro và điểm ngân hàng.",
        "Vốn tự có thay đổi kết quả thế nào.",
        "Khi nên nhờ môi giới cấu trúc tài chính.",
      ],
      cta: "Chạy kiểm tra LTV",
    };
  }
  if (locale === "ro") {
    return {
      metaTitle: "Calcul LTV | hypo.online",
      title: "Calcul LTV pentru ipotecă",
      intro: "Înțelege cum raportul credit/valoare influențează aprobarea și rata oferită.",
      bullets: [
        "Ce înseamnă un LTV mai mare pentru risc și scoring bancar.",
        "Cum își schimbă fondurile proprii rezultatul.",
        "Când merită implicat brokerul pentru structurare.",
      ],
      cta: "Rulează verificarea LTV",
    };
  }
  if (locale === "es") {
    return {
      metaTitle: "Cálculo LTV | hypo.online",
      title: "Cálculo LTV para hipotecas",
      intro: "Entiende cómo el préstamo respecto al valor impacta en la aprobación y el tipo ofrecido.",
      bullets: [
        "Qué implica un LTV más alto para el riesgo y el scoring bancario.",
        "Cómo los fondos propios cambian el resultado.",
        "Cuándo involucrar al broker para estructurar la financiación.",
      ],
      cta: "Ejecutar verificación LTV",
    };
  }
  if (locale === "fr") {
    return {
      metaTitle: "Calcul LTV | hypo.online",
      title: "Calcul LTV pour hypothèque",
      intro: "Comprenez comment le rapport prêt/valeur influence l’approbation et le taux proposé.",
      bullets: [
        "Ce qu’un LTV plus élevé signifie pour le risque et le scoring bancaire.",
        "Comment les fonds propres changent le résultat.",
        "Quand faire intervenir le courtier pour structurer le financement.",
      ],
      cta: "Lancer la vérification LTV",
    };
  }
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
  if (locale === "tr") {
    return {
      metaTitle: "LTV hesaplama | hypo.online",
      title: "İpotek için LTV hesaplama",
      intro: "Kredi/değer oranının onay ve teklif edilen faizi nasıl etkilediğini anlayın.",
      bullets: [
        "Daha yüksek LTV risk ve banka skoru için ne anlama gelir.",
        "Öz kaynaklar sonucu nasıl değiştirir.",
        "Finansman yapısı için ne zaman brokere danışılır.",
      ],
      cta: "LTV kontrolünü çalıştır",
    };
  }
  if (locale === "zh") {
    return {
      metaTitle: "LTV计算 | hypo.online",
      title: "按揭LTV计算",
      intro: "了解贷款价值比如何影响审批与银行给出的利率。",
      bullets: [
        "更高LTV对风险与银行评分的含义。",
        "自有资金如何改变结果。",
        "何时请经纪人协助设计融资结构。",
      ],
      cta: "开始LTV检查",
    };
  }
  if (locale === "sk") {
    return {
      metaTitle: "LTV výpočet | hypo.online",
      title: "LTV výpočet pre hypotéku",
      intro: "Pochopte, ako pomer úveru k hodnote ovplyvňuje schválenie a ponúkanú sadzbu.",
      bullets: [
        "Čo vyšší LTV znamená pre riziko a bankový scoring.",
        "Ako vlastné prostriedky menia výsledok.",
        "Kedy zapojiť makléra pri štruktúre financovania.",
      ],
      cta: "Spustiť LTV kontrolu",
    };
  }
  if (locale === "de") {
    return {
      metaTitle: "LTV-Berechnung | hypo.online",
      title: "LTV-Berechnung für Hypotheken",
      intro: "Verstehen Sie, wie die Beleihungsgrenze Genehmigung und angebotenen Zins beeinflusst.",
      bullets: [
        "Was ein höheres LTV für Risiko und Bank-Scoring bedeutet.",
        "Wie Eigenkapital das Ergebnis ändert.",
        "Wann ein Makler für die Finanzierungsstruktur einbezogen wird.",
      ],
      cta: "LTV-Check starten",
    };
  }
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
