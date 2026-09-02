import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("majstor-kumodraz");
const DESCRIPTION =
  "Majstor Kumodraž – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za Kumodraž I i II, na putu ka Avali. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/majstor-kumodraz",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Kumodraž",
    text:
      "Sanacija curenja i podešavanje pritiska vode koji brdovit teren Kumodraža I i II često čini nestabilnim.",
  },
  {
    slug: "elektricar",
    label: "Električar Kumodraž",
    text:
      "Popravka kvarova na instalaciji i ugradnja rasvete u porodičnim kućama ovog naselja.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Kumodraž",
    text:
      "Odgušenje sudopere, kade i odvodnih sistema u individualnim kućama, prilagođeno terenu na putu ka Avali.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Kumodraž",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, tipičan za porodičnu gradnju naselja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Pokrivate li i Kumodraž I i Kumodraž II?",
    answer:
      "Da, izlazimo na adresu u oba dela naselja, bez obzira na to koliko su međusobno udaljeni ili koliko je teren strm.",
  },
  {
    question: "Ima li problema sa pritiskom vode zbog brdovitog terena na putu ka Avali?",
    answer:
      "Da, brdovit teren ovog dela Voždovca ume da utiče na pritisak vode, posebno u kućama na višim kotama, što proveravamo pre nego što predložimo rešenje.",
  },
  {
    question: "Radite li na starijim porodičnim kućama sa dotrajalim instalacijama?",
    answer:
      "Da, veći deo Kumodraža čine kuće izgrađene tokom više decenija, pa imamo iskustva sa starijim vodovodnim i elektro sistemima kojima je potrebna sanacija.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u Kumodražu?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar naselja i trenutnog broja intervencija u toku dana.",
  },
];

export default function MajstorKumodrazPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Kumodraž",
    description: DESCRIPTION,
    slug: "majstor-kumodraz",
    area: "Kumodraž, Voždovac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Kumodraž", path: "/majstor-kumodraz" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Kumodraž"
        title={h1}
        intro="Kumodraž, podeljen na Kumodraž I i II, mirno je naselje porodičnih kuća na brdovitom terenu Voždovca, na putu prema Avali. Uske i strme ulice zahtevaju opremu prilagođenu terenu koji nije uvek lako pristupačan, a mi na to računamo pri svakoj intervenciji."
        image="/2150721537.jpg"
        imageAlt="Majstor popravlja instalaciju u kući u Kumodražu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora u Kumodražu
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
          Šta je specifično za intervencije u Kumodražu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Kumodraž I i II decenijama su se širili kroz individualnu
          izgradnju na brdovitom terenu, pa se na jednoj adresi često
          nalaze i starije i naknadno ugrađene instalacije. Konfiguracija
          terena na putu ka Avali povremeno utiče na pritisak vode u kućama
          na višim kotama.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Uske i strme uličice, tipične za ovaj deo Voždovca, znače da
          vozilo nije uvek moguće dovesti do same kuće, pa opremu redovno
          nosimo peške poslednji deo puta, bez uticaja na kvalitet
          intervencije.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama u Kumodražu" />

      <NearbyLocations slug="majstor-kumodraz" />

      <CTASection
        title="Hitan kvar u Kumodražu?"
        subtitle="Pozovite i majstor stiže na adresu, u Kumodraž I ili II, 0-24, svakog dana."
      />
    </>
  );
}
