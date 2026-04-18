import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const hypotekaNaBydleniZaklady: EducationArticle = {
  slug: "hypoteka-na-bydleni-zaklady",
  title: "Klasická hypotéka na bydlení: anuita, fixace, mimořádné splátky",
  description:
    "Jak číst splátkový kalendář, co znamená fixace úrokové sazby a jak banky vnímají mimořádné splátky a odklad.",
  category: "Bydlení a produkty",
  updatedAt: U,
  relatedSlugs: [
    "ucelova-hypoteka",
    "dti-ltv-stres-testy-a-cnb",
    "prubeh-zadosti-a-role-banky",
    "refinancovani",
  ],
  sections: [
    {
      h2: "Základní model: anuitní splácení",
      paragraphs: [
        "Nejčastější forma je anuita — měsíční splátka zůstává po dobu fixace stejná, ale poměr úroku a úmoru se časem mění: zpočátku platíte více úroků, postupně více jistiny. Důležité je rozlišovat mezi výší splátky a celkově zaplacenými úroky za celou dobu úvěru.",
        "Banka vám musí poskytnout předsmluvní informace a splátkový plán; porovnávejte i RPSN, pojistné a poplatky, nejen nominální úrok.",
        "Příklad: Úvěr 3,5 mil. Kč na 25 let, úrok 4,2 %, splátka 18 900 Kč. První rok z toho jde přes 11 000 Kč měsíčně na úrok a necelých 8 000 Kč na jistinu. Klient si myslel, že „už splatil hodně“, ale po roce je jistina nižší jen o cca 95 000 Kč — z tabulky splácení je vidět, proč mimořádná splátka na začátku šetří nejvíc úroků.",
      ],
    },
    {
      h2: "Fixace sazby",
      paragraphs: [
        "Fixace určuje období, po které se sazba nemění podle běžného tržního vývoje (dle smlouvy). Po jejím skončení nastupuje buď nová fixace po vyjednání, nebo pohyblivá sazba podle interního indexu banky — vždy čtěte, co přesně nastane po konci fixace.",
        "Delší fixace často znamená vyšší počáteční sazbu než krátká, ale chrání před skokem sazeb v nejistém období.",
        "Příklad: Pár volí 10letou fixaci, protože očekává druhé dítě a nechce řešit refinanc v roce, kdy klesne příjem na rodičovské. Platí o 0,15 p. b. více než soused s 3letou fixací — ale mají rozpočet na 10 let jistý; soused po 3 letech zjistil, že tržní nabídka je o 0,8 p. b. horší.",
      ],
    },
    {
      h2: "Mimořádné splátky a odklad",
      paragraphs: [
        "Smlouva stanoví, zda můžete část jistiny doplatit zdarma jednou ročně, v jaké výši, a zda se jedná o zkrácení doby nebo snížení splátky. Odklad splátky (např. při porodu) je samostatný produkt s podmínkami — ovlivňuje cash-flow, ne vždy snižuje celkové náklady.",
        "Příklad: Ročně lze bez poplatku splatit 25 % zůstatku, max. 200 000 Kč. Klient pošle 250 000 Kč — banka použije 200 000 Kč jako bezplatnou mimořádnou splátku a 50 000 Kč buď vrátí, nebo zaúčtuje s poplatkem dle ceníku. Před převodem je levnější si přečíst limit přesně v příloze smlouvy.",
      ],
    },
  ],
  takeaways: [
    "Anuita = stejná splátka, mění se podíl úrok/úmor.",
    "Po fixaci čtěte automatickou návaznost sazby.",
    "Mimořádné splátky mají pravidla přímo ve smlouvě.",
  ],
};

export const rekreacniVsPrimarniBydleni: EducationArticle = {
  slug: "rekreacni-vs-primarni-bydleni",
  title: "Rekreační nemovitost vs. primární bydlení: jak banka liší riziko",
  description:
    "Proč stejná částka úvěru může mít jiné LTV, sazbu a požadavky na vlastní zdroje podle účelu užívání.",
  category: "Bydlení a produkty",
  updatedAt: U,
  relatedSlugs: [
    "hypoteka-na-bydleni-zaklady",
    "ucelova-hypoteka",
    "investicni-nemovitost-a-hypoteka",
    "dti-ltv-stres-testy-a-cnb",
  ],
  sections: [
    {
      h2: "Primární bydlení",
      paragraphs: [
        "Banka typicky předpokládá, že v nemovitosti budete fakticky bydlet — ověřuje to adresou trvalého pobytu, energetickými předpisy, někdy i návštěvou či dotazem na zaměstnavatele. Účel ovlivňuje ochotu dát vyšší LTV a příznivější sazbu.",
        "Příklad: Kupujete byt 3+kk v Brně, trvalý pobyt hlášen na stejné adrese, práce v dojezdové vzdálenosti. Banka nabídne LTV 90 % a sazbu o 0,25 p. b. lepší než u stejného bytu, který kupujete jako „rekreační“ bez plánu přestěhování — důvodem je nižší modelové riziko neobsazenosti.",
      ],
    },
    {
      h2: "Rekreace (chalupa, apartmán v horách)",
      paragraphs: [
        "Rekreační objekt má často vyšší riziko likvidity na trhu a sezónní užití — banky proto mohou požadovat vyšší vlastní zdroje, jiný odhad a přísnější posouzení příjmu. Pokud plánujete krátkodobé pronájmy, řeší se to i v daňové a účelové rovině.",
        "Příklad: Chata v Orlických horách, kupní cena 2,4 mil. Kč. Banka stanoví LTV max. 70 % a chce znalecký posudek od svého panelu znalců — odhad 2,2 mil. Kč. Klient musí doplnit vlastní zdroje, aby seděl poměr k výpůjčce; zároveň dostane vyšší sazbu než u bytu v Praze se stejným příjmem.",
      ],
    },
    {
      h2: "Co si pohlídat před podpisem",
      paragraphs: [
        "Ujistěte se, že účel ve smlouvě odpovídá realitě — nesoulad může vést k porušení úvěrových podmínek nebo problému při čerpání. Při kombinaci pronájmu a vlastního užívání konzultujte strukturu s makléřem i daňovým poradcem.",
        "Příklad: Klient uvede primární bydlení, ale v žádosti o hypotéku je jiná adresa trvalého pobytu než kupovaný apartmán v horách. Banka požádá o vysvětlení; bez něj hrozí přeřazení do rekreační kategorie nebo zamítnutí. Řešení: buď změna trvalého pobytu před žádostí, nebo účastné vysvětlení s prací na dálku a doložením výdajů na hlavní bydlení v nájmu.",
      ],
    },
  ],
  takeaways: [
    "Účel užívání mění rizikový profil.",
    "Rekreace často = konzervativnější LTV.",
    "Pronájem mění i daňovou stránku.",
  ],
};

export const investicniNemovitostAHypoteka: EducationArticle = {
  slug: "investicni-nemovitost-a-hypoteka",
  title: "Investiční nemovitost a hypotéka: cashflow, zátěž a očekávání banky",
  description:
    "Jak banky vnímají příjem z pronájmu, rezervy a riziko neobsazenosti — ne každá investice projde standardním retailovým úvěrem.",
  category: "Bydlení a produkty",
  updatedAt: U,
  relatedSlugs: [
    "rekreacni-vs-primarni-bydleni",
    "dane-nabyti-prenajem-orientace",
    "dti-ltv-stres-testy-a-cnb",
    "hypoteka-bez-dokladovani-ucelu",
  ],
  sections: [
    {
      h2: "Pronájem jako příjem",
      paragraphs: [
        "Banky část nájmu započítávají konzervativně (haircut) — ne vždy 100 % nájemní smlouvy, zejména u krátkých nájmů nebo Airbnb modelu. Chtějí stabilitu nájemníka, délku smlouvy a historii výpisů z účtu.",
        "Příklad: Nájemní smlouva na dobu určitou 12 měsíců, nájem 14 500 Kč. Banka započte 70 %, tedy 10 150 Kč, dokud nebude druhá smlouva po sobě. Majitel doloží výpisy 12 měsíců a prodloužení smlouvy — po roce banka zvýší započitatelný nájem na 85 %.",
      ],
    },
    {
      h2: "LTV a likvidita",
      paragraphs: [
        "Investiční byt v panelu v Praze je jiné riziko než komerční jednotka v periferii. Odhadce a interní limity banky určují, kolik z ceny nemovitosti vám půjčí — často nižší LTV než u primárního bydlení.",
        "Příklad: Byt 5. patro, OV Praha 9, kupní cena 6,1 mil. Kč. Banka při investičním účelu povolí LTV 75 % místo 90 % u vlastního bydlení — klient doplácí 900 000 Kč vlastními prostředky navíc. Zato dostane produktovou řadu, kde je akceptovatelný příjem z nájmu v DTI.",
      ],
    },
    {
      h2: "Daň a účel úvěru",
      paragraphs: [
        "Zda nájem podléhá paušálu nebo nákladové metodě ovlivňuje váš čistý příjem v účetnictví — banka pracuje s tím, co doložíte. Obecné daňové informace najdete v článku o daních; individuálně řešte s daňovým poradcem.",
        "Příklad: Majitel uplatňuje paušál, na daňovém přiznání vypadá čistý příjem z nájmu níž, než je reálný cash-flow. Banka bere čísla z přiznání — proto před žádostí o hypotéku na druhý byt spočítá s poradcem, zda krátkodobě přejít na nákladovou metodu (pokud to dává smysl) a jaké to má dopady.",
      ],
    },
  ],
  takeaways: [
    "Banka krátí pronájmy pro jistotu.",
    "LTV bývá konzervativnější než u vlastního bydlení.",
    "Model krátkodobého ubytování je citlivý.",
  ],
};
