import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("majstor-vozdovac");
const DESCRIPTION =
  "Majstor Voždovac – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za centralni deo opštine, od starog seoskog jezgra do novije gradnje. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/majstor-vozdovac",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Voždovac",
    text:
      "Sanacija starijih instalacija u kućama starog seoskog jezgra i ugradnja novih sistema u savremenijim zgradama.",
  },
  {
    slug: "elektricar",
    label: "Električar Voždovac",
    text:
      "Popravka kvarova na instalaciji i modernizacija elektro sistema u centralnom delu opštine.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Voždovac",
    text:
      "Odgušenje sudopere, kade i kanalizacionih vodova, i u starijim kućama i u novijim stambenim zgradama.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Voždovac",
    text:
      "Servis centralnog i etažnog grejanja, u zavisnosti od tipa objekta u centralnom delu opštine.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li u starijim kućama u nekadašnjem seoskom jezgru Voždovca?",
    answer:
      "Da, centralni deo opštine i danas čuva tragove svog seoskog porekla kroz starije kuće sa specifičnim, često originalnim instalacijama, na kojima redovno radimo.",
  },
  {
    question: "Pokrivate li i deo naselja bliži Autokomandi?",
    answer:
      "Da, izlazimo na adresu u celom centralnom delu opštine, uključujući delove bliže Autokomandi i drugim susednim naseljima Voždovca.",
  },
  {
    question: "Radite li i u novijim stambenim zgradama u ovom delu opštine?",
    answer:
      "Da, pored starije gradnje, redovno radimo i u novijim stambenim objektima izgrađenim poslednjih godina u centralnom delu Voždovca.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv na Voždovcu?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar opštine i trenutnog broja intervencija u toku dana.",
  },
];

export default function MajstorVozdovacPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Voždovac",
    description: DESCRIPTION,
    slug: "majstor-vozdovac",
    area: "Voždovac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Voždovac", path: "/majstor-vozdovac" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Voždovac"
        title={h1}
        intro="Centralni deo opštine Voždovac čuva tragove svog seoskog porekla kroz starije kuće, dok se u okolini razvijaju noviji stambeni objekti i naselja poput Autokomande i Medakovića. Naš tim izlazi na adresu u svim delovima opštine, bez obzira na tip i starost objekta."
        image="/hero.jpg"
        imageAlt="Majstor radi u kući na Voždovcu u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Voždovcu
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
          Šta je specifično za intervencije na Voždovcu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Nekadašnje seosko jezgro opštine i danas čine kuće sa
          instalacijama koje su, u zavisnosti od vlasnika, menjane
          delimično kroz decenije. To znači da retko postoji jedinstven
          sistem kroz celu kuću, pa je procena stanja pre intervencije
          uvek prvi korak.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Opština se poslednjih decenija značajno razvila, pa danas
          obuhvata i prometnije delove poput Autokomande i velika naselja
          kao što su Braće Jerković i Medaković, gde su instalacije
          novijeg tipa, ali podjednako podložne kvarovima.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Voždovcu" />

      <NearbyLocations slug="majstor-vozdovac" />

      <CTASection
        title="Hitan kvar na Voždovcu?"
        subtitle="Pozovite i majstor stiže na adresu, u svaki deo opštine, 0-24, svakog dana."
      />
    </>
  );
}
