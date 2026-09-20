"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Gauge,
  MessageCircle,
  Phone,
  ShieldCheck,
  TimerReset,
  Wrench,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { trackContactClick } from "@/lib/analytics";

const whatsappUrl =
  "https://wa.me/62818970473?text=Halo%20Zunaidi%20Pompa%2C%20saya%20butuh%20service%20pompa%20air%20di%20Depok.";

const problems = [
  "Pompa mati atau tidak menyala",
  "Air tidak naik atau tekanannya kecil",
  "Pompa berisik, bocor, atau cepat panas",
  "Jet pump hidup terus atau sering kehilangan tekanan",
];

const serviceAreas = [
  "Depok",
  "Sawangan",
  "Bojongsari",
  "Pancoran Mas",
  "Beji",
  "Limo",
  "Cinere",
];

const steps = [
  {
    title: "Ceritakan masalahnya",
    description: "Hubungi kami lewat telepon atau WhatsApp dan jelaskan gejala pompa Anda.",
  },
  {
    title: "Pengecekan di lokasi",
    description: "Teknisi memeriksa pompa, instalasi, dan sumber masalah sebelum pengerjaan.",
  },
  {
    title: "Estimasi transparan",
    description: "Biaya dan tindakan yang diperlukan dijelaskan sebelum perbaikan dimulai.",
  },
  {
    title: "Pompa diuji kembali",
    description: "Setelah perbaikan, aliran dan tekanan air diperiksa agar berfungsi normal.",
  },
];

export default function ServicePompaDepokLanding() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Header />

      <main>
        <section id="hero" className="relative isolate overflow-hidden bg-slate-950 text-white">
          <Image
            src="/images/servis-pompa-jetpump.jpg"
            alt="Teknisi service pompa air dan jet pump di Depok"
            fill
            priority
            className="-z-20 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-slate-950/80" />

          <div className="container mx-auto grid min-h-[640px] items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-blue-300/30 bg-blue-500/15 px-4 py-2 text-sm font-semibold text-blue-100">
                Service pompa air area Depok dan sekitarnya
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
                Service Pompa Air Depok, Teknisi Datang ke Lokasi
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">
                Pompa mati, air tidak naik, tekanan kecil, atau jet pump bermasalah?
                Konsultasikan kondisinya dan dapatkan pengecekan langsung di lokasi.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:0818970473"
                  onClick={() => trackContactClick("phone", "hero")}
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
                >
                  <Phone size={21} />
                  Telepon 0818-970-473
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContactClick("whatsapp", "hero")}
                  className="inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-6 py-4 font-bold text-white transition hover:bg-emerald-400"
                >
                  <MessageCircle size={21} />
                  Chat WhatsApp
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-200">
                <span className="flex items-center gap-2"><ShieldCheck size={18} /> Garansi pekerjaan</span>
                <span className="flex items-center gap-2"><CircleDollarSign size={18} /> Estimasi transparan</span>
                <span className="flex items-center gap-2"><Wrench size={18} /> Berbagai merek pompa</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">Masalah yang kami tangani</p>
              <ul className="mt-5 space-y-4">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3 text-slate-100">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={20} />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontak"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-200 hover:text-white"
              >
                Cek ketersediaan teknisi <ChevronRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section id="layanan" className="container mx-auto px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Fokus pada sumber masalah</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Perbaikan Pompa Air dan Jet Pump</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Pengecekan mencakup mesin pompa, kapasitor, otomatis, kebocoran instalasi,
              tekanan, serta aliran air. Teknisi menjelaskan temuan dan estimasi sebelum pengerjaan.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Gauge,
                title: "Air Tidak Naik",
                text: "Pemeriksaan daya hisap, pipa, klep, dan tekanan untuk menemukan penyebab aliran bermasalah.",
              },
              {
                icon: TimerReset,
                title: "Pompa Hidup Terus",
                text: "Pengecekan otomatis pompa, tabung tekanan, kebocoran, dan komponen pendukung.",
              },
              {
                icon: Wrench,
                title: "Pompa Mati atau Berisik",
                text: "Pemeriksaan kelistrikan, kapasitor, bearing, impeller, dan kondisi motor pompa.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600"><Icon size={24} /></span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proses" className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Proses layanan</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Jelas Sebelum Dikerjakan</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-2xl bg-slate-50 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="area" className="container mx-auto px-6 py-16 md:py-20">
          <div className="grid gap-10 rounded-3xl bg-blue-950 p-8 text-white md:p-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-300">Area layanan</p>
              <h2 className="mt-3 text-3xl font-bold">Melayani Radius Sekitar Depok</h2>
              <p className="mt-4 leading-relaxed text-blue-100">
                Ketersediaan teknisi bergantung jarak dan jadwal. Hubungi kami untuk memastikan
                lokasi Anda masuk jangkauan layanan hari ini.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-xl border border-blue-700/60 bg-blue-900/60 px-4 py-3 text-center text-sm font-semibold">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <section id="faq" className="bg-white py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Pertanyaan Umum</h2>
            <div className="mt-10 space-y-4">
              {[
                ["Apakah teknisi bisa datang ke rumah?", "Ya. Layanan dilakukan di lokasi pelanggan selama alamat masih berada dalam area jangkauan teknisi."],
                ["Merek pompa apa saja yang bisa diperiksa?", "Kami menangani berbagai pompa rumah tangga dan jet pump. Sampaikan merek serta gejalanya saat menghubungi kami."],
                ["Apakah biaya dijelaskan sebelum perbaikan?", "Ya. Setelah pengecekan, teknisi menjelaskan masalah dan estimasi pengerjaan sebelum perbaikan dimulai."],
                ["Bagaimana cara memesan layanan?", "Telepon 0818-970-473 atau kirim pesan WhatsApp berisi lokasi dan keluhan pompa Anda."],
              ].map(([question, answer]) => (
                <details key={question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <summary className="cursor-pointer list-none font-bold">{question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="kontak" className="bg-blue-600 py-16 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Butuh Service Pompa Air di Depok?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Jelaskan masalah pompa dan lokasi Anda. Kami akan membantu mengecek ketersediaan teknisi.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:0818970473"
                onClick={() => trackContactClick("phone", "cta")}
                className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-blue-700 hover:bg-blue-50"
              >
                <Phone size={21} /> Telepon Sekarang
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick("whatsapp", "cta")}
                className="inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-6 py-4 font-bold text-white hover:bg-emerald-400"
              >
                <MessageCircle size={21} /> Chat WhatsApp
              </a>
            </div>
            <Link href="/" className="mt-8 inline-block text-sm font-semibold text-blue-100 hover:text-white">
              Lihat semua layanan Zunaidi Pompa
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
