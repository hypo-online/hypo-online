import type { EducationArticle } from "../types";

const U = "2026-04-18";

export const kombinaceZdrojuFinancovani: EducationArticle = {
  slug: "kombinace-zdroju-financovani",
  title: "Kombinace zdrojů: vlastní úspory, hypotéka, stavební spoření a dotace",
  description:
    "Jak skládat vlastní zdroje, úvěry a veřejné podpory tak, aby čerpání a zápisy v katastru navazovaly.",
  category: "Spoření a kombinace",
  updatedAt: U,
  relatedSlugs: [
    "stavebni-sporeni-a-preklenovaci-uver",
    "uver-ze-stavebniho-sporeni-vs-bankovni-hypoteka",
    "developerske-a-bridge-financovani",
    "zastavni-pravo-katastr-a-vic-zajisteni",
  ],
  sections: [
    {
      h2: "Vrstvení kapitálu",
      paragraphs: [
        "Typický model: vlastní hotovost na rezervační zálohu a část kupní ceny, hypotéka na zbytek, případně stavební spoření na rekonstrukci po koupi. Pořadí čerpání musí souhlasit s podmínkami prodejce, developera i bank.",
        "Banka obvykle vyžaduje, aby se „její“ peníze čerpaly až v okamžiku, kdy je jisté, že koupě proběhne (podmíněné čerpání, vklad zástavy, případně escrow). Vlastní úspory jdou často dříve — proto je důležité mít rezervu i mimo hypotéku na neočekané výdaje (odhad, daň, opravy).",
        "Příklad: Kupní cena 5,4 mil. Kč, banka schválí 4,3 mil. Kč (LTV z odhadu). Klient má 800 000 Kč hotově a 300 000 Kč naspořeno ve stavebním spoření s nárokem na úvěr za rok. Rezervační zálohu 200 000 Kč platí z úspor; zbytek vlastních 600 000 Kč složí před podáním návrhu na vklad. Stavební spořitelna čerpá až po kolaudaci rekonstrukce kuchyně — mezitím hypotéka pokryje koupi. Kdyby klient chtěl čerpat obojí najednou na zálohu developera, banky by se rozcházely v podmínkách — řešením je posunout čerpání SS o čtvrt roku.",
      ],
    },
    {
      h2: "Dotace a veřejné programy",
      paragraphs: [
        "Dotace mění rozpočet a někdy vyžadují dokladování faktur — banka chce vidět, že nedochází ke konfliktu účelu úvěru. Ověřte, zda program vyžaduje zápis věcného břemene nebo zástavu ve prospěch státu.",
        "Některé programy vyplácejí peníze až zpětně po kontrole; úvěrová smlouva pak musí počítat s tím, že část nákladů nejdřív zaplatíte vy nebo úvěr, a dotace sníží skutečné zadlužení až dodatečně.",
        "Příklad: Dotace na zateplení 180 000 Kč, ale výplata až po revizi. Banka schválí úvěr 420 000 Kč na stavební práce s tím, že po připsání dotace klient provede mimořádnou splátku 150 000 Kč do 30 dnů — tak se nepřečerpává rozpočet oproti fakturám a zůstane rezerva na neočekané položky.",
      ],
    },
    {
      h2: "Časová synchronizace",
      paragraphs: [
        "Nejčastější chyba je rozjíždění dvou úvěrů bez plánu vkladu do katastru — výsledkem je prodleva mezi uvolněním peněz a splatností vůči prodávajícímu. Makléř často drží harmonogram mezi bankou, právníkem a katastrem.",
        "Escrow nebo advokátní úschova snižuje riziko, že prodávající nedostane peníze včas, nebo že kupující zaplatí dřív, než je jisté vlastnictví. Každá strana musí vědět přesný den podání návrhu na vklad a kdy banka uvolní tranši.",
        "Příklad: Hypotéka z banky A a překlenovací úvěr ze stavební spořitelny B. Právník naplánuje: den 1 podpis kupní smlouvy, den 2 podání návrhu na vklad, den 5 vklad práva pro kupujícího, den 6 čerpání hypotéky na účet úschovy, den 10 zahájení rekonstrukce a první tranše ze SS proti faktuře. Kdyby SS chtěla čerpat před vkladem vlastnického práva, banka A by čerpání zablokovala — harmonogram se musí přepsat.",
      ],
    },
  ],
  takeaways: [
    "Každý zdroj má svá pravidla čerpání.",
    "Dotace mění dokumentační nárok.",
    "Harmonogram je stejně důležitý jako sazba.",
  ],
};

export const podnikatelskyUverZastavaNemovitosti: EducationArticle = {
  slug: "podnikatelsky-uver-zastava-nemovitosti",
  title: "Podnikatelský úvěr zajištěný nemovitostí (ne retailová hypotéka)",
  description:
    "Rozdíl oproti spotřebitelské hypotéce na bydlení: posouzení firmy, zajištění, sazby a regulatorní rámec.",
  category: "Podnikání a alternativy",
  updatedAt: U,
  relatedSlugs: [
    "hypoteka-na-bydleni-zaklady",
    "leasing-nemovitosti",
    "dti-ltv-stres-testy-a-cnb",
    "zastavni-pravo-katastr-a-vic-zajisteni",
  ],
  sections: [
    {
      h2: "Proč to není „hypotéka na bydlení“",
      paragraphs: [
        "Účel je obchodní — pracovní kapitál, investice do provozu, refinancování podnikatelských závazků. Posouzení jde přes cash-flow firmy, účetní závěrky, někdy projekce. Ochrana spotřebitele zde často neplatí stejně jako u úvěru na bydlení pro fyzickou osobu.",
        "Banka sleduje schopnost firmy generovat volné cash-flow po úrocích, daních a reinvesticích. Silný majetek na katastru sám o sobě nevykompenzuje chronický propad v provozu — zástava je pojistka pro banku, ne důvod ignorovat výsledovku.",
        "Příklad: Živnostník s e-shopem chce 2,5 mil. Kč na nákup skladových zásob, nabízí zástavní právo k rodinnému domu v hodnotě 6 mil. Kč. Banka ale vidí v účetnictví klesající marži a krátkodobé závazky vůči dodavatelům — schválí jen 1,2 mil. Kč s měsíční kontrolou obratu, dokud firma neukáže dva čtvrtletní stabilní výsledky. Řešením je doplnit vlastní vklad, zkrátit splatnost dodavatelských faktur nebo přistoupit k zástavě i na pohledávky z faktur.",
      ],
    },
    {
      h2: "Zajištění nemovitostí",
      paragraphs: [
        "Banka může požadovat zástav na nemovitosti vlastní nebo třetí osoby, zástav na pohledávky nebo kombinaci. Oceňování je konzervativnější než u čistě obytného účelu — čtěte loan-to-value z pohledu podnikatelského úvěru.",
        "U zástavy třetí osoby (např. rodiče) banka řeší nejen souhlas, ale i scénář, co se stane při selhání firmy — často vyžaduje spoludlužnictví nebo ručitelské prohlášení s právním posouzením.",
        "Příklad: Podnikatelský úvěr 3 mil. Kč na vybavení provozovny, zástava na komerčním bytě. Odhad banky: tržní cena 4,2 mil. Kč, úvěrová hodnota 3,2 mil. Kč (diskont). LTV tedy cca 94 % z úvěrové hodnoty — banka požádá o doplnění zástavy na pohledávky z leasingu nebo sníží částku na 2,4 mil. Kč. Klient buď přidá druhou nemovitost, nebo vezme menší úvěr a zbytek dofinancuje vlastními penězi.",
      ],
    },
    {
      h2: "Daň a účetnictví",
      paragraphs: [
        "Úroky a poplatky se promítají do nákladů firmy dle účetních pravidel — individuálně s účetním. Slabý výsledek hospodaření snižuje šanci na schválení i přes silnou zástavu.",
        "Rozdíl mezi úrokem z úvěru na pořízení dlouhodobého majetku a krátkodobým provozním úvěrem se účetně i daňově liší; špatné zařazení může zkreslit výkaz, který banka čte při obnově limitu.",
        "Příklad: S.r.o. si úrok z podnikatelského úvěru účtuje jako náklad, což sníží zdanitelný základ. Daňový poradce ale upozorní, že část úroků může být podle poměru účelu neuznatelná, pokud se úvěr částečně použil na soukromé vklady majitele — před schůzkou s bankou sjednotí výkaz a vysvětlí jednorázové položky, aby kreditní analytik neviděl „červené“ čtvrtletí bez kontextu.",
      ],
    },
  ],
  takeaways: [
    "Obchodní účel = jiné posouzení než retail.",
    "Zástava neznamená automatické ano.",
    "Cash-flow firmy je klíč.",
  ],
};

export const leasingNemovitosti: EducationArticle = {
  slug: "leasing-nemovitosti",
  title: "Leasing nemovitosti: kdy dává smysl oproti koupi s hypotékou",
  description:
    "Stručně k obchodnímu leasingu nemovitých věcí — uživatelé, daňová stránka a rozdíl vůči vlastnictví.",
  category: "Podnikání a alternativy",
  updatedAt: U,
  relatedSlugs: [
    "podnikatelsky-uver-zastava-nemovitosti",
    "koupe-darovani-dedictvi-financovani",
    "hypoteka-na-bydleni-zaklady",
  ],
  sections: [
    {
      h2: "Základní logika",
      paragraphs: [
        "Leasing přenáší užívání věci bez okamžitého převodu vlastnictví na nájemce — u nemovitostí jde spíše o obchodní vztahy (kanceláře, provozovny). Pro domácnosti je častější koupě s hypotékou.",
        "Pro vlastníka (lessora) zůstává nemovitost v bilanci; nájemce nečerpá vlastnické výhody jako u koupě (např. růst ceny aktiv přímo jemu), ale platí fixní splátky a má předvídatelné náklady na provoz.",
        "Příklad: Firma otevírá pobočku v menším městě a nechce vázat kapitál v koupi budovy za 8 mil. Kč. Leasing na 10 let s měsíční splátkou 72 000 Kč + služby jí uvolní cash na marketing. Po 10 letech smlouva stanoví odkup za 15 % zůstatkové hodnoty. Porovnání s hypotékou: nižší počáteční tlak na vlastní kapitál, ale vyšší celkové náklady, pokud by odkup nebyl strategicky výhodný — rozhodnutí dělá CFO s tabulkou NPV.",
      ],
    },
    {
      h2: "Daň a účetnictví",
      paragraphs: [
        "U podnikatelů může leasing ovlivnit nákladovost a DPH podle struktury smlouvy — nutná součinnost s účetním. Na konci leasingu bývá odkupní právo nebo povinnost — čtěte odkupní cenu a podmínky převodu do vlastnictví.",
        "Finanční leasing vs. operativní leasing se liší v tom, kdo nese opravy a technické riziko; u nemovitosti to často znamená, kdo platí střechu, kotel nebo rekonstrukci při změně předpisů.",
        "Příklad: Operativní leasing kanceláří s DPH — nájemce si účtuje splátky jako náklad. Po pěti letech chce odkoupit prostory, ale odkupní cena je navázána na tržní odhad ke dni ukončení. Když trh vzrostl, odkup je dražší než původní plán; firma vyjedná prodloužení nájmu místo odkupu nebo přejde do nového sídla. Bez čtení smlouvy by management podcenil skryté náklady na přestěhování.",
      ],
    },
  ],
  takeaways: [
    "Leasing nemovitosti je spíše B2B nástroj.",
    "Odkup a DPH řešte předem.",
    "Domácnosti typicky volí koupi.",
  ],
};
