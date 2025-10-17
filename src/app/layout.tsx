import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jasa Bor Sumur & Service Pompa Air Depok | Zunaidi Pompa",
    template: "%s | Zunaidi Pompa",
  },
  description:
    "Zunaidi Pompa: Ahli jasa bor sumur, service pompa air, dan instalasi pipa di Depok, Jakarta, Bogor. Solusi cepat dan profesional untuk masalah air bersih Anda.",
  metadataBase: new URL("https://zunaidipompa.vercel.app"),
  keywords: [
    "bor sumur jakarta selatan",
    "service pompa air jakarta selatan",
    "jasa instalasi pipa",
    "tukang ledeng jakarta selatan",
    "solusi air bersih",
    "bor sumur artesis",
    "service pompa air profesional",
  ],
  openGraph: {
    title: "Zunaidi Pompa | Jasa Bor Sumur & Service Pompa Air",
    description:
      "Solusi cepat dan profesional untuk semua masalah air Anda di area Depok dan Jakarta Selatan",
    url: "https://zunaidipompa.vercel.app",
    siteName: "Zunaidi Pompa",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Zunaidi Pompa - Layanan Bor Sumur dan Service Pompa Air",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zunaidi Pompa | Ahli Bor Sumur & Service Pompa Air",
    description:
      "Solusi cepat dan profesional untuk masalah air Anda di area Depok dan Jakarta Selatan",
    images: ["/og-image.ico"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={jakarta.className}>
      <head>
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-344369850"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-344369850');
          `}
        </Script>

        {/* Conversion Event Example */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            window.gtag = window.gtag || function(){dataLayer.push(arguments);};
            gtag('event', 'ads_conversion_Tentang_Kami_Halaman_1');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
