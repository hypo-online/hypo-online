import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const developerskeABridgeFinancovani: EducationArticle = {
  slug: "developerske-a-bridge-financovani",
  title: "Developerské financování, předhypoteční a bridge úvěry",
  description:
    "Jak se liší financování před kolaudací, při rezervaci v rozestavěnosti a při časové mezeře mezi závazky.",
  category: "Segmenty nemovitostí",
  updatedAt: U,
  relatedSlugs: [
    "kombinace-zdroju-financovani",
    "prubeh-zadosti-a-role-banky",
    "ucelova-hypoteka",
    "zastavni-pravo-katastr-a-vic-zajisteni",
  ],
  sections: [
    {
      h2: "Rezervace a zálohy u developera",
      paragraphs: [
        "Developer často vyžaduje zálohu před podpisem budoucí kupní smlouvy nebo před čerpáním úvěru. Banka musí vidět soulad mezi rezervační smlouvou, budoucí kupní smlouvou a úvěrovou smlouvou — nesoulad blokuje čerpání.",
        "Částka zálohy, storno podmínky a vázání na stavební povolení musí být čitelné i pro právníka banky. Nejasná klauzule o „preferenčním právu“ nebo změně ceny při změně dispozic může znamenat dodatečné čerpání mimo schválený rámec.",
        "Příklad: Rezervační poplatek 50 000 Kč, budoucí kupní cena 6,1 mil. Kč včetně garáže. V rezervačce je garáž jako volitelná položka +250 000 Kč. Úvěrová smlouva je sepsaná bez garáže. Při podpisu konečné kupní smlouvy s garáží banka odmítne čerpat plnou částku, dokud není dodatek k úvěru. Klient buď doplatí garáž hotově, nebo nechá přepočítat úvěr — týden zpoždění u developera bez domluvy může stát smluvní pokutu.",
      ],
    },
    {
      h2: "Bridge / předhypoteční řešení",
      paragraphs: [
        "Bridge znamená krátkodobé překlenutí likvidity (např. koupě nového bytu dřív, než prodáte starý). Rizikem je dvojí zátěž — banka testuje, zda zvládnete obě splátky současně, nebo vyžaduje prodejní podmínku.",
        "Úroková sazba bridge úvěru bývá vyšší než u dlouhodobé hypotéky; smysl je časově omezený. Plán musí obsahovat realistický termín prodeje staré nemovitosti (cena, makléř, stav případných vad).",
        "Příklad: Rodina kupuje novostavbu za 7,8 mil. Kč, starý byt je v inzerci za 4,2 mil. Kč. Bridge 1,5 mil. Kč na zálohu a část vlastních nákladů na 12 měsíců. Banka ve stresu počítá splátku hypotéky nového bytu + bridge + hypotéku starého bytu, dokud není prodej. Schválení padne, dokud není předkupní smlouva nebo závazný termín prodeje s rezervní cenou. Řešením je nejdřív uzavřít rezervaci kupujícího na starý byt, nebo snížit kupní cenu nového.",
      ],
    },
    {
      h2: "Čerpání po etapách",
      paragraphs: [
        "U rozestavěnosti banka uvolňuje peníze proti dokladům o výstavbě — harmonogram musí sedět s developerskou smlouvou. Prodleva stavby znamená prodlevu čerpání a možné sankce vůči prodejci.",
        "Technický dozor investora nebo stavební deník může být součástí podkladů pro další tranši — záleží na bance a projektu.",
        "Příklad: Developer žádá 40 % ceny po dokončení hrubé stavby. Banka vyžaduje protokol stavebního dozoru a faktury za materiál. Faktury jsou vystaveny na jinou SPV než je v kupní smlouvě — čerpání se zastaví, dokud právník nevyjasní skupinu společností a nepřidá potvrzení o skupině. Klient si ponechá 200 000 Kč hotovosti navíc na meziměsíc bez čerpání.",
      ],
    },
  ],
  takeaways: [
    "Časová mezera = rizikové okno.",
    "Dokumenty musí říkat stejný příběh.",
    "Dvojí splátka je tvrdý stres test.",
  ],
};

export const druzstevniBytNajemSpv: EducationArticle = {
  slug: "druzstevni-byt-najem-spv",
  title: "Družstevní byt, nájem s právem koupě a SPV: co banka řeší jinak",
  description:
    "Právní titul k užívání vs. vlastnictví, vklad do katastru a typické překážky pro zajištění.",
  category: "Segmenty nemovitostí",
  updatedAt: U,
  relatedSlugs: [
    "koupe-darovani-dedictvi-financovani",
    "zastavni-pravo-katastr-a-vic-zajisteni",
    "ucelova-hypoteka",
    "prubeh-zadosti-a-role-banky",
  ],
  sections: [
    {
      h2: "Družstevní podíl",
      paragraphs: [
        "Banka potřebuje vědět, zda lze zřídit zástavní právo k podílu a zda družstvo souhlasí. Často chybí přímá paralela k vlastnickému bytu — řešení bývá individualizované a závislé na stanovách družstva.",
        "Některá družstva vyžadují souhlas členské schůze s zástavou; bez něj nelze úvěr čerpat, i když je schválený.",
        "Příklad: Žadatel kupuje družstevní podíl na byt 3+1 za 2,1 mil. Kč. Stanovy vyžadují souhlas družstva se zástavou a předkupní právo družstva při převodu. Banka schválí úvěr pod podmínkou písemného souhlasu před čerpáním. Družstvo schůzi stihne až za 8 týdnů — mezitím klient platí nájem u původního vlastníka podle nájemní smlouvy. Řešením je smluvně prodloužit lhůtu k čerpání nebo dočasná záloha od rodičů, aby nepropadla rezervace u prodávajícího.",
      ],
    },
    {
      h2: "Nájem s právem koupě",
      paragraphs: [
        "Kombinace nájemního vztahu a budoucí koupě vyžaduje sladění budoucí kupní smlouvy s úvěrem. Banka posuzuje, zda je budoucí převod dostatečně jistý pro zajištění.",
        "Fixace odkupní ceny, indexace, a kdo nese údržbu, ovlivňuje hodnotu zástavy v budoucnu — banka modeluje i scénář, že odkup nenastane.",
        "Příklad: Smlouva na 3 roky nájmu s opcí koupě bytu za 3,4 mil. Kč. Po roce chce nájemce čerpat hypotéku na odkup. Banka chce vidět, že je opce vykonatelná (notářský zápis, vklad věcného práva pokud předpisy dovolí). Když je opce jen „gentlemanská“ bez vkladu, banka úvěr na odkup nezajistí stejně jako u klasické koupě — řešením je převést model na řádnou budoucí kupní smlouvu s podmínkami vkladu.",
      ],
    },
    {
      h2: "SPV a obchodní struktury",
      paragraphs: [
        "Koupě přes obchodní společnost mění posouzení — jde o cash-flow entity, strukturu vlastníků a transparenci. Retailová hypotéka na fyzickou osobu nemusí stačit.",
        "Účetní výkazy, historie dividend a závazky společnosti jsou součástí kreditního příběhu. Majitel může být ručitel, ale úvěr běží na firmě.",
        "Příklad: Investiční byt je ve vlastnictví s.r.o. s jediným společníkem. Firma žádá úvěr na koupi druhého bytu. Banka posuzuje obrat z nájmu prvního bytu, daňovou zátěž a volné cash-flow po splátce. Schválení je podmíněno osobním ručením majitele a vkladem 25 % vlastních zdrojů firmy. Kdyby majitel chtěl hypotéku jako fyzická osoba na stejný byt, dokumentace by byla jiná — makléř volí produkt podle skutečného vlastníka v katastru.",
      ],
    },
  ],
  takeaways: [
    "Titul musí být pro banku čitelný.",
    "Družstvo = stanov a souhlasy.",
    "SPV = firemní úvěrová logika.",
  ],
};

export const hypotekaNaPuduALes: EducationArticle = {
  slug: "hypoteka-na-pudu-a-les",
  title: "Půda, les a zemědělský majetek: financování mimo standardní byt",
  description:
    "Jiné banky, jiné LTV a často jiné ocenění než u obytných jednotek v městě.",
  category: "Segmenty nemovitostí",
  updatedAt: U,
  relatedSlugs: [
    "rekreacni-vs-primarni-bydleni",
    "investicni-nemovitost-a-hypoteka",
    "podnikatelsky-uver-zastava-nemovitosti",
    "dti-ltv-stres-testy-a-cnb",
  ],
  sections: [
    {
      h2: "Specifika ocenění",
      paragraphs: [
        "Oceňovací metody pro ornou půdu nebo les se liší od znalce bytu v Praze — banka volí konzervativní přístup a menší počet akceptovaných znalců.",
        "Bonita půdy (kategorie půdních ekologických jednotek), přístupová cesta, věcná břemena cizí cesty nebo ochranná pásma mohou výrazně snížit úvěrovou hodnotu oproti inzerci.",
        "Příklad: Inzerce lesa 850 000 Kč, znalec pro banku ocení na 620 000 Kč kvůli špatnému přístupu a věcnému břemenu služebnosti. Při LTV 70 % banka půjčí max. 434 000 Kč. Kupující chtěl 600 000 Kč — musí doplatit 166 000 Kč nebo vyjednat snížení kupní ceny s prodávajícím. Bez vlastního znaleckého posudku před nabídkou by kupující přecenil své možnosti.",
      ],
    },
    {
      h2: "Účel užívání",
      paragraphs: [
        "Zemědělský podnikatel může kombinovat podnikatelský úvěr a zajištění pozemkem; domácnost kupující rekreační pozemek bez stavby řeší jiný účel než dokončené bydlení — dopad na LTV a sazbu.",
        "Koupě zemědělského půdního fondu má specifické převodní podmínky — banka kontroluje, zda je převod přípustný vůči předkupním právům a věcným břemenům.",
        "Příklad: Rodina kupuje louku 12 000 m² u obce s plánem postavit chatu za 5 let. Banka produktem „hypotéka na bydlení“ nepůjčí na holou půdu stejně jako na byt — nabídne úvěr se zemědělským/investičním charakterem s kratší splatností a vyšší sazbou. Klient si nechá vypracovat územní plán a ověří, zda je pozemek stavební; až po změně účelu v katastru může refinancovat do produktu na výstavbu s jiným LTV.",
      ],
    },
  ],
  takeaways: [
    "Segment je užší než byty.",
    "Znalec a účel jsou kritické.",
    "Kombinace s podnikáním je častá.",
  ],
};
