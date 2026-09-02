import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-stepa-stepanovic");
const DESCRIPTION =
  "Hausmajstor Stepa Stepanović – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stambene blokove i kuće blizu Šumica. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-stepa-stepanovic",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Stepa Stepanović",
    text:
      "Sanacija zajedničkih vertikala u stambenim blokovima i popravka instalacija u okolnim porodičnim kućama.",
  },
  {
    slug: "elektricar",
    label: "Električar Stepa Stepanović",
    text:
      "Popravka kvarova na instalaciji i modernizacija razvodnih tabli u zgradama ovog naselja.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Stepa Stepanović",
    text:
      "Odgušenje zajedničkih kanalizacionih vodova u zgradama i individualnih priključaka u okolnim kućama.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Stepa Stepanović",
    text:
      "Servis radijatora i etažnih kotlova, u zavisnosti od toga da li je reč o stambenom bloku ili kući.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li u stambenim blokovima naselja Stepa Stepanović?",
    answer:
      "Da, redovno izlazimo na adrese u ovim zgradama, gde su zajedničke vodovodne i kanalizacione vertikale često starije i zahtevaju iskustvo u radu sa deonicama koje pogađaju više stanova.",
  },
  {
    question: "Pokrivate li i deo naselja bliže Šumicama?",
    answer:
      "Da, izlazimo na adresu u celom naselju, uključujući delove bliže Šumicama i Kumodražu, bez obzira na to o kom bloku ili ulici je reč.",
  },
  {
    question: "Radite li i u okolnim porodičnim kućama, ne samo u zgradama?",
    answer:
      "Da, pored stambenih blokova, izlazimo i na adrese u individualnim kućama koje okružuju naselje.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u ovom delu Voždovca?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije i trenutnog broja intervencija u toku dana.",
  },
];

export default function HausmajstorStepaStepanovicPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Stepa Stepanović",
    description: DESCRIPTION,
    slug: "hausmajstor-stepa-stepanovic",
    area: "Stepa Stepanović, Voždovac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Stepa Stepanović", path: "/hausmajstor-stepa-stepanovic" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Stepa Stepanović"
        title={h1}
        intro="Naselje Stepa Stepanović deo je Voždovca sa stambenim blokovima blizu Šumica i Kumodraža, izgrađenim tokom sedamdesetih i osamdesetih godina. Izlazimo na adresu i u ove zgrade i u porodične kuće koje ih okružuju, gde su instalacije često različite starosti."
        image="/2204.jpg"
        imageAlt="Električar radi u stambenom bloku u naselju Stepa Stepanović"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora u naselju Stepa Stepanović
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
          Šta je specifično za intervencije u naselju Stepa Stepanović
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Stambeni blokovi ovog naselja podignuti su tokom sedamdesetih i
          osamdesetih godina, pa su njihove zajedničke vodovodne i
          kanalizacione vertikale sada stare po nekoliko decenija. Curenje
          ili začepljenje u takvim zgradama često pogađa više stanova
          odjednom, pa je precizna dijagnostika prvi korak.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Naselje graniči sa Šumicama i Kumodražom, gde preovlađuje
          individualna gradnja, pa pored zgrada redovno radimo i u
          porodičnim kućama različite starosti u neposrednoj okolini.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama u naselju Stepa Stepanović" />

      <NearbyLocations slug="hausmajstor-stepa-stepanovic" />

      <CTASection
        title="Hitan kvar u naselju Stepa Stepanović?"
        subtitle="Pozovite i majstor stiže na adresu, u zgradu ili kuću, 0-24, svakog dana."
      />
    </>
  );
}
