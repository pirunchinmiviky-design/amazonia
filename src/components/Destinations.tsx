import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Destination } from '../types';
import { DESTINATIONS } from '../data/amazonData';

interface DestinationsProps {
  onSelectDestination: (destination: Destination) => void;
  onBookDirect: (destId: string) => void;
}

export const Destinations: React.FC<DestinationsProps> = ({
  onSelectDestination,
  onBookDirect
}) => {
  return (
    <section id="destinos" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-wider text-[#1e5631]">
            Expediciones Recomendadas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e5631] font-display mt-1">
            Destinos Imperdibles
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Lugares protegidos y accesibles donde la exuberancia natural del oriente ecuatoriano cobra vida.
          </p>
        </div>

        {/* 3 Core Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-slate-100 group"
            >
              {/* Image container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{dest.location.split(',')[0]}</span>
                </div>
                <div className="absolute top-3 right-3 bg-[#1e5631]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-white">
                  ${dest.priceUSD} USD
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1e5631]" />
                    <span>{dest.duration}</span>
                    <span>·</span>
                    <span className="text-emerald-700 font-semibold">{dest.difficulty}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1e5631] font-display mb-2 flex items-center gap-2">
                    <span>{dest.icon}</span>
                    <span>{dest.name}</span>
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {dest.description}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-[#1e5631] hover:bg-[#143d22] rounded-xl transition-colors shadow-sm text-center flex items-center justify-center gap-1.5"
                  >
                    <span>{dest.id === 'selva-amazonica' ? 'Conocer más' : dest.id === 'cascadas' ? 'Explorar' : 'Descubrir'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookDirect(dest.id)}
                    className="py-2.5 px-3.5 text-xs font-semibold text-[#1e5631] hover:text-[#143d22] bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors whitespace-nowrap"
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
