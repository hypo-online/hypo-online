import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const hypotekaNaBydleniZaklady: EducationArticle = {
  slug: "hypoteka-na-bydleni-zaklady",
  title: "Klasická hypotéka na bydlení: anuita, fixace, mimořádné splátky",
  description:
    "Jak číst splátkový kalendář, co znamená fixace úrokové sazby a jak banky vnímají mimořádné splátky a odklad.",
  category: "Bydlení a produkty",
  updatedAt: U,
  relatedSlugs: [
    "ucelova-hypoteka",
    "dti-ltv-stres-testy-a-cnb",
    "prubeh-zadosti-a-role-banky",
    "refinancovani",
  ],
  sections: [
    {
      h2: "Základní model: anuitní splácení",
      paragraphs: [
        "Nejčastější forma je anuita — měsíční splátka zůstává po dobu fixace stejná, ale poměr úroku a úmoru se časem mění: zpočátku platíte více úroků, postupně více jistiny. Důležité je rozlišovat mezi výší splátky a celkově zaplacenými úroky za celou dobu úvěru.",
        "Banka vám musí poskytnout předsmluvní informace a splátkový plán; porovnávejte i RPSN, pojistné a poplatky, nejen nominální úrok.",
      ],
    },
    {
      h2: "Fixace sazby",
      paragraphs: [
        "Fixace určuje období, po které se sazba nemění podle běžného tržního vývoje (dle smlouvy). Po jejím skončení nastupuje buď nová fixace po vyjednání, nebo pohyblivá sazba podle interního indexu banky — vždy čtěte, co přesně nastane po konci fixace.",
        "Delší fixace často znamená vyšší počáteční sazbu než krátká, ale chrání před skokem sazeb v nejistém období.",
      ],
    },
    {
      h2: "Mimořádné splátky a odklad",
      paragraphs: [
        "Smlouva stanoví, zda můžete část jistiny doplatit zdarma jednou ročně, v jaké výši, a zda se jedná o zkrácení doby nebo snížení splátky. Odklad splátky (např. při porodu) je samostatný produkt s podmínkami — ovlivňuje cash-flow, ne vždy snižuje celkové náklady.",
      ],
    },
  ],
  takeaways: [
    "Anuita = stejná splátka, mění se podíl úrok/úmor.",
    "Po fixaci čtěte automatickou návaznost sazby.",
    "Mimořádné splátky mají pravidla přímo ve smlouvě.",
  ],
};

export const rekreacniVsPrimarniBydleni: EducationArticle = {
  slug: "rekreacni-vs-primarni-bydleni",
  title: "Rekreační nemovitost vs. primární bydlení: jak banka liší riziko",
  description:
    "Proč stejná částka úvěru může mít jiné LTV, sazbu a požadavky na vlastní zdroje podle účelu užívání.",
  category: "Bydlení a produkty",
  updatedAt: U,
  relatedSlugs: [
    "hypoteka-na-bydleni-zaklady",
    "ucelova-hypoteka",
    "investicni-nemovitost-a-hypoteka",
    "dti-ltv-stres-testy-a-cnb",
  ],
  sections: [
    {
      h2: "Primární bydlení",
      paragraphs: [
        "Banka typicky předpokládá, že v nemovitosti budete fakticky bydlet — ověřuje to adresou trvalého pobytu, energetickými předpisy, někdy i návštěvou či dotazem na zaměstnavatele. Účel ovlivňuje ochotu dát vyšší LTV a příznivější sazbu.",
      ],
    },
    {
      h2: "Rekreace (chalupa, apartmán v horách)",
      paragraphs: [
        "Rekreační objekt má často vyšší riziko likvidity na trhu a sezónní užití — banky proto mohou požadovat vyšší vlastní zdroje, jiný odhad a přísnější posouzení příjmu. Pokud plánujete krátkodobé pronájmy, řeší se to i v daňové a účelové rovině.",
      ],
    },
    {
      h2: "Co si pohlídat před podpisem",
      paragraphs: [
        "Ujistěte se, že účel ve smlouvě odpovídá realitě — nesoulad může vést k porušení úvěrových podmínek nebo problému při čerpání. Při kombinaci pronájmu a vlastního užívání konzultujte strukturu s makléřem i daňovým poradcem.",
      ],
    },
  ],
  takeaways: [
    "Účel užívání mění rizikový profil.",
    "Rekreace často = konzervativnější LTV.",
    "Pronájem mění i daňovou stránku.",
  ],
};

export const investicniNemovitostAHypoteka: EducationArticle = {
  slug: "investicni-nemovitost-a-hypoteka",
  title: "Investiční nemovitost a hypotéka: cashflow, zátěž a očekávání banky",
  description:
    "Jak banky vnímají příjem z pronájmu, rezervy a riziko neobsazenosti — ne každá investice projde standardním retailovým úvěrem.",
  category: "Bydlení a produkty",
  updatedAt: U,
  relatedSlugs: [
    "rekreacni-vs-primarni-bydleni",
    "dane-nabyti-prenajem-orientace",
    "dti-ltv-stres-testy-a-cnb",
    "hypoteka-bez-dokladovani-ucelu",
  ],
  sections: [
    {
      h2: "Pronájem jako příjem",
      paragraphs: [
        "Banky část nájmu započítávají konzervativně (haircut) — ne vždy 100 % nájemní smlouvy, zejména u krátkých nájmů nebo Airbnb modelu. Chtějí stabilitu nájemníka, délku smlouvy a historii výpisů z účtu.",
      ],
    },
    {
      h2: "LTV a likvidita",
      paragraphs: [
        "Investiční byt v panelu v Praze je jiné riziko než komerční jednotka v periferii. Odhadce a interní limity banky určují, kolik z ceny nemovitosti vám půjčí — často nižší LTV než u primárního bydlení.",
      ],
    },
    {
      h2: "Daň a účel úvěru",
      paragraphs: [
        "Zda nájem podléhá paušálu nebo nákladové metodě ovlivňuje váš čistý příjem v účetnictví — banka pracuje s tím, co doložíte. Obecné daňové informace najdete v článku o daních; individuálně řešte s daňovým poradcem.",
      ],
    },
  ],
  takeaways: [
    "Banka krátí pronájmy pro jistotu.",
    "LTV bývá konzervativnější než u vlastního bydlení.",
    "Model krátkodobého ubytování je citlivý.",
  ],
};
