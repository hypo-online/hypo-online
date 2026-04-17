import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const stavebniSporeniAPreklenovaci: EducationArticle = {
  slug: "stavebni-sporeni-a-preklenovaci-uver",
  title: "Stavební spoření: meziúvěr a překlenovací úvěr v praxi",
  description:
    "Jak stavební spořitelna zapadá do financování výstavby nebo rekonstrukce vedle bankovní hypotéky.",
  category: "Spoření a kombinace",
  updatedAt: U,
  relatedSlugs: [
    "uver-ze-stavebniho-sporeni-vs-bankovni-hypoteka",
    "kombinace-zdroju-financovani",
    "developerske-a-bridge-financovani",
    "hypoteka-na-bydleni-zaklady",
  ],
  sections: [
    {
      h2: "Role stavebního spoření",
      paragraphs: [
        "Cílový stav je naspořená částka a nárok na výhodnější úvěr ze stavebního spoření podle pravidel produktu. Před dosažením cíle se často používá překlenovací (meziúvěr), který „přemosťuje“ období do přidělení nebo do refinancování klasickou hypotékou.",
      ],
    },
    {
      h2: "Meziúvěr vs. překlenovací úvěr",
      paragraphs: [
        "Terminologie se u poskytovatelů liší — důležité je číst smlouvu: výše, čerpání po etapách, zajištění, poplatky za předčasné ukončení a co se stane, když se zpozdí výstavba. U výstavby často souběžně řešíte čerpání u banky i u stavební spořitelny.",
      ],
    },
    {
      h2: "Kombinace s bankou",
      paragraphs: [
        "Častý scénář: část rozpočtu přes stavební spoření (levnější část po přidělení) a část přes hypotéku podle LTV. Koordinace čerpání a zápisů v katastru je kritická — detail v článku o kombinaci zdrojů.",
      ],
    },
  ],
  takeaways: [
    "Překlenutí = most, ne konečný stav.",
    "Čtěte sankce a časování přidělení.",
    "Souběh se bankou vyžaduje plán čerpání.",
  ],
};

export const uverZeStavebnihoSporeniVsHypoteka: EducationArticle = {
  slug: "uver-ze-stavebniho-sporeni-vs-bankovni-hypoteka",
  title: "Úvěr ze stavebního spoření vs. bankovní hypotéka: kdy co vychází",
  description:
    "Porovnání typických nákladů, rychlosti čerpání a vhodnosti podle fáze projektu (koupě hotové vs. výstavba).",
  category: "Spoření a kombinace",
  updatedAt: U,
  relatedSlugs: [
    "stavebni-sporeni-a-preklenovaci-uver",
    "kombinace-zdroju-financovani",
    "ucelova-hypoteka",
    "hypoteka-na-bydleni-zaklady",
  ],
  sections: [
    {
      h2: "Úvěr ze stavebního spoření",
      paragraphs: [
        "Po splnění podmínek přidělení máte často předem daný rámec a sazbu dle tarifu — výhoda je stabilita a přehled, nevýhoda může být čekání na přidělení a limity výše. Hodí se pro plánované etapy rekonstrukce nebo doplacení části dluhu.",
      ],
    },
    {
      h2: "Bankovní hypotéka",
      paragraphs: [
        "Banka umí rychle financovat kupní cenu celé nemovitosti při splnění LTV a příjmových testů — výhoda je rychlost a vysoké částky, nevýhoda je citlivost na tržní sazby a přísnější dokumentace u složitějších příjmů.",
      ],
    },
    {
      h2: "Rozhodovací checklist",
      paragraphs: [
        "Zjistěte celkové RPSN obou variant včetně pojistných produktů, délku fixace, poplatky za správu a možnost mimořádných splátek. U výstavby často vyhraje kombinace, ne čistě jedna cesta.",
      ],
    },
  ],
  takeaways: [
    "Stavební spoření = disciplína a časová osa.",
    "Hypotéka = rychlost a velké částky.",
    "Porovnávejte RPSN a podmínky čerpání.",
  ],
};
