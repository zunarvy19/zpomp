import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplet, Wrench, ShowerHead, DropletOff } from "lucide-react";

const services = [
  {
    icon: Droplet,
    image: "/images/proyek-bor-sumur-1.jpg",
    title: "Jasa Bor Sumur",
    description:
      "Pengeboran sumur dalam untuk kebutuhan rumah, bisnis, dan industri dengan peralatan profesional.",
  },
  {
    icon: Wrench,
    image: "/images/servis-pompa-jetpump.jpg",
    title: "Service Pompa Air",
    description:
      "Perbaikan dan perawatan semua merk pompa air seperti Jet Pump, Shimizu, Sanyo, Panasonic, Grundfos, dan lainnya.",
    href: "/service-pompa/depok",
  },
  {
    icon: ShowerHead,
    image: "/images/pemasangan-pompa-baru.jpg",
    title: "Pemasangan Saluran Air",
    description:
      "Instalasi pipa air bersih, air kotor, dan saluran pembuangan dengan hasil rapi dan tahan lama.",
  },
  {
    icon: DropletOff,
    image: "/images/proyek-perumahan.jpg",
    title: "Solusi Saluran Air",

    description:
      "Mengatasi kebocoran, air keruh, debit kecil, mampet, dan masalah saluran air lainnya.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold">Layanan Kami</h3>
        <p className="text-gray-600 mt-2">Kami menyediakan solusi terbaik untuk kebutuhan air Anda.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, image, title, description, href }) => (
          <div key={title} className="bg-white rounded-xl shadow-sm overflow-hidden group">
            <div className="relative h-40 w-full">
              <Image src={image} alt={title} fill className="object-cover" />
              <span className="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shadow">
                <Icon size={18} className="text-white" />
              </span>
            </div>
            <div className="p-5 pt-7">
              <h4 className="font-bold text-lg">{title}</h4>
              <p className="text-sm text-gray-600 mt-2">{description}</p>
              {href && (
                <Link
                  href={href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-all hover:gap-2"
                >
                  Lihat layanan <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
