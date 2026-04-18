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
        "Státní podpora a poplatky za vedení účtu mění čistý výnos spoření; pro plán financování je užitečné spočítat, kdy se vyplatí překlenutí oproti čekání na přidělení bez meziúvěru.",
        "Příklad: Rodina šetří na přestavbu koupelny 450 000 Kč. Naspoří 180 000 Kč za 4 roky a má nárok na přidělení za 8 měsíců. Překlenovací úvěr 300 000 Kč na 2 roky jim umožní začít stavbu hned; po přidělení část refinancují levnějším úvěrem ze stavebního spoření a zbytek doplatí z naspořeného. Kdyby čekali bez překlenutí, riskovali by zdražení materiálu a pronájem jiného bytu o 9 000 Kč měsíčně — v tabulce vyjde překlenutí levnější než odklad.",
      ],
    },
    {
      h2: "Meziúvěr vs. překlenovací úvěr",
      paragraphs: [
        "Terminologie se u poskytovatelů liší — důležité je číst smlouvu: výše, čerpání po etapách, zajištění, poplatky za předčasné ukončení a co se stane, když se zpozdí výstavba. U výstavby často souběžně řešíte čerpání u banky i u stavební spořitelny.",
        "Pozor na sankce při předčasném splacení nebo změně dodavatele — některé smlouvy vážou úrok na původní harmonogram prací.",
        "Příklad: Překlenovací úvěr má splátku jen z úroků prvních 12 měsíců, poté anuita. Stavba se zpozdí o 4 měsíce kvůli dodavateli. Klient musí požádat o prodloužení čerpací fáze a upravit rozpočet; stavební spořitelna vystaví dodatek. Bez včasného hlášení by nastoupila sankční sazba z prodlení podle smlouvy — proto stavební dozor měsíčně hlásí stav prací koordinátorovi u věřitele.",
      ],
    },
    {
      h2: "Kombinace s bankou",
      paragraphs: [
        "Častý scénář: část rozpočtu přes stavební spoření (levnější část po přidělení) a část přes hypotéku podle LTV. Koordinace čerpání a zápisů v katastru je kritická — detail v článku o kombinaci zdrojů.",
        "Hypotéka často pokrývá koupi nemovitosti, zatímco stavební spoření rekonstrukci — ale oba věřitelé musí vědět o sobě, aby nedošlo k překročení celkového zadlužení vůči hodnotě zástavy.",
        "Příklad: Banka poskytne hypotéku 3,2 mil. Kč na koupi domu se zástavou. Stavební spořitelna navíc 600 000 Kč na nový kotel a zateplení se zástavou II. pořadí. Právník vyjedná souhlas banky s II. pořadím do výše 600 000 Kč. Čerpání SS jde až po zápisu II. zástavy; mezitím hypotéka už proběhla. Kdyby klient čerpal SS dřív bez souhlasu banky, porušil by podmínky hypotéky.",
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
        "Úvěr ze stavebního spoření bývá omezený výší cílové částky a pravidly čerpání — ne vždy pokryje celou kupní cenu v Praze.",
        "Příklad: Klient má naspořeno 350 000 Kč a přidělený úvěr ze stavebního spoření 550 000 Kč na 20 let s fixní sazbou podle smlouvy. Chce koupit byt za 5,1 mil. Kč — stavební úvěr nestačí. Kombinuje: hypotéka 4,0 mil. Kč + úvěr ze SS 550 000 Kč na rekonstrukci po koupi. Po dokončení rekonstrukce zvažuje mimořádnou splátku dražší části (hypotéka), až klesne sankční období fixace.",
      ],
    },
    {
      h2: "Bankovní hypotéka",
      paragraphs: [
        "Banka umí rychle financovat kupní cenu celé nemovitosti při splnění LTV a příjmových testů — výhoda je rychlost a vysoké částky, nevýhoda je citlivost na tržní sazby a přísnější dokumentace u složitějších příjmů.",
        "Refinancování hypotéky po fixaci je běžné; u úvěru ze stavebního spoření záleží na produktu, zda a za jakých poplatků jde o stejnou flexibilitu.",
        "Příklad: Stejná částka 800 000 Kč na novou kuchyň — nabídka banky s 5letou fixací vs. úvěr ze SS po přidělení. Banka má rychlejší čerpání do 3 týdnů, SS lepší celkové náklady, ale čerpání až za 6 měsíců. Rodina potřebuje kuchyň před Vánoci → zvolí banku a za 2 roky část refinancuje přes SS, až bude přidělení hotové. Makléř spočítá breakpoint, kdy se vyplatí překlenout dvojí administrativu.",
      ],
    },
    {
      h2: "Rozhodovací checklist",
      paragraphs: [
        "Zjistěte celkové RPSN obou variant včetně pojistných produktů, délku fixace, poplatky za správu a možnost mimořádných splátek. U výstavby často vyhraje kombinace, ne čistě jedna cesta.",
        "Ověřte, zda potřebujete peníze jednorázově (koupě) nebo po etapách (stavba) — to často rozhodne více než rozdíl o desetinu procenta na sazbě.",
        "Příklad: Checklist pro pár: (1) kdy potřebujeme první tranši, (2) maximální měsíční splátka ve stresu, (3) poplatek za správu a pojištění nemovitosti, (4) cena předčasného splacení během fixace, (5) nutnost souhlasu druhého věřitele. Po vyplnění zjistí, že jejich priorita je nízká splátka prvních 24 měsíců — vyhraje hypotéka s delší splatností a menší splátkou, zatímco SS použijí jen na menší doplňkový úvěr.",
      ],
    },
  ],
  takeaways: [
    "Stavební spoření = disciplína a časová osa.",
    "Hypotéka = rychlost a velké částky.",
    "Porovnávejte RPSN a podmínky čerpání.",
  ],
};
