/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Destinations } from './components/Destinations';
import { Experiences } from './components/Experiences';
import { WildlifeSection } from './components/WildlifeSection';
import { Gallery } from './components/Gallery';
import { TravelTips } from './components/TravelTips';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SweetAlertModal, AlertState } from './components/SweetAlertModal';
import { BookingModal } from './components/BookingModal';
import { DestinationModal } from './components/DestinationModal';
import { LightboxModal } from './components/LightboxModal';
import { Destination, GalleryItem } from './types';
import { GALLERY_ITEMS } from './data/amazonData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedDestId, setPreselectedDestId] = useState<string>('selva-amazonica');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [alertState, setAlertState] = useState<AlertState | null>(null);

  // Reproduces user's original mostrarAlertaReserva() with enhanced interactive booking link
  const handleMostrarAlertaReserva = () => {
    setAlertState({
      isOpen: true,
      title: '¡Reserva tu viaje!',
      text: 'Esta es una plataforma de expediciones amazónicas. Puedes abrir nuestro planificador interactivo para calcular precios, fechas y actividades.',
      icon: 'success',
      confirmText: 'Planificar Mi Viaje',
      onConfirm: () => {
        setIsBookingOpen(true);
      },
      secondaryAction: {
        text: 'Cerrar',
        onClick: () => {}
      }
    });
  };

  // Reproduces user's original enviarMensaje()
  const handleEnviarMensaje = () => {
    setAlertState({
      isOpen: true,
      title: '¡Mensaje enviado!',
      text: 'Gracias por contactarnos. Pronto nos comunicaremos contigo a tu correo o WhatsApp.',
      icon: 'success',
      confirmText: 'Aceptar',
      onConfirm: () => {}
    });
  };

  const handleBookingSuccess = (code: string, summary: string) => {
    setAlertState({
      isOpen: true,
      title: '¡Reserva Confirmada!',
      text: `Código de confirmación: ${code}. ${summary} Te hemos enviado los detalles y la lista de equipaje a tu correo.`,
      icon: 'success',
      confirmText: 'Entendido',
      onConfirm: () => {}
    });
  };

  const handleOpenBookingForDestination = (destId: string) => {
    setPreselectedDestId(destId);
    setIsBookingOpen(true);
  };

  const scrollToDestinations = () => {
    const el = document.getElementById('destinos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      {/* Navigation */}
      <Navbar onOpenBooking={handleMostrarAlertaReserva} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onShowReservationAlert={handleMostrarAlertaReserva}
          onExploreDestinations={scrollToDestinations}
        />

        {/* Destinos Imperdibles */}
        <Destinations
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          onBookDirect={handleOpenBookingForDestination}
        />

        {/* Experiencias Amazónicas */}
        <Experiences
          onOpenBooking={() => handleOpenBookingForDestination('selva-amazonica')}
        />

        {/* Fauna Amazónica (Spotlight) */}
        <WildlifeSection
          onOpenBooking={() => handleOpenBookingForDestination('selva-amazonica')}
        />

        {/* Galería Fotográfica */}
        <Gallery onSelectItem={(item) => setLightboxItem(item)} />

        {/* Tips de Viaje & Clima */}
        <TravelTips />

        {/* Contacto */}
        <ContactSection onSendMessageSuccess={handleEnviarMensaje} />
      </main>

      {/* Footer */}
      <Footer />

      {/* SweetAlert Dialog (Faithful to user's Swal.fire) */}
      <SweetAlertModal
        alert={alertState}
        onClose={() => setAlertState(null)}
      />

      {/* Interactive Booking Planner Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialDestinationId={preselectedDestId}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Destination Detailed View Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onBookNow={handleOpenBookingForDestination}
      />

      {/* Full Lightbox View Modal */}
      <LightboxModal
        item={lightboxItem}
        items={GALLERY_ITEMS}
        onClose={() => setLightboxItem(null)}
        onNavigate={(newItem) => setLightboxItem(newItem)}
      />
    </div>
  );
}
