import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Majstor Mitrovo brdo – hitne intervencije 0-24";
const DESCRIPTION =
  "Majstor Mitrovo brdo – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za porodične kuće u ovom mirnom naselju na Voždovcu. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: "Majstor Mitrovo brdo 0-24",
  description: DESCRIPTION,
  url: "/majstor-mitrovo-brdo",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Mitrovo brdo",
    text:
      "Sanacija curenja i usklađivanje starijih i naknadno ugrađenih instalacija u kućama građenim u etapama.",
  },
  {
    slug: "elektricar",
    label: "Električar Mitrovo brdo",
    text:
      "Popravka kvarova na instalaciji i modernizacija elektro sistema u porodičnim kućama naselja.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Mitrovo brdo",
    text:
      "Odgušenje sudopere, kade i odvodnih sistema, prilagođeno brdovitom terenu naselja.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Mitrovo brdo",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, uobičajen za individualnu gradnju ovog kraja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Kuća je građena u više etapa – možete li da uskladite staru i noviju instalaciju?",
    answer:
      "Da, to je česta situacija na Mitrovom brdu gde su porodice tokom decenija dograđivale kuće po delovima. Prvo procenjujemo stanje postojećih instalacija, a zatim predlažemo najbolje rešenje.",
  },
  {
    question: "Ima li problema sa pritiskom vode zbog brdovitog terena?",
    answer:
      "Da, kao i u drugim brdovitim delovima Voždovca, na Mitrovom brdu se povremeno javlja slabiji pritisak vode na višim kotama, što proveravamo pre nego što predložimo rešenje.",
  },
  {
    question: "Pokrivate li ceo kraj bez obzira na udaljenost od glavnih ulica?",
    answer:
      "Da, izlazimo na adresu u celom naselju, bez obzira na to koliko je kuća udaljena od glavnih saobraćajnica.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv na Mitrovom brdu?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar naselja i trenutnog broja intervencija u toku dana.",
  },
];

export default function MajstorMitrovoBrdoPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Mitrovo brdo",
    description: DESCRIPTION,
    slug: "majstor-mitrovo-brdo",
    area: "Mitrovo brdo, Voždovac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Mitrovo brdo", path: "/majstor-mitrovo-brdo" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Mitrovo brdo"
        title={TITLE}
        intro="Mitrovo brdo je mirno, pretežno porodično naselje na Voždovcu, sa individualnim kućama na brdovitom terenu. Kraj se decenijama širio kroz individualnu izgradnju, pa se na terenu često susrećemo sa instalacijama različite starosti, čak i u okviru iste kuće."
        image="/24857.jpg"
        imageAlt="Majstor radi u porodičnoj kući na Mitrovom brdu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Mitrovom brdu
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
          Šta je specifično za intervencije na Mitrovom brdu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Kuće na Mitrovom brdu građene su najvećim delom postepeno, tokom
          više decenija, pa se u jednoj kući često nalaze i starije i sasvim
          nove deonice vodovodnih i elektro instalacija. Procena stanja pre
          same intervencije zato uvek prethodi konkretnoj popravci.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Brdovit teren naselja povremeno utiče na pritisak vode, posebno u
          kućama na višim kotama, a uske uličice ponekad znače da opremu
          nosimo peške poslednji deo puta, bez uticaja na kvalitet
          intervencije.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Mitrovom brdu" />

      <CTASection
        title="Hitan kvar na Mitrovom brdu?"
        subtitle="Pozovite i majstor stiže na adresu, u svaku kuću u naselju, 0-24, svakog dana."
      />
    </>
  );
}
