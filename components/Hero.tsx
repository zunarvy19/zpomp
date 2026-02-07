"use client";
import Image from "next/image";
import hero from "../public/images/plumber-making-phone-gesture.png";
import { Button } from "./ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

export default function Hero() {
  const credentials = [
    "Teknisi Bersertifikat",
    "10+ Tahun Pengalaman",
    "Respon Cepat 24 Jam",
  ];

  return (
    <header
      id="hero"
      className="relative min-h-[90vh] flex items-center bg-background border-b border-border"
    >
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="max-w-xl">
          <p className="section-heading">Spesialis Sistem Air</p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Masalah Air?
            <br />
            <span className="text-primary">Kami Ahlinya.</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Layanan pengeboran sumur, perbaikan pompa, dan instalasi sistem air
            untuk rumah tangga dan industri. Solusi teknis yang andal dan
            terukur.
          </p>

          {/* Credentials */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-muted-foreground">
            {credentials.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg"
            >
              <a
                href="https://wa.me/62818970473?text=Halo%20Zunaidi%20Pompa,%20saya%20ingin%20konsultasi%20teknis."
                target="_blank"
              >
                <Phone className="mr-2 h-5 w-5" />
                Konsultasi Teknis Gratis
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-semibold rounded-lg"
            >
              <a href="#layanan">
                Lihat Layanan
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-6">
            <div>
              <p className="stat-number">10+</p>
              <p className="stat-label">Tahun Pengalaman</p>
            </div>
            <div>
              <p className="stat-number">1000+</p>
              <p className="stat-label">Proyek Selesai</p>
            </div>
            <div>
              <p className="stat-number">24/7</p>
              <p className="stat-label">Layanan Darurat</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative hidden lg:block">
          <div className="relative rounded-lg overflow-hidden border border-border bg-muted">
            <Image
              src={hero}
              alt="Teknisi Zunaidi Pompa"
              width={600}
              height={500}
              className="object-cover"
              placeholder="blur"
              priority
            />
          </div>
          {/* Technical Badge */}
          <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Sertifikasi
            </p>
            <p className="font-semibold text-foreground">
              Teknisi Profesional
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}