import type { EnhancedQuizAnswers, QuestionId } from "./types";

/** Returns whether the current step has enough data to continue. */
export function canAdvanceStep(
  activeId: QuestionId,
  a: EnhancedQuizAnswers,
): boolean {
  switch (activeId) {
    case "A1-type":
      return !!a["A1-type"];
    case "A2-location":
      return !!a["A2-location"];
    case "A3-price":
      return (
        a["A3-price"] != null &&
        a["A3-price"] >= 1 &&
        a["A3-price"] <= 100
      );
    case "A4-downpayment":
      return !!a["A4-downpayment"];
    case "A5-timeline":
      return !!a["A5-timeline"];
    case "B1-employment":
      return !!a["B1-employment"];
    case "B2-income":
      return (a["B2-income"] ?? 0) > 0;
    case "B3-duration":
      return !!a["B3-duration"];
    case "B4-secondary":
      return true;
    case "B5-confidence":
      return a["B5-confidence"] != null;
    case "C1-loans": {
      const c1 = a["C1-loans"];
      if (!c1) return false;
      if (c1.has === "none") return true;
      if (!c1.loans?.length) return false;
      return c1.loans.every((r) => r.monthly > 0);
    }
    case "C2-creditcards": {
      if (!a["C2-creditcards"]) return false;
      if (a["C2-creditcards"] === "debt") {
        return (a["C2-cc-debt"] ?? 0) > 0;
      }
      return true;
    }
    case "C3-other": {
      const c3 = a["C3-other"];
      if (!c3) return false;
      for (const s of c3.selected) {
        if (s === "alimony" && (c3.alimony == null || c3.alimony < 0))
          return false;
        if (
          s === "family-loan" &&
          (c3["family-loan"] == null || c3["family-loan"] < 0)
        )
          return false;
        if (s === "medical" && (c3.medical == null || c3.medical < 0))
          return false;
        if (
          s === "rent-stable" &&
          (c3.rentMonthly == null || c3.rentMonthly <= 0)
        )
          return false;
      }
      return true;
    }
    case "C4-credit":
      return !!a["C4-credit"];
    case "C5-residency":
      return !!a["C5-residency"];
    default:
      return true;
  }
}
