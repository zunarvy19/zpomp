import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  { src: "/images/proyek-bor-sumur-1.jpg", tag: "Service Pompa", title: "Perbaikan Jet Pump Panasonic Bekasi" },
  { src: "/images/servis-pompa-jetpump.jpg", tag: "Bor Sumur", title: "Pengeboran Sumur 60 Meter Depok" },
  { src: "/images/pemasangan-pompa-baru.jpg", tag: "Instalasi Pipa", title: "Instalasi Pipa Air Bersih Tangerang" },
  { src: "/images/proyek-perumahan.jpg", tag: "Instalasi Pipa", title: "Perbaikan Pipa Bocor Jakarta Timur" },
  { src: "/images/pemasangan-part-pompa.jpg", tag: "Perbaikan Pipa", title: "Service Pompa Submersible Bogor" },
];

export default function Gallery() {
  return (
    <section id="galeri" className="container mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-3xl font-bold">Proyek Terbaru Kami</h3>
        </div>
        <Link href="#galeri" className="hidden sm:inline text-sm font-semibold text-blue-600">
          Lihat Semua Proyek →
        </Link>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {galleryImages.map((item, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="rounded-lg overflow-hidden shadow-sm group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm font-medium py-2">{item.title}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}