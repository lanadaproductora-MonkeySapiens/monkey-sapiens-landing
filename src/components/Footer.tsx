import { Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <span className="text-dark font-bold text-lg">MS</span>
              </div>
              <span className="text-xl font-bold">MONKEY SAPIENS</span>
            </div>
            <p className="text-blue-200 text-sm">
              Agencia de marketing digital especializada en diferenciación creativa, contenido emocional y gestión de comunidades.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Servicios</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#servicios" className="hover:text-white transition">Branding & Estrategia</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Contenido Digital</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Asesoría Digital</a></li>
              <li><a href="#precios" className="hover:text-white transition">Planes y Precios</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contacto</h4>
            <ul className="space-y-3 text-blue-200">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:lanadaproductora@gmail.com" className="hover:text-white transition">
                  lanadaproductora@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={18} />
                <span>WhatsApp: +57 301 311 8383</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Colombia</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent transition">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent transition">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent transition">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent transition">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-200 text-sm">
            <p>&copy; 2024 MONKEY SAPIENS. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition">Términos de Servicio</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
