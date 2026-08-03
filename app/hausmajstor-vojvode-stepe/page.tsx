import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Hausmajstor Vojvode Stepe – majstor za hitne intervencije 0-24";
const DESCRIPTION =
  "Hausmajstor Vojvode Stepe – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stanove, lokale i kancelarije duž ove prometne ulice. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: "Hausmajstor Vojvode Stepe 0-24",
  description: DESCRIPTION,
  url: "/hausmajstor-vojvode-stepe",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Vojvode Stepe",
    text:
      "Hitne intervencije u stanovima i poslovnim prostorima duž ove prometne saobraćajnice na Voždovcu.",
  },
  {
    slug: "elektricar",
    label: "Električar Vojvode Stepe",
    text:
      "Popravka kvarova na instalaciji u zgradama i lokalima, uz mogućnost brze intervencije za poslovne prostore.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Vojvode Stepe",
    text:
      "Mašinsko odgušenje sudopere, kade i zajedničkih kanalizacionih vodova u zgradama duž ulice.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Vojvode Stepe",
    text:
      "Servis centralnog i etažnog grejanja u stambenim zgradama ovog dela Voždovca.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li i u poslovnim prostorima i lokalima duž ulice Vojvode Stepe?",
    answer:
      "Da, pored stanova, redovno izlazimo i u prizemne lokale i kancelarije duž ove prometne saobraćajnice, gde kvar na vodi ili struji direktno utiče na rad biznisa.",
  },
  {
    question: "Da li stižete brzo s obzirom na gust saobraćaj i tramvajsku liniju?",
    answer:
      "Da, svesni smo da je Vojvode Stepe jedna od prometnijih ulica na Voždovcu, pa dolazak planiramo tako da izbegnemo najveće gužve i stignemo na adresu u što kraćem roku.",
  },
  {
    question: "Pokrivate li i okolne uličice i naselja duž ove saobraćajnice?",
    answer:
      "Da, izlazimo na sve adrese u široj okolini ulice, uključujući susedna naselja poput Medakovića i Braće Jerković.",
  },
  {
    question: "Radite li u starijim zgradama sa zajedničkim instalacijama duž ove ulice?",
    answer:
      "Da, imamo iskustva sa starijim zajedničkim vodovodnim i kanalizacionim vertikalama u zgradama duž Vojvode Stepe, gde curenje ili začepljenje često pogađa više stanova.",
  },
];

export default function HausmajstorVojvodeStepePage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Vojvode Stepe",
    description: DESCRIPTION,
    slug: "hausmajstor-vojvode-stepe",
    area: "Vojvode Stepe, Voždovac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Vojvode Stepe", path: "/hausmajstor-vojvode-stepe" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Vojvode Stepe"
        title={TITLE}
        intro="Ulica Vojvode Stepe jedna je od glavnih saobraćajnica Voždovca, sa tramvajskom linijom i mešavinom poslovnih prostora i stambenih zgrada duž trase. Intervencije ovde često izvodimo brzo, svesni da kvar na vodi ili struji u poslovnom prostoru direktno utiče na rad biznisa."
        image="/tapec.jpg"
        imageAlt="Majstor radi u zgradi duž ulice Vojvode Stepe"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Vojvode Stepe
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
          Šta je specifično za intervencije na Vojvode Stepe
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Duž ulice Vojvode Stepe u prizemljima zgrada nalazi se veliki broj
          lokala i kancelarija, pa je kvar na vodi ili struji ovde često
          pitanje koje direktno utiče na poslovanje, ne samo na stanare
          zgrade iznad njih.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Tramvajska linija i gust saobraćaj duž ove saobraćajnice znače da
          parking i pristup zgradi nisu uvek jednostavni, pa intervencije
          planiramo tako da opremu što brže prenesemo do adrese.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Vojvode Stepe" />

      <CTASection
        title="Hitan kvar na Vojvode Stepe?"
        subtitle="Pozovite i majstor stiže na adresu, u stan ili poslovni prostor, 0-24."
      />
    </>
  );
}
