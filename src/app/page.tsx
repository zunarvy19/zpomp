import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";
import { absoluteUrl, homepageSeo, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: homepageSeo.title },
  description: homepageSeo.description,
  alternates: { canonical: absoluteUrl() },
  openGraph: {
    ...homepageSeo,
    url: absoluteUrl(),
    siteName: site.name,
    locale: "id_ID",
    type: "website",
    images: [{
      url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "Tirta Agung Teknik - Layanan Bor Sumur dan Service Pompa Air",
    }],
  },
  twitter: {
    ...homepageSeo,
    card: "summary_large_image",
    images: ["/images/og-image.png"],
  },
};

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
      <Hero />
      <Services />  
      <Gallery />
      <Testimonials />
      <Features />
      <FAQ />
      <CTA />
      </main>
      <Footer />
    </div>
  );
}
