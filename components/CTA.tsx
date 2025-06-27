export default function CTA() {
  return (
    <section id="kontak" className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl font-bold">Siap Mengatasi Masalah Air Anda?</h3>
        <p className="mt-2 text-lg text-blue-100 max-w-xl mx-auto">
          Jangan biarkan masalah air menghambat aktivitas Anda. Hubungi kami sekarang untuk solusi terbaik!
        </p>
        <a
          href="https://wa.me/62818970473?text=Halo%20Zunaidi%20Pompa,%20saya%20siap%20menggunakan%20jasa%20Anda."
          target="_blank"
          className="mt-8 inline-block bg-green-500 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          Telepon Sekarang
        </a>
      </div>
    </section>
  );
}