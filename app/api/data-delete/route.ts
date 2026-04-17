import { NextResponse } from "next/server";

type DeleteBody = {
  email: string;
  locale: string;
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isDeleteBody(body)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const inbox = process.env.BROKER_NOTIFY_EMAIL;
  if (inbox && process.env.RESEND_API_KEY) {
    await sendDeletionRequest(inbox, body);
  }

  return NextResponse.json({ ok: true });
}

function isDeleteBody(value: unknown): value is DeleteBody {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.email === "string" &&
    v.email.includes("@") &&
    typeof v.locale === "string"
  );
}

async function sendDeletionRequest(to: string, payload: DeleteBody) {
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
      subject: "GDPR request — data deletion",
      text: [
        "User requested data deletion.",
        `Email: ${payload.email}`,
        `Locale: ${payload.locale}`,
        "",
        "Please remove contact records from broker workflow systems and confirm completion.",
      ].join("\n"),
    }),
  });
}
