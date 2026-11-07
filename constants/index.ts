// All site copy and photo assignments live here. Every photograph is the client's own (public/gallery).
// Each photograph appears once on the home page.

export const H = "/gallery/Restauracija i Očuvanje Kulturnog Nasleđa";
export const G = "/gallery/Građevinski Radovi za Industrijske i Poslovne Prostore";

export const siteUrl = "https://www.bajica.rs";

// The client's two lines, written as the client writes them; the first is the main one
export const phones = [
  { label: "069/164-2093", href: "tel:+381691642093", e164: "+381691642093" },
  { label: "063/24-34-62", href: "tel:+38163243462", e164: "+38163243462" },
];

export const contact = {
  phone: phones[0].label,
  phoneHref: phones[0].href,
  email: "info@bajica.rs",
  town: "Smederevo",
};

export const social = [{ label: "Instagram", href: "https://www.instagram.com/bajicasmederevo/" }];

export const mainAction = { label: "Zatražite ponudu", href: "#upit" };
export const navAction = "Pošaljite upit"; // the bar's button
export const heroAction = "Zakažite obilazak"; // the heroes' button

export type Photo = { src: string; alt: string; pos?: string };

export const hero = {
  // the client's own line and slogan; the eyebrow names the firm and the trade for search engines
  eyebrow: "Bajica Smederevo · građevinska firma",
  title: "Oživljavamo istoriju, gradimo budućnost",
  // the first sentence alone on a phone, both from 640 up
  lead: "Porodična građevinska firma sa tradicijom od tri generacije.",
  leadMore: "Od sanacija i podova do fasada i restauracije objekata: kvalitet, tradicija i pažnja prema detaljima su naš prioritet.",
  facts: [
    { label: "Osnovani", value: "1980-ih" },
    { label: "Završeni projekti", value: "100+" },
    { label: "Područje rada", value: "Cela Srbija" },
  ],
  photo: {
    src: `${H}/Smederevska tvrđava - sanacija Tvrđava Kula 9/SAJT 1.webp`,
    alt: "Ekipa na gradilištu uz bedeme Smederevske tvrđave",
    pos: "50% 45%",
  } as Photo,
};

export const heritage = {
  id: "nasledje",
  label: "Usluga 01",
  title: "Restauracija kulturnog nasleđa",
  lead:
    "Obnavljamo crkve, kapele, tvrđave i stare javne zgrade. Radimo tradicionalnim materijalima i tehnikama, tako da objekat zadrži izvorni izgled, a konstrukcija postane trajno stabilna.",
  rows: [
    {
      name: "Sanacija i restauracija fasada",
      text: "Uklanjamo oštećen malter, obnavljamo profilacije i ornamente i štitimo fasadu od vlage.",
    },
    {
      name: "Statička sanacija",
      text: "Ojačavamo zvonike, svodove i noseće zidove, kao na Hramu Svetog Đorđa u Smederevu.",
    },
    {
      name: "Zidovi od kamena i opeke",
      text: "Prezidavamo i fugujemo istorijske zidove, kao na Kuli 9 Smederevske tvrđave.",
    },
    {
      name: "Kapele i sakralni objekti",
      text: "Kompletna obnova, od krova do fasade, kao na kapeli Dine Mančića.",
    },
  ],
  photo: {
    src: `${H}/Kapela Dine Mančića - sanacija/KAPELA 2.webp`,
    alt: "Obnovljena kapela Dine Mančića sa žutom fasadom i bakarnom kupolom",
    pos: "50% 45%",
  } as Photo,
};

export const floors = {
  id: "podovi",
  label: "Usluga 02",
  title: "Teraco, mermer i epoxy podovi",
  lead:
    "Izrađujemo nove i obnavljamo stare podove u lokalima, poslovnim zgradama i halama. Pre posla procenjujemo podlogu i predlažemo sistem koji odgovara opterećenju i održavanju prostora.",
  tiles: [
    {
      title: "Izrađujemo i obnavljamo teraco",
      text: "Liveni teraco po meri, brušenje i poliranje starih podova i stepeništa, kao u Buda baru.",
      photo: {
        src: `${G}/Buda bar - izrada teraco poda/SAJT 1.webp`,
        alt: "Novi teraco pod u Buda baru sa crvenim sofama",
      } as Photo,
    },
    {
      title: "Restauriramo mermerne površine",
      text: "Brušenje, kitovanje i poliranje mermera do prvobitnog sjaja, kao u Centru za kulturu Smederevo.",
      photo: {
        src: `${G}/Centar za kulturu Smederevo - sanacija mermernih površina/1 (1).webp`,
        alt: "Majstor obnavlja mermerno stepenište ispred Centra za kulturu Smederevo",
      } as Photo,
    },
    {
      title: "Izlivamo epoxy podove",
      text: "Bešavni podovi otporni na habanje i hemikalije, za proizvodne hale, magacine i radionice.",
      photo: {
        src: `${G}/Izrada Epoxy poda/3.webp`,
        alt: "Završen svetlosivi epoxy pod u radionici",
      } as Photo,
    },
  ],
};

export const industry = {
  id: "industrija",
  label: "Usluga 03",
  title: "Sanacija industrijskih objekata",
  lead:
    "Saniramo betonske konstrukcije, bazene i podove u pogonima koji ne smeju dugo da stoje. Za Železaru Smederevo obnovili smo bazen otpadnih voda, a za Meteh industrijski pod sa novom signalizacijom.",
  photos: [
    {
      src: `${G}/Železara Smederevo - sanacija bazena otpadnih voda/SDC13703.webp`,
      alt: "Radnici premazuju zid bazena otpadnih voda u Železari Smederevo",
    },
    {
      src: `${G}/Železara Smederevo - sanacija bazena otpadnih voda/SDC13655.webp`,
      alt: "Sanacija bazena otpadnih voda u Železari Smederevo",
    },
  ] as Photo[],
};

export const projects = {
  id: "projekti",
  title: "Izabrani projekti",
  lead: "Četiri objekta na kojima smo radili poslednjih godina. Sve fotografije su sa naših gradilišta.",
  items: [
    {
      name: "Hram Svetog Đorđa",
      work: "Sanacija fasade i zvonika",
      anchor: "Hram Svetog Đorđa - sanacija fasade",
      photo: { src: `${H}/Hram Svetog Đorđa - sanacija fasade/SAJT 1.webp`, alt: "Hram Svetog Đorđa u Smederevu pod skelom" } as Photo,
    },
    {
      name: "Smederevska tvrđava",
      work: "Sanacija Kule 9",
      anchor: "Smederevska tvrđava - sanacija Tvrđava Kula 9",
      photo: { src: `${H}/Smederevska tvrđava - sanacija Tvrđava Kula 9/SAJT 2.webp`, alt: "Radnici na skeli uz kamene zidove Kule 9", pos: "60% 50%" } as Photo,
    },
    {
      name: "Gimnazija Smederevo",
      work: "Sanacija fasade",
      anchor: "Gimnazija Smederevo - sanacija fasade",
      photo: { src: `${H}/Gimnazija Smederevo - sanacija fasade/IMG_0737.webp`, alt: "Obnovljena fasada zgrade Gimnazije u Smederevu" } as Photo,
    },
    {
      name: "Kalemegdan business centar",
      work: "Restauracija teraco stepeništa",
      anchor: "Kalemegdan business centar - restauracija teraco stepeništa",
      photo: { src: `${G}/Kalemegdan business centar - restauracija teraco stepeništa/2.webp`, alt: "Radnici bruse teraco stepenište u Kalemegdan business centru" } as Photo,
    },
  ],
};

export const steps = {
  id: "postupak",
  title: "Od upita do završenih radova u tri koraka",
  items: [
    {
      title: "Obilazimo objekat",
      text: "Dolazimo na lokaciju, procenjujemo stanje i dogovaramo šta treba uraditi.",
      photo: {
        src: `${H}/Hram Svetog Đorđa - statička sanacija zvonika/IMG_8927 (3).webp`,
        alt: "Tim dogovara radove na gradilištu Hrama Svetog Đorđa",
      } as Photo,
    },
    {
      title: "Šaljemo ponudu i plan",
      text: "Dobijate pisanu ponudu sa opisom radova, materijalima i rokovima.",
      photo: {
        src: `${H}/Gimnazija Smederevo - sanacija fasade/2019_05_29_10_50_IMG_3845.webp`,
        alt: "Majstori na skeli pregledaju venac fasade Gimnazije",
        pos: "50% 30%",
      } as Photo,
    },
    {
      title: "Izvodimo i predajemo radove",
      text: "Radove izvodi naš tim, a objekat predajemo očišćen i spreman za upotrebu.",
      photo: {
        src: `${H}/Sanacija fasade Kralja Petra/SAJT 1.webp`,
        alt: "Obnovljena ružičasta fasada zgrade u ulici Kralja Petra",
      } as Photo,
    },
  ],
};

export const about = {
  id: "o-nama",
  title: "Porodična firma iz Smedereva",
  lead:
    "Posao je u porodici od 1980-ih i danas ga vodi treća generacija. Oživljavamo istoriju na zaštićenim spomenicima kulture i gradimo budućnost na savremenim poslovnim prostorima, sa istom pažnjom prema detaljima.",
  more:
    "Iza nas su radovi na Smederevskoj tvrđavi, Hramu Svetog Đorđa, Gimnaziji i Centru za kulturu Smederevo, ali i u pogonima Železare Smederevo, Meteha i Bio Fila. Tradicionalne tehnike koristimo tamo gde ih objekat traži, a savremene materijale tamo gde pod ili zid moraju da izdrže habanje, vlagu i hemikalije.",
  clientsLabel: "Radili smo za",
  clients: [
    "Železara Smederevo",
    "Meteh",
    "Bio Fil",
    "Buda bar",
    "Kalemegdan business centar",
    "Centar za kulturu Smederevo",
    "Gimnazija Smederevo",
    "Hram Svetog Đorđa",
  ],
  photo: {
    src: `${H}/Smederevska tvrđava - sanacija Tvrđava Kula 9/SAJT 3.webp`,
    alt: "Kula 9 Smederevske tvrđave pod skelom tokom sanacije",
    pos: "50% 40%",
  } as Photo,
};

// Questions on the home page: answered from what the firm does and has done, nothing promised beyond it
export const homeFaq = [
  {
    q: "Koje radove izvodite?",
    a: "Restauraciju i sanaciju fasada, crkava, tvrđava i starih zgrada, statičku sanaciju zvonika, svodova i zidova, izradu i obnovu teraco i mermernih podova i stepeništa, epoxy podove za hale, magacine i radionice i sanaciju betona, bazena i podova u industrijskim objektima.",
  },
  {
    q: "Da li radite na spomenicima kulture?",
    a: "Da. Radili smo na Kuli 9 Smederevske tvrđave, na fasadi i zvoniku Hrama Svetog Đorđa i na kapeli Dine Mančića. Na zaštićenim objektima radove izvodimo prema projektu i uslovima nadležnog zavoda za zaštitu spomenika.",
  },
  {
    q: "Kako izgleda saradnja od upita do završetka radova?",
    a: "Pozovete nas ili pošaljete e-poštu, a mi dolazimo na obilazak i procenjujemo stanje objekta. Zatim dobijate pisanu ponudu sa opisom radova, materijalima i rokovima. Radove izvodi naš tim, a objekat predajemo očišćen i spreman za upotrebu.",
  },
  {
    q: "Od čega zavise cena i rok radova?",
    a: "Od veličine objekta, njegovog stanja, obima radova i izabranih materijala. Zato cenu i rok dajemo tek posle obilaska, u pisanoj ponudi, kako biste unapred znali šta plaćate i kada se radovi završavaju.",
  },
  {
    q: "Da li radite van Smedereva?",
    a: "Da. Sedište nam je u Smederevu, a radove izvodimo širom Srbije, za privatne investitore, firme i javne ustanove.",
  },
  {
    q: "Šta da pošaljem uz upit?",
    a: "Kratak opis objekta i radova, mesto gde se objekat nalazi i, ako imate, nekoliko fotografija sadašnjeg stanja. Na osnovu toga dogovaramo obilazak.",
  },
];

// The 404 page's photograph (not used on the home page)
export const notFoundPhoto: Photo = {
  src: `${H}/Hram Svetog Đorđa - sanacija fasade/SAJT 3.webp`,
  alt: "Majstor sa kofom maltera na skeli Hrama Svetog Đorđa",
  pos: "60% 50%",
};

// Display names for the gallery's folders
export const galleryGroups: Record<string, string> = {
  "Restauracija i Očuvanje Kulturnog Nasleđa": "Restauracija kulturnog nasleđa",
  "Građevinski Radovi za Industrijske i Poslovne Prostore": "Podovi i industrijski objekti",
};
