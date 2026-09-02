import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("majstor-bogoslovija");
const DESCRIPTION =
  "Majstor Bogoslovija – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za porodične kuće oko Kanarevog sokaka na Vračaru. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/majstor-bogoslovija",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Bogoslovija",
    text:
      "Popravka curenja i sanacija starijih vodovodnih instalacija u porodičnim kućama oko Kanarevog sokaka.",
  },
  {
    slug: "elektricar",
    label: "Električar Bogoslovija",
    text:
      "Provera i modernizacija elektro instalacije u kućama koje su decenijama u vlasništvu iste porodice.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Bogoslovija",
    text:
      "Odgušenje sudopere, kade i odvodnih sistema, prilagođeno terenu koji je delom strm i brdovit.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Bogoslovija",
    text:
      "Servis etažnog grejanja i radijatora pred sezonu, uobičajen u individualnoj gradnji ovog dela Vračara.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Da li poznajete teren oko Kanarevog sokaka?",
    answer:
      "Da, redovno izlazimo na adrese duž Kanarevog sokaka i okolnih uličica, koje su poznate po svom vijugavom toku i strmim delovima, pa nam takav pristup ne predstavlja problem.",
  },
  {
    question: "Imam stariju kuću sa mešavinom starih i novih instalacija, možete li proceniti stanje?",
    answer:
      "Da, s obzirom da su kuće u ovom delu Vračara često u istoj porodici decenijama, uobičajeno je da su instalacije menjane delimično kroz godine. Prvo napravimo procenu stanja, a zatim predlažemo šta je potrebno sanirati.",
  },
  {
    question: "Radite li zamenu delova instalacije bez rušenja cele kuće?",
    answer:
      "Da, gde god je to moguće, radimo lokalizovane popravke i zamene samo problematičnog dela instalacije, umesto da predlažemo veće zahvate koji nisu neophodni.",
  },
  {
    question: "Koliko brzo izlazite na ovaj deo Vračara?",
    answer:
      "Trudimo se da na hitne pozive u okolini Bogoslovije izađemo u kratkom roku, s obzirom da je reč o relativno kompaktnom, mirnijem delu opštine.",
  },
];

export default function MajstorBogoslovijaPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Bogoslovija",
    description: DESCRIPTION,
    slug: "majstor-bogoslovija",
    area: "Bogoslovija, Vračar, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Bogoslovija", path: "/majstor-bogoslovija" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Bogoslovija"
        title={h1}
        intro="Bogoslovija je mirniji, brdoviti deo Vračara u okolini Kanarevog sokaka, sa porodičnim kućama i manjim stambenim zgradama. Kraj je gušće naseljen porodicama koje duže žive na istoj adresi, pa su nam poznate i starije instalacije koje su služile decenijama uz povremene delimične popravke."
        image="/2149176716.jpg"
        imageAlt="Majstor popravlja kućni aparat u kući u naselju Bogoslovija"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora u Bogosloviji
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
          Šta je specifično za intervencije u Bogosloviji
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Naselje oko Kanarevog sokaka odlikuju kuće koje su dugo u
          vlasništvu iste porodice, često nasleđene kroz generacije. To znači
          da su instalacije po pravilu menjane postepeno, deo po deo, kada
          bi se ukazala potreba, pa retko postoji jedinstven sistem izveden
          odjednom.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Brdovit teren i vijugave uličice ovog dela Vračara ponekad utiču na
          pritisak vode i otežavaju pristup vozilom, ali to je nešto na šta
          smo navikli – opremu nosimo do same kuće bez obzira na konfiguraciju
          terena.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama u Bogosloviji" />

      <NearbyLocations slug="majstor-bogoslovija" />

      <CTASection
        title="Hitan kvar u Bogosloviji?"
        subtitle="Pozovite i majstor stiže na adresu, u svaku kuću u ovom delu Vračara, 0-24."
      />
    </>
  );
}
