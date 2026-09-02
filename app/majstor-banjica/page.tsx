import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("majstor-banjica");
const DESCRIPTION =
  "Majstor Banjica – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stanove i kuće blizu Kliničkog centra Banjica i parka-šume. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/majstor-banjica",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Banjica",
    text:
      "Popravka curenja i sanacija instalacija u stambenim zgradama i porodičnim kućama ovog dela Voždovca.",
  },
  {
    slug: "elektricar",
    label: "Električar Banjica",
    text:
      "Popravka kvarova na instalaciji i ugradnja rasvete u stanovima blizu parka-šume Banjica.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Banjica",
    text:
      "Odgušenje sudopere, kade i zajedničkih kanalizacionih vodova u stambenim zgradama naselja.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Banjica",
    text:
      "Servis centralnog i etažnog grejanja, u zavisnosti od tipa objekta u ovom delu Voždovca.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li hitne intervencije u blizini Kliničkog centra Banjica?",
    answer:
      "Da, redovno izlazimo na adrese u okolini bolnice, kako u stambenim zgradama tako i u individualnim kućama, uz razumevanje da je u ovom delu grada saobraćaj ponekad gušći zbog same ustanove.",
  },
  {
    question: "Pokrivate li i deo naselja bliži parku-šumi Banjica?",
    answer:
      "Da, izlazimo na adresu u celom naselju, uključujući mirnije delove bliže parku-šumi, gde preovlađuje niža stambena i individualna gradnja.",
  },
  {
    question: "Radite li i u novijim stambenim zgradama na Banjici?",
    answer:
      "Da, pored starije gradnje, redovno radimo i u novijim stambenim objektima izgrađenim poslednjih godina u ovom delu Voždovca.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv na Banjici?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije i trenutnog broja intervencija u toku dana.",
  },
];

export default function MajstorBanjicaPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Banjica",
    description: DESCRIPTION,
    slug: "majstor-banjica",
    area: "Banjica, Voždovac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Banjica", path: "/majstor-banjica" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Banjica"
        title={h1}
        intro="Banjica je deo opštine Voždovac poznat po Kliničkom centru Banjica i istoimenoj park-šumi, sa mešavinom stambenih zgrada i porodičnih kuća. Izlazimo na adresu u svim delovima naselja, od gušće naseljenih ulica bliže bolnici do mirnijih delova prema parku."
        image="/2150721537.jpg"
        imageAlt="Majstor popravlja vodovodnu instalaciju u zgradi na Banjici"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Banjici
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
          Šta je specifično za intervencije na Banjici
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Deo naselja bliže Kliničkom centru Banjica gušće je naseljen
          stambenim zgradama, gde zajedničke vodovodne i kanalizacione
          vertikale zahtevaju iskustvo u radu sa deonicama koje pogađaju
          više stanova odjednom. Blizina velike zdravstvene ustanove
          takođe znači nešto gušći saobraćaj u pojedinim delovima dana.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Prema park-šumi Banjica, naselje postaje mirnije, sa više
          individualnih kuća i nižih zgrada, gde su instalacije raznovrsnije
          u zavisnosti od godine gradnje.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Banjici" />

      <NearbyLocations slug="majstor-banjica" />

      <CTASection
        title="Hitan kvar na Banjici?"
        subtitle="Pozovite i majstor stiže na adresu, u stan ili kuću, 0-24, svakog dana."
      />
    </>
  );
}
