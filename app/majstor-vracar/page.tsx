import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("majstor-vracar");
const DESCRIPTION =
  "Majstor Vračar – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stare stambene zgrade oko Njegoševe i Kalenić pijace. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/majstor-vracar",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Vračar",
    text:
      "Sanacija starih zajedničkih vertikala i zamena slavina i sifona u zgradama oko Njegoševe ulice i Kalenić pijace.",
  },
  {
    slug: "elektricar",
    label: "Električar Vračar",
    text:
      "Popravka kvarova na instalaciji u zgradama iz sredine dvadesetog veka, ugradnja rasvete i modernizacija razvodnih tabli.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Vračar",
    text:
      "Odgušenje sudopere, kade i zajedničkog kanalizacionog voda u gusto naseljenim zgradama bez lifta.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Vračar",
    text:
      "Servis etažnih gasnih kotlova, uobičajenih u starijim zgradama koje nisu priključene na daljinsko grejanje.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li u starim zgradama bez lifta, na visokim spratovima?",
    answer:
      "Da, veliki deo Vračara čine zgrade iz prve polovine i sredine dvadesetog veka bez lifta, pa alat i opremu redovno nosimo peške do gornjih spratova, bez dodatne naplate za pristup.",
  },
  {
    question: "Da li otežano parkiranje na Vračaru utiče na vreme dolaska majstora?",
    answer:
      "Ne značajno – u gusto izgrađenim delovima kao što su Neimar ili okolina Kalenić pijace vozilo često ostavljamo na najbližem mestu i opremu do adrese nosimo peške, tako da to ne produžava intervenciju.",
  },
  {
    question: "Servisirate li etažne kotlove tipične za starije zgrade na Vračaru?",
    answer:
      "Da, mnoge zgrade na Vračaru nisu priključene na daljinsko grejanje već imaju individualne gasne kotlove po stanovima, pa je servis i popravka etažnog grejanja jedna od naših najčešćih intervencija u ovom delu grada.",
  },
  {
    question: "Pokrivate li i deo oko Kalenić pijace i Neimara?",
    answer:
      "Da, izlazimo na adresu u celoj opštini Vračar, uključujući Neimar, okolinu Kalenić pijace i Hrama Svetog Save, kao i uže centralne delove duž Njegoševe ulice.",
  },
];

export default function MajstorVracarPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Vračar",
    description: DESCRIPTION,
    slug: "majstor-vracar",
    area: "Vračar, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Vračar", path: "/majstor-vracar" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Vračar"
        title={h1}
        intro="Vračar je najmanja, ali jedna od najgušće naseljenih opština u Beogradu, sa stambenim zgradama nastalim uglavnom u prvoj polovini i sredinom dvadesetog veka, oko Njegoševe ulice, Kalenić pijace i Hrama Svetog Save. Gusta gradnja i uzane ulice znače da svaka intervencija zahteva planiranje pristupa, na šta smo navikli."
        image="/2150721537.jpg"
        imageAlt="Majstor popravlja instalaciju u staroj zgradi na Vračaru"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Vračaru
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
          Šta je specifično za intervencije na Vračaru
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Zgrade na Vračaru su u proseku starije nego na većini drugih
          opština, a zajedničke vodovodne i kanalizacione vertikale često su
          originalne, iz perioda kada je zgrada podignuta. To znači da
          začepljenje ili curenje na jednom spratu često ima uzrok koji nije
          vidljiv u samom stanu, već u deonici koja je zajednička za više
          suseda, pa je precizna dijagnoza posebno važna.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Kako veći deo Vračara nije priključen na daljinsko grejanje,
          servis individualnih etažnih kotlova pred i tokom grejne sezone
          jedna je od najtraženijih usluga u ovom delu grada. Uz to, gusta
          gradnja i uzane ulice oko Njegoševe i Kalenić pijace znače da
          opremu često nosimo direktno do adrese, bez oslanjanja na
          parkiranje ispred zgrade.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Vračaru" />

      <NearbyLocations slug="majstor-vracar" />

      <CTASection
        title="Hitan kvar na Vračaru?"
        subtitle="Pozovite i majstor stiže na adresu, u svaku zgradu na Vračaru, 0-24, svakog dana."
      />
    </>
  );
}
