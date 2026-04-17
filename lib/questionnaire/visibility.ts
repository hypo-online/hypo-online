import type { B1Employment, EnhancedQuizAnswers, QuestionId } from "./types";
import { QUESTION_ORDER } from "./types";

export function employmentOf(answers: EnhancedQuizAnswers): B1Employment | undefined {
  return answers["B1-employment"];
}

/** C5 only when primary path is foreign-income (per implementation guide). */
export function showC5Residency(answers: EnhancedQuizAnswers): boolean {
  return answers["B1-employment"] === "foreign-income";
}

/** B2/B3 hidden only when applicant reports no income (no templates in guide). */
export function showIncomeAndDuration(answers: EnhancedQuizAnswers): boolean {
  return answers["B1-employment"] !== "no-income";
}

export function visibleQuestionIds(answers: EnhancedQuizAnswers): QuestionId[] {
  return QUESTION_ORDER.filter((id) => {
    if (id === "C5-residency" && !showC5Residency(answers)) return false;
    if ((id === "B2-income" || id === "B3-duration") && !showIncomeAndDuration(answers)) {
      return false;
    }
    return true;
  });
}

export function totalVisibleSteps(answers: EnhancedQuizAnswers): number {
  return visibleQuestionIds(answers).length;
}
