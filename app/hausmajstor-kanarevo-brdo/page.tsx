import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Hausmajstor Kanarevo brdo – majstor za hitne intervencije 0-24";
const DESCRIPTION =
  "Hausmajstor Kanarevo brdo – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za porodične kuće uz Rakovički lug. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: "Hausmajstor Kanarevo brdo 0-24",
  description: DESCRIPTION,
  url: "/hausmajstor-kanarevo-brdo",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Kanarevo brdo",
    text:
      "Sanacija curenja i zamena starijih vodovodnih instalacija u individualnim kućama ovog mirnog naselja.",
  },
  {
    slug: "elektricar",
    label: "Električar Kanarevo brdo",
    text:
      "Popravka kvarova na instalaciji i modernizacija elektro sistema u porodičnim kućama.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Kanarevo brdo",
    text:
      "Odgušenje sudopere, kade i odvodnih sistema, prilagođeno brdovitom terenu blizu Rakovičkog luga.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Kanarevo brdo",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, tipičan za individualnu gradnju naselja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Da li poznajete uske uličice i strme delove Kanarevog brda?",
    answer:
      "Da, redovno izlazimo na adrese u ovom naselju, gde su ulice često uske i strme, pa opremu po potrebi nosimo peške do same kuće.",
  },
  {
    question: "Radite li na starijim porodičnim kućama sa dotrajalim instalacijama?",
    answer:
      "Da, veći deo Kanarevog brda čine kuće izgrađene tokom više decenija, pa imamo iskustva sa starijim vodovodnim i elektro sistemima kojima je potrebna sanacija ili delimična zamena.",
  },
  {
    question: "Pokrivate li i delove naselja bliže Rakovičkom lugu?",
    answer:
      "Da, izlazimo na adresu u celom naselju, uključujući delove bliže Rakovičkom lugu i granici sa Cerkom i Miljakovcem.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u ovom delu Rakovice?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar naselja i trenutnog broja intervencija u toku dana.",
  },
];

export default function HausmajstorKanarevoBrdoPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Kanarevo brdo",
    description: DESCRIPTION,
    slug: "hausmajstor-kanarevo-brdo",
    area: "Kanarevo brdo, Rakovica, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Kanarevo brdo", path: "/hausmajstor-kanarevo-brdo" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Kanarevo brdo"
        title={TITLE}
        intro="Kanarevo brdo je mirno, pretežno porodično naselje u okviru Rakovice, na brdovitom terenu blizu Rakovičkog luga. Kuće su građene postepeno tokom decenija, pa se na terenu često susrećemo sa instalacijama različite starosti, čak i u okviru iste kuće."
        image="/2149176716.jpg"
        imageAlt="Majstor radi u porodičnoj kući na Kanarevom brdu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Kanarevom brdu
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
          Šta je specifično za intervencije na Kanarevom brdu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Kuće na Kanarevom brdu građene su uglavnom individualno, tokom
          više decenija, pa se kvalitet i starost instalacija razlikuju od
          adrese do adrese. Blizina Rakovičkog luga i zeleni, brdoviti
          karakter naselja znače da su dvorišta često veća, a s njima i
          spoljne vodovodne instalacije koje takođe servisiramo.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Uske i strme uličice tipične za ovaj deo Rakovice ponekad otežavaju
          pristup vozilom, pa smo navikli da opremu nosimo peške poslednji
          deo puta, bez uticaja na kvalitet same intervencije.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Kanarevom brdu" />

      <CTASection
        title="Hitan kvar na Kanarevom brdu?"
        subtitle="Pozovite i majstor stiže na adresu, u svaku kuću u naselju, 0-24, svakog dana."
      />
    </>
  );
}
