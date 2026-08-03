import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Električar Beograd – hitne intervencije 0-24";
const DESCRIPTION =
  "Električar Beograd dostupan 0-24. Otklanjanje kvarova na instalaciji, kratkih spojeva, ugradnja utičnica, prekidača i rasvete. Brz izlazak na teren, garancija na rad.";

export const metadata = buildMetadata({
  title: "Električar Beograd 0-24",
  description: DESCRIPTION,
  url: "/elektricar",
});

const USLUGE = [
  "Otklanjanje kvarova i kratkih spojeva na instalaciji",
  "Zamena osigurača, sklopki i razvodnih ormana",
  "Ugradnja i zamena utičnica i prekidača",
  "Montaža unutrašnje i spoljne rasvete",
  "Postavljanje nove električne instalacije (dovod, izvod)",
  "Popravka bojlera, indikatora i drugih uređaja na struju",
  "Ispitivanje i otklanjanje uzroka čestog izbacivanja osigurača",
];

const SIMPTOMI = [
  "Struja se izbacuje čim uključite određeni uređaj",
  "Osećaj strujnog udara pri dodiru prekidača ili uređaja",
  "Miris paljevine iz utičnice, razvodne table ili kabla",
  "Deo stana ili kuće je ostao bez struje",
  "Varničenje ili treperenje sijalica bez razloga",
  "Utičnica ili prekidač su vrući na dodir",
];

const FAQ_ITEMS = [
  {
    question: "Šta da radim ako osetim miris paljevine iz instalacije?",
    answer:
      "Odmah isključite glavni osigurač ako je to bezbedno moguće i pozovite nas. Miris paljevine je znak ozbiljnog kvara i tretiramo ga kao hitnu intervenciju.",
  },
  {
    question: "Da li radite kompletnu zamenu stare instalacije?",
    answer:
      "Da, izvodimo zamenu dotrajale električne instalacije u stanovima i kućama, uključujući razvodne table, provodnike i sve utičnice i prekidače.",
  },
  {
    question: "Da li dolazite noću za hitne strujne kvarove?",
    answer:
      "Da, električar je dostupan 0-24 za hitne slučajeve poput kratkog spoja, gubitka struje u celom stanu ili opasnosti od strujnog udara.",
  },
  {
    question: "Da li mogu da dobijem savet telefonom pre dolaska?",
    answer:
      "Da, opišite nam problem telefonom kako bismo procenili hitnost i, ako je moguće, dali osnovne bezbednosne savete do dolaska majstora na adresu.",
  },
];

export default function ElektricarPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Električarske usluge",
    description: DESCRIPTION,
    slug: "elektricar",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Električar Beograd", path: "/elektricar" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Električar"
        title={TITLE}
        intro="Kratak spoj, gubitak struje ili varničenje u instalaciji su bezbednosni rizik koji zahteva brzu reakciju. Naš električar izlazi na teren širom Beograda i saniranje kvara obavlja odmah."
        image="/2204.jpg"
        imageAlt="Električar popravlja zidnu utičnicu i električnu instalaciju u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold text-primary sm:text-2xl">
              Električarske usluge koje izvodimo
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
              Kada je potrebna hitna intervencija
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
              Ukoliko problem uključuje i grejna tela ili termostat, pogledajte i uslugu{" "}
              <Link href="/servis-grejanja" className="font-semibold text-accent-dark hover:underline">
                servisa grejanja
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o električarskim uslugama" />

      <CTASection
        title="Nestala struja ili osećate strujni udar?"
        subtitle="Ne rizikujte bezbednost — pozovite električara dostupnog 0-24 u celom Beogradu."
      />
    </>
  );
}
