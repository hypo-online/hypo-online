import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const zastavniPravoKatastrAVicZajisteni: EducationArticle = {
  slug: "zastavni-pravo-katastr-a-vic-zajisteni",
  title: "Zástavní právo, katastr a více zajištění na jedné nemovitosti",
  description:
    "Vklad do katastru, pořadí zástav a co znamená víc věřitelů se zástavním právem na stejné věci.",
  category: "Právo a daň (orientace)",
  updatedAt: U,
  relatedSlugs: [
    "koupe-darovani-dedictvi-financovani",
    "developerske-a-bridge-financovani",
    "cizinci-hypoteka-v-cr",
    "prubeh-zadosti-a-role-banky",
  ],
  sections: [
    {
      h2: "Zápis zástavního práva",
      paragraphs: [
        "Zástavní právo k nemovitosti vzniká zápisem do veřejného seznamu — v ČR katastr nemovitostí. Bez vkladu nejste proti třetím osobám chráněni stejně jako po zápisu. Řízení o povolení vkladu řeší katastrální úřad podle zákona č. 256/2013 Sb.",
      ],
    },
    {
      h2: "Více zástav (pořadí)",
      paragraphs: [
        "Pořadí zástav určuje, kdo má přednost při výtěžku z exekuce nebo prodeje. Druhá banka často vyžaduje souhlas prvního věřitele nebo podřízené zástavní právo — ovlivňuje to, zda vám druhá banka vůbec půjčí.",
      ],
    },
    {
      h2: "Výmaz a převod",
      paragraphs: [
        "Při refinancování musí stará banka souhlasit s výmazem a nová banka s novým zápisem — časové mezery řeší právníci přes podmínky vkladů.",
      ],
    },
  ],
  takeaways: [
    "Bez vkladu = slabší ochrana věřitele i klienta.",
    "Pořadí zástav řídí prioritu.",
    "Víc věřitelů = složitější dokumentace.",
  ],
};

export const daneNabytiPrenajemOrientace: EducationArticle = {
  slug: "dane-nabyti-prenajem-orientace",
  title: "Daně: nabytí nemovitosti a pronájem (jen orientace, ne daňové poradenství)",
  description:
    "Kde typicky vznikají daňové otázky při koupi a při pronájmu z pohledu plánování financí.",
  category: "Právo a daň (orientace)",
  updatedAt: U,
  relatedSlugs: [
    "investicni-nemovitost-a-hypoteka",
    "koupe-darovani-dedictvi-financovani",
    "rekreacni-vs-primarni-bydleni",
  ],
  sections: [
    {
      h2: "Daň z nabytí nemovitých věcí",
      paragraphs: [
        "U typických převodů se řeší přechodová pravidla a sazby dle zákona — výše a osvobození závisí na situaci (např. první vlastnické vztahy). Před podpisem kupní smlouvy řešte s advokátem a daňovým poradcem, zda vzniká poplatková povinnost a kdy je splatná.",
      ],
    },
    {
      h2: "Pronájem a příjem z nájmu",
      paragraphs: [
        "Zda používáte paušál nebo nákladovou metodu mění doložitelný příjem pro banku i výši daně. Banka chce stabilitu nájmu; finanční úřad chce správné přiznání — tyto dvě logiky se musí potkat ve vaší dokumentaci.",
      ],
    },
    {
      h2: "Disclaimer",
      paragraphs: [
        "hypo.online neposkytuje daňové ani právní poradenství. Text slouží jen k tomu, abyste věděli, která témata si nechte včas vysvětlit od profesionála.",
      ],
    },
  ],
  takeaways: [
    "Daň z nabytí řešte před koupí.",
    "Pronájem ovlivní banku i FÚ.",
    "Vždy individuální posouzení.",
  ],
};

export const koupeDarovaniDedictviFinancovani: EducationArticle = {
  slug: "koupe-darovani-dedictvi-financovani",
  title: "Koupě vs. darování vs. dědictví: dopady na financování a zástavy",
  description:
    "Jak se liší vstup do vlastnictví pro banku podle právního titulu a co hlídat u vkladu do katastru.",
  category: "Právo a daň (orientace)",
  updatedAt: U,
  relatedSlugs: [
    "zastavni-pravo-katastr-a-vic-zajisteni",
    "ucelova-hypoteka",
    "spoludluznici-manzele-bsm",
    "dane-nabyti-prenajem-orientace",
  ],
  sections: [
    {
      h2: "Koupě za úplatu",
      paragraphs: [
        "Nejčastější model pro hypotéku — kupní cena, zálohy, převod vlastnictví po vkladu a čerpání úvěru. Banka váže čerpání na podmínky převodu.",
      ],
    },
    {
      h2: "Darování",
      paragraphs: [
        "Vstup do vlastnictví bez kupní ceny mění důkazní situaci pro původ prostředků — banka řeší AML a původ majetku dárce. Financování „na dar“ je méně typické než koupě; často se kombinuje s vlastními prostředky.",
      ],
    },
    {
      h2: "Dědictví",
      paragraphs: [
        "Nabytí z dědictví může přinést spoluvlastnictví a podíly — pro úvěr je nutné vyjasnit podílové vztahy, případné vypořádání a zástavy. Notářský zápis a usnesení o dědictví jsou standardní podklady.",
      ],
    },
  ],
  takeaways: [
    "Koupě = standardní hypotékový příběh.",
    "Dar = silná AML kontrola.",
    "Dědictví = podíly a vypořádání.",
  ],
};
