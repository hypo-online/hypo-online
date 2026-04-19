import { Link } from "@/navigation";
import { SiteLogoNav } from "@/components/site-logo-nav";

type SeoLandingProps = {
  title: string;
  intro: string;
  bullets: string[];
  ctaLabel: string;
};

export function SeoLanding({ title, intro, bullets, ctaLabel }: SeoLandingProps) {
  return (
    <div className="site-shell-inner">
      <SiteLogoNav className="mb-2" />

      <h1 className="mt-8 text-[2rem] font-semibold leading-tight tracking-tight text-[var(--color-brand-950)]">
        {title}
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-body">{intro}</p>

      <div className="card-surface mt-8 p-6">
        <ul className="space-y-2 text-sm text-body">
          {bullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <Link
          href="/quiz"
          className="btn-gradient-primary mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg px-6 text-base font-semibold transition active:scale-[0.98] sm:w-auto"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
