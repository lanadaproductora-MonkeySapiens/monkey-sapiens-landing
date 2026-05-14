
import { Palette, PenTool, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Asesoría en Branding y Estrategia',
      description: 'Construimos tu identidad de marca con estrategia digital sólida, arquitectura de marca y posicionamiento único en el mercado.',
      features: ['Branding Completo', 'Estrategia Digital', 'Identidad Visual', 'Posicionamiento']
    },
    {
      icon: PenTool,
      title: 'Creación de Contenido Digital',
      description: 'Contenido emocional y estratégico para redes sociales. Especialistas en Facebook, Instagram, LinkedIn y WhatsApp como canal principal.',
      features: ['Redes Sociales', 'Contenido Multimedia', 'Estrategia WhatsApp', 'Community Management']
    },
    {
      icon: Zap,
      title: 'Asesoría Digital',
      description: 'Desde portafolios digitales hasta automatización. Creamos tu presencia online con identidad acorde y asesoría en marca personal.',
      features: ['Portafolios Digitales', 'Páginas Web', 'Automatización', 'Marca Personal']
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="text-xl text-dark max-w-2xl mx-auto">
            Tres pilares estratégicos diseñados para transformar tu marca y generar resultados reales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-light to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-dark mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-dark">{feature}</span>
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
