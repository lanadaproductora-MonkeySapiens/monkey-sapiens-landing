import { ArrowRight } from 'lucide-react';

interface HeroWithCharacterProps {
  onCTAClick: () => void;
}

export default function HeroWithCharacter({ onCTAClick }: HeroWithCharacterProps) {
  return (
    <section className="pt-20 pb-0 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Personaje izquierdo - Monkey Sapiens */}
          <div className="relative h-96 md:h-full flex items-center justify-center order-2 md:order-1">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100 rounded-3xl opacity-60"></div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
            
            {/* Personaje Monkey Sapiens */}
            <div className="relative z-10 text-center">
              {/* Cabeza */}
              <div className="w-48 h-48 bg-amber-700 rounded-full mx-auto mb-2 flex items-center justify-center shadow-2xl relative">
                <div className="text-8xl">🐵</div>
                {/* Orejas */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-600 rounded-full"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-600 rounded-full"></div>
              </div>
              
              {/* Cuerpo con traje */}
              <div className="w-40 h-48 bg-gradient-to-b from-blue-900 to-blue-800 rounded-3xl mx-auto mb-4 flex flex-col items-center justify-center shadow-2xl relative">
                {/* Corbata */}
                <div className="w-1 h-12 bg-orange-500 mb-2"></div>
                {/* Pecho */}
                <div className="w-32 h-20 bg-blue-800 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs text-center">MONKEY<br/>SAPIENS</span>
                </div>
              </div>

              {/* Mano saludando animada */}
              <div className="absolute top-24 right-0 text-6xl animate-bounce" style={{animationDelay: '0s', animationDuration: '1.5s'}}>
                👋
              </div>

              {/* Elemento decorativo flotante */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-4xl animate-pulse">
                ✨
              </div>
            </div>
          </div>

          {/* Contenido derecho */}
          <div className="py-12 order-1 md:order-2">
            <div className="inline-block mb-6 px-4 py-2 bg-yellow-100 rounded-full">
              <span className="text-sm font-bold text-blue-900">🎯 Transformación Digital</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              <span className="text-orange-500">Diferenciación</span> que cautiva, <span className="text-orange-500">contenido</span> que conecta
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Estrategia innovadora + historias emocionales + comunidad leal. Transformamos emprendedores y pymes en marcas que venden.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onCTAClick}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Diagnóstico Gratuito <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold transition-all duration-300">
                Ver Servicios
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-orange-500">100+</div>
                <p className="text-sm text-gray-600">Marcas Transformadas</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">3.5x</div>
                <p className="text-sm text-gray-600">Crecimiento Promedio</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">95%</div>
                <p className="text-sm text-gray-600">Satisfacción</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
