import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-vidikovac");
const DESCRIPTION =
  "Hausmajstor Vidikovac – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stambene blokove na uzvišenju iznad Kneza Višeslava. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-vidikovac",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Vidikovac",
    text:
      "Sanacija zajedničkih vertikala u zgradama iz sedamdesetih i osamdesetih i rešavanje problema sa pritiskom vode.",
  },
  {
    slug: "elektricar",
    label: "Električar Vidikovac",
    text:
      "Popravka kvarova na instalaciji i modernizacija razvodnih tabli u stambenim blokovima na uzvišenju.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Vidikovac",
    text:
      "Odgušenje zajedničkih kanalizacionih vodova koji su, kao i same zgrade, u eksploataciji već decenijama.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Vidikovac",
    text:
      "Servis i odzračivanje radijatora u starijim blokovima, uz proveru originalnih ventila.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Ima li problema sa pritiskom vode na Vidikovcu zbog nadmorske visine?",
    answer:
      "Da, s obzirom da je naselje izgrađeno na uzvišenju odakle se pruža pogled na grad, po čemu je i dobilo ime, na višim spratovima ponekad je pritisak vode slabiji, što proveravamo i po potrebi predlažemo rešenje.",
  },
  {
    question: "Zgrade su starije, iz sedamdesetih i osamdesetih – radite li sanaciju zajedničkih instalacija?",
    answer:
      "Da, originalne vodovodne i kanalizacione vertikale u ovim zgradama su sada stare četiri do pet decenija, pa je njihova sanacija ili delimična zamena jedna od čestih intervencija u naselju.",
  },
  {
    question: "Pokrivate li ceo Vidikovac do granice sa Rakovicom?",
    answer:
      "Da, izlazimo na adresu u celom naselju, uključujući delove bliže Rakovici i Kneza Višeslava, bez obzira na to o kom bloku je reč.",
  },
  {
    question: "Servisirate li i etažno grejanje u pojedinim stanovima?",
    answer:
      "Da, pored centralnog grejanja u starijim zgradama, radimo i servis etažnih kotlova tamo gde su stanovi naknadno prešli na individualno grejanje.",
  },
];

export default function HausmajstorVidikovacPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Vidikovac",
    description: DESCRIPTION,
    slug: "hausmajstor-vidikovac",
    area: "Vidikovac, Čukarica, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Vidikovac", path: "/hausmajstor-vidikovac" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Vidikovac"
        title={h1}
        intro="Vidikovac je naselje na granici Čukarice i Rakovice, podignuto na uzvišenju iznad Kneza Višeslava odakle je dobilo i ime. Stambeni blokovi iz sedamdesetih i osamdesetih godina danas su stari po nekoliko decenija, pa su zajedničke instalacije sve češće predmet naših intervencija."
        image="/2204.jpg"
        imageAlt="Električar radi u stambenom bloku na Vidikovcu u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Vidikovcu
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
          Šta je specifično za intervencije na Vidikovcu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Zgrade na Vidikovcu podignute su tokom sedamdesetih i osamdesetih
          godina na uzvišenju sa pogledom na grad, po čemu je naselje i
          dobilo ime. Ta nadmorska visina znači da se pritisak vode na
          višim spratovima često razlikuje od onog u nižim delovima
          Čukarice, što je nešto što redovno proveravamo pre same
          intervencije.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Originalne zajedničke vertikale u ovim zgradama sada su stare
          nekoliko decenija, pa curenje ili začepljenje često nema jasan
          uzrok u samom stanu, već u deonici koja je zajednička za više
          suseda – zbog toga dijagnostici uvek posvećujemo posebnu pažnju.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Vidikovcu" />

      <NearbyLocations slug="hausmajstor-vidikovac" />

      <CTASection
        title="Hitan kvar na Vidikovcu?"
        subtitle="Pozovite i majstor stiže na adresu, u svaki stambeni blok naselja, 0-24."
      />
    </>
  );
}
