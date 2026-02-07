import { CheckCircle, Award, Clock, Shield, Users, Wrench } from "lucide-react";

export default function Experience() {
  const stats = [
    { value: "10+", label: "Tahun Pengalaman", icon: Clock },
    { value: "1000+", label: "Proyek Selesai", icon: Wrench },
    { value: "500+", label: "Pelanggan Aktif", icon: Users },
    { value: "100%", label: "Garansi Resmi", icon: Shield },
  ];

  const benefits = [
    "Teknisi bersertifikat dan berpengalaman",
    "Peralatan pengeboran modern dan terawat",
    "Garansi resmi untuk setiap pekerjaan",
    "Survey lokasi gratis (Jabodetabek)",
    "Pengerjaan cepat dan rapi",
    "Harga transparan tanpa biaya tersembunyi",
  ];

  return (
    <section id="keunggulan" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Stats Grid */}
          <div>
            <p className="section-heading">Kredensial Teknis</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Bukti Keandalan Kami
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className="data-card text-center">
                    <IconComponent className="h-6 w-6 text-primary mx-auto mb-3" strokeWidth={1.5} />
                    <p className="stat-number">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits List */}
          <div>
            <p className="section-heading">Mengapa Kami?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Standar Kualitas Tanpa Kompromi
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Kami tidak hanya memperbaiki masalah air Anda. Kami memberikan
              solusi jangka panjang dengan standar pengerjaan tertinggi.
            </p>

            <ul className="space-y-4">
              {benefits.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-muted rounded-lg border border-border"
                >
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Certification Badge */}
            <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg flex items-center gap-4">
              <Award className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-semibold">Teknisi Tersertifikasi</p>
                <p className="text-sm text-muted-foreground">
                  Semua teknisi kami telah melalui pelatihan profesional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}