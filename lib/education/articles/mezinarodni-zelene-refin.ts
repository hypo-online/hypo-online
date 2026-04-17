import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const cizomenaHypotekaKurzoveRiziko: EducationArticle = {
  slug: "cizomena-hypoteka-kurzove-riziko",
  title: "Cizoměnná hypotéka a kurzové riziko",
  description:
    "Kdy banka nabízí úvěr v eurech nebo dolarech, jak se promítá kurz do splátky a co znamená zajištění v korunách.",
  category: "Mezinárodní a speciální produkty",
  updatedAt: U,
  relatedSlugs: [
    "cross-border-prijem-rezidence-crs",
    "dti-ltv-stres-testy-a-cnb",
    "hypoteka-na-bydleni-zaklady",
    "cizinci-hypoteka-v-cr",
  ],
  sections: [
    {
      h2: "Proč cizí měna",
      paragraphs: [
        "Klient s příjmem v EUR může chtít úvěr v EUR kvůli přirozenému hedgingu — banka ale posuzuje i kurzové šoky při převodu na korunové výdaje (energie, opravy). Smlouva může stanovit kurzový dopad na splátku nebo vyžadovat zajištění.",
      ],
    },
    {
      h2: "Rizika",
      paragraphs: [
        "Pokud příjmy a výdaje jsou v různých měnách, vzniká mismatch — stres test může používat horší kurzový scénář. Důsledky pro rozpočet si spočítejte s makléřem, ne jen podle dnešního kurzu.",
      ],
    },
  ],
  takeaways: [
    "Měnový pár musí sedět s životem v CZ.",
    "Stres test může být přísnější.",
    "Smlouva říká, kdo nese kurzové rozdíly.",
  ],
};

export const zeleneUveryEnergetickaObnova: EducationArticle = {
  slug: "zelene-uvery-energeticka-obnova",
  title: "Zelené úvěry a energetická obnova: co banky často spojují s účelem",
  description:
    "Účelová vazba na zlepšení energetické náročnosti, dotace a doložení faktur.",
  category: "Mezinárodní a speciální produkty",
  updatedAt: U,
  relatedSlugs: [
    "ucelova-hypoteka",
    "kombinace-zdroju-financovani",
    "hypoteka-na-bydleni-zaklady",
  ],
  sections: [
    {
      h2: "Co může banka považovat za „zelený“ účel",
      paragraphs: [
        "Typicky izolace, výměna oken, zdroj tepla, fotovoltaika — vždy podle interního seznamu banky a stavu PENB. Účel se dokládá rozpočtem a fakturami; čerpání může být po etapách.",
      ],
    },
    {
      h2: "Dotace a bankovní úvěr",
      paragraphs: [
        "Kombinace veřejné podpory a úvěru vyžaduje sladění pravidel programu s úvěrovou smlouvou — banka chce předejít situaci, kdy by dotace snížila zajištění nebo účel.",
      ],
    },
  ],
  takeaways: [
    "Doklady musí odpovídat schválenému rozsahu prací.",
    "Dotace mění cash-flow plán.",
    "Seznam akceptovaných opatření má banka vlastní.",
  ],
};

export const refinancovaniAKonsolidace: EducationArticle = {
  slug: "refinancovani-a-konsolidace",
  title: "Refinancování hypotéky spolu s konsolidací jiných úvěrů",
  description:
    "Jak sloučit více závazků do jedné banky, co se stane s DTI a jak hlídat poplatky a pořadí zápisů.",
  category: "Typy produktů",
  updatedAt: U,
  relatedSlugs: [
    "refinancovani",
    "dti-ltv-stres-testy-a-cnb",
    "hypoteka-bez-dokladovani-ucelu",
    "zastavni-pravo-katastr-a-vic-zajisteni",
  ],
  sections: [
    {
      h2: "Cíl konsolidace",
      paragraphs: [
        "Sloučení spotřebitelských úvěrů, kreditních karet a případně kontokorentu do jedné splátky může snížit měsíční zátěž a zlepšit schvalovatelnost hypotéky — ale prodlouží celkovou dobu splácení a může zvýšit celkové náklady, pokud se prodlouží splatnost.",
      ],
    },
    {
      h2: "Refin + konsolidace v jednom balíčku",
      paragraphs: [
        "Banka vyžaduje jednotný plán: výplata stávajících věřitelů, výmaz zástav a zápis nové zástavy. Časové okno mezi výplatami musí být kryté, aby nedošlo k prodlení.",
      ],
    },
    {
      h2: "DTI po konsolidaci",
      paragraphs: [
        "Snížení měsíčních splátek zlepší DTI, ale banka sleduje i celkovou zadluženost a historii splácení. Viz článek o indikátorech.",
      ],
    },
  ],
  takeaways: [
    "Nižší splátka ≠ vždy levnější celkově.",
    "Časování výplat je kritické.",
    "Historie splácení zůstává v registrech.",
  ],
};
