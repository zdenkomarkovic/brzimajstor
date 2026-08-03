import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Majstor Mirijevo – hitne intervencije 0-24";
const DESCRIPTION =
  "Majstor Mirijevo – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za Malo i Veliko Mirijevo. Dolazimo na adresu brzo, svakog dana 0-24.";

export const metadata = buildMetadata({
  title: "Majstor Mirijevo 0-24",
  description: DESCRIPTION,
  url: "/majstor-mirijevo",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Mirijevo",
    text:
      "Popravka curenja, zamena slavina i bojlera u porodičnim kućama sa dvorištem, uobičajenim za Malo i Veliko Mirijevo.",
  },
  {
    slug: "elektricar",
    label: "Električar Mirijevo",
    text:
      "Kvarovi na instalaciji, ugradnja utičnica i rasvete u kućama duž Mirijevskog bulevara i okolnih uličica.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Mirijevo",
    text:
      "Odgušenje sudopere, kade i septičkih sistema u delovima Mirijeva koji nisu na gradskoj kanalizacionoj mreži.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Mirijevo",
    text:
      "Servis etažnih kotlova i radijatora pred grejnu sezonu, tipičan za individualnu gradnju ovog naselja.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Da li dolazite i do udaljenijih delova Velikog Mirijeva?",
    answer:
      "Da, izlazimo na adresu u celom Mirijevu, od naselja bliže Mirijevskom bulevaru do udaljenijih delova Velikog Mirijeva prema obodu grada, bez obzira na uzane prilazne ulice.",
  },
  {
    question: "Imam kuću sa septičkom jamom, da li radite odgušenje?",
    answer:
      "Da, deo Mirijeva još uvek nije priključen na gradsku kanalizacionu mrežu, pa redovno radimo odgušenje i pražnjenje septičkih sistema, kao i sanaciju odvodnih cevi ka njima.",
  },
  {
    question: "Radite li ugradnju i servis etažnog grejanja u porodičnim kućama?",
    answer:
      "Da, budući da je Mirijevo pretežno naselje individualnih kuća, česta usluga je servis i ugradnja etažnih kotlova, radijatora i pratećih instalacija pred početak grejne sezone.",
  },
  {
    question: "Koliko brzo majstor stiže do adrese u Mirijevu?",
    answer:
      "Trudimo se da na hitne pozive u Mirijevu izađemo u što kraćem roku, u zavisnosti od tačne lokacije naselja i trenutnog broja intervencija u toku dana.",
  },
];

export default function MajstorMirijevoPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Mirijevo",
    description: DESCRIPTION,
    slug: "majstor-mirijevo",
    area: "Mirijevo, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Mirijevo", path: "/majstor-mirijevo" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Mirijevo"
        title={TITLE}
        intro="Malo i Veliko Mirijevo su pretežno naselja porodičnih kuća na brdovitom terenu iznad Zvezdare. Uske ulice i dvorišta zahtevaju opremu prilagođenu terenu koji nije uvek lako pristupačan, a mi na to računamo — izlazimo sa kompletnom opremom bez obzira da li je adresa uz sam Mirijevski bulevar ili u dubini naselja."
        image="/2150721537.jpg"
        imageAlt="Majstor popravlja vodovodnu instalaciju u porodičnoj kući u Mirijevu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora u Mirijevu
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
          Šta je specifično za intervencije u Mirijevu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Mirijevo se decenijama gradilo kao naselje individualnih porodičnih
          kuća, pa se kvalitet i starost instalacija dosta razlikuju od
          adrese do adrese. U pojedinim delovima, posebno u Velikom Mirijevu
          prema obodu naselja, još uvek se koriste septičke jame umesto
          priključka na gradsku kanalizaciju, što zahteva drugačiju opremu i
          pristup nego kod standardnog odgušenja u zgradi.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Uske i strme uličice tipične za brdoviti teren iznad Zvezdare
          takođe znače da majstor mora biti spreman da radi u prostoru koji
          nije uvek lako dostupan vozilom, zbog čega uvek nosimo prenosivu
          opremu za rad direktno na terenu, bez obzira na pristup dvorištu.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama u Mirijevu" />

      <CTASection
        title="Hitan kvar u Mirijevu?"
        subtitle="Pozovite i majstor izlazi na adresu u Malom i Velikom Mirijevu, 0-24, svakog dana."
      />
    </>
  );
}
