// Globalne konstante sajta
// Ove vrednosti se koriste za SEO, metadata, i prikaz kontakt podataka

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hausmajstorbeograd.rs";

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "HausMajstor Beograd";

// ─── Poslovni podaci (NAP - Name, Address, Phone) ─────────────────────────────
// Drzati konzistentnim svuda na sajtu (i eventualno na Google Business profilu)
// radi lokalnog SEO-a.

export const BUSINESS_NAME = "HausMajstor Beograd";
export const BUSINESS_SLOGAN = "Brzi majstor 0-24 Beograd";

export const PHONE_DISPLAY = "065 551 7733";
export const PHONE_E164 = "+381655517733";
export const PHONE_HREF = `tel:${PHONE_E164}`;

export const EMAIL = "hitneintervencijemilan@gmail.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const WHATSAPP_HREF = `https://wa.me/${PHONE_E164.replace("+", "")}`;
export const VIBER_HREF = `viber://chat?number=${PHONE_E164.replace("+", "")}`;

export const SERVICE_AREA = "Ceo Beograd i okolina";
export const WORKING_HOURS = "0-24h, svakog dana (0-24, uključujući vikende i praznike)";

// ─── Usluge ────────────────────────────────────────────────────────────────────

export interface ServiceLink {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  keywords: string[];
  image: string;
}

export const SERVICES: ServiceLink[] = [
  {
    slug: "vodoinstalater",
    title: "Vodoinstalater Beograd",
    shortTitle: "Vodovod",
    description:
      "Hitne vodoinstalaterske intervencije 0-24 – popravka curenja cevi, začepljenja, ugradnja i zamena bojlera, slavina i ventila. Dolazimo brzo na svaku adresu u Beogradu, radimo uredno i uz garanciju na izvedene radove.",
    keywords: [
      "Zamena slavina",
      "Detekcija curenja vode",
      "Odgušenje cevi",
      "Zamena vodokotlića",
      "Ugradnja bojlera",
      "Zamena sifona i baterija",
    ],
    image: "/2150721537.jpg",
  },
  {
    slug: "elektricar",
    title: "Električar Beograd",
    shortTitle: "Elektrika",
    description:
      "Brze i sigurne električarske intervencije – popravka kvarova na instalaciji, zamena osigurača, ugradnja utičnica, prekidača i rasvete. Radimo u skladu sa propisima i proveravamo ispravnost instalacije pre završetka posla.",
    keywords: [
      "Zamena osigurača",
      "Otklanjanje kratkog spoja",
      "Ugradnja utičnica i prekidača",
      "Montaža lustera i rasvete",
      "Ispitivanje instalacije",
      "Ugradnja razvodnih tabli",
    ],
    image: "/2204.jpg",
  },
  {
    slug: "odgusenje-kanalizacije",
    title: "Odgušenje kanalizacije Beograd",
    shortTitle: "Kanalizacija",
    description:
      "Profesionalno mašinsko odgušenje sudopere, kade, WC šolje i glavnih kanalizacionih vodova u stambenim i poslovnim objektima. Savremena oprema za brzo i trajno rešenje začepljenja, bez razbijanja zidova i poda.",
    keywords: [
      "Odgušenje sudopere",
      "Odgušenje WC šolje",
      "Odgušenje kade i tuš kabine",
      "Odgušenje glavnog kanalizacionog voda",
      "Kamera pregled cevi",
      "Čišćenje slivnika i oluka",
    ],
    image: "/2149334231.jpg",
  },
  {
    slug: "servis-grejanja",
    title: "Servis grejanja Beograd",
    shortTitle: "Grejanje",
    description:
      "Servis i popravka centralnog grejanja, radijatora, konvektora, cirkulacionih pumpi i bojlera, pre i tokom grejne sezone. Pregled sistema, brzo otklanjanje kvarova i saveti za uštedu energije.",
    keywords: [
      "Servis kotla",
      "Odzračivanje radijatora",
      "Zamena ventila na radijatoru",
      "Servis cirkulacione pumpe",
      "Punjenje sistema grejanja",
      "Zamena radijatora",
    ],
    image: "/tapec.jpg",
  },
];

// ─── Lokacijske stranice ────────────────────────────────────────────────────

export interface LocationLink {
  slug: string;
  /** Ime naselja/opštine, npr. "Zvezdara" */
  name: string;
  /** Tekst linka koji se koristi na sajtu, npr. "Hausmajstor Zvezdara" */
  linkLabel: string;
  /** Opština kojoj naselje pripada, koristi se za grupisanje na sajtu */
  municipality: string;
}

export const LOCATIONS: LocationLink[] = [
  {
    slug: "hausmajstor-zvezdara",
    name: "Zvezdara",
    linkLabel: "Hausmajstor Zvezdara",
    municipality: "Zvezdara",
  },
  {
    slug: "majstor-mirijevo",
    name: "Mirijevo",
    linkLabel: "Majstor Mirijevo",
    municipality: "Zvezdara",
  },
  {
    slug: "majstor-konjarnik",
    name: "Konjarnik",
    linkLabel: "Majstor Konjarnik",
    municipality: "Zvezdara",
  },
  {
    slug: "majstor-mali-mokri-lug",
    name: "Mali Mokri Lug",
    linkLabel: "Majstor Mali Mokri Lug",
    municipality: "Zvezdara",
  },
  {
    slug: "majstor-veliki-mokri-lug",
    name: "Veliki Mokri Lug",
    linkLabel: "Majstor Veliki Mokri Lug",
    municipality: "Zvezdara",
  },
  {
    slug: "hausmajstor-karaburma",
    name: "Karaburma",
    linkLabel: "Hausmajstor Karaburma",
    municipality: "Palilula",
  },
  {
    slug: "hausmajstor-palilula",
    name: "Palilula",
    linkLabel: "Hausmajstor Palilula",
    municipality: "Palilula",
  },
  {
    slug: "majstor-novi-beograd",
    name: "Novi Beograd",
    linkLabel: "Majstor Novi Beograd",
    municipality: "Novi Beograd",
  },
  {
    slug: "majstor-bezanijska-kosa",
    name: "Bežanijska kosa",
    linkLabel: "Majstor Bežanijska Kosa",
    municipality: "Novi Beograd",
  },
  {
    slug: "majstor-vracar",
    name: "Vračar",
    linkLabel: "Majstor Vračar",
    municipality: "Vračar",
  },
  {
    slug: "hausmajstor-vukov-spomenik",
    name: "Vukov spomenik",
    linkLabel: "Hausmajstor Vukov Spomenik",
    municipality: "Vračar",
  },
  {
    slug: "majstor-slavujev-venac",
    name: "Slavujev venac",
    linkLabel: "Majstor Slavujev Venac",
    municipality: "Vračar",
  },
  {
    slug: "hausmajstor-cubura",
    name: "Čubura",
    linkLabel: "Hausmajstor Čubura",
    municipality: "Vračar",
  },
  {
    slug: "majstor-bogoslovija",
    name: "Bogoslovija",
    linkLabel: "Majstor Bogoslovija",
    municipality: "Vračar",
  },
  {
    slug: "hausmajstor-dorcol",
    name: "Dorćol",
    linkLabel: "Hausmajstor Dorćol",
    municipality: "Stari grad",
  },
  {
    slug: "majstor-stari-grad",
    name: "Stari grad",
    linkLabel: "Majstor Stari Grad",
    municipality: "Stari grad",
  },
  {
    slug: "hausmajstor-zemun",
    name: "Zemun",
    linkLabel: "Hausmajstor Zemun",
    municipality: "Zemun",
  },
  {
    slug: "hausmajstor-senjak",
    name: "Senjak",
    linkLabel: "Hausmajstor Senjak",
    municipality: "Savski venac",
  },
  {
    slug: "majstor-dedinje",
    name: "Dedinje",
    linkLabel: "Majstor Dedinje",
    municipality: "Savski venac",
  },
  {
    slug: "majstor-savski-venac",
    name: "Savski venac",
    linkLabel: "Majstor Savski Venac",
    municipality: "Savski venac",
  },
  {
    slug: "hausmajstor-cukarica",
    name: "Čukarica",
    linkLabel: "Hausmajstor Čukarica",
    municipality: "Čukarica",
  },
  {
    slug: "hausmajstor-banovo-brdo",
    name: "Banovo brdo",
    linkLabel: "Hausmajstor Banovo Brdo",
    municipality: "Čukarica",
  },
  {
    slug: "hausmajstor-zarkovo",
    name: "Žarkovo",
    linkLabel: "Hausmajstor Žarkovo",
    municipality: "Čukarica",
  },
  {
    slug: "hausmajstor-vidikovac",
    name: "Vidikovac",
    linkLabel: "Hausmajstor Vidikovac",
    municipality: "Čukarica",
  },
  {
    slug: "majstor-filmski-grad",
    name: "Filmski grad",
    linkLabel: "Majstor Filmski Grad",
    municipality: "Čukarica",
  },
  {
    slug: "majstor-cerak",
    name: "Cerak",
    linkLabel: "Majstor Cerak",
    municipality: "Rakovica",
  },
  {
    slug: "hausmajstor-rakovica",
    name: "Rakovica",
    linkLabel: "Hausmajstor Rakovica",
    municipality: "Rakovica",
  },
  {
    slug: "majstor-miljakovac",
    name: "Miljakovac",
    linkLabel: "Majstor Miljakovac",
    municipality: "Rakovica",
  },
  {
    slug: "hausmajstor-kanarevo-brdo",
    name: "Kanarevo brdo",
    linkLabel: "Hausmajstor Kanarevo Brdo",
    municipality: "Rakovica",
  },
  {
    slug: "majstor-banjica",
    name: "Banjica",
    linkLabel: "Majstor Banjica",
    municipality: "Voždovac",
  },
  {
    slug: "hausmajstor-jajinci",
    name: "Jajinci",
    linkLabel: "Hausmajstor Jajinci",
    municipality: "Voždovac",
  },
  {
    slug: "majstor-kumodraz",
    name: "Kumodraž",
    linkLabel: "Majstor Kumodraž",
    municipality: "Voždovac",
  },
  {
    slug: "hausmajstor-stepa-stepanovic",
    name: "Stepa Stepanović",
    linkLabel: "Hausmajstor Stepa Stepanović",
    municipality: "Voždovac",
  },
  {
    slug: "majstor-mitrovo-brdo",
    name: "Mitrovo brdo",
    linkLabel: "Majstor Mitrovo Brdo",
    municipality: "Voždovac",
  },
  {
    slug: "hausmajstor-vojvode-vlahovica",
    name: "Vojvode Vlahovića",
    linkLabel: "Hausmajstor Vojvode Vlahovića",
    municipality: "Voždovac",
  },
  {
    slug: "majstor-brace-jerkovic",
    name: "Braće Jerković",
    linkLabel: "Majstor Braće Jerković",
    municipality: "Voždovac",
  },
  {
    slug: "hausmajstor-vojvode-stepe",
    name: "Vojvode Stepe",
    linkLabel: "Hausmajstor Vojvode Stepe",
    municipality: "Voždovac",
  },
  {
    slug: "majstor-vozdovac",
    name: "Voždovac",
    linkLabel: "Majstor Voždovac",
    municipality: "Voždovac",
  },
  {
    slug: "hausmajstor-autokomanda",
    name: "Autokomanda",
    linkLabel: "Hausmajstor Autokomanda",
    municipality: "Voždovac",
  },
  {
    slug: "majstor-lekino-brdo",
    name: "Lekino brdo",
    linkLabel: "Majstor Lekino Brdo",
    municipality: "Voždovac",
  },
  {
    slug: "hausmajstor-uciteljsko-naselje",
    name: "Učiteljsko naselje",
    linkLabel: "Hausmajstor Učiteljsko Naselje",
    municipality: "Voždovac",
  },
  {
    slug: "hausmajstor-medakovic",
    name: "Medaković",
    linkLabel: "Hausmajstor Medaković",
    municipality: "Voždovac",
  },
  {
    slug: "hausmajstor-kaludjerica",
    name: "Kaluđerica",
    linkLabel: "Hausmajstor Kaluđerica",
    municipality: "Grocka",
  },
];
