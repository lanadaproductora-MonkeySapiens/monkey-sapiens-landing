import { ArrowRight, Clock } from 'lucide-react';

interface HeroConversionProps {
  onCTAClick: () => void;
}

export default function HeroConversion({ onCTAClick }: HeroConversionProps) {
  return (
    <section className="pt-40 pb-32 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Urgencia */}
        <div className="inline-flex items-center gap-2 mb-8 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
          <Clock size={16} />
          Oferta limitada: Diagnóstico gratuito
        </div>

        {/* Headline principal */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Tu marca merece <span className="text-blue-900">presencia digital</span> que venda
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          Estrategia innovadora + contenido que conecta + comunidad leal = Resultados reales para tu negocio
        </p>

        {/* CTA Principal */}
        <button
          onClick={onCTAClick}
          className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 mx-auto mb-8 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Agendar Diagnóstico Gratuito <ArrowRight size={20} />
        </button>

        {/* Proof: Sin tarjeta de crédito */}
        <p className="text-gray-500 text-sm">
          ✓ Sin tarjeta de crédito • ✓ 30 minutos • ✓ Análisis personalizado
        </p>
      </div>
    </section>
  );
}
