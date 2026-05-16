import { ArrowRight, Zap } from 'lucide-react';

interface HeroNewProps {
  onCTAClick: () => void;
}

export default function HeroNew({ onCTAClick }: HeroNewProps) {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 bg-white bg-opacity-10 px-4 py-2 rounded-full">
              <Zap size={18} className="text-accent" />
              <span className="text-sm font-semibold">Transformación Digital para Pymes</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Diferenciación Creativa que <span className="text-accent">Genera Resultados</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Estrategia innovadora, contenido que conecta y comunidades fieles. Transformamos emprendedores y pymes en marcas que cautivan y venden.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onCTAClick}
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                Diagnóstico Gratuito <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold transition-all duration-300">
                Ver Servicios
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white border-opacity-20">
              <div>
                <div className="text-3xl font-bold text-accent">100+</div>
                <p className="text-blue-200 text-sm">Marcas Transformadas</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">95%</div>
                <p className="text-blue-200 text-sm">Satisfacción Clientes</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">3+</div>
                <p className="text-blue-200 text-sm">Años de Experiencia</p>
              </div>
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Animated circles */}
              <div className="absolute w-64 h-64 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute w-48 h-48 bg-gradient-to-br from-accent to-secondary rounded-full opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              
              {/* Center content */}
              <div className="relative z-10 text-center">
                <div className="text-6xl font-bold text-accent mb-4">MS</div>
                <p className="text-xl font-semibold">MONKEY SAPIENS</p>
                <p className="text-blue-200 text-sm mt-2">Marketing Digital Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
