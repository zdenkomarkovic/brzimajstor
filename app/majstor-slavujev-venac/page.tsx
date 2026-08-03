import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Majstor Slavujev venac – hitne intervencije 0-24";
const DESCRIPTION =
  "Majstor Slavujev venac – vodoinstalater, električar, odgušenje kanalizacije i servis grejanja za vile i porodične kuće na granici Vračara i Zvezdare. Dostupni 0-24.";

export const metadata = buildMetadata({
  title: "Majstor Slavujev venac 0-24",
  description: DESCRIPTION,
  url: "/majstor-slavujev-venac",
});

const USLUGE = [
  {
    slug: "vodoinstalater",
    label: "Vodoinstalater Slavujev venac",
    text:
      "Sanacija curenja na starijim vilama i podešavanje pritiska vode koji brdovit teren često čini nestabilnim.",
  },
  {
    slug: "elektricar",
    label: "Električar Slavujev venac",
    text:
      "Modernizacija instalacije u reprezentativnim objektima uz očuvanje originalnog izgleda enterijera i fasade.",
  },
  {
    slug: "odgusenje-kanalizacije",
    label: "Odgušenje kanalizacije Slavujev venac",
    text:
      "Odgušenje odvodnih sistema u velikim dvorištima i starijim kanalizacionim priključcima tipičnim za vile iz tog perioda.",
  },
  {
    slug: "servis-grejanja",
    label: "Servis grejanja Slavujev venac",
    text:
      "Servis grejanja u kućama sa više grejnih zona, uobičajenim za veće vile na ovom delu Vračara.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Radite li na starijim vilama gde treba paziti da se ne ošteti enterijer ili fasada?",
    answer:
      "Da, veći deo objekata na Slavujevom vencu su vile iz perioda između dva svetska rata sa vrednim enterijerima, pa svaku intervenciju prilagođavamo tako da ne ostavljamo tragove na originalnim elementima.",
  },
  {
    question: "Ima li problema sa pritiskom vode zbog brdovitog terena?",
    answer:
      "Da, deo Slavujevog venca se nalazi na uzvišenju, pa se povremeno javlja slabiji pritisak vode na višim kotama. U takvim slučajevima proveravamo instalaciju i predlažemo rešenje, poput pumpe za povećanje pritiska.",
  },
  {
    question: "Servisirate li i instalacije u dvorištu, poput navodnjavanja bašte?",
    answer:
      "Da, s obzirom da kuće na Slavujevom vencu često imaju veća dvorišta, radimo i servis spoljnih vodovodnih instalacija, uključujući sisteme za navodnjavanje i spoljne slavine.",
  },
  {
    question: "Pokrivate li ceo Slavujev venac do granice sa Zvezdarom?",
    answer:
      "Da, izlazimo na adresu u celom naselju, od dela bližeg centru Vračara do granice sa Zvezdarom, bez obzira na to koliko je kuća udaljena od glavne saobraćajnice.",
  },
];

export default function MajstorSlavujevVenacPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Majstorske usluge – Slavujev venac",
    description: DESCRIPTION,
    slug: "majstor-slavujev-venac",
    area: "Slavujev venac, Beograd",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Početna", path: "/" },
    { name: "Majstor Slavujev venac", path: "/majstor-slavujev-venac" },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        eyebrow="Slavujev venac"
        title={TITLE}
        intro="Slavujev venac je mirno, brdovito naselje sa vilama i porodičnim kućama iz perioda između dva svetska rata, smešteno između Vračara i Zvezdare. Ovde često radimo na starijim, reprezentativnim objektima gde je pored funkcionalnosti bitno i da instalacije ostanu uredne i diskretne."
        image="/tapec.jpg"
        imageAlt="Majstor servisira grejanje u vili na Slavujevom vencu"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Usluge majstora na Slavujevom vencu
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
          Šta je specifično za intervencije na Slavujevom vencu
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Vile na Slavujevom vencu građene su uglavnom tridesetih godina
          dvadesetog veka, a mnoge su tokom vremena delimično renovirane, pa
          se u istoj kući često nalaze i originalne i naknadno ugrađene
          instalacije. Pre svake intervencije prvo procenjujemo koji deo
          sistema je stariji, kako bismo predložili rešenje koje neće
          zahtevati nepotrebno rušenje zidova.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          Brdovit teren ovog dela grada, blizu granice sa Zvezdarom, ume da
          utiče na pritisak vode, posebno u kućama na višim kotama, dok
          veće parcele sa dvorištima znače dodatne spoljne instalacije –
          od navodnjavanja do odvoda oko temelja – koje takođe servisiramo.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} title="Pitanja o majstorskim uslugama na Slavujevom vencu" />

      <CTASection
        title="Hitan kvar na Slavujevom vencu?"
        subtitle="Pozovite i majstor stiže na adresu, u vilu ili porodičnu kuću, 0-24, svakog dana."
      />
    </>
  );
}
