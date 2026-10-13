import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SalesPage } from './pages/SalesPage';
import { ServicePage } from './pages/ServicePage';
import { PartExPage } from './pages/PartExPage';
import { CourtesyPage } from './pages/CourtesyPage';
import { ContactPage } from './pages/ContactPage';
import { VehicleDetailPage } from './pages/VehicleDetailPage';
import { Vehicle, EXAMPLE_VEHICLES } from './data/cars';

function parseRouteFromLocation(): { tab: string; vehicleId?: string } {
  if (typeof window === 'undefined') return { tab: 'home' };

  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const hash = window.location.hash.replace(/^#\/?/, '');

  // Match /cars/:id in pathname or hash
  const carPathMatch = path.match(/^\/cars\/([^/]+)/i);
  const carHashMatch = hash.match(/^cars\/([^/]+)/i);
  const matchedId = carPathMatch?.[1] || carHashMatch?.[1];

  if (matchedId) {
    return { tab: 'car-detail', vehicleId: matchedId };
  }

  // Match standard tabs
  const cleanPath = path.replace(/^\//, '').toLowerCase();
  const cleanHash = hash.toLowerCase();
  const target = cleanPath || cleanHash;

  if (target === 'sales') return { tab: 'sales' };
  if (target === 'service') return { tab: 'service' };
  if (target === 'partex' || target === 'part-ex') return { tab: 'partex' };
  if (target === 'courtesy') return { tab: 'courtesy' };
  if (target === 'contact' || target === 'book') return { tab: 'contact' };

  return { tab: 'home' };
}

export default function App() {
  const initialRoute = parseRouteFromLocation();
  const [activeTab, setActiveTab] = useState<string>(initialRoute.tab);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(initialRoute.vehicleId || null);
  const [bookingVehicle, setBookingVehicle] = useState<Vehicle | null>(null);

  // Sync with browser history and address bar
  const navigateTo = (tab: string, vehicleId?: string) => {
    let targetPath = '/';
    if (tab === 'car-detail' && vehicleId) {
      targetPath = `/cars/${vehicleId}`;
    } else if (tab !== 'home') {
      targetPath = `/${tab}`;
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState({ tab, vehicleId }, '', targetPath);
    }

    setActiveTab(tab);
    if (vehicleId) {
      setSelectedVehicleId(vehicleId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser Back / Forward buttons and direct URL visits
  useEffect(() => {
    const handlePopState = () => {
      const route = parseRouteFromLocation();
      setActiveTab(route.tab);
      if (route.vehicleId) {
        setSelectedVehicleId(route.vehicleId);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleViewVehicleDetails = (vehicle: Vehicle) => {
    navigateTo('car-detail', vehicle.id);
  };

  const handleSelectVehicleForBooking = (vehicle: Vehicle) => {
    setBookingVehicle(vehicle);
    navigateTo('contact');
  };

  // Resolve current vehicle by ID for the dedicated page
  const currentVehicle = selectedVehicleId
    ? EXAMPLE_VEHICLES.find(
        (v) => v.id.toLowerCase() === selectedVehicleId.toLowerCase()
      ) || null
    : null;

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Dealership Header */}
      <Header
        activeTab={activeTab === 'car-detail' ? 'sales' : activeTab}
        setActiveTab={(tab) => navigateTo(tab)}
        onEnquireClick={() => navigateTo('contact')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={(tab) => navigateTo(tab)}
            onViewVehicleDetails={handleViewVehicleDetails}
            onSelectVehicleForBooking={handleSelectVehicleForBooking}
          />
        )}

        {activeTab === 'sales' && (
          <SalesPage
            onViewVehicleDetails={handleViewVehicleDetails}
            onSelectVehicleForBooking={handleSelectVehicleForBooking}
          />
        )}

        {activeTab === 'car-detail' && (
          <VehicleDetailPage
            vehicle={currentVehicle}
            onBackToSales={() => navigateTo('sales')}
            onEnquire={handleSelectVehicleForBooking}
            onSelectSimilarVehicle={handleViewVehicleDetails}
            onNavigateToPartEx={() => navigateTo('partex')}
          />
        )}

        {activeTab === 'service' && (
          <ServicePage
            onCourtesyClick={() => navigateTo('courtesy')}
          />
        )}

        {activeTab === 'partex' && (
          <PartExPage
            onBrowseStock={() => navigateTo('sales')}
          />
        )}

        {activeTab === 'courtesy' && (
          <CourtesyPage
            onBookService={() => navigateTo('service')}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage
            selectedVehicle={bookingVehicle}
          />
        )}
      </main>

      {/* Dealership Footer */}
      <Footer setActiveTab={(tab) => navigateTo(tab)} />
    </div>
  );
}
