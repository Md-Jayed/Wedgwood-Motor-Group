import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Car, 
  ShieldCheck, 
  FileText, 
  SlidersHorizontal,
  CheckCircle2,
  RefreshCw,
  Send
} from 'lucide-react';
import { VEHICLES, Vehicle } from '../data/vehicles';
import { VehicleCard } from '../components/VehicleCard';

interface SalesPageProps {
  onViewVehicleDetails: (vehicle: Vehicle) => void;
  onSelectVehicleForBooking: (vehicle: Vehicle) => void;
}

export const SalesPage: React.FC<SalesPageProps> = ({
  onViewVehicleDetails,
  onSelectVehicleForBooking
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFuel, setSelectedFuel] = useState<string>('All');
  const [selectedTransmission, setSelectedTransmission] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const [sourcingSent, setSourcingSent] = useState(false);
  const [sourcingForm, setSourcingForm] = useState({
    name: '',
    phone: '',
    email: '',
    desiredVehicle: '',
    budget: ''
  });

  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((vehicle) => {
      const term = searchTerm.toLowerCase();
      const matchesSearch = 
        !term ||
        vehicle.make.toLowerCase().includes(term) ||
        vehicle.model.toLowerCase().includes(term) ||
        (vehicle.variant && vehicle.variant.toLowerCase().includes(term)) ||
        (vehicle.regPlate && vehicle.regPlate.toLowerCase().includes(term)) ||
        (vehicle.description && vehicle.description.toLowerCase().includes(term));

      const matchesFuel = 
        selectedFuel === 'All' || vehicle.fuelType === selectedFuel;

      const matchesTransmission = 
        selectedTransmission === 'All' || vehicle.transmission === selectedTransmission;

      const matchesStatus =
        selectedStatus === 'All' || vehicle.status === selectedStatus;

      return matchesSearch && matchesFuel && matchesTransmission && matchesStatus;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'mileage') return (a.mileage || 0) - (b.mileage || 0);
      if (sortBy === 'year-newest') return b.year - a.year;
      // Default: available first, then newest year
      if (a.status === 'available' && b.status === 'sold') return -1;
      if (a.status === 'sold' && b.status === 'available') return 1;
      return b.year - a.year;
    });
  }, [searchTerm, selectedFuel, selectedTransmission, selectedStatus, sortBy]);

  const handleSourcingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSourcingSent(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <Car className="w-4 h-4 text-red-600" />
              <span>PRE-OWNED VEHICLE SHOWROOM</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
              Used Vehicle Sales
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Browse our inventory of pre-owned cars prepared to rigorous workshop standards. All vehicles undergo thorough mechanical checks and full HPI verification.
            </p>
          </div>

          {/* Dealership Quality Assurance Pill */}
          <div className="bg-[#F7F7F7] border border-slate-200 p-3 rounded-lg text-xs text-slate-600 max-w-sm">
            <span className="font-bold text-slate-950 block mb-0.5">Workshop Inspection Standards:</span>
            Every vehicle undergoes comprehensive multi-point mechanical inspection and full provenance verification prior to handover.
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#F7F7F7] p-4 sm:p-6 rounded-xl border border-slate-200 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="md:col-span-4 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search make, model, variant..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
              />
            </div>

            {/* Fuel Filter */}
            <div className="md:col-span-2">
              <select
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600"
              >
                <option value="All">All Fuel Types</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid / Plug-in</option>
                <option value="Electric">Electric</option>
              </select>
            </div>

            {/* Transmission Filter */}
            <div className="md:col-span-2">
              <select
                value={selectedTransmission}
                onChange={(e) => setSelectedTransmission(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600"
              >
                <option value="All">All Gearboxes</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>

            {/* Stock Availability Filter */}
            <div className="md:col-span-2">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600"
              >
                <option value="All">All Stock Status</option>
                <option value="available">In Stock Only</option>
                <option value="sold">Recently Sold</option>
              </select>
            </div>

            {/* Sorting */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="mileage">Lowest Mileage</option>
                <option value="year-newest">Newest Year</option>
              </select>
            </div>
          </div>

          {/* Quick Active Filters tags */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200 text-xs text-slate-600">
            <div>
              Showing <strong className="text-slate-950">{filteredVehicles.length}</strong> of{' '}
              <strong className="text-slate-950">{VEHICLES.length}</strong> vehicles in inventory
            </div>
            {(searchTerm || selectedFuel !== 'All' || selectedTransmission !== 'All' || selectedStatus !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedFuel('All');
                  setSelectedTransmission('All');
                  setSelectedStatus('All');
                }}
                className="text-red-600 hover:text-red-700 flex items-center gap-1 font-semibold"
              >
                <RefreshCw className="w-3 h-3" />
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Vehicle Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredVehicles.map((car) => (
              <VehicleCard
                key={car.id}
                vehicle={car}
                onViewDetails={onViewVehicleDetails}
                onEnquire={onSelectVehicleForBooking}
              />
            ))}
          </div>
        ) : (
          <div className="bg-[#F7F7F7] border border-slate-200 rounded-xl p-12 text-center space-y-3">
            <Car className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No Vehicles Matched Your Filter</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Please adjust your search terms or fuel filter to view available demonstration stock.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFuel('All');
                setSelectedTransmission('All');
              }}
              className="bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded uppercase tracking-wider hover:bg-red-700"
            >
              Show All Vehicles
            </button>
          </div>
        )}

        {/* Vehicle Sourcing & Assurance Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
          {/* Sourcing Standards info */}
          <div className="lg:col-span-5 bg-[#F7F7F7] p-6 rounded-xl border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-950 uppercase tracking-wider">
              Dealership Inventory Principles
            </h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Provenance Verification:</strong> Standard procedure to check vehicle identity, recorded mileage, and ownership history.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Multi-Point Inspection:</strong> Standard workshop evaluation covering brakes, tyres, fluids, and safety items.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Transparent Pricing:</strong> Clear vehicle pricing with no undisclosed dealer admin fees.</span>
              </li>
            </ul>
          </div>

          {/* Bespoke Vehicle Sourcing Form */}
          <div className="lg:col-span-7 bg-[#F7F7F7] p-6 rounded-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-950 uppercase tracking-wider mb-1">
              Vehicle Sourcing Request
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Looking for a specific make or model? Submit your preferred specification for demonstration evaluation.
            </p>

            {sourcingSent ? (
              <div className="bg-slate-100 border border-slate-300 p-5 rounded text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-slate-700 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">
                  Form Validated (Demonstration Mode)
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, {sourcingForm.name}. Your vehicle sourcing request for "{sourcingForm.desiredVehicle}" has been validated in browser. Please note: This website is currently in demonstration mode for insurance audit. Your request has not been sent externally because a live backend is not yet connected.
                </p>
                <button
                  onClick={() => setSourcingSent(false)}
                  className="text-xs underline text-red-600 hover:text-red-700 font-medium inline-block"
                >
                  Reset sourcing form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSourcingSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={sourcingForm.name}
                      onChange={(e) => setSourcingForm({ ...sourcingForm, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="07123 456789"
                      value={sourcingForm.phone}
                      onChange={(e) => setSourcingForm({ ...sourcingForm, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Budget (£)</label>
                    <input
                      type="text"
                      placeholder="e.g. £20,000 - £25,000"
                      value={sourcingForm.budget}
                      onChange={(e) => setSourcingForm({ ...sourcingForm, budget: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Vehicle Specification &amp; Preferences *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2021 BMW 330e M Sport or Audi A4 Avant Diesel under 40k miles"
                    value={sourcingForm.desiredVehicle}
                    onChange={(e) => setSourcingForm({ ...sourcingForm, desiredVehicle: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Sourcing Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
