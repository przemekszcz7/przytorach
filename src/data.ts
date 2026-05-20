import { MenuItem, GalleryImage } from './types';

export const EVERYDAY_MENU: MenuItem[] = [
  {
    name: "Kotlet schabowy",
    description: "Złocisty, chrupiący klasyk polskiego stołu, tradycyjnie rozbity, sypany miłością.",
    isEveryday: true,
    tag: "Klasyk",
    price: "24 zł"
  },
  {
    name: "Kotlet z piersi kurczaka",
    description: "Delikatna pierś kurczaka w tradycyjnej złocistej panierce, soczysta w środku.",
    isEveryday: true,
    tag: "Klasyk",
    price: "22 zł"
  },
  {
    name: "Kotlet w ziołach",
    description: "Aromatyczna kompozycja ziół ogrodowych otulająca kruchą pierś drobiową.",
    isEveryday: true,
    tag: "Polecamy",
    price: "23 zł"
  },
  {
    name: "Kotlety mielone",
    description: "Domowe kotlety wieprzowe z dodatkiem podsmażanej cebulki, puszyste i soczyste.",
    isEveryday: true,
    tag: "Klasyk",
    price: "20 zł"
  },
  {
    name: "Kotlet devolay",
    description: "Najprawdziwszy De Volaille z chłodnym masłem i koperkiem, które apetycznie wypływa po przekrojeniu.",
    isEveryday: true,
    tag: "Polecamy",
    price: "25 zł"
  },
  {
    name: "Mintaj panierowany",
    description: "Chrupiący, delikatny filet z mintaja w złocistej panierce, skrapiany świeżą cytryną.",
    isEveryday: true,
    tag: "Klasyk",
    price: "21 zł"
  },
  {
    name: "Polędwiczki panierowane (ostre)",
    description: "Chrupiące kęski z polędwiczek z piersi kurczaka w pikantnej, wyrazistej autorskiej panierce.",
    isEveryday: true,
    tag: "Ostre",
    price: "19 zł"
  },
  {
    name: "Polędwiczki panierowane (łagodne)",
    description: "Chrupiące, delikatne polędwiczki drobiowe w łagodnej kołderce ze złocistych płatków.",
    isEveryday: true,
    tag: "Łagodne",
    price: "19 zł"
  },
  {
    name: "Flaki z pieczywem",
    description: "Gęste, aromatyczne flaki po warszawsku, sycące i tradycyjnie doprawione majerankiem i imbirem.",
    isEveryday: true,
    tag: "Klasyk",
    price: "18 zł"
  }
];

export const DAILY_SOUP_INFO = "Codziennie w naszej gar kuchni bulgoczą inne, świeżo ugotowane domowe zupy ze świeżych składników!";

export const WEEKLY_SCHEDULE = [
  { day: "Poniedziałek", hours: "10:00 - 17:00", description: "Zupa ogórkowa, Gulasz węgierski" },
  { day: "Wtorek", hours: "10:00 - 17:00", description: "Tradycyjny krupnik, Pulpety w sosie koperkowym" },
  { day: "Środa", hours: "10:00 - 17:00", description: "Zupa pomidorowa z lanym ciastem, Pieczeń rzymska" },
  { day: "Czwartek", hours: "10:00 - 17:00", description: "Domowy rosół, Specjalne Dania Główne zapowiadane rano!" },
  { day: "Piątek", hours: "10:00 - 17:00", description: "Barszcz ukraiński, Miruna panierowana z ziemniakami i surówką" },
  { day: "Sobota", hours: "ZAMKNIĘTE", description: "Zasłużony odpoczynek dla załogi" },
  { day: "Niedziela", hours: "ZAMKNIĘTE", description: "Odpoczywamy przed nowym kolejowym tygodniem" }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: "https://i.ibb.co/Pv13WGh9/87001788-573602603230777-868678206725554176-n.jpg",
    caption: "Nasza słynna, aromatyczna potrawka drobiowa gotowana z pasją",
    category: "jedzenie"
  },
  {
    url: "https://i.ibb.co/pBXZnGTZ/117524423-680519882539048-3566221371212046679-n.jpg",
    caption: "Tradycyjny rozkład kulinarny wypisany kredą na stacyjnej tablicy",
    category: "klimat"
  },
  {
    url: "https://i.ibb.co/hxnNf9W2/153443626-809805156277186-6770655021619933693-n.jpg",
    caption: "Pełen domowy stół u stóp dawnej drogi żelaznej",
    category: "jedzenie"
  },
  {
    url: "https://i.ibb.co/bRCGYf0W/676472486-1497705558809010-4572781576831628569-n.jpg",
    caption: "Tradycyjny schabowy z kapustą zasmażaną prosto z patelni",
    category: "jedzenie"
  },
  {
    url: "https://i.ibb.co/B5071Gkx/674927213-1497705562142343-9014821241832272559-n.jpg",
    caption: "Chrupiące panierki i idealnie chrupkie polędwiczki",
    category: "jedzenie"
  },
  {
    url: "https://i.ibb.co/sdpq5dQC/672694021-1497705735475659-2590423737460295970-n.jpg",
    caption: "Gorący rosół pachnący domowym ogniskiem i lubczykiem",
    category: "klimat"
  }
];

export const TESTIMONIALS = [
  {
    author: "Janusz z Konstancina",
    rating: 5,
    text: "Schabowy jak u mamy! Chrupiąca panierka, mięso mięciutkie. Porcje ogromne, a obsługa niesamowicie serdeczna. Mój ulubiony przystanek obiadowy."
  },
  {
    author: "Karolina W.",
    rating: 5,
    text: "Wspaniałe domowe jedzenie z błyskawiczną dostawą pod drzwi. Rosół gotowany na wielu mięsach, a flaki to absolutne mistrzostwo."
  },
  {
    author: "Marek (Maszynista)",
    rating: 5,
    text: "Prawdziwa kuchnia polska bez grama chemii. W czwartki zjawiam się specjalnie na dania główne, a zupy codziennie zaskakują świeżością!"
  }
];
