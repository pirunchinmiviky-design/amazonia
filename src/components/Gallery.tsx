import React, { useState } from 'react';
import { Maximize2, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/amazonData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onSelectItem: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectItem }) => {
  const [filter, setFilter] = useState<string>('todos');

  const filteredItems = filter === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'paisajes', label: 'Paisajes & Ríos' },
    { id: 'fauna', label: 'Fauna Silvestre' },
    { id: 'cascadas', label: 'Cascadas' },
    { id: 'cultura', label: 'Cultura & Comunidad' },
  ];

  return (
    <section id="galeria" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-[#1e5631]">
            Ventana al Oriente Ecuatoriano
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e5631] font-display mt-1">
            Galería Amazónica
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Explora las postales vivas capturadas en nuestras expediciones por Napo, Orellana, Pastaza y Sucumbíos.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                filter === cat.id
                  ? 'bg-[#1e5631] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid matching user's 6+ images with hover zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-200"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <h4 className="text-base font-bold font-display group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
