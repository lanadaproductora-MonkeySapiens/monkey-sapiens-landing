
import { Check } from 'lucide-react';

interface PricingProps {
  onCTAClick: () => void;
}

export default function Pricing({ onCTAClick }: PricingProps) {
  const plans = [
    {
      name: 'Plan Evolución Básica',
      price: '$100,000 - $150,000',
      period: 'mes',
      description: 'Perfecto para emprendedores que comienzan',
      features: [
        'Imagen Digital & Branding',
        'SEO & Google My Business',
        'Gestión de Redes Sociales',
        'Contenido Estratégico',
        'Asesoría Inicial',
        'Reportes Mensuales'
      ],
      highlighted: false
    },
    {
      name: 'Plan Escalamiento',
      price: 'Personalizado',
      period: 'según necesidades',
      description: 'Para marcas listas para crecer',
      features: [
        'Todo del Plan Básico',
        'Pauta Digital (Facebook, Instagram)',
        'Automatización de Procesos',
        'Portafolio Digital',
        'Estrategia WhatsApp',
        'Asesoría de Marca Personal',
        'Análisis Competitivo',
        'Optimización Continua'
      ],
      highlighted: true
    },
    {
      name: 'Plan Premium',
      price: 'Personalizado',
      period: 'según alcance',
      description: 'Transformación digital completa',
      features: [
        'Todo del Plan Escalamiento',
        'Creación de Página Web',
        'Automatización de Agentes',
        'Landing Pages Personalizadas',
        'Consultoría Estratégica Mensual',
        'Gestión de Crisis',
        'Reportes Avanzados',
        'Soporte Prioritario'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="precios" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Planes y Precios</h2>
          <p className="text-xl text-dark max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu etapa de crecimiento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'ring-2 ring-secondary shadow-2xl scale-105'
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              <div className={`${
                plan.highlighted
                  ? 'bg-gradient-to-r from-primary to-secondary'
                  : 'bg-light'
              } p-8 text-center`}>
                {plan.highlighted && (
                  <div className="text-white text-sm font-bold mb-2 bg-white bg-opacity-20 inline-block px-3 py-1 rounded-full">
                    MÁS POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-primary'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${
                  plan.highlighted ? 'text-blue-100' : 'text-dark'
                }`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-primary'
                  }`}>
                    {plan.price}
                  </span>
                  <p className={`text-sm ${
                    plan.highlighted ? 'text-blue-100' : 'text-dark'
                  }`}>
                    {plan.period}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-secondary flex-shrink-0 mt-1" />
                      <span className="text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onCTAClick}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'btn-secondary'
                      : 'btn-primary'
                  }`}
                >
                  Comenzar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-light to-blue-50 rounded-2xl p-12 text-center border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-primary mb-4">¿No sabes cuál es el mejor plan para ti?</h3>
          <p className="text-dark mb-6 max-w-2xl mx-auto">
            Agenda una consulta gratuita con nuestro equipo. Analizaremos tu situación actual y te recomendaremos la estrategia perfecta.
          </p>
          <button
            onClick={onCTAClick}
            className="btn-primary text-lg"
          >
            Agendar Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </section>
  );
}
