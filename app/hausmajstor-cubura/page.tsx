import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-cubura");
const DESCRIPTION =
  "Hausmajstor Čubura – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stare kuće i niže zgrade u ovoj beogradskoj mahali. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-cubura",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Čubura",
    text:
      "Rešavanje curenja u starim prizemnim kućama gde su instalacije često menjane parcijalno tokom decenija.",
  },
  {
    slug: "elektricar",
    label: "Električar Čubura",
    text:
      "Popravka i modernizacija starije instalacije u niskim kućama duž strmih uličica oko pijace Čubura.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Čubura",
    text:
      "Mašinsko odgušenje starih kanalizacionih priključaka i sudopera u prizemnim objektima iz sredine dvadesetog veka.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Čubura",
    text:
      "Servis manjih etažnih kotlova i radijatora u kućama koje su tokom godina prelazile sa čvrstog goriva na gas.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Kuća mi je stara i instalacije su menjane u delovima kroz godine – možete li da se snađete?",
    answer:
      "Da, to je uobičajena situacija na Čuburi – retko postoji jedinstven sistem kroz celu kuću. Prvo pratimo tok postojećih instalacija i procenjujemo koji deo treba sanirati, a koji je već u dobrom stanju.",
  },
  {
    question: "Da li vam uske uličice na Čuburi predstavljaju problem za dolazak?",
    answer:
      "Ne, navikli smo na strme i uske uličice ovog dela grada – vozilo ostavimo na najbližem dostupnom mestu, a alat i opremu nosimo peške do same kuće.",
  },
  {
    question: "Radite li odgušenje starih kanalizacionih vodova tipičnih za ovaj kraj?",
    answer:
      "Da, u prizemnim kućama sa Čubure kanalizacioni priključci su često stariji i uži nego u novogradnji, pa koristimo opremu prilagođenu takvim, manjim prečnicima cevi.",
  },
  {
    question: "Pokrivate li i deo oko pijace Čubura?",
    answer:
      "Da, izlazimo na sve adrese u ovoj mahali, od okoline pijace Čubura do uličica koje se spuštaju ka Vračaru, bez obzira na to koliko su teško dostupne vozilom.",
  },
];

export default function HausmajstorCuburaPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Čubura",
    description: DESCRIPTION,
    slug: "hausmajstor-cubura",
    area: "Čubura, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Čubura", path: "/hausmajstor-cubura" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Čubura"
        title={h1}
        intro="Čubura je jedna od najstarijih beogradskih mahala, poznata po niskim, prizemnim kućama i uskim strmim uličicama koje se spuštaju ka Vračaru. Rad na ovako starim objektima zahteva iskustvo sa instalacijama koje su često menjane parcijalno tokom decenija, pa retko postoji jedinstven, dosledan sistem kroz celu kuću."
        image="/2149334231.jpg"
        imageAlt="Majstor radi na odgušenju u staroj kući na Čuburi"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Čuburi
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
          Šta je specifično za intervencije na Čuburi
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Kuće na Čuburi su najčešće niske, prizemne, građene sredinom
          dvadesetog veka i renovirane u fazama, kako su vlasnici tokom
          godina imali potrebu i sredstva. Zbog toga se na jednoj adresi
          često nalaze i vrlo stare i sasvim nove deonice instalacija, pa je
          pažljiva dijagnostika pre same intervencije posebno važna.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Strme i uske uličice, tipične za ovu mahalu, znače da vozilo nije
          uvek moguće dovesti do same kuće, pa opremu redovno nosimo peške
          poslednjih desetak ili dvadesetak metara. To je nešto na šta smo
          navikli i ne utiče na kvalitet ni brzinu same intervencije.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Čuburi" />

      <NearbyLocations slug="hausmajstor-cubura" />

      <CTASection
        title="Hitan kvar na Čuburi?"
        subtitle="Pozovite i majstor stiže na adresu, u svaki deo ove mahale, 0-24, svakog dana."
      />
    </>
  );
}
