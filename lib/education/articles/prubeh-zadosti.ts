import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const prubehZadosti: EducationArticle = {
  slug: "prubeh-zadosti-a-role-banky",
  title: "Jak probíhá žádost o hypotéku: kroky, lhůty, role makléře",
  description:
    "Od orientačního výpočtu po čerpání: co dělá banka, co vy, a kde vstupuje odhad nemovitosti nebo developer.",
  category: "Proces",
  updatedAt: U,
  relatedSlugs: [
    "ucelova-hypoteka",
    "zastavni-pravo-katastr-a-vic-zajisteni",
    "dti-ltv-stres-testy-a-cnb",
    "cizinci-hypoteka-v-cr",
  ],
  sections: [
    {
      h2: "1. Příprava a výběr produktu",
      paragraphs: [
        "Nejdřív si ujasníte účel (koupě bydlení, refinancování, výstavba), vlastní zdroje a přibližnou cenu nemovitosti. Z toho plyne LTV (poměr úvěru k hodnotě) a orientační splátka.",
        "Makléř nebo banka vám vysvětlí rozdíl mezi fixací sazby, kombinovanou sazbou a doplňkovými produkty (pojištění, odklad splátek). Důležité je, co je pro vás „must“ a co je volitelné.",
      ],
    },
    {
      h2: "2. Podání žádosti a scoring",
      paragraphs: [
        "Po odeslání žádosti banka spouští interní proces: ověření identity, příjmů, registrů a často i odhad nemovitosti (vlastní nebo externí). Výsledek může být schválení, schválení s podmínkami, nebo zamítnutí s odůvodněním.",
        "Scoring není veřejná rovnice — kombinuje pravidla banky, regulatorní kontext a rizikové politiky. Proto stejný „číselný“ profil může u dvou bank dopadnout jinak.",
      ],
    },
    {
      h2: "3. Podpis smlouvy a zástavní právo",
      paragraphs: [
        "Po schválení následuje příprava úvěrové a zástavní smlouvy vklad zástavního práva k nemovitosti do katastru (nebo zástav na jiném majetku podle struktury). Časové lhůty závisí na katastru, developerovi a komplexnosti právního náležitostí.",
      ],
    },
    {
      h2: "4. Čerpání",
      paragraphs: [
        "U koupě často čerpáte po vkladu vlastnického práva kupujícímu; u výstavby po etapách podle dokladů o výstavbě. Banka kontroluje soulad s účelem úvěru — u účelové hypotéky přísněji než u některých produktů bez dokládání účelu (viz samostatné články).",
      ],
    },
  ],
  takeaways: [
    "Příprava dokumentů před podáním zkracuje celkovou dobu.",
    "Odhad a katastr bývají kritická místa časové osy.",
    "Makléř srovnává více bank paralelně — u složitějších profilů často výhodné.",
  ],
};
