import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onCTAClick: () => void;
}

export default function FinalCTA({ onCTAClick }: FinalCTAProps) {
  return (
    <section className="py-24 px-4 bg-blue-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Listo para transformar tu marca?
        </h2>
        
        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
          El diagnóstico es gratuito. Sin compromiso. Sin tarjeta de crédito. Solo 30 minutos para descubrir exactamente qué necesita tu marca.
        </p>

        <button
          onClick={onCTAClick}
          className="bg-secondary hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Agendar Diagnóstico Gratuito <ArrowRight size={20} />
        </button>

        <p className="text-blue-200 text-sm mt-8">
          Responderemos en menos de 24 horas
        </p>
      </div>
    </section>
  );
}
