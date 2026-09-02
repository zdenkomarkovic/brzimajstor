import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("majstor-bezanijska-kosa");
const DESCRIPTION =
  "Majstor Bežanijska kosa – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stambene blokove iz osamdesetih. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/majstor-bezanijska-kosa",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Bežanijska kosa",
    text:
      "Sanacija zajedničkih vodovodnih vertikala u zgradama starim četiri decenije i rešavanje problema sa pritiskom vode.",
  },
  {
    slug: "elektricar",
    label: "Električar Bežanijska kosa",
    text:
      "Popravka kvarova na instalaciji u stambenim blokovima i modernizacija razvodnih tabli iz osamdesetih godina.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Bežanijska kosa",
    text:
      "Odgušenje zajedničkih kanalizacionih vodova koji su, kao i cela zgrada, u eksploataciji već četrdesetak godina.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Bežanijska kosa",
    text:
      "Servis i odzračivanje radijatora u starijim blokovima, uz proveru ventila koji su često originalni.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Zgrada je iz osamdesetih i cevi su originalne – da li radite sanaciju zajedničkih vertikala?",
    answer:
      "Da, veliki broj zgrada na Bežanijskoj kosi ima originalne vodovodne i kanalizacione vertikale iz vremena izgradnje, pa je sanacija ili delimična zamena takvih deonica jedna od naših čestih intervencija u ovom naselju.",
  },
  {
    question: "Ima li problema sa pritiskom vode na višim spratovima zbog nadmorske visine naselja?",
    answer:
      "Da, s obzirom da je Bežanijska kosa izgrađena na uzvišenju, na višim spratovima ponekad je pritisak vode slabiji nego u nižim delovima Novog Beograda, što proveravamo i po potrebi predlažemo rešenje.",
  },
  {
    question: "Da li pokrivate i deo bliže granici sa Zemunom?",
    answer:
      "Da, izlazimo na adresu u celom naselju, uključujući delove bliže Zemunu, bez obzira na to o kom bloku ili ulici je reč.",
  },
  {
    question: "Servisirate li radijatore u ovim starijim blokovima?",
    answer:
      "Da, odzračivanje, zamena ventila i termostatskih glava, kao i saniranje curenja na radijatorima, spadaju u redovne intervencije koje izvodimo u stambenim blokovima ovog naselja.",
  },
];

export default function MajstorBezanijskaKosaPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Bežanijska kosa",
    description: DESCRIPTION,
    slug: "majstor-bezanijska-kosa",
    area: "Bežanijska kosa, Novi Beograd, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Bežanijska kosa", path: "/majstor-bezanijska-kosa" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Bežanijska kosa"
        title={h1}
        intro="Bežanijska kosa je brdovito naselje na zapadnom delu Novog Beograda, izgrađeno pretežno tokom osamdesetih godina, sa visokim stambenim blokovima na samom uzvišenju odakle se pruža pogled na okolinu. Zgrade su sada stare četiri decenije, pa su zajedničke vodovodne i kanalizacione vertikale, kao i liftovi, sve češće predmet intervencija."
        image="/2204.jpg"
        imageAlt="Električar u stambenom bloku na Bežanijskoj kosi"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Bežanijskoj kosi
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
          Šta je specifično za intervencije na Bežanijskoj kosi
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Stambeni blokovi na Bežanijskoj kosi izgrađeni su uglavnom
          osamdesetih godina dvadesetog veka i danas su stari četiri
          decenije. To znači da su originalne vodovodne i kanalizacione
          vertikale, kao i deo elektro instalacije, sve bliže kraju svog
          radnog veka, pa curenje ili začepljenje često pogađa više stanova
          u istom vertikalnom nizu.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Položaj naselja na uzvišenju povremeno utiče na pritisak vode,
          posebno na višim spratovima, dok blizina granice sa Zemunom znači
          da redovno pokrivamo i taj deo naselja kao i centralnije delove
          Bežanijske kose.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Bežanijskoj kosi" />

      <NearbyLocations slug="majstor-bezanijska-kosa" />

      <CTASection
        title="Hitan kvar na Bežanijskoj kosi?"
        subtitle="Pozovite i majstor stiže na adresu, u svaki stambeni blok naselja, 0-24, svakog dana."
      />
    </>
  );
}
