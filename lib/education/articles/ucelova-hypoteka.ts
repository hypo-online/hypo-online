import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const ucelovaHypoteka: EducationArticle = {
  slug: "ucelova-hypoteka",
  title: "Účelová hypotéka: vázanost na koupi, výstavbu nebo refinanc",
  description:
    "Proč banka chce dokladovat účel čerpání a jak to souvisí s kontrolou rizika a sazbou.",
  category: "Typy produktů",
  updatedAt: U,
  relatedSlugs: [
    "prubeh-zadosti-a-role-banky",
    "developerske-a-bridge-financovani",
    "dti-ltv-stres-testy-a-cnb",
    "hypoteka-na-bydleni-zaklady",
  ],
  sections: [
    {
      h2: "Co znamená „účelová“",
      paragraphs: [
        "Účelová hypotéka je navázaná na konkrétní použití peněz: typicky koupě obecného bydlení, výstavba, rekonstrukce podle rozpočtu, nebo refinancování stávajícího závazku na bydlení. Banka čerpání kontroluje doklady (kupní smlouva, faktury, výstavba).",
        "Výhodou pro banku je nižší nejistota: ví, na co peníze jdou, a může lépe ocenit zástavu vůči účelu. Odtud často lepší sazba než u úvěru, kde účel není vázaný.",
        "Příklad: Kupujete družstevní podíl převodem do OV za 3,2 mil. Kč — účel je v úvěrové smlouvě vázaný na kupní smlouvu a čerpání proběhne přímo na účet prodávajícího podle podmínek banky. Kdybyste chtěli část peněz použít na auto, banka čerpání zastaví, protože to není schválený účel.",
      ],
    },
    {
      h2: "Co budete dokládat",
      paragraphs: [
        "U koupě: rezervační / kupní smlouva, často výpis z katastru, někdy znalecký posudek dle LTV.",
        "U výstavby: rozpočet, smlouva se stavitelem, čerpání po fázích.",
        "Banka může pozastavit další čerpání, pokud nesedí faktury nebo stav stavby oproti schválenému plánu.",
        "Příklad rekonstrukce: Schválený rozpočet 900 000 Kč na elektroinstalaci a koupelnu. Faktura na kuchyňskou linku 180 000 Kč není v rozpočtu — banka pošle výzvu k dodatku nebo vrácení částky. Řešení: před čerpáním poslat dodatek rozpočtu ke schválení; trvá to týden, ale udrží soulad s účelovkou.",
      ],
    },
    {
      h2: "Spojitost s LTV a vlastními zdroji",
      paragraphs: [
        "Účelová hypotéka jde ruku v ruce s poměrem vlastních zdrojů a hodnotou nemovitosti — čím konzervativnější LTV, tím často vstřícnější podmínky. Viz také články o LTV a indikátorech.",
        "Příklad: Při LTV 90 % banka vyžaduje přísnější kontrolu faktur a častěji vlastní odhad; při LTV 70 % stejná banka uvolní čerpání po kontrole vzorku faktur. Klient, který může doplatit větší akontaci, si nejen sníží splátku, ale zjednoduší si administrativu čerpání.",
      ],
    },
  ],
  takeaways: [
    "Peníze jsou vázané na prokazatelný účel.",
    "Doklady čerpání si hlídá i compliance banky.",
    "Nižší LTV často pomůže i sazbě.",
  ],
};
