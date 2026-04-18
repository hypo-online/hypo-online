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
        "Praxe se liší podle typu návrhu (soudní ověření podpisů, elektronické podání přes banku). Chyba v listinách znamená výzvu k odstranění vad a prodlevu — proto bývá součástí hypotéky právník nebo bankovní servis, který listiny kontroluje před podáním.",
        "Příklad: Kupující podepisuje kupní smlouvu v pátek, vklad se podává v pondělí. Mezitím prodávající dostane jinou nabídku a pokusí se prodat třetí osobě — dokud není v katastru zapsáno vlastnické právo kupujícího a zástavní právo banky, hrozí složitější spor. Řešením je úschova kupní ceny a podání návrhu co nejdříve; banka často uvolní peníže až po zapsání vlastnického práva kupujícího.",
      ],
    },
    {
      h2: "Více zástav (pořadí)",
      paragraphs: [
        "Pořadí zástav určuje, kdo má přednost při výtěžku z exekuce nebo prodeje. Druhá banka často vyžaduje souhlas prvního věřitele nebo podřízené zástavní právo — ovlivňuje to, zda vám druhá banka vůbec půjčí.",
        "Podřízené zástavní právo znamená, že druhý věřitel souhlasí, že při výtěžku dostane zaplaceno až po prvním. Pro klienta to může znamenat vyšší úrok nebo nižší částku, protože druhá banka nese větší riziko.",
        "Příklad: Na domě je zástava pro hypotéku 3,5 mil. Kč u banky A. Klient chce u banky B úvěr na rekonstrukci 800 000 Kč. Banka B vyžaduje II. pořadí zástavy a souhlas banky A. Banka A souhlasí jen do výše 600 000 Kč druhé zástavy. Klient buď sníží rozpočet, nebo část rekonstrukce dofinancuje úsporami, nebo refinancuje celý dluh do jedné banky.",
      ],
    },
    {
      h2: "Výmaz a převod",
      paragraphs: [
        "Při refinancování musí stará banka souhlasit s výmazem a nová banka s novým zápisem — časové mezery řeší právníci přes podmínky vkladů.",
        "Mezidobí, kdy je stará zástava vymazaná a nová ještě není zapsaná, bývá kryté dohodnutými kroky (přímý výmaz a nový vklad v jedné vlně, případně souhlasné prohlášení věřitelů).",
        "Příklad: Refinancování z banky A do banky B. Banka B vyplatí dluh v den vkladu vlastnického práva kupujícího už neřeší — u refinancování vlastníka se typicky podá návrh na výmaz zástavy A a současně návrh na zápis zástavy B. Když katastr vrátí výzvu kvůli chybějící příloze, splatnost meziúvěru od B může naběhnout dřív, než je nová zástava zapsaná — proto právník drží rezervní variantu (krátký mostní úvěr nebo prodloužení čerpání) v úvěrových podmínkách.",
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
        "Plánování cash-flow musí počítat s termínem přiznání a platbou daně — jinak hrozí, že část vlastních prostředků potřebných na koupi „zmizí“ na dani dřív, než banka čerpá.",
        "Příklad: Kupující počítá s 400 000 Kč vlastních na kupní cenu a daň. Po konzultaci s daňovým poradcem zjistí, že daň z nabytí a související náklady zaberou 320 000 Kč. Zbývá jen 80 000 Kč rezervy — LTV u banky už nestačí. Řešení: snížit kupní cenu, přidat spolužadatele, nebo odložit koupi, dokud není naspořeno více. Bez předchozího výpočtu daně by klient podcenil vlastní vklad.",
      ],
    },
    {
      h2: "Pronájem a příjem z nájmu",
      paragraphs: [
        "Zda používáte paušál nebo nákladovou metodu mění doložitelný příjem pro banku i výši daně. Banka chce stabilitu nájmu; finanční úřad chce správné přiznání — tyto dvě logiky se musí potkat ve vaší dokumentaci.",
        "Pro banku je důležitá předvídatelnost: délka nájmu, historie příjmů na účtu, případně smlouva. Paušální daň může zjednodušit administrativu, ale nákladová metoda může lépe odrážet skutečný zisk z pronájmu — rozhodnutí je individuální.",
        "Příklad: Majitel bytu v Brně má nájem 16 500 Kč měsíčně. Pro žádost o druhou hypotéku banka chce 12 měsíců výpisů a nájemní smlouvu. Klient dříve příjem nepřiznával konzistentně — v účetnictví je mezera. Daňový poradce sjednotí přiznání dopředu; makléř podá žádost až po dvou čtvrtletích stabilních příjmů na účtu. Výsledek: schválený příjem z nájmu místo zamítnutí kvůli nedoložitelnosti.",
      ],
    },
    {
      h2: "Disclaimer",
      paragraphs: [
        "hypo.online neposkytuje daňové ani právní poradenství. Text slouží jen k tomu, abyste věděli, která témata si nechte včas vysvětlit od profesionála.",
        "Konkrétní sazby, osvobození a výjimky se mění legislativou — vždy ověřte aktuální stav u odborníka ke dni transakce.",
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
        "Kupní smlouva, znalecký posudek nebo odhad banky a stav v katastru musí říkat stejný příběh (výměra, parcelní čísla, příslušenství). Rozdíl mezi smlouvou a realitou v katastru je častý důvod pozastavení čerpání.",
        "Příklad: Kupní cena bytu 4,8 mil. Kč včetně sklepa. V katastru není sklep uveden jako spoluvlastnický podíl na garáži — banka pozastaví čerpání, dokud právník nedoloží buď opravu smlouvy, nebo vysvětlení včetně potvrzení developera. Prodávající souhlasí s notářským dodatkem; čerpání proběhne o 10 dní později. Klient si ponechá rezervu na nájem, protože předpokládal okamžité nastěhování.",
      ],
    },
    {
      h2: "Darování",
      paragraphs: [
        "Vstup do vlastnictví bez kupní ceny mění důkazní situaci pro původ prostředků — banka řeší AML a původ majetku dárce. Financování „na dar“ je méně typické než koupě; často se kombinuje s vlastními prostředky.",
        "Dar mezi blízkými osobami má i mimofinanční souvislosti (např. výlučné jmění manžela) — pro další úvěr může být nutné doložit, zda byl dar vázán na osobní užívání nebo zda vstupuje do společného jmění.",
        "Příklad: Rodiče darují byt dceři před svatbou s podmínkou osobního užívání v darovací smlouvě. Po svatbě dcera žádá hypotéku na rekonstrukci. Banka chce vysvětlení, zda je nemovitost v SJM, a zda manžel souhlasí se zástavou. Řešením je notářsky ověřený souhlas manžela a doplnění podkladů o původ daru (kupní smlouva rodičů z roku 2010). Bez toho by zástavní právo nešlo zapsat čistě.",
      ],
    },
    {
      h2: "Dědictví",
      paragraphs: [
        "Nabytí z dědictví může přinést spoluvlastnictví a podíly — pro úvěr je nutné vyjasnit podílové vztahy, případné vypořádání a zástavy. Notářský zápis a usnesení o dědictví jsou standardní podklady.",
        "Víc dědiců znamená víc podpisů a často vypořádací podíly penězi — dokud není v katastru čistý stav, banka nemusí akceptovat zástavu.",
        "Příklad: Tři sourozenci dědí rodinný dům v podílech 1/3 každý. Jeden chce dům převzít a refinancovat, ostatní chtějí výplatu. Notářská vypořádací dohoda stanoví vykoupení podílů za 1,9 mil. Kč celkem. Banka schválí hypotéku až po vkladu vlastnického práva jednomu sourozenci a výmazu podílů ostatních. Mezitím se drží termíny pro výplatu podílů — bez synchronizace by hrozilo přechodné spoluvlastnictví se zástavou, kterou všichni musí odsouhlasit.",
      ],
    },
  ],
  takeaways: [
    "Koupě = standardní hypotékový příběh.",
    "Dar = silná AML kontrola.",
    "Dědictví = podíly a vypořádání.",
  ],
};
