import { getTranslations } from "next-intl/server";

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

type Props = {
  /** h1 on /privacy, h2 when embedded on the homepage (under the main h1). */
  titleLevel?: "h1" | "h2";
};

export async function PrivacyDocument({ titleLevel = "h1" }: Props) {
  const t = await getTranslations("privacy");
  const purposesItems = t("purposes_body").split("\n").filter((s) => s.trim().startsWith("•"));

  const TitleTag = titleLevel;
  const titleClass =
    titleLevel === "h1"
      ? "mt-8 text-[2rem] font-semibold leading-tight tracking-tight text-[var(--color-brand-950)]"
      : "text-xl font-semibold leading-snug text-[var(--color-brand-950)]";

  const SectionTitleTag = titleLevel === "h1" ? "h2" : "h3";
  const sectionTitleClass = "text-base font-semibold text-[var(--color-brand-950)]";

  return (
    <>
      <TitleTag
        className={titleClass}
        {...(titleLevel === "h2" ? { id: "privacy-policy-heading" } : {})}
      >
        {t("title")}
      </TitleTag>
      <div className="prose prose-zinc mt-6 max-w-none space-y-4">
        <p className="text-[15px] leading-relaxed text-body">{t("p1")}</p>
        <p className="text-[15px] leading-relaxed text-body">{t("p2")}</p>
      </div>

      <section className="card-surface mt-8 space-y-3 p-6 text-sm leading-relaxed">
        <SectionTitleTag className={sectionTitleClass}>{t("controller_title")}</SectionTitleTag>
        <Paragraphs text={t("controller_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <SectionTitleTag className={sectionTitleClass}>{t("purposes_title")}</SectionTitleTag>
        {purposesItems.length > 0 ? (
          <BulletList items={purposesItems.map((s) => s.replace(/^•\s*/, "").trim())} />
        ) : (
          <Paragraphs text={t("purposes_body")} />
        )}
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <SectionTitleTag className={sectionTitleClass}>{t("legal_title")}</SectionTitleTag>
        <Paragraphs text={t("legal_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <SectionTitleTag className={sectionTitleClass}>{t("retention_title")}</SectionTitleTag>
        <Paragraphs text={t("retention_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <SectionTitleTag className={sectionTitleClass}>{t("recipients_title")}</SectionTitleTag>
        <Paragraphs text={t("recipients_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <SectionTitleTag className={sectionTitleClass}>{t("transfers_title")}</SectionTitleTag>
        <Paragraphs text={t("transfers_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <SectionTitleTag className={sectionTitleClass}>{t("rights_title")}</SectionTitleTag>
        <Paragraphs text={t("rights_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <SectionTitleTag className={sectionTitleClass}>{t("cookies_title")}</SectionTitleTag>
        <Paragraphs text={t("cookies_body")} />
      </section>

      <section className="card-surface mt-6 space-y-3 p-6">
        <SectionTitleTag className={sectionTitleClass}>{t("complaint_title")}</SectionTitleTag>
        <Paragraphs text={t("complaint_body")} />
      </section>

      <section className="card-surface mt-6 p-6 text-sm leading-relaxed text-body">
        <SectionTitleTag className={sectionTitleClass}>{t("dataflow_title")}</SectionTitleTag>
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
    </>
  );
}
