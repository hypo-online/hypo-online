import type { EnhancedQuizAnswers } from "./types";
import {
  D1_AGE_BANDS,
  D2_NATIONALITIES,
  D4_CONTACT_CHANNELS,
} from "./types";
import {
  showAmericanPurpose,
  showC5Residency,
  showIncomeAndDuration,
} from "./visibility";

export function validateEnhancedAnswers(
  a: EnhancedQuizAnswers,
): string | null {
  if (!a["A1-type"]) return "missing_A1";
  if (showAmericanPurpose(a) && !a["A1b-american-purpose"])
    return "missing_A1b";
  if (!a["A2-location"]) return "missing_A2";
  if (a["A3-price"] == null || Number.isNaN(a["A3-price"])) return "missing_A3";
  if (a["A3-price"] < 1 || a["A3-price"] > 100) return "bad_A3";
  if (showAmericanPurpose(a)) {
    const p = a["A3b-american-prior"];
    if (!p?.hasPrior) return "missing_A3b";
    if (p.hasPrior === "yes") {
      if (p.outstandingCzk == null || p.outstandingCzk <= 0) return "bad_A3b";
    }
    const draw = a["A3c-american-draw"];
    if (draw == null || Number.isNaN(draw) || draw < 0.1) return "missing_A3c";
    if (draw > 100 || draw > a["A3-price"]! * 1.05) return "bad_A3c";
  }
  if (!a["A4-downpayment"]) return "missing_A4";
  if (!a["A5-timeline"]) return "missing_A5";
  if (!a["B1-employment"]) return "missing_B1";
  if (a["B5-confidence"] == null) return "missing_B5";
  if (!a["C1-loans"]) return "missing_C1";
  if (!a["C2-creditcards"]) return "missing_C2";
  if (!a["C3-other"]) return "missing_C3";
  if (!a["C4-credit"]) return "missing_C4";

  if (showIncomeAndDuration(a)) {
    const inc = a["B2-income"];
    if (inc == null || inc <= 0) return "missing_B2";
    if (!a["B3-duration"]) return "missing_B3";
  }

  if (showC5Residency(a) && !a["C5-residency"]) return "missing_C5";

  const band = a["D1-age-band"];
  if (!band || !(D1_AGE_BANDS as readonly string[]).includes(band)) return "bad_D1";
  const nat = a["D2-nationality"];
  if (!nat || !(D2_NATIONALITIES as readonly string[]).includes(nat)) return "bad_D2";
  if (!a["D3-broker-language"]) return "missing_D3";
  if (a["D3-broker-language"] === "other") {
    const custom = a["D3-broker-language-custom"]?.trim();
    if (!custom || custom.length < 2) return "bad_D3_custom";
  }
  const ch = a["D4-contact-channel"];
  if (!ch || !(D4_CONTACT_CHANNELS as readonly string[]).includes(ch)) return "bad_D4";

  if (a["C1-loans"].has === "yes") {
    const rows = a["C1-loans"].loans ?? [];
    if (rows.length === 0) return "c1_needs_rows";
    for (const r of rows) {
      if (!r.monthly || r.monthly <= 0) return "c1_bad_monthly";
    }
  }

  if (a["C2-creditcards"] === "debt") {
    const d = a["C2-cc-debt"];
    if (d == null || d <= 0) return "c2_needs_debt";
  }

  const c3 = a["C3-other"];
  for (const s of c3.selected ?? []) {
    if (s === "alimony" && (c3.alimony == null || c3.alimony < 0))
      return "c3_alimony";
    if (s === "family-loan" && (c3["family-loan"] == null || c3["family-loan"] < 0))
      return "c3_family";
    if (s === "medical" && (c3.medical == null || c3.medical < 0))
      return "c3_medical";
    if (
      s === "rent-stable" &&
      (c3.rentMonthly == null || c3.rentMonthly <= 0)
    )
      return "c3_rent";
  }

  return null;
}
