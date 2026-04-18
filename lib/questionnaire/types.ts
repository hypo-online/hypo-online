/**
 * Enhanced mortgage questionnaire (v2) — answer keys align with scoring logic.
 */

export const QUESTION_ORDER = [
  "A1-type",
  "A1b-american-purpose",
  "A2-location",
  "A3-price",
  "A4-downpayment",
  "A5-timeline",
  "B1-employment",
  "B2-income",
  "B3-duration",
  "B4-secondary",
  "B5-confidence",
  "C1-loans",
  "C2-creditcards",
  "C3-other",
  "C4-credit",
  "C5-residency",
] as const;

export type QuestionId = (typeof QUESTION_ORDER)[number];

export type A1Type = "purchase" | "refinance" | "american-mortgage";

/** Main intended use of funds — Czech "American" (non-purpose) mortgage. */
export type A1bAmericanPurpose =
  | "debt-consolidation"
  | "home-renovation"
  | "business"
  | "personal-general"
  | "investment-liquidity";

export type A2Location =
  | "prague-center"
  | "prague-outskirts"
  | "central-bohemia"
  | "other-city"
  | "abroad";

export type A4Downpayment = "lt10" | "10-15" | "15-20" | "gt20";

export type A5Timeline = "urgent" | "standard" | "future" | "research";

export type B1Employment =
  | "employed-cz"
  | "osvcc-cz"
  | "foreign-income"
  | "mixed"
  | "no-income";

export type B3Duration = "lt6" | "6-12" | "1-3" | "gt3";

export type C2CreditCards = "none" | "undebt" | "debt";

export type C4PaymentHistory = "clean" | "resolved" | "serious" | "unknown";

export type C5Residency =
  | "czech-citizen"
  | "longterm"
  | "temporary"
  | "eu-unregistered"
  | "illegal";

export type LoanKind = "auto" | "consumer" | "student" | "other";

export type SecondaryIncome = {
  rental?: number;
  investment?: number;
  "second-job"?: number;
  spouse?: number;
  benefits?: number;
  none?: boolean;
};

export type LoanRow = {
  kind: LoanKind;
  monthly: number;
  remainingMonths?: number;
};

export type OtherLiabilities = {
  selected: Array<"alimony" | "family-loan" | "medical" | "court" | "rent-stable">;
  alimony?: number;
  "family-loan"?: number;
  medical?: number;
  courtNote?: string;
  /** Monthly rent (CZK) when "rent-stable" is selected */
  rentMonthly?: number;
};

/**
 * Normalized answers sent to /api/evaluate (v2).
 */
export type EnhancedQuizAnswers = {
  "A1-type"?: A1Type;
  /** Shown only when A1-type is american-mortgage */
  "A1b-american-purpose"?: A1bAmericanPurpose;
  "A2-location"?: A2Location;
  /** Property price in millions of CZK */
  "A3-price"?: number;
  "A4-downpayment"?: A4Downpayment;
  "A5-timeline"?: A5Timeline;
  "B1-employment"?: B1Employment;
  /** Gross monthly income in CZK (all employment paths normalized here) */
  "B2-income"?: number;
  "B2-currency"?: string;
  "B3-duration"?: B3Duration;
  "B4-secondary"?: SecondaryIncome;
  /** 0–100 self-assessed job stability */
  "B5-confidence"?: number;
  "C1-loans"?: {
    has: "none" | "yes";
    loans: LoanRow[];
  };
  "C2-creditcards"?: C2CreditCards;
  "C2-cc-debt"?: number;
  "C2-cc-limit"?: number;
  "C3-other"?: OtherLiabilities;
  "C4-credit"?: C4PaymentHistory;
  "C5-residency"?: C5Residency;
};
