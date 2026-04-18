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
        "Příklad: Příjem 6 000 EUR měsíčně, splátka úvěru 2 200 EUR. Při posílení koruny klesne korunová hodnota příjmu z pohledu domácnosti, která platí nájem v CZK — banka ve stresu použije horší kurz a ukáže, že po zaplacení nájmu a energií zbývá málo rezervy. Řešení může být vyšší akontace nebo část úvěru v CZK.",
      ],
    },
    {
      h2: "Rizika",
      paragraphs: [
        "Pokud příjmy a výdaje jsou v různých měnách, vzniká mismatch — stres test může používat horší kurzový scénář. Důsledky pro rozpočet si spočítejte s makléřem, ne jen podle dnešního kurzu.",
        "Příklad: Klient si v tabulce počítá splátku podle kurzu 24,80, banka ve scénáři použije 26,50. Rozdíl zvedne splátku v přepočtu na CZK o více než 6 % — při napjatém DTI to znamená zamítnutí bez doplnění vlastních zdrojů.",
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
        "Příklad: Rodinný dům z 80. let, PENB G. Banka schválí zelený úvěr na zateplení + výměnu oken za 680 000 Kč. První tranše 40 % po kontrole rozpočtu, druhá po fakturách za materiál a třetí po protokolu o dokončení a novém štítku. Když klient přikoupí bazén, banka tu část neproplatí — není na seznamu.",
      ],
    },
    {
      h2: "Dotace a bankovní úvěr",
      paragraphs: [
        "Kombinace veřejné podpory a úvěru vyžaduje sladění pravidel programu s úvěrovou smlouvou — banka chce předejít situaci, kdy by dotace snížila zajištění nebo účel.",
        "Příklad: Dotace 150 000 Kč na tepelné čerpadlo přijde na účet až po kontrole. Úvěrová smlouva stanoví, že část čerpání se sníží o výši dotace, aby se nepřekročil rozpočet prací. Bez této klauzule by hrozilo přečerpání oproti fakturám.",
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
        "Příklad: Tři úvěry se splátkami 8 200 + 3 100 + 1 800 Kč konsolidujete do jedné splátky 9 400 Kč na 9 let místo původních 5 let — měsíčně uvolníte cash-flow, ale zaplatíte více úroků. Pro žádost o vyšší hypotéku je to často nutné, aby DTI prošlo.",
      ],
    },
    {
      h2: "Refin + konsolidace v jednom balíčku",
      paragraphs: [
        "Banka vyžaduje jednotný plán: výplata stávajících věřitelů, výmaz zástav a zápis nové zástavy. Časové okno mezi výplatami musí být kryté, aby nedošlo k prodlení.",
        "Příklad: V pondělí výplata staré hypotéky, ve středu výplaty tří spotřáků, v pádu podání návrhu na vklad nové zástavy. Právník drží peníze na escrow účtu mezi výplatami — bez toho by jeden věřitel stihl naúčtovat smluvní pokutu za zpoždění.",
      ],
    },
    {
      h2: "DTI po konsolidaci",
      paragraphs: [
        "Snížení měsíčních splátek zlepší DTI, ale banka sleduje i celkovou zadluženost a historii splácení. Viz článek o indikátorech.",
        "Příklad: Po konsolidaci klesne DTI z 48 % na 36 %, ale v registru zůstane záznam starých úvěrů několik měsíců. Makléř podá žádost až po aktualizaci CBCB, aby schvalovatel neviděl „dvojí“ dluhy.",
      ],
    },
  ],
  takeaways: [
    "Nižší splátka ≠ vždy levnější celkově.",
    "Časování výplat je kritické.",
    "Historie splácení zůstává v registrech.",
  ],
};
