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
  if (locale === "uk") {
    return {
      metaTitle: "Скільки іпотеки можу отримати | hypo.online",
      title: "Скільки іпотеки я можу отримати?",
      intro: "Швидко перевірте, чи ваші очікування відповідають типовим лімітам банків і що може послабити результат.",
      bullets: [
        "Враховує тип доходу та горизонт часу.",
        "Світлофор і ймовірність замість загальної відповіді.",
        "Передача брокеру доступна й за жовтого чи червоного результату.",
      ],
      cta: "Перевірити орієнтовний ліміт",
    };
  }
  if (locale === "ru") {
    return {
      metaTitle: "Сколько ипотеки я могу получить | hypo.online",
      title: "Сколько ипотеки я могу получить?",
      intro: "Быстро проверьте, совпадают ли ваши ожидания с типичными лимитами банков и что может ослабить результат.",
      bullets: [
        "Учитывает тип дохода и горизонт.",
        "Светофор и вероятность вместо общего ответа.",
        "Передача брокеру доступна и при жёлтом или красном результате.",
      ],
      cta: "Проверить ориентировочный лимит",
    };
  }
  if (locale === "vi") {
    return {
      metaTitle: "Tôi có thể vay thế chấp bao nhiêu | hypo.online",
      title: "Tôi có thể vay thế chấp bao nhiêu?",
      intro: "Kiểm tra nhanh xem kỳ vọng của bạn có khớp hạn mức ngân hàng thông thường và điều gì có thể kéo kết quả xuống.",
      bullets: [
        "Xem xét loại thu nhập và khung thời gian.",
        "Đèn giao thông và xác suất thay vì câu trả lời chung chung.",
        "Bàn giao môi giới kể cả khi kết quả vàng hoặc đỏ.",
      ],
      cta: "Kiểm tra hạn mức ước tính",
    };
  }
  if (locale === "ro") {
    return {
      metaTitle: "Cât pot împrumuta pentru ipotecă | hypo.online",
      title: "Cât pot împrumuta pentru ipotecă?",
      intro: "Verifică rapid dacă așteptările tale se aliniază limitelor tipice ale băncilor și ce poate slăbi rezultatul.",
      bullets: [
        "Ține cont de tipul venitului și de termen.",
        "Semafor și probabilitate în loc de răspuns generic.",
        "Predare către broker și pentru rezultat galben sau roșu.",
      ],
      cta: "Verifică limita orientativă",
    };
  }
  if (locale === "es") {
    return {
      metaTitle: "Cuánta hipoteca puedo conseguir | hypo.online",
      title: "¿Cuánta hipoteca puedo conseguir?",
      intro: "Comprueba rápido si tus expectativas encajan con los límites habituales de los bancos y qué puede frenar el resultado.",
      bullets: [
        "Tiene en cuenta el tipo de ingreso y el plazo.",
        "Semáforo y probabilidad en lugar de una respuesta genérica.",
        "Traspaso al broker también con resultado amarillo o rojo.",
      ],
      cta: "Comprobar límite orientativo",
    };
  }
  if (locale === "fr") {
    return {
      metaTitle: "Combien puis-je emprunter en hypothèque | hypo.online",
      title: "Combien puis-je emprunter en hypothèque ?",
      intro: "Vérifiez vite si vos attentes correspondent aux limites bancaires habituelles et ce qui peut freiner le résultat.",
      bullets: [
        "Prend en compte le type de revenu et l’échéance.",
        "Feux et probabilité plutôt qu’une réponse générique.",
        "Transmission au courtier même pour un résultat jaune ou rouge.",
      ],
      cta: "Vérifier la limite indicative",
    };
  }
  if (locale === "it") return {
    ...en,
    metaTitle: "Quanto mutuo posso ottenere | hypo.online",
    title: "Quanto mutuo posso ottenere?",
    intro: "Verifica rapidamente se le tue aspettative sono in linea con i limiti tipici delle banche e cosa può frenare il risultato.",
    bullets: [
      "Tiene conto del tipo di reddito e delle tempistiche.",
      "Semaforo e probabilità invece di una risposta generica.",
      "Passaggio al broker disponibile anche con esito giallo o rosso.",
    ],
    cta: "Verifica il limite indicativo",
  };
  if (locale === "tr") {
    return {
      metaTitle: "Ne kadar ipotek alabilirim | hypo.online",
      title: "Ne kadar ipotek alabilirim?",
      intro: "Beklentilerinizin tipik banka limitleriyle uyumlu olup olmadığını ve sonucu neyin zayıflatabileceğini hızlıca kontrol edin.",
      bullets: [
        "Gelir türünü ve zaman çizelgesini dikkate alır.",
        "Genel cevap yerine trafik ışığı ve olasılık.",
        "Sarı veya kırmızı sonuçta da brokere aktarım mümkün.",
      ],
      cta: "Tahmini limiti kontrol et",
    };
  }
  if (locale === "zh") {
    return {
      metaTitle: "我能获得多少按揭 | hypo.online",
      title: "我能获得多少按揭额度？",
      intro: "快速核对您的预期是否符合银行常见额度，以及哪些因素会拉低结果。",
      bullets: [
        "考虑收入类型与时间规划。",
        "用红绿灯与概率代替笼统回答。",
        "黄灯或红灯结果也可转交经纪人。",
      ],
      cta: "查看预估额度",
    };
  }
  if (locale === "sk") {
    return {
      metaTitle: "Koľko hypotéky môžem získať | hypo.online",
      title: "Koľko hypotéky môžem získať?",
      intro: "Rýchlo overte, či vaše očakávania zodpovedajú typickým limitom bánk a čo môže výsledok oslabiť.",
      bullets: [
        "Berie do úvahy typ príjmu a časový horizont.",
        "Semafor a pravdepodobnosť namiesto všeobecnej odpovede.",
        "Odovzdanie maklérovi aj pri žltom alebo červenom výsledku.",
      ],
      cta: "Zistiť orientačný limit",
    };
  }
  if (locale === "de") {
    return {
      metaTitle: "Wie viel Hypothek kann ich erhalten | hypo.online",
      title: "Wie viel Hypothek kann ich erhalten?",
      intro: "Prüfen Sie schnell, ob Ihre Erwartungen zu typischen Banklimits passen und was das Ergebnis schwächen kann.",
      bullets: [
        "Berücksichtigt Einkunftsart und Zeithorizont.",
        "Ampel und Wahrscheinlichkeit statt generischer Antwort.",
        "Übergabe an den Makler auch bei gelbem oder rotem Ergebnis.",
      ],
      cta: "Richtwert prüfen",
    };
  }
  if (locale === "pl") return {
    ...en,
    metaTitle: "Ile kredytu hipotecznego mogę dostać | hypo.online",
    title: "Ile kredytu hipotecznego mogę dostać?",
    intro: "Szybko sprawdź, czy Twoje oczekiwania mieszczą się w typowych limitach banków i co może osłabić wynik.",
    bullets: [
      "Uwzględnia typ dochodu i horyzont czasowy.",
      "Semafor i prawdopodobieństwo zamiast ogólnej odpowiedzi.",
      "Przekazanie do brokera dostępne także przy żółtym i czerwonym wyniku.",
    ],
    cta: "Sprawdź orientacyjny limit",
  };
  return en;
}
