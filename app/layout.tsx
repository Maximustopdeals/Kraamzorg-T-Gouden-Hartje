import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import StickyCta from "@/components/StickyCta";
import CookieConsent from "@/components/CookieConsent";
import FooterVisibility from "@/components/FooterVisibility"; // ← NIEUW
import { site } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/schema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kraamzorg Almere – Warm & Persoonlijk | 'T Gouden Hartje",
    template: "%s | Kraamzorg 'T Gouden Hartje",
  },
  description:
    "Professionele kraamzorg in Almere met warmte, aandacht en rust. 'T Gouden Hartje biedt persoonlijke begeleiding tijdens jouw kraamtijd.",
  robots: { index: true, follow: true },
  verification: {
    google: site.analytics.googleVerification,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.name,
    url: site.url,
    images: [
      {
        url: "/images/pasgeboren-baby-slaapt-kraamzorg-almere.webp",
        width: 800,
        height: 400,
        alt: "Pasgeboren baby die rustig slaapt, verzorgd door kraamzorg 'T Gouden Hartje",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraamzorg Almere – Warm & Persoonlijk | 'T Gouden Hartje",
    description:
      "Professionele kraamzorg in Almere met warmte, aandacht en rust.",
    images: ["/images/pasgeboren-baby-slaapt-kraamzorg-almere.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#a5537d",
  width: "device-width",
  initialScale: 1,
};

const consentDefault = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'wait_for_update': 500
});
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://elfsightcdn.com" />
        <link rel="dns-prefetch" href="https://static.elfsight.com" />
        {/* Consent Mode v2 — moet vóór GTM */}
        <Script id="consent-default" strategy="beforeInteractive">
          {consentDefault}
        </Script>
        {/* GTM — enige analytics-laag. GA4 configureren in GTM. */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.analytics.gtm}');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${site.analytics.gtm}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        <a href="#inhoud" className="skip-link">
          Direct naar inhoud
        </a>
        <Header />
        <main id="inhoud">{children}</main>
        <Footer />
        <StickyCta />
        <WhatsAppFloat />
        <BackToTop />
        <CookieConsent />
        <FooterVisibility />
      </body>
    </html>
  );
}
