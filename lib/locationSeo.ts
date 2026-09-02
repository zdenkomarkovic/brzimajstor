// Generator SEO naslova (<title>) i H1 za lokacijske stranice.
//
// Cilj: sve lokacijske stranice imaju DOSLEDNU strukturu, ali ne i identicnu
// formulaciju - variramo obrazac po naselju i, gde ima smisla, dodajemo opstinu
// radi sireg geo-konteksta. Rotacija je determinisiticka (hash slug-a), pa je
// ista izmedju svih build-ova.
//
// Napomena: imena naselja se NE menjaju po padezima (uvek nominativ:
// "Majstor Vracar", "Majstor Zemun"), jer bi automatska deklinacija
// ("na Vracaru" / "u Zemunu" / "na Dedinju") lako proizvela gramaticke greske.

import { LOCATIONS, SITE_NAME } from "./constants";

/** FNV-1a hash -> stabilan indeks u opsegu [0, mod). */
function hashIndex(input: string, mod: number): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % mod;
}

/** True ako se naziv naselja razlikuje od naziva opstine (npr. "Konjarnik" vs "Zvezdara"). */
function hasDistinctMunicipality(name: string, municipality: string): boolean {
  return name.trim().toLowerCase() !== municipality.trim().toLowerCase();
}

export interface LocationSeo {
  /** Sadrzaj za buildMetadata({ title }) - brend sufiks (" | SITE_NAME") dodaje buildMetadata. */
  metaTitle: string;
  /** Vidljiv <h1> na stranici. */
  h1: string;
}

type Tpl = (ctx: { name: string; municipality: string; hasMuni: boolean }) => string;

// ─── H1 obrasci ──────────────────────────────────────────────────────────────
// Naselje je uvek blizu pocetka; svaki obrazac spominje bar deo usluga ili hitnost.
const H1_TEMPLATES: Tpl[] = [
  ({ name }) => `Majstor ${name} — hitne intervencije 0-24`,
  ({ name }) =>
    `Hausmajstor ${name} — vodoinstalater, električar i servis grejanja 0-24`,
  ({ name }) => `Majstor ${name} — vodovod, struja, kanalizacija i grejanje 0-24`,
  ({ name }) =>
    `Hitan majstor — ${name}, dolazak na adresu 0-24 svakog dana`,
  ({ name }) =>
    `${name}: vodoinstalater, električar i odgušenje kanalizacije 0-24`,
  ({ name, municipality, hasMuni }) =>
    `Majstor ${name}${hasMuni ? ` (${municipality})` : ""} — hitne popravke 0-24`,
];

// ─── <title> obrasci ─────────────────────────────────────────────────────────
// Kratki; buildMetadata dodaje " | HausMajstor Beograd". Duze varijante imaju
// zastitu duzine nize (LENGTH_GUARD), pa se vracaju na osnovni oblik ako bi
// pun naslov u SERP-u bio predugacak.
const META_TEMPLATES: Tpl[] = [
  ({ name }) => `Majstor ${name} 0-24`,
  ({ name }) => `Hausmajstor ${name} 0-24`,
  ({ name }) => `Majstor ${name} — hitne intervencije 0-24`,
  ({ name, municipality, hasMuni }) =>
    `Majstor ${name}${hasMuni ? ` (${municipality})` : ""} 0-24`,
];

const BASE_META: Tpl = ({ name }) => `Majstor ${name} 0-24`;

/** Google prikazuje ~60 znakova; racunamo i brend sufiks koji dodaje buildMetadata. */
const LENGTH_GUARD = 60;
const BRAND_SUFFIX_LEN = ` | ${SITE_NAME}`.length;

/**
 * Vraca { metaTitle, h1 } za dati slug lokacijske stranice.
 * Baca gresku ako slug ne postoji u LOCATIONS (namerno - hvata typo na build-u).
 */
export function getLocationSeo(slug: string): LocationSeo {
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) {
    throw new Error(
      `getLocationSeo: nepoznat slug "${slug}" (nije u LOCATIONS u lib/constants.ts)`,
    );
  }

  const ctx = {
    name: loc.name,
    municipality: loc.municipality,
    hasMuni: hasDistinctMunicipality(loc.name, loc.municipality),
  };

  const h1Tpl =
    H1_TEMPLATES[hashIndex(slug, H1_TEMPLATES.length)] ?? H1_TEMPLATES[0]!;
  const h1 = h1Tpl(ctx);

  // Meta obrazac biramo drugim "salt"-om da se ne poklapa uvek sa H1 obrascem.
  const metaIdx = hashIndex(`${slug}#meta`, META_TEMPLATES.length);
  const metaTpl = META_TEMPLATES[metaIdx] ?? BASE_META;
  let metaTitle = metaTpl(ctx);
  if (metaTitle.length + BRAND_SUFFIX_LEN > LENGTH_GUARD) {
    metaTitle = BASE_META(ctx);
  }

  return { metaTitle, h1 };
}
