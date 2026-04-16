# hypo.online

Mobile-first mortgage orientation funnel for the Czech Republic (Czech + English). Questionnaire answers are evaluated on the server and not stored; contact details are optional and intended for broker handoff.

## Prerequisites

- Node.js 20+ (LTS recommended)
- npm

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` — you will be redirected to `/cs` or `/en`.

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

- Replace rules in `lib/evaluation.ts` with broker-approved logic.
- Extend `messages/cs.json` and `messages/en.json` for copy; add locales in `i18n/routing.ts` when ready.
