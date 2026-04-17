import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const bezUcelu: EducationArticle = {
  slug: "hypoteka-bez-dokladovani-ucelu",
  title: "Hypotéka bez dokládání účelu: co dovolují pravidla a co banka stejně hlídá",
  description:
    "Rozdíl mezi volnějším čerpáním a úplnou absencí kontroly; AML a interní limity.",
  category: "Typy produktů",
  updatedAt: U,
  relatedSlugs: [
    "ucelova-hypoteka",
    "investicni-nemovitost-a-hypoteka",
    "refinancovani-a-konsolidace",
    "koupe-darovani-dedictvi-financovani",
  ],
  sections: [
    {
      h2: "Co marketing často nazývá „bez účelu“",
      paragraphs: [
        "V praxi jde o produkt zajištěný nemovitostí, kde nemusíte předkládat faktury za každou korunu čerpání tak striktně jako u čistě účelové hypotéky na konkrétní rekonstrukci. To ale neznamená, že banka ztrácí zájem o původ peněz — musí plnit AML (proti praní špinavých peněz) a interní kreditní politiku.",
      ],
    },
    {
      h2: "Proč banka i tak klade otázky",
      paragraphs: [
        "Velké čerpání v hotovosti, převody od neznámých třetích stran nebo náhlé změny bez vysvětlení vyvolávají dotazy compliance oddělení. Cílem není šikanovat, ale snížit právní a reputační riziko.",
        "Úrok může být vyšší než u účelové hypotéky na bydlení, protože banka nemá stejně úzký popis použití prostředků.",
      ],
    },
    {
      h2: "Kdy zvolit účelovou a kdy „volnější“ variantu",
      paragraphs: [
        "Máte jasný plán (koupě konkrétního bytu) → účelová často levnější a jednodušší na srozumění.",
        "Potřebujete likviditu na více kroků a máte srovnatelnou alternativu u jiných produktů → porovnejte RPSN, poplatky a fixaci; neberte jen název produktu.",
      ],
    },
  ],
  takeaways: [
    "„Bez účelu“ ≠ bez kontroly; AML platí vždy.",
    "Cena peněz může být vyšší než u účelové hypotéky.",
    "Vyberte produkt podle reálného cash-flow, ne podle názvu.",
  ],
};
