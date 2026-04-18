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
        "Příklad: OSVČ má schválený rámec 2 mil. Kč proti bytu v Praze. V lednu čerpá 400 000 Kč na rekonstrukci koupelny, v březnu doplatí 200 000 Kč a znovu čerpá 150 000 Kč na výměnu oken. Úrok běží z aktuální dlužné částky — musí si vést vlastní tabulku, protože splátka se mění podle čerpání; banka pošle upozornění, když se blíží limit rámce.",
      ],
    },
    {
      h2: "Komu může vyhovovat",
      paragraphs: [
        "Podnikatelům nebo domácnostem, které chtějí flexibilně čerpat na více menších investic (rekonstrukce, výstavba po částech) a mají disciplínu splácet — rámec není „zdarma peníze“, ale nástroj likvidity.",
        "Pro čistě koupi jednoho konkrétního bytu často zůstává jednodušší model účelové hypotéky s jednorázovým čerpáním.",
        "Příklad: Rodina plánuje postupně zateplit dům, vyměnit okna a přidat fotovoltaiku během 18 měsíců. Americký rámec jim umožní čerpat po etapách bez nové úvěrové smlouvy pokaždé — ale makléř jim spočítal, že celkové úroky za 18 měsíců vyjdou o X vyšší než jedna účelová půjčka s plánem čerpání; rozhodli se podle cash-flow, že flexibilita za příplatek stojí.",
      ],
    },
    {
      h2: "Rizika",
      paragraphs: [
        "Diskontinuovaná fixace nebo proměnlivá sazba může růst s trhem. Dlouhodobě nízká splátka může vést k tomu, že dluh klesá pomaleji než u anuity — sledujte tabulku splácení, kterou vám banka musí poskytnout.",
        "Příklad: Klient si ponechává vysoký rámec „pro jistotu“ a občas čerpá na běžné výdaje. Po dvou letech zjistí, že jistina klesla jen o 8 %, zatímco u anuity by byla o třetinu nižší — riziko je psychologické i finanční; řešením je nastavit si automatické splátky vyšší než minimum a čtvrtletní kontrolu stavu.",
      ],
    },
  ],
  takeaways: [
    "Americká hypotéka ≠ stejný produkt u všech bank — vždy smlouva.",
    "Flexibilita čerpání = větší sebekázeň a kontrola úroků.",
    "U koupě jednoho bytu často vyhraje klasická hypotéka.",
  ],
};
