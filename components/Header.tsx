import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#hero" className="text-2xl font-bold text-blue-600">
          Zunaidi Pompa
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#layanan" className="text-gray-600 hover:text-blue-600">Layanan</Link>
          <Link href="#keunggulan" className="text-gray-600 hover:text-blue-600">Keunggulan</Link>
          <Link href="#galeri" className="text-gray-600 hover:text-blue-600">Galeri</Link>
        </div>
        <a
          href="https://wa.me/62818970473?text=Halo%20Zunaidi%20Pompa"
          target="_blank"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
        >
          <Phone size={18} />
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
}