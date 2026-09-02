import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("majstor-lekino-brdo");
const DESCRIPTION =
  "Majstor Lekino brdo – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za kuće i niže stambene zgrade u ovom mirnom naselju. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/majstor-lekino-brdo",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Lekino brdo",
    text:
      "Sanacija curenja i usklađivanje starijih i naknadno ugrađenih instalacija u kućama ovog naselja.",
  },
  {
    slug: "elektricar",
    label: "Električar Lekino brdo",
    text:
      "Popravka kvarova na instalaciji i ugradnja rasvete u kućama i nižim stambenim zgradama.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Lekino brdo",
    text:
      "Odgušenje sudopere, kade i odvodnih sistema, prilagođeno mešovitoj gradnji naselja.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Lekino brdo",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, uobičajen za porodičnu gradnju ovog dela Voždovca.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li i u kućama i u nižim stambenim zgradama na Lekinom brdu?",
    answer:
      "Da, naselje čini mešavina porodičnih kuća i nižih stambenih zgrada, pa jednako često radimo u oba tipa objekata.",
  },
  {
    question: "Ima li problema sa pritiskom vode zbog brdovitog terena?",
    answer:
      "Da, kao i u drugim brdovitim delovima Voždovca, na Lekinom brdu se povremeno javlja slabiji pritisak vode na višim kotama, što proveravamo pre nego što predložimo rešenje.",
  },
  {
    question: "Pokrivate li ceo kraj bez obzira na udaljenost od glavnih ulica?",
    answer:
      "Da, izlazimo na adresu u celom naselju, bez obzira na to koliko je kuća ili zgrada udaljena od glavnih saobraćajnica.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv na Lekinom brdu?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar naselja i trenutnog broja intervencija u toku dana.",
  },
];

export default function MajstorLekinoBrdoPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Lekino brdo",
    description: DESCRIPTION,
    slug: "majstor-lekino-brdo",
    area: "Lekino brdo, Voždovac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Lekino brdo", path: "/majstor-lekino-brdo" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Lekino brdo"
        title={h1}
        intro="Lekino brdo je mirno naselje na Voždovcu, sa mešavinom porodičnih kuća i nižih stambenih zgrada. Kraj se decenijama razvijao postepeno, pa se na terenu često susrećemo sa instalacijama različite starosti, u zavisnosti od tipa objekta i godine gradnje."
        image="/2149334231.jpg"
        imageAlt="Majstor radi na odgušenju u naselju Lekino brdo"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Lekinom brdu
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
          Šta je specifično za intervencije na Lekinom brdu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Naselje čine porodične kuće i niže stambene zgrade građene tokom
          više decenija, pa se kvalitet i starost instalacija razlikuju od
          adrese do adrese. U zgradama je češća intervencija sanacija
          zajedničkih vertikala, dok u kućama radimo na individualnim
          sistemima.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Brdovit teren ovog dela Voždovca povremeno utiče na pritisak vode,
          posebno u objektima na višim kotama, što je nešto na šta redovno
          obraćamo pažnju pre same intervencije.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Lekinom brdu" />

      <NearbyLocations slug="majstor-lekino-brdo" />

      <CTASection
        title="Hitan kvar na Lekinom brdu?"
        subtitle="Pozovite i majstor stiže na adresu, u kuću ili zgradu, 0-24, svakog dana."
      />
    </>
  );
}
