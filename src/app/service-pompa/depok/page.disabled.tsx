// Temporarily disabled: rename this file to page.tsx to restore the Depok route.
import type { Metadata } from "next";
import ServicePompaDepokLanding from "@/components/ServicePompaDepokLanding";
import { absoluteUrl, businessSchema, site } from "@/lib/site";

const pageUrl = absoluteUrl("/service-pompa/depok");

export const metadata: Metadata = {
  title: "Service Pompa Air Depok | Teknisi Datang ke Lokasi",
  description:
    "Service pompa air dan jet pump area Depok. Menangani pompa mati, air tidak naik, tekanan kecil, pompa berisik, dan kebocoran. Hubungi 0818-970-473.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Service Pompa Air Depok | Tirta Agung Teknik",
    description:
      "Teknisi service pompa air dan jet pump untuk area Depok dan sekitarnya. Konsultasikan masalah pompa Anda.",
    url: pageUrl,
    type: "website",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Pompa Air Depok | Tirta Agung Teknik",
    description: "Perbaikan pompa air dan jet pump di Depok. Konsultasikan gejala pompa dan jadwal pengecekan di lokasi.",
    images: ["/images/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Service Pompa Air Depok",
  serviceType: "Perbaikan dan perawatan pompa air serta jet pump",
  provider: {
    "@id": businessSchema["@id"],
  },
  areaServed: site.areas,
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
