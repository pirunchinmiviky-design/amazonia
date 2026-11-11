import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';

interface ContactSectionProps {
  onSendMessageSuccess: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSendMessageSuccess }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [destino, setDestino] = useState('selva-general');
  const [mensaje, setMensaje] = useState('');
  const [errors, setErrors] = useState<{ nombre?: string; email?: string; mensaje?: string }>({});

  const validate = () => {
    const newErrors: { nombre?: string; email?: string; mensaje?: string } = {};
    if (!nombre.trim()) {
      newErrors.nombre = 'Por favor escribe tu nombre.';
    }
    if (!email.trim()) {
      newErrors.email = 'Por favor ingresa tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Ingresa un formato de correo válido.';
    }
    if (!mensaje.trim()) {
      newErrors.mensaje = 'Por favor escribe tu mensaje o duda.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSendMessageSuccess();
      setNombre('');
      setEmail('');
      setMensaje('');
      setErrors({});
    }
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#1e5631]">
            Estamos Para Asesorarte
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e5631] font-display mt-1">
            Contáctanos
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Escríbenos para armar una ruta a tu medida o resolver dudas sobre fechas, vacunas y traslados.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Info Box (Left) */}
          <div className="lg:col-span-5 bg-[#1e5631] text-white p-7 rounded-2xl shadow-lg space-y-6">
            <div>
              <h4 className="text-xl font-bold font-display">
                Operadora Amazónica Ecuador
              </h4>
              <p className="text-xs text-emerald-100 mt-1 leading-relaxed">
                Asesoría personalizada por guías naturalistas con más de 15 años navegando el río Napo y Cuyabeno.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Av. 15 de Noviembre y Rocafuerte, Tena, Napo · Ecuador</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+593 98 420 8911 (WhatsApp 24/7)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@amazoniaecuador-turismo.ec</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lunes a Domingo: 07:00 - 20:00 (Hora Ecuador)</span>
              </div>
            </div>

            <div className="p-3.5 bg-black/20 rounded-xl border border-white/10 text-xs text-emerald-100">
              🌿 <strong>Compromiso Verde:</strong> Respondemos tus consultas en un lapso menor a 2 horas en horario laboral.
            </div>
          </div>

          {/* Form matching user's original inputs (Right) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#1e5631]" />
                  <span>Nombre</span>
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => {
                    setNombre(e.target.value);
                    if (errors.nombre) setErrors({ ...errors, nombre: undefined });
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.nombre
                      ? 'border-red-400 ring-2 ring-red-100'
                      : 'border-slate-200 focus:border-[#1e5631] focus:ring-[#1e5631]/20'
                  }`}
                  placeholder="Escribe tu nombre"
                />
                {errors.nombre && (
                  <p className="text-xs text-red-500 mt-1">{errors.nombre}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#1e5631]" />
                  <span>Correo electrónico</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-400 ring-2 ring-red-100'
                      : 'border-slate-200 focus:border-[#1e5631] focus:ring-[#1e5631]/20'
                  }`}
                  placeholder="ejemplo@gmail.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Destino o Ruta de Interés
                </label>
                <select
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1e5631] focus:ring-2 focus:ring-[#1e5631]/20"
                >
                  <option value="selva-general">Selva Amazónica (Yasuní & Reserva Huaorani)</option>
                  <option value="cascadas">Cascadas y Cañones (Tena & Pastaza)</option>
                  <option value="rios">Ríos Amazónicos y Lagunas (Cuyabeno & Río Napo)</option>
                  <option value="cultural">Convivencia Comunitaria Kichwa</option>
                  <option value="otro">Asesoría General / Paquete a Medida</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#1e5631]" />
                  <span>Mensaje</span>
                </label>
                <textarea
                  rows={4}
                  value={mensaje}
                  onChange={(e) => {
                    setMensaje(e.target.value);
                    if (errors.mensaje) setErrors({ ...errors, mensaje: undefined });
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.mensaje
                      ? 'border-red-400 ring-2 ring-red-100'
                      : 'border-slate-200 focus:border-[#1e5631] focus:ring-[#1e5631]/20'
                  }`}
                  placeholder="Escribe tu mensaje, número de personas, fechas estimadas..."
                />
                {errors.mensaje && (
                  <p className="text-xs text-red-500 mt-1">{errors.mensaje}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 text-sm font-bold text-white bg-[#1e5631] hover:bg-[#143d22] rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
