import { Button } from "./ui/button";
import { Phone, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Butuh Pengecekan Sistem Air?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          Konsultasikan kebutuhan Anda sekarang. Survey dan konsultasi teknis
          gratis untuk wilayah Jabodetabek.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold rounded-lg w-full sm:w-auto"
          >
            <a
              href="https://wa.me/62818970473?text=Halo%20Zunaidi%20Pompa,%20saya%20butuh%20bantuan."
              target="_blank"
              className="flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Sekarang
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold rounded-lg w-full sm:w-auto"
          >
            <a
              href="https://wa.me/62818970473?text=Halo,%20saya%20ingin%20konsultasi%20teknis."
              target="_blank"
              className="flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Konsultasi Dulu
            </a>
          </Button>
        </div>

        <p className="mt-8 text-white/60 text-sm">
          Respon cepat: 08:00 - 20:00 WIB | Layanan darurat 24 jam
        </p>
      </div>
    </section>
  );
}