import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Servis grejanja Beograd – hitne intervencije 0-24";
const DESCRIPTION =
  "Servis grejanja u Beogradu 0-24: popravka centralnog grejanja, radijatora, konvektora i bojlera. Brz izlazak na teren pre i tokom grejne sezone, garancija na rad.";

export const metadata = buildMetadata({
  title: "Servis grejanja Beograd 0-24",
  description: DESCRIPTION,
  url: "/servis-grejanja",
});

const USLUGE = [
  "Servis i popravka centralnog grejanja i razvoda instalacije",
  "Odzračivanje i punjenje sistema grejanja",
  "Popravka i zamena radijatora, konvektora i termostatskih ventila",
  "Servis električnih i TA peći, kao i konvektorskih grejalica",
  "Popravka bojlera i grejača u sistemu za toplu vodu",
  "Priprema instalacije grejanja pred početak grejne sezone",
];

const SIMPTOMI = [
  "Radijatori su hladni ili se greju neravnomerno",
  "Čuje se kuckanje i žuborenje u cevima grejanja",
  "Sistem grejanja gubi pritisak ili curi voda kod ventila",
  "Konvektor ili peć ne uključuju se ili se gase same od sebe",
  "Bojler u sistemu grejanja ne zagreva vodu do kraja",
  "Potrebno je odzračivanje pre početka grejne sezone",
];

const FAQ_ITEMS = [
  {
    question: "Da li servisirate i starije modele peći i konvektora?",
    answer:
      "Da, servisiramo širok spektar uređaja za grejanje, uključujući starije električne i TA peći, konvektore i radijatore, ne samo nove sisteme.",
  },
  {
    question: "Kada je najbolje vreme da se pripremi grejanje za sezonu?",
    answer:
      "Preporučujemo pregled i odzračivanje sistema pre početka grejne sezone (rana jesen), ali intervenišemo i tokom sezone ako dođe do kvara.",
  },
  {
    question: "Radijatori mi se ne greju ravnomerno, šta može biti uzrok?",
    answer:
      "Najčešći uzroci su vazduh u sistemu, neispravan termostatski ventil ili neuravnotežen razvod instalacije — sve to proveravamo i otklanjamo na terenu.",
  },
  {
    question: "Da li dolazite hitno ako potpuno nestane grejanja zimi?",
    answer:
      "Da, gubitak grejanja tokom zime tretiramo kao hitan slučaj i trudimo se da izađemo na adresu u najkraćem mogućem roku, 0-24.",
  },
];

export default function ServisGrejanjaPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Servis grejanja",
    description: DESCRIPTION,
    slug: "servis-grejanja",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Servis grejanja Beograd", path: "/servis-grejanja" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Servis grejanja"
        title={TITLE}
        intro="Hladni radijatori ili pokvarena peć usred zime ne mogu da čekaju. Servisiramo centralno grejanje, konvektore i peći širom Beograda, brzo i uz garanciju na rad."
        image="/tapec.jpg"
        imageAlt="Starija konvektorska peć za centralno grejanje pre servisa u stanu u Beogradu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold text-primary sm:text-2xl">
              Usluge servisa grejanja koje izvodimo
            </h2>
            <ul className="mt-5 space-y-3">
              {USLUGE.map((usluga) => (
                <li key={usluga} className="flex items-start gap-2 text-sm text-primary/80">
                  <span className="mt-0.5 text-accent-dark">✓</span>
                  {usluga}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-primary sm:text-2xl">
              Kada je potreban hitan servis
            </h2>
            <ul className="mt-5 space-y-3">
              {SIMPTOMI.map((simptom) => (
                <li key={simptom} className="flex items-start gap-2 text-sm text-primary/80">
                  <span className="mt-0.5 text-accent-dark">⚠</span>
                  {simptom}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-primary/70">
              Ako je problem u dovodu vode do sistema grejanja, pogledajte i uslugu{" "}
              <Link href="/vodoinstalater" className="font-semibold text-accent-dark hover:underline">
                vodoinstalatera
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o servisu grejanja" />

      <CTASection
        title="Nemate grejanje ili radijatori ne greju?"
        subtitle="Servis grejanja dostupan 0-24, na teritoriji celog Beograda."
      />
    </>
  );
}
