import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Vodoinstalater Beograd – hitne intervencije 0-24";
const DESCRIPTION =
  "Vodoinstalater Beograd dostupan 0-24. Hitne intervencije za curenje vode, pucanje cevi, ugradnju bojlera i slavina. Brz dolazak, fer cena, garancija na rad.";

export const metadata = buildMetadata({
  title: "Vodoinstalater Beograd 0-24",
  description: DESCRIPTION,
  url: "/vodoinstalater",
});

const USLUGE = [
  "Otklanjanje curenja vode i pucanja cevi",
  "Ugradnja i zamena bojlera (protočnih i akumulacionih)",
  "Zamena i ugradnja slavina, ventila i sifona",
  "Zamena vodovodnih instalacija (PPR, bakar, fleksibilna creva)",
  "Ugradnja i popravka WC šolja, kada i tuš kabina",
  "Detekcija skrivenog curenja vode u zidu i podu",
  "Zamena vodomera i baždarenje instalacije",
];

const SIMPTOMI = [
  "Probijena cev i voda koja curi po stanu ili podrumu",
  "Bojler ne greje vodu, curi ili pravi buku",
  "Slavina ili ventil ne mogu da se zatvore",
  "Nema tople ili hladne vode u delu stana",
  "Vlaga i fleke na plafonu ili zidu suseda ispod vas",
  "Nizak pritisak vode u celom stanu ili kući",
];

const FAQ_ITEMS = [
  {
    question: "Da li dolazite na hitne pozive noću i vikendom?",
    answer:
      "Da, naš vodoinstalater je dostupan 0-24, svakog dana u nedelji, uključujući noćne sate, vikende i praznike, za sve hitne slučajeve poput pucanja cevi ili poplave.",
  },
  {
    question: "Koliko brzo možete doći ako mi curi voda?",
    answer:
      "Curenje vode tretiramo kao prioritet — u zavisnosti od lokacije u Beogradu, trudimo se da izađemo na adresu u najkraćem mogućem roku kako bismo sprečili dalju štetu.",
  },
  {
    question: "Da li nosite rezervne delove i materijal sa sobom?",
    answer:
      "Vodoinstalateri na teren izlaze opremljeni alatom i najčešćim rezervnim delovima (slavine, sifoni, creva, brtve), a za specifičnije delove (npr. konkretan model bojlera) unapred se dogovaramo telefonom.",
  },
  {
    question: "Radite li i zamenu kompletne vodovodne instalacije?",
    answer:
      "Da, izvodimo i veće zahvate poput zamene cele vodovodne instalacije u stanu ili kući, uz prethodni pregled na licu mesta i dogovor oko cene i rokova.",
  },
];

export default function VodoinstalaterPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Vodoinstalaterske usluge",
    description: DESCRIPTION,
    slug: "vodoinstalater",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Vodoinstalater Beograd", path: "/vodoinstalater" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Vodoinstalater"
        title={TITLE}
        intro="Pucanje cevi, curenje bojlera ili slavina koje ne mogu da se zatvore ne trpe odlaganje. Naš vodoinstalater izlazi na adresu širom Beograda i rešava problem na licu mesta."
        image="/2150721537.jpg"
        imageAlt="Vodoinstalater popravlja cevi ispod sudopere u kuhinji u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold text-primary sm:text-2xl">
              Vodoinstalaterske usluge koje izvodimo
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
              Ako je problem u odvodu ili začepljenju, pogledajte i uslugu{" "}
              <Link href="/odgusenje-kanalizacije" className="font-semibold text-accent-dark hover:underline">
                odgušenja kanalizacije
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o vodoinstalaterskim uslugama" />

      <CTASection
        title="Curi vam voda ili pukla cev?"
        subtitle="Ne čekajte da šteta bude veća. Pozovite vodoinstalatera dostupnog 0-24 u celom Beogradu."
      />
    </>
  );
}
