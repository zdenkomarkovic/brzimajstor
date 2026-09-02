import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-jajinci");
const DESCRIPTION =
  "Hausmajstor Jajinci – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za porodične kuće u ovom mirnom predgrađu Voždovca. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-jajinci",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Jajinci",
    text:
      "Sanacija curenja i zamena starijih vodovodnih instalacija u porodičnim kućama ovog mirnog naselja.",
  },
  {
    slug: "elektricar",
    label: "Električar Jajinci",
    text:
      "Popravka kvarova na instalaciji i modernizacija elektro sistema u individualnim kućama.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Jajinci",
    text:
      "Odgušenje sudopere, kade i odvodnih sistema, uključujući i starije priključke tipične za ovaj deo Voždovca.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Jajinci",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, uobičajen za porodičnu gradnju naselja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Da li izlazite i do udaljenijih delova Jajinaca prema Avalskom putu?",
    answer:
      "Da, redovno izlazimo na adrese u celom naselju, uključujući delove bliže Avalskom putu, bez obzira na udaljenost od centra opštine.",
  },
  {
    question: "Radite li na starijim porodičnim kućama sa dotrajalim instalacijama?",
    answer:
      "Da, veći deo Jajinaca čine individualne kuće građene tokom više decenija, pa imamo iskustva sa starijim vodovodnim i elektro sistemima.",
  },
  {
    question: "Da li je Jajinci mirnije naselje sa manje hitnih intervencija ili je potražnja slična ostalim delovima grada?",
    answer:
      "Iako je reč o mirnijem, pretežno stambenom naselju, kvarovi na vodi, struji ili kanalizaciji dešavaju se podjednako kao i u drugim delovima Beograda, pa smo dostupni za hitne pozive na isti način.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u Jajincima?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar naselja i trenutnog broja intervencija u toku dana.",
  },
];

export default function HausmajstorJajinciPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Jajinci",
    description: DESCRIPTION,
    slug: "hausmajstor-jajinci",
    area: "Jajinci, Voždovac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Jajinci", path: "/hausmajstor-jajinci" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Jajinci"
        title={h1}
        intro="Jajinci su mirno, pretežno stambeno naselje na Voždovcu, poznato po istoimenom memorijalnom kompleksu, sa individualnim kućama koje se protežu prema Avalskom putu. Izlazimo na adresu u svim delovima naselja, bez obzira na udaljenost od centra opštine."
        image="/2149334231.jpg"
        imageAlt="Majstor radi u porodičnoj kući u Jajincima"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora u Jajincima
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
          Šta je specifično za intervencije u Jajincima
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Kuće u Jajincima najvećim delom su individualne, građene tokom
          više decenija, pa se kvalitet instalacija razlikuje od adrese do
          adrese. Naselje se prostire prema Avalskom putu, pa udaljenije
          kuće ponekad zahtevaju nešto duži put do same adrese, na šta smo
          navikli.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Iako je reč o mirnom, pretežno rezidencijalnom naselju, kvarovi na
          vodi, struji ili kanalizaciji dešavaju se jednako kao i u
          prometnijim delovima grada, pa smo za hitne pozive u Jajincima
          dostupni na isti način kao svuda drugde.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama u Jajincima" />

      <NearbyLocations slug="hausmajstor-jajinci" />

      <CTASection
        title="Hitan kvar u Jajincima?"
        subtitle="Pozovite i majstor stiže na adresu, u svaku kuću u naselju, 0-24, svakog dana."
      />
    </>
  );
}
