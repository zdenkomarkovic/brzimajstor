import Link from "next/link";
import { LOCATIONS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

function groupByMunicipality() {
  const groups = new Map<string, typeof LOCATIONS>();
  for (const location of LOCATIONS) {
    const list = groups.get(location.municipality) ?? [];
    list.push(location);
    groups.set(location.municipality, list);
  }
  return Array.from(groups.entries());
}

export function CoverageArea() {
  const groups = groupByMunicipality();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
          Pokrivamo ceo Beograd
        </h2>
        <p className="mt-3 text-base leading-relaxed text-primary/70">
          Bez obzira u kom delu grada se nalazite, naš majstor izlazi na
          adresu istog dana. Pogledajte detalje za vaš deo grada, poređane
          po opštinama:
        </p>
      </div>

      <div className="mt-10 columns-1 gap-x-8 sm:columns-2 lg:columns-3">
        {groups.map(([municipality, locations]) => (
          <div key={municipality} className="mb-8 break-inside-avoid">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-accent-dark">
              {municipality}
            </h3>
            <ul className="mt-3 space-y-2">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/${location.slug}`}
                    className="text-sm text-primary/80 transition hover:text-accent-dark hover:underline"
                  >
                    {location.linkLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-sm text-primary/60">
        Radimo i u Surčinu, Barajevu i ostalim delovima Beograda koji ovde
        nisu pojedinačno navedeni.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-primary p-8 text-center text-white sm:p-10">
        <div>
          <h3 className="font-heading text-xl font-bold">
            Imate hitan kvar upravo sada?
          </h3>
          <p className="mt-3 text-white/80">
            Pozovite i u najkraćem roku šaljemo majstora na vašu adresu,
            bilo gde u Beogradu — dan, noć, vikend ili praznik.
          </p>
        </div>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-bold text-primary-dark shadow-lg transition hover:bg-accent-dark hover:text-white"
        >
          📞 Pozovite: {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}
