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
        <section className="mb-5 rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700 shadow-sm">
          <p className="font-semibold text-[var(--color-brand-950)]">
            {c.analyticsTitle}
          </p>
          <p className="mt-1 text-xs text-zinc-600">
            {c.analyticsText}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setAnalyticsConsent(true)}
              className="h-10 rounded-lg bg-[var(--color-brand-600)] px-3 text-xs font-semibold text-white"
            >
              {c.allow}
            </button>
            <button
              type="button"
              onClick={() => setAnalyticsConsent(false)}
              className="h-10 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-700"
            >
              {c.withoutAnalytics}
            </button>
          </div>
        </section>
      )}

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-zinc-600">
          {t("progress", { current: progressStep, total: totalSteps })}
        </p>
        <LocaleSwitcher />
      </div>
      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-zinc-200">
        <div
          className="h-full rounded-full bg-[var(--color-brand-600)] transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {step === 0 && (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-xl font-semibold text-[var(--color-brand-950)]">
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
          <h2 className="text-xl font-semibold text-[var(--color-brand-950)]">
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
          <h2 className="text-xl font-semibold text-[var(--color-brand-950)]">
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
            <h2 className="text-xl font-semibold text-[var(--color-brand-950)]">
              {t("resultTitle")}
            </h2>
            <p className="mt-3 text-sm font-medium text-[var(--color-brand-950)]">
              {t("resultIntro", { percent: probability })}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-600">{t("aiNotice")}</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <p className="text-center text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {t("probabilityLabel")}
            </p>
            <p className="mt-2 text-center text-4xl font-bold tabular-nums text-[var(--color-brand-950)]">
              {probability}%
            </p>
            <div className="mt-4 flex justify-center">
              <Semaphore signal={signal} />
            </div>
            <div className="mt-4 flex justify-center gap-4 text-xs font-semibold text-zinc-600">
              <span className={signal === "red" ? "text-red-700" : ""}>{t("signal_red")}</span>
              <span className={signal === "yellow" ? "text-amber-700" : ""}>
                {t("signal_yellow")}
              </span>
              <span className={signal === "green" ? "text-emerald-700" : ""}>
                {t("signal_green")}
              </span>
            </div>
            <p className="mt-1 text-center text-xs text-zinc-500">{t("semaphoreLegend")}</p>
          </div>

          <p className="text-sm leading-relaxed text-zinc-700">{hint}</p>
          <div className="rounded-xl border border-zinc-200 bg-white p-4">
            <p className="text-sm font-semibold text-[var(--color-brand-950)]">
              {c.whyScore}
            </p>
            <div className="mt-3 grid gap-2">
              {factors.map((factor) => (
                <FactorRow key={factor.key} factor={factor} locale={locale} />
              ))}
            </div>
            {simulatedImprovement && (
              <p className="mt-3 rounded-lg bg-indigo-50 px-3 py-2 text-xs text-indigo-900">
                {c.improveDelta(simulatedImprovement.delta, simulatedImprovement.probability)}
              </p>
            )}
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4">
            <p className="text-sm font-semibold text-[var(--color-brand-950)]">
              {c.improveTitle}
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700">
              {improvementTips.map((tip) => (
                <li key={tip}>• {tip}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm font-medium text-[var(--color-brand-800)]">{t("allSignalsLead")}</p>
          <p className="text-xs leading-relaxed text-zinc-500">{t("disclaimer")}</p>

          <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
            <p className="text-sm font-semibold text-indigo-900">
              {c.nextTitle}
            </p>
            <p className="mt-1 text-xs text-indigo-800">
              {c.nextSla}
            </p>
            <ul className="mt-2 space-y-1 text-xs text-indigo-900">
              <li>• {c.next1}</li>
              <li>• {c.next2}</li>
              <li>• {c.next3}</li>
            </ul>
          </div>

          {!leadDone ? (
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <h3 className="text-base font-semibold text-[var(--color-brand-950)]">
                {t("result_contactTitle")}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{t("result_contactHint")}</p>
              <div className="mt-4 space-y-3">
                <label className="block text-sm font-medium text-zinc-800">
                  {t("name")}
                  <input
                    className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-base outline-none ring-0 focus:border-[var(--color-brand-600)]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                </label>
                <label className="block text-sm font-medium text-zinc-800">
                  {t("email")}
                  <input
                    className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-base outline-none focus:border-[var(--color-brand-600)]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    type="email"
                    inputMode="email"
                  />
                </label>
                <label className="block text-sm font-medium text-zinc-800">
                  {t("phone")}
                  <input
                    className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-base outline-none focus:border-[var(--color-brand-600)]"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    type="tel"
                    inputMode="tel"
                  />
                </label>
                <label className="flex items-start gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-700">
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
                <label className="flex items-start gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-700">
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
                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl bg-[var(--color-brand-600)] text-base font-semibold text-white transition hover:bg-[var(--color-brand-800)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {t("submit")}
              </button>
              <p className="mt-2 text-xs text-zinc-500">
                {c.retentionHelp}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm font-medium text-emerald-800">{t("thankyou")}</p>
              <div className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
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
                className="h-10 rounded-lg border border-zinc-300 bg-white px-3 text-xs font-semibold text-zinc-700 disabled:opacity-60"
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
        <p className="mt-3 text-sm text-amber-700" role="alert">
          {validationError}
        </p>
      )}
      {error && (
        <p className="mt-4 text-sm text-red-600" role="alert">
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
      ? "text-emerald-700 bg-emerald-50"
      : factor.status === "concern"
        ? "text-amber-700 bg-amber-50"
        : "text-red-700 bg-red-50";

  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-100 px-3 py-2">
      <div>
        <p className="text-sm font-medium text-zinc-800">{labels[factor.key]}</p>
        <p className="text-xs text-zinc-500">{factor.score}/10</p>
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
  const de: QuizCopy = { ...en, analyticsTitle: "Einwilligung für anonyme Analytik", allow: "Zustimmen", withoutAnalytics: "Ohne Analytik fortfahren", whyScore: "Warum Ihr Ergebnis so ausfällt", improveTitle: "Wie Sie die Genehmigungschance verbessern", nextTitle: "Was nach dem Absenden passiert", assignedDesk: "Zugewiesenes Team", deleteRequest: "Datenlöschung anfordern", statusConcern: "Hinweis", statusBlocker: "Blocker", requestFailed: "Anfrage fehlgeschlagen. Bitte erneut versuchen." };
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
  const sk: QuizCopy = { ...en, analyticsTitle: "Súhlas s anonymnou analytikou", allow: "Súhlasím", withoutAnalytics: "Použiť bez analytiky", whyScore: "Prečo vyšlo toto skóre", improveTitle: "Ako zvýšiť šancu schválenia", nextTitle: "Čo nasleduje po odoslaní", assignedDesk: "Priradený tím", deleteRequest: "Požiadať o výmaz dát", requestFailed: "Požiadavka zlyhala. Skúste to znova." };
  const uk: QuizCopy = { ...en, analyticsTitle: "Згода на анонімну аналітику", allow: "Дозволити", withoutAnalytics: "Продовжити без аналітики", whyScore: "Чому ваш результат саме такий", improveTitle: "Як підвищити шанси схвалення", nextTitle: "Що буде після надсилання", assignedDesk: "Призначена команда", deleteRequest: "Запросити видалення даних", deleteSent: "Запит на видалення надіслано", requestFailed: "Запит не виконано. Спробуйте ще раз." };
  const ru: QuizCopy = { ...en, analyticsTitle: "Согласие на анонимную аналитику", allow: "Разрешить", withoutAnalytics: "Продолжить без аналитики", whyScore: "Почему получился такой результат", improveTitle: "Как повысить шансы одобрения", nextTitle: "Что будет после отправки", assignedDesk: "Назначенная команда", deleteRequest: "Запросить удаление данных", deleteSent: "Запрос на удаление отправлен", requestFailed: "Запрос не выполнен. Попробуйте снова." };
  const vi: QuizCopy = { ...en, analyticsTitle: "Dong y phan tich an danh", allow: "Dong y", withoutAnalytics: "Tiep tuc khong dung phan tich", whyScore: "Vi sao diem cua ban nhu vay", improveTitle: "Cach tang kha nang duoc chap thuan", nextTitle: "Dieu gi xay ra sau khi gui", assignedDesk: "Nhom phu trach", deleteRequest: "Yeu cau xoa du lieu", deleteSent: "Da gui yeu cau xoa", requestFailed: "Yeu cau that bai. Vui long thu lai." };
  const ro: QuizCopy = { ...en, analyticsTitle: "Consimtamant pentru analiza anonima", allow: "Permite", withoutAnalytics: "Continua fara analiza", whyScore: "De ce arata scorul asa", improveTitle: "Cum cresti sansele de aprobare", nextTitle: "Ce urmeaza dupa trimitere", assignedDesk: "Echipa alocata", deleteRequest: "Solicita stergerea datelor", deleteSent: "Cererea de stergere a fost trimisa", requestFailed: "Cererea a esuat. Incearca din nou." };
  const es: QuizCopy = { ...en, analyticsTitle: "Consentimiento para analitica anonima", allow: "Permitir", withoutAnalytics: "Continuar sin analitica", whyScore: "Por que tu puntuacion es asi", improveTitle: "Como mejorar la probabilidad de aprobacion", nextTitle: "Que pasa despues del envio", assignedDesk: "Equipo asignado", deleteRequest: "Solicitar borrado de datos", deleteSent: "Solicitud de borrado enviada", requestFailed: "La solicitud fallo. Intentalo de nuevo." };
  const fr: QuizCopy = { ...en, analyticsTitle: "Consentement a l'analyse anonyme", allow: "Autoriser", withoutAnalytics: "Continuer sans analyse", whyScore: "Pourquoi votre score est ainsi", improveTitle: "Comment augmenter vos chances d'approbation", nextTitle: "Ce qui se passe apres l'envoi", assignedDesk: "Equipe assignee", deleteRequest: "Demander la suppression des donnees", deleteSent: "Demande de suppression envoyee", requestFailed: "La requete a echoue. Reessayez." };
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
  const tr: QuizCopy = { ...en, analyticsTitle: "Anonim analiz izni", allow: "Izin ver", withoutAnalytics: "Analiz olmadan devam et", whyScore: "Skorunuz neden boyle", improveTitle: "Onay olasiligini nasil artirirsiniz", nextTitle: "Gonderimden sonra ne olur", assignedDesk: "Atanan ekip", deleteRequest: "Veri silme talep et", deleteSent: "Silme talebi gonderildi", requestFailed: "Istek basarisiz oldu. Lutfen tekrar deneyin." };
  const zh: QuizCopy = { ...en, analyticsTitle: "同意匿名分析", allow: "允许", withoutAnalytics: "不使用分析继续", whyScore: "为何得到这个分数", improveTitle: "如何提高获批概率", nextTitle: "提交后会发生什么", assignedDesk: "已分配团队", deleteRequest: "申请删除数据", deleteSent: "删除申请已发送", requestFailed: "请求失败，请重试。" };
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
      className={`flex w-full rounded-2xl border px-4 py-4 text-left text-base font-medium transition ${
        selected
          ? "border-[var(--color-brand-600)] bg-white shadow-sm ring-2 ring-[var(--color-brand-600)]/20"
          : "border-zinc-200 bg-white/60 hover:border-zinc-300"
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
          className="h-12 flex-1 rounded-xl border border-zinc-200 bg-white text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
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
        className="h-12 flex-1 rounded-xl bg-[var(--color-brand-600)] text-sm font-semibold text-white hover:bg-[var(--color-brand-800)] disabled:opacity-60"
      >
        {busy ? "…" : nextLabel}
      </button>
    </div>
  );
}
