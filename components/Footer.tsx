import Link from "next/link";


const layanan = ["Jasa Bor Sumur", "Service Pompa Air", "Pemasangan Saluran Air", "Solusi Saluran Air"];
const informasi = ["Tentang Kami", "Proyek", "Testimoni", "FAQ"];
const area = ["Jakarta", "Bekasi", "Depok", "Tangerang", "Bogor"];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <p className="text-lg font-bold text-white">ZUNAIDI POMPA</p>
          <p className="text-sm text-gray-400 mt-1">Jasa Bor Sumur & Service Pompa Air</p>
          <p className="text-sm mt-4 text-gray-400 leading-relaxed">
            Melayani jasa bor sumur, service pompa air, perbaikan saluran air, dan solusi air bersih
            untuk rumah, bisnis, dan industri.
          </p>
          {/* <div className="flex gap-3 mt-4">
            <Facebook size={18} />
            <Instagram size={18} />
            <MessageCircle size={18} />
          </div> */}
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Layanan</p>
          <ul className="space-y-2 text-sm">
            {layanan.map((item) => (
              <li key={item}><Link href="#layanan" className="hover:text-white">{item}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Informasi</p>
          <ul className="space-y-2 text-sm">
            {informasi.map((item) => (
              <li key={item}><Link href="#" className="hover:text-white">{item}</Link></li>
            ))}
          </ul>
        </div>

        {/* <div>
          <p className="font-semibold text-white mb-3">Kontak Kami</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              Jl. Raya Pengasinan No. 123, Kec. Sawangan, Depok, Jawa Barat
            </li>
            <li className="flex items-center gap-2"><Phone size={16} /> 0818-970-473</li>
            <li className="flex items-center gap-2"><Clock size={16} /> Senin - Sabtu, 08.00 - 17.00</li>
          </ul>
        </div> */}
      </div>

      <div className="container mx-auto px-6 pb-6">
        <p className="text-xs text-gray-500">Area Layanan: {area.join(", ")}</p>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Zunaidi Pompa. All Rights Reserved.</p>
          <p>
            Managed by{" "}
            <a href="https://www.instagram.com/zunarvy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Zunarvy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}