import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Majstor Veliki Mokri Lug – hitne intervencije 0-24";
const DESCRIPTION =
  "Majstor Veliki Mokri Lug – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za porodične kuće na obodu Zvezdare. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: "Majstor Veliki Mokri Lug 0-24",
  description: DESCRIPTION,
  url: "/majstor-veliki-mokri-lug",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Veliki Mokri Lug",
    text:
      "Sanacija curenja i zamena starijih vodovodnih instalacija u porodičnim kućama ovog dela Zvezdare.",
  },
  {
    slug: "elektricar",
    label: "Električar Veliki Mokri Lug",
    text:
      "Popravka kvarova na instalaciji i modernizacija elektro sistema u individualnim kućama.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Veliki Mokri Lug",
    text:
      "Odgušenje sudopere, kade i odvodnih sistema, uključujući i starije priključke tipične za ovaj kraj.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Veliki Mokri Lug",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, uobičajen za porodičnu gradnju naselja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Da li izlazite i do udaljenijih delova Velikog Mokrog Luga prema obodu grada?",
    answer:
      "Da, izlazimo na adresu u celom naselju, uključujući udaljenije delove prema obodu Zvezdare, bez obzira na to koliko je kuća udaljena od glavnih saobraćajnica.",
  },
  {
    question: "Radite li na starijim porodičnim kućama sa dotrajalim instalacijama?",
    answer:
      "Da, veći deo Velikog Mokrog Luga čine kuće izgrađene tokom više decenija, pa imamo iskustva sa starijim vodovodnim i elektro sistemima kojima je potrebna sanacija ili delimična zamena.",
  },
  {
    question: "Pokrivate li i granicu prema Malom Mokrom Lugu?",
    answer:
      "Da, izlazimo na adresu u oba naselja, bez obzira na to koliko su međusobno udaljena ili koliko je teren strm.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u ovom delu Zvezdare?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar naselja i trenutnog broja intervencija u toku dana.",
  },
];

export default function MajstorVelikiMokriLugPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Veliki Mokri Lug",
    description: DESCRIPTION,
    slug: "majstor-veliki-mokri-lug",
    area: "Veliki Mokri Lug, Zvezdara, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Veliki Mokri Lug", path: "/majstor-veliki-mokri-lug" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Veliki Mokri Lug"
        title={TITLE}
        intro="Veliki Mokri Lug je mirno naselje na obodu Zvezdare, sa porodičnim kućama na brdovitom terenu, nešto udaljenije od centra opštine nego susedni Mali Mokri Lug. Izlazimo na adresu u svim delovima naselja, bez obzira na udaljenost od glavnih saobraćajnica."
        image="/2150721537.jpg"
        imageAlt="Majstor popravlja instalaciju u kući u Velikom Mokrom Lugu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora u Velikom Mokrom Lugu
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
          Šta je specifično za intervencije u Velikom Mokrom Lugu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Naselje je, kao i susedni Mali Mokri Lug, decenijama građeno kroz
          individualnu izgradnju, ali je u proseku nešto udaljenije od
          centra Zvezdare, prema samom obodu grada. To znači da su pojedine
          kuće ovde starije, sa instalacijama koje nisu menjane duži niz
          godina.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Brdovit teren povremeno utiče na pritisak vode, posebno u kućama
          na višim kotama, a udaljenost od glavnih saobraćajnica znači da
          intervencije ovde planiramo tako da izađemo u razumnom roku bez
          obzira na lokaciju.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama u Velikom Mokrom Lugu" />

      <CTASection
        title="Hitan kvar u Velikom Mokrom Lugu?"
        subtitle="Pozovite i majstor stiže na adresu, u svaku kuću u naselju, 0-24, svakog dana."
      />
    </>
  );
}
