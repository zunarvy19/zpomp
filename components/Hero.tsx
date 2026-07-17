import Image from "next/image";
import { MessageCircle, Phone, ShieldCheck, MapPin, Wrench } from "lucide-react";

const trustPoints = [
  { icon: MessageCircle, label: "Survey Gratis" },
  { icon: ShieldCheck, label: "Garansi Pekerjaan" },
  { icon: Wrench, label: "Teknisi Berpengalaman" },
];

export default function Hero() {
  return (
    <header id="hero" className="relative z-0 min-h-[560px] md:min-h-[640px] flex items-center">
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
                  <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.203.048-.382-.027-.532-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
        <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zm-8.475 18.23h-.005c-1.77 0-3.51-.48-5.025-1.38l-.36-.21-3.735.975.99-3.63-.225-.36c-1.005-1.59-1.53-3.435-1.53-5.355 0-5.505 4.5-9.99 10.02-9.99 2.685 0 5.19 1.035 7.08 2.925 1.89 1.905 2.925 4.425 2.925 7.095 0 5.505-4.5 9.99-10.005 9.99z"/>
      </svg>
            <span className="text-left leading-tight">
              <span className="block font-bold">Chat via WhatsApp</span>
              <span className="block text-xs text-white/80">Respon cepat</span>
            </span>
          </a>

          <a
            href="tel:0818970473"
            className="bg-white text-gray-800 hover:bg-gray-100 transition-colors rounded-lg px-6 py-3 flex items-center gap-3"
          >
            <Phone size={22} className="text-blue-600" />
            <span className="text-left leading-tight">
              <span className="block font-bold">Telepon Sekarang</span>
              <span className="block text-xs text-gray-500">0818-970-473</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}