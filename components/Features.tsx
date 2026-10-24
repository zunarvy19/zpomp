"use client";

import { Check, Search, TestTubeDiagonal, WalletCards, Wrench } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { revealMotion } from "@/lib/motion";

const commitments = [
  {
    number: "01",
    icon: Search,
    title: "Diagnosis sebelum tindakan",
    description: "Pompa, aliran, sambungan, dan komponen pendukung diperiksa untuk memahami sumber masalahnya.",
  },
  {
    number: "02",
    icon: WalletCards,
    title: "Penjelasan sebelum pengerjaan",
    description: "Temuan, pilihan tindakan, dan estimasi disampaikan agar Anda tahu apa yang akan dikerjakan.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Pengerjaan sesuai kebutuhan",
    description: "Tindakan diarahkan pada bagian yang memang bermasalah, bukan menambah pekerjaan yang tidak diperlukan.",
  },
  {
    number: "04",
    icon: TestTubeDiagonal,
    title: "Diuji sebelum selesai",
    description: "Fungsi pompa dan aliran air diperiksa kembali untuk memastikan hasil pengerjaan bekerja semestinya.",
  },
];

const process = ["Periksa", "Jelaskan", "Kerjakan", "Uji kembali"];

export default function Features() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="keunggulan" className="relative overflow-hidden bg-[#071C2E] py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full border-[72px] border-white/[0.025]" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 bg-[#1479C9]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div {...revealMotion("up", 0, reduceMotion)}>
            <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#8BD8F2]">
              <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
              06 · Kenapa Tirta Agung Teknik
            </p>

            <h2 className="mt-7 max-w-xl text-3xl font-extrabold leading-[1.1] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Tidak langsung menyarankan penggantian sebelum sumber masalah diperiksa.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
              Bukan tentang mengerjakan sebanyak mungkin. Tujuannya adalah menemukan
              tindakan yang memang diperlukan dan menjelaskannya dengan bahasa yang mudah dipahami.
            </p>

            <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Cara kerja dalam satu alur</p>
              <div className="mt-5 grid grid-cols-2 gap-y-5 sm:grid-cols-4">
                {process.map((item) => (
                  <div key={item} className="relative flex items-center gap-2 sm:block sm:border-l sm:border-white/10 sm:px-4 first:sm:border-l-0 first:sm:pl-0">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1479C9] text-white">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className="text-xs font-semibold text-white/70 sm:mt-3 sm:block">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <ol className="border-t border-white/15">
            {commitments.map(({ number, icon: Icon, title, description }, index) => (
              <motion.li
                key={number}
                {...revealMotion("right", 0.08 + index * 0.08, reduceMotion, 26)}
                className="group grid grid-cols-[42px_1fr_auto] gap-4 border-b border-white/15 py-6 sm:grid-cols-[56px_1fr_auto] sm:py-7"
              >
                <span className="pt-1 text-[10px] font-extrabold tracking-[0.18em] text-[#F59E0B]">{number}</span>
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.02em] sm:text-xl">{title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">{description}</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-[#8BD8F2] transition-colors group-hover:bg-[#1479C9] group-hover:text-white">
                  <Icon size={18} />
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
