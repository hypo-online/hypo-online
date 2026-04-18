import type { QuizPayload } from "@/lib/evaluation";
import type { EnhancedQuizAnswers } from "./types";

/**
 * Maps v2 answers to the legacy coarse tuple used by the lead API and analytics.
 */
export function deriveCoarseFromEnhanced(a: EnhancedQuizAnswers): QuizPayload {
  const a1 = a["A1-type"];
  const intent: QuizPayload["intent"] =
    a1 === "refinance"
      ? "refinance"
      : a1 === "american-mortgage"
        ? "american"
        : a1 === "purchase"
          ? "purchase"
          : "explore";

  const b1 = a["B1-employment"];
  let income: QuizPayload["income"] = "employed";
  if (b1 === "osvcc-cz" || b1 === "mixed") income = "self";
  else if (b1 === "foreign-income" || b1 === "no-income") income = "abroad";
  else if (b1 === "employed-cz") income = "employed";

  const a5 = a["A5-timeline"];
  let timeline: QuizPayload["timeline"] = "mid";
  if (a5 === "urgent") timeline = "soon";
  else if (a5 === "standard" || a5 === "future") timeline = "mid";
  else if (a5 === "research") timeline = "unknown";

  return { intent, income, timeline };
}
