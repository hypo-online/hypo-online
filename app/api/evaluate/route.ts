import { NextResponse } from "next/server";
import {
  evaluateMortgageFit,
  type QuizPayload,
} from "@/lib/evaluation";
import { evaluateEnhancedMortgageFit } from "@/lib/enhanced-evaluation";
import type { EnhancedQuizAnswers } from "@/lib/questionnaire/types";
import { validateEnhancedAnswers } from "@/lib/questionnaire/validate";

/**
 * Computes probability + semaphore in memory.
 * Do not log request bodies in production — they contain user inputs we do not retain.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (isEnhancedBody(body)) {
    const err = validateEnhancedAnswers(body.answers);
    if (err) {
      return NextResponse.json({ error: "Invalid payload", code: err }, { status: 400 });
    }
    const { probability, signal, factors, simulatedImprovement } =
      evaluateEnhancedMortgageFit(body.answers);
    return NextResponse.json({
      probability,
      signal,
      factors,
      simulatedImprovement,
    });
  }

  if (!isQuizPayload(body)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { probability, signal, factors, simulatedImprovement } =
    evaluateMortgageFit(body);

  return NextResponse.json({
    probability,
    signal,
    factors,
    simulatedImprovement,
  });
}

function isEnhancedBody(
  value: unknown,
): value is { v: 2; answers: EnhancedQuizAnswers } {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return v.v === 2 && typeof v.answers === "object" && v.answers !== null;
}

function isQuizPayload(value: unknown): value is QuizPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return isIntent(v.intent) && isIncome(v.income) && isTimeline(v.timeline);
}

function isIntent(v: unknown): v is QuizPayload["intent"] {
  return (
    v === "purchase" ||
    v === "refinance" ||
    v === "american" ||
    v === "explore"
  );
}

function isIncome(v: unknown): v is QuizPayload["income"] {
  return v === "employed" || v === "self" || v === "abroad";
}

function isTimeline(v: unknown): v is QuizPayload["timeline"] {
  return v === "soon" || v === "mid" || v === "unknown";
}
