// Susedne lokacije za internu navigaciju/linkove na lokacijskim stranicama.
// Sve se izvodi iz LOCATIONS (lib/constants.ts) - bez rucnog unosa i bez
// izmisljanja podataka. Rotacija dopune je deterministicka (hash slug-a).

import { LOCATIONS, type LocationLink } from "./constants";

function hashIndex(input: string, mod: number): number {
  if (mod <= 0) return 0;
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % mod;
}

/**
 * Vraca listu lokacija "u blizini" date lokacije:
 * 1) prvo sva naselja iz iste opstine,
 * 2) pa dopuna iz ostalih opstina, pocev od deterministicki rotiranog mesta
 *    (da svaka stranica ima drugaciju dopunu).
 */
export function getNearbyLocations(slug: string, count = 8): LocationLink[] {
  const current = LOCATIONS.find((l) => l.slug === slug);
  if (!current) {
    throw new Error(
      `getNearbyLocations: nepoznat slug "${slug}" (nije u LOCATIONS u lib/constants.ts)`,
    );
  }

  const sameMunicipality = LOCATIONS.filter(
    (l) => l.slug !== slug && l.municipality === current.municipality,
  );
  const otherMunicipality = LOCATIONS.filter(
    (l) => l.slug !== slug && l.municipality !== current.municipality,
  );

  const start = hashIndex(slug, otherMunicipality.length || 1);
  const rotatedOther = [
    ...otherMunicipality.slice(start),
    ...otherMunicipality.slice(0, start),
  ];

  return [...sameMunicipality, ...rotatedOther].slice(0, count);
}
