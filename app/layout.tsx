import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { EMAIL, PHONE_E164, SITE_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Napomena: nema `template` ovde jer buildMetadata() (lib/metadata.ts) vec
  // sam sastavlja pun naslov sa imenom sajta - template bi ga duplirao.
  title: "Majstor Beograd 0-24 – Vodovod, Elektrika, Kanalizacija, Grejanje",
  description:
    "Hitne majstorske intervencije u Beogradu 0-24, svakog dana. Vodoinstalater, električar, odgušenje kanalizacije i servis grejanja. Dolazimo brzo, radimo kvalitetno. Pozovite odmah.",
  keywords: [
    "majstor Beograd",
    "hitne intervencije Beograd",
    "vodoinstalater Beograd",
    "električar Beograd",
    "odgušenje kanalizacije Beograd",
    "servis grejanja Beograd",
    "hausmajstor",
    "majstor 0-24",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Majstor Beograd 0-24 – Vodovod, Elektrika, Kanalizacija, Grejanje",
    description:
      "Hitne majstorske intervencije u Beogradu 0-24. Vodoinstalater, električar, odgušenje kanalizacije, servis grejanja.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE_NAME,
    image: `${SITE_URL}/logo.png`,
    telephone: PHONE_E164,
    email: EMAIL,
    url: SITE_URL,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Beograd",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beograd",
      addressCountry: "RS",
    },
    description:
      "Hitne majstorske intervencije u Beogradu 0-24: vodoinstalater, električar, odgušenje kanalizacije i servis grejanja.",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Majstorske usluge",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vodoinstalaterske usluge" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Električarske usluge" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Odgušenje kanalizacije" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Servis grejanja" } },
      ],
    },
  };

  return (
    <html lang="sr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink pb-16 lg:pb-0">
        <JsonLd data={localBusinessJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
