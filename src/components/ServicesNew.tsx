import { Palette, PenTool, Zap, CheckCircle } from 'lucide-react';

export default function ServicesNew() {
  const services = [
    {
      icon: Palette,
      title: 'Branding & Estrategia',
      description: 'Construimos tu identidad de marca con estrategia digital sólida.',
      features: ['Identidad Visual', 'Posicionamiento', 'Arquitectura de Marca', 'Estrategia Digital']
    },
    {
      icon: PenTool,
      title: 'Contenido Digital',
      description: 'Contenido emocional que conecta con tu audiencia en redes.',
      features: ['Redes Sociales', 'Estrategia WhatsApp', 'Community Management', 'Contenido Multimedia']
    },
    {
      icon: Zap,
      title: 'Asesoría Digital',
      description: 'Presencia online completa con identidad acorde a tu marca.',
      features: ['Portafolios Digitales', 'Páginas Web', 'Automatización', 'Marca Personal']
    }
  ];

  return (
    <section id="servicios" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tres pilares estratégicos diseñados para transformar tu marca y generar resultados reales
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-secondary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
