import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("majstor-miljakovac");
const DESCRIPTION =
  "Majstor Miljakovac – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za Miljakovac I, II i III. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/majstor-miljakovac",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Miljakovac",
    text:
      "Sanacija instalacija u porodičnim kućama i stambenim zgradama kroz sve tri celine naselja.",
  },
  {
    slug: "elektricar",
    label: "Električar Miljakovac",
    text:
      "Popravka kvarova na instalaciji i ugradnja rasvete u kućama i nižim stambenim zgradama.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Miljakovac",
    text:
      "Odgušenje sudopere, kade i kanalizacionih priključaka, prilagođeno brdovitom terenu naselja.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Miljakovac",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, uobičajen za mešovitu gradnju ovog naselja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Pokrivate li sve tri celine – Miljakovac I, II i III?",
    answer:
      "Da, izlazimo na adresu u sve tri celine naselja, bez obzira na to koliko su međusobno udaljene ili koliko su strme ulice kojima se do njih dolazi.",
  },
  {
    question: "Ima li problema sa pritiskom vode zbog brdovitog terena?",
    answer:
      "Da, kao i u drugim delovima Rakovice na uzvišenju, na Miljakovcu se povremeno javlja slabiji pritisak vode na višim kotama, što proveravamo pre nego što predložimo rešenje.",
  },
  {
    question: "Radite li i u porodičnim kućama, ne samo u zgradama?",
    answer:
      "Da, Miljakovac je mešavina nižih stambenih zgrada i porodičnih kuća, pa jednako često radimo u oba tipa objekata.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u ovom naselju?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar naselja i trenutnog broja intervencija u toku dana.",
  },
];

export default function MajstorMiljakovacPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Miljakovac",
    description: DESCRIPTION,
    slug: "majstor-miljakovac",
    area: "Miljakovac, Rakovica, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Miljakovac", path: "/majstor-miljakovac" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Miljakovac"
        title={h1}
        intro="Miljakovac, podeljen na tri celine – Miljakovac I, II i III – mirno je, pretežno porodično naselje u okviru Rakovice, na brdovitom terenu sa nižim stambenim zgradama i individualnim kućama. Redovno izlazimo u sve delove naselja, bez obzira na konfiguraciju terena."
        image="/2149334231.jpg"
        imageAlt="Majstor radi na odgušenju u naselju Miljakovac"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Miljakovcu
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
          Šta je specifično za intervencije na Miljakovcu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Naselje je podeljeno na tri celine koje se razlikuju po tipu
          gradnje – od nižih stambenih zgrada do porodičnih kuća sa
          dvorištima. Ta raznovrsnost znači da na terenu radimo i na
          zajedničkim instalacijama u zgradama i na individualnim sistemima
          u kućama.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Brdovit teren, tipičan za ovaj deo Rakovice, povremeno utiče na
          pritisak vode, posebno u delovima naselja na višim kotama, što je
          nešto na šta redovno obraćamo pažnju pre same intervencije.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Miljakovcu" />

      <NearbyLocations slug="majstor-miljakovac" />

      <CTASection
        title="Hitan kvar na Miljakovcu?"
        subtitle="Pozovite i majstor stiže na adresu, u sve tri celine naselja, 0-24, svakog dana."
      />
    </>
  );
}
