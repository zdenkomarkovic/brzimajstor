import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Hausmajstor Vojvode Vlahovića – majstor za hitne intervencije 0-24";
const DESCRIPTION =
  "Hausmajstor Vojvode Vlahovića – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stanove i kuće blizu naselja Braće Jerković. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: "Hausmajstor Vojvode Vlahovića 0-24",
  description: DESCRIPTION,
  url: "/hausmajstor-vojvode-vlahovica",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Vojvode Vlahovića",
    text:
      "Sanacija instalacija u stambenim zgradama i popravka curenja u porodičnim kućama ovog dela Voždovca.",
  },
  {
    slug: "elektricar",
    label: "Električar Vojvode Vlahovića",
    text:
      "Popravka kvarova na instalaciji i ugradnja rasvete u zgradama i kućama duž ove saobraćajnice.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Vojvode Vlahovića",
    text:
      "Odgušenje zajedničkih kanalizacionih vodova u zgradama i individualnih priključaka u kućama.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Vojvode Vlahovića",
    text:
      "Servis centralnog i etažnog grejanja, u zavisnosti od tipa objekta u ovom delu naselja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Pokrivate li ceo kraj oko ulice Vojvode Vlahovića?",
    answer:
      "Da, izlazimo na adresu duž cele ulice i u okolne uličice, bez obzira na to o kom delu naselja je reč.",
  },
  {
    question: "Radite li i u stambenim zgradama i u porodičnim kućama?",
    answer:
      "Da, ovaj deo Voždovca čini mešavina stambenih zgrada i individualnih kuća, pa jednako često radimo u oba tipa objekata.",
  },
  {
    question: "Da li je ovaj deo naselja blizu Braće Jerković, pa pokrivate i taj kraj?",
    answer:
      "Da, redovno izlazimo i u susedno naselje Braće Jerković, kao i u druge okolne delove Voždovca.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u ovom delu grada?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije i trenutnog broja intervencija u toku dana.",
  },
];

export default function HausmajstorVojvodeVlahovicaPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Vojvode Vlahovića",
    description: DESCRIPTION,
    slug: "hausmajstor-vojvode-vlahovica",
    area: "Vojvode Vlahovića, Voždovac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Vojvode Vlahovića", path: "/hausmajstor-vojvode-vlahovica" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Vojvode Vlahovića"
        title={TITLE}
        intro="Naselje oko ulice Vojvode Vlahovića deo je Voždovca, u neposrednoj blizini Braće Jerković, sa mešavinom stambenih zgrada i porodičnih kuća. Izlazimo na adresu u sve delove ovog kraja, bez obzira na tip objekta."
        image="/hero.jpg"
        imageAlt="Majstor radi u zgradi u naselju Vojvode Vlahovića"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora u naselju Vojvode Vlahovića
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
          Šta je specifično za intervencije u naselju Vojvode Vlahovića
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Ovaj deo Voždovca čini kombinacija stambenih zgrada i porodičnih
          kuća, pa se instalacije značajno razlikuju u zavisnosti od tipa
          objekta i godine gradnje. U zgradama je česta intervencija
          sanacija zajedničkih vertikala, dok u kućama radimo na
          individualnim sistemima.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Blizina naselja Braće Jerković znači da često pokrivamo oba kraja
          u okviru iste ture, pa smo dobro upoznati sa specifičnostima
          gradnje na celoj ovoj deonici Voždovca.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama u naselju Vojvode Vlahovića" />

      <CTASection
        title="Hitan kvar u naselju Vojvode Vlahovića?"
        subtitle="Pozovite i majstor stiže na adresu, u zgradu ili kuću, 0-24, svakog dana."
      />
    </>
  );
}
