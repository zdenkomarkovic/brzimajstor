import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getLocationSeo } from "@/lib/locationSeo";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { NearbyLocations } from "@/components/sections/NearbyLocations";
import { CTASection } from "@/components/sections/CTASection";

const { metaTitle, h1 } = getLocationSeo("hausmajstor-kaludjerica");
const DESCRIPTION =
  "Hausmajstor Kaluđerica – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za gusto izgrađeno naselje na periferiji Beograda. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: metaTitle,
  description: DESCRIPTION,
  url: "/hausmajstor-kaludjerica",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Kaluđerica",
    text:
      "Sanacija instalacija u kućama građenim postepeno, bez jedinstvenog urbanističkog plana naselja.",
  },
  {
    slug: "elektricar",
    label: "Električar Kaluđerica",
    text:
      "Popravka kvarova na instalaciji i modernizacija elektro sistema u individualnim kućama.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Kaluđerica",
    text:
      "Odgušenje sudopere, kade i septičkih sistema u delovima naselja koji nisu priključeni na gradsku kanalizaciju.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Kaluđerica",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, tipičan za individualnu gradnju naselja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Imam kuću sa septičkom jamom, da li radite odgušenje?",
    answer:
      "Da, deo Kaluđerice još uvek nije priključen na gradsku kanalizacionu mrežu, pa redovno radimo odgušenje i pražnjenje septičkih sistema, kao i sanaciju odvodnih cevi ka njima.",
  },
  {
    question: "Da li vam uske uličice i gusta gradnja u Kaluđerici otežavaju dolazak?",
    answer:
      "Ne, navikli smo na specifičnu, gustu gradnju ovog naselja koje se decenijama širilo bez jedinstvenog urbanističkog plana. Vozilo ostavimo na najbližem dostupnom mestu, a opremu nosimo do same kuće.",
  },
  {
    question: "Radite li na kućama koje su građene u nekoliko etapa, bez jedinstvene instalacije?",
    answer:
      "Da, to je uobičajena situacija u Kaluđerici, gde su kuće često dograđivane postepeno. Prvo procenjujemo stanje postojećih instalacija, a zatim predlažemo kako ih uskladiti ili delimično zameniti.",
  },
  {
    question: "Koliko brzo stižete na hitan poziv u Kaluđerici?",
    answer:
      "Trudimo se da izađemo u što kraćem roku, u zavisnosti od tačne lokacije unutar naselja i trenutnog broja intervencija u toku dana.",
  },
];

export default function HausmajstorKaludjericaPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Kaluđerica",
    description: DESCRIPTION,
    slug: "hausmajstor-kaludjerica",
    area: "Kaluđerica, Grocka, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Kaluđerica", path: "/hausmajstor-kaludjerica" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Kaluđerica"
        title={h1}
        intro="Kaluđerica je jedno od najgušće izgrađenih naselja u okolini Beograda, nastalo decenijskim širenjem individualne gradnje bez jedinstvenog urbanističkog plana. Uske uličice i kuće različite starosti i kvaliteta instalacija znače da svakoj adresi pristupamo pažljivo i bez unapred pretpostavljenog rešenja."
        image="/2149334231.jpg"
        imageAlt="Majstor radi u porodičnoj kući u Kaluđerici"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora u Kaluđerici
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
          Šta je specifično za intervencije u Kaluđerici
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Kaluđerica se decenijama širila kroz individualnu, često
          neplaniranu izgradnju, pa su ulice uske, a kuće međusobno vrlo
          blizu. To znači da instalacije variraju od adrese do adrese, a
          pristup vozilom nije uvek moguć do same kuće, pa opremu često
          nosimo peške poslednji deo puta.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Deo naselja i danas nije priključen na gradsku kanalizacionu
          mrežu, pa je odgušenje i pražnjenje septičkih jama jedna od
          najtraženijih usluga ovde, uz standardne vodoinstalaterske i
          elektro intervencije.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama u Kaluđerici" />

      <NearbyLocations slug="hausmajstor-kaludjerica" />

      <CTASection
        title="Hitan kvar u Kaluđerici?"
        subtitle="Pozovite i majstor stiže na adresu, u svaku kuću u naselju, 0-24, svakog dana."
      />
    </>
  );
}
