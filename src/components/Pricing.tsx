import { Check } from 'lucide-react';

interface PricingProps {
  onCTAClick: () => void;
}

export default function Pricing({ onCTAClick }: PricingProps) {
  return (
    <section id="precios" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">
          Planes transparentes
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Elige el plan que se adapte a tu etapa
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan Básico */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Plan Básico</h3>
            <p className="text-gray-600 mb-6">Para emprendedores</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-blue-900">$100k</span>
              <span className="text-gray-600"> - $150k/mes</span>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Imagen Digital & Branding',
                'SEO & Google My Business',
                'Gestión de Redes Sociales',
                'Contenido Estratégico',
                'Reportes Mensuales'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check size={18} className="text-blue-900 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTAClick}
              className="w-full bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-50 font-bold py-3 rounded-lg transition-colors"
            >
              Consultar
            </button>
          </div>

          {/* Plan Premium */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute -top-3 right-8 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              RECOMENDADO
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Plan Premium</h3>
            <p className="text-blue-200 mb-6">Transformación completa</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold">Personalizado</span>
              <p className="text-blue-200 text-sm mt-2">Según tu alcance</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Todo del Plan Básico',
                'Pauta Digital (Facebook, Instagram)',
                'Portafolio Digital',
                'Automatización de Procesos',
                'Asesoría de Marca Personal',
                'Análisis Competitivo'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check size={18} className="text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onCTAClick}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
