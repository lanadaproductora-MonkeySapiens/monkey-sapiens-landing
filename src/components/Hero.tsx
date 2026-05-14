
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-light via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Diferenciación Creativa para tu Marca
            </h1>
            <p className="text-xl text-dark mb-8 leading-relaxed">
              Estrategia innovadora, contenido emocional y gestión de comunidad. 
              Transformamos emprendedores y pymes en marcas que cautivan y generan resultados reales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onCTAClick}
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                Diagnóstico Gratuito <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-light transition">
                Ver Servicios
              </button>
            </div>
            <div className="mt-12 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-secondary">100+</div>
                <p className="text-dark">Marcas Transformadas</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">$100k-$150k</div>
                <p className="text-dark">Plan Básico Mensual</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-10 blur-3xl"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Diferenciación Creativa</h3>
                    <p className="text-dark text-sm">Estrategia innovadora que te destaca</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Contenido Emocional</h3>
                    <p className="text-dark text-sm">Conexión profunda con tu audiencia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Comunidad Real</h3>
                    <p className="text-dark text-sm">Embajadores fieles de tu marca</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
