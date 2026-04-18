"use client";

import { useTranslations } from "next-intl";
import type {
  A1bAmericanPurpose,
  A2Location,
  A4Downpayment,
  A5Timeline,
  B1Employment,
  B3Duration,
  C4PaymentHistory,
  C5Residency,
  EnhancedQuizAnswers,
  LoanKind,
  QuestionId,
  SecondaryIncome,
} from "@/lib/questionnaire/types";

type Props = {
  activeId: QuestionId;
  answers: EnhancedQuizAnswers;
  onPatch: (patch: Partial<EnhancedQuizAnswers>) => void;
};

export function EnhancedQuizPanel({ activeId, answers, onPatch }: Props) {
  const t = useTranslations("quizV2");

  switch (activeId) {
    case "A1-type":
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("A1.title")}
          </h2>
          <p className="text-sm text-body">{t("A1.hint")}</p>
          <OptionRow
            selected={answers["A1-type"] === "purchase"}
            onSelect={() => onPatch({ "A1-type": "purchase" })}
            label={t("A1.purchase")}
          />
          <OptionRow
            selected={answers["A1-type"] === "refinance"}
            onSelect={() => onPatch({ "A1-type": "refinance" })}
            label={t("A1.refinance")}
          />
          <OptionRow
            selected={answers["A1-type"] === "american-mortgage"}
            onSelect={() => onPatch({ "A1-type": "american-mortgage" })}
            label={t("A1.american_mortgage")}
          />
        </section>
      );

    case "A1b-american-purpose": {
      const opts: A1bAmericanPurpose[] = [
        "debt-consolidation",
        "home-renovation",
        "business",
        "personal-general",
        "investment-liquidity",
      ];
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("A1b.title")}
          </h2>
          <p className="text-sm text-body">{t("A1b.hint")}</p>
          {opts.map((k) => (
            <OptionRow
              key={k}
              selected={answers["A1b-american-purpose"] === k}
              onSelect={() => onPatch({ "A1b-american-purpose": k })}
              label={t(`A1b.${k}` as "A1b.debt-consolidation")}
            />
          ))}
        </section>
      );
    }

    case "A2-location": {
      const opts: A2Location[] = [
        "prague-center",
        "prague-outskirts",
        "central-bohemia",
        "other-city",
        "abroad",
      ];
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("A2.title")}
          </h2>
          <p className="text-sm text-body">{t("A2.hint")}</p>
          {opts.map((k) => (
            <OptionRow
              key={k}
              selected={answers["A2-location"] === k}
              onSelect={() => onPatch({ "A2-location": k })}
              label={t(`A2.${k}` as "A2.prague-center")}
            />
          ))}
        </section>
      );
    }

    case "A3-price": {
      const v = answers["A3-price"] ?? 5;
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("A3.title")}
          </h2>
          <p className="text-sm text-body">{t("A3.hint")}</p>
          <p className="text-center text-3xl font-bold tabular-nums text-[var(--color-brand-950)]">
            {v.toFixed(1)} {t("unit_mil")}
          </p>
          <input
            type="range"
            min={1}
            max={100}
            step={0.5}
            value={v}
            onChange={(e) =>
              onPatch({ "A3-price": Number.parseFloat(e.target.value) })
            }
            className="w-full accent-[var(--color-brand-600)]"
          />
        </section>
      );
    }

    case "A3b-american-prior": {
      const raw = answers["A3b-american-prior"];
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("A3b.title")}
          </h2>
          <p className="text-sm text-body">{t("A3b.hint")}</p>
          <OptionRow
            selected={raw?.hasPrior === "none"}
            onSelect={() =>
              onPatch({ "A3b-american-prior": { hasPrior: "none" } })
            }
            label={t("A3b.none")}
          />
          <OptionRow
            selected={raw?.hasPrior === "yes"}
            onSelect={() =>
              onPatch({
                "A3b-american-prior": {
                  hasPrior: "yes",
                  outstandingCzk: raw?.outstandingCzk ?? 0,
                },
              })
            }
            label={t("A3b.yes")}
          />
          {raw?.hasPrior === "yes" && (
            <label className="block text-sm font-medium text-[var(--color-brand-950)]">
              {t("A3b.amount_label")}
              <input
                type="number"
                inputMode="numeric"
                min={0}
                className="mt-2 min-h-[44px] w-full max-w-xs rounded-lg border border-[var(--color-border)] px-3 py-2 text-[15px]"
                placeholder={t("A3b.amount_ph")}
                value={raw.outstandingCzk ?? ""}
                onChange={(e) =>
                  onPatch({
                    "A3b-american-prior": {
                      hasPrior: "yes",
                      outstandingCzk:
                        Number.parseInt(e.target.value, 10) || 0,
                    },
                  })
                }
              />
            </label>
          )}
        </section>
      );
    }

    case "A3c-american-draw": {
      const priceMil = answers["A3-price"] ?? 5;
      const maxDraw = Math.min(100, Math.max(0.1, priceMil * 1.05));
      const v = answers["A3c-american-draw"];
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("A3c.title")}
          </h2>
          <p className="text-sm text-body">{t("A3c.hint")}</p>
          <label className="block text-sm font-medium text-[var(--color-brand-950)]">
            {t("A3c.amount_label")}
            <input
              type="number"
              inputMode="decimal"
              step="0.1"
              min={0.1}
              max={maxDraw}
              className="mt-2 min-h-[44px] w-full max-w-xs rounded-lg border border-[var(--color-border)] px-3 py-2 text-[15px]"
              placeholder={t("A3c.amount_ph")}
              value={v ?? ""}
              onChange={(e) => {
                const n = Number.parseFloat(e.target.value);
                onPatch({
                  "A3c-american-draw": Number.isFinite(n) ? n : undefined,
                });
              }}
            />
          </label>
          <p className="text-xs text-muted">
            {t("A3c.max_note", { max: maxDraw.toFixed(1) })}
          </p>
        </section>
      );
    }

    case "A4-downpayment": {
      const opts: A4Downpayment[] = ["lt10", "10-15", "15-20", "gt20"];
      const equityStyle =
        answers["A1-type"] === "refinance" ||
        answers["A1-type"] === "american-mortgage";
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t(equityStyle ? "A4.refi_title" : "A4.title")}
          </h2>
          <p className="text-sm text-body">
            {t(equityStyle ? "A4.refi_hint" : "A4.hint")}
          </p>
          {opts.map((k) => (
            <OptionRow
              key={k}
              selected={answers["A4-downpayment"] === k}
              onSelect={() => onPatch({ "A4-downpayment": k })}
              label={t(
                (equityStyle
                  ? (`A4.refi_${k}` as const)
                  : (`A4.${k}` as const)) as "A4.lt10",
              )}
            />
          ))}
        </section>
      );
    }

    case "A5-timeline": {
      const opts: A5Timeline[] = ["urgent", "standard", "future", "research"];
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("A5.title")}
          </h2>
          <p className="text-sm text-body">{t("A5.hint")}</p>
          {opts.map((k) => (
            <OptionRow
              key={k}
              selected={answers["A5-timeline"] === k}
              onSelect={() => onPatch({ "A5-timeline": k })}
              label={t(`A5.${k}` as "A5.urgent")}
            />
          ))}
        </section>
      );
    }

    case "B1-employment": {
      const opts: B1Employment[] = [
        "employed-cz",
        "osvcc-cz",
        "foreign-income",
        "mixed",
        "no-income",
      ];
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("B1.title")}
          </h2>
          <p className="text-sm text-body">{t("B1.hint")}</p>
          {opts.map((k) => (
            <OptionRow
              key={k}
              selected={answers["B1-employment"] === k}
              onSelect={() => onPatch({ "B1-employment": k })}
              label={t(`B1.${k}` as "B1.employed-cz")}
            />
          ))}
        </section>
      );
    }

    case "B2-income": {
      const b1 = answers["B1-employment"];
      const monthly = answers["B2-income"] ?? 40000;
      const min = b1 === "osvcc-cz" ? 10000 : 20000;
      let titleKey:
        | "B2.employed_title"
        | "B2.osvcc_title"
        | "B2.foreign_title"
        | "B2.mixed_title" = "B2.employed_title";
      let hintKey:
        | "B2.employed_hint"
        | "B2.osvcc_hint"
        | "B2.foreign_hint"
        | "B2.mixed_hint" = "B2.employed_hint";
      if (b1 === "osvcc-cz") {
        titleKey = "B2.osvcc_title";
        hintKey = "B2.osvcc_hint";
      } else if (b1 === "foreign-income") {
        titleKey = "B2.foreign_title";
        hintKey = "B2.foreign_hint";
      } else if (b1 === "mixed") {
        titleKey = "B2.mixed_title";
        hintKey = "B2.mixed_hint";
      }
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t(titleKey)}
          </h2>
          <p className="text-sm text-body">{t(hintKey)}</p>
          {b1 === "foreign-income" && (
            <label className="block text-sm font-medium text-[var(--color-brand-950)]">
              {t("currency_ph")}
              <input
                className="mt-2 min-h-[44px] w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-[15px]"
                value={answers["B2-currency"] ?? ""}
                onChange={(e) => onPatch({ "B2-currency": e.target.value })}
                autoComplete="off"
              />
            </label>
          )}
          <p className="text-center text-2xl font-bold tabular-nums text-[var(--color-brand-950)]">
            {monthly.toLocaleString()} {t("unit_kc_mo")}
          </p>
          <input
            type="range"
            min={min}
            max={500000}
            step={5000}
            value={monthly}
            onChange={(e) =>
              onPatch({ "B2-income": Number.parseInt(e.target.value, 10) })
            }
            className="w-full accent-[var(--color-brand-600)]"
          />
        </section>
      );
    }

    case "B3-duration": {
      const b1 = answers["B1-employment"];
      const opts: B3Duration[] = ["lt6", "6-12", "1-3", "gt3"];
      let titleKey:
        | "B3.employed_title"
        | "B3.osvcc_title"
        | "B3.foreign_title" = "B3.employed_title";
      if (b1 === "osvcc-cz") titleKey = "B3.osvcc_title";
      else if (b1 === "foreign-income") titleKey = "B3.foreign_title";
      else if (b1 === "mixed") titleKey = "B3.employed_title";
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t(titleKey)}
          </h2>
          <p className="text-sm text-body">{t("B3.hint")}</p>
          {opts.map((k) => (
            <OptionRow
              key={k}
              selected={answers["B3-duration"] === k}
              onSelect={() => onPatch({ "B3-duration": k })}
              label={t(`B3.${k}` as "B3.lt6")}
            />
          ))}
        </section>
      );
    }

    case "B4-secondary": {
      const b4: SecondaryIncome = answers["B4-secondary"] ?? {};
      const hasNone = !!b4.none;
      type Src = keyof Pick<
        SecondaryIncome,
        "rental" | "investment" | "second-job" | "spouse" | "benefits"
      >;
      const rows: { key: Src; labelKey: "B4.rental" | "B4.investment" | "B4.second-job" | "B4.spouse" | "B4.benefits"; phKey: "B4.amount_rental" | "B4.amount_investment" | "B4.amount_second" | "B4.amount_spouse" | "B4.amount_benefits" }[] =
        [
          { key: "rental", labelKey: "B4.rental", phKey: "B4.amount_rental" },
          { key: "investment", labelKey: "B4.investment", phKey: "B4.amount_investment" },
          { key: "second-job", labelKey: "B4.second-job", phKey: "B4.amount_second" },
          { key: "spouse", labelKey: "B4.spouse", phKey: "B4.amount_spouse" },
          { key: "benefits", labelKey: "B4.benefits", phKey: "B4.amount_benefits" },
        ];
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("B4.title")}
          </h2>
          <p className="text-sm text-body">{t("B4.hint")}</p>
          <OptionRow
            selected={hasNone}
            onSelect={() => onPatch({ "B4-secondary": { none: true } })}
            label={t("B4.none")}
          />
          {rows.map(({ key, labelKey, phKey }) => {
            const active = !hasNone && b4[key] !== undefined;
            return (
              <div key={key} className="space-y-2">
                <label className="flex items-start gap-2 text-sm font-medium text-[var(--color-brand-950)]">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={active}
                    disabled={hasNone}
                    onChange={(e) => {
                      const next: SecondaryIncome = { ...b4 };
                      delete next.none;
                      if (e.target.checked) next[key] = 0;
                      else delete next[key];
                      onPatch({ "B4-secondary": next });
                    }}
                  />
                  {t(labelKey)}
                </label>
                {active && (
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    className="ml-6 min-h-[44px] w-full max-w-xs rounded-lg border border-[var(--color-border)] px-3 py-2 text-[15px]"
                    placeholder={t(phKey)}
                    value={b4[key] ?? ""}
                    onChange={(e) => {
                      const n =
                        e.target.value === ""
                          ? 0
                          : Number.parseInt(e.target.value, 10);
                      onPatch({
                        "B4-secondary": { ...b4, [key]: Number.isFinite(n) ? n : 0 },
                      });
                    }}
                  />
                )}
              </div>
            );
          })}
        </section>
      );
    }

    case "B5-confidence": {
      const v = answers["B5-confidence"] ?? 50;
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("B5.title")}
          </h2>
          <p className="text-sm text-body">{t("B5.hint")}</p>
          <div className="flex justify-between text-xs text-muted">
            <span>{t("B5.low")}</span>
            <span>{t("B5.high")}</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={v}
            onChange={(e) =>
              onPatch({ "B5-confidence": Number.parseInt(e.target.value, 10) })
            }
            className="w-full accent-[var(--color-brand-600)]"
          />
          <p className="text-center text-xl font-semibold tabular-nums">{v}</p>
        </section>
      );
    }

    case "C1-loans": {
      const c1 = answers["C1-loans"] ?? { has: "none", loans: [] };
      const kinds: LoanKind[] = ["auto", "consumer", "student", "other"];
      const toggleKind = (kind: LoanKind) => {
        const loans = [...(c1.loans ?? [])];
        const ix = loans.findIndex((r) => r.kind === kind);
        if (ix >= 0) loans.splice(ix, 1);
        else loans.push({ kind, monthly: 0 });
        onPatch({ "C1-loans": { has: "yes", loans } });
      };
      const updateRow = (kind: LoanKind, field: "monthly" | "remainingMonths", val: number) => {
        const loans = (c1.loans ?? []).map((r) =>
          r.kind === kind ? { ...r, [field]: val } : r,
        );
        onPatch({ "C1-loans": { ...c1, loans } });
      };
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("C1.title")}
          </h2>
          <p className="text-sm text-body">{t("C1.hint")}</p>
          <OptionRow
            selected={c1.has === "none"}
            onSelect={() => onPatch({ "C1-loans": { has: "none", loans: [] } })}
            label={t("C1.none")}
          />
          <OptionRow
            selected={c1.has === "yes"}
            onSelect={() =>
              onPatch({
                "C1-loans": {
                  has: "yes",
                  loans: c1.loans?.length ? c1.loans : [{ kind: "consumer", monthly: 0 }],
                },
              })
            }
            label={t("C1.yes")}
          />
          {c1.has === "yes" && (
            <>
              <p className="text-sm font-medium text-[var(--color-brand-950)]">
                {t("C1.types_title")}
              </p>
              <div className="flex flex-wrap gap-2">
                {kinds.map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => toggleKind(k)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                      c1.loans?.some((r) => r.kind === k)
                        ? "border-[var(--color-brand-600)] bg-[var(--color-brand-600)] text-white"
                        : "border-[var(--color-border)]"
                    }`}
                  >
                    {t(`C1.type_${k}` as "C1.type_auto")}
                  </button>
                ))}
              </div>
              {(c1.loans ?? []).map((row) => (
                <div
                  key={row.kind}
                  className="card-surface space-y-2 p-3 text-sm"
                >
                  <p className="font-semibold">{t(`C1.type_${row.kind}` as "C1.type_auto")}</p>
                  <label className="block">
                    {t("C1.monthly")}
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      className="mt-1 w-full rounded-lg border border-[var(--color-border)] px-3 py-2"
                      value={row.monthly || ""}
                      onChange={(e) =>
                        updateRow(
                          row.kind,
                          "monthly",
                          Number.parseInt(e.target.value, 10) || 0,
                        )
                      }
                    />
                  </label>
                  <label className="block">
                    {t("C1.remaining")}
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      className="mt-1 w-full rounded-lg border border-[var(--color-border)] px-3 py-2"
                      value={row.remainingMonths ?? ""}
                      onChange={(e) =>
                        updateRow(
                          row.kind,
                          "remainingMonths",
                          Number.parseInt(e.target.value, 10) || 0,
                        )
                      }
                    />
                  </label>
                </div>
              ))}
            </>
          )}
        </section>
      );
    }

    case "C2-creditcards": {
      const c2 = answers["C2-creditcards"];
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("C2.title")}
          </h2>
          <p className="text-sm text-body">{t("C2.hint")}</p>
          {(["none", "undebt", "debt"] as const).map((k) => (
            <OptionRow
              key={k}
              selected={c2 === k}
              onSelect={() => onPatch({ "C2-creditcards": k })}
              label={t(`C2.${k}` as "C2.none")}
            />
          ))}
          {c2 === "debt" && (
            <div className="grid gap-3">
              <label className="block text-sm font-medium">
                {t("C2.cc_debt")}
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  className="mt-1 w-full rounded-lg border border-[var(--color-border)] px-3 py-2"
                  value={answers["C2-cc-debt"] ?? ""}
                  onChange={(e) =>
                    onPatch({
                      "C2-cc-debt": Number.parseInt(e.target.value, 10) || 0,
                    })
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                {t("C2.cc_limit")}
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  className="mt-1 w-full rounded-lg border border-[var(--color-border)] px-3 py-2"
                  value={answers["C2-cc-limit"] ?? ""}
                  onChange={(e) =>
                    onPatch({
                      "C2-cc-limit": Number.parseInt(e.target.value, 10) || 0,
                    })
                  }
                />
              </label>
            </div>
          )}
        </section>
      );
    }

    case "C3-other": {
      const c3 = answers["C3-other"] ?? { selected: [] };
      const sel = new Set(c3.selected);
      const toggle = (k: (typeof c3.selected)[number]) => {
        const next = new Set(sel);
        if (next.has(k)) next.delete(k);
        else next.add(k);
        const patch: typeof c3 = { ...c3, selected: [...next] };
        if (k === "rent-stable" && !next.has("rent-stable")) {
          delete patch.rentMonthly;
        }
        onPatch({ "C3-other": patch });
      };
      const flags = [
        "alimony",
        "family-loan",
        "medical",
        "court",
        "rent-stable",
      ] as const;
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("C3.title")}
          </h2>
          <p className="text-sm text-body">{t("C3.hint")}</p>
          {flags.map((k) => (
            <div key={k} className="space-y-1">
              <label className="flex items-start gap-2 text-sm font-medium">
                <input
                  type="checkbox"
                  className="mt-0.5"
                  checked={sel.has(k)}
                  onChange={() => toggle(k)}
                />
                {t(`C3.${k}` as "C3.alimony")}
              </label>
              {k === "alimony" && sel.has("alimony") && (
                <input
                  type="number"
                  className="ml-6 w-full max-w-xs rounded-lg border border-[var(--color-border)] px-3 py-2"
                  placeholder={t("C3.alimony_amt")}
                  value={c3.alimony ?? ""}
                  onChange={(e) =>
                    onPatch({
                      "C3-other": {
                        ...c3,
                        alimony: Number.parseInt(e.target.value, 10) || 0,
                      },
                    })
                  }
                />
              )}
              {k === "family-loan" && sel.has("family-loan") && (
                <input
                  type="number"
                  className="ml-6 w-full max-w-xs rounded-lg border border-[var(--color-border)] px-3 py-2"
                  placeholder={t("C3.family_amt")}
                  value={c3["family-loan"] ?? ""}
                  onChange={(e) =>
                    onPatch({
                      "C3-other": {
                        ...c3,
                        "family-loan": Number.parseInt(e.target.value, 10) || 0,
                      },
                    })
                  }
                />
              )}
              {k === "medical" && sel.has("medical") && (
                <input
                  type="number"
                  className="ml-6 w-full max-w-xs rounded-lg border border-[var(--color-border)] px-3 py-2"
                  placeholder={t("C3.medical_amt")}
                  value={c3.medical ?? ""}
                  onChange={(e) =>
                    onPatch({
                      "C3-other": {
                        ...c3,
                        medical: Number.parseInt(e.target.value, 10) || 0,
                      },
                    })
                  }
                />
              )}
              {k === "court" && sel.has("court") && (
                <input
                  type="text"
                  className="ml-6 w-full rounded-lg border border-[var(--color-border)] px-3 py-2"
                  placeholder={t("C3.court_note")}
                  value={c3.courtNote ?? ""}
                  onChange={(e) =>
                    onPatch({
                      "C3-other": { ...c3, courtNote: e.target.value },
                    })
                  }
                />
              )}
              {k === "rent-stable" && sel.has("rent-stable") && (
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  className="ml-6 w-full max-w-xs rounded-lg border border-[var(--color-border)] px-3 py-2"
                  placeholder={t("C3.rent_amt")}
                  value={c3.rentMonthly ?? ""}
                  onChange={(e) =>
                    onPatch({
                      "C3-other": {
                        ...c3,
                        rentMonthly: Number.parseInt(e.target.value, 10) || 0,
                      },
                    })
                  }
                />
              )}
            </div>
          ))}
        </section>
      );
    }

    case "C4-credit": {
      const opts: C4PaymentHistory[] = ["clean", "resolved", "serious", "unknown"];
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("C4.title")}
          </h2>
          <p className="text-sm text-body">{t("C4.hint")}</p>
          {opts.map((k) => (
            <OptionRow
              key={k}
              selected={answers["C4-credit"] === k}
              onSelect={() => onPatch({ "C4-credit": k })}
              label={t(`C4.${k}` as "C4.clean")}
            />
          ))}
        </section>
      );
    }

    case "C5-residency": {
      const opts: C5Residency[] = [
        "czech-citizen",
        "longterm",
        "temporary",
        "eu-unregistered",
        "illegal",
      ];
      return (
        <section className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold leading-snug text-[var(--color-brand-950)] sm:text-xl">
            {t("C5.title")}
          </h2>
          <p className="text-sm text-body">{t("C5.hint")}</p>
          {opts.map((k) => (
            <OptionRow
              key={k}
              selected={answers["C5-residency"] === k}
              onSelect={() => onPatch({ "C5-residency": k })}
              label={t(`C5.${k}` as "C5.czech-citizen")}
            />
          ))}
        </section>
      );
    }

    default:
      return null;
  }
}

function OptionRow({
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
          : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-brand-600)] hover:bg-[var(--color-brand-soft)] dark:hover:bg-white/5"
      }`}
    >
      {label}
    </button>
  );
}
