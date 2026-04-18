import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const spoludluzniciManzeleBsm: EducationArticle = {
  slug: "spoludluznici-manzele-bsm",
  title: "Spoludlužníci, manželé a BSM: kdo musí podepsat a jak banka počítá domácnost",
  description:
    "Společné jmění manželů, výjimky z notářského řádu a proč banka často chce příjem i závazky partnera.",
  category: "Rodina a závazky",
  updatedAt: U,
  relatedSlugs: [
    "dti-ltv-stres-testy-a-cnb",
    "hypoteka-na-bydleni-zaklady",
    "koupe-darovani-dedictvi-financovani",
    "prubeh-zadosti-a-role-banky",
  ],
  sections: [
    {
      h2: "Spoludlužník vs. ručitel",
      paragraphs: [
        "Spoludlužník splácí úvěr společně s hlavním dlužníkem; ručitel ručí vedle dlužníka podle smlouvy. Banka volí strukturu podle příjmů a rizika — často chce spoludlužníka, pokud jeden z páru nemá dostatečný příjem sám o sobě.",
        "Příklad: Paní žádá sama o úvěr 4,5 mil. Kč, čistý příjem 32 000 Kč, splátka by překročila vnitřní limit banky. Po přidání manžela jako spoludlužníka s příjmem 38 000 Kč banka schválí stejnou výši — oba ručí celým dluhem, oba podepisují úvěrovou smlouvu. Kdyby byl manžel jen ručitelem, závazek by byl smluvně odlišný (jiné nároky věřitele při problému se splácením).",
      ],
    },
    {
      h2: "BSM a právní úkony",
      paragraphs: [
        "U majetku ve společném jmění manželů mohou být potřeba souhlasy obou — záleží na typu úkonu a na tom, zda se jedná o typickou výjimku z notářského řádu. Právník ověří podpisové požadavky před katastrem.",
        "Příklad: Kupují společně byt z druhé ruky v BSM, hypotéku bere jen manžel jako dlužník, ale zástava je na celé BSM. Banka i katastr chtějí podpis manželky k zástavě i k výjimce z předkupního práva (podle konkrétní situace). Advokát připraví jednu návštěvu u notáře s oběma doklady — ušetří se týden čekání na doplnění podpisů.",
      ],
    },
    {
      h2: "Domácnost v DTI",
      paragraphs: [
        "Banka často počítá výdaje domácnosti i příjmy partnera, i když není spoludlužníkem — kvůli úvěruschopnosti. Transparentně ukažte společné náklady (nájem, splátky, výživné).",
        "Příklad: Žadatel má čistý příjem 48 000 Kč, ale partnerka platí nájem 16 000 Kč ze společného účtu, ze kterého jdou i energie 4 500 Kč. I když je na smlouvě jen žadatel, banka v interním výpočtu zahrne podíl domácnosti na nákladech — makléř připraví tabulku „kdo co platí“ a výpisy z účtu za 3 měsíce, aby se předešlo dohadům u schvalovatele.",
      ],
    },
  ],
  takeaways: [
    "Struktura dlužníků je smluvní volba banky.",
    "BSM řeší právník podle konkrétní věci.",
    "Domácnost ≠ jen hlavní žadatel.",
  ],
};

export const euVsTretiZemeDetail: EducationArticle = {
  slug: "eu-vs-treti-zeme-detail",
  title: "EU občan vs. třetí země: dokumenty a typické rozdíly u hypotéky",
  description:
    "Hlubší rozbor pobytu, pracovního poměru a stability, který doplňuje úvodní článek pro cizince.",
  category: "Začínám v Česku",
  updatedAt: U,
  relatedSlugs: [
    "cizinci-hypoteka-v-cr",
    "cross-border-prijem-rezidence-crs",
    "smlouvy-jazyk-notar-tlumocnik",
    "prubeh-zadosti-a-role-banky",
  ],
  sections: [
    {
      h2: "EU / EHP přístup",
      paragraphs: [
        "EU občané mají širší možnosti registrace pobytu a vstupu na trh práce — banka ale stále chce doložit příjem a stabilitu. Krátká historie pobytu může být kompenzována pracovní smlouvou a výpisy z účtu.",
        "Příklad: Ital pracuje v Praze 10 měsíců na HPP, má potvrzení o přihlášení k pobytu a výplatní pásky. Banka schválí hypotéku s LTV 80 %, ale chce vyšší akontaci než u stejně příjmového Čecha s trvalým pobytem 5 let — důvodem je kratší sledovatelnost příjmu v ČR, ne EU pas sám o sobě.",
      ],
    },
    {
      h2: "Třetí země",
      paragraphs: [
        "Vyžaduje se typ pobytu a oprávnění k práci; délka pobytu a kontinuita příjmu jsou pod drobnohledem. Dokumenty mohou vyžadovat úředně ověřený překlad — časová rezerva je nutná.",
        "Příklad: Indický vývojář na zaměstnanecké kartě, smlouva na dobu neurčitou po 2 letech u stejného zaměstnavatele. Překlady diplomu a pracovního povolení trvaly 4 týdny; banka požádala ještě o potvrzení zaměstnavatele v angličtině s razítkem. Bez toho by žádost visela — proto se vyplatí mít „balík“ dokumentů hotový dřív, než podepíete rezervačku s pokutou za zmeškání.",
      ],
    },
    {
      h2: "Praxe bank",
      paragraphs: [
        "Interní seznamy „preferovaných“ pasů a zaměstnavatelů se liší — proto je vhodné porovnat více bank paralelně přes makléře.",
        "Příklad: Stejný profil (příjem 70 000 Kč, LTV 75 %) u banky X zamítnut s odkazem na interní politiku vůči určité kombinaci víza + OSVČ, u banky Y schváleno s podmínkou vyššího pojistného zástavy. Makléř to často ví dopředu z posledních měsíců — ušetříte jedno kolečko odmítnutí.",
      ],
    },
  ],
  takeaways: [
    "EU není automaticky „zelená“ bez příjmu.",
    "Třetí země = více papírů a času.",
    "Paralelní srovnání bank se vyplatí.",
  ],
};

export const crossBorderPrijemRezidenceCrs: EducationArticle = {
  slug: "cross-border-prijem-rezidence-crs",
  title: "Příjem ze zahraničí, daňová rezidence a výměna informací (CRS)",
  description:
    "Jak banky čtou zahraniční příjem a proč řeší daňovou rezidenci a zdroje prostředků.",
  category: "Začínám v Česku",
  updatedAt: U,
  relatedSlugs: [
    "cizinci-hypoteka-v-cr",
    "eu-vs-treti-zeme-detail",
    "cizomena-hypoteka-kurzove-riziko",
    "dane-nabyti-prenajem-orientace",
  ],
  sections: [
    {
      h2: "Daňová rezidence",
      paragraphs: [
        "Banka potřebuje vědět, kde platíte daň z příjmu a zda nevzniká konflikt dvou států. Certifikáty daňové rezidence nebo potvrzení zaměstnavatele bývají součástí spisu.",
        "Příklad: Žadatel pracuje pro britskou firmu remote, fakturuje v GBP, ale bydlí v ČR s rodinou a dětmi ve škole. Daňový poradce připraví české přiznání a vysvětlení rezidence; banka pak spáruje výpisy z českého účtu (kde se měsíčně objevuje převod z UK) s fakturami. Bez jedné věty „kde jsem rezident“ v dopise od poradce se schvalovatel často zastaví na dotazech.",
      ],
    },
    {
      h2: "CRS a transparentnost",
      paragraphs: [
        "Mezinárodní výměna finančních informací zvyšuje tlak na správné uvedení účtů a příjmů. Nesoulad mezi výpisem a výplatní páskou vyvolává dotazy compliance.",
        "Příklad: Na výpisu je pravidelný převod z Lucemburska, ale v žádosti je uveden jen německý zaměstnavatel. Compliance pošle dotaz: vysvětlete vztah mezi entitami. Odpověď do 48 hodin s org chartem a smlouvou zkrátila schválení o týden — ignorování e-mailu z banky naopak zmrazilo žádost na 14 dní.",
      ],
    },
    {
      h2: "Kurz a účet",
      paragraphs: [
        "Příjem na zahraniční účet chce banka sladit s českým výpisem nebo s pravidelným převodem — čím čitelnější tok, tím méně tření.",
        "Příklad: Konzultant dostává EUR na německý účet a 1× měsíčně posílá fixní částku na český účet v CZK. Makléř navrhne sjednotit datum převodu a výši tak, aby odpovídala faktuře — schvalovatel pak vidí „stejnou částku každý 25. den“ a nemusí ručně párovat 12 různých částek.",
      ],
    },
  ],
  takeaways: [
    "Rezidence řídí daň i příběh pro banku.",
    "CRS zvyšuje přesnost očekávání.",
    "Sladěte účty a dokumenty.",
  ],
};

export const smlouvyJazykNotarTlumocnik: EducationArticle = {
  slug: "smlouvy-jazyk-notar-tlumocnik",
  title: "Jazyk smluv, tlumočník a notář: praktické tipy před podpisem u banky",
  description:
    "Kdy stačí anglický summary, kdy překlad, a co řeší notářský zápis u právních úkonů.",
  category: "Začínám v Česku",
  updatedAt: U,
  relatedSlugs: [
    "eu-vs-treti-zeme-detail",
    "prubeh-zadosti-a-role-banky",
    "koupe-darovani-dedictvi-financovani",
  ],
  sections: [
    {
      h2: "Jazyk smlouvy s bankou",
      paragraphs: [
        "Bankovní smlouvy bývají v češtině; některé instituce poskytují anglický překlad informativně. Právně rozhoduje, čemu rozumíte při podpisu — pokud nečtete česky, vyžádejte si vysvětlení klíčových ustanovení nebo tlumočníka.",
        "Příklad: Pár z USA podepisuje úvěr v pátek odpoledne. V pondělí zjistí, že pojistné podmínky a odklad splátek jsou jen v českém dodatku. Řešení: před podpisem si nechat přeložit i přílohy nebo domluvit schůzku s anglicky mluvícím úvěrářem + písemný souhrn podstatných ujednání do e-mailu — trvá to o den déle, ale předejde sporu „já jsem tomu nerozuměl“.",
      ],
    },
    {
      h2: "Notářský zápis",
      paragraphs: [
        "U některých právních úkonů (např. části souhlasů) může katastr nebo banka vyžadovat notářský zápis. Notář ověří identitu a vůli — domluvte si jazyk předem.",
        "Příklad: Souhlas manželky k zástavě BSM musí být u notáře v češtině, ale klientka mluví jen francouzsky. Objedná se soudní tlumočník FR↔CZ; termín se posune o 10 dní, ale katastr vklad bez výzvy k doplnění. Bez tlumočníka by katastr vrátil vklad a prodělali byste 3 týdny na novém kole.",
      ],
    },
    {
      h2: "Tlumočník vs. překladatel",
      paragraphs: [
        "Úřední překlad listin je něco jiného než ústní tlumočení při podpisu — banka může vyžadovat jedno nebo obojí podle interní politiky.",
        "Příklad: Úředně přeložený výpis z trestního rejstříku zahraniční země banka uloží do spisu; u podpisu úvěru ale chce ještě ústní tlumočení klíčové věty o sankcích. Dva různé řády nákladů — makléř je rozpočítá do harmonogramu, abyste neplatili překladatele dvakrát zbytečně.",
      ],
    },
  ],
  takeaways: [
    "Rozumět smlouvě je na vaší straně ochrana.",
    "Notář řeší formu, ne obchodní podmínky banky.",
    "Úřední překlad má předepsané náležitosti.",
  ],
};
