import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Majstor Savski venac – hitne intervencije 0-24";
const DESCRIPTION =
  "Majstor Savski venac – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja od Slavije do Topčidera i Savskog keja. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: "Majstor Savski venac 0-24",
  description: DESCRIPTION,
  url: "/majstor-savski-venac",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Savski venac",
    text:
      "Sanacija starih zajedničkih vertikala u zgradama oko Slavije i ugradnja savremenih instalacija u objektima prema Savskom keju.",
  },
  {
    slug: "elektricar",
    label: "Električar Savski venac",
    text:
      "Popravka kvarova na instalaciji u stambenim i poslovnim zgradama duž Bulevara oslobođenja.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Savski venac",
    text:
      "Odgušenje zajedničkih kanalizacionih vodova u starijim zgradama sa velikim brojem stanova oko Slavije.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Savski venac",
    text:
      "Servis centralnog i etažnog grejanja, u zavisnosti od tipa zgrade, od starih do savremenih objekata uz reku.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li u zgradama oko Slavije i Bulevara oslobođenja?",
    answer:
      "Da, redovno izlazimo na adrese u ovom gusto naseljenom i prometnom delu opštine, gde su zgrade najčešće starije i imaju zajedničke instalacije koje zahtevaju iskustvo u radu sa takvim sistemima.",
  },
  {
    question: "Pokrivate li i deo bliže Topčideru i Vojnomedicinskoj akademiji?",
    answer:
      "Da, izlazimo i u mirniji deo opštine oko Topčiderskog parka i Vojnomedicinske akademije, gde je gradnja raznovrsnija, od starijih kuća do novijih stambenih objekata.",
  },
  {
    question: "Servisirate li i novije objekte prema Savskom keju?",
    answer:
      "Da, pored starije gradnje u centru opštine, radimo i u savremenim poslovnim i stambenim kompleksima prema Savskom keju, gde su instalacije novije, ali i dalje podložne kvarovima.",
  },
  {
    question: "Koliko brzo stižete s obzirom na gust saobraćaj oko Slavije?",
    answer:
      "Trudimo se da dolazak planiramo tako da izbegnemo najveće gužve i stignemo na adresu u što kraćem roku, bez obzira na to koliko je raskrsnica kod Slavije prometna u datom trenutku.",
  },
];

export default function MajstorSavskiVenacPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Savski venac",
    description: DESCRIPTION,
    slug: "majstor-savski-venac",
    area: "Savski venac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Savski venac", path: "/majstor-savski-venac" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Savski venac"
        title={TITLE}
        intro="Savski venac obuhvata vrlo različite celine – od gradske vreve oko Slavije i Bulevara oslobođenja, preko mirnog Topčiderskog parka i okoline Vojnomedicinske akademije, do novih poslovnih i stambenih objekata prema Savskom keju. Ta raznovrsnost znači da radimo i u starim zgradama u centru i u savremenim kompleksima uz reku."
        image="/24857.jpg"
        imageAlt="Majstor radi u zgradi u blizini Slavije na Savskom vencu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Savskom vencu
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
          Šta je specifično za intervencije na Savskom vencu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          U gradskom, prometnom delu opštine, oko Slavije i Bulevara
          oslobođenja, preovlađuju starije zgrade sa zajedničkim
          instalacijama i velikim brojem stanova, gde se kvar često oseti na
          više spratova odjednom. Gust saobraćaj u ovom delu grada dodatno
          znači da dolazak planiramo pažljivo, kako bismo izbegli najveće
          gužve.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Prema Savskom keju i Beogradu na vodi, situacija je drugačija –
          reč je o novijim poslovnim i stambenim kompleksima sa savremenim
          sistemima, dok je okolina Topčiderskog parka i Vojnomedicinske
          akademije mirnija i sa raznovrsnijom, često individualnom gradnjom.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Savskom vencu" />

      <CTASection
        title="Hitan kvar na Savskom vencu?"
        subtitle="Pozovite i majstor stiže na adresu, od Slavije do Savskog keja, 0-24, svakog dana."
      />
    </>
  );
}
