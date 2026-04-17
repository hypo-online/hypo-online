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
  if (locale === "uk") {
    return {
      metaTitle: "Іпотека і дохід | hypo.online",
      title: "Іпотека і дохід: що важливо для банку",
      intro: "Дізнайтеся, як банки зазвичай оцінюють найманих, ФОП і заявників із закордонним доходом.",
      bullets: [
        "Різниця між стабільним і ризикованішим профілем доходу.",
        "Типові документи, які пришвидшують схвалення.",
        "Коли краще спочатку покращити профіль і подати пізніше.",
      ],
      cta: "Перевірити профіль доходу",
    };
  }
  if (locale === "ru") {
    return {
      metaTitle: "Ипотека и доход | hypo.online",
      title: "Ипотека и доход: что важно для банка",
      intro: "Узнайте, как банки обычно оценивают наёмных, самозанятых и заявителей с доходом из-за рубежа.",
      bullets: [
        "Разница между стабильным и более рискованным профилем дохода.",
        "Типовые документы, ускоряющие одобрение.",
        "Когда лучше сначала улучшить профиль и подать позже.",
      ],
      cta: "Проверить профиль дохода",
    };
  }
  if (locale === "vi") {
    return {
      metaTitle: "Thế chấp và thu nhập | hypo.online",
      title: "Thế chấp và thu nhập: ngân hàng quan tâm điều gì",
      intro: "Xem ngân hàng thường đánh giá lao động hợp đồng, tự doanh và thu nhập nước ngoài thế nào.",
      bullets: [
        "Khác biệt giữa hồ sơ thu nhập ổn định và rủi ro hơn.",
        "Giấy tờ điển hình giúp phê duyệt nhanh hơn.",
        "Khi nên tối ưu hồ sơ trước rồi mới nộp đơn.",
      ],
      cta: "Kiểm tra hồ sơ thu nhập",
    };
  }
  if (locale === "ro") {
    return {
      metaTitle: "Ipotecă și venit | hypo.online",
      title: "Ipotecă și venit: ce contează pentru bancă",
      intro: "Vezi cum evaluează în mod obișnuit băncile angajații, PFA și veniturile din străinătate.",
      bullets: [
        "Diferența dintre un profil de venit stabil și unul mai riscant.",
        "Documente tipice care grăbesc aprobarea.",
        "Când e mai bine să optimizezi profilul înainte de cerere.",
      ],
      cta: "Verifică profilul de venit",
    };
  }
  if (locale === "es") {
    return {
      metaTitle: "Hipoteca e ingresos | hypo.online",
      title: "Hipoteca e ingresos: qué valora el banco",
      intro: "Descubre cómo suelen valorar los bancos a asalariados, autónomos y rentas del extranjero.",
      bullets: [
        "Diferencia entre un perfil de ingresos estable y otro más arriesgado.",
        "Documentos típicos que aceleran la aprobación.",
        "Cuándo conviene optimizar el perfil antes de solicitar.",
      ],
      cta: "Comprobar perfil de ingresos",
    };
  }
  if (locale === "fr") {
    return {
      metaTitle: "Hypothèque et revenu | hypo.online",
      title: "Hypothèque et revenu : ce qui compte pour la banque",
      intro: "Découvrez comment les banques évaluent salariés, indépendants et revenus à l'étranger.",
      bullets: [
        "Écart entre profil de revenu stable et plus risqué.",
        "Documents types qui accélèrent l'approbation.",
        "Quand optimiser d'abord le profil avant la demande.",
      ],
      cta: "Vérifier le profil de revenu",
    };
  }
  if (locale === "it") return {
    ...en,
    metaTitle: "Mutuo e reddito | hypo.online",
    title: "Mutuo e reddito: cosa conta per la banca",
    intro: "Scopri come le banche valutano in genere dipendenti, autonomi e richiedenti con reddito estero.",
    bullets: [
      "Differenza tra profilo di reddito stabile e più rischioso.",
      "Documenti tipici che accelerano l'approvazione.",
      "Quando conviene ottimizzare il profilo prima di fare domanda.",
    ],
    cta: "Verifica il profilo reddito",
  };
  if (locale === "tr") {
    return {
      metaTitle: "İpotek ve gelir | hypo.online",
      title: "İpotek ve gelir: bankalar neye bakar",
      intro: "Bankaların çalışanları, serbest meslek sahiplerini ve yurtdışı gelirini nasıl değerlendirdiğini görün.",
      bullets: [
        "Stabil ile daha riskli gelir profili arasındaki fark.",
        "Onayı hızlandıran tipik belgeler.",
        "Önce profili optimize edip sonra başvurmanın daha iyi olduğu durumlar.",
      ],
      cta: "Gelir profilini kontrol et",
    };
  }
  if (locale === "zh") {
    return {
      metaTitle: "按揭与收入 | hypo.online",
      title: "按揭与收入：银行关注什么",
      intro: "了解银行通常如何评估受雇、自雇与境外收入的申请人。",
      bullets: [
        "稳定与偏高风险收入画像的差异。",
        "有助于加快审批的常见材料。",
        "何时应先优化资料再申请。",
      ],
      cta: "检查收入画像",
    };
  }
  if (locale === "sk") {
    return {
      metaTitle: "Hypotéka a príjem | hypo.online",
      title: "Hypotéka a príjem: čo banku zaujíma",
      intro: "Zistite, ako banky zvyčajne posudzujú zamestnancov, živnostníkov a príjmy zo zahraničia.",
      bullets: [
        "Rozdiel medzi stabilným a rizikovejším profilom príjmu.",
        "Typické dokumenty, ktoré urýchlia schválenie.",
        "Kedy je lepšie najprv optimalizovať profil a žiadať neskôr.",
      ],
      cta: "Overiť profil príjmu",
    };
  }
  if (locale === "de") {
    return {
      metaTitle: "Hypothek und Einkommen | hypo.online",
      title: "Hypothek und Einkommen: worauf Banken achten",
      intro: "So bewerten Banken üblicherweise Angestellte, Selbstständige und Einkommen aus dem Ausland.",
      bullets: [
        "Unterschied zwischen stabiler und risikoreicherer Einkommenslage.",
        "Typische Nachweise, die die Entscheidung beschleunigen.",
        "Wann sich zuerst die Optimierung des Profils lohnt.",
      ],
      cta: "Einkommensprofil prüfen",
    };
  }
  if (locale === "pl") return {
    ...en,
    metaTitle: "Hipoteka i dochód | hypo.online",
    title: "Hipoteka i dochód: na co patrzą banki",
    intro: "Zobacz, jak banki zwykle oceniają osoby zatrudnione, samozatrudnione i klientów z dochodem zagranicznym.",
    bullets: [
      "Różnica między stabilnym a bardziej ryzykownym profilem dochodu.",
      "Typowe dokumenty, które przyspieszają akceptację.",
      "Kiedy lepiej najpierw zoptymalizować profil i złożyć wniosek później.",
    ],
    cta: "Sprawdź profil dochodu",
  };
  return en;
}
