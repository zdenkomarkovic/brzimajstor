import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Majstor Cerak – hitne intervencije 0-24";
const DESCRIPTION =
  "Majstor Cerak – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za stambene blokove Cerak Vinogradi i okolne kuće. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: "Majstor Cerak 0-24",
  description: DESCRIPTION,
  url: "/majstor-cerak",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Cerak",
    text:
      "Sanacija zajedničkih vertikala u blokovima Cerak Vinogradi i popravka instalacija u okolnim porodičnim kućama.",
  },
  {
    slug: "elektricar",
    label: "Električar Cerak",
    text:
      "Popravka kvarova na instalaciji u stambenim zgradama i modernizacija razvodnih tabli u starijim blokovima.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Cerak",
    text:
      "Odgušenje zajedničkih kanalizacionih vodova u zgradama i individualnih priključaka u porodičnim kućama.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Cerak",
    text:
      "Servis radijatora i etažnih kotlova, u zavisnosti od toga da li je reč o zgradi ili porodičnoj kući.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li u stambenim blokovima Cerak Vinogradi?",
    answer:
      "Da, redovno izlazimo na adrese u ovom naselju, gde zgrade izgrađene osamdesetih godina imaju zajedničke vodovodne i kanalizacione vertikale kojima je, s obzirom na starost, često potrebna sanacija.",
  },
  {
    question: "Ima li problema sa pritiskom vode zbog brdovitog terena na Ceraku?",
    answer:
      "Da, kao i u drugim delovima Rakovice na uzvišenju, na Ceraku se povremeno javlja slabiji pritisak vode na višim spratovima, što proveravamo i po potrebi predlažemo rešenje.",
  },
  {
    question: "Pokrivate li i okolne porodične kuće, ne samo zgrade?",
    answer:
      "Da, pored stambenih blokova, izlazimo i na adrese u individualnim kućama koje okružuju naselje, gde su instalacije po pravilu starije i različitog porekla.",
  },
  {
    question: "Koliko brzo stižete na Cerak s obzirom na udaljenost od centra?",
    answer:
      "Trudimo se da izađemo u što kraćem roku bez obzira na udaljenost, s tim da tačno vreme dolaska zavisi od trenutnog broja intervencija u toku dana.",
  },
];

export default function MajstorCerakPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Cerak",
    description: DESCRIPTION,
    slug: "majstor-cerak",
    area: "Cerak, Rakovica, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Cerak", path: "/majstor-cerak" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Cerak"
        title={TITLE}
        intro="Cerak, sa naseljem Cerak Vinogradi, deo je opštine Rakovica izgrađen pretežno tokom osamdesetih godina, sa stambenim blokovima na brdovitom terenu blizu Miljakovca. Redovno izlazimo i u ove zgrade i u porodične kuće koje ih okružuju, gde su instalacije često znatno starije."
        image="/2149176716.jpg"
        imageAlt="Majstor servisira kućni aparat u stambenom bloku na Ceraku"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Ceraku
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
          Šta je specifično za intervencije na Ceraku
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Stambeni blokovi Cerak Vinograda podignuti su uglavnom osamdesetih
          godina dvadesetog veka, pa su danas stari četiri decenije. Njihove
          zajedničke vodovodne i kanalizacione vertikale sve češće zahtevaju
          sanaciju, a curenje ili začepljenje često pogađa više stanova u
          istom nizu.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Naselje je izgrađeno na brdovitom terenu, blizu Miljakovca i
          Kanarevog brda, što povremeno utiče na pritisak vode na višim
          kotama, a porodične kuće koje okružuju blokove imaju instalacije
          različite starosti, u zavisnosti od toga kada su građene.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Ceraku" />

      <CTASection
        title="Hitan kvar na Ceraku?"
        subtitle="Pozovite i majstor stiže na adresu, u zgradu ili kuću, 0-24, svakog dana."
      />
    </>
  );
}
