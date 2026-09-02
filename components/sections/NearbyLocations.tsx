import Link from "next/link";
import { LOCATIONS } from "@/lib/constants";
import { getNearbyLocations } from "@/lib/locationLinks";

function hashIndex(input: string, mod: number): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % mod;
}

const HEADINGS: ((name: string) => string)[] = [
  (name) => `Majstor i u naseljima oko ${name}`,
  (name) => `Radimo i u okolini naselja ${name}`,
  () => `Druge lokacije u blizini`,
  () => `Majstor u susednim delovima Beograda`,
];

/**
 * Sekcija sa internim linkovima ka susednim lokacijskim stranicama.
 * Tekst i redosled linkova su specificni za svaku lokaciju (opstina + konkretna
 * okolna naselja), pa svaka stranica dobija jedinstven sadrzaj i skup linkova.
 */
export function NearbyLocations({ slug }: { slug: string }) {
  const current = LOCATIONS.find((l) => l.slug === slug);
  if (!current) return null;

  const nearby = getNearbyLocations(slug, 8);
  if (nearby.length === 0) return null;

  const sameMuni = nearby.filter(
    (l) => l.municipality === current.municipality,
  );

  const heading = HEADINGS[hashIndex(slug, HEADINGS.length)]!(current.name);

  const siblingNames = sameMuni
    .slice(0, 3)
    .map((l) => l.name)
    .join(", ");
  // Stranica koja nosi ime cele opstine (npr. "Vračar", "Palilula") vs. konkretno naselje.
  const isMunicipalityPage =
    current.name.trim().toLowerCase() ===
    current.municipality.trim().toLowerCase();

  let intro: string;
  if (sameMuni.length === 0) {
    intro = `Majstora šaljemo i u okolna naselja, u opštini ${current.municipality} i susednim delovima grada. Pozovite i dogovaramo dolazak na vašu adresu 0-24.`;
  } else if (isMunicipalityPage) {
    intro = `Pored užeg centra, izlazimo na adresu u celoj opštini ${current.municipality} — ${siblingNames} i okolnim naseljima. Pozovite bez obzira na to gde se tačno nalazite, majstor stiže istog dana.`;
  } else {
    intro = `Osim u naselju ${current.name}, izlazimo na adresu i u drugim delovima opštine ${current.municipality} — ${siblingNames} i okolini. Pozovite bez obzira na to gde se tačno nalazite, majstor stiže istog dana.`;
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <h2 className="font-heading text-xl font-bold text-primary sm:text-2xl">
        {heading}
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-primary/80">
        {intro}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {nearby.map((location) => (
          <li key={location.slug}>
            <Link
              href={`/${location.slug}`}
              className="inline-block rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-primary/80 transition hover:border-accent hover:text-accent-dark"
            >
              {location.linkLabel}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
