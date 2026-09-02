import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("majstor-dedinje");
const DESCRIPTION =
  "Majstor Dedinje – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za rezidencije i vile u blizini Košutnjaka i Topčiderskog parka. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/majstor-dedinje",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Dedinje",
    text:
      "Servis kompleksnijih vodovodnih sistema u velikim rezidencijama, uključujući više kupatila i bazenske instalacije.",
  },
  {
    slug: "elektricar",
    label: "Električar Dedinje",
    text:
      "Održavanje elektro instalacije u prostranim vilama, uz visok standard urednosti i poštovanje dogovorenog termina.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Dedinje",
    text:
      "Odgušenje odvodnih sistema na velikim posedima, često sa više priključaka i dužim deonicama nego u standardnom stanu.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Dedinje",
    text:
      "Servis zonskog grejanja u velikim kućama sa više etaža, tipičnog za rezidencije na ovom delu grada.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Kuća ima više kupatila i zonsko grejanje – da li radite ovako kompleksne sisteme?",
    answer:
      "Da, redovno servisiramo veće vodovodne i grejne sisteme sa više zona i priključaka, uobičajene za rezidencije na Dedinju, uz prethodnu procenu na licu mesta.",
  },
  {
    question: "Imamo bazen ili saunu, da li servisirate i tu vrstu instalacija?",
    answer:
      "Da, u okviru vodoinstalaterskih usluga radimo i na instalacijama vezanim za bazene i saune, uključujući popravke i redovno održavanje pratećih sistema.",
  },
  {
    question: "Da li garantujete urednost i diskreciju tokom rada?",
    answer:
      "Da, svaku intervenciju na Dedinju izvodimo uredno i diskretno, uz poštovanje dogovorenog termina i bez nepotrebnog zadržavanja na imanju.",
  },
  {
    question: "Pokrivate li ceo Dedinje do Topčiderskog parka?",
    answer:
      "Da, izlazimo na adresu u celom naselju, od dela bližeg Košutnjaku do granice sa Topčiderskim parkom, bez obzira na veličinu ili udaljenost poseda.",
  },
];

export default function MajstorDedinjePage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Dedinje",
    description: DESCRIPTION,
    slug: "majstor-dedinje",
    area: "Dedinje, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Dedinje", path: "/majstor-dedinje" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Dedinje"
        title={h1}
        intro="Dedinje je jedno od najprestižnijih naselja u Beogradu, sa velikim vilama i rezidencijama u blizini Košutnjaka i Topčiderskog parka. Radovi ovde često podrazumevaju rad na kompleksnijim sistemima – više kupatila, bazeni, grejanje na više zona – uz visok nivo urednosti i poštovanje termina."
        image="/2149334231.jpg"
        imageAlt="Majstor radi na instalacijama u velikoj vili na Dedinju"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Dedinju
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
          Šta je specifično za intervencije na Dedinju
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Rezidencije na Dedinju po pravilu su prostranije od prosečnog
          stana ili kuće, sa više kupatila, kuhinja ili čak bazenom i
          saunom, pa vodovodni i grejni sistemi imaju više zona i priključaka
          nego što je uobičajeno. To zahteva pažljivije planiranje
          intervencije, često uz prethodni pregled na licu mesta.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          S obzirom na status naselja i blizinu Beloga dvora i Topčiderskog
          parka, svaku intervenciju izvodimo uz visok nivo urednosti i
          diskrecije, poštujući dogovoreni termin i minimalno remeteći
          svakodnevni život u kući.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Dedinju" />

      <NearbyLocations slug="majstor-dedinje" />

      <CTASection
        title="Hitan kvar na Dedinju?"
        subtitle="Pozovite i majstor stiže na adresu, u vilu ili rezidenciju, 0-24, svakog dana."
      />
    </>
  );
}
