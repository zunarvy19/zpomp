import { Clock, Shield, Banknote, Zap } from "lucide-react";

const featuresData = [
  {
    icon: Shield,
    title: "Profesional & Berpengalaman",
    description:
      "Teknisi ahli dengan pengalaman 10+ tahun di bidang pengeboran sumur dan pompa air.",
  },
  {
    icon: Clock,
    title: "Garansi Resmi",
    description:
      "Setiap layanan dilengkapi garansi resmi demi kepuasan dan keamanan pelanggan.",
  },
  {
    icon: Banknote,
    title: "Harga Transparan",
    description:
      "Harga kompetitif, transparan tanpa biaya tersembunyi, dan sesuai kualitas layanan.",
  },
  {
    icon: Zap,
    title: "Respon Cepat 24 Jam",
    description:
      "Layanan cepat tanggap dengan teknisi yang datang tepat waktu, termasuk darurat.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <IconComponent className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}