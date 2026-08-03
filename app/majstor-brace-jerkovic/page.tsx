import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Majstor Braće Jerković – hitne intervencije 0-24";
const DESCRIPTION =
  "Majstor Braće Jerković – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za veliko stambeno naselje na Voždovcu. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: "Majstor Braće Jerković 0-24",
  description: DESCRIPTION,
  url: "/majstor-brace-jerkovic",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Braće Jerković",
    text:
      "Sanacija zajedničkih vodovodnih vertikala u zgradama iz sedamdesetih i osamdesetih godina.",
  },
  {
    slug: "elektricar",
    label: "Električar Braće Jerković",
    text:
      "Popravka kvarova na instalaciji i modernizacija razvodnih tabli u ovom gusto naseljenom delu Voždovca.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Braće Jerković",
    text:
      "Odgušenje zajedničkih kanalizacionih vodova koji su, kao i same zgrade, u eksploataciji već decenijama.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Braće Jerković",
    text:
      "Servis i odzračivanje radijatora u starijim zgradama, uz proveru originalnih ventila.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Zgrada je iz sedamdesetih ili osamdesetih – da li radite sanaciju zajedničkih vertikala?",
    answer:
      "Da, veliki broj zgrada u naselju Braće Jerković ima originalne vodovodne i kanalizacione vertikale iz vremena izgradnje, pa je njihova sanacija ili delimična zamena jedna od naših čestih intervencija ovde.",
  },
  {
    question: "Naselje je gusto naseljeno – da li to produžava vreme dolaska?",
    answer:
      "Ne značajno, iako je reč o jednom od gušće naseljenih delova Voždovca. Dobro poznajemo raspored zgrada i ulica, pa se trudimo da adresu pronađemo i stignemo na nju bez nepotrebnog gubljenja vremena.",
  },
  {
    question: "Radite li i u zgradama bez lifta na višim spratovima?",
    answer:
      "Da, deo zgrada u naselju nema lift ili ima stariji lift, pa alat i opremu redovno nosimo peške do gornjih spratova kada je to potrebno.",
  },
  {
    question: "Servisirate li radijatore u ovim starijim zgradama?",
    answer:
      "Da, odzračivanje, zamena ventila i termostatskih glava, kao i saniranje curenja na radijatorima, spadaju u redovne intervencije koje izvodimo u ovom naselju.",
  },
];

export default function MajstorBraceJerkovicPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Braće Jerković",
    description: DESCRIPTION,
    slug: "majstor-brace-jerkovic",
    area: "Braće Jerković, Voždovac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Braće Jerković", path: "/majstor-brace-jerkovic" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Braće Jerković"
        title={TITLE}
        intro="Braće Jerković je jedno od najvećih stambenih naselja na Voždovcu, izgrađeno pretežno tokom sedamdesetih i osamdesetih godina, sa gusto raspoređenim zgradama. Zbog gustine naseljenosti i starosti objekata, zajedničke instalacije su ovde česta tema naših intervencija."
        image="/2204.jpg"
        imageAlt="Električar radi u stambenoj zgradi u naselju Braće Jerković"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora u naselju Braće Jerković
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
          Šta je specifično za intervencije u naselju Braće Jerković
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Naselje je jedno od najgušće naseljenih na Voždovcu, sa velikim
          brojem zgrada podignutih tokom sedamdesetih i osamdesetih godina.
          Njihove originalne vodovodne i kanalizacione vertikale sada su
          stare po nekoliko decenija, pa curenje ili začepljenje često
          pogađa više stanova u istom vertikalnom nizu.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Gusta gradnja i veliki broj stanova po zgradi znače da precizna
          dijagnostika kvara ima poseban značaj, kako bismo tačno utvrdili
          da li je problem u samom stanu ili u zajedničkoj deonici
          instalacije.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama u naselju Braće Jerković" />

      <CTASection
        title="Hitan kvar u naselju Braće Jerković?"
        subtitle="Pozovite i majstor stiže na adresu, u svaku zgradu naselja, 0-24, svakog dana."
      />
    </>
  );
}
