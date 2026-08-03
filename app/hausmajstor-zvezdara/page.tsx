import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Hausmajstor Zvezdara – majstor za hitne intervencije 0-24";
const DESCRIPTION =
  "Hausmajstor Zvezdara – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja na jednom mestu. Izlazimo na adresu u svim delovima opštine, 0-24, svakog dana.";

export const metadata = buildMetadata({
  title: "Hausmajstor Zvezdara 0-24",
  description: DESCRIPTION,
  url: "/hausmajstor-zvezdara",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Zvezdara",
    text:
      "Curenje vode, pucanje cevi i zamena dotrajalih pocinkovanih instalacija u starijim kućama od Konjarnika do Mokrog Luga.",
  },
  {
    slug: "elektricar",
    label: "Električar Zvezdara",
    text:
      "Kvarovi na instalaciji, zamena osigurača i ugradnja rasvete, kako u starogradnji tako i u novim zgradama duž Ustaničke ulice.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Zvezdara",
    text:
      "Mašinsko odgušenje sudopere, kade i kanalizacionih vodova, prilagođeno i porodičnim kućama i stambenim zgradama.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Zvezdara",
    text:
      "Servis kotlova, radijatora i etažnog grejanja pred sezonu, uobičajen u individualnim kućama širom opštine.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Da li izlazite na adresu u Malom i Velikom Mokrom Lugu?",
    answer:
      "Da, redovno radimo u celoj opštini Zvezdara, uključujući Mali i Veliki Mokri Lug, Konjarnik, Đeram i naselja oko Zvezdarske šume, bez obzira da li je adresa udaljenija od glavnih saobraćajnica.",
  },
  {
    question: "Radite li na starijim porodičnim kućama sa dotrajalim instalacijama?",
    answer:
      "Da, veliki deo Zvezdare čine porodične kuće izgrađene šezdesetih i sedamdesetih godina sa pocinkovanim vodovodnim cevima i starijom elektro instalacijom. Imamo veliko iskustvo u saniranju curenja, korozije i zamene takvih instalacija.",
  },
  {
    question: "Da li pokrivate i novogradnju duž Bulevara kralja Aleksandra i Ustaničke?",
    answer:
      "Da, podjednako izlazimo i u novije stambene zgrade duž Ustaničke ulice i Bulevara kralja Aleksandra, gde se najčešće javljaju kvarovi na modernim sistemima grejanja i sanitarijama.",
  },
  {
    question: "Da li dolazite van radnog vremena, na primer uveče ili vikendom?",
    answer:
      "Da, majstor za Zvezdaru dostupan je 0-24, svakog dana u nedelji, uključujući noćne sate, vikende i praznike, za sve hitne slučajeve poput curenja vode ili kvara na struji.",
  },
];

export default function HausmajstorZvezdaraPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Hausmajstor usluge – Zvezdara",
    description: DESCRIPTION,
    slug: "hausmajstor-zvezdara",
    area: "Zvezdara, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Hausmajstor Zvezdara", path: "/hausmajstor-zvezdara" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Zvezdara"
        title={TITLE}
        intro="Zvezdara je opština gde se hitne majstorske intervencije traže gotovo svakodnevno – kombinacija starijih porodičnih kuća oko Mokrog Luga i Konjarnika i novogradnje duž Ustaničke ulice i Bulevara kralja Aleksandra znači da se susrećemo i sa dotrajalim instalacijama i sa modernim sistemima grejanja. Naš tim izlazi na teren u svim delovima opštine, od Đerma do same Zvezdarske šume."
        image="/hero.jpg"
        imageAlt="Majstor na intervenciji u porodičnoj kući na Zvezdari u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge hausmajstora na Zvezdari
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
          Zašto nas biraju stanovnici Zvezdare
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Zvezdara je brdovita opština, što na višim kotama ka Mirijevu i
          Zvezdarskoj šumi često znači slabiji pritisak vode i stariju
          instalacionu mrežu koja teže podnosi taj pritisak. U kućama
          građenim šezdesetih i sedamdesetih godina najčešće nailazimo na
          pocinkovane vodovodne cevi sklone koroziji i curenju, kao i na
          aluminijumsku elektro instalaciju kojoj je potrebna modernizacija.
          U isto vreme, u novijim zgradama duž Ustaničke ulice i Bulevara
          kralja Aleksandra radimo servis savremenih kombi bojlera, etažnog
          grejanja i ugrađenih sanitarija.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Bez obzira da li je reč o porodičnoj kući u Malom Mokrom Lugu,
          stanu na Konjarniku ili poslovnom prostoru u blizini Zvezdarske
          šume, izlazimo na adresu opremljeni alatom za najčešće kvarove i
          rešavamo problem u istoj poseti.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o hausmajstor uslugama na Zvezdari" />

      <CTASection
        title="Hitan kvar na Zvezdari?"
        subtitle="Pozovite i majstor stiže na adresu u svim delovima opštine, 0-24, svakog dana."
      />
    </>
  );
}
