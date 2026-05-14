
import { Lightbulb, Heart, Users } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Diferenciación Creativa',
      description: 'Estrategias innovadoras que rompen el molde. Análisis profundo para encontrar tu ángulo único y construir un ADN de marca sólido.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Contenido Emocional',
      description: 'Historias que conectan con el corazón. Storytelling de valor, imagen digital premium y alineación con los valores de tu marca.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Users,
      title: 'Gestión de Comunidad',
      description: 'Crecimiento genuino y pauta inteligente. Transformamos seguidores en embajadores fieles que defienden tu marca con orgullo.',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  return (
    <section id="pilares" className="py-20 px-4 bg-gradient-to-br from-light to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Los 3 Pilares de MONKEY SAPIENS</h2>
          <p className="text-xl text-dark max-w-2xl mx-auto">
            Filosofía: Cautivar para Crecer. No solo gestionamos redes, construimos ecosistemas vivos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{pillar.title}</h3>
                  <p className="text-dark leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-12 shadow-lg border-2 border-gray-100">
          <h3 className="text-3xl font-bold text-center text-primary mb-8">¿Cómo Trabajamos?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
              <h4 className="font-bold text-primary mb-2">Diagnóstico</h4>
              <p className="text-dark text-sm">Análisis completo de tu marca y mercado</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
              <h4 className="font-bold text-primary mb-2">Estrategia</h4>
              <p className="text-dark text-sm">Plan personalizado y diferenciado</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
              <h4 className="font-bold text-primary mb-2">Ejecución</h4>
              <p className="text-dark text-sm">Implementación y contenido de calidad</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
              <h4 className="font-bold text-primary mb-2">Resultados</h4>
              <p className="text-dark text-sm">Medición y optimización continua</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
