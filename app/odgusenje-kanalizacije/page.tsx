import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Odgušenje kanalizacije Beograd – hitno 0-24";
const DESCRIPTION =
  "Odgušenje kanalizacije, sudopere, kade i WC šolje u Beogradu 0-24. Mašinsko odgušenje i čišćenje odvoda, brz izlazak na teren, garancija na rad.";

export const metadata = buildMetadata({
  title: "Odgušenje kanalizacije Beograd 0-24",
  description: DESCRIPTION,
  url: "/odgusenje-kanalizacije",
});

const USLUGE = [
  "Mašinsko odgušenje kanalizacione mreže i glavnih vodova",
  "Odgušenje sudopere, kade, tuš kabine i podnog slivnika",
  "Odgušenje i popravka WC šolje koja se sliva presporo ili nikako",
  "Čišćenje sifona i uklanjanje neprijatnih mirisa iz odvoda",
  "Pregled kanalizacije kamerom radi utvrđivanja uzroka začepljenja",
  "Odgušenje kanalizacije u dvorišnim i podrumskim šahtama",
];

const SIMPTOMI = [
  "Voda se sliva veoma sporo ili se uopšte ne sliva",
  "Neprijatan miris koji dolazi iz sudopere, kade ili poda",
  "Voda se vraća nazad iz slivnika ili WC šolje",
  "Krkljanje zvuka u cevima prilikom puštanja vode",
  "Poplavljen podrum ili dvorište zbog začepljene kanalizacije",
  "Često ponavljano začepljenje istog odvoda",
];

const FAQ_ITEMS = [
  {
    question: "Koju metodu odgušenja koristite?",
    answer:
      "Koristimo mašinsko odgušenje (spiralu) prilagođeno prečniku i vrsti cevi, a po potrebi i kameru za pregled kanalizacije radi preciznog utvrđivanja mesta i uzroka začepljenja.",
  },
  {
    question: "Da li odgušujete i glavnu kanalizacionu šahtu, ne samo sudoperu?",
    answer:
      "Da, radimo odgušenje kako manjih odvoda u kuhinji i kupatilu, tako i glavne kanalizacione mreže i dvorišnih šahtova.",
  },
  {
    question: "Koliko dugo traje odgušenje kanalizacije?",
    answer:
      "Većina intervencija odgušenja traje od 30 minuta do sat vremena, u zavisnosti od dužine cevi i ozbiljnosti začepljenja.",
  },
  {
    question: "Šta ako se začepljenje ponovo javi nakon nekog vremena?",
    answer:
      "Na izvedeno odgušenje dajemo garanciju. Ako se problem ponovi u garantnom periodu zbog istog uzroka, izlazimo ponovo na adresu.",
  },
];

export default function OdgusenjeKanalizacijePage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Odgušenje kanalizacije",
    description: DESCRIPTION,
    slug: "odgusenje-kanalizacije",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Odgušenje kanalizacije Beograd", path: "/odgusenje-kanalizacije" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Odgušenje kanalizacije"
        title={TITLE}
        intro="Začepljena sudopera, kada ili kanalizaciona šahta ume da izazove pravu poplavu. Mašinski odgušujemo odvode svih vrsta, brzo i bez razbijanja zidova ili poda."
        image="/2149334231.jpg"
        imageAlt="Majstor priprema odvodnu cev u kuhinji pre odgušenja kanalizacije u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold text-primary sm:text-2xl">
              Usluge odgušenja koje izvodimo
            </h2>
            <ul className="mt-5 space-y-3">
              {USLUGE.map((usluga) => (
                <li key={usluga} className="flex items-start gap-2 text-sm text-primary/80">
                  <span className="mt-0.5 text-accent-dark">✓</span>
                  {usluga}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-primary sm:text-2xl">
              Kada je potrebno hitno odgušenje
            </h2>
            <ul className="mt-5 space-y-3">
              {SIMPTOMI.map((simptom) => (
                <li key={simptom} className="flex items-start gap-2 text-sm text-primary/80">
                  <span className="mt-0.5 text-accent-dark">⚠</span>
                  {simptom}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-primary/70">
              Ako je uzrok u dotrajaloj instalaciji ili slavini, pogledajte i uslugu{" "}
              <Link href="/vodoinstalater" className="font-semibold text-accent-dark hover:underline">
                vodoinstalatera
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o odgušenju kanalizacije" />

      <CTASection
        title="Začepljena kanalizacija ili sudopera?"
        subtitle="Mašinsko odgušenje dostupno 0-24, na teritoriji celog Beograda."
      />
    </>
  );
}
