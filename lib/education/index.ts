import type { EducationArticle } from "./types";
import { americkaHypoteka } from "./articles/americka-hypoteka";
import { bezUcelu } from "./articles/bez-ucelu";
import {
  hypotekaNaBydleniZaklady,
  investicniNemovitostAHypoteka,
  rekreacniVsPrimarniBydleni,
} from "./articles/bydleni-a-produkty";
import { cizinciHypotekaVcr } from "./articles/cizinci-hypoteka-v-cr";
import { dtiLtvCnb } from "./articles/dti-ltv-cnb";
import {
  cizomenaHypotekaKurzoveRiziko,
  refinancovaniAKonsolidace,
  zeleneUveryEnergetickaObnova,
} from "./articles/mezinarodni-zelene-refin";
import {
  kombinaceZdrojuFinancovani,
  leasingNemovitosti,
  podnikatelskyUverZastavaNemovitosti,
} from "./articles/podnikani-leasing-kombinace";
import {
  daneNabytiPrenajemOrientace,
  koupeDarovaniDedictviFinancovani,
  zastavniPravoKatastrAVicZajisteni,
} from "./articles/pravo-a-dan";
import { prubehZadosti } from "./articles/prubeh-zadosti";
import { refinancovani } from "./articles/refinancovani";
import {
  crossBorderPrijemRezidenceCrs,
  euVsTretiZemeDetail,
  smlouvyJazykNotarTlumocnik,
  spoludluzniciManzeleBsm,
} from "./articles/rodina-a-cizinci-praxe";
import {
  developerskeABridgeFinancovani,
  druzstevniBytNajemSpv,
  hypotekaNaPuduALes,
} from "./articles/segmenty-special";
import { stavebniSporeniAPreklenovaci, uverZeStavebnihoSporeniVsHypoteka } from "./articles/stavebni-sporeni-skupina";
import { ucelovaHypoteka } from "./articles/ucelova-hypoteka";

const list: EducationArticle[] = [
  cizinciHypotekaVcr,
  euVsTretiZemeDetail,
  crossBorderPrijemRezidenceCrs,
  smlouvyJazykNotarTlumocnik,
  prubehZadosti,
  ucelovaHypoteka,
  americkaHypoteka,
  bezUcelu,
  refinancovani,
  refinancovaniAKonsolidace,
  dtiLtvCnb,
  hypotekaNaBydleniZaklady,
  rekreacniVsPrimarniBydleni,
  investicniNemovitostAHypoteka,
  stavebniSporeniAPreklenovaci,
  uverZeStavebnihoSporeniVsHypoteka,
  kombinaceZdrojuFinancovani,
  podnikatelskyUverZastavaNemovitosti,
  leasingNemovitosti,
  developerskeABridgeFinancovani,
  druzstevniBytNajemSpv,
  hypotekaNaPuduALes,
  cizomenaHypotekaKurzoveRiziko,
  zeleneUveryEnergetickaObnova,
  zastavniPravoKatastrAVicZajisteni,
  daneNabytiPrenajemOrientace,
  koupeDarovaniDedictviFinancovani,
  spoludluzniciManzeleBsm,
];

export const educationArticleSlugs = list.map((a) => a.slug);

const bySlug: Record<string, EducationArticle> = {};
for (const a of list) {
  bySlug[a.slug] = a;
}

export function getEducationArticle(slug: string): EducationArticle | undefined {
  return bySlug[slug];
}

export function listEducationArticles(): EducationArticle[] {
  return list;
}
