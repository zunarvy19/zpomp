"use client";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const navLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#keunggulan", label: "Tentang Kami" },
  { href: "#galeri", label: "Proyek" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header() {
  const handleClickWhatsApp = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "ads_conversion_WhatsApp_Navbar", {
        method: "whatsapp",
        value: 1,
      });
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="#hero" className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-blue-700">ZUNAIDI POMPA</span>
          <span className="text-xs text-gray-500">Jasa Bor Sumur & Service Pompa Air</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="https://wa.me/62818970473?text=Halo%20Zunaidi%20Pompa"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClickWhatsApp}
          className="bg-green-500 text-white text-sm font-semibold py-2.5 px-5 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
        >
          <MessageCircle size={16} />
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
}