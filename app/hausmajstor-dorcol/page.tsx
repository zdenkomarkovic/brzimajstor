import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-dorcol");
const DESCRIPTION =
  "Hausmajstor Dorćol – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stare i renovirane stanove u najstarijem delu Beograda. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-dorcol",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Dorćol",
    text:
      "Sanacija starih vodovodnih cevi u zgradama iz devetnaestog i ranog dvadesetog veka, uz pažljiv rad oko zaštićenih fasada.",
  },
  {
    slug: "elektricar",
    label: "Električar Dorćol",
    text:
      "Modernizacija stare instalacije i ugradnja nove u renoviranim stanovima duž Cara Dušana i Dunavske ulice.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Dorćol",
    text:
      "Odgušenje starih kanalizacionih vodova u zgradama pod zaštitom, bez oštećenja originalnih instalacionih šahtova.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Dorćol",
    text:
      "Servis centralnog i etažnog grejanja, u zavisnosti od toga da li je zgrada zadržala originalni ili ugradila savremeni sistem.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Zgrada je pod zaštitom kao kulturno dobro – da li to utiče na radove?",
    answer:
      "Da, kod zgrada pod zaštitom prilagođavamo pristup tako da ne narušavamo izgled fasade ili originalnih elemenata, a intervencije radimo unutar stana ili na delovima instalacije koji nisu deo zaštićene celine.",
  },
  {
    question: "Stan je nedavno renoviran sa modernim instalacijama – radite li i takve intervencije?",
    answer:
      "Da, veliki broj stanova na Dorćolu je poslednjih godina temeljno renoviran, pa jednako često servisiramo savremene sisteme grejanja i vodovoda kao i one originalne iz starije gradnje.",
  },
  {
    question: "Imate li iskustva sa vrlo starim vodovodnim i elektro sistemima tipičnim za Dorćol?",
    answer:
      "Da, Dorćol je najstariji deo Beograda, pa redovno radimo na instalacijama koje potiču još iz devetnaestog i ranog dvadesetog veka, uz sve specifičnosti takvih sistema.",
  },
  {
    question: "Pokrivate li i uske ulice bliže Kalemegdanu?",
    answer:
      "Da, izlazimo na adresu u celom Dorćolu, od dela bliže Kalemegdanu i tvrđavi do okoline Cara Dušana i Dunavske ulice.",
  },
];

export default function HausmajstorDorcolPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Dorćol",
    description: DESCRIPTION,
    slug: "hausmajstor-dorcol",
    area: "Dorćol, Stari grad, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Dorćol", path: "/hausmajstor-dorcol" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Dorćol"
        title={h1}
        intro="Dorćol je najstariji deo Beograda, sa zgradama iz devetnaestog i ranog dvadesetog veka duž ulica poput Cara Dušana i Dunavske, u neposrednoj blizini Kalemegdana. Veliki broj objekata je pod nekim vidom zaštite kao deo kulturnog nasleđa, pa intervencije često zahtevaju dodatnu pažnju da se ne naruši izgled fasade ili unutrašnjosti."
        image="/24857.jpg"
        imageAlt="Majstor radi u staroj zgradi na Dorćolu u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Dorćolu
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
          Šta je specifično za intervencije na Dorćolu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Dorćol je najstariji deo grada, pa se ovde često susrećemo sa dve
          krajnosti u istoj zgradi – originalnim instalacijama koje nisu
          menjane decenijama i potpuno renoviranim stanovima sa savremenim
          sistemima, prilagođenim i za izdavanje na kraći rok. To znači da
          alat i pristup prilagođavamo od slučaja do slučaja.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Budući da je velik broj zgrada u ovom delu grada pod zaštitom kao
          kulturno dobro, radove uvek izvodimo tako da se ne naruši izgled
          fasade, stolarije ili drugih zaštićenih elemenata, a sve popravke
          ograničavamo na funkcionalni deo instalacije.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Dorćolu" />

      <NearbyLocations slug="hausmajstor-dorcol" />

      <CTASection
        title="Hitan kvar na Dorćolu?"
        subtitle="Pozovite i majstor stiže na adresu, u stari ili renoviran stan, 0-24, svakog dana."
      />
    </>
  );
}
