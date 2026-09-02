import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-zarkovo");
const DESCRIPTION =
  "Hausmajstor Žarkovo – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za porodične kuće i novije zgrade duž Patrijarha Pavla. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-zarkovo",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Žarkovo",
    text:
      "Sanacija curenja i usklađivanje starijih i naknadno ugrađenih instalacija u kućama građenim u etapama.",
  },
  {
    slug: "elektricar",
    label: "Električar Žarkovo",
    text:
      "Modernizacija elektro instalacije u porodičnim kućama i ugradnja nove u zgradama duž Patrijarha Pavla.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Žarkovo",
    text:
      "Odgušenje sudopere, kade i kanalizacionih priključaka u individualnim kućama ovog dela Čukarice.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Žarkovo",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, uobičajen za porodičnu gradnju ovog naselja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Kuća je građena u više etapa – da li radite i na starijim i na novijim delovima instalacije?",
    answer:
      "Da, to je uobičajena situacija na Žarkovu gde su porodice tokom decenija dograđivale kuće po delovima. Prvo procenjujemo stanje postojećih instalacija, a zatim predlažemo kako ih uskladiti ili delimično zameniti.",
  },
  {
    question: "Pokrivate li ceo kraj duž Patrijarha Pavla?",
    answer:
      "Da, izlazimo na adresu u celom naselju, od dela bližeg Banovom brdu do granice sa Rakovicom, duž glavne ulice i svih okolnih uličica.",
  },
  {
    question: "Radite li i u novijim stambenim zgradama, ne samo u kućama?",
    answer:
      "Da, pored porodičnih kuća koje čine veći deo Žarkova, redovno radimo i u novijim stambenim zgradama izgrađenim poslednjih godina duž glavnih saobraćajnica.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u ovom delu Čukarice?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije i trenutnog broja intervencija u toku dana.",
  },
];

export default function HausmajstorZarkovoPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Žarkovo",
    description: DESCRIPTION,
    slug: "hausmajstor-zarkovo",
    area: "Žarkovo, Čukarica, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Žarkovo", path: "/hausmajstor-zarkovo" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Žarkovo"
        title={h1}
        intro="Žarkovo je naselje na Čukarici, između Banovog brda i Rakovice, sa mešavinom porodičnih kuća i novije stambene gradnje duž ulice Patrijarha Pavla. Kraj se decenijama širio kroz individualnu izgradnju, pa se na terenu susrećemo i sa vrlo starim i sa sasvim novim instalacijama, često u istoj kući."
        image="/2149334231.jpg"
        imageAlt="Majstor radi u porodičnoj kući na Žarkovu u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Žarkovu
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
          Šta je specifično za intervencije na Žarkovu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Većina kuća na Žarkovu građena je postepeno, tokom više decenija,
          kako su vlasnici imali potrebu i sredstva za dogradnju. Zbog toga
          se na jednoj adresi često nalaze i starije i sasvim nove deonice
          vodovodnih i elektro instalacija, pa procena stanja pre same
          intervencije uvek prethodi konkretnoj popravci.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Duž ulice Patrijarha Pavla poslednjih godina niču i nove stambene
          zgrade, pa pored porodičnih kuća sve češće radimo i u savremenijim
          objektima sa drugačijim tipom instalacija i zajedničkim
          sistemima.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Žarkovu" />

      <NearbyLocations slug="hausmajstor-zarkovo" />

      <CTASection
        title="Hitan kvar na Žarkovu?"
        subtitle="Pozovite i majstor stiže na adresu, u kuću ili zgradu, 0-24, svakog dana."
      />
    </>
  );
}
