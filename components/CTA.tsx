"use client";

import { ArrowUpRight, Check, MessageCircle, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { trackContactClick } from "@/lib/analytics";
import { revealMotion } from "@/lib/motion";

const assurances = [
  "Pengecekan lebih dulu",
  "Estimasi dijelaskan",
  "Hasil diuji kembali",
];

export default function CTA() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="kontak" className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <motion.div
        {...revealMotion("up", 0, reduceMotion, 24)}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071C2E] px-6 py-8 text-white sm:px-10 sm:py-10 lg:px-14 lg:py-14"
      >
        <div className="pointer-events-none absolute -right-20 -top-44 h-[500px] w-[500px] rounded-full border-[72px] border-[#27A9E1]/10" />
        <div className="pointer-events-none absolute -bottom-40 right-40 h-72 w-72 rounded-full bg-[#1479C9]/20 blur-3xl" />
        <div className="pointer-events-none absolute left-[52%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

        <motion.div
          {...revealMotion("none", 0.08, reduceMotion)}
          className="relative flex items-center justify-between border-b border-white/10 pb-6"
        >
          <p className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#8BD8F2] sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
            Langkah berikutnya
          </p>
          <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white/45">
            07 / KONTAK
          </span>
        </motion.div>

        <div className="relative grid gap-10 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-14">
          <motion.div {...revealMotion("left", 0.14, reduceMotion, 24)}>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[3.5rem]">
              Masalah air belum selesai?
              <span className="mt-2 block text-[#57C4EA]">Mulai dari gejalanya.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Tidak perlu menebak kerusakannya. Ceritakan kondisi pompa, aliran air,
              dan lokasi Anda agar kami bisa mengarahkan pengecekan yang sesuai.
            </p>
          </motion.div>

          <motion.div
            {...revealMotion("right", 0.2, reduceMotion, 24)}
            className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-sm sm:p-7"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8BD8F2]">Hubungi langsung</p>
                <p className="mt-2 text-sm leading-6 text-white/55">Pilih cara yang paling nyaman untuk Anda.</p>
              </div>
              <ArrowUpRight size={22} className="shrink-0 text-[#F59E0B]" />
            </div>

            <div className="mt-6 grid gap-3">
              <a
                href="https://wa.me/62818970473?text=Halo%20Tirta%20Agung%20Teknik,%20saya%20ingin%20konsultasi%20tentang%20masalah%20air."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick("whatsapp", "cta")}
                className="group flex items-center justify-between rounded-xl bg-[#1479C9] px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-[#155F9C]"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={19} /> Konsultasi via WhatsApp
                </span>
                <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="tel:0818970473"
                data-google-phone-link=""
                onClick={() => trackContactClick("phone", "cta")}
                className="flex items-center justify-between rounded-xl border border-white/15 px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-white/[0.07]"
              >
                <span className="flex items-center gap-3">
                  <Phone size={18} className="text-[#57C4EA]" /> Telepon
                </span>
                <span data-google-phone-number="" className="text-xs text-white/55">0818-970-473</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...revealMotion("up", 0.28, reduceMotion, 16)}
          className="relative grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3"
        >
          {assurances.map((item) => (
            <span key={item} className="flex items-center gap-2 text-xs font-semibold text-white/55">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#27A9E1]/15 text-[#8BD8F2]">
                <Check size={11} strokeWidth={3} />
              </span>
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
