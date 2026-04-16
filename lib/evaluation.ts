export type QuizPayload = {
  intent: "purchase" | "refinance" | "explore";
  income: "employed" | "self" | "abroad";
  timeline: "soon" | "mid" | "unknown";
};

export type ResultKey = "ok" | "review";

/**
 * Indicative routing only — replace with broker-approved rules.
 * Runs server-side; inputs must not be persisted after the response.
 */
export function evaluateMortgageFit(input: QuizPayload): ResultKey {
  if (input.income === "abroad") return "review";
  if (input.intent === "explore") return "review";
  if (input.timeline === "unknown") return "review";

  return "ok";
}
