import "./globals.css";
import {Plus_Jakarta_Sans} from "next/font/google";
import { Metadata } from "next";

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})


export const metadata: Metadata = {
  // ## TAG SEO UTAMA ##
  title: {
    default: "Jasa Bor Sumur & Service Pompa Air Depok | Zunaidi Pompa",
    template: "%s | Zunaidi Pompa", 
  },
  description: "Zunaidi Pompa: Ahli jasa bor sumur, service pompa air, dan instalasi pipa di Depok, Jakarta, Bogor. Solusi cepat dan profesional untuk masalah air bersih Anda.",
  metadataBase: new URL("https://www.zunaidipompa.com"), // Ganti dengan URL domain Anda nanti
  
  // ## TAG SEO TAMBAHAN ##
  keywords: ["bor sumur jakarta selatan", "service pompa air jakarta selatan", "jasa instalasi pipa", "tukang ledeng jakarta selatan", "solusi air bersih", "bor sumur artesis", "service pompa air profesional"],
  authors: [{ name: "Zunaidi Pompa" }],
  creator: "Zunaidi Pompa",
  publisher: "Zunaidi Pompa",
  robots: {
    index: true,
    follow: true,
  },
  
  // ## TAG UNTUK SOCIAL MEDIA (OPEN GRAPH) ##
  openGraph: {
    title: "Zunaidi Pompa | Jasa Bor Sumur & Service Pompa Air",
    description: "Solusi cepat dan profesional untuk semua masalah air Anda di area Depok dan Jakarta Selatan",
    url: "https://www.zunaidipompa.com", 
    siteName: "Zunaidi Pompa",
    images: [
      {
        url: "/images/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Zunaidi Pompa - Layanan Bor Sumur dan Service Pompa Air",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // ## TAG UNTUK TWITTER CARD ##
  twitter: {
    card: "summary_large_image",
    title: "Zunaidi Pompa | Ahli Bor Sumur & Service Pompa Air",
    description: "Solusi cepat dan profesional untuk masalah air Anda di area Depok dan Jakarta Selatan",
    images: ["/og-image.png"], // Gunakan gambar yang sama dengan Open Graph
  },
  // ## TAG UNTUK FAVICON DAN ICONS ##
  icons: {
    icon: "/og-image.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.className}>
      <body className="bg-gray-100 text-gray-900">
        <main className=" mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
