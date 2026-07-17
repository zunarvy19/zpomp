import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <Hero />
      {/* <Experience /> */}
      <Services />  
      <Testimonials />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}