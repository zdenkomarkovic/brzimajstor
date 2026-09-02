import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("majstor-konjarnik");
const DESCRIPTION =
  "Majstor Konjarnik – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stambene zgrade duž Ustaničke ulice na Zvezdari. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/majstor-konjarnik",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Konjarnik",
    text:
      "Sanacija zajedničkih vertikala u zgradama duž Ustaničke ulice i popravka curenja u stanovima.",
  },
  {
    slug: "elektricar",
    label: "Električar Konjarnik",
    text:
      "Popravka kvarova na instalaciji i modernizacija razvodnih tabli u stambenim zgradama naselja.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Konjarnik",
    text:
      "Odgušenje sudopere, kade i zajedničkih kanalizacionih vodova u stambenim blokovima Konjarnika.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Konjarnik",
    text:
      "Servis centralnog i etažnog grejanja, u zavisnosti od tipa zgrade u ovom delu Zvezdare.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li u stambenim blokovima duž Ustaničke ulice?",
    answer:
      "Da, redovno izlazimo na adrese u ovim zgradama, gde zajedničke vodovodne i kanalizacione vertikale, s obzirom na starost, često zahtevaju sanaciju.",
  },
  {
    question: "Odakle naselje nosi ime Konjarnik i da li to utiče na tip gradnje?",
    answer:
      "Naselje je ime dobilo po nekadašnjoj pijaci za konje koja se ovde nalazila, a danas je reč o gusto naseljenom delu Zvezdare sa stambenim zgradama iz druge polovine dvadesetog veka.",
  },
  {
    question: "Pokrivate li i deo naselja bliži Mirijevu i Konjarniku prema Zvezdari?",
    answer:
      "Da, izlazimo na adresu u celom naselju, uključujući delove bliže Mirijevu i centru Zvezdare.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv na Konjarniku?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije i trenutnog broja intervencija u toku dana.",
  },
];

export default function MajstorKonjarnikPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Konjarnik",
    description: DESCRIPTION,
    slug: "majstor-konjarnik",
    area: "Konjarnik, Zvezdara, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Konjarnik", path: "/majstor-konjarnik" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Konjarnik"
        title={h1}
        intro="Konjarnik je gusto naseljen deo Zvezdare duž Ustaničke ulice, sa stambenim zgradama iz druge polovine dvadesetog veka. Naselje je ime dobilo po nekadašnjoj pijaci za konje, a danas je jedno od prometnijih mesta u ovom delu grada."
        image="/2150721537.jpg"
        imageAlt="Majstor popravlja vodovodnu instalaciju u zgradi na Konjarniku"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Konjarniku
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
          Šta je specifično za intervencije na Konjarniku
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Stambene zgrade duž Ustaničke ulice na Konjarniku podignute su
          uglavnom u drugoj polovini dvadesetog veka, pa su njihove
          zajedničke vodovodne i kanalizacione vertikale sada starije i
          zahtevaju iskustvo u radu sa deonicama koje pogađaju više
          stanova odjednom.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Gusta gradnja i prometna glavna ulica znače da parking i pristup
          zgradi nisu uvek jednostavni, pa opremu često nosimo direktno do
          adrese, bez oslanjanja na mesto za parkiranje ispred same zgrade.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Konjarniku" />

      <NearbyLocations slug="majstor-konjarnik" />

      <CTASection
        title="Hitan kvar na Konjarniku?"
        subtitle="Pozovite i majstor stiže na adresu, u svaku zgradu naselja, 0-24, svakog dana."
      />
    </>
  );
}
