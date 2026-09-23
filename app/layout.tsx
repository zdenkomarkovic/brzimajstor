import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
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

const HOME_TITLE =
  "Majstor Beograd 0-24 – Vodovod, Elektrika, Kanalizacija, Grejanje";
const HOME_DESCRIPTION =
  "Hitne majstorske intervencije u Beogradu 0-24, svakog dana. Vodoinstalater, električar, odgušenje kanalizacije i servis grejanja. Dolazimo brzo, radimo kvalitetno. Pozovite odmah.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Napomena: nema `template` ovde jer buildMetadata() (lib/metadata.ts) vec
  // sam sastavlja pun naslov sa imenom sajta - template bi ga duplirao.
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description:
      "Hitne majstorske intervencije u Beogradu 0-24. Vodoinstalater, električar, odgušenje kanalizacije, servis grejanja.",
    images: [
      { url: "/og-image.jpg", width: 1000, height: 667, alt: SITE_NAME },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#12314f",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/logo.png`,
    telephone: PHONE_E164,
    email: EMAIL,
    url: SITE_URL,
    priceRange: "$$",
    currenciesAccepted: "RSD",
    paymentAccepted: "Gotovina, Kartica",
    areaServed: {
      "@type": "City",
      name: "Beograd",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.7866,
      longitude: 20.4489,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beograd",
      addressRegion: "Beograd",
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

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "sr-RS",
    publisher: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <html lang="sr-RS" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink pb-16 lg:pb-0">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ECBFRVLM60"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ECBFRVLM60');
          `}
        </Script>
        <Script id="ga-phone-click-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function (e) {
              var link = e.target.closest('a[href^="tel:"]');
              if (!link) return;
              gtag('event', 'phone_click', {
                phone_number: link.getAttribute('href').replace('tel:', ''),
                link_text: (link.textContent || '').trim(),
                page_path: window.location.pathname,
              });
            });
          `}
        </Script>
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={localBusinessJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
