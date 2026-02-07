import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  {
    src: "/images/proyek-bor-sumur-1.jpg",
    alt: "Proyek pengeboran sumur oleh Zunaidi Pompa",
    caption: "Pengeboran Sumur Dalam",
  },
  {
    src: "/images/servis-pompa-jetpump.jpg",
    alt: "Proses servis pompa air jetpump",
    caption: "Service Pompa Jetpump",
  },
  {
    src: "/images/pemasangan-pompa-baru.jpg",
    alt: "Instalasi pompa air baru untuk pelanggan",
    caption: "Instalasi Pompa Baru",
  },
  {
    src: "/images/proyek-perumahan.jpg",
    alt: "Proyek instalasi air di sebuah perumahan",
    caption: "Proyek Perumahan",
  },
  {
    src: "/images/pemasangan-part-pompa.jpg",
    alt: "Tim Zunaidi Pompa siap melayani",
    caption: "Pemasangan Komponen",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="section-heading">Galeri Proyek</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dokumentasi Pekerjaan Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Bukti nyata dari kualitas pengerjaan yang kami berikan kepada
            pelanggan.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden border-border">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 bg-card">
                      <p className="font-medium text-foreground">
                        {image.caption}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0 rounded-lg border-border hover:bg-muted" />
            <CarouselNext className="static translate-y-0 rounded-lg border-border hover:bg-muted" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}