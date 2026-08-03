import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Majstor Novi Beograd – hitne intervencije 0-24";
const DESCRIPTION =
  "Majstor Novi Beograd – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stanove, poslovne prostore i nove stambene komplekse. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: "Majstor Novi Beograd 0-24",
  description: DESCRIPTION,
  url: "/majstor-novi-beograd",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Novi Beograd",
    text:
      "Popravka curenja i zamena vertikala u starijim blokovima, kao i ugradnja sanitarija u novim stambenim kompleksima.",
  },
  {
    slug: "elektricar",
    label: "Električar Novi Beograd",
    text:
      "Hitne intervencije u stanovima i poslovnim prostorima duž Bulevara Mihajla Pupina i Zelenog venca.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Novi Beograd",
    text:
      "Mašinsko odgušenje sudopere, kade i zajedničkih kanalizacionih vodova u visokim stambenim zgradama.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Novi Beograd",
    text:
      "Odzračivanje i zamena ventila na radijatorima za stanove na daljinskom grejanju, kao i servis etažnih kotlova.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li u poslovnim prostorima i kancelarijama na Novom Beogradu?",
    answer:
      "Da, pored stanova, redovno izvodimo vodoinstalaterske i elektro intervencije u poslovnim prostorima i kancelarijama duž Bulevara Mihajla Pupina, Zelenog venca i u poslovnim zgradama oko Ušća.",
  },
  {
    question: "Stan mi je na daljinskom grejanju, da li servisirate radijatore?",
    answer:
      "Da, iako je zgrada na daljinskom grejanju iz toplane, radijatori, ventili i cirkulacija unutar stana i dalje mogu imati kvar. Radimo odzračivanje, zamenu ventila i termostatskih glava i saniranje curenja na radijatorima.",
  },
  {
    question: "Da li pokrivate i novije blokove poput Bloka 67/68 i Ušća?",
    answer:
      "Da, izlazimo podjednako u stare blokove sa soliterima iz šezdesetih i sedamdesetih i u novogradnju oko Ušća, Airport Sitija i Bloka 67/68, gde su instalacije novije, ali i dalje podložne kvarovima.",
  },
  {
    question: "Koliko brzo majstor stiže na adresu na Novom Beogradu?",
    answer:
      "S obzirom da je Novi Beograd najveća opština po broju stanovnika, trudimo se da izađemo na hitne pozive u što kraćem roku, u zavisnosti od konkretnog bloka i trenutnog broja intervencija.",
  },
];

export default function MajstorNoviBeogradPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Novi Beograd",
    description: DESCRIPTION,
    slug: "majstor-novi-beograd",
    area: "Novi Beograd, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Novi Beograd", path: "/majstor-novi-beograd" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Novi Beograd"
        title={TITLE}
        intro="Novi Beograd je najveća opština u gradu, od starih blokova sa soliterima iz šezdesetih i sedamdesetih do novogradnje oko Ušća, Airport Sitija i Bloka 67/68. Radimo podjednako u stanovima na visokim spratovima starih blokova, poslovnim prostorima duž Bulevara Mihajla Pupina i u novim rezidencijalnim kompleksima."
        image="/tapec.jpg"
        imageAlt="Majstor servisira radijator u stanu na Novom Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Novom Beogradu
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
          Šta je specifično za intervencije na Novom Beogradu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Većina zgrada na Novom Beogradu, posebno starijih blokova od Bloka
          1 do Bloka 45, priključena je na daljinsko grejanje, pa se kvarovi
          najčešće javljaju na samim radijatorima, ventilima i internoj
          instalaciji stana, a ne na kotlu kao kod individualnih kuća. Zbog
          velikog broja stanova u jednoj zgradi, i vodovodne i kanalizacione
          vertikale su pod većim opterećenjem, pa je odgušenje zajedničkih
          vodova ovde česta intervencija.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          U poslovnim zgradama i kancelarijama duž Bulevara Mihajla Pupina i
          Zelenog venca, elektro kvarovi se tretiraju kao prioritet jer
          direktno utiču na rad firmi, pa tu intervencije po pravilu
          organizujemo u najkraćem mogućem roku. U novijim naseljima poput
          Ušća i Bloka 67/68 najčešće je reč o manjim doradama i servisu
          savremenih sistema grejanja i sanitarija.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Novom Beogradu" />

      <CTASection
        title="Hitan kvar na Novom Beogradu?"
        subtitle="Pozovite i majstor stiže na adresu, u stanu, kancelariji ili novom stambenom kompleksu, 0-24."
      />
    </>
  );
}
