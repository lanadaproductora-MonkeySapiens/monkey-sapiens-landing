import { CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Branding & Estrategia',
      items: ['Identidad visual', 'Posicionamiento', 'Estrategia digital']
    },
    {
      title: 'Contenido Digital',
      items: ['Redes sociales', 'WhatsApp marketing', 'Community management']
    },
    {
      title: 'Asesoría Digital',
      items: ['Portafolios web', 'Automatización', 'Marca personal']
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
          Servicios especializados
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-lg hover:border-blue-900 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-blue-900 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
