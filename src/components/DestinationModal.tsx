import React from 'react';
import { X, Check, MapPin, Clock, Gauge, Compass } from 'lucide-react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onBookNow: (destId: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onBookNow
}) => {
  if (!destination) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors backdrop-blur-md"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image in modal */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-300">
              {destination.subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display mt-0.5">
              {destination.icon} {destination.name}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/90 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {destination.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {destination.duration}
              </span>
              <span className="flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5 text-amber-400" />
                Dificultad: {destination.difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* Modal content body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
              Descripción de la Expedición
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {destination.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Puntos Destacados
            </h4>
            <ul className="space-y-2">
              {destination.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#1e5631] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Incluye en el Paquete
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
              {destination.included.map((inc, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e5631]" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action strip */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-500">Tarifa base desde</div>
              <div className="text-2xl font-bold text-slate-900 font-display">
                ${destination.priceUSD} <span className="text-xs font-normal text-slate-500">USD / persona</span>
              </div>
            </div>

            <button
              onClick={() => {
                onBookNow(destination.id);
                onClose();
              }}
              className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-white bg-[#1e5631] hover:bg-[#143d22] rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Reservar esta Aventura</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
