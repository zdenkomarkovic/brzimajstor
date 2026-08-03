import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Hausmajstor Karaburma – majstor za hitne intervencije 0-24";
const DESCRIPTION =
  "Hausmajstor Karaburma – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stambene blokove i kuće na Karaburmi. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: "Hausmajstor Karaburma 0-24",
  description: DESCRIPTION,
  url: "/hausmajstor-karaburma",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Karaburma",
    text:
      "Sanacija curenja i zamena starih vodovodnih cevi u zgradama iz sedamdesetih duž Mije Kovačevića i Marijane Gregoran.",
  },
  {
    slug: "elektricar",
    label: "Električar Karaburma",
    text:
      "Zamena stare aluminijumske instalacije, ugradnja osigurača i rasvete, i u starim blokovima i u kućama prema Dunavu.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Karaburma",
    text:
      "Odgušenje zajedničkog kanalizacionog voda u zgradi kada je pogođeno više stanova, kao i odgušenje u individualnim kućama.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Karaburma",
    text:
      "Servis radijatora i etažnih kotlova, u zavisnosti od toga da li je zgrada na centralnom ili individualnom grejanju.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Da li radite odgušenje zajedničkog kanalizacionog voda u zgradi?",
    answer:
      "Da, u starijim blokovima na Karaburmi čest je slučaj da je začepljenje na zajedničkom vertikalnom vodu, pa problem oseti više stanova odjednom. Imamo opremu za odgušenje i takvih deonica, ne samo pojedinačnih sifona.",
  },
  {
    question: "Imam aluminijumsku elektro instalaciju iz sedamdesetih, da li je menjate?",
    answer:
      "Da, u zgradama izgrađenim sedamdesetih i osamdesetih godina na Karaburmi aluminijumska žica je bila standard. Radimo i lokalnu sanaciju problematičnih spojeva i kompletnu zamenu instalacije bakarnom, u zavisnosti od stanja.",
  },
  {
    question: "Pokrivate li i deo prema Višnjičkoj banji i Kotežu?",
    answer:
      "Da, pored stambenih blokova duž Mije Kovačevića, redovno izlazimo i u individualne kuće prema Višnjičkoj banji i Kotežu, gde se češće javljaju vodoinstalaterski kvarovi tipični za stariju porodičnu gradnju.",
  },
  {
    question: "Da li ste dostupni i van radnog vremena?",
    answer:
      "Da, majstor za Karaburmu dostupan je 0-24, uključujući večernje sate, vikende i praznike, za sve hitne slučajeve poput curenja vode, kvara na struji ili začepljenja kanalizacije.",
  },
];

export default function HausmajstorKaraburmaPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Karaburma",
    description: DESCRIPTION,
    slug: "hausmajstor-karaburma",
    area: "Karaburma, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Karaburma", path: "/hausmajstor-karaburma" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Karaburma"
        title={TITLE}
        intro="Karaburma je deo Palilule uz samu obalu Dunava, poznata po stambenim blokovima iz sedamdesetih i osamdesetih godina duž Mije Kovačevića i Marijane Gregoran, ali i po porodičnim kućama prema Višnjičkoj banji i Kotežu. Redovno izlazimo i u stare zgrade sa zajedničkim instalacijama i u individualne kuće bliže Dunavu, gde se javljaju sasvim različiti tipovi kvarova."
        image="/2204.jpg"
        imageAlt="Električar radi na instalaciji u stambenoj zgradi na Karaburmi"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Karaburmi
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
          Šta je specifično za intervencije na Karaburmi
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Stambeni blokovi Karaburme I i II građeni su sedamdesetih i
          osamdesetih godina, u vreme kada su vodovodne cevi najčešće bile
          čelične, a elektro instalacija aluminijumska. Danas su to dve
          najčešće kategorije kvarova na koje nailazimo – korodirane cevi
          koje pucaju ili cure, i stariji elektro spojevi koji vremenom
          postaju nesigurni i zahtevaju delimičnu ili potpunu zamenu.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Bliže Dunavu i prema Višnjičkoj banji, gde preovlađuje individualna
          gradnja, problemi su drugačiji – vlaga u prizemnim prostorijama,
          stariji sistemi grejanja i vodovodne instalacije koje nisu menjane
          decenijama. Bez obzira o kom delu Karaburme je reč, dolazimo
          opremljeni za oba tipa terena.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Karaburmi" />

      <CTASection
        title="Hitan kvar na Karaburmi?"
        subtitle="Pozovite i majstor stiže na adresu, i u stambenim blokovima i u individualnim kućama, 0-24."
      />
    </>
  );
}
