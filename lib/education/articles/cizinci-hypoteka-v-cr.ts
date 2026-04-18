import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const cizinciHypotekaVcr: EducationArticle = {
  slug: "cizinci-hypoteka-v-cr",
  title: "Hypotéka v ČR pro cizince: co banky řeší jako první",
  description:
    "Praktický přehled rezidence, příjmu, dokumentace a rozdílů mezi „papírově možné“ a „bankovně schválené“.",
  category: "Začínám v Česku",
  updatedAt: U,
  relatedSlugs: [
    "eu-vs-treti-zeme-detail",
    "cross-border-prijem-rezidence-crs",
    "smlouvy-jazyk-notar-tlumocnik",
    "prubeh-zadosti-a-role-banky",
  ],
  sections: [
    {
      h2: "Proč je hypotéka v ČR jiná než „doma“",
      paragraphs: [
        "České banky posuzují žádost v kontextu českého práva, daňového systému a úvěrových registrů (např. CBCB). To, že jste schváleni v jiné zemi, automaticky neznamená stejný výsledek zde — ale nejste v tom sami: velká část Prahy a regionů řeší zahraniční příjmy a smíšené domácnosti denně.",
        "Klíčové je oddělit tři vrstvy: legální pobyt a identifikace, doložitelný příjem, a nemovitost (účel, LTV, lokalita). Banka pak skládá interní skóre; výstup není jen „ano/ne“, ale často podmínky, výjimky nebo požadavek na vyšší vlastní zdroje.",
        "Příklad: Rodina z Brazílie měla před třemi lety schválený úvěr v USA na stejný typ příjmu. V ČR dostala nejdřív odmítnutí — důvodem nebylo „jste Brazilci“, ale chybějící česká daňová historie a krátká délka českého účtu. Po 8 měsících pravidelných výplat na český účet a doložení českého daňového přiznání jiná banka schválila stejnou strukturu s akontací +5 %.",
      ],
    },
    {
      h2: "Rezidence a identita",
      paragraphs: [
        "Typ pobytu (např. trvalý, dlouhodobý, pracovní vízum) ovlivňuje nejen ochotu banky úvěr nabídnout, ale i rozsah dokumentů. EU občané mají jinou administrativní cestu než státní příslušníci třetích zemí — u třetích zemí často přistupuje banka konzervativněji k délce pobytu a stabilitě zaměstnání.",
        "Počítejte s tím, že banka chce konzistentní příběh: stejné jméno v pasu, smlouvě, výpisu z účtu a u zaměstnavatele. Drobné nesoulady řešíte raději před podáním žádosti s makléřem než vysvětlováním u úvěrového oddělení.",
        "Příklad: V pasu je příjmení s diakritikou, v pracovní smlouvě bez ní, na výpisu z účtu zkrácená varianta. Schvalovatel pozastavil žádost na 10 dní kvůli „AML stop“ — oprava přes doplněk od zaměstnavatele a notářsky ověřený výpis z pasu problém vyřešil. Časová ztráta šla minimalizovat tím, že se balík sjednotil už při prvním podání.",
      ],
    },
    {
      h2: "Příjem ze zahraničí vs. příjem v ČR",
      paragraphs: [
        "Zaměstnání u českého plátce s běžnou pracovní smlouvou je pro banky nejjednodušší model: mzda, výplatní pásky, potvrzení zaměstnavatele.",
        "Příjem v EUR/USD z koncernu v jiné zemi je často akceptovatelný, ale vyžaduje překlady, smlouvy, výpisy z účtu a někdy kurzové či daňové sladění. OSVČ s českou živností a daňovým přiznáním je jiná kategorie než OSVČ s fakturací přes zahraniční firmu — obě jdou, ale dokumentační nároky se liší.",
        "Důležitý je také měsíční „míst“ pro splátky: banky pracují s vašimi závazky vůči jiným věřitelům, nájmu, výživnému atd. (viz článek o DTI a indikátorech).",
        "Příklad: Vývojář fakturuje 4 000 EUR měsíčně přes německou GmbH, na český účet posílá 85 % po kurzu. Banka vezme průměr 6 měsíců, aplikuje haircut 20 % na volatilitu kurzu a započte jen 80 % z výsledku. Žadatel v Excelu počítal vyšší částku — makléř připravil tabulku „takto to počítáme my“ ještě před žádostí, aby nedošlo k šoku při schvalování.",
      ],
    },
    {
      h2: "Kde v zákoně hledat základní pojmy (orientace, ne náhrada advokáta)",
      paragraphs: [
        "Zákon č. 89/2012 Sb., občanský zákoník (NOZ), upravuje soukromoprávní vztahy včetně úvěru a zajištění. Pro hypotéku je prakticky stěžejní úprava smlouvy o úvěru v § 2395 a násl. NOZ — tam je popsáno, že věřitel se zavazuje na žádost dlužníka poskytnout peněžní prostředky do určité částky a dlužník se zavazuje poskytnuté peněžité prostředky vrátit a zaplatit úrok (přesné znění a výjimky vždy ověřte v konsolidovaném znění).",
        "Úvěr na bydlení pro spotřebitele se současně řídí zákonem č. 257/2016 Sb., o spotřebitelském úvěru. Ten mimo jiné stanoví posouzení úvěruschopnosti, informační povinnosti věřitele a náležitosti smluvní dokumentace — proto banka „peče“ dotazníky a výpisy často víc, než byste čekali z čistě matematického výpočtu splátky.",
        "Zástavní právo k nemovité věci (typicky zápis zástavního práva k nemovitosti ve prospěch banky) najdete v NOZ v části o věcných právech, v oddílu o zástavním právu — obecně od § 1309 NOZ dál podle aktuálního členění zákona. Zápis do veřejného seznamu probíhá v katastru nemovitostí podle zákona č. 256/2013 Sb., katastrální zákon (včetně řízení o povolení vkladu).",
        "Kupní smlouva nebo smlouva o smlouvě budoucí se řídí opět NOZ (např. převod vlastnického práva k nemovité věci, rezolutní podmínky) a musí ladit s tím, co podepisujete v úvěrové smlouvě — nesoulad mezi kupní a úvěrovou smlouvou je častý zdroj zdržení.",
        "Tento blok slouží jen k orientaci v legislativě; pro konkrétní podpis smluv a mezinárodní prvky (cizí právo, daňová rezidence) si nechte potvrdit postup u advokáta nebo daňového poradce.",
      ],
    },
    {
      h2: "Jak si ušetřit čas a nervy",
      paragraphs: [
        "Než poběžíte na pobočku, sepište si časovou osu: odkdy pobyt, odkdy příjem, kde leží vlastní zdroje na akonto. hypo.online vám pomůže s rychlou orientací; detailní strukturu úvěru nechte projít s licencovaným hypotečním makléřem, který zná aktuální appetite jednotlivých bank.",
        "Příklad časové osy: měsíc 0 — sběr dokumentů a sjednocení jmen; měsíc 1 — předběžné nezávazné posouzení u 2 bank; měsíc 2 — rezervační smlouva až po písemném „go“ od obou bank; měsíc 3 — podpis úvěru a žádost o vklad. Když se rezervačka podepíše v týdnu 0 a dokumenty nejsou hotové do týdne 2, často vzniká pokuta — osa vám ukáže, kde jste pozdě.",
      ],
    },
  ],
  takeaways: [
    "Banka skládá puzzle: pobyt + příjem + nemovitost + vaše závazky.",
    "Zahraniční příjem jde, ale často déle a s více papíry.",
    "Konzistence jmen a dat napříč dokumenty šetří týdny.",
    "Právní rámec: NOZ (úvěr § 2395+, zástav § 1309+), zákon 257/2016 Sb. (spotřebitel), zákon 256/2013 Sb. (katastr).",
  ],
};
