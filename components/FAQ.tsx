export default function FAQ() {
  const questions = [
    ["Apakah teknisi bisa datang ke rumah?", "Ya. Layanan dilakukan di lokasi pelanggan selama alamat masih berada dalam area jangkauan teknisi. Kirim lokasi Anda untuk mengecek ketersediaan jadwal."],
    ["Merek pompa apa saja yang bisa diperiksa?", "Kami menangani berbagai pompa rumah tangga dan jet pump. Sampaikan merek serta gejalanya saat menghubungi kami."],
    ["Apakah biaya dijelaskan sebelum perbaikan?", "Ya. Setelah pengecekan, teknisi menjelaskan masalah dan estimasi pengerjaan sebelum perbaikan dimulai."],
    ["Bagaimana cara memesan layanan?", "Telepon 0818-970-473 atau kirim pesan WhatsApp berisi lokasi dan keluhan pompa Anda."],
  ];
  return (
    <section id="faq" className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">Pertanyaan Umum</h2>
        <div className="mt-10 space-y-4">
          {questions.map(([question, answer]) => (
            <details key={question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-bold text-slate-900">{question}</summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
