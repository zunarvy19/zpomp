import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { absoluteUrl, businessSchema, homepageSeo, site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Service Pompa Air & Bor Sumur | Tirta Agung Teknik",
    template: "%s | Tirta Agung Teknik",
  },
  description: homepageSeo.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: "Tirta Agung Teknik | Jasa Bor Sumur & Service Pompa Air",
    description: homepageSeo.description,
    url: absoluteUrl(),
    siteName: "Tirta Agung Teknik",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tirta Agung Teknik - Layanan Bor Sumur dan Service Pompa Air",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirta Agung Teknik | Ahli Bor Sumur & Service Pompa Air",
    description: homepageSeo.description,
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/tat-logo-120.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={jakarta.className}>
      <head>
        {/* One Google tag loader can configure both Google Ads and GA4. */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GM7C7EJKEK"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-GM7C7EJKEK');
            gtag('config', 'AW-344369850');
            gtag('config', 'AW-344369850/18KrCPD2jdIcELrVmqQB', {
              phone_conversion_number: '0818-970-473',
              phone_conversion_callback: function(formattedNumber, mobileNumber) {
                document.querySelectorAll('[data-google-phone-link]').forEach(function(link) {
                  link.setAttribute('href', 'tel:' + mobileNumber);
                });

                document.querySelectorAll('[data-google-phone-number]').forEach(function(label) {
                  label.textContent = formattedNumber;
                });
              }
            });
          `}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [businessSchema, {
              "@type": "WebSite",
              "@id": `${site.url}/#website`,
              url: absoluteUrl(),
              name: site.name,
              inLanguage: "id-ID",
              publisher: { "@id": businessSchema["@id"] },
            }],
          }).replace(/</g, "\\u003c") }}
        />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
