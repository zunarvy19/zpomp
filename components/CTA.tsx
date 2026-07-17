import { MessageCircle, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="kontak" className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold">Masih Ada Masalah dengan Air Anda?</h3>
          <p className="mt-2 text-blue-100 max-w-md">
            Jangan biarkan masalah air mengganggu aktivitas Anda. Hubungi kami sekarang untuk solusi terbaik!
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/62818970473?text=Halo%20Zunaidi%20Pompa,%20saya%20siap%20menggunakan%20jasa%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition-colors rounded-lg px-6 py-3 flex items-center gap-2 font-semibold"
          >
            <MessageCircle size={20} />
            Chat via WhatsApp
          </a>

          <a
            href="tel:081234567890"
            className="bg-white text-gray-800 hover:bg-gray-100 transition-colors rounded-lg px-6 py-3 flex items-center gap-2 font-semibold"
          >
            <Phone size={20} className="text-blue-600" />
            0812-3456-7890
          </a>
        </div>
      </div>
    </section>
  );
}