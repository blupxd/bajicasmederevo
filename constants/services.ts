// The service pages (/usluge/<slug>): copy, search metadata, photographs and the gallery projects
// whose photographs each page shows. Every photograph is the client's own (public/gallery).
import { G, H, type Photo } from "./index";

export type Service = {
  slug: string;
  name: string; // short name: nav, footer, cards
  short: string; // one line under the name in the nav panel
  footerName: string; // the footer's link: worded apart from the nav's, so no anchor text repeats
  title: string; // the h1
  metaTitle: string; // under 60 characters, the brand included
  metaDescription: string; // at most ~135 characters: Google cuts the snippet at about 1000px
  keywords: string[];
  lead: string;
  about: { title: string; paragraphs: string[] };
  scope: { name: string; text: string }[];
  // gallery folders, as public/gallery/<group>/<project>
  projects: { group: string; project: string; name: string }[];
  hero: Photo;
  aboutPhoto: Photo;
  navPhoto: Photo;
  faq: { q: string; a: string }[];
};

const HG = "Restauracija i Očuvanje Kulturnog Nasleđa";
const GG = "Građevinski Radovi za Industrijske i Poslovne Prostore";

// Asked on every page, answered the same way
const visitFaq = [
  {
    q: "Kako izgleda saradnja od upita do početka radova?",
    a: "Pošaljete upit ili nas pozovete, dolazimo na obilazak objekta i procenjujemo stanje. Zatim dobijate pisanu ponudu sa opisom radova, materijalima i rokovima, a radove izvodi naš tim.",
  },
  {
    q: "Da li radite van Smedereva?",
    a: "Da. Sedište nam je u Smederevu, a radove izvodimo širom Srbije, za privatne investitore, firme i javne ustanove.",
  },
];

export const services: Service[] = [
  {
    slug: "restauracija-fasada-i-kulturnog-nasledja",
    name: "Restauracija nasleđa",
    short: "Fasade, kamen, statika",
    footerName: "Restauracija fasada",
    title: "Restauracija fasada i kulturnog nasleđa",
    metaTitle: "Restauracija fasada i spomenika kulture | Bajica Smederevo",
    metaDescription:
      "Restauracija fasada, crkava i tvrđava tradicionalnim tehnikama. Radili smo na Smederevskoj tvrđavi i Hramu Svetog Đorđa.",
    keywords: [
      "restauracija fasade",
      "sanacija fasade",
      "restauracija spomenika kulture",
      "statička sanacija",
      "sanacija zvonika",
      "Smederevo",
    ],
    lead:
      "Obnavljamo crkve, kapele, tvrđave i stare javne zgrade, tako da objekat zadrži izvorni izgled, a konstrukcija postane trajno stabilna.",
    about: {
      title: "Obnova koja poštuje izvorni izgled objekta",
      paragraphs: [
        "Stare fasade i istorijski zidovi traže drugačiji pristup od novogradnje. Pre početka radova procenjujemo stanje maltera, kamena, opeke i konstrukcije, a zatim biramo materijale i tehnike koji odgovaraju vremenu u kom je objekat nastao.",
        "Radili smo na Kuli 9 Smederevske tvrđave, na fasadi i zvoniku Hrama Svetog Đorđa, na kapeli Dine Mančića i na fasadi Gimnazije u Smederevu. Na zaštićenim objektima radove izvodimo prema projektu i uslovima koje odobrava nadležni zavod za zaštitu spomenika.",
      ],
    },
    scope: [
      { name: "Sanacija i restauracija fasada", text: "Uklanjamo oštećen malter, obnavljamo površinu fasade i štitimo je od vlage." },
      { name: "Profilacije, venci i ornamenti", text: "Obnavljamo i ponovo izrađujemo dekorativne elemente prema postojećim i sačuvanim detaljima." },
      { name: "Statička sanacija", text: "Ojačavamo zvonike, svodove i noseće zidove, kao na Hramu Svetog Đorđa u Smederevu." },
      { name: "Zidovi od kamena i opeke", text: "Prezidavamo i fugujemo istorijske zidove, kao na Kuli 9 Smederevske tvrđave." },
      { name: "Kapele i sakralni objekti", text: "Kompletna obnova, od krova do fasade, kao na kapeli Dine Mančića." },
      { name: "Fasade stambenih i javnih zgrada", text: "Sanacija fasada starih gradskih zgrada i škola, kao u ulici Kralja Petra i na Gimnaziji." },
    ],
    projects: [
      { group: HG, project: "Smederevska tvrđava - sanacija Tvrđava Kula 9", name: "Smederevska tvrđava, Kula 9" },
      { group: HG, project: "Hram Svetog Đorđa - sanacija fasade", name: "Hram Svetog Đorđa, fasada" },
      { group: HG, project: "Hram Svetog Đorđa - statička sanacija zvonika", name: "Hram Svetog Đorđa, zvonik" },
      { group: HG, project: "Kapela Dine Mančića - sanacija", name: "Kapela Dine Mančića" },
      { group: HG, project: "Gimnazija Smederevo - sanacija fasade", name: "Gimnazija Smederevo" },
      { group: HG, project: "Sanacija fasade Kralja Petra", name: "Fasada u ulici Kralja Petra" },
    ],
    hero: {
      src: `${H}/Smederevska tvrđava - sanacija Tvrđava Kula 9/SAJT 2.webp`,
      alt: "Radnici na skeli uz kamene zidove Kule 9 Smederevske tvrđave",
      pos: "55% 50%",
    },
    aboutPhoto: {
      src: `${H}/Kapela Dine Mančića - sanacija/KAPELA 2.webp`,
      alt: "Obnovljena kapela Dine Mančića sa žutom fasadom i bakarnom kupolom",
      pos: "50% 45%",
    },
    navPhoto: { src: `${H}/Hram Svetog Đorđa - sanacija fasade/SAJT 2.webp`, alt: "Zvonik Hrama Svetog Đorđa pod skelom" },
    faq: [
      {
        q: "Da li radite na objektima koji su spomenici kulture?",
        a: "Da. Radili smo na Smederevskoj tvrđavi i Hramu Svetog Đorđa. Na zaštićenim objektima radove izvodimo prema projektu i uslovima nadležnog zavoda za zaštitu spomenika.",
      },
      {
        q: "Koliko traje restauracija fasade?",
        a: "Zavisi od veličine objekta, stanja fasade i obima radova. Rok dobijate u pisanoj ponudi, posle obilaska objekta.",
      },
      ...visitFaq,
    ],
  },
  {
    slug: "teraco-i-mermerni-podovi",
    name: "Teraco i mermer",
    short: "Podovi i stepeništa",
    footerName: "Teraco i mermerni podovi",
    title: "Teraco i mermerni podovi: izrada i obnova",
    metaTitle: "Teraco i mermerni podovi: izrada i obnova | Bajica Smederevo",
    metaDescription:
      "Liveni teraco po meri, brušenje i poliranje starih teraco i mermernih podova i stepeništa. Porodična firma iz Smedereva.",
    keywords: ["teraco pod", "liveni teraco", "poliranje teraca", "restauracija mermera", "brušenje mermera", "teraco stepenište"],
    lead:
      "Izrađujemo nove teraco podove po meri i vraćamo sjaj starim teraco i mermernim podovima i stepeništima, u lokalima, poslovnim zgradama i javnim objektima.",
    about: {
      title: "Podovi koji traju decenijama",
      paragraphs: [
        "Teraco i mermer su među najtrajnijim podnim oblogama, ali vremenom gube sjaj, pucaju i troše se na mestima gde se najviše hoda. Obnova brušenjem, kitovanjem i poliranjem vraća im prvobitni izgled, bez zamene poda.",
        "Novi liveni teraco radimo po meri prostora, u boji i granulaciji koju izaberete. Izradili smo teraco pod u Buda baru, obnovili teraco stepenište u Kalemegdan business centru, sanirali teraco pod u Bio Filu i mermerne površine Centra za kulturu Smederevo.",
      ],
    },
    scope: [
      { name: "Liveni teraco po meri", text: "Nov teraco pod u boji i granulaciji po izboru, za lokale, hotele i poslovne prostore." },
      { name: "Brušenje i poliranje teraca", text: "Stari teraco podovi i stepeništa dobijaju ujednačenu površinu i prvobitni sjaj." },
      { name: "Restauracija teraco stepeništa", text: "Popravka oštećenih ivica i gazišta, kao u Kalemegdan business centru." },
      { name: "Restauracija mermera", text: "Brušenje, kitovanje i poliranje mermera, kao u Centru za kulturu Smederevo." },
      { name: "Sanacija pukotina i oštećenja", text: "Popunjavamo pukotine i udarna oštećenja tako da se popravka ne vidi." },
      { name: "Završna zaštita površine", text: "Pod predajemo zaštićen i spreman za svakodnevno korišćenje i održavanje." },
    ],
    projects: [
      { group: GG, project: "Buda bar - izrada teraco poda", name: "Buda bar, izrada teraco poda" },
      { group: GG, project: "Kalemegdan business centar - restauracija teraco stepeništa", name: "Kalemegdan business centar, teraco stepenište" },
      { group: GG, project: "Bio Fil - sanacija teraco poda", name: "Bio Fil, sanacija teraco poda" },
      { group: GG, project: "Centar za kulturu Smederevo - sanacija mermernih površina", name: "Centar za kulturu Smederevo, mermer" },
    ],
    hero: {
      src: `${G}/Bio Fil - sanacija teraco poda/SAJT 3.webp`,
      alt: "Ispoliran teraco pod u proizvodnoj hali Bio Fila",
    },
    aboutPhoto: {
      src: `${G}/Buda bar - izrada teraco poda/SAJT 1.webp`,
      alt: "Novi teraco pod u Buda baru sa crvenim sofama",
    },
    navPhoto: { src: `${G}/Buda bar - izrada teraco poda/SAJT 2.webp`, alt: "Majstor polira teraco pod mašinom" },
    faq: [
      {
        q: "Da li se star teraco pod može obnoviti bez zamene?",
        a: "U većini slučajeva da. Brušenjem, kitovanjem pukotina i poliranjem teraco dobija ujednačenu površinu i sjaj. Na obilasku procenjujemo da li je podloga dovoljno zdrava za obnovu.",
      },
      {
        q: "Radite li i teraco stepeništa?",
        a: "Da. Obnovili smo teraco stepenište u Kalemegdan business centru, sa popravkom oštećenih ivica i gazišta.",
      },
      ...visitFaq,
    ],
  },
  {
    slug: "epoxy-podovi",
    name: "Epoxy podovi",
    short: "Hale, magacini, radionice",
    footerName: "Epoxy podovi za hale",
    title: "Epoxy podovi za hale, magacine i radionice",
    metaTitle: "Epoxy podovi za hale i magacine | Bajica Smederevo",
    metaDescription:
      "Bešavni epoxy podovi otporni na habanje i hemikalije za hale, magacine i radionice, sa signalizacijom. Smederevo i Srbija.",
    keywords: ["epoxy pod", "epoksidni pod", "industrijski pod", "epoxy pod cena", "sanacija epoxy poda", "pod za halu"],
    lead:
      "Izlivamo bešavne epoxy podove otporne na habanje i hemikalije i saniramo postojeće, za proizvodne hale, magacine i radionice.",
    about: {
      title: "Pod koji izdržava viljuškare, ulje i čišćenje",
      paragraphs: [
        "Epoxy pod je bešavan, lako se čisti i ne upija ulje ni hemikalije, pa je čest izbor za proizvodne pogone, magacine, garaže i radionice. Njegova trajnost zavisi od pripreme: podlogu brusimo, čistimo i saniramo pre nanošenja premaza.",
        "Pre ponude procenjujemo betonsku podlogu i opterećenje kome će pod biti izložen, pa predlažemo sistem koji mu odgovara. Za Meteh smo sanirali industrijski pod i iscrtali novu signalizaciju.",
      ],
    },
    scope: [
      { name: "Priprema betonske podloge", text: "Brušenje, čišćenje i sanacija pukotina pre nanošenja premaza." },
      { name: "Novi epoxy podovi", text: "Bešavni podovi za proizvodne hale, magacine, garaže i radionice." },
      { name: "Sanacija postojećih podova", text: "Obnova istrošenih i oštećenih epoxy i betonskih podova." },
      { name: "Signalizacija i obeležavanje", text: "Iscrtavanje staza, zona i oznaka, kao u hali Meteha." },
      { name: "Otpornost na habanje i hemikalije", text: "Sistem biramo prema opterećenju, saobraćaju i sredstvima za čišćenje." },
    ],
    projects: [
      { group: GG, project: "Izrada Epoxy poda", name: "Izrada epoxy poda" },
      { group: GG, project: "Meteh - Epoxy sanacija poda", name: "Meteh, epoxy sanacija poda" },
    ],
    hero: {
      src: `${G}/Izrada Epoxy poda/2.webp`,
      alt: "Majstor nanosi epoxy premaz na betonsku podlogu",
    },
    aboutPhoto: {
      src: `${G}/Izrada Epoxy poda/3.webp`,
      alt: "Završen svetlosivi epoxy pod u radionici",
    },
    navPhoto: { src: `${G}/Izrada Epoxy poda/1.webp`, alt: "Brušenje betonske podloge pre nanošenja epoxy premaza" },
    faq: [
      {
        q: "Gde se najčešće postavlja epoxy pod?",
        a: "U proizvodnim halama, magacinima, garažama, radionicama i drugim prostorima gde pod mora da podnese saobraćaj, ulje i česta pranja.",
      },
      {
        q: "Da li se epoxy može naneti na stari beton?",
        a: "Najčešće može, ako je podloga dovoljno čvrsta. Beton brusimo i saniramo pukotine pre nanošenja. Stanje podloge procenjujemo na obilasku.",
      },
      ...visitFaq,
    ],
  },
  {
    slug: "sanacija-industrijskih-objekata",
    name: "Industrijski objekti",
    short: "Beton, bazeni, hale",
    footerName: "Industrijske sanacije",
    title: "Sanacija industrijskih objekata",
    metaTitle: "Sanacija industrijskih objekata | Bajica Smederevo",
    metaDescription:
      "Sanacija betona, bazena i industrijskih podova u pogonima koji ne smeju dugo da stoje. Radili smo za Železaru Smederevo i Meteh.",
    keywords: ["sanacija betona", "sanacija industrijskih objekata", "sanacija bazena", "industrijski podovi", "Železara Smederevo"],
    lead:
      "Saniramo betonske konstrukcije, bazene i podove u pogonima koji ne smeju dugo da stoje, uz plan radova usklađen sa proizvodnjom.",
    about: {
      title: "Radovi u pogonima koji rade",
      paragraphs: [
        "U industrijskom objektu svaki dan zastoja košta. Zato radove planiramo zajedno sa investitorom: po fazama, po zonama ili u terminima kada pogon miruje, tako da proizvodnja stoji što kraće.",
        "Sanaciju industrijskih objekata radili smo za Železaru Smederevo, gde smo obnovili bazen otpadnih voda, za Meteh, gde smo sanirali industrijski epoxy pod i iscrtali novu signalizaciju, i za Bio Fil, gde smo obnovili teraco pod u proizvodnom delu.",
      ],
    },
    scope: [
      { name: "Sanacija betonskih konstrukcija", text: "Popravka oštećenog betona, zidova i nosećih elemenata u pogonima." },
      { name: "Bazeni i rezervoari", text: "Sanacija i zaštita bazena, kao bazen otpadnih voda u Železari Smederevo." },
      { name: "Industrijski podovi", text: "Epoxy i teraco podovi za proizvodne prostore, kao u Metehu i Bio Filu." },
      { name: "Signalizacija u halama", text: "Obeležavanje staza, zona i radnih mesta na podu." },
      { name: "Plan radova bez dugog zastoja", text: "Radovi po fazama i zonama, usklađeni sa radom pogona." },
    ],
    projects: [
      { group: GG, project: "Železara Smederevo - sanacija bazena otpadnih voda", name: "Železara Smederevo, bazen otpadnih voda" },
      { group: GG, project: "Meteh - Epoxy sanacija poda", name: "Meteh, industrijski pod" },
      { group: GG, project: "Bio Fil - sanacija teraco poda", name: "Bio Fil, teraco pod u pogonu" },
    ],
    hero: {
      src: `${G}/Železara Smederevo - sanacija bazena otpadnih voda/SDC13703.webp`,
      alt: "Radnici premazuju zid bazena otpadnih voda u Železari Smederevo",
    },
    aboutPhoto: {
      src: `${G}/Železara Smederevo - sanacija bazena otpadnih voda/SDC13655.webp`,
      alt: "Sanacija bazena otpadnih voda u Železari Smederevo",
    },
    navPhoto: { src: `${G}/Meteh - Epoxy sanacija poda/IMG_5084.webp`, alt: "Majstor iscrtava žutu signalizaciju na epoxy podu u hali Meteha" },
    faq: [
      {
        q: "Da li morate da zaustavite proizvodnju dok radite?",
        a: "Ne nužno. Radove delimo po fazama i zonama ili ih planiramo u terminima kada pogon miruje, kako bi zastoj bio što kraći.",
      },
      {
        q: "Za koje firme ste radili?",
        a: "Između ostalih za Železaru Smederevo, Meteh i Bio Fil. Fotografije sa ovih gradilišta su u galeriji.",
      },
      ...visitFaq,
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const serviceHref = (s: Service) => `/usluge/${s.slug}`;
