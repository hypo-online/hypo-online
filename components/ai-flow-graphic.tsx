type AiFlowGraphicProps = {
  locale: string;
};

export function AiFlowGraphic({ locale }: AiFlowGraphicProps) {
  const c = aiFlowCopy(locale);
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
      <div className="grid gap-2 sm:grid-cols-3">
        <Node title={c.inputTitle} text={c.inputText} />
        <Node title={c.scoringTitle} text={c.scoringText} />
        <Node title={c.matchTitle} text={c.matchText} />
      </div>
    </div>
  );
}

function Node({ title, text }: { title: string; text: string }) {
  return (
    <div className="relative rounded-xl border border-zinc-200 bg-zinc-50 p-3">
      <p className="text-sm font-semibold text-[var(--color-brand-900)]">{title}</p>
      <p className="mt-1 text-xs text-zinc-600">{text}</p>
    </div>
  );
}

function aiFlowCopy(locale: string) {
  const en = {
    inputTitle: "Input",
    inputText: "Income, goal, timeline",
    scoringTitle: "Scoring",
    scoringText: "AI model + bank-like rules",
    matchTitle: "Matching",
    matchText: "Broker + next step",
  };
  if (locale === "cs") {
    return {
      inputTitle: "Vstup",
      inputText: "Příjem, cíl, časování",
      scoringTitle: "Scoring",
      scoringText: "AI model + bankovní pravidla",
      matchTitle: "Párování",
      matchText: "Makléř + další krok",
    };
  }
  if (locale === "sk") return { ...en, inputTitle: "Vstup", inputText: "Príjem, cieľ, časovanie", matchText: "Maklér + ďalší krok" };
  if (locale === "de") return { ...en, inputTitle: "Eingabe", inputText: "Einkommen, Ziel, Zeitplan", matchTitle: "Zuordnung", matchText: "Makler + nächster Schritt" };
  if (locale === "pl") return { ...en, inputTitle: "Dane wejściowe", inputText: "Dochód, cel, harmonogram", matchTitle: "Dopasowanie", matchText: "Broker + kolejny krok" };
  if (locale === "uk") return { ...en, inputTitle: "Вхідні дані", inputText: "Дохід, ціль, термін", scoringText: "AI модель + банківські правила", matchTitle: "Підбір", matchText: "Брокер + наступний крок" };
  if (locale === "ru") return { ...en, inputTitle: "Входные данные", inputText: "Доход, цель, сроки", scoringText: "AI модель + банковские правила", matchTitle: "Подбор", matchText: "Брокер + следующий шаг" };
  if (locale === "vi") return { ...en, inputTitle: "Du lieu dau vao", inputText: "Thu nhap, muc tieu, thoi gian", matchTitle: "Ghep noi", matchText: "Moi gioi + buoc tiep theo" };
  if (locale === "ro") return { ...en, inputTitle: "Date de intrare", inputText: "Venit, obiectiv, termen", matchTitle: "Potrivire", matchText: "Broker + pasul urmator" };
  if (locale === "es") return { ...en, inputTitle: "Entrada", inputText: "Ingresos, objetivo, plazo", matchTitle: "Matching", matchText: "Broker + siguiente paso" };
  if (locale === "fr") return { ...en, inputTitle: "Entree", inputText: "Revenu, objectif, delai", matchTitle: "Correspondance", matchText: "Courtier + prochaine etape" };
  if (locale === "it") return { ...en, inputTitle: "Input", inputText: "Reddito, obiettivo, tempistica", matchTitle: "Abbinamento", matchText: "Broker + passo successivo" };
  if (locale === "tr") return { ...en, inputTitle: "Girdi", inputText: "Gelir, hedef, zamanlama", matchTitle: "Eslesme", matchText: "Broker + sonraki adim" };
  if (locale === "zh") return { ...en, inputTitle: "输入", inputText: "收入、目标、时间", scoringText: "AI模型 + 银行规则", matchTitle: "匹配", matchText: "经纪人 + 下一步" };
  return en;
}
