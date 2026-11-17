// Temporarily disabled: rename this file to page.tsx to restore the Depok route.
import type { Metadata } from "next";
import ServicePompaDepokLanding from "@/components/ServicePompaDepokLanding";
import { absoluteUrl, businessSchema, homepageSeo } from "@/lib/site";

const pageUrl = absoluteUrl("/service-pompa/depok");

export const metadata: Metadata = {
  title: "Service Pompa Air | Teknisi Datang ke Lokasi",
  description: homepageSeo.description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Service Pompa Air | Tirta Agung Teknik",
    description: homepageSeo.description,
    url: pageUrl,
    type: "website",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Pompa Air | Tirta Agung Teknik",
    description: homepageSeo.description,
    images: ["/images/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Service Pompa Air",
  serviceType: "Perbaikan dan perawatan pompa air serta jet pump",
  provider: {
    "@id": businessSchema["@id"],
  },
  areaServed: businessSchema.areaServed,
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
