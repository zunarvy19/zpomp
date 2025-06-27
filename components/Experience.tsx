
import AnimatedNumber from './AnimatedNumber';
import { Briefcase, Users, Award } from 'lucide-react'; 

export default function Experience() {
  return (
    <section id="pengalaman" className="bg-white py-16 md:-py-16 md:py-0">
      <div className="container mx-auto px-6 text-center">
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-blue-600 p-8 rounded-lg shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
            <Briefcase className="mx-auto text-white mb-4" size={40} />
            <div className="text-5xl font-extrabold text-white">
              <AnimatedNumber value={30}/>+
            </div>
            <h3 className="text-xl font-semibold mt-2 text-white">Tahun Pengalaman</h3>
          </div>

          <div className="bg-blue-600 p-8 rounded-lg shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
            <Users className="mx-auto text-white mb-4" size={40} />
            <div className="text-5xl font-extrabold text-white">
              <AnimatedNumber value={1000}/>+
            </div>
            <h3 className="text-xl font-semibold mt-2 text-white">Pelanggan Puas</h3>
          </div>

          <div className="bg-blue-600 p-8 rounded-lg shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
            <Award className="mx-auto text-white mb-4" size={40} />
            <div className="text-5xl font-extrabold text-white">
              Ahli
            </div>
            <h3 className="text-xl font-semibold mt-2 text-white">Tim Profesional</h3>
          </div>

        </div>
      </div>
    </section>
  );
}