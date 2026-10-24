"use client";

import Image from "next/image";
import { ArrowRight, Check, MessageCircle, Phone, ScanSearch } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { trackContactClick } from "@/lib/analytics";
import { revealMotion } from "@/lib/motion";

const assurances = [
  "Diagnosis sebelum tindakan",
  "Estimasi dijelaskan di awal",
  "Hasil pekerjaan diuji kembali",
];

export default function Hero() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="hero" className="relative overflow-hidden bg-[#F3F8FB]">
      <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-[#27A9E1]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[42%] bg-gradient-to-b from-white/65 to-transparent" />

      <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:gap-20 lg:py-20">
        <div className="max-w-3xl">
          <motion.p
            {...revealMotion("left", 0, reduceMotion)}
            className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#1479C9] sm:text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
            Jasa pompa & sistem air
          </motion.p>

          <motion.h1
            {...revealMotion("left", 0.08, reduceMotion)}
            className="mt-6 text-[2.7rem] font-extrabold leading-[1.03] tracking-[-0.055em] text-[#071C2E] sm:text-6xl lg:text-[4.25rem]"
          >
            Air tidak mengalir
            <span className="block text-[#1479C9]">seperti seharusnya?</span>
          </motion.h1>

          <motion.p
            {...revealMotion("left", 0.16, reduceMotion)}
            className="mt-7 max-w-2xl text-base leading-8 text-[#617080] sm:text-lg"
          >
            Kami menangani service pompa, bor sumur, dan instalasi air dengan
            mencari sumber masalahnya lebih dulu—supaya tindakan yang diambil
            benar-benar sesuai kebutuhan.
          </motion.p>

          <motion.div
            {...revealMotion("up", 0.24, reduceMotion, 20)}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="https://wa.me/62818970473?text=Halo%20Tirta%20Agung%20Teknik,%20saya%20ingin%20konsultasi%20tentang%20masalah%20air."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick("whatsapp", "hero")}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#1479C9] px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#155F9C]"
            >
              <MessageCircle size={19} />
              Ceritakan Masalah Anda
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="tel:0818970473"
              data-google-phone-link=""
              onClick={() => trackContactClick("phone", "hero")}
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#0B2845]/15 bg-white px-6 py-4 text-sm font-bold text-[#0B2845] transition-colors hover:border-[#1479C9] hover:text-[#1479C9]"
            >
              <Phone size={18} />
              <span data-google-phone-number="">0818-970-473</span>
            </a>
          </motion.div>

          <motion.div
            {...revealMotion("up", 0.32, reduceMotion, 18)}
            className="mt-9 grid gap-3 border-t border-[#0B2845]/10 pt-6 sm:grid-cols-3"
          >
            {assurances.map((item) => (
              <span key={item} className="flex items-start gap-2 text-xs font-semibold leading-5 text-[#31485C]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DFF3FB] text-[#1479C9]">
                  <Check size={11} strokeWidth={3} />
                </span>
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          {...revealMotion("right", 0.14, reduceMotion, 36)}
          className="relative mx-auto w-full max-w-[560px] pb-12 lg:pb-8"
        >
          <div className="absolute -right-6 top-8 h-[88%] w-[82%] rounded-[2rem] bg-[#0B2845] sm:-right-8" />
          <div className="absolute -right-12 top-0 hidden h-32 w-32 rounded-full border-[24px] border-[#27A9E1]/15 sm:block" />

          <figure className="relative ml-auto aspect-[4/4.7] w-[90%] overflow-hidden rounded-[2rem] border-[6px] border-white bg-[#DFF3FB] shadow-[0_28px_70px_rgba(7,28,46,0.18)]">
            <Image
              src="/images/hero-technician-ai-v1.png"
              alt="Ilustrasi teknisi sedang memeriksa instalasi pompa air rumah"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071C2E]/75 to-transparent" />
            <figcaption className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8BD8F2]">Ilustrasi layanan</p>
                <p className="mt-1 text-sm font-bold">Pemeriksaan pompa & instalasi air</p>
              </div>
              <ScanSearch size={23} className="shrink-0 text-[#F59E0B]" />
            </figcaption>
          </figure>

          <motion.div
            {...revealMotion("left", 0.42, reduceMotion, 20)}
            className="absolute -left-1 top-10 max-w-[210px] rounded-2xl border border-[#DCE5EC] bg-white p-4 shadow-[0_18px_45px_rgba(7,28,46,0.12)] sm:-left-5 sm:p-5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFF3FB] text-[#1479C9]">
              <ScanSearch size={18} />
            </span>
            <p className="mt-4 text-sm font-extrabold leading-5 text-[#071C2E]">Pengecekan, bukan tebakan.</p>
            <p className="mt-1 text-[11px] leading-4 text-[#617080]">Mulai dari gejala yang Anda lihat.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
