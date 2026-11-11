import React from 'react';
import { SunMedium, Shirt, ShieldCheck, HeartHandshake, CloudRain } from 'lucide-react';
import { TRAVEL_TIPS, REGIONS_WEATHER } from '../data/amazonData';

export const TravelTips: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'SunMedium':
        return <SunMedium className="w-5 h-5 text-amber-600" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#1e5631]">
            Preparación para tu Viaje
          </span>
          <h2 className="text-3xl font-extrabold text-[#1e5631] font-display mt-1">
            Consejos Prácticos & Clima Amazónico
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Recomendaciones esenciales para disfrutar al máximo tu experiencia en la selva ecuatoriana.
          </p>
        </div>

        {/* 4 Essential Advice Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TRAVEL_TIPS.map((tip, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3.5">
                {getIcon(tip.icon)}
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5 font-display">
                {tip.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Regional Weather Strip */}
        <div className="bg-[#123b23] text-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <CloudRain className="w-6 h-6 text-emerald-400" />
              <div>
                <h4 className="text-lg font-bold font-display">
                  Estado del Tiempo en el Oriente Ecuatoriano
                </h4>
                <p className="text-xs text-emerald-200">
                  Condiciones climáticas típicas en las principales puertas de entrada
                </p>
              </div>
            </div>
            <div className="text-xs bg-white/10 px-3 py-1.5 rounded-lg text-emerald-100">
              Humedad promedio anual: 84%
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {REGIONS_WEATHER.map((w, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <div className="text-xs text-emerald-300 font-semibold">{w.region}</div>
                <div className="text-2xl font-bold font-display mt-1 text-white">{w.temp}</div>
                <div className="text-xs text-white/70 mt-0.5">{w.condition}</div>
                <div className="text-[11px] text-white/50 mt-1">Humedad: {w.humidity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
