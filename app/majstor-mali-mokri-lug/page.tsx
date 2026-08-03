import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Majstor Mali Mokri Lug – hitne intervencije 0-24";
const DESCRIPTION =
  "Majstor Mali Mokri Lug – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za porodične kuće u ovom delu Zvezdare. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: "Majstor Mali Mokri Lug 0-24",
  description: DESCRIPTION,
  url: "/majstor-mali-mokri-lug",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Mali Mokri Lug",
    text:
      "Sanacija curenja i zamena starijih vodovodnih instalacija u porodičnim kućama ovog naselja.",
  },
  {
    slug: "elektricar",
    label: "Električar Mali Mokri Lug",
    text:
      "Popravka kvarova na instalaciji i modernizacija elektro sistema u individualnim kućama.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Mali Mokri Lug",
    text:
      "Odgušenje sudopere, kade i odvodnih sistema u kućama ovog dela Zvezdare.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Mali Mokri Lug",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, uobičajen za individualnu gradnju naselja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li na starijim porodičnim kućama sa dotrajalim instalacijama?",
    answer:
      "Da, veći deo Malog Mokrog Luga čine kuće izgrađene tokom više decenija, pa imamo iskustva sa starijim vodovodnim i elektro sistemima kojima je potrebna sanacija ili delimična zamena.",
  },
  {
    question: "Pokrivate li i granicu prema Velikom Mokrom Lugu?",
    answer:
      "Da, izlazimo na adresu u celom naselju, uključujući delove bliže Velikom Mokrom Lugu i ostatku Zvezdare.",
  },
  {
    question: "Ima li problema sa pritiskom vode zbog brdovitog terena?",
    answer:
      "Da, kao i u drugim brdovitim delovima Zvezdare, u Malom Mokrom Lugu se povremeno javlja slabiji pritisak vode na višim kotama, što proveravamo pre nego što predložimo rešenje.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u ovom naselju?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar naselja i trenutnog broja intervencija u toku dana.",
  },
];

export default function MajstorMaliMokriLugPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Mali Mokri Lug",
    description: DESCRIPTION,
    slug: "majstor-mali-mokri-lug",
    area: "Mali Mokri Lug, Zvezdara, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Mali Mokri Lug", path: "/majstor-mali-mokri-lug" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Mali Mokri Lug"
        title={TITLE}
        intro="Mali Mokri Lug je mirno, pretežno porodično naselje na Zvezdari, sa individualnim kućama na brdovitom terenu. Kraj se decenijama širio kroz individualnu izgradnju, pa se na terenu često susrećemo sa instalacijama različite starosti, čak i u okviru iste kuće."
        image="/hero.jpg"
        imageAlt="Majstor radi u porodičnoj kući u Malom Mokrom Lugu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora u Malom Mokrom Lugu
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
          Šta je specifično za intervencije u Malom Mokrom Lugu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Kuće u Malom Mokrom Lugu građene su najvećim delom postepeno,
          tokom više decenija, pa se u jednoj kući često nalaze i starije i
          sasvim nove deonice vodovodnih i elektro instalacija. Procena
          stanja pre same intervencije zato uvek prethodi konkretnoj
          popravci.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Brdovit teren naselja povremeno utiče na pritisak vode, posebno u
          kućama na višim kotama, a blizina Velikog Mokrog Luga znači da
          često pokrivamo oba naselja u okviru iste ture.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama u Malom Mokrom Lugu" />

      <CTASection
        title="Hitan kvar u Malom Mokrom Lugu?"
        subtitle="Pozovite i majstor stiže na adresu, u svaku kuću u naselju, 0-24, svakog dana."
      />
    </>
  );
}
