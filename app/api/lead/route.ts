import { NextResponse } from "next/server";
import {
  BROKER_LANGUAGE_OPTIONS,
  D1_AGE_BANDS,
  D2_NATIONALITIES,
  D4_CONTACT_CHANNELS,
} from "@/lib/questionnaire/types";

type LeadBody = {
  name: string;
  email: string;
  phone: string;
  locale: string;
  probability: number;
  signal: "green" | "yellow" | "red";
  intent: "purchase" | "refinance" | "american" | "explore";
  income: "employed" | "self" | "abroad";
  timeline: "soon" | "mid" | "unknown";
  applicantAgeBand: string;
  applicantNationality: string;
  applicantPreferredLanguage: string;
  applicantPreferredLanguageCustom?: string;
  applicantContactChannel: string;
  consents: {
    brokerContact: boolean;
  };
};

/**
 * Forwards contact + coarse score to broker tooling. Wire RESEND_* or CRM later.
 * Does not write questionnaire answers — those should never be sent here.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isLeadBody(body)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const brokerInbox = process.env.BROKER_NOTIFY_EMAIL;
  if (brokerInbox && process.env.RESEND_API_KEY) {
    await sendBrokerEmail(brokerInbox, body);
  } else if (process.env.NODE_ENV === "development") {
    console.info(
      "[lead] received (dev only; configure BROKER_NOTIFY_EMAIL + RESEND_API_KEY to email)",
    );
  }

  return NextResponse.json({ ok: true });
}

function isBrokerLang(s: unknown): s is string {
  return typeof s === "string" && (BROKER_LANGUAGE_OPTIONS as readonly string[]).includes(s);
}

function isLeadBody(value: unknown): value is LeadBody {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  const band = v.applicantAgeBand;
  const nat = v.applicantNationality;
  const lang = v.applicantPreferredLanguage;
  const langCustom =
    typeof v.applicantPreferredLanguageCustom === "string"
      ? v.applicantPreferredLanguageCustom.trim()
      : "";
  const channel = v.applicantContactChannel;

  if (
    typeof band !== "string" ||
    !(D1_AGE_BANDS as readonly string[]).includes(band) ||
    typeof nat !== "string" ||
    !(D2_NATIONALITIES as readonly string[]).includes(nat) ||
    typeof channel !== "string" ||
    !(D4_CONTACT_CHANNELS as readonly string[]).includes(channel) ||
    !isBrokerLang(lang)
  ) {
    return false;
  }

  if (lang === "other") {
    if (langCustom.length < 2) return false;
  } else if (langCustom.length > 0) {
    return false;
  }

  return (
    typeof v.name === "string" &&
    typeof v.email === "string" &&
    typeof v.phone === "string" &&
    typeof v.locale === "string" &&
    typeof v.probability === "number" &&
    Number.isFinite(v.probability) &&
    (v.signal === "green" || v.signal === "yellow" || v.signal === "red") &&
    (v.intent === "purchase" ||
      v.intent === "refinance" ||
      v.intent === "american" ||
      v.intent === "explore") &&
    (v.income === "employed" || v.income === "self" || v.income === "abroad") &&
    (v.timeline === "soon" || v.timeline === "mid" || v.timeline === "unknown") &&
    typeof v.consents === "object" &&
    v.consents !== null &&
    (v.consents as Record<string, unknown>).brokerContact === true &&
    v.name.trim().length > 0 &&
    v.email.includes("@")
  );
}

async function sendBrokerEmail(to: string, lead: LeadBody) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM ?? "Hypo <onboarding@resend.dev>",
      to: [to],
      subject: `Nový lead — hypo.online (${lead.signal.toUpperCase()} ${lead.probability}%)`,
      text: [
        `Jméno: ${lead.name}`,
        `E-mail: ${lead.email}`,
        `Telefon: ${lead.phone}`,
        `Locale: ${lead.locale}`,
        `Věkové pásmo: ${lead.applicantAgeBand}`,
        `Státní příslušnost / region: ${lead.applicantNationality}`,
        `Preferovaný jazyk (makléř/banka): ${lead.applicantPreferredLanguage}${
          lead.applicantPreferredLanguage === "other" && lead.applicantPreferredLanguageCustom
            ? ` — ${lead.applicantPreferredLanguageCustom}`
            : ""
        }`,
        `Preferovaný kontakt: ${lead.applicantContactChannel}`,
        `Pravděpodobnost (model): ${lead.probability}%`,
        `Semafor: ${lead.signal}`,
        `Typ záměru: ${lead.intent}`,
        `Typ příjmu: ${lead.income}`,
        `Časový horizont: ${lead.timeline}`,
        "",
        "Dotazníkové odpovědi nejsou uložené v systému.",
      ].join("\n"),
    }),
  });
}
