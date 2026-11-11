import React, { useState } from 'react';
import { X, Calendar, Users, MapPin, Check, Sparkles, Compass, Shield } from 'lucide-react';
import { DESTINATIONS } from '../data/amazonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestinationId?: string;
  onBookingSuccess: (reservationCode: string, summary: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialDestinationId = 'selva-amazonica',
  onBookingSuccess
}) => {
  const [selectedDestId, setSelectedDestId] = useState(initialDestinationId);
  const [date, setDate] = useState('2026-11-20');
  const [travelers, setTravelers] = useState(2);
  const [tier, setTier] = useState<'standard' | 'premium'>('standard');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [includeTransfer, setIncludeTransfer] = useState(true);
  const [includeBirdwatching, setIncludeBirdwatching] = useState(false);
  const [specialDiet, setSpecialDiet] = useState('none');
  const [step, setStep] = useState<1 | 2>(1);

  if (!isOpen) return null;

  const currentDest = DESTINATIONS.find((d) => d.id === selectedDestId) || DESTINATIONS[0];
  const basePricePerPerson = currentDest.priceUSD;
  const tierMultiplier = tier === 'premium' ? 1.35 : 1.0;
  const transferCost = includeTransfer ? 45 * travelers : 0;
  const birdwatchingCost = includeBirdwatching ? 35 * travelers : 0;
  const subtotal = Math.round(basePricePerPerson * travelers * tierMultiplier + transferCost + birdwatchingCost);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert('Por favor complete su nombre y correo electrónico.');
      return;
    }
    const refCode = `AMZ-EC-${Math.floor(100000 + Math.random() * 900000)}`;
    const summary = `${currentDest.name} (${currentDest.duration}) para ${travelers} viajero(s) a partir del ${date}. Total estimado: $${subtotal} USD.`;
    onBookingSuccess(refCode, summary);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1e5631] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display tracking-tight">
                Planifica tu Expedición Amazónica
              </h2>
              <p className="text-xs text-emerald-100">
                Turismo ecológico regulado y en alianza con comunidades locales
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {step === 1 ? (
            <div className="space-y-6">
              {/* Destination selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  1. Selecciona tu Destino
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {DESTINATIONS.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setSelectedDestId(d.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all relative ${
                        selectedDestId === d.id
                          ? 'border-[#1e5631] bg-emerald-50/70 shadow-sm ring-2 ring-[#1e5631]/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="text-2xl mb-1">{d.icon}</div>
                      <div className="font-bold text-slate-900 text-sm">{d.name}</div>
                      <div className="text-xs text-slate-500">{d.duration}</div>
                      <div className="mt-2 text-xs font-semibold text-[#1e5631]">
                        Desde ${d.priceUSD} USD/persona
                      </div>
                      {selectedDestId === d.id && (
                        <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#1e5631] text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Travelers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                    Fecha de Salida
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e5631]/20 focus:border-[#1e5631]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                    Número de Viajeros
                  </label>
                  <div className="relative flex items-center border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      className="px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-bold text-base transition-colors"
                    >
                      -
                    </button>
                    <div className="flex-1 text-center font-medium text-sm text-slate-900 flex items-center justify-center gap-1.5">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span>{travelers} persona{travelers > 1 ? 's' : ''}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setTravelers(Math.min(12, travelers + 1))}
                      className="px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-bold text-base transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Package tier */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Modalidad de Hospedaje
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTier('standard')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      tier === 'standard'
                        ? 'border-[#1e5631] bg-emerald-50/50 ring-1 ring-[#1e5631]'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-semibold text-slate-900 text-sm">Cabaña Rústica Ecológica</div>
                    <div className="text-xs text-slate-500 mt-0.5">Baño privado, mosquiteros y energía solar diurna.</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTier('premium')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      tier === 'premium'
                        ? 'border-[#1e5631] bg-emerald-50/50 ring-1 ring-[#1e5631]'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900 text-sm">Lodge Premium Dosel</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">Balcón panorámico a la selva, ventilador y agua caliente.</div>
                  </button>
                </div>
              </div>

              {/* Add-on options */}
              <div className="bg-slate-50 p-4 rounded-xl space-y-2.5 border border-slate-100">
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                  Servicios Opcionales
                </div>

                <label className="flex items-center justify-between text-sm text-slate-700 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={includeTransfer}
                      onChange={(e) => setIncludeTransfer(e.target.checked)}
                      className="rounded text-[#1e5631] focus:ring-[#1e5631]"
                    />
                    <span>Transporte privado terrestre desde Quito o Baños</span>
                  </div>
                  <span className="text-xs font-medium text-slate-500">+$45/p</span>
                </label>

                <label className="flex items-center justify-between text-sm text-slate-700 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={includeBirdwatching}
                      onChange={(e) => setIncludeBirdwatching(e.target.checked)}
                      className="rounded text-[#1e5631] focus:ring-[#1e5631]"
                    />
                    <span>Equipo telescópico y guía ornitólogo certificado</span>
                  </div>
                  <span className="text-xs font-medium text-slate-500">+$35/p</span>
                </label>
              </div>

              {/* Price summary strip */}
              <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                <div>
                  <div className="text-xs text-slate-500">Precio total estimado ({travelers} pers.)</div>
                  <div className="text-2xl font-bold text-slate-900 font-display">
                    ${subtotal} <span className="text-sm font-normal text-slate-500">USD</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-[#1e5631] hover:bg-[#143d22] rounded-xl shadow-md transition-colors"
                >
                  Continuar con mis datos
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-100 text-xs text-emerald-900 flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Expedición seleccionada:</strong> {currentDest.name} ({currentDest.duration}) para {travelers} viajeros. Fecha de inicio: {date}.
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej. María Elena Delgado"
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e5631]/20 focus:border-[#1e5631]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@gmail.com"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e5631]/20 focus:border-[#1e5631]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+593 99 123 4567"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e5631]/20 focus:border-[#1e5631]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Requerimientos Alimenticios o Médicos
                </label>
                <select
                  value={specialDiet}
                  onChange={(e) => setSpecialDiet(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e5631]/20 focus:border-[#1e5631]"
                >
                  <option value="none">Sin restricciones (menú tradicional amazónico)</option>
                  <option value="vegetarian">Vegetariano / Vegano</option>
                  <option value="gluten-free">Libre de gluten</option>
                  <option value="allergies">Alergias a mariscos / frutos secos</option>
                </select>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-4 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Regresar
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-[#1e5631] hover:bg-[#143d22] rounded-xl shadow-md transition-colors"
                >
                  Confirmar Reserva (${subtotal} USD)
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
