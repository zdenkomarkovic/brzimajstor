import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-senjak");
const DESCRIPTION =
  "Hausmajstor Senjak – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za vile i porodične kuće u ovom mirnom naselju. Dostupni 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-senjak",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Senjak",
    text:
      "Sanacija instalacija u vilama iz perioda između dva svetska rata, uz procenu originalnih i naknadno dograđenih sistema.",
  },
  {
    slug: "elektricar",
    label: "Električar Senjak",
    text:
      "Modernizacija elektro instalacije u reprezentativnim objektima, uz diskretan i uredan rad.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Senjak",
    text:
      "Odgušenje odvodnih sistema u velikim dvorištima i starijim kanalizacionim priključcima svojstvenim ovom naselju.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Senjak",
    text:
      "Servis grejanja u kućama sa više prostorija i grejnih zona, uobičajenim za veće vile na Senjaku.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li na reprezentativnim vilama gde je bitna urednost i diskrecija?",
    answer:
      "Da, svesni smo da je Senjak jedno od reprezentativnijih naselja u gradu, pa svaku intervenciju izvodimo uredno, diskretno i uz poštovanje dogovorenog termina.",
  },
  {
    question: "Kuća ima kombinaciju starih i novih instalacija – možete li da procenite šta treba menjati?",
    answer:
      "Da, u vilama iz perioda između dva svetska rata to je uobičajena situacija. Prvo pratimo tok postojećih instalacija i procenjujemo stanje, a zatim predlažemo šta zaista treba saniti ili zameniti.",
  },
  {
    question: "Servisirate li i sisteme za navodnjavanje dvorišta?",
    answer:
      "Da, s obzirom da kuće na Senjaku često imaju veća dvorišta i zelene površine, radimo i servis spoljnih vodovodnih instalacija, uključujući sisteme za navodnjavanje.",
  },
  {
    question: "Pokrivate li ceo Senjak do Košutnjaka?",
    answer:
      "Da, izlazimo na adresu u celom naselju, od dela bližeg centru do granice sa Košutnjakom, bez obzira na udaljenost od glavnih saobraćajnica.",
  },
];

export default function HausmajstorSenjakPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Senjak",
    description: DESCRIPTION,
    slug: "hausmajstor-senjak",
    area: "Senjak, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Senjak", path: "/hausmajstor-senjak" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Senjak"
        title={h1}
        intro="Senjak je jedno od najmirnijih vilinskih naselja u samom centru Beograda, sa kućama i vilama iz perioda između dva svetska rata, okruženim zelenilom i velikim dvorištima. Objekti ovog tipa često imaju kombinaciju originalnih instalacija i naknadno dograđenih sistema, pa je pre svake intervencije važno dobro proceniti stanje na terenu."
        image="/tapec.jpg"
        imageAlt="Majstor servisira grejanje u vili na Senjaku u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Senjaku
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
          Šta je specifično za intervencije na Senjaku
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Vile na Senjaku građene su najvećim delom u periodu između dva
          svetska rata i od tada su, u zavisnosti od vlasnika, delimično ili
          potpuno renovirane. Zbog toga se u istoj kući često nalaze i
          originalne i naknadno ugrađene instalacije, pa pre intervencije
          uvek prvo procenjujemo koji deo sistema je stariji.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Veće parcele sa dvorištima, tipične za ovo naselje, znače i dodatne
          spoljne instalacije – od navodnjavanja do odvoda oko temelja – koje
          takođe servisiramo, uvek uz poštovanje urednosti i diskrecije koje
          ovakvi objekti zahtevaju.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Senjaku" />

      <NearbyLocations slug="hausmajstor-senjak" />

      <CTASection
        title="Hitan kvar na Senjaku?"
        subtitle="Pozovite i majstor stiže na adresu, u vilu ili porodičnu kuću, 0-24, svakog dana."
      />
    </>
  );
}
