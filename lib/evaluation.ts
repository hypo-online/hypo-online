export type QuizPayload = {
  intent: "purchase" | "refinance" | "explore";
  income: "employed" | "self" | "abroad";
  timeline: "soon" | "mid" | "unknown";
};

export type Signal = "green" | "yellow" | "red";

export type EvaluationResult = {
  /** Indicative bank-style approval probability, 5–95 (never 0/100 to avoid false certainty). */
  probability: number;
  signal: Signal;
};

/**
 * Heuristic “AI-style” scorer (rules today; swap for LLM/embeddings later).
 * Runs server-side; inputs must not be persisted after the response.
 */
export function evaluateMortgageFit(input: QuizPayload): EvaluationResult {
  let score = 52;

  switch (input.income) {
    case "employed":
      score += 18;
      break;
    case "self":
      score += 6;
      break;
    case "abroad":
      score -= 22;
      break;
    default:
      break;
  }

  switch (input.intent) {
    case "purchase":
      score += 12;
      break;
    case "refinance":
      score += 8;
      break;
    case "explore":
      score -= 12;
      break;
    default:
      break;
  }

  switch (input.timeline) {
    case "soon":
      score += 10;
      break;
    case "mid":
      score += 4;
      break;
    case "unknown":
      score -= 10;
      break;
    default:
      break;
  }

  const probability = Math.round(Math.min(95, Math.max(5, score)));
  const signal: Signal =
    probability >= 70 ? "green" : probability >= 45 ? "yellow" : "red";

  return { probability, signal };
}
