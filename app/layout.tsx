import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import CallButton from "@/components/CallButton";
import JsonLd from "@/components/JsonLd";
import { MotionRoot } from "@/components/Reveal";
import { contact, phones, siteUrl, social } from "@/constants";
import { serviceHref, services } from "@/constants/services";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-schibsted",
  display: "swap",
});

const title = "Bajica Smederevo | Restauracija fasada, teraco i epoxy podovi";
const description =
  "Porodična građevinska firma iz Smedereva, tri generacije: restauracija fasada i spomenika kulture, teraco, mermerni i epoxy podovi.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Bajica Smederevo" },
  description,
  applicationName: "Bajica Smederevo",
  keywords: [
    "Bajica Smederevo",
    "građevinska firma Smederevo",
    "restauracija fasade",
    "sanacija fasade",
    "teraco pod",
    "epoxy pod",
    "restauracija mermera",
    "sanacija objekata",
  ],
  authors: [{ name: "Bajica Smederevo" }],
  creator: "Bajica Smederevo",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: "Bajica Smederevo", locale: "sr_RS", title, description },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: true, email: true },
  other: { "site-kind": "other", "page-type": "service" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F4F3EE",
};

// The firm, once for every page: search engines read who it is, where, and how to reach it
const business = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${siteUrl}/#firma`,
  name: "Bajica Smederevo",
  description,
  url: `${siteUrl}/`,
  logo: `${siteUrl}/assets/logo.svg`,
  image: `${siteUrl}/opengraph-image.png`,
  email: contact.email,
  telephone: phones.map((p) => p.e164),
  address: { "@type": "PostalAddress", addressLocality: "Smederevo", addressCountry: "RS" },
  areaServed: { "@type": "Country", name: "Srbija" },
  ...(social.length > 0 && { sameAs: social.map((s) => s.href) }),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usluge",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: `${siteUrl}${serviceHref(s)}` },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr" className={schibsted.variable} data-type="service">
      <body>
        <JsonLd data={business} />
        <MotionRoot>
          {children}
          <CallButton />
        </MotionRoot>
      </body>
    </html>
  );
}
