import React from 'react';
import { Plane, Compass, Sparkles, MapPin, ShieldCheck, Bird, TreePine } from 'lucide-react';
import { HERO_IMAGE } from '../data/amazonData';

interface HeroProps {
  onShowReservationAlert: () => void;
  onExploreDestinations: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onShowReservationAlert,
  onExploreDestinations
}) => {
  return (
    <section id="inicio" className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Amazonía Ecuador - Vista aérea de la selva y el río Napo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-subtleZoom"
        />
        {/* Measured scrim ensuring high contrast WCAG compliance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2818]/90 via-black/55 to-black/35" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        {/* Editorial kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-emerald-300 mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Ecuador Megadiverso · Patrimonio Natural de la Humanidad</span>
        </div>

        {/* Hero Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight drop-shadow-md"
          style={{ textWrap: 'balance' }}
        >
          Descubre la magia de la Amazonía
        </h1>

        {/* Lead paragraph */}
        <p className="mt-5 max-w-2xl mx-auto text-lg sm:text-xl text-emerald-50/90 font-normal leading-relaxed drop-shadow">
          Aventura, naturaleza y cultura en el corazón del Ecuador. Navega ríos ancestrales, adéntrate en bosques primarios y conecta con comunidades vivas.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onShowReservationAlert}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg hover:shadow-amber-400/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
          >
            <Plane className="w-5 h-5 text-slate-950 transition-transform group-hover:rotate-12" />
            <span>Reserva tu aventura</span>
          </button>

          <button
            onClick={onExploreDestinations}
            className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/25 rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-5 h-5 text-emerald-300" />
            <span>Explorar Destinos</span>
          </button>
        </div>

        {/* Key trust markers strip */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
              <TreePine className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Yasuní & Cuyabeno</div>
              <div className="text-xs text-white/70">Reservas protegidas</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
              <Bird className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">+600 Especies</div>
              <div className="text-xs text-white/70">Aves & fauna silvestre</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">100% Ecológico</div>
              <div className="text-xs text-white/70">Guías certificados</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">6 Provincias</div>
              <div className="text-xs text-white/70">Rutas seguras y accesibles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
