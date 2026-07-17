import Image from "next/image";
import { MessageCircle, Phone, ShieldCheck, MapPin, Wrench } from "lucide-react";

const trustPoints = [
  { icon: MessageCircle, label: "Survey Gratis" },
  { icon: ShieldCheck, label: "Garansi Pekerjaan" },
  { icon: Wrench, label: "Teknisi Berpengalaman" },
];

export default function Hero() {
  return (
    <header id="hero" className="relative min-h-[560px] md:min-h-[640px] flex items-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/herro.png"
          alt="Teknisi Zunaidi Pompa sedang bekerja"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="container mx-auto px-6 py-20 text-white">
        <p className="text-sm font-semibold tracking-wide text-white/80 mb-3">
          JASA BOR SUMUR & SERVICE POMPA AIR
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl">
          Pompa Air Bermasalah? Kami Siap Membantu.
        </h2>
        <p className="mt-4 text-lg text-white/90 max-w-xl">
          Melayani jasa bor sumur, service pompa air, perbaikan saluran air dan
          solusi air bersih untuk rumah, bisnis, dan industri.
        </p>

        <div className="flex flex-wrap gap-6 mt-6 text-sm text-white/90">
          {trustPoints.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2">
              <Icon size={16} />
              {label}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://wa.me/62818970473?text=Halo%20Zunaidi%20Pompa,%20saya%20ingin%20berkonsultasi."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition-colors rounded-lg px-6 py-3 flex items-center gap-3"
          >
            <MessageCircle size={22} />
            <span className="text-left leading-tight">
              <span className="block font-bold">Chat via WhatsApp</span>
              <span className="block text-xs text-white/80">Respon cepat</span>
            </span>
          </a>

          <a
            href="tel:081234567890"
            className="bg-white text-gray-800 hover:bg-gray-100 transition-colors rounded-lg px-6 py-3 flex items-center gap-3"
          >
            <Phone size={22} className="text-blue-600" />
            <span className="text-left leading-tight">
              <span className="block font-bold">Telepon Sekarang</span>
              <span className="block text-xs text-gray-500">0812-3456-7890</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}