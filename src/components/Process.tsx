export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Análisis completo de tu marca, mercado y audiencia'
    },
    {
      number: '02',
      title: 'Estrategia',
      description: 'Plan personalizado y diferenciado para tu negocio'
    },
    {
      number: '03',
      title: 'Ejecución',
      description: 'Implementación de contenido y gestión de redes'
    },
    {
      number: '04',
      title: 'Resultados',
      description: 'Medición, reportes y optimización continua'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-16 text-center">
          Nuestro proceso
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 h-full border-2 border-gray-200 hover:border-blue-900 transition-colors">
                {/* Number */}
                <div className="text-5xl font-bold text-orange-500 mb-4">{step.number}</div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-0.5 bg-orange-500"></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
