import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const developerskeABridgeFinancovani: EducationArticle = {
  slug: "developerske-a-bridge-financovani",
  title: "Developerské financování, předhypoteční a bridge úvěry",
  description:
    "Jak se liší financování před kolaudací, při rezervaci v rozestavěnosti a při časové mezeře mezi závazky.",
  category: "Segmenty nemovitostí",
  updatedAt: U,
  relatedSlugs: [
    "kombinace-zdroju-financovani",
    "prubeh-zadosti-a-role-banky",
    "ucelova-hypoteka",
    "zastavni-pravo-katastr-a-vic-zajisteni",
  ],
  sections: [
    {
      h2: "Rezervace a zálohy u developera",
      paragraphs: [
        "Developer často vyžaduje zálohu před podpisem budoucí kupní smlouvy nebo před čerpáním úvěru. Banka musí vidět soulad mezi rezervační smlouvou, budoucí kupní smlouvou a úvěrovou smlouvou — nesoulad blokuje čerpání.",
      ],
    },
    {
      h2: "Bridge / předhypoteční řešení",
      paragraphs: [
        "Bridge znamená krátkodobé překlenutí likvidity (např. koupě nového bytu dřív, než prodáte starý). Rizikem je dvojí zátěž — banka testuje, zda zvládnete obě splátky současně, nebo vyžaduje prodejní podmínku.",
      ],
    },
    {
      h2: "Čerpání po etapách",
      paragraphs: [
        "U rozestavěnosti banka uvolňuje peníze proti dokladům o výstavbě — harmonogram musí sedět s developerskou smlouvou. Prodleva stavby znamená prodlevu čerpání a možné sankce vůči prodejci.",
      ],
    },
  ],
  takeaways: [
    "Časová mezera = rizikové okno.",
    "Dokumenty musí říkat stejný příběh.",
    "Dvojí splátka je tvrdý stres test.",
  ],
};

export const druzstevniBytNajemSpv: EducationArticle = {
  slug: "druzstevni-byt-najem-spv",
  title: "Družstevní byt, nájem s právem koupě a SPV: co banka řeší jinak",
  description:
    "Právní titul k užívání vs. vlastnictví, vklad do katastru a typické překážky pro zajištění.",
  category: "Segmenty nemovitostí",
  updatedAt: U,
  relatedSlugs: [
    "koupe-darovani-dedictvi-financovani",
    "zastavni-pravo-katastr-a-vic-zajisteni",
    "ucelova-hypoteka",
    "prubeh-zadosti-a-role-banky",
  ],
  sections: [
    {
      h2: "Družstevní podíl",
      paragraphs: [
        "Banka potřebuje vědět, zda lze zřídit zástavní právo k podílu a zda družstvo souhlasí. Často chybí přímá paralela k vlastnickému bytu — řešení bývá individualizované a závislé na stanovách družstva.",
      ],
    },
    {
      h2: "Nájem s právem koupě",
      paragraphs: [
        "Kombinace nájemního vztahu a budoucí koupě vyžaduje sladění budoucí kupní smlouvy s úvěrem. Banka posuzuje, zda je budoucí převod dostatečně jistý pro zajištění.",
      ],
    },
    {
      h2: "SPV a obchodní struktury",
      paragraphs: [
        "Koupě přes obchodní společnost mění posouzení — jde o cash-flow entity, strukturu vlastníků a transparenci. Retailová hypotéka na fyzickou osobu nemusí stačit.",
      ],
    },
  ],
  takeaways: [
    "Titul musí být pro banku čitelný.",
    "Družstvo = stanov a souhlasy.",
    "SPV = firemní úvěrová logika.",
  ],
};

export const hypotekaNaPuduALes: EducationArticle = {
  slug: "hypoteka-na-pudu-a-les",
  title: "Půda, les a zemědělský majetek: financování mimo standardní byt",
  description:
    "Jiné banky, jiné LTV a často jiné ocenění než u obytných jednotek v městě.",
  category: "Segmenty nemovitostí",
  updatedAt: U,
  relatedSlugs: [
    "rekreacni-vs-primarni-bydleni",
    "investicni-nemovitost-a-hypoteka",
    "podnikatelsky-uver-zastava-nemovitosti",
    "dti-ltv-stres-testy-a-cnb",
  ],
  sections: [
    {
      h2: "Specifika ocenění",
      paragraphs: [
        "Oceňovací metody pro ornou půdu nebo les se liší od znalce bytu v Praze — banka volí konzervativní přístup a menší počet akceptovaných znalců.",
      ],
    },
    {
      h2: "Účel užívání",
      paragraphs: [
        "Zemědělský podnikatel může kombinovat podnikatelský úvěr a zajištění pozemkem; domácnost kupující rekreační pozemek bez stavby řeší jiný účel než dokončené bydlení — dopad na LTV a sazbu.",
      ],
    },
  ],
  takeaways: [
    "Segment je užší než byty.",
    "Znalec a účel jsou kritické.",
    "Kombinace s podnikáním je častá.",
  ],
};
