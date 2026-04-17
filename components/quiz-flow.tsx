"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { QuizPayload, Signal } from "@/lib/evaluation";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Semaphore } from "@/components/semaphore";

type Step = 0 | 1 | 2 | 3;

export function QuizFlow({ locale }: { locale: string }) {
  const t = useTranslations("quiz");
  const [step, setStep] = useState<Step>(0);
  const [intent, setIntent] = useState<QuizPayload["intent"]>("purchase");
  const [income, setIncome] = useState<QuizPayload["income"]>("employed");
  const [timeline, setTimeline] = useState<QuizPayload["timeline"]>("soon");
  const [probability, setProbability] = useState<number | null>(null);
  const [signal, setSignal] = useState<Signal | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadDone, setLeadDone] = useState(false);

  const totalSteps = 3;
  const progressStep = step < 3 ? step + 1 : 3;

  const payload = useMemo(
    (): QuizPayload => ({ intent, income, timeline }),
    [intent, income, timeline],
  );

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
      const data = (await res.json()) as { probability: number; signal: Signal };
      setProbability(data.probability);
      setSignal(data.signal);
      setStep(3);
    } catch {
      setError("Request failed");
    } finally {
      setLoading(false);
    }
  }

  async function submitLead() {
    if (probability === null || !signal) return;
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
        }),
      });
      if (!res.ok) throw new Error("lead failed");
      setLeadDone(true);
    } catch {
      setError("Request failed");
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
      ? [
          locale === "cs"
            ? "Připravte potvrzení o příjmu za poslední období."
            : "Prepare proof of income for the latest period.",
          locale === "cs"
            ? "Zkontrolujte rezervu vlastních prostředků na vedlejší náklady."
            : "Confirm own-funds reserve for side costs and fees.",
        ]
      : signal === "yellow"
        ? [
            locale === "cs"
              ? "Doložte stabilitu příjmu (delší historie zaměstnání / podnikání)."
              : "Document income stability (longer employment/business history).",
            locale === "cs"
              ? "Snižte stávající měsíční závazky před podáním."
              : "Reduce existing monthly debt obligations before submission.",
            locale === "cs"
              ? "Připravte dokumenty k rezidenci/pobytu, pokud jste cizinec."
              : "Prepare residency documents if you are a foreign applicant.",
          ]
        : signal === "red"
          ? [
              locale === "cs"
                ? "Nechte makléře navrhnout alternativní strukturu (nižší LTV, spolužadatel)."
                : "Ask a broker for alternative structuring (lower LTV, co-applicant).",
              locale === "cs"
                ? "Nejprve stabilizujte příjem a závazky, pak proveďte nový check."
                : "Stabilize income and liabilities first, then re-run the check.",
              locale === "cs"
                ? "Vyplatí se řešit individuálně – i červené případy se často otočí."
                : "Individual review matters — red cases can still be turned around.",
            ]
          : [];

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-zinc-600">
          {t("progress", { current: progressStep, total: totalSteps })}
        </p>
        <LocaleSwitcher />
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
            onNext={() => setStep(1)}
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
            onNext={() => setStep(2)}
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
              {locale === "cs"
                ? "Jak zvýšit šanci na schválení"
                : "How to improve approval odds"}
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700">
              {improvementTips.map((tip) => (
                <li key={tip}>• {tip}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm font-medium text-[var(--color-brand-800)]">{t("allSignalsLead")}</p>
          <p className="text-xs leading-relaxed text-zinc-500">{t("disclaimer")}</p>

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
              </div>
              <button
                type="button"
                onClick={submitLead}
                disabled={loading || !name.trim() || !email.trim() || !phone.trim()}
                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl bg-[var(--color-brand-600)] text-base font-semibold text-white transition hover:bg-[var(--color-brand-800)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {t("submit")}
              </button>
            </div>
          ) : (
            <p className="text-sm font-medium text-emerald-800">{t("thankyou")}</p>
          )}
        </section>
      )}

      {error && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
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
