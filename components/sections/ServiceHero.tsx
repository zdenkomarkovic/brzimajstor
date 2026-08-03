import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF, VIBER_HREF, WHATSAPP_HREF } from "@/lib/constants";

export function ServiceHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
        <div>
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-white/60">
            <Link href="/" className="hover:text-accent">
              Početna
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-white/85">{eyebrow}</span>
          </nav>
          <p className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
            🕐 Hitne intervencije 0-24, svakog dana
          </p>
          <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
            {intro}
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
        </div>

        <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
          <Image
            src={image}
            alt={imageAlt}
            width={1000}
            height={750}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
