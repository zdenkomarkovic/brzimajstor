import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-medakovic");
const DESCRIPTION =
  "Hausmajstor Medaković – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za naselja Medaković I, II, III i IV na Voždovcu. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-medakovic",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Medaković",
    text:
      "Sanacija zajedničkih vertikala u nižim stambenim zgradama kroz sva četiri dela naselja.",
  },
  {
    slug: "elektricar",
    label: "Električar Medaković",
    text:
      "Popravka kvarova na instalaciji i ugradnja rasvete u zgradama i porodičnim kućama.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Medaković",
    text:
      "Odgušenje sudopere, kade i kanalizacionih vodova, i u zgradama i u individualnim kućama naselja.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Medaković",
    text:
      "Servis centralnog i etažnog grejanja, u zavisnosti od tipa objekta u kom delu naselja se nalazi.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Pokrivate li sve delove naselja – Medaković I, II, III i IV?",
    answer:
      "Da, izlazimo na adresu u sva četiri dela naselja, bez obzira na to koliko su međusobno udaljeni.",
  },
  {
    question: "Radite li i u nižim stambenim zgradama i u porodičnim kućama?",
    answer:
      "Da, Medaković je mešavina nižih stambenih zgrada i individualnih kuća, pa jednako često radimo u oba tipa objekata.",
  },
  {
    question: "Da li je naselje porodično orijentisano i utiče li to na vrstu intervencija?",
    answer:
      "Da, Medaković je pretežno mirno, porodično naselje, pa su česte intervencije servis grejanja, popravka sanitarija i manje elektro popravke tipične za svakodnevni život porodica.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u Medakoviću?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar naselja i trenutnog broja intervencija u toku dana.",
  },
];

export default function HausmajstorMedakovicPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Medaković",
    description: DESCRIPTION,
    slug: "hausmajstor-medakovic",
    area: "Medaković, Voždovac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Medaković", path: "/hausmajstor-medakovic" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Medaković"
        title={h1}
        intro="Medaković, podeljen na četiri celine, mirno je i pretežno porodično naselje na Voždovcu, sa nižim stambenim zgradama i individualnim kućama. Izlazimo na adresu u sve delove naselja, bez obzira na to o kojoj celini je reč."
        image="/2149176716.jpg"
        imageAlt="Majstor servisira kućni aparat u naselju Medaković"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora u Medakoviću
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
          Šta je specifično za intervencije u Medakoviću
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Naselje je podeljeno na četiri celine koje se razlikuju po tipu
          gradnje – od nižih stambenih zgrada do porodičnih kuća sa
          dvorištima. Ta raznovrsnost znači da na terenu radimo i na
          zajedničkim instalacijama u zgradama i na individualnim sistemima
          u kućama.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Mirna, porodična atmosfera Medakovića znači da su česte
          intervencije servis etažnih kotlova pred grejnu sezonu i manje
          popravke sanitarija, ali smo podjednako spremni i za hitne
          slučajeve poput pucanja cevi ili kvara na struji.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama u Medakoviću" />

      <NearbyLocations slug="hausmajstor-medakovic" />

      <CTASection
        title="Hitan kvar u Medakoviću?"
        subtitle="Pozovite i majstor stiže na adresu, u sve delove naselja, 0-24, svakog dana."
      />
    </>
  );
}
