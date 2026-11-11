import React, { useState, useEffect } from 'react';
import { Leaf, Volume2, VolumeX, Menu, X, CalendarCheck } from 'lucide-react';
import { soundscape } from '../utils/soundscape';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = soundscape.toggle();
    setIsPlayingAudio(active);
  };

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Destinos', href: '#destinos' },
    { label: 'Experiencias', href: '#experiencias' },
    { label: 'Fauna', href: '#fauna' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#123b23]/95 backdrop-blur-md shadow-md py-3 text-white'
          : 'bg-[#1e5631] text-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#inicio"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center transition-transform group-hover:scale-110">
              <Leaf className="w-5 h-5 fill-emerald-400 text-emerald-400" />
            </div>
            <span className="font-display">Amazonía Ecuador</span>
          </a>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-emerald-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + subtle sound toggle + mobile menu trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleSound}
              title={isPlayingAudio ? 'Silenciar sonidos de la selva' : 'Activar sonidos de la selva'}
              className={`p-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                isPlayingAudio
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'bg-white/10 hover:bg-white/20 text-emerald-100 hover:text-white'
              }`}
              aria-label="Toggle ambient rainforest audio"
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <span className="hidden xl:inline text-xs">Selva activa</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden xl:inline text-xs">Sonido ambiental</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Reserva tu aventura</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#123b23] border-t border-emerald-900/60 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-emerald-100 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reserva tu aventura</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
