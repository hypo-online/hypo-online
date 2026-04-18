import type {
  EvaluationResult,
  FactorStatus,
  ScoreFactor,
  Signal,
} from "@/lib/evaluation";
import type { EnhancedQuizAnswers } from "@/lib/questionnaire/types";

type DtiResult = {
  monthlyIncome: number;
  monthlyNetIncome: number;
  monthlyObligations: number;
  dtiRatio: number;
};

function downpaymentFraction(v: EnhancedQuizAnswers["A4-downpayment"]): number {
  const map: Record<NonNullable<typeof v>, number> = {
    lt10: 0.05,
    "10-15": 0.125,
    "15-20": 0.175,
    gt20: 0.25,
  };
  return v ? map[v] ?? 0.1 : 0.1;
}

export function calculateDti(answers: EnhancedQuizAnswers): DtiResult {
  const monthlyIncome = Math.max(0, answers["B2-income"] ?? 0);
  let monthlyNetIncome = monthlyIncome * 0.8;

  const b4 = answers["B4-secondary"];
  if (b4 && !b4.none) {
    if (typeof b4.rental === "number")
      monthlyNetIncome += b4.rental * 0.8;
    if (typeof b4.investment === "number")
      monthlyNetIncome += b4.investment;
    if (typeof b4.spouse === "number") monthlyNetIncome += b4.spouse * 0.8;
    if (typeof b4["second-job"] === "number")
      monthlyNetIncome += b4["second-job"];
    if (typeof b4.benefits === "number") monthlyNetIncome += b4.benefits;
  }

  let monthlyObligations = 0;
  const c1 = answers["C1-loans"];
  if (c1?.has === "yes" && c1.loans?.length) {
    for (const row of c1.loans) {
      monthlyObligations += Math.max(0, row.monthly);
    }
  }

  const debt = answers["C2-cc-debt"];
  if (answers["C2-creditcards"] === "debt" && typeof debt === "number" && debt > 0) {
    monthlyObligations += debt * 0.02;
  }

  const c3 = answers["C3-other"];
  if (c3?.selected?.length) {
    if (c3.selected.includes("alimony") && typeof c3.alimony === "number")
      monthlyObligations += c3.alimony;
    if (c3.selected.includes("family-loan") && typeof c3["family-loan"] === "number")
      monthlyObligations += c3["family-loan"];
    if (c3.selected.includes("medical") && typeof c3.medical === "number")
      monthlyObligations += c3.medical;
    if (
      c3.selected.includes("rent-stable") &&
      typeof c3.rentMonthly === "number" &&
      c3.rentMonthly > 0
    )
      monthlyObligations += c3.rentMonthly;
  }

  const denom = monthlyIncome > 0 ? monthlyIncome : 1;
  const dtiRatio = monthlyObligations / denom;

  return {
    monthlyIncome,
    monthlyNetIncome,
    monthlyObligations,
    dtiRatio,
  };
}

type SignalRaw = {
  score: number;
  redFlags: string[];
  amberFlags: string[];
  greenFlags: string[];
  illegalResidency: boolean;
};

function scoreRawSignal(answers: EnhancedQuizAnswers, dti: DtiResult): SignalRaw {
  let score = 0;
  const redFlags: string[] = [];
  const amberFlags: string[] = [];
  const greenFlags: string[] = [];
  let illegalResidency = false;

  if (dti.dtiRatio > 8) {
    redFlags.push("DTI > 8.0");
    score -= 40;
  } else if (dti.dtiRatio > 7) {
    amberFlags.push("DTI 7.0–8.0");
    score -= 20;
  } else if (dti.dtiRatio < 6 && dti.monthlyIncome > 0) {
    greenFlags.push("DTI < 6.0");
    score += 15;
  }

  const employmentType = answers["B1-employment"];
  const duration = answers["B3-duration"];

  if (employmentType === "employed-cz" && duration) {
    if (duration === "lt6") {
      redFlags.push("Employment < 6 months");
      score -= 30;
    } else if (duration === "6-12") {
      amberFlags.push("Employment 6–12 months");
      score -= 10;
    } else {
      greenFlags.push("Employment > 1 year");
      score += 15;
    }
  } else if (employmentType === "osvcc-cz" && duration) {
    if (duration === "lt6") {
      redFlags.push("Self-employed < 6 months");
      score -= 35;
    } else if (duration === "6-12") {
      amberFlags.push("Self-employed 6–12 months");
      score -= 15;
    } else if (duration === "1-3") {
      amberFlags.push("Self-employed 1–3 years");
      score -= 5;
    } else {
      greenFlags.push("Self-employed > 3 years");
      score += 10;
    }
  } else if (employmentType === "foreign-income" && duration) {
    if (duration === "lt6") {
      redFlags.push("Foreign income < 6 months");
      score -= 40;
    } else if (duration === "6-12") {
      amberFlags.push("Foreign income < 1 year");
      score -= 20;
    } else {
      amberFlags.push("Foreign income (FX risk)");
      score -= 10;
    }
  } else if (employmentType === "no-income") {
    redFlags.push("No reported income");
    score -= 50;
  } else if (employmentType === "mixed") {
    amberFlags.push("Mixed income sources");
    score -= 8;
  }

  const creditHistory = answers["C4-credit"];
  if (creditHistory === "clean") {
    greenFlags.push("Clean payment history");
    score += 15;
  } else if (creditHistory === "resolved") {
    amberFlags.push("Past payment issues (resolved)");
    score -= 15;
  } else if (creditHistory === "serious") {
    redFlags.push("Serious payment problems");
    score -= 40;
  } else if (creditHistory === "unknown") {
    amberFlags.push("Credit history unknown");
    score -= 5;
  }

  const dp = downpaymentFraction(answers["A4-downpayment"]);
  if (dp > 0.2) {
    greenFlags.push("Down payment > 20%");
    score += 10;
  } else if (dp < 0.1) {
    redFlags.push("Down payment < 10%");
    score -= 20;
  }

  const residency = answers["C5-residency"];
  if (residency) {
    if (residency === "longterm") {
      amberFlags.push("Long-term stay / work permit");
      score -= 15;
    } else if (residency === "temporary" || residency === "eu-unregistered") {
      redFlags.push("Weak residency status");
      score -= 30;
    } else if (residency === "illegal") {
      redFlags.push("No legal status");
      score = -100;
      illegalResidency = true;
    }
  }

  const loc = answers["A2-location"];
  if (loc === "abroad") {
    amberFlags.push("Property outside CZ");
    score -= 25;
  }

  const c3Flags = answers["C3-other"]?.selected;
  if (c3Flags?.includes("court")) {
    redFlags.push("Court / enforcement exposure");
    score -= 35;
  }

  return { score, redFlags, amberFlags, greenFlags, illegalResidency };
}

function rawToProbability(
  raw: SignalRaw,
): { probability: number; signal: Signal } {
  const { score, redFlags, amberFlags, illegalResidency } = raw;

  if (illegalResidency) {
    return { probability: 5, signal: "red" };
  }

  let probability: number;
  let signal: Signal;

  if (score < -50 || redFlags.length >= 3) {
    probability = Math.max(5, Math.min(95, 20 + score));
    signal = "red";
  } else if (score < -20 || (amberFlags.length >= 2 && redFlags.length === 0)) {
    probability = Math.max(5, Math.min(95, 50 + score));
    signal = "yellow";
  } else if (score >= 0) {
    probability = Math.max(5, Math.min(95, 75 + score));
    signal = "green";
  } else {
    probability = Math.max(5, Math.min(95, 50 + Math.max(-25, score)));
    signal = "yellow";
  }

  probability = Math.round(Math.min(95, Math.max(5, probability)));
  return { probability, signal };
}

function factorStatus(n: number): FactorStatus {
  if (n >= 7) return "good";
  if (n >= 5) return "concern";
  return "blocker";
}

function buildFactors(
  answers: EnhancedQuizAnswers,
  dti: DtiResult,
  raw: SignalRaw,
): ScoreFactor[] {
  const b1 = answers["B1-employment"];
  let incomeStrength = 5;
  if (b1 === "employed-cz") incomeStrength = 8;
  else if (b1 === "osvcc-cz") incomeStrength = 6;
  else if (b1 === "foreign-income") incomeStrength = 4;
  else if (b1 === "mixed") incomeStrength = 5;
  else if (b1 === "no-income") incomeStrength = 2;
  if (dti.dtiRatio > 7) incomeStrength -= 2;
  if (dti.dtiRatio < 4 && dti.monthlyIncome > 0) incomeStrength += 1;
  incomeStrength = Math.min(10, Math.max(1, Math.round(incomeStrength)));

  const a1 = answers["A1-type"];
  let profileStability = a1 === "purchase" ? 7 : 8;
  const a2 = answers["A2-location"];
  if (a2 === "prague-center" || a2 === "prague-outskirts") profileStability += 1;
  if (a2 === "abroad") profileStability -= 2;
  profileStability = Math.min(10, Math.max(1, Math.round(profileStability)));

  let documentationReadiness = 6;
  if (b1 === "employed-cz") documentationReadiness = 8;
  else if (b1 === "osvcc-cz") documentationReadiness = 6;
  else if (b1 === "foreign-income") documentationReadiness = 4;
  else if (b1 === "no-income") documentationReadiness = 3;
  documentationReadiness = Math.min(10, Math.max(1, documentationReadiness));

  const a5 = answers["A5-timeline"];
  let timelineReadiness = 6;
  if (a5 === "urgent") timelineReadiness = 8;
  else if (a5 === "standard") timelineReadiness = 7;
  else if (a5 === "future") timelineReadiness = 6;
  else if (a5 === "research") timelineReadiness = 4;
  if (raw.amberFlags.some((f) => f.includes("Foreign"))) timelineReadiness -= 1;
  timelineReadiness = Math.min(10, Math.max(1, Math.round(timelineReadiness)));

  const mk = (key: ScoreFactor["key"], score: number): ScoreFactor => ({
    key,
    score,
    status: factorStatus(score),
  });

  return [
    mk("incomeStrength", incomeStrength),
    mk("profileStability", profileStability),
    mk("documentationReadiness", documentationReadiness),
    mk("timelineReadiness", timelineReadiness),
  ];
}

export function evaluateEnhancedMortgageFit(
  answers: EnhancedQuizAnswers,
): EvaluationResult {
  const dti = calculateDti(answers);
  const raw = scoreRawSignal(answers, dti);
  const { probability, signal } = rawToProbability(raw);
  const factors = buildFactors(answers, dti, raw);

  const potentialBoost = Math.max(
    3,
    Math.round(
      (Math.max(0, 7 - factors[1].score) + Math.max(0, 7 - factors[2].score)) /
        1.5,
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
