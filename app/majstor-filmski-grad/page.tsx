import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("majstor-filmski-grad");
const DESCRIPTION =
  "Majstor Filmski grad – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za vile i kuće u zelenom delu Košutnjaka. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/majstor-filmski-grad",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Filmski grad",
    text:
      "Sanacija instalacija u vilama i porodičnim kućama okruženim zelenilom Košutnjaka.",
  },
  {
    slug: "elektricar",
    label: "Električar Filmski grad",
    text:
      "Modernizacija elektro instalacije u mirnim, manje pristupačnim delovima naselja bliže šumi.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Filmski grad",
    text:
      "Odgušenje odvodnih sistema u kućama sa dvorištima, prilagođeno šumovitom, brdovitom terenu.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Filmski grad",
    text:
      "Servis etažnog grejanja u porodičnim kućama i vilama ovog mirnog naselja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Da li vam šumovit i brdovit teren oko Filmskog grada otežava dolazak?",
    answer:
      "Ne, navikli smo na rad u ovom delu Košutnjaka gde su ulice uže i okružene zelenilom. Vozilo ostavimo na najbližem dostupnom mestu, a opremu nosimo do same kuće ako je potrebno.",
  },
  {
    question: "Radite li na starijim vilama u ovom delu naselja?",
    answer:
      "Da, deo objekata u Filmskom gradu potiče iz sredine dvadesetog veka, iz vremena kada su ovde bili smešteni filmski atelje, pa imamo iskustva sa instalacijama tog perioda.",
  },
  {
    question: "Servisirate li i instalacije u dvorištu, poput spoljnih slavina i odvoda?",
    answer:
      "Da, s obzirom da kuće u ovom naselju često imaju veće dvorište okruženo zelenilom, radimo i na spoljnim vodovodnim instalacijama i odvodnim sistemima oko kuće.",
  },
  {
    question: "Koliko brzo stižete s obzirom na mirnu, udaljeniju lokaciju naselja?",
    answer:
      "Trudimo se da izađemo u što kraćem roku bez obzira na to što je Filmski grad mirniji i nešto udaljeniji od glavnih saobraćajnica Čukarice.",
  },
];

export default function MajstorFilmskiGradPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Filmski grad",
    description: DESCRIPTION,
    slug: "majstor-filmski-grad",
    area: "Filmski grad, Košutnjak, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Filmski grad", path: "/majstor-filmski-grad" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Filmski grad"
        title={h1}
        intro="Filmski grad je mirno, zeleno naselje na Košutnjaku, koje je ime dobilo po nekadašnjim filmskim ateljeima smeštenim u ovom delu grada. Vile i porodične kuće ovde su okružene šumom, a uže, mirnije ulice zahtevaju drugačiji pristup nego rad u gušće naseljenim delovima grada."
        image="/tapec.jpg"
        imageAlt="Majstor servisira grejanje u vili u Filmskom gradu na Košutnjaku"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora u Filmskom gradu
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {USLUGE.map((usluga) => (
            <Link
              key={usluga.slug}
              href={`/${usluga.slug}`}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="font-heading text-lg font-bold text-primary">
                {usluga.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/70">
                {usluga.text}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-dark">
                Detaljnije →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <h2 className="font-heading text-xl font-bold text-primary sm:text-2xl">
          Šta je specifično za intervencije u Filmskom gradu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Naselje je nastalo u blizini nekadašnjih filmskih ateljea na
          Košutnjaku, pa ga i danas krasi mirna, vilinska atmosfera sa dosta
          zelenila. Deo objekata potiče iz sredine dvadesetog veka, sa
          instalacijama koje su tokom decenija samo delimično obnavljane.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Šumovit, brdovit teren i uže ulice znače da pristup vozilom nije
          uvek jednostavan, pa opremu često nosimo peške poslednji deo puta.
          Veća dvorišta tipična za ovaj kraj takođe zahtevaju servis
          spoljnih vodovodnih i odvodnih instalacija.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama u Filmskom gradu" />

      <NearbyLocations slug="majstor-filmski-grad" />

      <CTASection
        title="Hitan kvar u Filmskom gradu?"
        subtitle="Pozovite i majstor stiže na adresu, u vilu ili porodičnu kuću, 0-24, svakog dana."
      />
    </>
  );
}
