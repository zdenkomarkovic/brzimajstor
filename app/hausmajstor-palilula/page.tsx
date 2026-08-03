import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Hausmajstor Palilula – majstor za hitne intervencije 0-24";
const DESCRIPTION =
  "Hausmajstor Palilula – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja od centra opštine do Borče, Krnjače i Ovče. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: "Hausmajstor Palilula 0-24",
  description: DESCRIPTION,
  url: "/hausmajstor-palilula",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Palilula",
    text:
      "Sanacija starih vodovodnih vertikala u zgradama oko Bulevara despota Stefana i ugradnja instalacija u novim kućama u Borči i Ovči.",
  },
  {
    slug: "elektricar",
    label: "Električar Palilula",
    text:
      "Popravka kvarova na instalaciji u starijim zgradama centralne Palilule i kompletno ožičenje novogradnje na drugoj obali Dunava.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Palilula",
    text:
      "Odgušenje zajedničkih vodova u starim zgradama i pražnjenje septičkih jama u naseljima bliže Dunavu.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Palilula",
    text:
      "Servis centralnog grejanja u starijim stanovima i ugradnja etažnih kotlova u novim porodičnim kućama u Krnjači.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Da li pokrivate i Borču, Krnjaču i Ovču na drugoj strani Dunava?",
    answer:
      "Da, redovno izlazimo na adrese u Borči, Krnjači i Ovči, gde se decenijama grade nove porodične kuće, često fazno i sopstvenim snagama, pa su nam poznate razlike u kvalitetu i starosti instalacija od kuće do kuće.",
  },
  {
    question: "Radite li u starijim zgradama u centru Palilule, oko Bulevara despota Stefana?",
    answer:
      "Da, imamo iskustva sa starijim zajedničkim vodovodnim i kanalizacionim vertikalama u zgradama oko Bulevara despota Stefana i Cvetkove pijace, gde je začepljenje ili curenje često problem koji pogađa više stanova.",
  },
  {
    question: "Blizu smo Dunava i imamo problem sa vlagom i podzemnom vodom – možete li pomoći?",
    answer:
      "Da, u delovima Palilule bliže reci visok nivo podzemnih voda može praviti probleme sa vlagom i odvodom, pa pored standardnih intervencija radimo i procenu hidroizolacije i odgušenje odvodnih sistema oko kuće.",
  },
  {
    question: "Koliko brzo stižete na adresu u Borči ili Ovči?",
    answer:
      "Trudimo se da izađemo u što kraćem roku bez obzira na udaljenost od centra grada, s tim da tačno vreme dolaska zavisi od trenutnog broja intervencija i tačne lokacije naselja.",
  },
];

export default function HausmajstorPalilulaPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Palilula",
    description: DESCRIPTION,
    slug: "hausmajstor-palilula",
    area: "Palilula, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Palilula", path: "/hausmajstor-palilula" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Palilula"
        title={TITLE}
        intro="Palilula je jedna od najvećih i najraznovrsnijih opština u Beogradu – od stare gradnje oko Bulevara despota Stefana i Cvetkove pijace, preko stambenih naselja bliže centru, do Krnjače, Borče i Ovče na drugoj obali Dunava, gde se decenijama grade nove porodične kuće. Naš tim izlazi na adresu u svim ovim delovima, bez obzira da li je reč o staroj zgradi u centru ili novoj kući u Borči."
        image="/hero.jpg"
        imageAlt="Majstor na intervenciji u naselju na Paliluli u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Paliluli
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
          Šta je specifično za intervencije na Paliluli
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          U centralnom delu opštine, oko Bulevara despota Stefana i Cvetkove
          pijace, preovlađuju starije zgrade sa zajedničkim vodovodnim i
          kanalizacionim vertikalama iz sredine dvadesetog veka. Gusta
          gradnja i veliki broj stanova po zgradi znače da se začepljenje ili
          curenje često oseti na više spratova odjednom, pa je precizna
          dijagnostika kvara prvi korak pre same intervencije.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Na drugoj strani, u Borči, Krnjači i Ovči, naselja se decenijama
          šire kroz individualnu izgradnju, često fazno i uz sopstvenu
          radnu snagu vlasnika, pa se na jednoj adresi mogu naći i vrlo stare
          i sasvim nove instalacije. Blizina Dunava dodatno znači viši nivo
          podzemnih voda, pa su vlaga i odvod oko kuće nešto na šta redovno
          obraćamo pažnju.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Paliluli" />

      <CTASection
        title="Hitan kvar na Paliluli?"
        subtitle="Pozovite i majstor stiže na adresu, od centra opštine do Borče i Ovče, 0-24, svakog dana."
      />
    </>
  );
}
