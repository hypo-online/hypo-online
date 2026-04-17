import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = calcCopy(locale);
  return {
    title: copy.metaTitle,
  };
}

export default async function HypotekaKalkulackaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = calcCopy(locale);
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-8">
      <Link
        href="/"
        className="text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
      >
        ← hypo.online
      </Link>

      <h1 className="mt-8 text-[2rem] font-semibold leading-tight tracking-tight text-[var(--color-brand-950)]">
        {copy.h1}
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-body">
        {copy.p1}
      </p>

      <section className="card-surface mt-8 p-6">
        <h2 className="text-xl font-semibold text-[var(--color-brand-950)]">
          {copy.s1Title}
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-body">
          <li>
            •{" "}
            {copy.s1b1}
          </li>
          <li>
            •{" "}
            {copy.s1b2}
          </li>
          <li>
            •{" "}
            {copy.s1b3}
          </li>
        </ul>
      </section>

      <section className="card-surface mt-8 space-y-4 p-6">
        <h2 className="text-xl font-semibold text-[var(--color-brand-950)]">
          {copy.s2Title}
        </h2>
        <p className="text-sm leading-relaxed text-body">
          {copy.s2p1}
        </p>
        <p className="text-sm leading-relaxed text-body">
          {copy.s2p2}
        </p>
      </section>

      <section className="card-surface mt-8 space-y-4 p-6">
        <h2 className="text-xl font-semibold text-[var(--color-brand-950)]">
          {copy.s3Title}
        </h2>
        <ul className="space-y-2 text-sm text-body">
          <li>• {copy.s3b1}</li>
          <li>• {copy.s3b2}</li>
          <li>• {copy.s3b3}</li>
        </ul>
      </section>

      <div className="mt-8 rounded-xl finance-panel p-6">
        <h2 className="text-xl font-semibold text-white">
          {copy.ctaTitle}
        </h2>
        <p className="mt-2 text-sm text-white/90">
          {copy.ctaText}
        </p>
        <Link
          href="/quiz"
          className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-[#052e4d] transition hover:bg-white/95 active:scale-[0.98]"
        >
          {copy.ctaButton}
        </Link>
      </div>
    </div>
  );
}

function calcCopy(locale: string) {
  const en = {
    metaTitle: "Mortgage calculator | hypo.online",
    h1: "Mortgage calculator: orientation without chaos",
    p1: "This page explains how to quickly estimate whether a mortgage is realistic for your profile. It is indicative, not a binding bank approval.",
    s1Title: "What this calculator actually solves",
    s1b1: "Fast pre-screening before entering a full application.",
    s1b2: "Probability signal (percentage + traffic light) instead of vague “maybe”.",
    s1b3: "Concrete next step for you and your broker.",
    s2Title: "How to read your result",
    s2p1: "Green is not automatic approval and red is not game over. It is a risk map: income, liabilities, own funds, timing, and documentation.",
    s2p2: "The highest value comes when the result is followed by an experienced broker who adjusts your profile before submission.",
    s3Title: "Most common applicant mistakes",
    s3b1: "Starting too late when deadlines are already tight.",
    s3b2: "Incomplete income and liability documentation.",
    s3b3: "Underestimating own costs beyond purchase price.",
    ctaTitle: "Want a fast indicative result now?",
    ctaText: "It takes around 2 minutes and returns a probability plus a recommended next step.",
    ctaButton: "Start quick check",
  };
  if (locale === "cs") {
    return {
      metaTitle: "Hypotéka kalkulačka | hypo.online",
      h1: "Hypotéka kalkulačka: orientace bez chaosu",
      p1: "Tato stránka vysvětluje, jak rychle odhadnout, jestli je hypotéka pro váš profil realistická. Jde o orientační výsledek, ne závazné schválení banky.",
      s1Title: "Co kalkulačka reálně řeší",
      s1b1: "Rychlý předběžný screening, než půjdete do plné žádosti.",
      s1b2: "Signál pravděpodobnosti (procento + semafor) místo nejasného „možná“.",
      s1b3: "Konkrétní další krok pro vás i makléře.",
      s2Title: "Jak číst výsledek",
      s2p1: "Zelená neznamená automatické schválení a červená neznamená konec. Ve skutečnosti jde o mapu rizik: příjem, závazky, vlastní zdroje, časování a dokumentace.",
      s2p2: "Nejvyšší hodnotu má výsledek, když na něj naváže zkušený makléř a navrhne úpravy profilu před podáním.",
      s3Title: "Nejčastější chyby žadatelů",
      s3b1: "Řešit banku příliš pozdě (když už tlačí termín).",
      s3b2: "Nedotažené podklady k příjmu a závazkům.",
      s3b3: "Podcenění vlastních nákladů mimo kupní cenu.",
      ctaTitle: "Chcete rychlý orientační výsledek teď?",
      ctaText: "Vyplnění zabere zhruba 2 minuty a dostanete procento + doporučený další krok.",
      ctaButton: "Spustit rychlý check",
    };
  }
  if (locale === "de") {
    return {
      metaTitle: "Hypothekenrechner | hypo.online",
      h1: "Hypothekenrechner: Orientierung ohne Chaos",
      p1: "Diese Seite erklärt, wie Sie schnell einschätzen, ob eine Hypothek für Ihr Profil realistisch ist. Das Ergebnis ist indikativ, keine verbindliche Bankzusage.",
      s1Title: "Was dieser Rechner wirklich leistet",
      s1b1: "Schnelles Pre-Screening, bevor Sie in den vollen Antrag gehen.",
      s1b2: "Wahrscheinlichkeitssignal (Prozent + Ampel) statt vagem „vielleicht“.",
      s1b3: "Konkreter nächster Schritt für Sie und den Makler.",
      s2Title: "So lesen Sie das Ergebnis",
      s2p1: "Grün ist keine automatische Zusage und Rot ist nicht das Ende. Es ist eine Risikokarte: Einkommen, Verbindlichkeiten, Eigenmittel, Timing und Dokumente.",
      s2p2: "Den größten Nutzen bringt ein erfahrener Makler, der Ihr Profil vor der Einreichung nachschärft.",
      s3Title: "Typische Fehler von Antragstellern",
      s3b1: "Zu spät starten, wenn Termine schon drängen.",
      s3b2: "Unvollständige Nachweise zu Einkommen und Verbindlichkeiten.",
      s3b3: "Eigenkosten neben dem Kaufpreis unterschätzen.",
      ctaTitle: "Jetzt ein schnelles indikatives Ergebnis?",
      ctaText: "Dauert rund 2 Minuten und liefert Wahrscheinlichkeit plus empfohlenen nächsten Schritt.",
      ctaButton: "Schnellprüfung starten",
    };
  }
  if (locale === "pl") return {
    ...en,
    metaTitle: "Kalkulator hipoteczny | hypo.online",
    h1: "Kalkulator hipoteczny: orientacja bez chaosu",
    p1: "Ta strona wyjaśnia, jak szybko oszacować, czy hipoteka jest realistyczna dla Twojego profilu. To wynik orientacyjny, nie wiążąca decyzja banku.",
    s1Title: "Co ten kalkulator realnie rozwiązuje",
    s1b1: "Szybki wstępny screening, zanim wejdziesz w pełny proces wniosku.",
    s1b2: "Sygnał prawdopodobieństwa (procent + semafor) zamiast ogólnego „może”.",
    s1b3: "Konkretny kolejny krok dla Ciebie i brokera.",
    s2Title: "Jak czytać wynik",
    s2p1: "Zielony nie oznacza automatycznej zgody, a czerwony nie oznacza końca. To mapa ryzyka: dochód, zobowiązania, środki własne, czas i dokumenty.",
    s2p2: "Największą wartość daje wtedy, gdy doświadczony broker przejmie wynik i dopracuje profil przed złożeniem wniosku.",
    s3Title: "Najczęstsze błędy wnioskodawców",
    s3b1: "Zaczynanie zbyt późno, gdy terminy już napierają.",
    s3b2: "Niepełna dokumentacja dochodów i zobowiązań.",
    s3b3: "Niedoszacowanie kosztów własnych poza ceną zakupu.",
    ctaTitle: "Chcesz szybki wynik orientacyjny teraz?",
    ctaText: "Zajmuje to około 2 minuty i zwraca prawdopodobieństwo oraz rekomendowany kolejny krok.",
    ctaButton: "Uruchom szybką weryfikację",
  };
  if (locale === "sk") {
    return {
      metaTitle: "Hypotekárna kalkulačka | hypo.online",
      h1: "Hypotekárna kalkulačka: orientácia bez chaosu",
      p1: "Táto stránka vysvetľuje, ako rýchlo odhadnúť, či je hypotéka pre váš profil realistická. Ide o orientačný výsledok, nie záväzné schválenie banky.",
      s1Title: "Čo kalkulačka reálne rieši",
      s1b1: "Rýchly predbežný screening pred plnou žiadosťou.",
      s1b2: "Signál pravdepodobnosti (percento + semafor) namiesto nejasného „možno“.",
      s1b3: "Konkrétny ďalší krok pre vás a makléra.",
      s2Title: "Ako čítať výsledok",
      s2p1: "Zelená nie je automatické schválenie a červená nie je koniec. Ide o mapu rizík: príjem, záväzky, vlastné zdroje, čas a dokumenty.",
      s2p2: "Najväčší prínos má skúsený maklér, ktorý doladí profil pred podaním.",
      s3Title: "Najčastejšie chyby žiadateľov",
      s3b1: "Začať neskoro, keď už tlačia termíny.",
      s3b2: "Neúplné podklady k príjmu a záväzkom.",
      s3b3: "Podcenenie vlastných nákladov okrem kúpnej ceny.",
      ctaTitle: "Chcete rýchly orientačný výsledok teraz?",
      ctaText: "Trvá asi 2 minúty a vráti percento aj odporúčaný ďalší krok.",
      ctaButton: "Spustiť rýchlu kontrolu",
    };
  }
  if (locale === "uk") {
    return {
      metaTitle: "Іпотечний калькулятор | hypo.online",
      h1: "Іпотечний калькулятор: орієнтація без хаосу",
      p1: "Сторінка пояснює, як швидко оцінити, чи іпотека реалістична для вашого профілю. Це орієнтовний результат, не обов’язкове схвалення банку.",
      s1Title: "Що насправді дає калькулятор",
      s1b1: "Швидкий попередній скринінг до повної заявки.",
      s1b2: "Сигнал імовірності (відсоток + світлофор) замість розмитого «можливо».",
      s1b3: "Конкретний наступний крок для вас і брокера.",
      s2Title: "Як читати результат",
      s2p1: "Зелений — не автоматичне схвалення, червоний — не кінець. Це карта ризиків: дохід, зобов’язання, власні кошти, час і документи.",
      s2p2: "Найбільша цінність — коли досвідчений брокер підлаштує профіль перед поданням.",
      s3Title: "Типові помилки позичальників",
      s3b1: "Починати пізно, коли терміни вже тиснуть.",
      s3b2: "Неповні підтвердження доходів і зобов’язань.",
      s3b3: "Недооцінка власних витрат окрім ціни купівлі.",
      ctaTitle: "Швидкий орієнтовний результат зараз?",
      ctaText: "Займає близько 2 хвилин і дає ймовірність плюс рекомендований крок.",
      ctaButton: "Запустити швидку перевірку",
    };
  }
  if (locale === "ru") {
    return {
      metaTitle: "Ипотечный калькулятор | hypo.online",
      h1: "Ипотечный калькулятор: ориентация без хаоса",
      p1: "Страница объясняет, как быстро оценить, реалистична ли ипотека для вашего профиля. Это ориентировочный результат, не обязательное одобрение банка.",
      s1Title: "Что калькулятор решает на самом деле",
      s1b1: "Быстрый предварительный скрининг до полной заявки.",
      s1b2: "Сигнал вероятности (процент + светофор) вместо размытого «может быть».",
      s1b3: "Конкретный следующий шаг для вас и брокера.",
      s2Title: "Как читать результат",
      s2p1: "Зелёный — не автоматическое одобрение, красный — не конец. Это карта рисков: доход, обязательства, собственные средства, сроки и документы.",
      s2p2: "Максимум пользы, когда опытный брокер дорабатывает профиль до подачи.",
      s3Title: "Типичные ошибки заёмщиков",
      s3b1: "Начинать поздно, когда сроки уже давят.",
      s3b2: "Неполные подтверждения доходов и обязательств.",
      s3b3: "Недооценка собственных расходов помимо цены покупки.",
      ctaTitle: "Нужен быстрый ориентировочный результат?",
      ctaText: "Занимает около 2 минут и возвращает вероятность и рекомендованный шаг.",
      ctaButton: "Запустить быструю проверку",
    };
  }
  if (locale === "vi") {
    return {
      metaTitle: "Máy tính thế chấp | hypo.online",
      h1: "Máy tính thế chấp: định hướng rõ ràng",
      p1: "Trang này giải thích cách nhanh chóng ước tính khoản vay thế chấp có phù hợp hồ sơ của bạn hay không. Kết quả mang tính tham khảo, không phải phê duyệt ràng buộc của ngân hàng.",
      s1Title: "Công cụ thực sự giải quyết điều gì",
      s1b1: "Sàng lọc sơ bộ nhanh trước khi làm hồ sơ đầy đủ.",
      s1b2: "Tín hiệu xác suất (phần trăm + đèn giao thông) thay vì câu trả lời mơ hồ.",
      s1b3: "Bước tiếp theo cụ thể cho bạn và môi giới.",
      s2Title: "Cách đọc kết quả",
      s2p1: "Xanh không phải tự động duyệt, đỏ không phải hết đường. Đây là bản đồ rủi ro: thu nhập, nợ, vốn tự có, thời hạn và hồ sơ.",
      s2p2: "Giá trị cao nhất khi môi giới có kinh nghiệm chỉnh hồ sơ trước khi nộp.",
      s3Title: "Lỗi thường gặp của người vay",
      s3b1: "Bắt đầu quá muộn khi đã sát hạn.",
      s3b2: "Chứng từ thu nhập và nợ chưa đủ.",
      s3b3: "Đánh giá thấp chi phí tự túc ngoài giá mua.",
      ctaTitle: "Muốn kết quả tham khảo nhanh ngay?",
      ctaText: "Khoảng 2 phút và trả về xác suất cùng bước tiếp theo gợi ý.",
      ctaButton: "Bắt đầu kiểm tra nhanh",
    };
  }
  if (locale === "ro") {
    return {
      metaTitle: "Calculator ipotecar | hypo.online",
      h1: "Calculator ipotecar: orientare fără haos",
      p1: "Pagina explică cum poți estima rapid dacă ipoteca este realistă pentru profilul tău. Rezultatul este orientativ, nu o aprobare bancară obligatorie.",
      s1Title: "Ce rezolvă de fapt calculatorul",
      s1b1: "Pre-screening rapid înainte de dosarul complet.",
      s1b2: "Semnal de probabilitate (procent + semafor) în loc de un „poate” vag.",
      s1b3: "Pasul următor concret pentru tine și broker.",
      s2Title: "Cum citești rezultatul",
      s2p1: "Verde nu înseamnă aprobare automată, roșu nu înseamnă final. Este o hartă a riscurilor: venit, datorii, fonduri proprii, termene și documente.",
      s2p2: "Cea mai mare valoare vine când un broker experimentat ajustează profilul înainte de depunere.",
      s3Title: "Cele mai frecvente greșeli",
      s3b1: "Să începi prea târziu când termenele sunt deja strânse.",
      s3b2: "Documentație incompletă pentru venituri și datorii.",
      s3b3: "Subestimarea costurilor proprii dincolo de prețul de cumpărare.",
      ctaTitle: "Vrei un rezultat orientativ rapid acum?",
      ctaText: "Durează circa 2 minute și returnează probabilitatea plus pasul recomandat.",
      ctaButton: "Pornește verificarea rapidă",
    };
  }
  if (locale === "es") {
    return {
      metaTitle: "Calculadora hipotecaria | hypo.online",
      h1: "Calculadora hipotecaria: orientación sin caos",
      p1: "Esta página explica cómo estimar rápido si una hipoteca es realista para tu perfil. Es un resultado orientativo, no una aprobación bancaria vinculante.",
      s1Title: "Qué resuelve de verdad esta calculadora",
      s1b1: "Pre-evaluación rápida antes de la solicitud completa.",
      s1b2: "Señal de probabilidad (porcentaje + semáforo) en lugar de un «quizás» vago.",
      s1b3: "Siguiente paso concreto para ti y el broker.",
      s2Title: "Cómo leer el resultado",
      s2p1: "El verde no es aprobación automática y el rojo no es el fin. Es un mapa de riesgos: ingresos, deudas, fondos propios, plazos y documentación.",
      s2p2: "El mayor valor llega cuando un broker experimentado ajusta tu perfil antes de presentar.",
      s3Title: "Errores frecuentes de los solicitantes",
      s3b1: "Empezar demasiado tarde con plazos ya ajustados.",
      s3b2: "Documentación incompleta de ingresos y deudas.",
      s3b3: "Subestimar costes propios más allá del precio de compra.",
      ctaTitle: "¿Quieres un resultado orientativo rápido ya?",
      ctaText: "Tarda unos 2 minutos y devuelve probabilidad y siguiente paso recomendado.",
      ctaButton: "Iniciar verificación rápida",
    };
  }
  if (locale === "fr") {
    return {
      metaTitle: "Calculateur hypothécaire | hypo.online",
      h1: "Calculateur hypothécaire : orientation sans chaos",
      p1: "Cette page explique comment estimer rapidement si un crédit immobilier est réaliste pour votre profil. C'est un résultat indicatif, pas une décision bancaire contraignante.",
      s1Title: "Ce que ce calculateur résout vraiment",
      s1b1: "Pré-évaluation rapide avant le dossier complet.",
      s1b2: "Signal de probabilité (pourcentage + feux) au lieu d'un « peut-être » flou.",
      s1b3: "Prochaine étape concrète pour vous et le courtier.",
      s2Title: "Comment lire le résultat",
      s2p1: "Le vert n'est pas une approbation automatique et le rouge n'est pas la fin. C'est une carte des risques : revenus, dettes, fonds propres, délais et documents.",
      s2p2: "La plus grande valeur vient d'un courtier expérimenté qui ajuste le profil avant dépôt.",
      s3Title: "Erreurs fréquentes des demandeurs",
      s3b1: "Commencer trop tard quand les délais sont déjà serrés.",
      s3b2: "Justificatifs de revenus et dettes incomplets.",
      s3b3: "Sous-estimer les coûts propres au-delà du prix d'achat.",
      ctaTitle: "Un résultat indicatif rapide maintenant ?",
      ctaText: "Environ 2 minutes pour une probabilité et une prochaine étape recommandée.",
      ctaButton: "Démarrer la vérification rapide",
    };
  }
  if (locale === "it") return {
    ...en,
    metaTitle: "Calcolatore mutuo | hypo.online",
    h1: "Calcolatore mutuo: orientamento senza caos",
    p1: "Questa pagina spiega come stimare rapidamente se un mutuo è realistico per il tuo profilo. È un risultato indicativo, non un'approvazione bancaria vincolante.",
    s1Title: "Cosa risolve davvero questo calcolatore",
    s1b1: "Pre-screening rapido prima di entrare nella richiesta completa.",
    s1b2: "Segnale di probabilità (percentuale + semaforo) invece di un generico «forse».",
    s1b3: "Prossimo passo concreto per te e per il broker.",
    s2Title: "Come leggere il risultato",
    s2p1: "Il verde non significa approvazione automatica e il rosso non significa fine del percorso. È una mappa dei rischi: reddito, passività, fondi propri, tempistiche e documenti.",
    s2p2: "Il massimo valore si ottiene quando un broker esperto segue il risultato e ottimizza il profilo prima dell'invio.",
    s3Title: "Errori più comuni dei richiedenti",
    s3b1: "Partire troppo tardi quando le scadenze sono già strette.",
    s3b2: "Documentazione di reddito e passività incompleta.",
    s3b3: "Sottovalutare i costi propri oltre al prezzo di acquisto.",
    ctaTitle: "Vuoi subito un risultato indicativo veloce?",
    ctaText: "Servono circa 2 minuti e ottieni probabilità e prossimo passo consigliato.",
    ctaButton: "Avvia verifica rapida",
  };
  if (locale === "tr") {
    return {
      metaTitle: "İpotek hesaplayıcı | hypo.online",
      h1: "İpotek hesaplayıcı: karmaşa olmadan yönlendirme",
      p1: "Bu sayfa, ipoteğin profiliniz için gerçekçi olup olmadığını hızlıca nasıl değerlendireceğinizi anlatır. Sonuç gösterge niteliğindedir, bağlayıcı banka onayı değildir.",
      s1Title: "Hesaplayıcı gerçekte neyi çözer",
      s1b1: "Tam başvuruya girmeden önce hızlı ön eleme.",
      s1b2: "Belirsiz „belki“ yerine olasılık sinyali (yüzde + trafik ışığı).",
      s1b3: "Sizin ve broker için somut sonraki adım.",
      s2Title: "Sonucu nasıl okursunuz",
      s2p1: "Yeşil otomatik onay değil, kırmızı da son değil. Gelir, borçlar, öz kaynak, zamanlama ve belgelerden oluşan bir risk haritasıdır.",
      s2p2: "En çok değer, başvurudan önce profili deneyimli bir brokerın düzenlemesinden gelir.",
      s3Title: "Başvuranların sık hataları",
      s3b1: "Son tarihler sıkışmışken geç başlamak.",
      s3b2: "Gelir ve borç belgelerinin eksik olması.",
      s3b3: "Satın alma fiyatının ötesindeki öz maliyetleri hafife almak.",
      ctaTitle: "Şimdi hızlı gösterge sonuç ister misiniz?",
      ctaText: "Yaklaşık 2 dakika sürer; olasılık ve önerilen sonraki adımı verir.",
      ctaButton: "Hızlı kontrolü başlat",
    };
  }
  if (locale === "zh") {
    return {
      metaTitle: "按揭计算器 | hypo.online",
      h1: "按揭计算器：清晰快速判断",
      p1: "本页说明如何快速判断按揭是否适合你的情况。结果为参考性质，并非银行正式批复。",
      s1Title: "计算器实际解决什么",
      s1b1: "在完整申请前进行快速预筛。",
      s1b2: "用概率信号（百分比+红绿灯）代替模糊的“也许”。",
      s1b3: "为你和经纪人提供明确的下一步。",
      s2Title: "如何理解结果",
      s2p1: "绿色不代表自动通过，红色也不代表结束。这是风险图：收入、负债、自有资金、时间与材料。",
      s2p2: "最有价值的是在提交前由经验丰富的经纪人优化资料。",
      s3Title: "申请人常见错误",
      s3b1: "临近截止才开始。",
      s3b2: "收入与负债证明不完整。",
      s3b3: "低估购房款以外的自有成本。",
      ctaTitle: "想马上获得快速参考结果？",
      ctaText: "约2分钟，给出概率与建议的下一步。",
      ctaButton: "开始快速评估",
    };
  }
  return en;
}
