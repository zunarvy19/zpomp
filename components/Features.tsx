// components/Features.tsx
import { CheckCircle } from 'lucide-react';

const featuresData = [
  { 
    title: 'Profesional & Berpengalaman',
    description: 'Teknisi ahli dengan pengalaman bertahun-tahun di bidang pengeboran sumur dan pompa air.'
  },
  { 
    title: 'Garansi Terjamin',
    description: 'Setiap layanan dilengkapi garansi demi kepuasan dan keamanan pelanggan.'
  },
  { 
    title: 'Harga Terjangkau & Transparan',
    description: 'Harga kompetitif, transparan, dan sesuai kualitas layanan.'
  },
  { 
    title: 'Respon Cepat & Tepat Waktu',
    description: 'Layanan cepat tanggap dengan teknisi yang datang tepat waktu.'
  },
];

export default function Features() {
  return (
    <section id="keunggulan" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold">Kenapa Harus Zunaidi Pompa?</h3>
          <p className="text-gray-600 mt-2">Kami berkomitmen pada kepuasan Anda.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
              <div>
                <h5 className="font-bold text-lg">{feature.title}</h5>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}