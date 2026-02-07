import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              Zunaidi<span className="text-primary">Pompa</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Spesialis pengeboran sumur dan perbaikan pompa air untuk rumah
              tangga dan industri. Melayani Jabodetabek dan sekitarnya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Layanan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#layanan" className="hover:text-foreground transition-colors">
                  Pengeboran Sumur
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="hover:text-foreground transition-colors">
                  Perbaikan Pompa
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="hover:text-foreground transition-colors">
                  Instalasi Pipa
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="hover:text-foreground transition-colors">
                  Filter Penjernih
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Kontak</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+62818970473" className="hover:text-foreground transition-colors">
                  +62 818-970-473
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Depok, Jakarta, dan sekitarnya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Zunaidi Pompa. All Rights Reserved.</p>
          <p>
            Managed by{" "}
            <a
              href="https://www.instagram.com/zunarvy"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zunarvy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}