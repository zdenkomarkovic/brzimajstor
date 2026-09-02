import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("majstor-stari-grad");
const DESCRIPTION =
  "Majstor Stari grad – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stanove, lokale i kancelarije od Knez Mihailove do Skadarlije. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/majstor-stari-grad",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Stari grad",
    text:
      "Hitne intervencije u kafanama, restoranima i lokalima gde curenje vode direktno ugrožava rad biznisa.",
  },
  {
    slug: "elektricar",
    label: "Električar Stari grad",
    text:
      "Popravka kvarova na instalaciji u poslovnim prostorima i stanovima iznad njih, po potrebi i van radnog vremena.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Stari grad",
    text:
      "Mašinsko odgušenje u ugostiteljskim objektima gde je kanalizacija pod pojačanim opterećenjem svakog dana.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Stari grad",
    text:
      "Servis grejanja u starim zgradama iznad lokala u centru, gde su stanovi često manji i sa individualnim sistemima.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Imam kafanu ili radnju u centru i hitno mi je potreban vodoinstalater – možete li brzo doći?",
    answer:
      "Da, kvarove u poslovnim prostorima tretiramo kao prioritet, s obzirom da direktno utiču na rad lokala. Trudimo se da izađemo na adresu u najkraćem mogućem roku.",
  },
  {
    question: "Radite li van radnog vremena da ne remetimo goste?",
    answer:
      "Da, po dogovoru intervencije u ugostiteljskim objektima često izvodimo u ranim jutarnjim satima ili posle zatvaranja, kako rad ne bi ometao goste tokom dana.",
  },
  {
    question: "Kako pristupate opremom u pešačkoj zoni poput Knez Mihailove?",
    answer:
      "Vozilo ostavljamo na najbližem dozvoljenom mestu, a alat i opremu do same adrese nosimo peške, što je uobičajena praksa za rad u centralnim pešačkim zonama.",
  },
  {
    question: "Servisirate li i stanove iznad lokala u starim zgradama?",
    answer:
      "Da, pored poslovnih prostora u prizemlju, redovno radimo i u stanovima na spratovima iznad njih, gde su zgrade često starije i imaju specifične zajedničke instalacije.",
  },
];

export default function MajstorStariGradPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Stari grad",
    description: DESCRIPTION,
    slug: "majstor-stari-grad",
    area: "Stari grad, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Stari grad", path: "/majstor-stari-grad" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Stari grad"
        title={h1}
        intro="Stari grad je administrativni i turistički centar Beograda, od pešačke zone Knez Mihailove do Skadarlije, sa mešavinom poslovnih prostora – kafana, radnji, kancelarija – i stambenih zgrada iznad njih. Intervencije ovde često radimo u ranim jutarnjim satima ili van radnog vremena lokala, kako bismo što manje remetili poslovanje."
        image="/hero.jpg"
        imageAlt="Majstor radi u lokalu u centru Beograda, Stari grad"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Starom gradu
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
          Šta je specifično za intervencije na Starom gradu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Prizemlja zgrada u centru grada, od Knez Mihailove do Skadarlije,
          najvećim delom zauzimaju kafane, restorani i radnje, gde kvar na
          vodi, struji ili kanalizaciji ima direktan uticaj na poslovanje.
          Zbog toga ovakve intervencije po pravilu tretiramo prioritetno i
          organizujemo ih tako da što manje remete rad lokala.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Stanovi iznad tih lokala nalaze se u zgradama koje su često stare
          čitav vek, sa zajedničkim instalacijama koje zahtevaju iskustvo u
          radu sa starijim sistemima. Gusta pešačka zona i ograničen pristup
          vozilom znače da opremu obično nosimo direktno do adrese.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Starom gradu" />

      <NearbyLocations slug="majstor-stari-grad" />

      <CTASection
        title="Hitan kvar na Starom gradu?"
        subtitle="Pozovite i majstor stiže na adresu, u lokal, kancelariju ili stan u centru, 0-24."
      />
    </>
  );
}
