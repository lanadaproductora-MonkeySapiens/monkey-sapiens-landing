import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Objections() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Cuánto tiempo tarda en ver resultados?',
      a: 'Los primeros resultados se ven en 4-6 semanas. Crecimiento significativo en 3-4 meses. Transformación completa en 6-12 meses.'
    },
    {
      q: '¿Qué pasa si no tengo presencia digital?',
      a: 'Perfecto. Empezamos desde cero. Hacemos todo: branding, estrategia, contenido y gestión de redes. Es nuestro punto fuerte.'
    },
    {
      q: '¿Puedo cambiar de plan después?',
      a: 'Sí. Puedes escalar a un plan superior cuando estés listo. Muchos clientes comienzan en Básico y suben a Premium.'
    },
    {
      q: '¿Qué incluye el diagnóstico gratuito?',
      a: 'Análisis de tu marca, competencia, audiencia y recomendaciones personalizadas. 30 minutos sin compromiso.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-gray-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
