import Image from "next/image"
import hero from '../public/images/plumber-making-phone-gesture.png'

export default function Hero () {
  return (
      <header id="hero" className="bg-white text-blue max-h-screen"> 
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0" >
        <div className="nx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Solusi Ahli Bor Sumur & Service Pompa Air
        </h2>
        <p className="mt-4 text-lg md:text-xl text-slate-500 max-w-2xl ">
          Tim profesional kami siap mengatasi masalah air Anda dengan cepat, handal, dan bergaransi.
        </p>
        <a
          href="https://wa.me/62818970473?text=Halo%20Zunaidi%20Pompa,%20saya%20ingin%20berkonsultasi."
          target="_blank"
          className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
        >
          Konsultasi Gratis via WhatsApp
        </a>
        </div>
        <div> 
          <Image
            priority
            src={hero}
            alt="Zunaidi Pompa - Pengeboran dan Service Pompa Air"
            width={800}
            height={600}
            className="mt-10 mx-auto rounded-lg shadow object-cover"
            placeholder="blur"
          />
        </div>
      </div>
    </header>
  )
}