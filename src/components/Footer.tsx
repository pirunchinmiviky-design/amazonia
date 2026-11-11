import React from 'react';
import { Leaf, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#123b23] text-white py-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Leaf className="w-5 h-5 fill-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold font-display tracking-tight text-white">
            Amazonía Ecuador
          </h3>
        </div>

        {/* User's signature motto */}
        <p className="text-emerald-100/90 text-sm sm:text-base max-w-lg mx-auto">
          Descubre, disfruta y protege nuestra naturaleza.
        </p>

        {/* Quick nav links */}
        <div className="flex flex-wrap items-center justify-center gap-6 my-6 text-xs sm:text-sm text-emerald-200">
          <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
          <a href="#destinos" className="hover:text-white transition-colors">Destinos</a>
          <a href="#experiencias" className="hover:text-white transition-colors">Experiencias</a>
          <a href="#fauna" className="hover:text-white transition-colors">Fauna</a>
          <a href="#galeria" className="hover:text-white transition-colors">Galería</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>

        {/* Social Links preserving user's Facebook, Instagram, TikTok icons */}
        <div className="flex items-center justify-center gap-4 text-emerald-200 text-lg">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Amazonía Ecuador"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all"
          >
            <span className="font-bold text-sm">fb</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Amazonía Ecuador"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all"
          >
            <span className="font-bold text-sm">ig</span>
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok Amazonía Ecuador"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all"
          >
            <span className="font-bold text-sm">tk</span>
          </a>
        </div>

        {/* Legal & community notice */}
        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-emerald-300/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Amazonía Ecuador Turismo Sostenible. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Turismo en armonía con la Pachamama</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>Ecuador Megadiverso</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
