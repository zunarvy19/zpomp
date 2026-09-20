import type { Metadata } from "next";
import ServicePompaDepokLanding from "@/components/ServicePompaDepokLanding";

const pageUrl = "https://zunaidipompa.zvy.my.id/service-pompa/depok";

export const metadata: Metadata = {
  title: "Service Pompa Air Depok | Teknisi Datang ke Lokasi",
  description:
    "Service pompa air dan jet pump area Depok. Menangani pompa mati, air tidak naik, tekanan kecil, pompa berisik, dan kebocoran. Hubungi 0818-970-473.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Service Pompa Air Depok | Zunaidi Pompa",
    description:
      "Teknisi service pompa air dan jet pump untuk area Depok dan sekitarnya. Konsultasikan masalah pompa Anda.",
    url: pageUrl,
    type: "website",
    images: ["/images/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Service Pompa Air Depok",
  serviceType: "Perbaikan dan perawatan pompa air serta jet pump",
  provider: {
    "@type": "LocalBusiness",
    name: "Zunaidi Pompa",
    url: "https://zunaidipompa.zvy.my.id",
    telephone: "+62818970473",
    image: "https://zunaidipompa.zvy.my.id/images/zp-logo.png",
  },
  areaServed: ["Depok", "Sawangan", "Bojongsari", "Pancoran Mas", "Beji", "Limo", "Cinere"],
  url: pageUrl,
};

export default function ServicePompaDepokPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicePompaDepokLanding />
    </>
  );
}
