import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export function ServicesGrid() {
  return (
    <section id="usluge" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Majstorske usluge u Beogradu
        </h2>
        <p className="mt-3 text-base text-primary/70">
          Jedan poziv za sve hitne popravke u domaćinstvu i poslovnom
          prostoru — vodovod, elektrika, kanalizacija i grejanje.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <Link
            key={service.slug}
            href={`/${service.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={`${service.title} – hitne intervencije 0-24`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-heading text-lg font-bold text-primary">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/70">
                {service.description}
              </p>
              <ul className="mt-4 flex flex-1 flex-wrap gap-2">
                {service.keywords.map((keyword) => (
                  <li
                    key={keyword}
                    className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary/70"
                  >
                    {keyword}
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-dark">
                Detaljnije →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
