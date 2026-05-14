
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">MS</span>
          </div>
          <span className="text-2xl font-bold gradient-text">MONKEY SAPIENS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-dark hover:text-primary transition">Servicios</a>
          <a href="#pilares" className="text-dark hover:text-primary transition">Pilares</a>
          <a href="#precios" className="text-dark hover:text-primary transition">Precios</a>
          <button
            onClick={onContactClick}
            className="btn-primary"
          >
            Diagnóstico Gratuito
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <a href="#servicios" className="text-dark hover:text-primary transition">Servicios</a>
              <a href="#pilares" className="text-dark hover:text-primary transition">Pilares</a>
              <a href="#precios" className="text-dark hover:text-primary transition">Precios</a>
              <button
                onClick={() => {
                  onContactClick();
                  setIsMenuOpen(false);
                }}
                className="btn-primary w-full"
              >
                Diagnóstico Gratuito
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
