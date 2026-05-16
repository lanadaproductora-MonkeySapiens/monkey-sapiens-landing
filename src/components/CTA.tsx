
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onCTAClick: () => void;
}

export default function CTA({ onCTAClick }: CTAProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-blue-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          ¿Listo para cautivar y crecer?
        </h2>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
          Tu marca tiene potencial. El diagnóstico es gratuito, sin compromiso. Descubre exactamente qué necesitas para brillar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onCTAClick}
            className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 text-lg transition-all duration-300"
          >
            Agendar Consulta Gratuita <ArrowRight size={20} />
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            Conocer Más
          </button>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-white">
            <div className="text-4xl font-bold text-accent mb-2">100+</div>
            <p className="text-blue-100">Marcas Transformadas</p>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold text-accent mb-2">95%</div>
            <p className="text-blue-100">Satisfacción de Clientes</p>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold text-accent mb-2">3 años</div>
            <p className="text-blue-100">Acompañando Emprendedores</p>
          </div>
        </div>
      </div>
    </section>
  );
}
