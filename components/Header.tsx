"use client";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { trackContactClick } from "@/lib/analytics";

const navLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header() {
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="#hero" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/images/tat-logo.png"
            alt="Logo Tirta Agung Teknik"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="whitespace-nowrap text-sm font-bold text-blue-700 sm:text-xl">TIRTA AGUNG TEKNIK</span>
            <span className="hidden text-xs text-gray-500 lg:block">Jasa Bor Sumur & Service Pompa Air</span>
          </div>
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
          href="https://wa.me/62818970473?text=Halo%20Tirta%20Agung%20Teknik"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactClick("whatsapp", "navbar")}
          className="flex shrink-0 items-center gap-2 rounded-lg bg-green-500 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-600 sm:px-5"
        >
          <MessageCircle size={16} />
          <span className="hidden sm:inline">Hubungi Kami</span>
        </Link>
      </div>
    </nav>
  );
}
