import { NextResponse } from "next/server";
import {
  evaluateMortgageFit,
  type QuizPayload,
} from "@/lib/evaluation";

/**
 * Computes a coarse result in memory. Do not log request bodies in production —
 * they contain user inputs we do not retain.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isQuizPayload(body)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const resultKey = evaluateMortgageFit(body);

  return NextResponse.json({ resultKey });
}

function isQuizPayload(value: unknown): value is QuizPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    isIntent(v.intent) &&
    isIncome(v.income) &&
    isTimeline(v.timeline)
  );
}

function isIntent(v: unknown): v is QuizPayload["intent"] {
  return v === "purchase" || v === "refinance" || v === "explore";
}

function isIncome(v: unknown): v is QuizPayload["income"] {
  return v === "employed" || v === "self" || v === "abroad";
}

function isTimeline(v: unknown): v is QuizPayload["timeline"] {
  return v === "soon" || v === "mid" || v === "unknown";
}
