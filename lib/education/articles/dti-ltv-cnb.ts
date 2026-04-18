import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const dtiLtvCnb: EducationArticle = {
  slug: "dti-ltv-stres-testy-a-cnb",
  title: "DTI, LTV, DSTI, výnosová sazba: co banky počítají a kde vstupuje ČNB",
  description:
    "Zjednodušený přehled ukazatelů způsobilosti a rozdíl mezi doporučením regulatora a interním modelem banky.",
  category: "Banky a regulace",
  updatedAt: U,
  relatedSlugs: [
    "hypoteka-na-bydleni-zaklady",
    "spoludluznici-manzele-bsm",
    "refinancovani-a-konsolidace",
    "cizomena-hypoteka-kurzove-riziko",
  ],
  sections: [
    {
      h2: "LTV (loan-to-value)",
      paragraphs: [
        "LTV je poměr výše úvěru k hodnotě zástavy (nemovitosti). Čím vyšší LTV, tím větší část kupuje banka — roste riziko z její perspektivy, což se projevuje v sazbě, pojistných požadavcích nebo potřebě vyššího vlastního vkladu.",
        "Hodnota nemovitosti není vždy stejná jako kupní cena: banka pracuje s odhadem, někdy konzervativněji než inzerce developera.",
        "Příklad: Developer inzeruje 7,2 mil. Kč, bankovní odhad říká 6,9 mil. Kč. Při požadavku LTV 90 % banka počítá z 6,9 mil. Kč → maximální úvěr 6,21 mil. Kč, ne z 7,2 mil. Kč. Klient musí doplatit rozdíl vlastními prostředky nebo slevit na menší byt.",
      ],
    },
    {
      h2: "DTI / DSTI (zátěž příjmem)",
      paragraphs: [
        "Zjednodušeně: kolik z vašeho příjmu spolknou splátky (a někdy i další závazky). Banky používají různé definice — hrubý vs. čistý příjem, zda počítají výživné, nájem, kreditní karty limit vs. čerpání apod.",
        "ČNB vydává pro banky rámec doporučení a opatření k obezřetnému posuzování úvěrů na bydlení — jde o systémové snížení rizika předlužení v celém trhu. Konkrétní výpočet a „kde přesně useknout“ žádost ale dělá každá banka vlastním kreditním modelem v mezích pravidel.",
        "Příklad: Čistý příjem 52 000 Kč, splátka hypotéky 17 500 Kč, leasing na auto 4 200 Kč, limit kreditky 50 000 Kč (čerpáno 8 000 Kč). Jedna banka počítá 5 % z limitu karty (2 500 Kč), druhá z čerpání. DTI se liší o pár bodů — výsledek může být schválení vs. požadavek splatit kartu před čerpáním.",
      ],
    },
    {
      h2: "Výnosová / diskontní sazba a stres test",
      paragraphs: [
        "Banky často testují splátkovou zátěž nejen podle aktuální sazby, ale i pod vyšší „stresovou“ sazbou nebo podle delší amortizace. Cíl: ověřit, zda zvládnete splácet i při zhoršení podmínek.",
        "To je důvod, proč můžete mít „dost příjmu“ v excelu doma, ale banka vám nabídne nižší rámec — její vnitřní test je přísnější než čistá aritmetika úroku z reklamy.",
        "Příklad: Nabízená sazba 3,6 %, ale stres na 6,5 % a delší dobu. Splátka ve stresu přesáhne vnitřní limit → banka sníží schválenou výši úvěru o 400 000 Kč. Klient buď zvýší akontaci, nebo prodlouží splatnost (pokud produkt dovolí), aby vešel do limitu.",
      ],
    },
    {
      h2: "Jak s tím pracovat jako žadatel",
      paragraphs: [
        "Snižte LTV vlastními prostředky, srazte krátkodobé splátky (kreditky, spotřebitelské úvěry) před žádostí, prodlužte fixaci jen pokud rozumíte scenářům.",
        "hypo.online vám dá orientační signál; konkrétní limity DTI/LTV si nechte potvrdit u makléře s přístupem k aktuálním interním tabulkám bank.",
        "Příklad: Před žádostí splatí spotřáku 35 000 Kč a sníží limit karty z 100 000 na 30 000 Kč — měsíční zátěž v modelu banky klesne o stovky korun a schválený rámec stoupne. Zabere to 6 týdnů, než se registry aktualizují.",
      ],
    },
  ],
  takeaways: [
    "ČNB nastavuje společný rámec obezřetnosti; banka má vlastní model.",
    "LTV ≠ kupní cena — rozhoduje odhad a politika banky.",
    "Stres test může snížit schválený rámec i při nízké dnešní splátce.",
  ],
};
