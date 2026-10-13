import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Wrench, 
  Car, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  FileText, 
  KeyRound, 
  Send 
} from 'lucide-react';
import { VEHICLES, DEALERSHIP_INFO, Vehicle } from '../data/vehicles';
import { VehicleCard } from '../components/VehicleCard';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onViewVehicleDetails: (vehicle: Vehicle) => void;
  onSelectVehicleForBooking: (vehicle: Vehicle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onViewVehicleDetails,
  onSelectVehicleForBooking
}) => {
  const [quickContactSent, setQuickContactSent] = useState(false);
  const [quickContact, setQuickContact] = useState({
    name: '',
    phone: '',
    department: 'Sales Enquiry',
    message: ''
  });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuickContactSent(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden border-b border-slate-200">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Overlay to ensure high text contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Location pill */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 px-3 py-1.5 rounded text-xs font-semibold text-white backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>BICESTER, OXFORDSHIRE</span>
              <span className="text-white/60">•</span>
              <span className="text-white/90">UNIT 7, WEDGWOOD ROAD</span>
            </div>

            {/* Prominent Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-sans leading-none">
              Quality Cars.<br />
              <span className="text-red-500">Trusted Service.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Welcome to <strong className="text-white">Wedge Wood Motor Group</strong>. We deliver carefully prepared pre-owned vehicles, full workshop mechanical servicing, transparent part-exchange valuations, and dedicated courtesy car mobility in Bicester.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setActiveTab('sales')}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded shadow-lg shadow-red-950/30 transition-all flex items-center gap-2 group"
              >
                <span>VIEW OUR CARS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActiveTab('service')}
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded transition-all backdrop-blur-sm"
              >
                BOOK SERVICE &amp; MOT
              </button>
            </div>

            {/* Audit / Compliance indicator banner */}
            <div className="pt-4 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Demonstration platform configured for insurance compliance &amp; trade inspection.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Process Bar */}
      <section className="bg-[#F7F7F7] border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-red-600 shrink-0 border border-slate-200 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Vehicle Sourcing</div>
                <div className="text-[11px] text-slate-500">Curated pre-owned selections</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-red-600 shrink-0 border border-slate-200 shadow-sm">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Workshop Facility</div>
                <div className="text-[11px] text-slate-500">Servicing &amp; maintenance bays</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-red-600 shrink-0 border border-slate-200 shadow-sm">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Part Exchange</div>
                <div className="text-[11px] text-slate-500">Trade-in appraisal facility</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-red-600 shrink-0 border border-slate-200 shadow-sm">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Courtesy Cars</div>
                <div className="text-[11px] text-slate-500">Replacement transport option</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicle Stock Grid (6 Cars) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              CURRENT INVENTORY SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 uppercase">
              Featured Stock &amp; Inventory
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Handpicked selection of quality pre-owned vehicles prepared to our workshop inspection criteria. Contact our team to book a private viewing or test drive.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('sales')}
              className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>Explore All Stock ({VEHICLES.length})</span>
              <ArrowRight className="w-3.5 h-3.5 text-red-600" />
            </button>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VEHICLES.slice(0, 6).map((car) => (
            <VehicleCard
              key={car.id}
              vehicle={car}
              onViewDetails={onViewVehicleDetails}
              onEnquire={onSelectVehicleForBooking}
            />
          ))}
        </div>

        {/* Stock Quality Assurance Banner */}
        <div className="mt-8 p-4 bg-[#F7F7F7] rounded-lg border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Quality Commitment:</strong> All stock vehicles undergo thorough multi-point mechanical inspection, complete provenance verification, and valet preparation prior to handover.
            </span>
          </div>
          <button
            onClick={() => setActiveTab('sales')}
            className="text-red-600 hover:text-red-700 font-semibold underline text-xs shrink-0"
          >
            Filter By Fuel &amp; Gearbox &rarr;
          </button>
        </div>
      </section>

      {/* About The Dealership Section */}
      <section className="py-16 bg-[#F7F7F7] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold text-red-600 uppercase tracking-widest">
                ABOUT WEDGEWOOD MOTOR GROUP
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
                A Modern Automotive Dealership in Bicester
              </h2>
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  Conveniently situated at <strong className="text-slate-900">Unit 7, Wedgwood Road, Bicester (OX26 4UL)</strong>, Wedgwood Motor Group provides Oxfordshire drivers with a dependable, transparent alternative for vehicle purchasing, mechanical servicing, and part exchange.
                </p>
                <p>
                  Our operation prioritises simplicity, rigorous safety checks, and customer mobility. Whether purchasing your next car, booking an interim or major mechanical service, or appraising your existing vehicle for trade-in, our experienced team ensures clear communication without high-pressure sales tactics.
                </p>
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Dealership trading premises in Bicester</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Vehicle provenance checks on example stock</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Dedicated workshop servicing facilities</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Customer courtesy vehicle programme</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('contact')}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Visit Our Premises</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual Feature Card with Exact Address */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
                  BUSINESS PREMISES
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Trading Location Details
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="leading-snug">
                    <div className="font-bold text-slate-950 text-sm">WEDGE WOOD MOTOR GROUP</div>
                    <div>Unit 7, Wedgwood Rd</div>
                    <div>Bicester</div>
                    <div>OX26 4UL</div>
                    <div>United Kingdom</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-red-600 shrink-0" />
                  <div>
                    <span className="text-slate-500">Telephone: </span>
                    <a 
                      href={`tel:${DEALERSHIP_INFO.phoneRaw}`} 
                      className="text-slate-900 font-bold hover:text-red-600 transition-colors"
                    >
                      {DEALERSHIP_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-red-600 shrink-0" />
                  <div>
                    <span className="text-slate-500">Email: </span>
                    <a 
                      href={`mailto:${DEALERSHIP_INFO.email}`} 
                      className="text-slate-900 font-bold hover:text-red-600 transition-colors"
                    >
                      {DEALERSHIP_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F7F7] p-4 rounded border border-slate-200">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-red-600" />
                  <span>Operating Hours</span>
                </div>
                <div className="text-xs text-slate-900 font-bold text-sm">
                  8:00am – 6:00pm
                </div>
                <p className="text-[11px] text-slate-600 mt-1">
                  Monday to Saturday: 8:00am – 6:00pm • Sunday by appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Departments Grid (Sales, Service, Part Ex, Courtesy) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
            OUR CORE OFFERING
          </div>
          <h2 className="text-3xl font-extrabold text-slate-950 uppercase">
            Four Key Dealership Services
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Explore our specialized departments designed to support every stage of vehicle ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: SALES */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-slate-300 shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded bg-[#F7F7F7] flex items-center justify-center text-red-600 mb-4 border border-slate-200">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. VEHICLE SALES</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Carefully curated pre-owned passenger, estate, and performance vehicles. Thoroughly inspected with clear title and provenance.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('sales')}
              className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1.5 transition-colors pt-2 border-t border-slate-100"
            >
              <span>View Available Stock</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: SERVICE */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-slate-300 shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded bg-[#F7F7F7] flex items-center justify-center text-red-600 mb-4 border border-slate-200">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. SERVICE &amp; MOT</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Professional interim, full, and major servicing carried out to manufacturer guidelines using certified parts and oils.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('service')}
              className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1.5 transition-colors pt-2 border-t border-slate-100"
            >
              <span>Book Servicing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: PART EX */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-slate-300 shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded bg-[#F7F7F7] flex items-center justify-center text-red-600 mb-4 border border-slate-200">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. PART EXCHANGE</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Trade in your current vehicle against any stock car or arrange an outright appraisal with immediate settlement.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('partex')}
              className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1.5 transition-colors pt-2 border-t border-slate-100"
            >
              <span>Get Part Ex Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: COURTESY */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-slate-300 shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded bg-[#F7F7F7] flex items-center justify-center text-red-600 mb-4 border border-slate-200">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">4. COURTESY CARS</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Stay mobile while your car is undergoing scheduled servicing or mechanical repair at our Bicester workshop facility.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('courtesy')}
              className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1.5 transition-colors pt-2 border-t border-slate-100"
            >
              <span>Courtesy Information</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Location, Contact Form & Map Section */}
      <section className="py-16 bg-[#F7F7F7] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="mb-6">
                <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
                  GET IN TOUCH
                </div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Send an Enquiry to Wedgwood Motor Group
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Complete the form below to enquire regarding sales, workshop servicing, or general visits.
                </p>
              </div>

              {quickContactSent ? (
                <div className="bg-slate-100 border border-slate-300 p-6 rounded text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-slate-700 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">
                    Form Validated (Demonstration Mode)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                    Thank you, {quickContact.name}. Your enquiry details for <strong>{quickContact.department}</strong> have been validated in browser. Please note: This website is currently in demonstration mode for insurance audit. Your details have not been sent externally because a live backend is not yet connected.
                  </p>
                  <button
                    onClick={() => setQuickContactSent(false)}
                    className="text-xs underline text-red-600 hover:text-red-700 font-medium inline-block"
                  >
                    Reset form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={quickContact.name}
                        onChange={(e) => setQuickContact({ ...quickContact, name: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="07123 456789"
                        value={quickContact.phone}
                        onChange={(e) => setQuickContact({ ...quickContact, phone: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Enquiry Department
                    </label>
                    <select
                      value={quickContact.department}
                      onChange={(e) => setQuickContact({ ...quickContact, department: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    >
                      <option value="Sales Enquiry">Vehicle Sales Enquiry</option>
                      <option value="Workshop Servicing">Workshop Servicing / MOT</option>
                      <option value="Part Exchange Valuation">Part Exchange Valuation</option>
                      <option value="Courtesy Car Request">Courtesy Car Availability</option>
                      <option value="General Consultation">General Trading Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message or Vehicle Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please let us know how we can assist..."
                      value={quickContact.message}
                      onChange={(e) => setQuickContact({ ...quickContact, message: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-3 rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Wedgwood Motor Group</span>
                  </button>
                </form>
              )}
            </div>

            {/* Address Details & Map Placeholder */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-950 mb-1">
                      Bicester Trading Location
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-900 block font-semibold">WEDGE WOOD MOTOR GROUP</strong>
                      Unit 7, Wedgwood Rd<br />
                      Bicester<br />
                      OX26 4UL<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Styled Map Container Placeholder */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden relative min-h-[260px] flex flex-col justify-between shadow-sm">
                {/* Visual Map Representation */}
                <div className="p-6 relative z-10 space-y-2">
                  <div className="inline-block bg-[#F7F7F7] border border-slate-200 text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded">
                    Bicester OX26 4UL • Location Map
                  </div>
                  <h4 className="text-lg font-bold text-slate-950">
                    Unit 7, Wedgwood Road
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm">
                    Dedicated on-site customer parking, vehicle collection forecourt, and workshop reception.
                  </p>
                </div>

                {/* Map Graphic / Coordinate Grid */}
                <div className="w-full h-36 bg-slate-100 border-t border-slate-200 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10 flex flex-col items-center gap-1.5 text-center px-4">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg animate-bounce">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      WEDGE WOOD MOTOR GROUP
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Coordinates: 51.895° N, 1.152° W • Bicester, UK
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-slate-200 flex justify-between items-center text-xs">
                  <span className="text-slate-500">Easy access via M40 J9 / A41</span>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="text-red-600 hover:text-red-700 font-bold transition-colors"
                  >
                    View Directions &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
