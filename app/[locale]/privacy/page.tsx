import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return { title: t("title") };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");
  const copy = privacyCopy(locale);

  return (
    <div className="mx-auto max-w-lg px-4 pb-16 pt-10 sm:max-w-2xl sm:px-8">
      <Link
        href="/"
        className="text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
      >
        {t("back")}
      </Link>
      <h1 className="mt-8 text-[2rem] font-semibold leading-tight tracking-tight text-[var(--color-brand-950)]">
        {t("title")}
      </h1>
      <div className="prose prose-zinc mt-6 max-w-none space-y-4 text-[15px] leading-relaxed text-body">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
      </div>
      <section className="card-surface mt-8 p-6 text-sm leading-relaxed text-body">
        <h2 className="text-base font-semibold text-[var(--color-brand-950)]">
          {copy.title}
        </h2>
        <ul className="mt-3 space-y-2">
          <li>• {copy.b1}</li>
          <li>• {copy.b2}</li>
          <li>• {copy.b3}</li>
          <li>• {copy.b4}</li>
        </ul>
      </section>
    </div>
  );
}

function privacyCopy(locale: string) {
  const en = {
    title: "Data flow and retention windows",
    b1: "Questionnaire computation data: used during evaluation only, not stored permanently.",
    b2: "Contact data (name, email, phone): only for broker handoff and follow-up.",
    b3: "Analytics: anonymous events only when consent is provided.",
    b4: "Deletion request: can be sent directly from the result view after contact submission.",
  };
  if (locale === "cs") {
    return {
      title: "Tok dat a retenční okna",
      b1: "Výpočetní data z dotazníku: používáme pouze v průběhu vyhodnocení, trvale je neukládáme.",
      b2: "Kontaktní data (jméno, e-mail, telefon): pouze pro předání makléři a navazující kontakt.",
      b3: "Analytika: jen anonymní události při uděleném souhlasu.",
      b4: "Žádost o výmaz: lze odeslat po odeslání kontaktu přímo ve výsledku.",
    };
  }
  if (locale === "de") {
    return {
      title: "Datenfluss und Aufbewahrungsfenster",
      b1: "Fragebogen-Daten: nur während der Auswertung genutzt, nicht dauerhaft gespeichert.",
      b2: "Kontaktdaten (Name, E-Mail, Telefon): nur für Makler-Übergabe und Folgekontakt.",
      b3: "Analytik: nur anonyme Ereignisse bei erteilter Einwilligung.",
      b4: "Löschanfrage: direkt aus der Ergebnisansicht nach Kontaktübermittlung möglich.",
    };
  }
  if (locale === "pl") {
    return {
      title: "Przepływ danych i okresy retencji",
      b1: "Dane z ankiety: używane tylko podczas oceny, bez trwałego zapisu.",
      b2: "Dane kontaktowe (imię, e-mail, telefon): tylko do przekazania doradcy i kontaktu zwrotnego.",
      b3: "Analityka: tylko anonimowe zdarzenia po udzieleniu zgody.",
      b4: "Prośbę o usunięcie danych można wysłać bezpośrednio z widoku wyniku po wysłaniu kontaktu.",
    };
  }
  if (locale === "sk") {
    return {
      ...en,
      title: "Tok dát a retenčné okná",
      b1: "Výpočtové údaje z dotazníka: používajú sa len počas vyhodnotenia, trvalo sa neukladajú.",
      b2: "Kontaktné údaje (meno, e-mail, telefón): len na odovzdanie maklérovi a následný kontakt.",
    };
  }
  if (locale === "uk") {
    return {
      title: "Потік даних і строки зберігання",
      b1: "Дані анкети: використовуються лише під час оцінки, постійно не зберігаються.",
      b2: "Контактні дані (ім'я, email, телефон): лише для передачі брокеру та подальшого контакту.",
      b3: "Аналітика: лише анонімні події за умови згоди.",
      b4: "Запит на видалення: можна надіслати з екрану результату після надсилання контакту.",
    };
  }
  if (locale === "ru") {
    return {
      title: "Поток данных и сроки хранения",
      b1: "Данные анкеты: используются только во время оценки и не хранятся постоянно.",
      b2: "Контактные данные (имя, email, телефон): только для передачи брокеру и обратной связи.",
      b3: "Аналитика: только анонимные события при наличии согласия.",
      b4: "Запрос на удаление: можно отправить из экрана результата после отправки контакта.",
    };
  }
  if (locale === "vi") {
    return {
      title: "Luong du lieu va thoi gian luu tru",
      b1: "Du lieu bang hoi: chi dung trong luc danh gia, khong luu tru lau dai.",
      b2: "Du lieu lien he (ten, email, so dien thoai): chi de chuyen cho moi gioi va lien he tiep theo.",
      b3: "Phan tich: chi su kien an danh khi co su dong y.",
      b4: "Yeu cau xoa: co the gui truc tiep tu man hinh ket qua sau khi gui lien he.",
    };
  }
  if (locale === "ro") {
    return {
      title: "Fluxul datelor si perioadele de retentie",
      b1: "Datele din chestionar: folosite doar in timpul evaluarii, fara stocare permanenta.",
      b2: "Datele de contact (nume, email, telefon): doar pentru transfer catre broker si contact ulterior.",
      b3: "Analitica: doar evenimente anonime, cu consimtamant.",
      b4: "Cerere de stergere: poate fi trimisa direct din ecranul de rezultat dupa trimiterea contactului.",
    };
  }
  if (locale === "es") {
    return {
      title: "Flujo de datos y periodos de retencion",
      b1: "Datos del cuestionario: se usan solo durante la evaluacion, sin almacenamiento permanente.",
      b2: "Datos de contacto (nombre, email, telefono): solo para traspaso al broker y seguimiento.",
      b3: "Analitica: solo eventos anonimos con consentimiento.",
      b4: "Solicitud de borrado: puede enviarse desde la pantalla de resultado tras enviar el contacto.",
    };
  }
  if (locale === "fr") {
    return {
      title: "Flux des donnees et durees de retention",
      b1: "Donnees du questionnaire : utilisees uniquement pendant l'evaluation, sans conservation permanente.",
      b2: "Donnees de contact (nom, email, telephone) : uniquement pour le transfert au courtier et le suivi.",
      b3: "Analyse : uniquement des evenements anonymes avec consentement.",
      b4: "Demande de suppression : peut etre envoyee depuis l'ecran de resultat apres envoi du contact.",
    };
  }
  if (locale === "it") {
    return {
      title: "Flusso dei dati e tempi di conservazione",
      b1: "Dati del questionario: usati solo durante la valutazione, senza conservazione permanente.",
      b2: "Dati di contatto (nome, email, telefono): solo per passaggio al broker e follow-up.",
      b3: "Analisi: solo eventi anonimi con consenso.",
      b4: "Richiesta di cancellazione: inviabile dalla schermata risultato dopo l'invio del contatto.",
    };
  }
  if (locale === "tr") {
    return {
      title: "Veri akisi ve saklama sureleri",
      b1: "Anket verileri: sadece degerlendirme sirasinda kullanilir, kalici olarak saklanmaz.",
      b2: "Iletisim verileri (ad, email, telefon): yalnizca broker aktarimi ve takip icin.",
      b3: "Analitik: yalnizca onay verildiginde anonim olaylar.",
      b4: "Silme talebi: iletisim gonderiminden sonra sonuc ekranindan yapilabilir.",
    };
  }
  if (locale === "zh") {
    return {
      title: "数据流与保留周期",
      b1: "问卷计算数据：仅在评估期间使用，不做永久存储。",
      b2: "联系数据（姓名、邮箱、电话）：仅用于转交经纪人及后续联系。",
      b3: "分析：仅在用户同意后记录匿名事件。",
      b4: "删除请求：提交联系方式后，可在结果页直接发起。",
    };
  }
  return en;
}
