import { Sparkles, Heart, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Diferenciación Creativa',
      description: 'Estrategia innovadora que rompe el molde. Tu marca no es como las otras, y eso se debe ver.',
      color: 'from-blue-900 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Heart,
      title: 'Contenido Emocional',
      description: 'Historias que tocan el corazón. Conexión real con tu audiencia, no solo números.',
      color: 'from-orange-500 to-orange-400',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: Users,
      title: 'Comunidad Leal',
      description: 'Seguidores que se convierten en embajadores. Crecimiento genuino que genera ventas reales.',
      color: 'from-yellow-400 to-yellow-300',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Los 3 pilares de MONKEY SAPIENS
          </h2>
          <p className="text-lg text-gray-600">
            Filosofía: Cautivar para Crecer
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.bgColor} ${service.borderColor} border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
