import React, { useState } from 'react';
import { TreePine, Waves, Users, Camera, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/amazonData';

interface ExperiencesProps {
  onOpenBooking: () => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onOpenBooking }) => {
  const [showItinerary, setShowItinerary] = useState(false);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'TreePine':
        return <TreePine className="w-5 h-5 text-[#1e5631]" />;
      case 'Waves':
        return <Waves className="w-5 h-5 text-[#1e5631]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#1e5631]" />;
      default:
        return <Camera className="w-5 h-5 text-[#1e5631]" />;
    }
  };

  return (
    <section id="experiencias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-wider text-[#1e5631]">
            Turismo Comunitario & Sostenible
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e5631] font-display mt-1">
            {EXPERIENCES_DATA.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Una inmersión auténtica en la selva, guiada por las manos de quienes han protegido este territorio por generaciones.
          </p>
        </div>

        {/* 2-Column Split matching the user's template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Authentic Cultural Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
              <img
                src={EXPERIENCES_DATA.image}
                alt="Convivencia y cultura con comunidades indígenas en la Amazonía ecuatoriana"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/90 text-xs font-semibold backdrop-blur-md mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Encuentro Comunitario Kichwa</span>
                </div>
                <h4 className="text-lg font-bold font-display">
                  Alfarería tradicional y saberes medicinales
                </h4>
                <p className="text-xs text-white/80 mt-1 line-clamp-2">
                  Aprende el uso del achiote, el tejido de chambira y la preparación tradicional de la guayusa.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & List-Group */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1e5631] font-display mb-3">
                {EXPERIENCES_DATA.subtitle}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                La Amazonía ecuatoriana es un lugar lleno de biodiversidad, culturas ancestrales y paisajes sorprendentes.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mt-2">
                Conoce comunidades, disfruta de la naturaleza, descubre nuevas especies y vive experiencias inolvidables que respetan la flora, fauna y el patrimonio vivo de los pueblos originarios.
              </p>
            </div>

            {/* List group preserving user's 4 items with modern styling */}
            <div className="space-y-3">
              {EXPERIENCES_DATA.pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all flex items-start gap-3.5 bg-slate-50/50"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-100/70 shrink-0 mt-0.5">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base">
                      {pillar.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Itinerary toggle & CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => setShowItinerary(!showItinerary)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#1e5631] bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{showItinerary ? 'Ocultar Itinerario' : 'Ver Itinerario Sugerido (4 Días)'}</span>
                {showItinerary ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#1e5631] hover:bg-[#143d22] rounded-xl shadow-md transition-colors text-center"
              >
                Personalizar mi experiencia
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Itinerary view */}
        {showItinerary && (
          <div className="mt-12 p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 animate-fadeIn">
            <h4 className="text-xl font-bold text-slate-900 font-display mb-4 text-center">
              Itinerario Modelo: Expedición Biodiversidad Yasuní & Napo (4D / 3N)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {EXPERIENCES_DATA.itineraryDays.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1e5631] mb-2 uppercase tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.day.split(':')[0]}</span>
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm mb-1.5">
                    {item.day.split(':')[1]}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
