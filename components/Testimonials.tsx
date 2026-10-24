"use client";

import { Quote, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { revealMotion } from "@/lib/motion";

const testimonials = [
  {
    name: "Budi Santoso",
    location: "Bekasi",
    quote: "Pelayanan cepat, teknisi ramah dan profesional. Pompa yang mati total langsung normal lagi.",
  },
  {
    name: "Rina Marlina",
    location: "Depok",
    quote: "Sumur bor 80 meter beres dalam 1 hari. Hasilnya bagus dan airnya jernih. Terima kasih Tirta Agung Teknik!",
  },
  {
    name: "Ahmad Fauzi",
    location: "Tangerang",
    quote: "Pipa bocor di rumah saya diperbaiki dengan rapi. Harganya juga wajar.",
  },
  {
    name: "Wahyudi",
    location: "Jakarta",
    quote: "Sudah langganan service pompa di sini. Selalu responsif dan hasilnya memuaskan.",
  },
];

export default function Testimonials() {
  const [featured, ...others] = testimonials;
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="testimoni" className="bg-[#F3F8FB] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-6 border-t border-[#0B2845]/15 pt-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <motion.div {...revealMotion("left", 0, reduceMotion)}>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#1479C9]">05 · Suara pelanggan</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-[#071C2E] sm:text-4xl lg:text-5xl">
              Yang dirasakan setelah masalahnya ditangani.
            </h2>
          </motion.div>
          <motion.p
            {...revealMotion("right", 0.08, reduceMotion)}
            className="max-w-xl self-end text-sm leading-7 text-[#617080] sm:text-base"
          >
            Bagi pelanggan, hasil akhirnya sederhana: pompa kembali bekerja, aliran air normal, dan proses pengerjaannya dapat dipahami.
          </motion.p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[1.75rem] border border-[#DCE5EC] bg-white lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            {...revealMotion("left", 0.08, reduceMotion, 30)}
            className="relative flex min-h-[430px] flex-col justify-between overflow-hidden bg-[#1479C9] p-8 text-white sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute -bottom-36 -right-28 h-80 w-80 rounded-full border-[52px] border-white/[0.07]" />
            <div className="relative">
              <div className="flex items-center justify-between gap-6">
                <Quote size={38} className="text-[#BCEBFA]" />
                <div className="flex gap-1 text-[#F59E0B]" aria-label="5 dari 5 bintang">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-12 max-w-xl text-2xl font-bold leading-[1.45] tracking-[-0.025em] sm:text-3xl">
                “{featured.quote}”
              </blockquote>
            </div>

            <div className="relative mt-12 flex items-center gap-4 border-t border-white/20 pt-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-extrabold text-[#1479C9]">
                {featured.name.charAt(0)}
              </span>
              <div>
                <p className="font-bold">{featured.name}</p>
                <p className="mt-1 text-xs text-white/60">Pelanggan · {featured.location}</p>
              </div>
            </div>
          </motion.article>

          <div className="divide-y divide-[#DCE5EC] px-7 sm:px-10">
            {others.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                {...revealMotion("right", 0.12 + index * 0.08, reduceMotion, 24)}
                className="py-8 sm:py-9"
              >
                <div className="flex items-start gap-5">
                  <span className="pt-1 text-[10px] font-extrabold tracking-[0.16em] text-[#1479C9]">0{index + 2}</span>
                  <div>
                    <blockquote className="text-base font-semibold leading-7 text-[#071C2E]">“{testimonial.quote}”</blockquote>
                    <div className="mt-5 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DFF3FB] text-xs font-extrabold text-[#1479C9]">
                        {testimonial.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#071C2E]">{testimonial.name}</p>
                        <p className="text-xs text-[#617080]">Pelanggan · {testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
