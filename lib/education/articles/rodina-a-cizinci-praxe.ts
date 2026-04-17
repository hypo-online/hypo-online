import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const spoludluzniciManzeleBsm: EducationArticle = {
  slug: "spoludluznici-manzele-bsm",
  title: "Spoludlužníci, manželé a BSM: kdo musí podepsat a jak banka počítá domácnost",
  description:
    "Společné jmění manželů, výjimky z notářského řádu a proč banka často chce příjem i závazky partnera.",
  category: "Rodina a závazky",
  updatedAt: U,
  relatedSlugs: [
    "dti-ltv-stres-testy-a-cnb",
    "hypoteka-na-bydleni-zaklady",
    "koupe-darovani-dedictvi-financovani",
    "prubeh-zadosti-a-role-banky",
  ],
  sections: [
    {
      h2: "Spoludlužník vs. ručitel",
      paragraphs: [
        "Spoludlužník splácí úvěr společně s hlavním dlužníkem; ručitel ručí vedle dlužníka podle smlouvy. Banka volí strukturu podle příjmů a rizika — často chce spoludlužníka, pokud jeden z páru nemá dostatečný příjem sám o sobě.",
      ],
    },
    {
      h2: "BSM a právní úkony",
      paragraphs: [
        "U majetku ve společném jmění manželů mohou být potřeba souhlasy obou — záleží na typu úkonu a na tom, zda se jedná o typickou výjimku z notářského řádu. Právník ověří podpisové požadavky před katastrem.",
      ],
    },
    {
      h2: "Domácnost v DTI",
      paragraphs: [
        "Banka často počítá výdaje domácnosti i příjmy partnera, i když není spoludlužníkem — kvůli úvěruschopnosti. Transparentně ukažte společné náklady (nájem, splátky, výživné).",
      ],
    },
  ],
  takeaways: [
    "Struktura dlužníků je smluvní volba banky.",
    "BSM řeší právník podle konkrétní věci.",
    "Domácnost ≠ jen hlavní žadatel.",
  ],
};

export const euVsTretiZemeDetail: EducationArticle = {
  slug: "eu-vs-treti-zeme-detail",
  title: "EU občan vs. třetí země: dokumenty a typické rozdíly u hypotéky",
  description:
    "Hlubší rozbor pobytu, pracovního poměru a stability, který doplňuje úvodní článek pro cizince.",
  category: "Začínám v Česku",
  updatedAt: U,
  relatedSlugs: [
    "cizinci-hypoteka-v-cr",
    "cross-border-prijem-rezidence-crs",
    "smlouvy-jazyk-notar-tlumocnik",
    "prubeh-zadosti-a-role-banky",
  ],
  sections: [
    {
      h2: "EU / EHP přístup",
      paragraphs: [
        "EU občané mají širší možnosti registrace pobytu a vstupu na trh práce — banka ale stále chce doložit příjem a stabilitu. Krátká historie pobytu může být kompenzována pracovní smlouvou a výpisy z účtu.",
      ],
    },
    {
      h2: "Třetí země",
      paragraphs: [
        "Vyžaduje se typ pobytu a oprávnění k práci; délka pobytu a kontinuita příjmu jsou pod drobnohledem. Dokumenty mohou vyžadovat úředně ověřený překlad — časová rezerva je nutná.",
      ],
    },
    {
      h2: "Praxe bank",
      paragraphs: [
        "Interní seznamy „preferovaných“ pasů a zaměstnavatelů se liší — proto je vhodné porovnat více bank paralelně přes makléře.",
      ],
    },
  ],
  takeaways: [
    "EU není automaticky „zelená“ bez příjmu.",
    "Třetí země = více papírů a času.",
    "Paralelní srovnání bank se vyplatí.",
  ],
};

export const crossBorderPrijemRezidenceCrs: EducationArticle = {
  slug: "cross-border-prijem-rezidence-crs",
  title: "Příjem ze zahraničí, daňová rezidence a výměna informací (CRS)",
  description:
    "Jak banky čtou zahraniční příjem a proč řeší daňovou rezidenci a zdroje prostředků.",
  category: "Začínám v Česku",
  updatedAt: U,
  relatedSlugs: [
    "cizinci-hypoteka-v-cr",
    "eu-vs-treti-zeme-detail",
    "cizomena-hypoteka-kurzove-riziko",
    "dane-nabyti-prenajem-orientace",
  ],
  sections: [
    {
      h2: "Daňová rezidence",
      paragraphs: [
        "Banka potřebuje vědět, kde platíte daň z příjmu a zda nevzniká konflikt dvou států. Certifikáty daňové rezidence nebo potvrzení zaměstnavatele bývají součástí spisu.",
      ],
    },
    {
      h2: "CRS a transparentnost",
      paragraphs: [
        "Mezinárodní výměna finančních informací zvyšuje tlak na správné uvedení účtů a příjmů. Nesoulad mezi výpisem a výplatní páskou vyvolává dotazy compliance.",
      ],
    },
    {
      h2: "Kurz a účet",
      paragraphs: [
        "Příjem na zahraniční účet chce banka sladit s českým výpisem nebo s pravidelným převodem — čím čitelnější tok, tím méně tření.",
      ],
    },
  ],
  takeaways: [
    "Rezidence řídí daň i příběh pro banku.",
    "CRS zvyšuje přesnost očekávání.",
    "Sladěte účty a dokumenty.",
  ],
};

export const smlouvyJazykNotarTlumocnik: EducationArticle = {
  slug: "smlouvy-jazyk-notar-tlumocnik",
  title: "Jazyk smluv, tlumočník a notář: praktické tipy před podpisem u banky",
  description:
    "Kdy stačí anglický summary, kdy překlad, a co řeší notářský zápis u právních úkonů.",
  category: "Začínám v Česku",
  updatedAt: U,
  relatedSlugs: [
    "eu-vs-treti-zeme-detail",
    "prubeh-zadosti-a-role-banky",
    "koupe-darovani-dedictvi-financovani",
  ],
  sections: [
    {
      h2: "Jazyk smlouvy s bankou",
      paragraphs: [
        "Bankovní smlouvy bývají v češtině; některé instituce poskytují anglický překlad informativně. Právně rozhoduje, čemu rozumíte při podpisu — pokud nečtete česky, vyžádejte si vysvětlení klíčových ustanovení nebo tlumočníka.",
      ],
    },
    {
      h2: "Notářský zápis",
      paragraphs: [
        "U některých právních úkonů (např. části souhlasů) může katastr nebo banka vyžadovat notářský zápis. Notář ověří identitu a vůli — domluvte si jazyk předem.",
      ],
    },
    {
      h2: "Tlumočník vs. překladatel",
      paragraphs: [
        "Úřední překlad listin je něco jiného než ústní tlumočení při podpisu — banka může vyžadovat jedno nebo obojí podle interní politiky.",
      ],
    },
  ],
  takeaways: [
    "Rozumět smlouvě je na vaší straně ochrana.",
    "Notář řeší formu, ne obchodní podmínky banky.",
    "Úřední překlad má předepsané náležitosti.",
  ],
};
