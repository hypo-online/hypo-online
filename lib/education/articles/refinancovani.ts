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
        "Příklad: Zůstatek hypotéky 3,1 mil. Kč, zbývá 12 let fixace u staré banky za 4,9 % p.a. Nová banka nabídne 3,35 % s fixací 5 let; jednorázové náklady (odstupné, odhad, katastr, právník) činí 42 000 Kč. Úspora splátky 1 850 Kč měsíčně — bod zvratu cca 23 měsíců. Klient se rozhodne refinancovat, protože plánuje v domě ještě 10 let.",
      ],
    },
    {
      h2: "Kdy dává smysl",
      paragraphs: [
        "Nejčastěji končí fixace sazby a trh nabízí výrazně lepší podmínky; nebo se změnil váš profil (vyšší příjem, nižší LTV) a jiná banka vám nabídne výhodnější balíček.",
        "Počítejte s náklady na převod: odstupné za předčasné splacení u původní banky (dle smlouvy a typu sazby), poplatky katastru, případně nový odhad. Makléř vám pomůže spočítat bod zvratu v měsících, kdy se refin vyplatí.",
        "Příklad: Rodina zvažuje refin i kvůli konsolidaci kontokorentu 80 000 Kč. Nová banka slíbí nižší splátku celkem o 2 400 Kč, ale prodlouží splatnost o 4 roky — celkové náklady na úrocích vzrostou. Po porovnání dvou scénářů (jen refin vs. refin + zkrácení doby) si vyberou variantu s vyšší splátkou o 600 Kč, ale kratší dobou.",
      ],
    },
    {
      h2: "Časté pasti",
      paragraphs: [
        "Podcenění času katastru — plánujte překryv nebo podmínky čerpání tak, abyste neskončili bez krytí splátky.",
        "Nepochopení rozdílu mezi úrokem a RPSN — u refinu sledujte celkovou cenu včetně pojištění a poplatků.",
        "Příklad: Mezi výplatou staré banky a zápisem nové zástavy uplyne 11 dní, ale splátka staré hypotéky připadá na 15. den. Řešení: dočasná bridge linka nebo dohoda se starou bankou o splátkovém prázdnině — bez toho by vznikl záznam v registru prodlení.",
      ],
    },
  ],
  takeaways: [
    "Refin = nová smlouva + výplata staré banky + nový zástav.",
    "Vyplatí se až po započtení všech jednorázových nákladů.",
    "Fixace a sankce za předčasné splacení čtou předem ve smlouvě.",
  ],
};
