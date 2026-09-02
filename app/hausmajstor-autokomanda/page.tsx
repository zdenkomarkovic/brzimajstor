import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-autokomanda");
const DESCRIPTION =
  "Hausmajstor Autokomanda – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stanove i poslovne prostore na ovom saobraćajnom čvoru. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-autokomanda",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Autokomanda",
    text:
      "Popravka curenja i zamena starih cevi u zgradama u okolini ovog velikog saobraćajnog čvora.",
  },
  {
    slug: "elektricar",
    label: "Električar Autokomanda",
    text:
      "Hitne intervencije u stanovima i poslovnim prostorima duž glavnih saobraćajnica koje se ovde ukrštaju.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Autokomanda",
    text:
      "Mašinsko odgušenje sudopere, kade i zajedničkih kanalizacionih vodova u stambenim zgradama naselja.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Autokomanda",
    text:
      "Servis centralnog i etažnog grejanja u zgradama i poslovnim objektima ovog dela Voždovca.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Da li stižete brzo s obzirom na to da je Autokomanda veliki saobraćajni čvor?",
    answer:
      "Da, svesni smo da je ovo jedna od najprometnijih tačaka u gradu, koja je poslednjih godina i u obnovi zbog nove saobraćajne infrastrukture, pa dolazak planiramo tako da izbegnemo najveće gužve.",
  },
  {
    question: "Radite li i u poslovnim prostorima oko ove raskrsnice?",
    answer:
      "Da, pored stanova, redovno izlazimo i u poslovne prostore i kancelarije u okolini Autokomande, gde kvar na vodi ili struji direktno utiče na rad biznisa.",
  },
  {
    question: "Da li su radovi na saobraćajnoj infrastrukturi uticali na pristup adresama u ovom kraju?",
    answer:
      "Delimično, ali smo navikli da pratimo trenutnu situaciju na terenu i prilagođavamo rutu kako bismo stigli na adresu u najkraćem mogućem roku.",
  },
  {
    question: "Pokrivate li i okolna naselja poput Banjice i Voždovca?",
    answer:
      "Da, izlazimo na sve adrese u široj okolini Autokomande, uključujući susedna naselja Banjicu, centralni Voždovac i deo prema Dušanovcu.",
  },
];

export default function HausmajstorAutokomandaPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Autokomanda",
    description: DESCRIPTION,
    slug: "hausmajstor-autokomanda",
    area: "Autokomanda, Voždovac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Autokomanda", path: "/hausmajstor-autokomanda" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Autokomanda"
        title={h1}
        intro="Autokomanda je jedan od najprometnijih saobraćajnih čvorova u Beogradu, sa mešavinom poslovnih objekata i stambenih zgrada u okolini raskrsnice. Zbog gustog saobraćaja i tekućih radova na infrastrukturi, dolazak na adresu ovde uvek pažljivo planiramo."
        image="/2204.jpg"
        imageAlt="Električar radi u zgradi u blizini Autokomande u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Autokomandi
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
          Šta je specifično za intervencije na Autokomandi
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Autokomanda je čvorište nekoliko glavnih saobraćajnica, a
          poslednjih godina i mesto intenzivnih radova na novoj
          infrastrukturi. To znači da pristup pojedinim adresama povremeno
          zahteva prilagođavanje rute, na šta smo navikli i redovno pratimo
          trenutno stanje na terenu.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          U okolini raskrsnice nalazi se mešavina poslovnih objekata i
          stambenih zgrada, pa kvar na vodi ili struji ovde često ima
          direktan uticaj i na stanare i na firme koje posluju u istoj
          zgradi.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Autokomandi" />

      <NearbyLocations slug="hausmajstor-autokomanda" />

      <CTASection
        title="Hitan kvar na Autokomandi?"
        subtitle="Pozovite i majstor stiže na adresu, u stan ili poslovni prostor, 0-24."
      />
    </>
  );
}
