import { PHONE_DISPLAY, PHONE_HREF, VIBER_HREF, WHATSAPP_HREF } from "@/lib/constants";

export function CTASection({
  title = "Hitan kvar? Pozovite odmah.",
  subtitle = "Dostupni smo 0-24, svakog dana u nedelji, na teritoriji celog Beograda.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6">
        <h2 className="font-heading text-2xl font-extrabold text-primary-dark sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-xl text-primary-dark/80">{subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-dark px-7 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-primary"
          >
            📞 Pozovite: {PHONE_DISPLAY}
          </a>
          <div className="flex gap-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-primary-dark/20 bg-white/40 px-5 py-3.5 text-sm font-semibold text-primary-dark transition hover:bg-white/70"
            >
              WhatsApp
            </a>
            <a
              href={VIBER_HREF}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-primary-dark/20 bg-white/40 px-5 py-3.5 text-sm font-semibold text-primary-dark transition hover:bg-white/70"
            >
              Viber
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
