import { Wrench, Droplet, Pipette, Filter, Settings, Gauge } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Droplet,
      title: "Pengeboran Sumur",
      desc: "Pengeboran sumur dalam (deep well) untuk sumber air bersih yang melimpah. Kedalaman hingga 100 meter.",
      tags: ["Rumah Tangga", "Industri"],
    },
    {
      icon: Wrench,
      title: "Perbaikan Pompa",
      desc: "Perbaikan semua merek pompa air: Jet Pump, Submersible, Centrifugal. Diagnosa akurat, solusi cepat.",
      tags: ["Jet Pump", "Submersible"],
    },
    {
      icon: Pipette,
      title: "Instalasi Pipa",
      desc: "Perancangan dan pemasangan jalur pipa air baru yang efisien untuk rumah atau gedung komersial.",
      tags: ["Rumah", "Komersial"],
    },
    {
      icon: Filter,
      title: "Filter Penjernih",
      desc: "Solusi untuk air keruh, kuning, atau berbau. Tabung filter berkualitas tinggi untuk kesehatan keluarga.",
      tags: ["Air Bersih", "Sehat"],
    },
    {
      icon: Settings,
      title: "Maintenance Rutin",
      desc: "Perawatan berkala sistem air untuk mencegah kerusakan dan memastikan performa optimal.",
      tags: ["Preventif", "Terjadwal"],
    },
    {
      icon: Gauge,
      title: "Konsultasi Teknis",
      desc: "Analisis kebutuhan sistem air Anda. Rekomendasi solusi yang tepat sesuai kondisi dan budget.",
      tags: ["Gratis", "Profesional"],
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="section-heading">Layanan Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sistem Air yang Kami Tangani
          </h2>
          <p className="text-muted-foreground text-lg">
            Dari pengeboran hingga perawatan rutin. Solusi lengkap untuk kebutuhan air rumah tangga dan industri.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="data-card group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <IconComponent className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {service.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}