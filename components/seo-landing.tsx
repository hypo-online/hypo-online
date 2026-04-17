import { Link } from "@/navigation";

type SeoLandingProps = {
  title: string;
  intro: string;
  bullets: string[];
  ctaLabel: string;
};

export function SeoLanding({ title, intro, bullets, ctaLabel }: SeoLandingProps) {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6">
      <Link
        href="/"
        className="text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
      >
        ← hypo.online
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-brand-950)]">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-zinc-700">{intro}</p>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <ul className="space-y-2 text-sm text-zinc-700">
          {bullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <Link
          href="/quiz"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-[var(--color-brand-600)] px-6 text-base font-semibold text-white transition hover:bg-[var(--color-brand-800)]"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
