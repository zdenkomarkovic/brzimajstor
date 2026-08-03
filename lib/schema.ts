import { SITE_URL, BUSINESS_NAME, PHONE_E164 } from "@/lib/constants";

/** JSON-LD za pojedinacnu uslugu (Service schema) */
export function buildServiceJsonLd({
  name,
  description,
  slug,
  area = "Beograd",
}: {
  name: string;
  description: string;
  slug: string;
  /** Naziv oblasti koju usluga pokriva (grad ili konkretno naselje/opština) */
  area?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${SITE_URL}/${slug}`,
    areaServed: {
      "@type": "Place",
      name: area,
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: BUSINESS_NAME,
      telephone: PHONE_E164,
      url: SITE_URL,
    },
  };
}

/** JSON-LD za breadcrumb navigaciju */
export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
