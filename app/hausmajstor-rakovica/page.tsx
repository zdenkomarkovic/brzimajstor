import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-rakovica");
const DESCRIPTION =
  "Hausmajstor Rakovica – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja od stare radničke gradnje do novijih naselja opštine. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-rakovica",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Rakovica",
    text:
      "Sanacija starih vodovodnih instalacija u zgradama iz doba industrijskog razvoja opštine duž Patrijarha Dimitrija.",
  },
  {
    slug: "elektricar",
    label: "Električar Rakovica",
    text:
      "Popravka kvarova na instalaciji u starijoj radničkoj gradnji i novije ožičenje u savremenijim naseljima.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Rakovica",
    text:
      "Odgušenje sudopere, kade i kanalizacionih vodova, i u zgradama i u individualnim kućama opštine.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Rakovica",
    text:
      "Servis centralnog i etažnog grejanja, u zavisnosti od tipa objekta, od starijih zgrada do porodičnih kuća.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li u starijim zgradama iz vremena kada su ovde radile velike fabrike?",
    answer:
      "Da, deo Rakovice se razvijao oko nekadašnjih industrijskih pogona, pa su zgrade podignute u tom periodu imale svoju specifičnu, često originalnu instalaciju kojoj danas treba sanacija ili delimična zamena.",
  },
  {
    question: "Pokrivate li ceo Rakovički lug i okolna naselja?",
    answer:
      "Da, izlazimo na adresu u celoj opštini, uključujući delove bliže Rakovičkom lugu, kao i naselja poput Miljakovca, Kanarevog brda i Cerka koja su deo šire Rakovice.",
  },
  {
    question: "Radite li i u novijim stambenim naseljima Rakovice, ne samo u starijoj gradnji?",
    answer:
      "Da, pored starije radničke gradnje, redovno izlazimo i u novije stambene komplekse koji se poslednjih godina grade u ovom delu grada.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u Rakovici?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar opštine i trenutnog broja intervencija u toku dana.",
  },
];

export default function HausmajstorRakovicaPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Rakovica",
    description: DESCRIPTION,
    slug: "hausmajstor-rakovica",
    area: "Rakovica, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Rakovica", path: "/hausmajstor-rakovica" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Rakovica"
        title={h1}
        intro="Rakovica je opština sa dugom industrijskom istorijom, gde se stara radnička gradnja duž ulice Patrijarha Dimitrija meša sa novijim stambenim naseljima bliže Rakovičkom lugu. Naš tim izlazi na adresu u svim delovima opštine, bez obzira da li je reč o staroj zgradi iz doba fabrika ili novogradnji poslednjih godina."
        image="/24857.jpg"
        imageAlt="Majstor radi u naselju u Rakovici u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora u Rakovici
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
          Šta je specifično za intervencije u Rakovici
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Deo Rakovice razvijao se oko nekadašnjih velikih industrijskih
          pogona, pa zgrade iz tog perioda i danas imaju originalne
          vodovodne i elektro instalacije kojima je, s obzirom na starost,
          često potrebna sanacija. U tim zgradama curenje ili začepljenje
          često pogađa više stanova istovremeno.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Bliže Rakovičkom lugu i u okolnim naseljima poput Miljakovca i
          Kanarevog brda preovlađuje novija, individualna gradnja, gde su
          instalacije raznovrsnije u zavisnosti od toga kada je koji deo
          kuće građen ili dograđivan.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama u Rakovici" />

      <NearbyLocations slug="hausmajstor-rakovica" />

      <CTASection
        title="Hitan kvar u Rakovici?"
        subtitle="Pozovite i majstor stiže na adresu, u svaki deo opštine, 0-24, svakog dana."
      />
    </>
  );
}
