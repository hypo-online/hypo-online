import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const kombinaceZdrojuFinancovani: EducationArticle = {
  slug: "kombinace-zdroju-financovani",
  title: "Kombinace zdrojů: vlastní úspory, hypotéka, stavební spoření a dotace",
  description:
    "Jak skládat vlastní zdroje, úvěry a veřejné podpory tak, aby čerpání a zápisy v katastru navazovaly.",
  category: "Spoření a kombinace",
  updatedAt: U,
  relatedSlugs: [
    "stavebni-sporeni-a-preklenovaci-uver",
    "uver-ze-stavebniho-sporeni-vs-bankovni-hypoteka",
    "developerske-a-bridge-financovani",
    "zastavni-pravo-katastr-a-vic-zajisteni",
  ],
  sections: [
    {
      h2: "Vrstvení kapitálu",
      paragraphs: [
        "Typický model: vlastní hotovost na rezervační zálohu a část kupní ceny, hypotéka na zbytek, případně stavební spoření na rekonstrukci po koupi. Pořadí čerpání musí souhlasit s podmínkami prodejce, developera i bank.",
      ],
    },
    {
      h2: "Dotace a veřejné programy",
      paragraphs: [
        "Dotace mění rozpočet a někdy vyžadují dokladování faktur — banka chce vidět, že nedochází ke konfliktu účelu úvěru. Ověřte, zda program vyžaduje zápis věcného břemene nebo zástavu ve prospěch státu.",
      ],
    },
    {
      h2: "Časová synchronizace",
      paragraphs: [
        "Nejčastější chyba je rozjíždění dvou úvěrů bez plánu vkladu do katastru — výsledkem je prodleva mezi uvolněním peněz a splatností vůči prodávajícímu. Makléř často drží harmonogram mezi bankou, právníkem a katastrem.",
      ],
    },
  ],
  takeaways: [
    "Každý zdroj má svá pravidla čerpání.",
    "Dotace mění dokumentační nárok.",
    "Harmonogram je stejně důležitý jako sazba.",
  ],
};

export const podnikatelskyUverZastavaNemovitosti: EducationArticle = {
  slug: "podnikatelsky-uver-zastava-nemovitosti",
  title: "Podnikatelský úvěr zajištěný nemovitostí (ne retailová hypotéka)",
  description:
    "Rozdíl oproti spotřebitelské hypotéce na bydlení: posouzení firmy, zajištění, sazby a regulatorní rámec.",
  category: "Podnikání a alternativy",
  updatedAt: U,
  relatedSlugs: [
    "hypoteka-na-bydleni-zaklady",
    "leasing-nemovitosti",
    "dti-ltv-stres-testy-a-cnb",
    "zastavni-pravo-katastr-a-vic-zajisteni",
  ],
  sections: [
    {
      h2: "Proč to není „hypotéka na bydlení“",
      paragraphs: [
        "Účel je obchodní — pracovní kapitál, investice do provozu, refinancování podnikatelských závazků. Posouzení jde přes cash-flow firmy, účetní závěrky, někdy projekce. Ochrana spotřebitele zde často neplatí stejně jako u úvěru na bydlení pro fyzickou osobu.",
      ],
    },
    {
      h2: "Zajištění nemovitostí",
      paragraphs: [
        "Banka může požadovat zástav na nemovitosti vlastní nebo třetí osoby, zástav na pohledávky nebo kombinaci. Oceňování je konzervativnější než u čistě obytného účelu — čtěte loan-to-value z pohledu podnikatelského úvěru.",
      ],
    },
    {
      h2: "Daň a účetnictví",
      paragraphs: [
        "Úroky a poplatky se promítají do nákladů firmy dle účetních pravidel — individuálně s účetním. Slabý výsledek hospodaření snižuje šanci na schválení i přes silnou zástavu.",
      ],
    },
  ],
  takeaways: [
    "Obchodní účel = jiné posouzení než retail.",
    "Zástava neznamená automatické ano.",
    "Cash-flow firmy je klíč.",
  ],
};

export const leasingNemovitosti: EducationArticle = {
  slug: "leasing-nemovitosti",
  title: "Leasing nemovitosti: kdy dává smysl oproti koupi s hypotékou",
  description:
    "Stručně k obchodnímu leasingu nemovitých věcí — uživatelé, daňová stránka a rozdíl vůči vlastnictví.",
  category: "Podnikání a alternativy",
  updatedAt: U,
  relatedSlugs: [
    "podnikatelsky-uver-zastava-nemovitosti",
    "koupe-darovani-dedictvi-financovani",
    "hypoteka-na-bydleni-zaklady",
  ],
  sections: [
    {
      h2: "Základní logika",
      paragraphs: [
        "Leasing přenáší užívání věci bez okamžitého převodu vlastnictví na nájemce — u nemovitostí jde spíše o obchodní vztahy (kanceláře, provozovny). Pro domácnosti je častější koupě s hypotékou.",
      ],
    },
    {
      h2: "Daň a účetnictví",
      paragraphs: [
        "U podnikatelů může leasing ovlivnit nákladovost a DPH podle struktury smlouvy — nutná součinnost s účetním. Na konci leasingu bývá odkupní právo nebo povinnost — čtěte odkupní cenu a podmínky převodu do vlastnictví.",
      ],
    },
  ],
  takeaways: [
    "Leasing nemovitosti je spíše B2B nástroj.",
    "Odkup a DPH řešte předem.",
    "Domácnosti typicky volí koupi.",
  ],
};
