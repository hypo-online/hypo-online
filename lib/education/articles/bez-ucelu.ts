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
        "Příklad: Žadatel čerpá 800 000 Kč ve dvou tranších na účet a během týdne posílá peníze na účet kamaráda „na investici“. Banka zastaví další čerpání a vyžádá vysvětlení — i u produktu bez účelových faktur musí být tok vysvětlitelný. Po doplnění smlouvy o půjčce mezi stranami a vrácení části částky čerpání obnovila.",
      ],
    },
    {
      h2: "Proč banka i tak klade otázky",
      paragraphs: [
        "Velké čerpání v hotovosti, převody od neznámých třetích stran nebo náhlé změny bez vysvětlení vyvolávají dotazy compliance oddělení. Cílem není šikanovat, ale snížit právní a reputační riziko.",
        "Úrok může být vyšší než u účelové hypotéky na bydlení, protože banka nemá stejně úzký popis použití prostředků.",
        "Příklad: Dva klienti se stejným příjmem a LTV — u účelové hypotéky na koupi bytu dostanou sazbu 0,4 procentního bodu níž než u produktu bez striktního účelu. Rozdíl při dluhu 4 mil. Kč znamená řádově tisíce ročně; makléř to promítne do tabulky „10 let fixace“, aby bylo vidět celkový dopad.",
      ],
    },
    {
      h2: "Kdy zvolit účelovou a kdy „volnější“ variantu",
      paragraphs: [
        "Máte jasný plán (koupě konkrétního bytu) → účelová často levnější a jednodušší na srozumění.",
        "Potřebujete likviditu na více kroků a máte srovnatelnou alternativu u jiných produktů → porovnejte RPSN, poplatky a fixaci; neberte jen název produktu.",
        "Příklad: Podnikatel chce zajištěním domu konsolidovat tři spotřebitelské úvěry a mít rezervu na vybavení provozovny. Volnější čerpání dává smysl, pokud má účetní přehled a výpisy; jinak je levnější cesta účelový úvěr na bydlení + menší kontokorent na provoz řešený odděleně.",
      ],
    },
  ],
  takeaways: [
    "„Bez účelu“ ≠ bez kontroly; AML platí vždy.",
    "Cena peněz může být vyšší než u účelové hypotéky.",
    "Vyberte produkt podle reálného cash-flow, ne podle názvu.",
  ],
};
