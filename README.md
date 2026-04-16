# hypo.online

Mobile-first mortgage orientation funnel for the Czech Republic. **14 locales** (Czech, English, Ukrainian, and 11 other Prague-focused languages). Questionnaire answers are scored on the server (AI-style model today) and not stored; contact details are optional for broker handoff — **including yellow/red semaphore outcomes**.

## Prerequisites

- Node.js 20+ (LTS recommended)
- npm

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` — middleware redirects to a locale prefix (default **`/cs`**). Use the language menu (header / quiz) to switch: `cs`, `en`, `uk`, `ru`, `de`, `vi`, `pl`, `sk`, `ro`, `es`, `fr`, `it`, `tr`, `zh`.

Canonical copy lives in `messages/en.json`; other locale files are **deep-merged** on top so missing keys fall back to English.

## Environment

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` — from [Resend](https://resend.com) (optional for dev)
- `RESEND_FROM` — verified sender domain in production
- `BROKER_NOTIFY_EMAIL` — where new leads should be emailed

Without Resend, lead submissions succeed in development and log a single info line (no questionnaire payload).

## GitHub (private)

1. Create a **private** repository under your GitHub account or org.
2. Add this folder as `origin` and push:

```bash
git remote add origin https://github.com/<you>/<repo>.git
git branch -M main
git push -u origin main
```

Enable **2FA** on GitHub; do not commit `.env.local`.

## Scripts

- `npm run dev` — local development (Turbopack)
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint

## Product notes

- Replace / tune scoring in `lib/evaluation.ts` (or plug in a real LLM) with broker-approved logic and legal review of “AI + % probability” claims. Today the “AI-style” scorer is **transparent rules in code**, not a hosted neural model — keep marketing copy aligned with what you actually run.
- Extend `messages/*.json` for copy; add locales in `i18n/routing.ts` and labels in `lib/locale-labels.ts`.
