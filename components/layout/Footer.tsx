import Image from "next/image";
import Link from "next/link";
import {
  EMAIL,
  EMAIL_HREF,
  LOCATIONS,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_AREA,
  SERVICES,
  SITE_NAME,
  WORKING_HOURS,
} from "@/lib/constants";

function groupByMunicipality() {
  const groups = new Map<string, typeof LOCATIONS>();
  for (const location of LOCATIONS) {
    const list = groups.get(location.municipality) ?? [];
    list.push(location);
    groups.set(location.municipality, list);
  }
  return Array.from(groups.entries());
}

export function Footer() {
  const year = new Date().getFullYear();
  const locationGroups = groupByMunicipality();

  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt={`${SITE_NAME} logo`}
              width={200}
              height={200}
              className="h-32 w-32"
            />
            <span className="font-heading text-lg font-bold text-white">HausMajstor</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            Brzi majstor za hitne intervencije u Beogradu — vodovod, elektrika, kanalizacija i
            grejanje. Dostupni 0-24, svakog dana.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
            Usluge
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="transition hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
            Sajt
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="transition hover:text-accent">
                Početna
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="transition hover:text-accent">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
            Kontakt
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={PHONE_HREF} className="transition hover:text-accent">
                📞 {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={EMAIL_HREF} className="break-all transition hover:text-accent">
                ✉️ {EMAIL}
              </a>
            </li>
            <li>📍 {SERVICE_AREA}</li>
            <li>🕐 {WORKING_HOURS}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-white/10 px-4 py-10 sm:px-6">
        <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
          Lokacije koje pokrivamo
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
          {locationGroups.map(([municipality, locations]) => (
            <div key={municipality}>
              <h3 className="text-xs font-bold uppercase tracking-wide text-white/50">
                {municipality}
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {locations.map((location) => (
                  <li key={location.slug}>
                    <Link href={`/${location.slug}`} className="transition hover:text-accent">
                      {location.linkLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50 sm:px-6">
        © {year} {SITE_NAME}. Sva prava zadržana. · Izrada sajta{" "}
        <a
          href="https://manikamwebsolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white/70 transition hover:text-accent"
        >
          Manikam Web Solutions
        </a>
      </div>
    </footer>
  );
}
