import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return { title: t("title") };
}

function Paragraphs({ text }: { text: string }) {
  const parts = text.split("\n\n").filter(Boolean);
  return (
    <>
      {parts.map((p, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-body">
          {p}
        </p>
      ))}
    </>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-none space-y-2 text-[15px] leading-relaxed text-body">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand-600)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  const purposesItems = t("purposes_body").split("\n").filter((s) => s.trim().startsWith("•"));

  return (
    <div className="mx-auto max-w-lg px-4 pb-16 pt-10 sm:max-w-2xl sm:px-8">
      <Link
        href="/"
        className="text-sm font-medium text-[var(--color-brand-600)] underline-offset-4 hover:underline"
      >
        {t("back")}
      </Link>
      <h1 className="mt-8 text-[2rem] font-semibold leading-tight tracking-tight text-[var(--color-brand-950)]">
        {t("title")}
      </h1>
      <div className="prose prose-zinc mt-6 max-w-none space-y-4">
        <p className="text-[15px] leading-relaxed text-body">{t("p1")}</p>
        <p className="text-[15px] leading-relaxed text-body">{t("p2")}</p>
      </div>

      <section className="card-surface mt-8 space-y-3 p-6 text-sm leading-relaxed">
        <h2 className="text-base font-semibold text-[var(--color-brand-950)]">{t("controller_title")}</h2>
        <Paragraphs text={t("controller_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <h2 className="text-base font-semibold text-[var(--color-brand-950)]">{t("purposes_title")}</h2>
        {purposesItems.length > 0 ? (
          <BulletList items={purposesItems.map((s) => s.replace(/^•\s*/, "").trim())} />
        ) : (
          <Paragraphs text={t("purposes_body")} />
        )}
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <h2 className="text-base font-semibold text-[var(--color-brand-950)]">{t("legal_title")}</h2>
        <Paragraphs text={t("legal_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <h2 className="text-base font-semibold text-[var(--color-brand-950)]">{t("retention_title")}</h2>
        <Paragraphs text={t("retention_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <h2 className="text-base font-semibold text-[var(--color-brand-950)]">{t("recipients_title")}</h2>
        <Paragraphs text={t("recipients_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <h2 className="text-base font-semibold text-[var(--color-brand-950)]">{t("transfers_title")}</h2>
        <Paragraphs text={t("transfers_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <h2 className="text-base font-semibold text-[var(--color-brand-950)]">{t("rights_title")}</h2>
        <Paragraphs text={t("rights_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <h2 className="text-base font-semibold text-[var(--color-brand-950)]">{t("cookies_title")}</h2>
        <Paragraphs text={t("cookies_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <h2 className="text-base font-semibold text-[var(--color-brand-950)]">{t("complaint_title")}</h2>
        <Paragraphs text={t("complaint_body")} />
      </section>

      <section className="card-surface mt-6 p-6 text-sm leading-relaxed text-body">
        <h2 className="text-base font-semibold text-[var(--color-brand-950)]">{t("dataflow_title")}</h2>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-2">
            <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-600)]" />
            {t("dataflow_b1")}
          </li>
          <li className="flex gap-2">
            <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-600)]" />
            {t("dataflow_b2")}
          </li>
          <li className="flex gap-2">
            <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-600)]" />
            {t("dataflow_b3")}
          </li>
          <li className="flex gap-2">
            <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-600)]" />
            {t("dataflow_b4")}
          </li>
        </ul>
      </section>
    </div>
  );
}
