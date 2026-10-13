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
import { Vehicle, findVehicleBySlug, getVehicleSlug } from './data/vehicles';

function parseRouteFromLocation(): { tab: string; vehicleSlug?: string } {
  if (typeof window === 'undefined') return { tab: 'home' };

  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const hash = window.location.hash.replace(/^#\/?/, '');

  // Match /cars/:slug in pathname or hash (e.g. /cars/bmw-3-series)
  const carPathMatch = path.match(/^\/cars\/([^/]+)/i);
  const carHashMatch = hash.match(/^cars\/([^/]+)/i);
  const matchedSlug = carPathMatch?.[1] || carHashMatch?.[1];

  if (matchedSlug) {
    return { tab: 'car-detail', vehicleSlug: decodeURIComponent(matchedSlug) };
  }

  // Match standard tabs
  const cleanPath = path.replace(/^\//, '').toLowerCase();
  const cleanHash = hash.toLowerCase();
  const target = cleanPath || cleanHash;

  if (target === 'sales' || target === 'stock' || target === 'cars') return { tab: 'sales' };
  if (target === 'service') return { tab: 'service' };
  if (target === 'partex' || target === 'part-ex') return { tab: 'partex' };
  if (target === 'courtesy') return { tab: 'courtesy' };
  if (target === 'contact' || target === 'book') return { tab: 'contact' };

  return { tab: 'home' };
}

export default function App() {
  const initialRoute = parseRouteFromLocation();
  const [activeTab, setActiveTab] = useState<string>(initialRoute.tab);
  const [selectedVehicleSlug, setSelectedVehicleSlug] = useState<string | null>(initialRoute.vehicleSlug || null);
  const [bookingVehicle, setBookingVehicle] = useState<Vehicle | null>(null);

  // Sync with browser history and address bar
  const navigateTo = (tab: string, vehicleSlug?: string) => {
    let targetPath = '/';
    if (tab === 'car-detail' && vehicleSlug) {
      targetPath = `/cars/${vehicleSlug}`;
    } else if (tab !== 'home') {
      targetPath = `/${tab}`;
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState({ tab, vehicleSlug }, '', targetPath);
    }

    setActiveTab(tab);
    if (vehicleSlug) {
      setSelectedVehicleSlug(vehicleSlug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser Back / Forward buttons and direct URL visits
  useEffect(() => {
    const handlePopState = () => {
      const route = parseRouteFromLocation();
      setActiveTab(route.tab);
      if (route.vehicleSlug) {
        setSelectedVehicleSlug(route.vehicleSlug);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleViewVehicleDetails = (vehicle: Vehicle) => {
    navigateTo('car-detail', getVehicleSlug(vehicle));
  };

  const handleSelectVehicleForBooking = (vehicle: Vehicle) => {
    setBookingVehicle(vehicle);
    navigateTo('contact');
  };

  // Resolve current vehicle by SEO slug (or legacy ID fallback)
  const currentVehicle = selectedVehicleSlug
    ? findVehicleBySlug(selectedVehicleSlug) || null
    : null;

  // Canonical URL sync if accessed via legacy ID or alternative slug format
  useEffect(() => {
    if (activeTab === 'car-detail' && currentVehicle && selectedVehicleSlug) {
      const canonicalSlug = getVehicleSlug(currentVehicle);
      if (selectedVehicleSlug !== canonicalSlug && window.location.pathname.startsWith('/cars/')) {
        window.history.replaceState(
          { tab: 'car-detail', vehicleSlug: canonicalSlug },
          '',
          `/cars/${canonicalSlug}`
        );
        setSelectedVehicleSlug(canonicalSlug);
      }
    }
  }, [activeTab, currentVehicle, selectedVehicleSlug]);

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
