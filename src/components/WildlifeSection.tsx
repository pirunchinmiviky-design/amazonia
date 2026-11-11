import React, { useState } from 'react';
import { Eye, ShieldAlert, Sparkles, Compass } from 'lucide-react';
import { WILDLIFE_LIST } from '../data/amazonData';
import { WildlifeSpecies } from '../types';

interface WildlifeSectionProps {
  onOpenBooking: () => void;
}

export const WildlifeSection: React.FC<WildlifeSectionProps> = ({ onOpenBooking }) => {
  const [activeSpecies, setActiveSpecies] = useState<WildlifeSpecies>(WILDLIFE_LIST[0]);

  return (
    <section id="fauna" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e5631_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
            Biodiversidad Única en el Mundo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-1">
            Fauna Emblemática de la Amazonía
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Una sola hectárea del Parque Nacional Yasuní alberga más especies de árboles que todo Estados Unidos y Canadá juntos. Conoce las especies que habitan este santuario.
          </p>
        </div>

        {/* Species selector pills (interactive tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {WILDLIFE_LIST.map((sp) => (
            <button
              key={sp.id}
              onClick={() => setActiveSpecies(sp)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeSpecies.id === sp.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50 scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {sp.commonName}
            </button>
          ))}
        </div>

        {/* Spotlight Card */}
        <div className="bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: Species Image */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] overflow-hidden bg-slate-950">
            <img
              src={activeSpecies.image}
              alt={activeSpecies.commonName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-300 border border-white/10 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>Avistamiento Guiado</span>
            </div>
          </div>

          {/* Right: Species Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 italic">
                  {activeSpecies.scientificName}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                  {activeSpecies.commonName}
                </h3>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-400/10 border border-amber-400/30 text-xs font-medium text-amber-300">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{activeSpecies.status}</span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {activeSpecies.description}
              </p>

              <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 text-xs space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Dato Curioso de la Selva</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {activeSpecies.curiosity}
                </p>
                <div className="pt-2 border-t border-slate-800 text-slate-400">
                  <strong className="text-slate-200">Hábitat principal:</strong> {activeSpecies.habitat}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-700/60 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Expediciones ornitológicas y de safari fotográfico
              </span>
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Ver Tours de Fauna</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
