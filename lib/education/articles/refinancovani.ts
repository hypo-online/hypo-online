import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const refinancovani: EducationArticle = {
  slug: "refinancovani",
  title: "Refinancování hypotéky v Česku",
  description:
    "Co znamená převést hypotéku k jiné bance, kdy se vyplatí, a na co si dát pozor u pokut a časování.",
  category: "Typy produktů",
  updatedAt: U,
  relatedSlugs: [
    "refinancovani-a-konsolidace",
    "dti-ltv-stres-testy-a-cnb",
    "prubeh-zadosti-a-role-banky",
    "ucelova-hypoteka",
  ],
  sections: [
    {
      h2: "Co je refinancování",
      paragraphs: [
        "Refinancování (často řečené „refin“) znamená, že stávající hypotéku u současné banky nahradíte novou smlouvou u jiné banky — typicky za účelem nižší úrokové sazby, změny fixace, konsolidace více úvěrů nebo uvolnění části zástavy při doplacení části dluhu.",
        "Prakticky: nová banka vyplatí zůstatek u staré banky, na nemovitosti se přepíše zástavní právo ve prospěch nového věřitele. Pro vás to znamená nové podmínky, nové poplatky za zápis a někdy i odhad nemovitosti znovu.",
      ],
    },
    {
      h2: "Kdy dává smysl",
      paragraphs: [
        "Nejčastěji končí fixace sazby a trh nabízí výrazně lepší podmínky; nebo se změnil váš profil (vyšší příjem, nižší LTV) a jiná banka vám nabídne výhodnější balíček.",
        "Počítejte s náklady na převod: odstupné za předčasné splacení u původní banky (dle smlouvy a typu sazby), poplatky katastru, případně nový odhad. Makléř vám pomůže spočítat bod zvratu v měsících, kdy se refin vyplatí.",
      ],
    },
    {
      h2: "Časté pasti",
      paragraphs: [
        "Podcenění času katastru — plánujte překryv nebo podmínky čerpání tak, abyste neskončili bez krytí splátky.",
        "Nepochopení rozdílu mezi úrokem a RPSN — u refinu sledujte celkovou cenu včetně pojištění a poplatků.",
      ],
    },
  ],
  takeaways: [
    "Refin = nová smlouva + výplata staré banky + nový zástav.",
    "Vyplatí se až po započtení všech jednorázových nákladů.",
    "Fixace a sankce za předčasné splacení čtou předem ve smlouvě.",
  ],
};
