import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Hausmajstor Vukov spomenik – majstor za hitne intervencije 0-24";
const DESCRIPTION =
  "Hausmajstor Vukov spomenik – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stanove i poslovne prostore oko raskrsnice. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: "Hausmajstor Vukov spomenik 0-24",
  description: DESCRIPTION,
  url: "/hausmajstor-vukov-spomenik",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Vukov spomenik",
    text:
      "Popravka curenja i zamena starih cevi u zgradama iz perioda između dva svetska rata duž Cvijićeve ulice.",
  },
  {
    slug: "elektricar",
    label: "Električar Vukov spomenik",
    text:
      "Hitne intervencije u stanovima i lokalima oko raskrsnice, gde je gust saobraćaj čest razlog za brzu reakciju.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Vukov spomenik",
    text:
      "Mašinsko odgušenje sudopere, kade i zajedničkih vodova u starijim zgradama sa gustim prizemnim lokalima.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Vukov spomenik",
    text:
      "Servis radijatora i etažnih kotlova u stambenim zgradama duž Bulevara kralja Aleksandra.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li i u poslovnim prostorima i lokalima oko raskrsnice?",
    answer:
      "Da, pored stanova, redovno izlazimo i u prizemne lokale i kancelarije duž Bulevara kralja Aleksandra i Cvijićeve ulice, gde kvar na vodi ili struji direktno utiče na rad biznisa.",
  },
  {
    question: "Kolika je starost zgrada u ovom delu i da li ste navikli na stare instalacije?",
    answer:
      "Da, veći deo zgrada oko Vukovog spomenika potiče iz perioda između dva svetska rata i prvih decenija posle Drugog svetskog rata, pa redovno radimo na originalnim vodovodnim i elektro instalacijama iz tog vremena.",
  },
  {
    question: "Da li stižete brzo s obzirom na gust saobraćaj na raskrsnici?",
    answer:
      "Da, svesni smo da je Vukov spomenik jedna od najprometnijih tačaka u gradu, pa dolazak planiramo tako da izbegnemo najveće gužve i stignemo na adresu u što kraćem roku.",
  },
  {
    question: "Pokrivate li i okolne ulice ka Cvijićevoj i Bulevaru kralja Aleksandra?",
    answer:
      "Da, izlazimo na sve adrese u široj okolini raskrsnice, uključujući Cvijićevu ulicu, deo Bulevara kralja Aleksandra i susedne uličice prema Zvezdari i Vračaru.",
  },
];

export default function HausmajstorVukovSpomenikPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Vukov spomenik",
    description: DESCRIPTION,
    slug: "hausmajstor-vukov-spomenik",
    area: "Vukov spomenik, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Vukov spomenik", path: "/hausmajstor-vukov-spomenik" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Vukov spomenik"
        title={TITLE}
        intro="Vukov spomenik je jedno od najprometnijih raskršća Beograda, na granici Zvezdare, Palilule i Vračara, okruženo stambenim zgradama iz perioda između dva svetska rata i kasnijim naseljima duž Bulevara kralja Aleksandra i Cvijićeve ulice. Zbog gustog saobraćaja i frekventnosti kraja, trudimo se da hitne intervencije ovde rešavamo posebno brzo."
        image="/2204.jpg"
        imageAlt="Električar radi u zgradi kod Vukovog spomenika u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora kod Vukovog spomenika
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
          Šta je specifično za intervencije kod Vukovog spomenika
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Zgrade oko raskrsnice Vukovog spomenika najvećim delom potiču iz
          perioda između dva svetska rata, sa originalnim vodovodnim
          instalacijama koje su tokom decenija samo delimično obnavljane.
          U prizemljima ovih zgrada danas je veliki broj lokala i kancelarija,
          pa je kvar na vodi ili struji ovde često pitanje koje direktno
          utiče na poslovanje, ne samo na stanare.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Gust saobraćaj na samoj raskrsnici i duž Bulevara kralja Aleksandra
          znači da parking i pristup zgradi nisu uvek jednostavni, pa
          intervencije planiramo tako da opremu što brže prenesemo do
          adrese, bez nepotrebnog zadržavanja u kolonama.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama kod Vukovog spomenika" />

      <CTASection
        title="Hitan kvar kod Vukovog spomenika?"
        subtitle="Pozovite i majstor stiže na adresu, u stan ili poslovni prostor, 0-24, svakog dana."
      />
    </>
  );
}
