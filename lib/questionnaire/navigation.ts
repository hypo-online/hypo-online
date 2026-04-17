import { QUESTION_ORDER, type EnhancedQuizAnswers, type QuestionId } from "./types";
import { visibleQuestionIds } from "./visibility";

export function nextQuestionId(
  active: QuestionId,
  answers: EnhancedQuizAnswers,
): QuestionId | null {
  const v = visibleQuestionIds(answers);
  const i = v.indexOf(active);
  if (i < 0) return v[0] ?? null;
  return v[i + 1] ?? null;
}

export function prevQuestionId(
  active: QuestionId,
  answers: EnhancedQuizAnswers,
): QuestionId | null {
  const v = visibleQuestionIds(answers);
  const i = v.indexOf(active);
  if (i <= 0) return null;
  return v[i - 1] ?? null;
}

export function isLastQuestion(
  active: QuestionId,
  answers: EnhancedQuizAnswers,
): boolean {
  const v = visibleQuestionIds(answers);
  return v.length > 0 && v[v.length - 1] === active;
}

export function clampActiveId(
  active: QuestionId,
  answers: EnhancedQuizAnswers,
): QuestionId {
  const v = visibleQuestionIds(answers);
  if (v.length === 0) return "A1-type";
  if (v.includes(active)) return active;
  const prevI = QUESTION_ORDER.indexOf(active);
  for (let i = Math.max(0, prevI); i < QUESTION_ORDER.length; i++) {
    const id = QUESTION_ORDER[i];
    if (v.includes(id)) return id;
  }
  return v[v.length - 1];
}
