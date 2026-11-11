import React from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Cerrar visor"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[72vh]">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-auto h-auto max-h-[72vh] max-w-full object-contain"
          />
        </div>

        <div className="mt-4 text-center text-white max-w-xl px-4">
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
            <span>·</span>
            <span>{item.categoryLabel}</span>
          </div>
          <h3 className="text-xl font-bold font-display">{item.title}</h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};
