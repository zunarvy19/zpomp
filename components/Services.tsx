// components/Services.tsx
import { Wrench, Droplet, ShowerHead, DropletOff } from 'lucide-react';

export default function Services() {
  return (
    <section id="layanan" className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold">Layanan Andalan Kami</h3>
        <p className="text-gray-600 mt-2">Fokus kami adalah memberikan hasil terbaik untuk kebutuhan air Anda.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2">
          <Droplet className="mx-auto text-blue-500" size={48} />
          <h4 className="text-2xl font-bold mt-4">Jasa Bor Sumur</h4>
          <p className="mt-2 text-gray-600">
            Pengeboran sumur dalam untuk perumahan dan industri dengan peralatan proper untuk mendapatkan sumber air bersih.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2">
          <Wrench className="mx-auto text-blue-500" size={48} />
          <h4 className="text-2xl font-bold mt-4">Service Pompa Air</h4>
          <p className="mt-2 text-gray-600">
            Perbaikan dan perawatan semua merk pompa air. Mengatasi masalah air kecil, pompa mati total, atau suara berisik.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2">
          <ShowerHead className="mx-auto text-blue-500" size={48} />
          <h4 className="text-2xl font-bold mt-4">Pemasangan Saluran Air</h4>
          <p className="mt-2 text-gray-600">
            Mengerjakan instalasi pipa baru, memperbaiki kebocoran, dan mengatasi semua masalah kualitas & tekanan air di properti Anda.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2">
          <DropletOff className="mx-auto text-blue-500" size={48} />
          <h4 className="text-2xl font-bold mt-4">Solusi Saluran Air</h4>
          <p className="mt-2 text-gray-600">
            Instalasi & perbaikan pipa profesional. Solusi cepat untuk saluran bocor, air keruh, dan debit air kecil.
          </p>
        </div>
      </div>
    </section>
  );
}