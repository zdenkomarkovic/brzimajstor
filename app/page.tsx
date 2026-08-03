import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { CoverageArea } from "@/components/sections/CoverageArea";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const FAQ_ITEMS = [
  {
    question: "Da li zaista radite 0-24, uključujući noć i vikend?",
    answer:
      "Da. HausMajstor Beograd je dostupan svakog dana u nedelji, 24 sata, uključujući noćne sate, vikende i praznike, za sve hitne intervencije u vodovodu, elektrici, kanalizaciji i grejanju.",
  },
  {
    question: "Koliko brzo majstor stiže na adresu?",
    answer:
      "Za hitne slučajeve trudimo se da izađemo na teren u što kraćem roku, najčešće u roku od sat vremena, u zavisnosti od lokacije u Beogradu i trenutnog broja intervencija.",
  },
  {
    question: "Da li dajete garanciju na izvedene radove?",
    answer:
      "Da, na svaku izvedenu intervenciju i ugrađen materijal dajemo garanciju. Detalje garancije dogovaramo pre početka posla, zajedno sa cenom.",
  },
  {
    question: "Koje delove Beograda pokrivate?",
    answer:
      "Pokrivamo sve opštine grada Beograda: Novi Beograd, Zemun, Stari grad, Vračar, Savski venac, Voždovac, Zvezdara, Čukarica, Rakovica, Palilulu, Surčin, Barajevo i okolna naselja.",
  },
  {
    question: "Kako se formira cena intervencije?",
    answer:
      "Cena zavisi od vrste kvara, potrebnog materijala i hitnosti intervencije. Uvek dogovaramo okvirnu cenu telefonom, a konačnu potvrđujemo na licu mesta pre početka radova, bez skrivenih troškova.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyUs />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
            I ostale majstorske usluge za domaćinstvo
          </h2>
          <p className="mt-3 text-base text-primary/70">
            Kao pravi hausmajstor, pored hitnih intervencija bavimo se i
            sitnim popravkama koje vam štede vreme i nerve.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm sm:flex-row">
            <div className="relative h-48 w-full sm:h-auto sm:w-2/5">
              <Image
                src="/2149176716.jpg"
                alt="Servis i popravka bele tehnike (rerne, mašine za veš) u Beogradu"
                fill
                sizes="(max-width: 640px) 100vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <h3 className="font-heading text-lg font-bold text-primary">
                Servis kućnih aparata
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/70">
                Popravka rerni, mašina za veš i sudove, bojlera i drugih
                kućnih aparata na vašoj adresi.
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm sm:flex-row">
            <div className="relative h-48 w-full sm:h-auto sm:w-2/5">
              <Image
                src="/24857.jpg"
                alt="Montaža nameštaja i sitne kućne popravke u Beogradu"
                fill
                sizes="(max-width: 640px) 100vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <h3 className="font-heading text-lg font-bold text-primary">
                Montaža nameštaja i sitne popravke
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/70">
                Montaža nameštaja, vešanje polica i televizora, sitne
                stolarske i majstorske intervencije po kući.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <CoverageArea />
      <FAQ items={FAQ_ITEMS} />
      <CTASection />
    </>
  );
}
