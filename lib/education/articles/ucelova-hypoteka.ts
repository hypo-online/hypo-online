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
      ],
    },
    {
      h2: "Co budete dokládat",
      paragraphs: [
        "U koupě: rezervační / kupní smlouva, často výpis z katastru, někdy znalecký posudek dle LTV.",
        "U výstavby: rozpočet, smlouva se stavitelem, čerpání po fázích.",
        "Banka může pozastavit další čerpání, pokud nesedí faktury nebo stav stavby oproti schválenému plánu.",
      ],
    },
    {
      h2: "Spojitost s LTV a vlastními zdroji",
      paragraphs: [
        "Účelová hypotéka jde ruku v ruce s poměrem vlastních zdrojů a hodnotou nemovitosti — čím konzervativnější LTV, tím často vstřícnější podmínky. Viz také články o LTV a indikátorech.",
      ],
    },
  ],
  takeaways: [
    "Peníze jsou vázané na prokazatelný účel.",
    "Doklady čerpání si hlídá i compliance banky.",
    "Nižší LTV často pomůže i sazbě.",
  ],
};
