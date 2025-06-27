// components/Gallery.tsx

import * as React from "react";
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
  },
  {
    src: "/images/servis-pompa-jetpump.jpg",
    alt: "Proses servis pompa air jetpump",
  },
  {
    src: "/images/pemasangan-pompa-baru.jpg",
    alt: "Instalasi pompa air baru untuk pelanggan",
  },
  {
    src: "/images/proyek-perumahan.jpg",
    alt: "Proyek instalasi air di sebuah perumahan",
  },
  {
    src: "/images/pemasangan-part-pompa.jpg",
    alt: "Tim Zunaidi Pompa siap melayani",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold">Galeri Proyek Kami</h3>
        <p className="text-gray-600 mt-2">
          Bukti nyata dari pekerjaan berkualitas yang kami berikan.
        </p>
      </div>

      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true, 
          }}
          className="w-full max-w-4xl" 
        >
          <CarouselContent>
          
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-video items-center justify-center p-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}