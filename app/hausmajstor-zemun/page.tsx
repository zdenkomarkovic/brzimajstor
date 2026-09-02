import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-zemun");
const DESCRIPTION =
  "Hausmajstor Zemun – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja od starog jezgra oko Gardoša do Zemun polja i Altine. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-zemun",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Zemun",
    text:
      "Sanacija starih vodovodnih instalacija u niskim zgradama oko Gardoša i ugradnja novih sistema u Zemun polju.",
  },
  {
    slug: "elektricar",
    label: "Električar Zemun",
    text:
      "Modernizacija stare instalacije u jezgru grada i kompletno ožičenje u novogradnji Altine i Kamendina.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Zemun",
    text:
      "Odgušenje sudopere, kade i kanalizacionih priključaka, i u starim uskim uličicama i u novijim naseljima.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Zemun",
    text:
      "Servis centralnog i etažnog grejanja u zavisnosti od tipa objekta, od starih kuća do novih stambenih zgrada.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li u starom jezgru oko Gardoša gde su uske ulice?",
    answer:
      "Da, redovno izlazimo na adrese u starom delu Zemuna, gde uske i kaldrmisane uličice ponekad otežavaju pristup vozilom, pa opremu tada nosimo peške do same kuće.",
  },
  {
    question: "Pokrivate li i novija naselja poput Zemun polja i Kamendina?",
    answer:
      "Da, jednako izlazimo i u novije delove Zemuna – Zemun polje, Altinu, Kamendin – gde su naselja u stalnom širenju i gde su instalacije, uprkos novoj gradnji, i dalje podložne kvarovima.",
  },
  {
    question: "Imam kuću koju sam sam gradio godinama i instalacije su različitog porekla – možete li da se snađete?",
    answer:
      "Da, to je uobičajena situacija u novijim delovima Zemuna gde se gradilo postepeno. Prvo pratimo tok instalacija i procenjujemo stanje, a zatim predlažemo šta je potrebno sanirati ili zameniti.",
  },
  {
    question: "Da li ste dostupni i za restorane i splavove na keju?",
    answer:
      "Da, radimo i sa ugostiteljskim objektima duž Zemunskog keja, gde je brza intervencija na vodovodnim ili elektro instalacijama često prioritet zbog rada sa gostima.",
  },
];

export default function HausmajstorZemunPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Zemun",
    description: DESCRIPTION,
    slug: "hausmajstor-zemun",
    area: "Zemun, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Zemun", path: "/hausmajstor-zemun" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Zemun"
        title={h1}
        intro="Zemun je nekada bio samostalan grad i to se i danas oseća – staro jezgro oko Gardoša i Glavne ulice čine niske zgrade iz austrougarskog perioda, dok se u Zemun polju, Altini i Kamendinu decenijama grade nova naselja porodičnih kuća i stambenih zgrada. Radimo podjednako u oba dela, od uskih uličica gornjeg grada do novogradnje bliže Novom Beogradu."
        image="/2150721537.jpg"
        imageAlt="Majstor popravlja vodovodnu instalaciju u kući u Zemunu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora u Zemunu
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
          Šta je specifično za intervencije u Zemunu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Staro jezgro Zemuna, oko Gardoša i Glavne ulice, čine niske zgrade
          iz austrougarskog perioda sa uskim, kaldrmisanim uličicama. Rad na
          takvim objektima zahteva pažljiv pristup i često nošenje opreme
          peške poslednji deo puta, budući da vozilom nije uvek moguće doći
          do same kuće.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Zemun polje, Altina i Kamendin su, s druge strane, naselja koja se
          decenijama šire kroz individualnu izgradnju, pa se na jednoj adresi
          često nalaze i starije i novije instalacije, u zavisnosti od toga
          kada je koji deo kuće dograđivan.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama u Zemunu" />

      <NearbyLocations slug="hausmajstor-zemun" />

      <CTASection
        title="Hitan kvar u Zemunu?"
        subtitle="Pozovite i majstor stiže na adresu, od Gardoša do Zemun polja, 0-24, svakog dana."
      />
    </>
  );
}
