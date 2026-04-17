"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { QuizPayload, ScoreFactor, Signal } from "@/lib/evaluation";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Semaphore } from "@/components/semaphore";
import { trackEvent } from "@/lib/analytics";

type Step = 0 | 1 | 2 | 3;

export function QuizFlow({ locale }: { locale: string }) {
  const t = useTranslations("quiz");
  const c = quizCopy(locale);
  const [step, setStep] = useState<Step>(0);
  const [intent, setIntent] = useState<QuizPayload["intent"]>("purchase");
  const [income, setIncome] = useState<QuizPayload["income"]>("employed");
  const [timeline, setTimeline] = useState<QuizPayload["timeline"]>("soon");
  const [probability, setProbability] = useState<number | null>(null);
  const [signal, setSignal] = useState<Signal | null>(null);
  const [factors, setFactors] = useState<ScoreFactor[]>([]);
  const [simulatedImprovement, setSimulatedImprovement] = useState<{
    probability: number;
    delta: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadDone, setLeadDone] = useState(false);
  const [deleteDone, setDeleteDone] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [brokerConsent, setBrokerConsent] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState<boolean | null>(null);

  const totalSteps = 3;
  const progressStep = step < 3 ? step + 1 : 3;
  const progressPercent = Math.round((progressStep / totalSteps) * 100);

  const payload = useMemo(
    (): QuizPayload => ({ intent, income, timeline }),
    [intent, income, timeline],
  );

  useEffect(() => {
    if (analyticsConsent === true) {
      trackEvent("quiz_started", { locale });
    }
  }, [analyticsConsent, locale]);

  function emitEvent(name: string, props?: Record<string, string | number>) {
    if (analyticsConsent !== true) return;
    trackEvent(name, props);
  }

  async function runEvaluate() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("evaluate failed");
      const data = (await res.json()) as {
        probability: number;
        signal: Signal;
        factors: ScoreFactor[];
        simulatedImprovement: { probability: number; delta: number };
      };
      setProbability(data.probability);
      setSignal(data.signal);
      setFactors(data.factors);
      setSimulatedImprovement(data.simulatedImprovement);
      setStep(3);
      emitEvent("quiz_completed", {
        locale,
        probability: data.probability,
        signal: data.signal,
      });
      emitEvent("step3_complete", {
        probability: data.probability,
        signal: data.signal,
      });
    } catch {
      setError(c.requestFailed);
    } finally {
      setLoading(false);
    }
  }

  async function submitLead() {
    if (probability === null || !signal) return;
    setValidationError(null);

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setValidationError(c.errFillContact);
      return;
    }

    if (!email.includes("@")) {
      setValidationError(c.errInvalidEmail);
      return;
    }

    if (!brokerConsent) {
      setValidationError(c.errNeedBrokerConsent);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          locale,
          probability,
          signal,
          intent,
          income,
          timeline,
          consents: {
            brokerContact: brokerConsent,
            analytics: analyticsConsent === true,
          },
        }),
      });
      if (!res.ok) throw new Error("lead failed");
      setLeadDone(true);
      emitEvent("lead_submit", { signal, probability });
    } catch {
      setError(c.requestFailed);
    } finally {
      setLoading(false);
    }
  }

  async function requestDeletion() {
    if (!email.trim() || !email.includes("@")) {
      setValidationError(c.errDeleteEmail);
      return;
    }
    setLoading(true);
    setValidationError(null);
    try {
      const res = await fetch("/api/data-delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), locale }),
      });
      if (!res.ok) throw new Error("delete failed");
      setDeleteDone(true);
      emitEvent("data_delete_requested", { locale });
    } catch {
      setError(c.requestFailed);
    } finally {
      setLoading(false);
    }
  }

  const hint =
    signal === "green"
      ? t("hint_green")
      : signal === "yellow"
        ? t("hint_yellow")
        : signal === "red"
          ? t("hint_red")
          : "";

  const improvementTips =
    signal === "green"
      ? c.tipsGreen
      : signal === "yellow"
        ? c.tipsYellow
        : signal === "red"
          ? c.tipsRed
          : [];

  return (
    <div className="flex flex-1 flex-col">
      {analyticsConsent === null && (
        <section className="card-surface mb-6 p-4 text-sm text-body">
          <p className="font-semibold text-[var(--color-brand-950)]">
            {c.analyticsTitle}
          </p>
          <p className="mt-1 text-xs text-muted">
            {c.analyticsText}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setAnalyticsConsent(true)}
              className="h-11 min-h-[44px] rounded-lg bg-[var(--color-brand-600)] px-3 text-xs font-semibold text-white transition hover:bg-[var(--color-brand-800)] active:scale-[0.98]"
            >
              {c.allow}
            </button>
            <button
              type="button"
              onClick={() => setAnalyticsConsent(false)}
              className="h-11 min-h-[44px] rounded-lg border border-[var(--color-brand-600)] bg-transparent px-3 text-xs font-semibold text-[var(--color-brand-600)] transition hover:bg-[#F5F9FF] dark:hover:bg-white/5"
            >
              {c.withoutAnalytics}
            </button>
          </div>
        </section>
      )}

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-body">
          {t("progress", { current: progressStep, total: totalSteps })}
        </p>
        <LocaleSwitcher />
      </div>
      <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
        <div
          className="h-full rounded-full bg-[var(--color-brand-600)] transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {step === 0 && (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("intent")}
          </h2>
          <Option
            selected={intent === "purchase"}
            onSelect={() => setIntent("purchase")}
            label={t("intent_a")}
          />
          <Option
            selected={intent === "refinance"}
            onSelect={() => setIntent("refinance")}
            label={t("intent_b")}
          />
          <Option
            selected={intent === "explore"}
            onSelect={() => setIntent("explore")}
            label={t("intent_c")}
          />
          <NavRow
            onBack={undefined}
            onNext={() => {
              setStep(1);
              emitEvent("step1_complete", { intent });
            }}
            nextLabel={t("next")}
          />
        </section>
      )}

      {step === 1 && (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("income")}
          </h2>
          <Option
            selected={income === "employed"}
            onSelect={() => setIncome("employed")}
            label={t("income_employed")}
          />
          <Option
            selected={income === "self"}
            onSelect={() => setIncome("self")}
            label={t("income_self")}
          />
          <Option
            selected={income === "abroad"}
            onSelect={() => setIncome("abroad")}
            label={t("income_abroad")}
          />
          <NavRow
            onBack={() => setStep(0)}
            onNext={() => {
              setStep(2);
              emitEvent("step2_complete", { income });
            }}
            backLabel={t("back")}
            nextLabel={t("next")}
          />
        </section>
      )}

      {step === 2 && (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("timeline")}
          </h2>
          <Option
            selected={timeline === "soon"}
            onSelect={() => setTimeline("soon")}
            label={t("timeline_0")}
          />
          <Option
            selected={timeline === "mid"}
            onSelect={() => setTimeline("mid")}
            label={t("timeline_1")}
          />
          <Option
            selected={timeline === "unknown"}
            onSelect={() => setTimeline("unknown")}
            label={t("timeline_2")}
          />
          <NavRow
            onBack={() => setStep(1)}
            onNext={runEvaluate}
            backLabel={t("back")}
            nextLabel={t("next")}
            busy={loading}
          />
        </section>
      )}

      {step === 3 && probability !== null && signal && (
        <section className="flex flex-1 flex-col gap-6">
          <div>
            <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
              {t("resultTitle")}
            </h2>
            <p className="mt-3 text-sm font-medium text-[var(--color-brand-950)]">
              {t("resultIntro", { percent: probability })}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-body">{t("aiNotice")}</p>
          </div>

          <div className="card-surface p-6">
            <p className="text-center text-xs font-semibold uppercase tracking-wide text-muted">
              {t("probabilityLabel")}
            </p>
            <p className="mt-2 text-center text-4xl font-bold tabular-nums text-[var(--color-brand-950)]">
              {probability}%
            </p>
            <div className="mt-4 flex justify-center">
              <Semaphore signal={signal} />
            </div>
            <div className="mt-4 flex justify-center gap-4 text-xs font-semibold text-body">
              <span className={signal === "red" ? "text-[var(--color-signal-red)]" : ""}>{t("signal_red")}</span>
              <span className={signal === "yellow" ? "text-[var(--color-signal-amber)]" : ""}>
                {t("signal_yellow")}
              </span>
              <span className={signal === "green" ? "text-[var(--color-signal-green)]" : ""}>
                {t("signal_green")}
              </span>
            </div>
            <p className="mt-1 text-center text-xs text-muted">{t("semaphoreLegend")}</p>
          </div>

          <p className="text-sm leading-relaxed text-body">{hint}</p>
          <div className="card-surface p-4">
            <p className="text-sm font-semibold text-[var(--color-brand-950)]">
              {c.whyScore}
            </p>
            <div className="mt-3 grid gap-2">
              {factors.map((factor) => (
                <FactorRow key={factor.key} factor={factor} locale={locale} />
              ))}
            </div>
            {simulatedImprovement && (
              <p className="mt-3 rounded-lg border border-[var(--color-border)] border-l-[3px] border-l-[var(--color-brand-600)] bg-[var(--color-surface-muted)] px-3 py-2 text-xs text-body">
                {c.improveDelta(simulatedImprovement.delta, simulatedImprovement.probability)}
              </p>
            )}
          </div>
          <div className="card-surface p-4">
            <p className="text-sm font-semibold text-[var(--color-brand-950)]">
              {c.improveTitle}
            </p>
            <ul className="mt-2 space-y-1 text-sm text-body">
              {improvementTips.map((tip) => (
                <li key={tip}>• {tip}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm font-medium text-[var(--color-brand-800)]">{t("allSignalsLead")}</p>
          <p className="text-xs leading-relaxed text-muted">{t("disclaimer")}</p>

          <div className="rounded-lg border border-[var(--color-border)] border-l-[3px] border-l-[var(--color-brand-600)] bg-[var(--color-surface-muted)] p-4">
            <p className="text-sm font-semibold text-[var(--color-brand-950)]">
              {c.nextTitle}
            </p>
            <p className="mt-1 text-xs text-body">
              {c.nextSla}
            </p>
            <ul className="mt-2 space-y-1 text-xs text-body">
              <li>• {c.next1}</li>
              <li>• {c.next2}</li>
              <li>• {c.next3}</li>
            </ul>
          </div>

          {!leadDone ? (
            <div className="card-surface p-6">
              <h3 className="text-base font-semibold text-[var(--color-brand-950)]">
                {t("result_contactTitle")}
              </h3>
              <p className="mt-2 text-sm text-body">{t("result_contactHint")}</p>
              <div className="mt-4 space-y-4">
                <label className="block text-sm font-medium text-[var(--color-brand-950)]">
                  {t("name")}
                  <input
                    className="mt-2 min-h-[44px] w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-[15px] transition focus-visible:border-[var(--color-brand-600)] focus-visible:shadow-[inset_0_0_0_3px_color-mix(in_srgb,var(--color-brand-600)_14%,transparent)]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                </label>
                <label className="block text-sm font-medium text-[var(--color-brand-950)]">
                  {t("email")}
                  <input
                    className="mt-2 min-h-[44px] w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-[15px] transition focus-visible:border-[var(--color-brand-600)] focus-visible:shadow-[inset_0_0_0_3px_color-mix(in_srgb,var(--color-brand-600)_14%,transparent)]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    type="email"
                    inputMode="email"
                  />
                </label>
                <label className="block text-sm font-medium text-[var(--color-brand-950)]">
                  {t("phone")}
                  <input
                    className="mt-2 min-h-[44px] w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-[15px] transition focus-visible:border-[var(--color-brand-600)] focus-visible:shadow-[inset_0_0_0_3px_color-mix(in_srgb,var(--color-brand-600)_14%,transparent)]"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    type="tel"
                    inputMode="tel"
                  />
                </label>
                <label className="flex items-start gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-2.5 text-xs text-body">
                  <input
                    type="checkbox"
                    checked={brokerConsent}
                    onChange={(e) => setBrokerConsent(e.target.checked)}
                    className="mt-0.5"
                  />
                  <span>
                    {c.brokerConsentText}
                  </span>
                </label>
                <label className="flex items-start gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-2.5 text-xs text-body">
                  <input
                    type="checkbox"
                    checked={analyticsConsent === true}
                    onChange={(e) => setAnalyticsConsent(e.target.checked)}
                    className="mt-0.5"
                  />
                  <span>
                    {c.analyticsConsentText}
                  </span>
                </label>
              </div>
              <button
                type="button"
                onClick={submitLead}
                disabled={loading}
                className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-[var(--color-brand-600)] text-base font-semibold text-white transition hover:bg-[var(--color-brand-800)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {t("submit")}
              </button>
              <p className="mt-2 text-xs text-muted">
                {c.retentionHelp}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm font-medium text-[var(--color-signal-green)]">{t("thankyou")}</p>
              <div className="card-surface p-4 text-sm text-body">
                <p className="font-semibold text-[var(--color-brand-950)]">
                  {c.assignedDesk}
                </p>
                <p className="mt-1 text-xs">
                  {c.assignedDeskText}
                </p>
              </div>
              <button
                type="button"
                onClick={requestDeletion}
                disabled={loading || deleteDone}
                className="min-h-[44px] rounded-lg border border-[var(--color-brand-600)] bg-transparent px-4 text-xs font-semibold text-[var(--color-brand-600)] transition hover:bg-[#F5F9FF] disabled:opacity-60 dark:hover:bg-white/5"
              >
                {deleteDone
                  ? c.deleteSent
                  : c.deleteRequest}
              </button>
            </div>
          )}
        </section>
      )}

      {validationError && (
        <p className="mt-3 text-sm text-[var(--color-signal-amber)]" role="alert">
          {validationError}
        </p>
      )}
      {error && (
        <p className="mt-4 text-sm text-[var(--color-signal-red)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function FactorRow({
  factor,
  locale,
}: {
  factor: ScoreFactor;
  locale: string;
}) {
  const c = quizCopy(locale);
  const labels: Record<ScoreFactor["key"], string> = c.factorLabels;
  const statusLabel =
    factor.status === "good" ? c.statusGood : factor.status === "concern" ? c.statusConcern : c.statusBlocker;

  const statusColor =
    factor.status === "good"
      ? "text-[var(--color-signal-green)] bg-[var(--color-signal-green-bg)]"
      : factor.status === "concern"
        ? "text-[var(--color-signal-amber)] bg-[var(--color-signal-amber-bg)]"
        : "text-[var(--color-signal-red)] bg-[var(--color-signal-red-bg)]";

  return (
    <div className="flex items-center justify-between rounded-lg border border-[var(--color-border)] px-3 py-2">
      <div>
        <p className="text-sm font-medium text-[var(--color-brand-950)]">{labels[factor.key]}</p>
        <p className="text-xs text-muted">{factor.score}/10</p>
      </div>
      <span className={`rounded-full px-2 py-1 text-xs font-semibold ${statusColor}`}>
        {statusLabel}
      </span>
    </div>
  );
}

type QuizCopy = {
  errFillContact: string; errInvalidEmail: string; errNeedBrokerConsent: string; errDeleteEmail: string;
  requestFailed: string;
  tipsGreen: string[]; tipsYellow: string[]; tipsRed: string[];
  analyticsTitle: string; analyticsText: string; allow: string; withoutAnalytics: string;
  whyScore: string; improveTitle: string; nextTitle: string; nextSla: string; next1: string; next2: string; next3: string;
  brokerConsentText: string; analyticsConsentText: string; retentionHelp: string; assignedDesk: string; assignedDeskText: string; deleteSent: string; deleteRequest: string;
  factorLabels: Record<ScoreFactor["key"], string>; statusGood: string; statusConcern: string; statusBlocker: string;
  improveDelta: (delta: number, prob: number) => string;
};

function quizCopy(locale: string): QuizCopy {
  const en: QuizCopy = {
    errFillContact: "Please fill in name, email, and phone.",
    errInvalidEmail: "Email format looks invalid.",
    errNeedBrokerConsent: "Broker contact consent is required to submit.",
    errDeleteEmail: "Enter a valid email for deletion request.",
    requestFailed: "Request failed. Please try again.",
    tipsGreen: ["Prepare proof of income for the latest period.", "Confirm own-funds reserve for side costs and fees."],
    tipsYellow: ["Document income stability (longer employment/business history).", "Reduce existing monthly debt obligations before submission.", "Prepare residency documents if you are a foreign applicant."],
    tipsRed: ["Ask a broker for alternative structuring (lower LTV, co-applicant).", "Stabilize income and liabilities first, then re-run the check.", "Individual review matters — red cases can still be turned around."],
    analyticsTitle: "Anonymous analytics consent",
    analyticsText: "Helps improve the questionnaire flow. No personal data is sent.",
    allow: "Allow",
    withoutAnalytics: "Use without analytics",
    whyScore: "Why your score looks like this",
    improveTitle: "How to improve approval odds",
    nextTitle: "What happens after submit",
    nextSla: "Broker team contacts you within 24 hours (Mon–Fri).",
    next1: "Step 1: confirm basic details",
    next2: "Step 2: document checklist",
    next3: "Step 3: realistic financing path",
    brokerConsentText: "I agree that my contact details may be shared with a mortgage broker for follow-up.",
    analyticsConsentText: "I consent to anonymous analytics for service improvement.",
    retentionHelp: "Contacts are retained only as needed for lead handling. You can request deletion below.",
    assignedDesk: "Assigned desk",
    assignedDeskText: "CZ/SK multilingual mortgage desk • SLA: contact within 24h (Mon–Fri)",
    deleteSent: "Deletion request sent",
    deleteRequest: "Request data deletion",
    factorLabels: { incomeStrength: "Income strength", profileStability: "Profile stability", documentationReadiness: "Documentation readiness", timelineReadiness: "Timeline readiness" },
    statusGood: "Good", statusConcern: "Concern", statusBlocker: "Blocker",
    improveDelta: (d, p) => `If you improve weaker areas, your modeled score may move by +${d} points to ${p}%.`,
  };
  const cs: QuizCopy = {
    ...en,
    errFillContact: "Vyplňte jméno, e-mail a telefon.",
    errInvalidEmail: "E-mail nevypadá správně.",
    errNeedBrokerConsent: "Pro předání makléři je potřeba souhlas se zpracováním kontaktu.",
    errDeleteEmail: "Pro výmaz zadejte platný e-mail.",
    requestFailed: "Požadavek se nepodařilo dokončit. Zkuste to prosím znovu.",
    analyticsTitle: "Souhlas s anonymní analytikou",
    analyticsText: "Pomáhá nám zlepšovat kroky dotazníku. Neodesíláme osobní údaje.",
    allow: "Souhlasím",
    withoutAnalytics: "Použít bez analytiky",
    whyScore: "Proč vyšlo právě toto skóre",
    improveTitle: "Jak zvýšit šanci na schválení",
    nextTitle: "Co bude následovat po odeslání",
    nextSla: "Makléřský tým vás kontaktuje do 24 hodin (Po–Pá).",
    next1: "Krok 1: potvrzení základních údajů",
    next2: "Krok 2: seznam požadovaných dokumentů",
    next3: "Krok 3: návrh realistického postupu",
    brokerConsentText: "Souhlasím, aby moje kontaktní údaje byly předány hypotečnímu makléři za účelem kontaktování.",
    analyticsConsentText: "Souhlasím s anonymní analytikou pro zlepšování služby.",
    retentionHelp: "Kontakty držíme jen po nezbytnou dobu pro zpracování leadu. Žádost o výmaz můžete poslat níže.",
    assignedDesk: "Přiřazený tým",
    assignedDeskText: "CZ/SK multilingual mortgage desk • SLA: kontakt do 24h (Po–Pá)",
    deleteSent: "Žádost o výmaz odeslána",
    deleteRequest: "Požádat o výmaz dat",
    factorLabels: { incomeStrength: "Síla příjmu", profileStability: "Stabilita profilu", documentationReadiness: "Připravenost dokumentace", timelineReadiness: "Časová připravenost" },
    statusGood: "Dobré", statusConcern: "Pozor", statusBlocker: "Blokér",
    improveDelta: (d, p) => `Pokud zlepšíte slabší oblasti, modelově se můžete posunout o +${d} bodů na ${p} %.`,
  };
  const de: QuizCopy = {
    ...en,
    errFillContact: "Bitte Name, E-Mail und Telefon ausfüllen.",
    errInvalidEmail: "Die E-Mail-Adresse scheint ungültig.",
    errNeedBrokerConsent: "Für die Übergabe an den Makler ist eine Einwilligung erforderlich.",
    errDeleteEmail: "Geben Sie eine gültige E-Mail für die Löschung an.",
    requestFailed: "Anfrage fehlgeschlagen. Bitte erneut versuchen.",
    tipsGreen: ["Einkommensnachweise für den letzten Zeitraum vorbereiten.", "Eigenmittel für Nebenkosten und Gebühren prüfen."],
    tipsYellow: ["Einkommensstabilität dokumentieren (längere Anstellung/Selbstständigkeit).", "Bestehende monatliche Verpflichtungen vor Antrag senken.", "Aufenthaltsdokumente bei ausländischen Antragstellern vorbereiten."],
    tipsRed: ["Makler nach alternativer Struktur fragen (niedrigeres LTV, Mitantragsteller).", "Einkommen und Verbindlichkeiten stabilisieren, dann erneut prüfen.", "Einzelfall zählt — auch „rote“ Fälle lassen sich oft verbessern."],
    analyticsTitle: "Einwilligung für anonyme Analytik",
    analyticsText: "Hilft uns, den Ablauf zu verbessern. Es werden keine personenbezogenen Daten gesendet.",
    allow: "Zustimmen",
    withoutAnalytics: "Ohne Analytik fortfahren",
    whyScore: "Warum Ihr Ergebnis so ausfällt",
    improveTitle: "Wie Sie die Genehmigungschance verbessern",
    nextTitle: "Was nach dem Absenden passiert",
    nextSla: "Das Maklerteam meldet sich innerhalb von 24 Stunden (Mo–Fr).",
    next1: "Schritt 1: Basisdaten bestätigen",
    next2: "Schritt 2: Dokumenten-Checkliste",
    next3: "Schritt 3: realistischer Finanzierungsweg",
    brokerConsentText: "Ich stimme zu, dass meine Kontaktdaten zur Kontaktaufnahme mit einem Hypothekenmakler weitergegeben werden dürfen.",
    analyticsConsentText: "Ich stimme anonymen Analysen zur Verbesserung des Services zu.",
    retentionHelp: "Kontakte werden nur so lange gespeichert wie für die Lead-Bearbeitung nötig. Löschung unten anfragen.",
    assignedDesk: "Zugewiesenes Team",
    assignedDeskText: "Mehrsprachiger Hypotheken-Desk CZ/SK • Kontakt innerhalb von 24h (Mo–Fr)",
    deleteSent: "Löschanfrage gesendet",
    deleteRequest: "Datenlöschung anfordern",
    factorLabels: { incomeStrength: "Einkommensstärke", profileStability: "Profilstabilität", documentationReadiness: "Dokumentenlage", timelineReadiness: "Zeitliche Bereitschaft" },
    statusGood: "Gut",
    statusConcern: "Hinweis",
    statusBlocker: "Blocker",
    improveDelta: (d, p) => `Bei Verbesserung schwächerer Bereiche kann sich Ihr Modellwert um +${d} Punkte auf ${p} % bewegen.`,
  };
  const pl: QuizCopy = {
    ...en,
    errFillContact: "Uzupełnij imię, e-mail i telefon.",
    errInvalidEmail: "Format adresu e-mail jest nieprawidłowy.",
    errNeedBrokerConsent: "Aby wysłać formularz, potrzebna jest zgoda na kontakt z brokerem.",
    errDeleteEmail: "Podaj poprawny e-mail, aby zgłosić usunięcie danych.",
    requestFailed: "Żądanie nie powiodło się. Spróbuj ponownie.",
    tipsGreen: ["Przygotuj potwierdzenie dochodów z ostatniego okresu.", "Sprawdź rezerwę własnych środków na koszty dodatkowe i opłaty."],
    tipsYellow: ["Udokumentuj stabilność dochodów (dłuższa historia pracy lub działalności).", "Zmniejsz bieżące miesięczne zobowiązania przed złożeniem wniosku.", "Przygotuj dokumenty pobytowe, jeśli jesteś obcokrajowcem."],
    tipsRed: ["Poproś brokera o alternatywną strukturę finansowania (niższe LTV, współkredytobiorca).", "Najpierw ustabilizuj dochody i zobowiązania, potem ponów weryfikację.", "Ocena indywidualna ma znaczenie — nawet „czerwone” przypadki da się poprawić."],
    analyticsTitle: "Zgoda na anonimową analitykę",
    analyticsText: "Pomaga nam ulepszać przebieg ankiety. Nie wysyłamy danych osobowych.",
    allow: "Zgadzam się",
    withoutAnalytics: "Kontynuuj bez analityki",
    whyScore: "Dlaczego Twój wynik wygląda tak",
    improveTitle: "Jak zwiększyć szansę akceptacji",
    nextTitle: "Co dzieje się po wysłaniu",
    nextSla: "Zespół brokerów skontaktuje się w ciągu 24 godzin (pn–pt).",
    next1: "Krok 1: potwierdzenie podstawowych danych",
    next2: "Krok 2: lista wymaganych dokumentów",
    next3: "Krok 3: realistyczna ścieżka finansowania",
    brokerConsentText: "Wyrażam zgodę na przekazanie moich danych kontaktowych brokerowi hipotecznemu w celu kontaktu.",
    analyticsConsentText: "Wyrażam zgodę na anonimową analitykę w celu ulepszania usługi.",
    retentionHelp: "Dane kontaktowe przechowujemy tylko przez czas potrzebny do obsługi zgłoszenia. Poniżej możesz poprosić o usunięcie.",
    assignedDesk: "Przydzielony zespół",
    assignedDeskText: "Wielojęzyczny zespół hipoteczny CZ/SK • kontakt w 24 h (pn–pt)",
    deleteSent: "Wysłano prośbę o usunięcie danych",
    deleteRequest: "Poproś o usunięcie danych",
    factorLabels: { incomeStrength: "Siła dochodu", profileStability: "Stabilność profilu", documentationReadiness: "Gotowość dokumentów", timelineReadiness: "Gotowość czasowa" },
    statusGood: "Dobrze",
    statusConcern: "Uwaga",
    statusBlocker: "Blokada",
    improveDelta: (d, p) => `Po poprawie słabszych obszarów wynik modelowy może wzrosnąć o +${d} pkt do ${p}%.`,
  };
  const sk: QuizCopy = {
    ...en,
    errFillContact: "Vyplňte meno, e-mail a telefón.",
    errInvalidEmail: "E-mail nevyzerá správne.",
    errNeedBrokerConsent: "Na odoslanie je potrebný súhlas s kontaktom makléra.",
    errDeleteEmail: "Zadajte platný e-mail pre žiadosť o výmaz.",
    requestFailed: "Požiadavka zlyhala. Skúste to znova.",
    tipsGreen: ["Pripravte potvrdenie príjmu za posledné obdobie.", "Overte vlastnú rezervu na vedľajšie náklady a poplatky."],
    tipsYellow: ["Dokumentujte stabilitu príjmu (dlhšia história zamestnania/podnikania).", "Pred podaním znížte mesačné záväzky.", "Pri cudzincoch pripravte pobytové dokumenty."],
    tipsRed: ["Opýtajte sa makléra na alternatívnu štruktúru (nižšie LTV, spolužiadateľ).", "Najprv stabilizujte príjem a záväzky, potom znova spustite kontrolu.", "Individuálne posúdenie rozhoduje — aj „červené“ prípady sa dajú zlepšiť."],
    analyticsTitle: "Súhlas s anonymnou analytikou",
    analyticsText: "Pomáha nám zlepšovať kroky dotazníka. Neodosielame osobné údaje.",
    allow: "Súhlasím",
    withoutAnalytics: "Použiť bez analytiky",
    whyScore: "Prečo vyšlo toto skóre",
    improveTitle: "Ako zvýšiť šancu schválenia",
    nextTitle: "Čo nasleduje po odoslaní",
    nextSla: "Maklérsky tím vás kontaktuje do 24 hodín (Po–Pi).",
    next1: "Krok 1: potvrdenie základných údajov",
    next2: "Krok 2: zoznam dokumentov",
    next3: "Krok 3: realistický postup financovania",
    brokerConsentText: "Súhlasím s odovzdaním kontaktných údajov maklérovi na hypotekárne spojenie.",
    analyticsConsentText: "Súhlasím s anonymnou analytikou na zlepšenie služby.",
    retentionHelp: "Kontakty držíme len po dobu potrebnú na spracovanie. O výmaz môžete požiadať nižšie.",
    assignedDesk: "Priradený tím",
    assignedDeskText: "CZ/SK viacjazyčný hypotekárny desk • kontakt do 24h (Po–Pi)",
    deleteSent: "Žiadosť o výmaz odoslaná",
    deleteRequest: "Požiadať o výmaz dát",
    factorLabels: { incomeStrength: "Sila príjmu", profileStability: "Stabilita profilu", documentationReadiness: "Pripravenosť dokumentov", timelineReadiness: "Časová pripravenosť" },
    statusGood: "Dobré",
    statusConcern: "Pozor",
    statusBlocker: "Blokér",
    improveDelta: (d, p) => `Po zlepšení slabších oblastí sa model môže posunúť o +${d} bodov na ${p} %.`,
  };
  const uk: QuizCopy = {
    ...en,
    errFillContact: "Заповніть ім'я, email і телефон.",
    errInvalidEmail: "Формат email здається некоректним.",
    errNeedBrokerConsent: "Для відправки потрібна згода на контакт з брокером.",
    errDeleteEmail: "Введіть коректний email для запиту на видалення.",
    requestFailed: "Запит не виконано. Спробуйте ще раз.",
    tipsGreen: ["Підготуйте підтвердження доходу за останній період.", "Перевірте власні кошти на додаткові витрати та комісії."],
    tipsYellow: ["Задокументуйте стабільність доходу (довша історія роботи/бізнесу).", "Зменшіть щомісячні зобов'язання перед поданням.", "Для іноземців підготуйте документи про перебування."],
    tipsRed: ["Попросіть брокера про альтернативну структуру (нижчий LTV, співпозичальник).", "Спочатку стабілізуйте дохід і зобов'язання, потім повторіть перевірку.", "Індивідуальний розгляд вирішує — «червоні» кейси можна покращити."],
    analyticsTitle: "Згода на анонімну аналітику",
    analyticsText: "Допомагає покращувати анкету. Персональні дані не надсилаються.",
    allow: "Дозволити",
    withoutAnalytics: "Продовжити без аналітики",
    whyScore: "Чому ваш результат саме такий",
    improveTitle: "Як підвищити шанси схвалення",
    nextTitle: "Що буде після надсилання",
    nextSla: "Команда брокерів зв'яжеться протягом 24 годин (пн–пт).",
    next1: "Крок 1: підтвердження базових даних",
    next2: "Крок 2: перелік документів",
    next3: "Крок 3: реалістичний шлях фінансування",
    brokerConsentText: "Я погоджуюся на передачу контактних даних іпотечному брокеру для зв'язку.",
    analyticsConsentText: "Я погоджуюся на анонімну аналітику для покращення сервісу.",
    retentionHelp: "Контакти зберігаються лише на час обробки заявки. Видалення можна запросити нижче.",
    assignedDesk: "Призначена команда",
    assignedDeskText: "Багатомовний іпотечний деск CZ/SK • зв'язок протягом 24 год (пн–пт)",
    deleteSent: "Запит на видалення надіслано",
    deleteRequest: "Запросити видалення даних",
    factorLabels: { incomeStrength: "Сила доходу", profileStability: "Стабільність профілю", documentationReadiness: "Готовність документів", timelineReadiness: "Готовність за часом" },
    statusGood: "Добре",
    statusConcern: "Увага",
    statusBlocker: "Блокер",
    improveDelta: (d, p) => `Після покращення слабких зон модельний бал може зрости на +${d} до ${p}%.`,
  };
  const ru: QuizCopy = {
    ...en,
    errFillContact: "Укажите имя, email и телефон.",
    errInvalidEmail: "Похоже, формат email неверный.",
    errNeedBrokerConsent: "Для отправки нужно согласие на контакт с брокером.",
    errDeleteEmail: "Введите корректный email для запроса на удаление.",
    requestFailed: "Запрос не выполнен. Попробуйте снова.",
    tipsGreen: ["Подготовьте подтверждение дохода за последний период.", "Проверьте собственные средства на доп. расходы и комиссии."],
    tipsYellow: ["Задокументируйте стабильность дохода (длиннее стаж/бизнес).", "Снизьте ежемесячные обязательства перед подачей.", "Для иностранцев подготовьте документы о пребывании."],
    tipsRed: ["Попросите брокера об альтернативной структуре (ниже LTV, созаемщик).", "Сначала стабилизируйте доход и обязательства, затем повторите проверку.", "Индивидуальный разбор важен — «красные» кейсы можно улучшить."],
    analyticsTitle: "Согласие на анонимную аналитику",
    analyticsText: "Помогает улучшать анкету. Персональные данные не отправляются.",
    allow: "Разрешить",
    withoutAnalytics: "Продолжить без аналитики",
    whyScore: "Почему получился такой результат",
    improveTitle: "Как повысить шансы одобрения",
    nextTitle: "Что будет после отправки",
    nextSla: "Команда брокеров свяжется в течение 24 часов (пн–пт).",
    next1: "Шаг 1: подтверждение базовых данных",
    next2: "Шаг 2: список документов",
    next3: "Шаг 3: реалистичный путь финансирования",
    brokerConsentText: "Я согласен на передачу контактных данных ипотечному брокеру для связи.",
    analyticsConsentText: "Я согласен на анонимную аналитику для улучшения сервиса.",
    retentionHelp: "Контакты хранятся только на время обработки заявки. Удаление можно запросить ниже.",
    assignedDesk: "Назначенная команда",
    assignedDeskText: "Многоязычный ипотечный деск CZ/SK • связь в течение 24 ч (пн–пт)",
    deleteSent: "Запрос на удаление отправлен",
    deleteRequest: "Запросить удаление данных",
    factorLabels: { incomeStrength: "Сила дохода", profileStability: "Стабильность профиля", documentationReadiness: "Готовность документов", timelineReadiness: "Готовность по срокам" },
    statusGood: "Хорошо",
    statusConcern: "Внимание",
    statusBlocker: "Блокер",
    improveDelta: (d, p) => `При улучшении слабых зон модельный балл может вырасти на +${d} до ${p}%.`,
  };
  const vi: QuizCopy = {
    ...en,
    errFillContact: "Vui lòng điền họ tên, email và số điện thoại.",
    errInvalidEmail: "Định dạng email không hợp lệ.",
    errNeedBrokerConsent: "Cần đồng ý để môi giới liên hệ mới gửi được.",
    errDeleteEmail: "Nhập email hợp lệ để yêu cầu xóa dữ liệu.",
    requestFailed: "Yêu cầu thất bại. Vui lòng thử lại.",
    tipsGreen: ["Chuẩn bị chứng minh thu nhập kỳ gần nhất.", "Kiểm tra quỹ tự có cho chi phí phát sinh và phí."],
    tipsYellow: ["Chứng minh thu nhập ổn định (làm lâu hơn/kinh doanh lâu hơn).", "Giảm nghĩa vụ hàng tháng trước khi nộp.", "Người nước ngoài chuẩn bị giấy tờ cư trú."],
    tipsRed: ["Hỏi môi giới cấu trúc thay thế (LTV thấp hơn, đồng vay).", "Ổn định thu nhập và nợ trước, rồi kiểm tra lại.", "Từng trường hợp khác nhau — trường hợp „đỏ“ vẫn có thể cải thiện."],
    analyticsTitle: "Đồng ý phân tích ẩn danh",
    analyticsText: "Giúp cải thiện luồng khảo sát. Không gửi dữ liệu cá nhân.",
    allow: "Đồng ý",
    withoutAnalytics: "Tiếp tục không phân tích",
    whyScore: "Vì sao điểm của bạn như vậy",
    improveTitle: "Cách tăng khả năng được duyệt",
    nextTitle: "Điều gì xảy ra sau khi gửi",
    nextSla: "Đội môi giới liên hệ trong 24 giờ (Thứ 2–Thứ 6).",
    next1: "Bước 1: xác nhận thông tin cơ bản",
    next2: "Bước 2: danh sách giấy tờ",
    next3: "Bước 3: lộ trình tài chính thực tế",
    brokerConsentText: "Tôi đồng ý chia sẻ thông tin liên hệ với môi giới thế chấp để được liên lạc.",
    analyticsConsentText: "Tôi đồng ý phân tích ẩn danh để cải thiện dịch vụ.",
    retentionHelp: "Liên hệ chỉ lưu trong thời gian xử lý. Có thể yêu cầu xóa bên dưới.",
    assignedDesk: "Nhóm phụ trách",
    assignedDeskText: "Bàn thế chấp đa ngôn ngữ CZ/SK • liên hệ trong 24h (T2–T6)",
    deleteSent: "Đã gửi yêu cầu xóa",
    deleteRequest: "Yêu cầu xóa dữ liệu",
    factorLabels: { incomeStrength: "Sức mạnh thu nhập", profileStability: "Ổn định hồ sơ", documentationReadiness: "Sẵn sàng hồ sơ", timelineReadiness: "Sẵn sàng thời gian" },
    statusGood: "Tốt",
    statusConcern: "Lưu ý",
    statusBlocker: "Chặn",
    improveDelta: (d, p) => `Nếu cải thiện phần yếu, điểm mô hình có thể tăng +${d} lên ${p}%.`,
  };
  const ro: QuizCopy = {
    ...en,
    errFillContact: "Completați numele, emailul și telefonul.",
    errInvalidEmail: "Formatul emailului pare invalid.",
    errNeedBrokerConsent: "Este necesar acordul pentru contactul brokerului.",
    errDeleteEmail: "Introduceți un email valid pentru ștergere.",
    requestFailed: "Cererea a eșuat. Încercați din nou.",
    tipsGreen: ["Pregătiți dovada venitului pentru ultima perioadă.", "Verificați fondurile proprii pentru costuri și comisioane."],
    tipsYellow: ["Documentați stabilitatea venitului (vechime mai mare).", "Reduceți obligațiile lunare înainte de depunere.", "Pentru străini, pregătiți documentele de ședere."],
    tipsRed: ["Cereți brokerului o structură alternativă (LTV mai mic, co-debitor).", "Stabilizați veniturile și datoriile, apoi reluați verificarea.", "Evaluarea individuală contează — și cazurile „roșii” se pot îmbunătăți."],
    analyticsTitle: "Consimțământ pentru analiză anonimă",
    analyticsText: "Ne ajută să îmbunătățim fluxul. Nu trimitem date personale.",
    allow: "Permite",
    withoutAnalytics: "Continuă fără analiză",
    whyScore: "De ce arată scorul așa",
    improveTitle: "Cum crești șansele de aprobare",
    nextTitle: "Ce urmează după trimitere",
    nextSla: "Echipa broker te contactează în 24 de ore (Lun–Vin).",
    next1: "Pasul 1: confirmarea datelor de bază",
    next2: "Pasul 2: lista documentelor",
    next3: "Pasul 3: traseu de finanțare realist",
    brokerConsentText: "Sunt de acord ca datele mele de contact să fie transmise unui broker ipotecar pentru urmărire.",
    analyticsConsentText: "Sunt de acord cu analiza anonimă pentru îmbunătățirea serviciului.",
    retentionHelp: "Contactele se păstrează doar pentru procesarea leadului. Poți solicita ștergerea mai jos.",
    assignedDesk: "Echipa alocată",
    assignedDeskText: "Desk ipotecar multilingv CZ/SK • contact în 24h (Lun–Vin)",
    deleteSent: "Cererea de ștergere a fost trimisă",
    deleteRequest: "Solicită ștergerea datelor",
    factorLabels: { incomeStrength: "Puterea venitului", profileStability: "Stabilitate profil", documentationReadiness: "Pregătire documente", timelineReadiness: "Pregătire temporală" },
    statusGood: "Bun",
    statusConcern: "Atenție",
    statusBlocker: "Blocaj",
    improveDelta: (d, p) => `Îmbunătățind zonele slabe, scorul modelat poate crește cu +${d} până la ${p}%.`,
  };
  const es: QuizCopy = {
    ...en,
    errFillContact: "Completa nombre, email y teléfono.",
    errInvalidEmail: "El formato del email no parece válido.",
    errNeedBrokerConsent: "Se requiere consentimiento de contacto con el broker para enviar.",
    errDeleteEmail: "Introduce un email válido para la solicitud de borrado.",
    requestFailed: "La solicitud falló. Inténtalo de nuevo.",
    tipsGreen: ["Prepara justificantes de ingresos del último periodo.", "Confirma fondos propios para gastos y comisiones."],
    tipsYellow: ["Documenta estabilidad de ingresos (antigüedad laboral/autónomo).", "Reduce deudas mensuales antes de presentar.", "Si eres extranjero, prepara documentación de residencia."],
    tipsRed: ["Pide al broker una estructura alternativa (LTV más bajo, cotitular).", "Estabiliza ingresos y deudas primero y vuelve a comprobar.", "La valoración individual importa — los casos „rojos“ pueden mejorar."],
    analyticsTitle: "Consentimiento para analítica anónima",
    analyticsText: "Ayuda a mejorar el cuestionario. No enviamos datos personales.",
    allow: "Permitir",
    withoutAnalytics: "Continuar sin analítica",
    whyScore: "Por qué tu puntuación es así",
    improveTitle: "Cómo mejorar la probabilidad de aprobación",
    nextTitle: "Qué pasa después del envío",
    nextSla: "El equipo broker contacta en 24 horas (lun–vie).",
    next1: "Paso 1: confirmar datos básicos",
    next2: "Paso 2: lista de documentos",
    next3: "Paso 3: camino de financiación realista",
    brokerConsentText: "Acepto que mis datos de contacto se compartan con un broker hipotecario para el seguimiento.",
    analyticsConsentText: "Acepto analítica anónima para mejorar el servicio.",
    retentionHelp: "Los contactos se conservan solo el tiempo necesario para el lead. Puedes pedir borrado abajo.",
    assignedDesk: "Equipo asignado",
    assignedDeskText: "Mesa hipotecaria multilingüe CZ/SK • contacto en 24h (lun–vie)",
    deleteSent: "Solicitud de borrado enviada",
    deleteRequest: "Solicitar borrado de datos",
    factorLabels: { incomeStrength: "Solidez del ingreso", profileStability: "Estabilidad del perfil", documentationReadiness: "Preparación documental", timelineReadiness: "Preparación temporal" },
    statusGood: "Bien",
    statusConcern: "Atención",
    statusBlocker: "Bloqueo",
    improveDelta: (d, p) => `Si mejoras las áreas débiles, el modelo puede subir +${d} puntos hasta ${p}%.`,
  };
  const fr: QuizCopy = {
    ...en,
    errFillContact: "Renseignez nom, e-mail et téléphone.",
    errInvalidEmail: "Le format de l'e-mail semble invalide.",
    errNeedBrokerConsent: "Le consentement pour le contact courtier est requis pour envoyer.",
    errDeleteEmail: "Entrez un e-mail valide pour la demande de suppression.",
    requestFailed: "La requête a échoué. Réessayez.",
    tipsGreen: ["Préparez les justificatifs de revenus de la dernière période.", "Vérifiez vos fonds propres pour frais et honoraires."],
    tipsYellow: ["Documentez la stabilité des revenus (ancienneté).", "Réduisez les charges mensuelles avant dépôt.", "Pour les non-résidents, préparez les documents de séjour."],
    tipsRed: ["Demandez au courtier une structure alternative (LTV plus bas, co-emprunteur).", "Stabilisez revenus et dettes puis refaites le test.", "L'étude au cas par cas compte — les dossiers « rouges » peuvent s'améliorer."],
    analyticsTitle: "Consentement à l'analyse anonyme",
    analyticsText: "Nous aide à améliorer le questionnaire. Aucune donnée personnelle n'est envoyée.",
    allow: "Autoriser",
    withoutAnalytics: "Continuer sans analyse",
    whyScore: "Pourquoi votre score est ainsi",
    improveTitle: "Comment augmenter vos chances d'approbation",
    nextTitle: "Ce qui se passe après l'envoi",
    nextSla: "L'équipe courtier vous contacte sous 24 h (lun–ven).",
    next1: "Étape 1 : confirmer les informations de base",
    next2: "Étape 2 : liste des documents",
    next3: "Étape 3 : parcours de financement réaliste",
    brokerConsentText: "J'accepte que mes coordonnées soient transmises à un courtier hypothécaire pour le suivi.",
    analyticsConsentText: "J'accepte l'analyse anonyme pour améliorer le service.",
    retentionHelp: "Les contacts sont conservés le temps nécessaire au traitement du lead. Demandez la suppression ci-dessous.",
    assignedDesk: "Équipe assignée",
    assignedDeskText: "Desk hypothécaire multilingue CZ/SK • contact sous 24 h (lun–ven)",
    deleteSent: "Demande de suppression envoyée",
    deleteRequest: "Demander la suppression des données",
    factorLabels: { incomeStrength: "Solidité du revenu", profileStability: "Stabilité du profil", documentationReadiness: "Préparation documentaire", timelineReadiness: "Préparation temporelle" },
    statusGood: "Bon",
    statusConcern: "Attention",
    statusBlocker: "Blocage",
    improveDelta: (d, p) => `En améliorant les points faibles, le score modélisé peut gagner +${d} points jusqu'à ${p} %.`,
  };
  const it: QuizCopy = {
    ...en,
    errFillContact: "Compila nome, e-mail e telefono.",
    errInvalidEmail: "Il formato dell'e-mail non sembra valido.",
    errNeedBrokerConsent: "Per inviare il modulo serve il consenso al contatto con il broker.",
    errDeleteEmail: "Inserisci un'e-mail valida per la richiesta di cancellazione.",
    requestFailed: "Richiesta non riuscita. Riprova.",
    tipsGreen: ["Prepara una prova di reddito dell'ultimo periodo.", "Verifica la riserva di fondi propri per costi accessori e commissioni."],
    tipsYellow: ["Documenta la stabilità del reddito (storia lavorativa o attività più lunga).", "Riduci gli impegni mensili esistenti prima della domanda.", "Prepara i documenti di residenza se sei un richiedente straniero."],
    tipsRed: ["Chiedi al broker una struttura alternativa (LTV più basso, co-intestatario).", "Stabilizza prima reddito e passività, poi ripeti la verifica.", "La valutazione individuale conta: anche i casi „rossi“ possono migliorare."],
    analyticsTitle: "Consenso per analisi anonima",
    analyticsText: "Ci aiuta a migliorare il flusso del questionario. Nessun dato personale viene inviato.",
    allow: "Consenti",
    withoutAnalytics: "Continua senza analisi",
    whyScore: "Perché il tuo punteggio è così",
    improveTitle: "Come aumentare le probabilità di approvazione",
    nextTitle: "Cosa succede dopo l'invio",
    nextSla: "Il team broker ti contatta entro 24 ore (lun–ven).",
    next1: "Passo 1: conferma dei dati di base",
    next2: "Passo 2: checklist dei documenti",
    next3: "Passo 3: percorso di finanziamento realistico",
    brokerConsentText: "Acconsento alla condivisione dei miei dati di contatto con un broker mutui per il follow-up.",
    analyticsConsentText: "Acconsento all'analisi anonima per migliorare il servizio.",
    retentionHelp: "I contatti sono conservati solo per il tempo necessario alla gestione della richiesta. Puoi chiedere la cancellazione qui sotto.",
    assignedDesk: "Team assegnato",
    assignedDeskText: "Desk mutui multilingue CZ/SK • contatto entro 24 h (lun–ven)",
    deleteSent: "Richiesta di cancellazione inviata",
    deleteRequest: "Richiedi la cancellazione dei dati",
    factorLabels: { incomeStrength: "Solidità del reddito", profileStability: "Stabilità del profilo", documentationReadiness: "Prontezza documentale", timelineReadiness: "Prontezza temporale" },
    statusGood: "Buono",
    statusConcern: "Attenzione",
    statusBlocker: "Blocco",
    improveDelta: (d, p) => `Migliorando le aree deboli, il punteggio stimato può aumentare di +${d} punti fino a ${p}%.`,
  };
  const tr: QuizCopy = {
    ...en,
    errFillContact: "Lütfen ad, e-posta ve telefonu doldurun.",
    errInvalidEmail: "E-posta formatı geçersiz görünüyor.",
    errNeedBrokerConsent: "Göndermek için broker iletişim izni gerekir.",
    errDeleteEmail: "Silme talebi için geçerli bir e-posta girin.",
    requestFailed: "İstek başarısız oldu. Lütfen tekrar deneyin.",
    tipsGreen: ["Son döneme ait gelir belgelerini hazırlayın.", "Yan masraflar ve ücretler için öz kaynağınızı kontrol edin."],
    tipsYellow: ["Gelir istikrarını belgeleyin (daha uzun iş/şirket geçmişi).", "Başvurudan önce aylık yükümlülükleri azaltın.", "Yabancı başvurular için oturum belgelerini hazırlayın."],
    tipsRed: ["Brokere alternatif yapı sorun (düşük LTV, ortak başvuran).", "Önce gelir ve borçları stabilize edin, sonra tekrar kontrol edin.", "Bireysel değerlendirme önemlidir — „kırmızı“ vakalar da iyileşebilir."],
    analyticsTitle: "Anonim analiz izni",
    analyticsText: "Anketi iyileştirmemize yardımcı olur. Kişisel veri gönderilmez.",
    allow: "İzin ver",
    withoutAnalytics: "Analiz olmadan devam et",
    whyScore: "Skorunuz neden böyle",
    improveTitle: "Onay olasılığını nasıl artırırsınız",
    nextTitle: "Gönderimden sonra ne olur",
    nextSla: "Broker ekibi 24 saat içinde iletişime geçer (Pt–Cu).",
    next1: "Adım 1: temel bilgileri onaylama",
    next2: "Adım 2: belge listesi",
    next3: "Adım 3: gerçekçi finansman yolu",
    brokerConsentText: "İletişim bilgilerimin ipotek brokerına iletilmesini kabul ediyorum.",
    analyticsConsentText: "Hizmeti geliştirmek için anonim analize izin veriyorum.",
    retentionHelp: "İletişim bilgileri yalnızca lead işleme süresince saklanır. Aşağıdan silme talep edebilirsiniz.",
    assignedDesk: "Atanan ekip",
    assignedDeskText: "Çok dilli ipotek masası CZ/SK • 24 saat içinde iletişim (Pt–Cu)",
    deleteSent: "Silme talebi gönderildi",
    deleteRequest: "Veri silme talep et",
    factorLabels: { incomeStrength: "Gelir gücü", profileStability: "Profil istikrarı", documentationReadiness: "Belge hazırlığı", timelineReadiness: "Zamanlama hazırlığı" },
    statusGood: "İyi",
    statusConcern: "Dikkat",
    statusBlocker: "Engel",
    improveDelta: (d, p) => `Zayıf alanları iyileştirirseniz model skoru +${d} puan ${p}%’e çıkabilir.`,
  };
  const zh: QuizCopy = {
    ...en,
    errFillContact: "请填写姓名、邮箱和电话。",
    errInvalidEmail: "邮箱格式似乎无效。",
    errNeedBrokerConsent: "需要同意经纪人联系才能提交。",
    errDeleteEmail: "请输入有效邮箱以申请删除。",
    requestFailed: "请求失败，请重试。",
    tipsGreen: ["准备最近一个周期的收入证明。", "确认自有资金可覆盖杂费与手续费。"],
    tipsYellow: ["用材料体现收入稳定性（更长工龄/经营年限）。", "提交前尽量降低月供负担。", "外籍申请人准备居留类文件。"],
    tipsRed: ["向经纪人询问替代结构（更低LTV、共同借款人）。", "先稳定收入与负债，再重新评估。", "个案评估很重要——“红灯”案例也能改善。"],
    analyticsTitle: "同意匿名分析",
    analyticsText: "用于改进问卷流程，不发送个人数据。",
    allow: "允许",
    withoutAnalytics: "不使用分析继续",
    whyScore: "为何得到这个分数",
    improveTitle: "如何提高获批概率",
    nextTitle: "提交后会发生什么",
    nextSla: "经纪人团队会在24小时内联系（周一至周五）。",
    next1: "第1步：确认基本信息",
    next2: "第2步：材料清单",
    next3: "第3步：可行的融资路径",
    brokerConsentText: "我同意将联系方式提供给按揭经纪人以便跟进。",
    analyticsConsentText: "我同意匿名分析以改进服务。",
    retentionHelp: "联系方式仅在处理线索所需期间保留，可在下方申请删除。",
    assignedDesk: "已分配团队",
    assignedDeskText: "CZ/SK 多语言按揭服务台 • 24小时内联系（周一至周五）",
    deleteSent: "删除申请已发送",
    deleteRequest: "申请删除数据",
    factorLabels: { incomeStrength: "收入强度", profileStability: "资料稳定性", documentationReadiness: "材料准备度", timelineReadiness: "时间准备度" },
    statusGood: "良好",
    statusConcern: "注意",
    statusBlocker: "阻碍",
    improveDelta: (d, p) => `若改善薄弱项，模型分数可能上升 +${d} 点至 ${p}%。`,
  };
  if (locale === "cs") return cs;
  if (locale === "de") return de;
  if (locale === "pl") return pl;
  if (locale === "sk") return sk;
  if (locale === "uk") return uk;
  if (locale === "ru") return ru;
  if (locale === "vi") return vi;
  if (locale === "ro") return ro;
  if (locale === "es") return es;
  if (locale === "fr") return fr;
  if (locale === "it") return it;
  if (locale === "tr") return tr;
  if (locale === "zh") return zh;
  return en;
}

function Option({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex min-h-[48px] w-full rounded-lg border px-4 py-4 text-left text-[15px] font-medium transition ${
        selected
          ? "border-[var(--color-brand-600)] bg-[var(--color-brand-600)] text-white"
          : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-brand-600)] hover:bg-[#F5F9FF] dark:hover:bg-white/5"
      }`}
    >
      {label}
    </button>
  );
}

function NavRow({
  onBack,
  onNext,
  backLabel,
  nextLabel,
  busy,
}: {
  onBack?: () => void;
  onNext: () => void;
  backLabel?: string;
  nextLabel: string;
  busy?: boolean;
}) {
  return (
    <div className="mt-auto flex gap-3 pt-8">
      {onBack && backLabel ? (
        <button
          type="button"
          onClick={onBack}
          className="h-12 min-h-[48px] flex-1 rounded-lg border border-[var(--color-brand-600)] bg-transparent text-sm font-semibold text-[var(--color-brand-600)] transition hover:bg-[#F5F9FF] dark:hover:bg-white/5"
        >
          {backLabel}
        </button>
      ) : (
        <div className="flex-1" />
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={busy}
        className="h-12 min-h-[48px] flex-1 rounded-lg bg-[var(--color-brand-600)] text-sm font-semibold text-white transition hover:bg-[var(--color-brand-800)] active:scale-[0.98] disabled:opacity-60"
      >
        {busy ? "…" : nextLabel}
      </button>
    </div>
  );
}
