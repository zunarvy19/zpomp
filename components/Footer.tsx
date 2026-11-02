import Link from "next/link";
import { site } from "@/lib/site";

const layanan = [
  { label: "Jasa Bor Sumur", href: "/#bor-sumur" },
  // { label: "Service Pompa Air Depok", href: "/service-pompa/depok" },
  { label: "Service Pompa Air", href: "/#layanan" },
  { label: "Pemasangan Saluran Air", href: "/#instalasi-pipa" },
  { label: "Solusi Saluran Air", href: "/#solusi-air" },
];
const informasi = [
  { label: "Dokumentasi Pekerjaan", href: "/#galeri" },
  { label: "Testimoni", href: "/#testimoni" },
  { label: "FAQ", href: "/#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-lg font-bold text-white">TIRTA AGUNG TEKNIK</p>
          <p className="mt-1 text-sm text-gray-400">Jasa Bor Sumur &amp; Service Pompa Air</p>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Melayani jasa bor sumur, service pompa air, perbaikan saluran air,
            dan solusi air bersih untuk rumah dan usaha.
          </p>
          <p className="mt-4 text-sm leading-6 text-gray-400">Area layanan: {site.areas.join(", ")}.</p>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Layanan</p>
          <ul className="space-y-2 text-sm">
            {layanan.map(({ label, href }) => <li key={href}><Link href={href} className="hover:text-white">{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Informasi</p>
          <ul className="space-y-2 text-sm">
            {informasi.map(({ label, href }) => <li key={href}><Link href={href} className="hover:text-white">{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Kontak</p>
          <Link href="/#kontak" className="text-sm hover:text-white">Telepon dan WhatsApp 0818-970-473</Link>
          <p className="mt-3 text-sm leading-6 text-gray-400">Konfirmasikan lokasi dan jadwal kunjungan sebelum memesan.</p>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto flex flex-col justify-between px-6 py-4 text-xs text-gray-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Tirta Agung Teknik. All Rights Reserved.</p>
          <p>Managed by <a href="https://www.instagram.com/zunarvy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Zunarvy</a></p>
        </div>
      </div>
    </footer>
  );
}
