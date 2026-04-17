import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const americkaHypoteka: EducationArticle = {
  slug: "americka-hypoteka",
  title: "Americká hypotéka: co to v českém bankovnictví znamená",
  description:
    "Revolvingový charakter, úvěrový rámec, čerpání a splácení — v čem se liší od klasické anuitní hypotéky na bydlení.",
  category: "Typy produktů",
  updatedAt: U,
  relatedSlugs: [
    "hypoteka-na-bydleni-zaklady",
    "ucelova-hypoteka",
    "hypoteka-bez-dokladovani-ucelu",
    "prubeh-zadosti-a-role-banky",
  ],
  sections: [
    {
      h2: "Původ pojmu a česká realita",
      paragraphs: [
        "V češtině se „americká hypotéka“ tradičně váže k úvěru zajištěnému nemovitostí, kde máte schválený rámec (limit), můžete opakovaně čerpat a znovu čerpat po splácení jistiny, často s jiným účtováním úroků než u klasické dlouhodobé anuity na konkrétní koupi bytu.",
        "Konkrétní podmínky se liší bankou od banky — důležité je číst smlouvu: zda je účel vázaný, jak se mění sazba při čerpání, a zda produkt spadá pod spotřebitelský úvěr na bydlení nebo obchodní úvěr (to mění ochranu i regulatorní pravidla).",
      ],
    },
    {
      h2: "Komu může vyhovovat",
      paragraphs: [
        "Podnikatelům nebo domácnostem, které chtějí flexibilně čerpat na více menších investic (rekonstrukce, výstavba po částech) a mají disciplínu splácet — rámec není „zdarma peníze“, ale nástroj likvidity.",
        "Pro čistě koupi jednoho konkrétního bytu často zůstává jednodušší model účelové hypotéky s jednorázovým čerpáním.",
      ],
    },
    {
      h2: "Rizika",
      paragraphs: [
        "Diskontinuovaná fixace nebo proměnlivá sazba může růst s trhem. Dlouhodobě nízká splátka může vést k tomu, že dluh klesá pomaleji než u anuity — sledujte tabulku splácení, kterou vám banka musí poskytnout.",
      ],
    },
  ],
  takeaways: [
    "Americká hypotéka ≠ stejný produkt u všech bank — vždy smlouva.",
    "Flexibilita čerpání = větší sebekázeň a kontrola úroků.",
    "U koupě jednoho bytu často vyhraje klasická hypotéka.",
  ],
};
