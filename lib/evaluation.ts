export type QuizPayload = {
  intent: "purchase" | "refinance" | "explore";
  income: "employed" | "self" | "abroad";
  timeline: "soon" | "mid" | "unknown";
};

export type Signal = "green" | "yellow" | "red";
export type FactorStatus = "good" | "concern" | "blocker";

export type ScoreFactor = {
  key: "incomeStrength" | "profileStability" | "documentationReadiness" | "timelineReadiness";
  score: number;
  status: FactorStatus;
};

export type EvaluationResult = {
  /** Indicative bank-style approval probability, 5–95 (never 0/100 to avoid false certainty). */
  probability: number;
  signal: Signal;
  factors: ScoreFactor[];
  /**
   * Potential increase if user addresses top actionable constraints.
   * This is a simulation aid, not a guarantee.
   */
  simulatedImprovement: {
    probability: number;
    delta: number;
  };
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
  const factors = buildFactors(input);

  const potentialBoost = Math.max(
    3,
    Math.round(
      (Math.max(0, 7 - factors[1].score) + Math.max(0, 7 - factors[2].score)) / 1.5,
    ),
  );
  const improvedProbability = Math.min(95, probability + potentialBoost);

  return {
    probability,
    signal,
    factors,
    simulatedImprovement: {
      probability: improvedProbability,
      delta: improvedProbability - probability,
    },
  };
}

function buildFactors(input: QuizPayload): ScoreFactor[] {
  const incomeStrength =
    input.income === "employed" ? 8 : input.income === "self" ? 6 : 3;
  const profileStability =
    input.intent === "purchase" ? 7 : input.intent === "refinance" ? 8 : 4;
  const documentationReadiness =
    input.income === "abroad" ? 4 : input.income === "self" ? 6 : 7;
  const timelineReadiness =
    input.timeline === "soon" ? 8 : input.timeline === "mid" ? 6 : 4;

  return [
    factor("incomeStrength", incomeStrength),
    factor("profileStability", profileStability),
    factor("documentationReadiness", documentationReadiness),
    factor("timelineReadiness", timelineReadiness),
  ];
}

function factor(
  key: ScoreFactor["key"],
  score: number,
): ScoreFactor {
  return {
    key,
    score,
    status: toStatus(score),
  };
}

function toStatus(score: number): FactorStatus {
  if (score >= 7) return "good";
  if (score >= 5) return "concern";
  return "blocker";
}
