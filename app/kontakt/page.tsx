import { buildMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/ContactForm";
import {
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_AREA,
  VIBER_HREF,
  WHATSAPP_HREF,
  WORKING_HOURS,
} from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontaktirajte HausMajstor Beograd za hitne intervencije 0-24 - vodovod, elektrika, kanalizacija i grejanje. Telefon, Viber, WhatsApp i kontakt forma.",
  url: "/kontakt",
});

export default function KontaktPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
          Kontaktirajte nas
        </h1>
        <p className="mt-3 text-base text-primary/70">
          Za hitne slučajeve najbrže je da nas pozovete telefonom. Za sve
          ostalo, slobodno popunite formu ispod.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-lg font-bold text-primary">
              Kontakt podaci
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-primary/80">
              <li>
                📞{" "}
                <a href={PHONE_HREF} className="font-semibold text-primary hover:text-accent-dark">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                ✉️{" "}
                <a href={EMAIL_HREF} className="font-semibold text-primary hover:text-accent-dark">
                  {EMAIL}
                </a>
              </li>
              <li>📍 {SERVICE_AREA}</li>
              <li>🕐 {WORKING_HOURS}</li>
            </ul>

            <div className="mt-5 flex gap-3">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg bg-[#25D366] py-2.5 text-center text-sm font-bold text-white"
              >
                WhatsApp
              </a>
              <a
                href={VIBER_HREF}
                className="flex-1 rounded-lg bg-[#7360F2] py-2.5 text-center text-sm font-bold text-white"
              >
                Viber
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-primary p-6 text-white">
            <h2 className="font-heading text-lg font-bold">Hitan slučaj?</h2>
            <p className="mt-2 text-sm text-white/80">
              Za curenje vode, kvar na struji, začepljenje ili prestanak
              grejanja, pozovite direktno — brže je od forme.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-primary-dark"
            >
              📞 Pozovite: {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-heading text-lg font-bold text-primary">
            Pošaljite nam poruku
          </h2>
          <p className="mt-1 text-sm text-primary/60">
            Odgovaramo u najkraćem mogućem roku.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
