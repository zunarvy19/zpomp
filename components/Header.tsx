"use client";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickWhatsApp = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "ads_conversion_WhatsApp_Navbar", {
        method: "whatsapp",
        value: 1,
      });
    }
  };

  const navLinks = [
    { href: "#layanan", label: "Layanan" },
    { href: "#keunggulan", label: "Keunggulan" },
    { href: "#galeri", label: "Galeri" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#hero" className="text-xl font-bold text-foreground">
          Zunaidi<span className="text-primary">Pompa</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            onClick={handleClickWhatsApp}
            className="bg-accent hover:bg-accent/90 text-white rounded-lg"
          >
            <a
              href="https://wa.me/62818970473?text=Halo%20Zunaidi%20Pompa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">Hubungi</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-border md:hidden">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-foreground font-medium border-b border-border last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              onClick={handleClickWhatsApp}
              className="w-full mt-2 bg-accent hover:bg-accent/90 text-white rounded-lg"
            >
              <a
                href="https://wa.me/62818970473?text=Halo%20Zunaidi%20Pompa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Hubungi Kami
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
