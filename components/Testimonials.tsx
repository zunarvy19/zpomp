"use client";

import * as React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Budi Santoso",
    location: "Bekasi",
    quote: "Pelayanan cepat, teknisi ramah dan profesional. Pompa yang mati total langsung normal lagi.",
  },
  {
    name: "Rina Marlina",
    location: "Depok",
    quote: "Sumur bor 80 meter beres dalam 1 hari. Hasilnya bagus dan airnya jernih. Terima kasih Zunaidi Pompa!",
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
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    api.on("select", () => setSelected(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="testimoni" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold">Apa Kata Pelanggan Kami?</h3>
        </div>

        <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="sm:basis-1/2 lg:basis-1/4">
                <div className="bg-white rounded-xl shadow-sm p-6 h-full flex flex-col">
                  <div className="flex gap-0.5 text-yellow-400 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                selected === i ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
              }`}
              aria-label={`Testimoni ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}