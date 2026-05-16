import { Check } from 'lucide-react';

interface PricingProps {
  onCTAClick: () => void;
}

export default function Pricing({ onCTAClick }: PricingProps) {
  return (
    <section id="precios" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Planes claros y sin sorpresas
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Elige el plan que se adapte a tu etapa de crecimiento
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan Básico */}
          <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Básico</h3>
            <p className="text-gray-600 mb-6">Para emprendedores que comienzan</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$100k</span>
              <span className="text-gray-600"> - $150k/mes</span>
            </div>

            <ul className="space-y-4 mb-8">
              {['Imagen Digital & Branding', 'SEO & Google My Business', 'Gestión de Redes Sociales', 'Contenido Estratégico', 'Reportes Mensuales'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check size={18} className="text-blue-900 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTAClick}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 rounded-lg transition-colors"
            >
              Consultar
            </button>
          </div>

          {/* Plan Premium */}
          <div className="bg-blue-900 text-white p-8 rounded-lg border-2 border-blue-900 relative">
            <div className="absolute -top-4 left-8 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              MÁS POPULAR
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Plan Premium</h3>
            <p className="text-blue-200 mb-6">Transformación digital completa</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold">Personalizado</span>
              <p className="text-blue-200 text-sm mt-2">Según tu alcance y objetivos</p>
            </div>

            <ul className="space-y-4 mb-8">
              {['Todo del Plan Básico', 'Pauta Digital (Facebook, Instagram)', 'Portafolio Digital', 'Automatización de Procesos', 'Asesoría de Marca Personal', 'Análisis Competitivo'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check size={18} className="text-accent flex-shrink-0" />
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTAClick}
              className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
