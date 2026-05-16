export default function ValueProposition() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          ¿Por qué MONKEY SAPIENS?
        </h2>

        <div className="space-y-8">
          {/* Punto 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Diferenciación que funciona
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No copiamos estrategias. Analizamos tu mercado y creamos una propuesta única que te destaca de la competencia.
              </p>
            </div>
          </div>

          {/* Punto 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Contenido que conecta
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Historias que tocan el corazón de tu audiencia. Contenido emocional que genera engagement real, no vanity metrics.
              </p>
            </div>
          </div>

          {/* Punto 3 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Comunidad que compra
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Transformamos seguidores en clientes. Estrategia de pauta orgánica y digital que convierte curiosidad en ventas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
