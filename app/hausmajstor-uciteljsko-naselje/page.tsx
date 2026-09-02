import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-uciteljsko-naselje");
const DESCRIPTION =
  "Hausmajstor Učiteljsko naselje – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za porodične kuće u ovom mirnom delu grada. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-uciteljsko-naselje",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Učiteljsko naselje",
    text:
      "Sanacija curenja i zamena starijih vodovodnih instalacija u porodičnim kućama ovog mirnog naselja.",
  },
  {
    slug: "elektricar",
    label: "Električar Učiteljsko naselje",
    text:
      "Popravka kvarova na instalaciji i modernizacija elektro sistema u individualnim kućama.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Učiteljsko naselje",
    text:
      "Odgušenje sudopere, kade i odvodnih sistema u porodičnim kućama ovog dela grada.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Učiteljsko naselje",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, uobičajen za individualnu gradnju naselja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li na starijim kućama tipičnim za ovo naselje?",
    answer:
      "Da, Učiteljsko naselje je nastalo kao mirno naselje porodičnih kuća, pa imamo iskustva sa starijim vodovodnim i elektro instalacijama koje su tokom decenija samo delimično obnavljane.",
  },
  {
    question: "Pokrivate li ceo kraj bez obzira na udaljenost od glavnih ulica?",
    answer:
      "Da, izlazimo na adresu u celom naselju, bez obzira na to koliko je kuća udaljena od glavnih saobraćajnica.",
  },
  {
    question: "Da li je naselje mirnije, sa manje hitnih intervencija?",
    answer:
      "Iako je reč o mirnom, pretežno porodičnom naselju, kvarovi na vodi, struji ili kanalizaciji dešavaju se podjednako kao i u prometnijim delovima grada, pa smo dostupni za hitne pozive na isti način.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u Učiteljskom naselju?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar naselja i trenutnog broja intervencija u toku dana.",
  },
];

export default function HausmajstorUciteljskoNaseljePage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Učiteljsko naselje",
    description: DESCRIPTION,
    slug: "hausmajstor-uciteljsko-naselje",
    area: "Učiteljsko naselje, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Učiteljsko naselje", path: "/hausmajstor-uciteljsko-naselje" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Učiteljsko naselje"
        title={h1}
        intro="Učiteljsko naselje je mirno, pretežno porodično naselje sa individualnim kućama, nastalo kao stambena zona namenjena porodicama koje su ovde dobijale parcele za gradnju. Izlazimo na adresu u svim delovima naselja, bez obzira na udaljenost od centra grada."
        image="/24857.jpg"
        imageAlt="Majstor radi u porodičnoj kući u Učiteljskom naselju"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora u Učiteljskom naselju
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
          Šta je specifično za intervencije u Učiteljskom naselju
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Kuće u Učiteljskom naselju najvećim delom su individualne, građene
          tokom više decenija, pa se kvalitet instalacija razlikuje od
          adrese do adrese. Mirna, porodična atmosfera naselja znači da su
          dvorišta često veća, pa pored unutrašnjih radimo i na spoljnim
          vodovodnim instalacijama.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Iako je reč o mirnom naselju udaljenom od najprometnijih delova
          grada, kvarovi na vodi, struji ili kanalizaciji dešavaju se
          jednako kao i drugde, pa smo za hitne pozive ovde dostupni na isti
          način kao svuda u Beogradu.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama u Učiteljskom naselju" />

      <NearbyLocations slug="hausmajstor-uciteljsko-naselje" />

      <CTASection
        title="Hitan kvar u Učiteljskom naselju?"
        subtitle="Pozovite i majstor stiže na adresu, u svaku kuću u naselju, 0-24, svakog dana."
      />
    </>
  );
}
