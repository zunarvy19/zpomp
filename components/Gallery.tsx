"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import ResponsiveImage from "@/components/ResponsiveImage";

const images = [
  {
    src: "/images/servis-pompa-jetpump.jpg",
    title: "Pompa air & jet pump",
    category: "Service pompa",
    description: "Detail unit jet pump, sambungan pipa, dan komponen otomatis pada instalasi yang sudah terpasang.",
    source: "documentation",
    position: "50% 45%",
  },
  {
    src: "/images/pemasangan-part-pompa.jpg",
    title: "Kontrol otomatis pompa",
    category: "Instalasi",
    description: "Pompa dengan kontrol otomatis dan jalur pipa yang menghubungkan unit ke sistem air rumah.",
    source: "documentation",
    position: "50% 45%",
  },
  {
    src: "/images/pemasangan-pompa-baru.jpg",
    title: "Pompa & sistem penyaringan",
    category: "Filter air",
    description: "Rangkaian pompa, tabung tekanan, dan dua tabung penyaring dalam satu area instalasi.",
    source: "documentation",
    position: "50% 48%",
  },
  {
    src: "/images/proyek-bor-sumur-1.jpg",
    title: "Jet pump & tabung tekanan",
    category: "Service pompa",
    description: "Detail pemasangan jet pump dengan tabung tekanan serta sambungan pipa hisap dan distribusi.",
    source: "documentation",
    position: "50% 48%",
  },
  {
    src: "/images/proyek-perumahan.jpg",
    title: "Jalur pipa dua pompa",
    category: "Instalasi",
    description: "Dua unit pompa dengan jalur pipa dan katup masing-masing. Penanda pada foto menunjukkan titik sambungan.",
    source: "documentation",
    position: "50% 48%",
  },
  {
    src: "/images/gallery-pemeriksaan-ai-v2.png",
    title: "Mengenal pengecekan pompa",
    category: "Pemeriksaan",
    description: "Unit pompa dan alat pemeriksaan. Titik pengecekan disesuaikan dengan keluhan dan kondisi instalasi.",
    source: "illustration",
    position: "50% 50%",
  },
  {
    src: "/images/gallery-instalasi-ai-v1.png",
    title: "Gambaran instalasi pompa",
    category: "Instalasi",
    description: "Pompa, tabung tekanan, dan jalur pipa rumah. Susunan komponen disesuaikan dengan kebutuhan setiap bangunan.",
    source: "illustration",
    position: "50% 50%",
  },
  {
    src: "/images/gallery-filter-ai-v1.png",
    title: "Mengenal filter cartridge",
    category: "Filter air",
    description: "Rumah filter dan cartridge penyaring. Pemilihan media filter memerlukan pemeriksaan kondisi sumber air.",
    source: "illustration",
    position: "50% 50%",
  },
] as const;

const filters = [
  { value: "all", label: "Semua" },
  { value: "Service pompa", label: "Service pompa" },
  { value: "Instalasi", label: "Instalasi" },
  { value: "Filter air", label: "Filter air" },
  { value: "Pemeriksaan", label: "Pemeriksaan" },
] as const;

type GalleryFilter = (typeof filters)[number]["value"];

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const visibleImages = images.filter((item) => filter === "all" || item.category === filter);
  const selectedImage = selectedIndex === null ? null : visibleImages[selectedIndex];
  const isOpen = selectedIndex !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!isOpen) {
      if (dialog.open) dialog.close();
      return;
    }

    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function changeImage(direction: number) {
    setSelectedIndex((current) => current === null ? null : (current + direction + visibleImages.length) % visibleImages.length);
  }

  return (
    <section id="galeri" aria-labelledby="gallery-heading" className="bg-[#F3F8FB] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-6 border-t border-[#0B2845]/15 pt-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#1479C9]">03 · Galeri</p>
            <h2 id="gallery-heading" className="mt-5 max-w-2xl text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-[#071C2E] sm:text-4xl lg:text-5xl">
              Lebih dekat dengan<br className="hidden sm:block" /> pekerjaan kami.
            </h2>
          </div>
          <p className="max-w-lg self-end text-sm leading-7 text-[#617080] sm:text-base">
            Lihat detail pompa, pipa, dan sistem air dari dokumentasi kami.
            Kenali komponen dan jenis instalasi sesuai kebutuhan Anda.
          </p>
        </div>

        <div role="group" aria-label="Filter galeri" className="mt-9 flex flex-wrap gap-2 sm:mt-10">
          {filters.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              aria-controls="gallery-grid"
              onClick={() => setFilter(value)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1479C9] sm:text-sm ${filter === value ? "border-[#071C2E] bg-[#071C2E] text-white" : "border-[#DCE5EC] bg-white text-[#536778] hover:border-[#1479C9] hover:text-[#1479C9]"}`}
            >
              {label}
              <span className={filter === value ? "text-white/65" : "text-[#617080]"}>
                {images.filter((item) => value === "all" || item.category === value).length}
              </span>
            </button>
          ))}
        </div>

        <p role="status" className="sr-only">Menampilkan {visibleImages.length} gambar.</p>
        <div id="gallery-grid" className="mt-7 grid gap-x-5 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
          {visibleImages.map((item, index) => (
            <figure key={item.src} className="group min-w-0">
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Perbesar ${item.title}`}
                aria-haspopup="dialog"
                className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-[#DCE5EC] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1479C9]"
              >
                <ResponsiveImage
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105 motion-safe:group-focus-within:scale-105"
                  style={{ objectPosition: item.position }}
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#071C2E] shadow-sm">
                  Dokumentasi
                </span>
                <span aria-hidden="true" className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#071C2E]/75 text-white backdrop-blur-sm transition-colors group-hover:bg-[#1479C9]">
                  <Expand size={15} />
                </span>
              </button>
              <figcaption className="pt-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#1479C9]">{item.category}</p>
                <h3 className="mt-1.5 text-base font-extrabold tracking-[-0.02em] text-[#071C2E]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#617080]">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#0B2845]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-6 text-[#617080]">
            Klik gambar untuk melihat detail pompa dan instalasi lebih dekat.
          </p>
          <Link href="/#kontak" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-[#1479C9] hover:text-[#071C2E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1479C9]">
            Diskusikan kebutuhan Anda <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="gallery-image-title"
        aria-describedby="gallery-image-description"
        onClose={() => setSelectedIndex(null)}
        onCancel={() => setSelectedIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedIndex(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            changeImage(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        className="fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl bg-white p-0 text-[#071C2E] shadow-2xl backdrop:bg-[#071C2E]/85 backdrop:backdrop-blur-sm"
      >
        {selectedImage && (
          <div>
            <div className="relative h-[48dvh] bg-[#071C2E] sm:h-[62dvh]">
              <ResponsiveImage
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
              <button type="button" onClick={() => setSelectedIndex(null)} aria-label="Tutup gambar" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#071C2E] shadow-lg hover:bg-[#E8F4FB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1479C9]">
                <X size={21} />
              </button>
            </div>
            <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div aria-live="polite" className="max-w-2xl">
                <p className="text-xs font-bold text-[#1479C9]">Dokumentasi · {selectedImage.category}</p>
                <h3 id="gallery-image-title" className="mt-2 text-xl font-extrabold">{selectedImage.title}</h3>
                <p id="gallery-image-description" className="mt-2 text-sm leading-6 text-[#617080]">{selectedImage.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <button type="button" onClick={() => changeImage(-1)} aria-label="Gambar sebelumnya" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE5EC] hover:bg-[#F3F8FB] focus-visible:outline-2 focus-visible:outline-[#1479C9]">
                  <ChevronLeft size={20} />
                </button>
                <span className="text-xs tabular-nums text-[#617080]">{(selectedIndex ?? 0) + 1} / {visibleImages.length}</span>
                <button type="button" onClick={() => changeImage(1)} aria-label="Gambar berikutnya" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE5EC] hover:bg-[#F3F8FB] focus-visible:outline-2 focus-visible:outline-[#1479C9]">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
