import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Hausmajstor Banovo brdo – majstor za hitne intervencije 0-24";
const DESCRIPTION =
  "Hausmajstor Banovo brdo – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za porodične kuće duž Kneza Višeslava, blizu Ade Ciganlije. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: "Hausmajstor Banovo brdo 0-24",
  description: DESCRIPTION,
  url: "/hausmajstor-banovo-brdo",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Banovo brdo",
    text:
      "Popravka curenja i usklađivanje starijih i naknadno ugrađenih vodovodnih instalacija u kućama građenim u etapama.",
  },
  {
    slug: "elektricar",
    label: "Električar Banovo brdo",
    text:
      "Provera i modernizacija elektro instalacije u porodičnim kućama duž Kneza Višeslava.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Banovo brdo",
    text:
      "Odgušenje sudopere, kade i kanalizacionih priključaka u individualnim kućama ovog mirnog naselja.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Banovo brdo",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, uobičajen za porodičnu gradnju ovog kraja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Kuća je građena u etapama pa imamo staru i noviju instalaciju istovremeno – možete li to da uskladite?",
    answer:
      "Da, to je česta situacija na Banovom brdu gde su porodice tokom decenija dograđivale i renovirale kuće po delovima. Prvo procenjujemo stanje postojećih instalacija, a zatim predlažemo kako ih najbolje uskladiti ili delimično zameniti.",
  },
  {
    question: "Pokrivate li ceo kraj duž Kneza Višeslava?",
    answer:
      "Da, izlazimo na adresu u celom naselju, od dela bližeg Čukarici do okoline Kneza Višeslava i Ade Ciganlije.",
  },
  {
    question: "Radite li i za lokale bliže Adi Ciganliji?",
    answer:
      "Da, pored porodičnih kuća, radimo i sa manjim ugostiteljskim i poslovnim objektima u okolini Ade Ciganlije, gde je brza intervencija često prioritet zbog rada sa gostima.",
  },
  {
    question: "Da li ste dostupni i vikendom, kad je najviše ljudi kod kuće?",
    answer:
      "Da, dostupni smo 0-24, svakog dana u nedelji, uključujući vikende i praznike, za sve hitne slučajeve poput curenja vode ili kvara na struji.",
  },
];

export default function HausmajstorBanovoBrdoPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Banovo brdo",
    description: DESCRIPTION,
    slug: "hausmajstor-banovo-brdo",
    area: "Banovo brdo, Čukarica, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Banovo brdo", path: "/hausmajstor-banovo-brdo" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Banovo brdo"
        title={TITLE}
        intro="Banovo brdo je mirno, pretežno porodično naselje u okviru Čukarice, sa individualnim kućama i nižim stambenim zgradama duž Kneza Višeslava, nadomak Ade Ciganlije. Kraj je izgrađivan postepeno tokom decenija, pa se na terenu često susrećemo sa kombinacijom starijih i naknadno renoviranih instalacija u istoj kući."
        image="/hero.jpg"
        imageAlt="Majstor radi u porodičnoj kući na Banovom brdu u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Banovom brdu
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
          Šta je specifično za intervencije na Banovom brdu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Kuće na Banovom brdu najčešće su građene postepeno, tokom više
          decenija, kako su vlasnici imali potrebu i sredstva za dogradnju
          ili renoviranje. Zbog toga se u jednoj kući često nalaze i starije
          i sasvim nove deonice instalacija, pa je procena stanja pre same
          intervencije uvek prvi korak.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Blizina Ade Ciganlije znači da u ovom delu grada, pored porodičnih
          kuća, radimo i sa manjim ugostiteljskim objektima, dok je sam kraj,
          zahvaljujući mirnim ulicama i porodičnoj atmosferi, mesto gde su
          intervencije često planirane unapred, a ne isključivo hitne.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Banovom brdu" />

      <CTASection
        title="Hitan kvar na Banovom brdu?"
        subtitle="Pozovite i majstor stiže na adresu, u svaku kuću u ovom naselju, 0-24, svakog dana."
      />
    </>
  );
}
