import Image from "next/image";
import { PHONE_DISPLAY, PHONE_HREF, VIBER_HREF, WHATSAPP_HREF } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
            🕐 Hitne intervencije 0-24, svakog dana
          </p>
          <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Brzi majstor za Beograd — vodovod, elektrika, kanalizacija i grejanje
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Hitan kvar ne bira vreme. Naš tim izlazi na teren širom Beograda,
            danju i noću, i rešava probleme sa vodom, strujom, začepljenjem i
            grejanjem brzo i profesionalno.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-bold text-primary-dark shadow-lg transition hover:bg-accent-dark hover:text-white"
            >
              📞 Pozovite: {PHONE_DISPLAY}
            </a>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
              <a
                href={VIBER_HREF}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Viber
              </a>
            </div>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/85 sm:grid-cols-4">
            <li className="flex items-center gap-1.5">✅ Dolazak do 60 min</li>
            <li className="flex items-center gap-1.5">✅ Fer cena unapred</li>
            <li className="flex items-center gap-1.5">✅ Garancija na rad</li>
            <li className="flex items-center gap-1.5">✅ Ceo Beograd</li>
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <Image
              src="/hero.jpg"
              alt="Majstor za hitne intervencije spreman za popravke vodovoda, elektrike i kućnih aparata u Beogradu"
              width={1000}
              height={667}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
