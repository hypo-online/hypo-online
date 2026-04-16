import { NextResponse } from "next/server";

type LeadBody = {
  name: string;
  email: string;
  phone: string;
  locale: string;
  probability: number;
  signal: "green" | "yellow" | "red";
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

function isLeadBody(value: unknown): value is LeadBody {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.name === "string" &&
    typeof v.email === "string" &&
    typeof v.phone === "string" &&
    typeof v.locale === "string" &&
    typeof v.probability === "number" &&
    Number.isFinite(v.probability) &&
    (v.signal === "green" || v.signal === "yellow" || v.signal === "red") &&
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
        `Pravděpodobnost (model): ${lead.probability}%`,
        `Semafor: ${lead.signal}`,
        "",
        "Dotazníkové odpovědi nejsou uložené v systému.",
      ].join("\n"),
    }),
  });
}
