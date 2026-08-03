import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Hausmajstor Čukarica – majstor za hitne intervencije 0-24";
const DESCRIPTION =
  "Hausmajstor Čukarica – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja od Požeške ulice do naselja bliže Adi Ciganliji. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: "Hausmajstor Čukarica 0-24",
  description: DESCRIPTION,
  url: "/hausmajstor-cukarica",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Čukarica",
    text:
      "Sanacija starih vodovodnih instalacija duž Požeške ulice i ugradnja novih sistema u naseljima bliže Adi Ciganliji.",
  },
  {
    slug: "elektricar",
    label: "Električar Čukarica",
    text:
      "Popravka kvarova na instalaciji u starijoj radničkoj gradnji i kompletno ožičenje u novijim stambenim objektima.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Čukarica",
    text:
      "Odgušenje sudopere, kade i kanalizacionih vodova, prilagođeno i brdovitom terenu Čukaričke padine.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Čukarica",
    text:
      "Servis centralnog i etažnog grejanja, u zavisnosti od toga da li je objekat starije ili novije gradnje.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li u starijim radničkim naseljima duž Požeške ulice?",
    answer:
      "Da, deo Čukarice duž Požeške ulice čine zgrade i kuće iz sredine dvadesetog veka, izgrađene za radnike obližnjih fabrika, pa redovno radimo na starijim instalacijama tipičnim za taj period.",
  },
  {
    question: "Ima li problema sa pritiskom vode na Čukaričkoj padini zbog terena?",
    answer:
      "Da, brdovit teren Čukaričke padine ume da utiče na pritisak vode, posebno u kućama na višim delovima, što proveravamo i po potrebi predlažemo rešenje.",
  },
  {
    question: "Pokrivate li i noviju gradnju bliže Adi Ciganliji?",
    answer:
      "Da, izlazimo podjednako u stariju gradnju bliže centru opštine i u novije stambene komplekse i kuće u naseljima prema Adi Ciganliji.",
  },
  {
    question: "Servisirate li i poslovne ili manje industrijske objekte u ovom delu grada?",
    answer:
      "Da, s obzirom na industrijsku prošlost Čukarice, radimo i u poslovnim i manjim industrijskim objektima, ne samo u stambenim zgradama i kućama.",
  },
];

export default function HausmajstorCukaricaPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Čukarica",
    description: DESCRIPTION,
    slug: "hausmajstor-cukarica",
    area: "Čukarica, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Čukarica", path: "/hausmajstor-cukarica" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Čukarica"
        title={TITLE}
        intro="Čukarica je velika opština sa dugom industrijskom istorijom, gde se stara radnička gradnja duž Požeške ulice i Čukaričke padine meša sa novijim stambenim naseljima bliže Adi Ciganliji. Zbog te raznovrsnosti, na terenu se susrećemo i sa vrlo starim instalacijama i sa savremenim sistemima u novogradnji."
        image="/2149176716.jpg"
        imageAlt="Majstor servisira kućni aparat u naselju na Čukarici"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Čukarici
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
          Šta je specifično za intervencije na Čukarici
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Duž Požeške ulice i Čukaričke padine i danas stoji radnička
          gradnja iz sredine dvadesetog veka, podignuta u vreme kada su
          obližnje fabrike bile glavni poslodavac u ovom delu grada. Takve
          zgrade imaju starije, često originalne instalacije koje zahtevaju
          iskustvo u radu sa sistemima tog perioda.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Bliže Adi Ciganliji, gde se opština poslednjih decenija najviše
          širi, preovlađuje novija gradnja sa savremenim instalacijama, dok
          brdovit teren Čukaričke padine povremeno utiče na pritisak vode u
          kućama na višim kotama.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Čukarici" />

      <CTASection
        title="Hitan kvar na Čukarici?"
        subtitle="Pozovite i majstor stiže na adresu, od Požeške do Ade Ciganlije, 0-24, svakog dana."
      />
    </>
  );
}
