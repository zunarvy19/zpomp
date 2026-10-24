"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, Filter, Pipette, Wrench } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { revealMotion } from "@/lib/motion";

const supportingServices = [
  {
    number: "02",
    icon: Droplets,
    title: "Jasa Bor Sumur",
    description: "Sumber air baru untuk kebutuhan rumah maupun usaha, disesuaikan dengan kondisi lokasi.",
    tags: ["Rumah", "Usaha", "Sumber baru"],
  },
  {
    number: "03",
    icon: Pipette,
    title: "Instalasi Pompa & Pipa",
    description: "Pemasangan dan penataan jalur pompa, tandon, otomatis, serta distribusi air.",
    tags: ["Pompa baru", "Tandon", "Jalur air"],
  },
  {
    number: "04",
    icon: Filter,
    title: "Solusi Sistem Air",
    description: "Penanganan aliran kecil, kebocoran, sumbatan, dan kebutuhan filter air.",
    tags: ["Debit kecil", "Bocor", "Filter"],
  },
];

export default function Services() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="layanan" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-6 border-t border-[#0B2845]/15 pt-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <motion.div {...revealMotion("left", 0, reduceMotion)}>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#1479C9]">02 · Layanan</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-[#071C2E] sm:text-4xl lg:text-5xl">
              Satu sistem air, ditangani secara menyeluruh.
            </h2>
          </motion.div>
          <motion.p
            {...revealMotion("right", 0.08, reduceMotion)}
            className="max-w-xl self-end text-sm leading-7 text-[#617080] sm:text-base"
          >
            Bukan sekadar daftar jasa. Kami melihat hubungan antara sumber air,
            pompa, pipa, dan distribusinya agar penanganan tidak terputus-putus.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.article
            {...revealMotion("left", 0.06, reduceMotion, 32)}
            className="group overflow-hidden rounded-[1.75rem] bg-[#071C2E] text-white"
          >
            <div className="relative min-h-[330px] overflow-hidden sm:min-h-[410px]">
              <Image
                src="/images/pemasangan-part-pompa.jpg"
                alt="Dokumentasi instalasi pompa dan kontrol otomatis"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071C2E] via-[#071C2E]/15 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#071C2E]/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
                Dokumentasi pekerjaan
              </span>
            </div>

            <div className="grid gap-6 p-7 sm:p-9 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="flex items-center gap-3 text-[#8BD8F2]">
                  <span className="text-xs font-bold tracking-[0.18em]">01</span>
                  <span className="h-px w-8 bg-[#F59E0B]" />
                  <Wrench size={18} />
                </div>
                <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">Service Pompa Air</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
                  Pemeriksaan, perbaikan, dan perawatan pompa berdasarkan sumber masalah—mulai dari mesin, otomatis, daya hisap, hingga instalasi pendukung.
                </p>
              </div>
              <Link
                href="/service-pompa/depok"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#1479C9] px-5 text-sm font-bold text-white transition-colors hover:bg-[#155F9C]"
              >
                Detail layanan <ArrowRight size={17} />
              </Link>
            </div>
          </motion.article>

          <div className="grid gap-4">
            {supportingServices.map(({ number, icon: Icon, title, description, tags }, index) => (
              <motion.article
                key={title}
                {...revealMotion("right", 0.1 + index * 0.08, reduceMotion, 28)}
                className="group rounded-2xl border border-[#DCE5EC] bg-[#F8FBFD] p-6 transition-colors hover:border-[#8BD8F2] hover:bg-[#F3F8FB] sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#1479C9]">{number}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#1479C9] shadow-[0_8px_24px_rgba(7,28,46,0.06)]">
                      <Icon size={19} />
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/62818970473?text=${encodeURIComponent(`Halo Tirta Agung Teknik, saya ingin bertanya tentang ${title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Tanyakan ${title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0B2845]/10 text-[#1479C9] transition-all group-hover:border-[#1479C9] group-hover:bg-[#1479C9] group-hover:text-white"
                  >
                    <ArrowRight size={15} />
                  </a>
                </div>

                <h3 className="mt-5 text-xl font-extrabold tracking-[-0.025em] text-[#071C2E] sm:text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#617080]">{description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#0B2845]/10 bg-white px-3 py-1 text-[10px] font-bold text-[#31485C]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          {...revealMotion("up", 0.18, reduceMotion, 20)}
          className="mt-9 flex flex-col gap-4 border-t border-[#0B2845]/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-extrabold text-[#071C2E]">Belum yakin masalahnya ada di pompa atau instalasi?</p>
            <p className="mt-1 text-sm text-[#617080]">Ceritakan gejalanya. Kami bantu menentukan titik pengecekan awal.</p>
          </div>
          <a
            href="https://wa.me/62818970473?text=Halo%20Tirta%20Agung%20Teknik,%20saya%20belum%20tahu%20sumber%20masalah%20air%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#1479C9]"
          >
            Konsultasikan masalah <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
