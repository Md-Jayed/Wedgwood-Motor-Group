import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Gauge, 
  Fuel, 
  Cog, 
  Car, 
  Check, 
  FileText, 
  ShieldCheck, 
  Info,
  X,
  Clock,
  Zap,
  Phone,
  Mail
} from 'lucide-react';
import { Vehicle, EXAMPLE_VEHICLES, DEALERSHIP_INFO, getVehicleSlug } from '../data/cars';

interface VehicleDetailPageProps {
  vehicle: Vehicle | null;
  onBackToSales: () => void;
  onEnquire: (vehicle: Vehicle) => void;
  onSelectSimilarVehicle?: (vehicle: Vehicle) => void;
  onNavigateToPartEx?: () => void;
}

export const VehicleDetailPage: React.FC<VehicleDetailPageProps> = ({
  vehicle,
  onBackToSales,
  onEnquire,
  onSelectSimilarVehicle,
  onNavigateToPartEx
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showFinanceModal, setShowFinanceModal] = useState(false);

  useEffect(() => {
    if (vehicle) {
      document.title = `${vehicle.year} ${vehicle.make} ${vehicle.model} | WEDGE WOOD MOTOR GROUP`;
    } else {
      document.title = 'Vehicle Stock | WEDGE WOOD MOTOR GROUP';
    }
  }, [vehicle]);

  // Fallback if vehicle is not found
  if (!vehicle) {
    return (
      <div className="bg-white min-h-[60vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-[#F8F9FA] border border-slate-200 rounded-xl p-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
            <Car className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-950">Vehicle Not Found</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            The requested vehicle listing could not be found or may have been removed from our demonstration stock.
          </p>
          <button
            onClick={onBackToSales}
            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Stock</span>
          </button>
        </div>
      </div>
    );
  }

  const images = vehicle.additionalImages && vehicle.additionalImages.length > 0
    ? vehicle.additionalImages
    : [vehicle.imageUrl];

  // Select 3 other vehicles for the "SIMILAR VEHICLES" section
  const similarVehicles = EXAMPLE_VEHICLES.filter((v) => v.id !== vehicle.id).slice(0, 3);

  // Helper for category label (e.g. PANEL VAN, SALOON, HATCHBACK, SUV, ESTATE)
  const getCategoryLabel = (v: Vehicle) => {
    if (v.bodyType.toLowerCase().includes('van')) return 'PANEL VAN';
    if (v.bodyType.toLowerCase().includes('hatchback')) return 'HATCHBACK';
    if (v.bodyType.toLowerCase().includes('saloon')) return 'SALOON';
    if (v.bodyType.toLowerCase().includes('estate')) return 'ESTATE';
    if (v.bodyType.toLowerCase().includes('suv') || v.bodyType.toLowerCase().includes('crossover')) return 'SUV';
    return v.bodyType.toUpperCase();
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* 1. Sub-Header Navigation Strip matching Imperial Vehicle Solutions */}
      <div className="bg-[#F8F9FA] border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <button
            onClick={onBackToSales}
            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-950 font-bold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO STOCK</span>
          </button>
          <div className="text-[11px] text-slate-500 hidden sm:flex items-center gap-2">
            <span>Home</span>
            <span>/</span>
            <span>Stock</span>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{vehicle.make} {vehicle.model}</span>
          </div>
        </div>
      </div>

      {/* 2. Main Vehicle Details: Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ================= LEFT COLUMN: Gallery, Description & Specification ================= */}
          <div className="lg:col-span-7 space-y-6">
            {/* Large Featured Vehicle Image */}
            <div className="relative aspect-[16/10] bg-slate-100 rounded-sm overflow-hidden border border-slate-200 shadow-xs">
              <img
                src={images[activeImageIndex] || vehicle.imageUrl}
                alt={`${vehicle.make} ${vehicle.model} - Image ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80';
                }}
              />

              {/* Bottom-left Photo Counter Overlay matching screenshot: "EXTERIOR · 1 / 6" */}
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-xs text-white font-mono text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 tracking-wider uppercase rounded-xs">
                EXTERIOR · {activeImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Clickable Horizontal Row of 6 Thumbnails */}
            <div className="grid grid-cols-6 gap-2 sm:gap-2.5">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[16/11] bg-slate-100 rounded-xs overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#6B21A8] ring-1 ring-[#6B21A8]/40 opacity-100'
                      : 'border-slate-200 opacity-75 hover:opacity-100 hover:border-slate-300'
                  }`}
                  aria-label={`Select photo ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumb ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Gallery Caption matching reference screenshot */}
            <p className="text-[11px] text-slate-500 italic">
              Additional gallery images are representative and will be replaced with photos of the actual vehicle.
            </p>

            {/* DESCRIPTION Section */}
            <div className="pt-4">
              <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-3">
                DESCRIPTION
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                <p>{vehicle.description}</p>
              </div>
            </div>

            {/* SPECIFICATION Section: 2-Column Checklist */}
            <div className="pt-4 border-t border-slate-100">
              <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-4">
                SPECIFICATION
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {vehicle.keyFeatures.map((feature, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 border-b border-slate-100 pb-2.5"
                  >
                    <Check className="w-4 h-4 text-[#6B21A8] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Vehicle Information Card ================= */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sm:p-7 space-y-6">
              {/* Category Pill / Tag */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#6B21A8] mb-1">
                  {getCategoryLabel(vehicle)}
                </div>

                {/* Make and Model in large bold heading */}
                <h1 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight leading-tight">
                  {vehicle.make} {vehicle.model}
                </h1>

                {/* Variant / Subtitle */}
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal leading-snug">
                  {vehicle.variant}
                </p>
              </div>

              {/* Price & Finance Row matching screenshot */}
              <div className="flex items-baseline justify-between pt-1 border-t border-slate-100">
                <div className="text-3xl sm:text-4xl font-black text-slate-950 font-sans tracking-tight">
                  £{vehicle.price.toLocaleString()}
                </div>
                {vehicle.monthlyEstimate && (
                  <div className="text-right">
                    <div className="text-xl font-bold text-[#6B21A8]">
                      £{vehicle.monthlyEstimate}/mo
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                      example*
                    </div>
                  </div>
                )}
              </div>

              {/* Two-Column Specification Grid matching screenshot */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="bg-[#F8F9FA] p-3 rounded-xs border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">YEAR</div>
                  <div className="font-bold text-slate-900 mt-0.5">{vehicle.year}</div>
                </div>

                <div className="bg-[#F8F9FA] p-3 rounded-xs border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">MILEAGE</div>
                  <div className="font-bold text-slate-900 mt-0.5">{vehicle.mileage.toLocaleString()} miles</div>
                </div>

                <div className="bg-[#F8F9FA] p-3 rounded-xs border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">FUEL</div>
                  <div className="font-bold text-slate-900 mt-0.5">{vehicle.fuelType}</div>
                </div>

                <div className="bg-[#F8F9FA] p-3 rounded-xs border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">TRANSMISSION</div>
                  <div className="font-bold text-slate-900 mt-0.5">{vehicle.transmission}</div>
                </div>

                <div className="bg-[#F8F9FA] p-3 rounded-xs border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ENGINE</div>
                  <div className="font-bold text-slate-900 mt-0.5 truncate">{vehicle.engineSize}</div>
                </div>

                <div className="bg-[#F8F9FA] p-3 rounded-xs border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">BODY TYPE</div>
                  <div className="font-bold text-slate-900 mt-0.5">{vehicle.bodyType}</div>
                </div>

                <div className="bg-[#F8F9FA] p-3 rounded-xs border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">COLOUR</div>
                  <div className="font-bold text-slate-900 mt-0.5 truncate">{vehicle.color}</div>
                </div>

                <div className="bg-[#F8F9FA] p-3 rounded-xs border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">DOORS &amp; SEATS</div>
                  <div className="font-bold text-slate-900 mt-0.5">{vehicle.doors} Doors / {vehicle.seats} Seats</div>
                </div>
              </div>

              {/* MOT and Service History Rows matching screenshot */}
              <div className="space-y-1.5 text-xs text-slate-700 pt-1">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#6B21A8] shrink-0" />
                  <span>MOT until {vehicle.motExpiry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#6B21A8] shrink-0" />
                  <span>{vehicle.serviceHistory}</span>
                </div>
              </div>

              {/* Action Buttons matching screenshot */}
              <div className="space-y-2.5 pt-2">
                {/* Purple Primary Button */}
                <button
                  onClick={() => onEnquire(vehicle)}
                  className="w-full bg-[#6B21A8] hover:bg-[#581c87] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded transition-colors text-center shadow-sm"
                >
                  ENQUIRE ABOUT THIS VEHICLE
                </button>

                {/* Dark Charcoal / Black Button */}
                <button
                  onClick={() => onEnquire(vehicle)}
                  className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded transition-colors text-center shadow-sm"
                >
                  BOOK A VIEWING
                </button>

                {/* Smaller Outlined Buttons: CHECK FINANCE & PART EXCHANGE */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <button
                    onClick={() => setShowFinanceModal(true)}
                    className="w-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-[11px] uppercase tracking-wider py-2.5 rounded transition-colors text-center"
                  >
                    CHECK FINANCE
                  </button>

                  <button
                    onClick={() => {
                      if (onNavigateToPartEx) {
                        onNavigateToPartEx();
                      } else {
                        onEnquire(vehicle);
                      }
                    }}
                    className="w-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-[11px] uppercase tracking-wider py-2.5 rounded transition-colors text-center"
                  >
                    PART EXCHANGE
                  </button>
                </div>
              </div>

              {/* Finance Footnote matching screenshot */}
              <p className="text-[10px] text-slate-500 leading-normal pt-1">
                *Illustrative example: 10% deposit, 48 months. Finance is subject to status, eligibility and lender approval.
              </p>

              {/* Direct Dealership Contact */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  DIRECT CONTACT
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <a
                    href={`tel:${DEALERSHIP_INFO.phoneRaw}`}
                    className="flex items-center gap-2 p-2 bg-[#F8F9FA] hover:bg-slate-100 rounded border border-slate-200 text-slate-900 font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span className="truncate">{DEALERSHIP_INFO.phone}</span>
                  </a>
                  <a
                    href={`mailto:${DEALERSHIP_INFO.email}?subject=${encodeURIComponent(`Enquiry: ${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.regPlate})`)}`}
                    className="flex items-center gap-2 p-2 bg-[#F8F9FA] hover:bg-slate-100 rounded border border-slate-200 text-slate-900 font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span className="truncate">Email Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SIMILAR VEHICLES Section matching Imperial Vehicle Solutions reference */}
      <section className="bg-[#F8F9FA] border-t border-slate-200 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tight mb-8">
            SIMILAR VEHICLES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {similarVehicles.map((simCar) => (
              <div
                key={simCar.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Vehicle Image with Category Label in top-left */}
                  <a
                    href={`/cars/${getVehicleSlug(simCar)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onSelectSimilarVehicle) onSelectSimilarVehicle(simCar);
                    }}
                    className="relative aspect-[16/10] overflow-hidden bg-slate-100 block group/img"
                  >
                    <img
                      src={simCar.imageUrl}
                      alt={`${simCar.make} ${simCar.model}`}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-black/85 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-xs uppercase tracking-wider">
                      {getCategoryLabel(simCar)}
                    </div>
                  </a>

                  {/* Vehicle Info */}
                  <div className="p-5">
                    <h3 className="text-base sm:text-lg font-black text-slate-950 uppercase tracking-tight group-hover:text-red-600 transition-colors line-clamp-1">
                      <a
                        href={`/cars/${getVehicleSlug(simCar)}`}
                        onClick={(e) => {
                          e.preventDefault();
                          if (onSelectSimilarVehicle) onSelectSimilarVehicle(simCar);
                        }}
                      >
                        {simCar.make} {simCar.model}
                      </a>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 mb-3 font-normal">
                      {simCar.variant}
                    </p>

                    {/* Compact Specs Grid matching screenshot */}
                    <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 py-3 border-y border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{simCar.year}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{simCar.mileage.toLocaleString()} mi</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Fuel className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{simCar.fuelType}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Cog className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{simCar.transmission}</span>
                      </div>
                      <div className="col-span-2 flex items-center gap-1.5 text-slate-500 pt-0.5">
                        <Zap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{simCar.engineSize}</span>
                      </div>
                    </div>

                    {/* Price & Finance */}
                    <div className="pt-3">
                      <div className="text-xl font-black text-slate-950 tracking-tight">
                        £{simCar.price.toLocaleString()}
                      </div>
                      {simCar.monthlyEstimate && (
                        <div className="text-[11px] text-slate-500">
                          or from ~£{simCar.monthlyEstimate}/mo*
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="px-5 pb-5 pt-1 space-y-2">
                  {/* VIEW VEHICLE Button */}
                  <a
                    href={`/cars/${getVehicleSlug(simCar)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onSelectSimilarVehicle) {
                        onSelectSimilarVehicle(simCar);
                      }
                    }}
                    className="w-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-colors text-center block"
                  >
                    VIEW VEHICLE
                  </a>

                  {/* Side-by-side buttons: ENQUIRE NOW & BOOK A VIEWING */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onEnquire(simCar)}
                      className="w-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-[11px] py-2 rounded transition-colors text-center"
                    >
                      ENQUIRE NOW
                    </button>
                    <button
                      onClick={() => onEnquire(simCar)}
                      className="w-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-[11px] py-2 rounded transition-colors text-center"
                    >
                      BOOK A VIEWING
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Illustrative Finance Calculator Modal */}
      {showFinanceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-slate-200 shadow-2xl max-w-md w-full p-6 text-slate-900 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-base font-bold text-slate-950 uppercase tracking-tight">
                Illustrative Finance Check
              </h3>
              <button
                onClick={() => setShowFinanceModal(false)}
                className="p-1 text-slate-400 hover:text-slate-800 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="bg-[#F8F9FA] p-3 rounded border border-slate-200">
                <div className="text-[11px] text-slate-500">Selected Vehicle</div>
                <div className="font-bold text-slate-950 text-sm">{vehicle.year} {vehicle.make} {vehicle.model}</div>
                <div className="text-xs text-slate-600">Cash Price: £{vehicle.price.toLocaleString()}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-[#F8F9FA] rounded border border-slate-100">
                  <span className="text-slate-500 block text-[10px]">Deposit (10%)</span>
                  <span className="font-bold text-slate-900">£{Math.round(vehicle.price * 0.1).toLocaleString()}</span>
                </div>
                <div className="p-2.5 bg-[#F8F9FA] rounded border border-slate-100">
                  <span className="text-slate-500 block text-[10px]">Term Length</span>
                  <span className="font-bold text-slate-900">48 Months</span>
                </div>
                <div className="p-2.5 bg-[#F8F9FA] rounded border border-slate-100">
                  <span className="text-slate-500 block text-[10px]">Representative Payment</span>
                  <span className="font-bold text-[#6B21A8]">£{vehicle.monthlyEstimate}/mo*</span>
                </div>
                <div className="p-2.5 bg-[#F8F9FA] rounded border border-slate-100">
                  <span className="text-slate-500 block text-[10px]">Rate APR</span>
                  <span className="font-bold text-slate-900">9.9% APR Rep.</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-[11px] text-slate-600 leading-relaxed">
                <strong>Insurance Audit Notice:</strong> This finance illustration is provided for demonstration and audit review purposes only. It does not constitute a binding credit agreement. All quotes are subject to status, identity verification, and formal underwriting.
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  setShowFinanceModal(false);
                  onEnquire(vehicle);
                }}
                className="w-full bg-[#6B21A8] hover:bg-[#581c87] text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-colors"
              >
                Enquire About Finance
              </button>
              <button
                onClick={() => setShowFinanceModal(false)}
                className="px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2.5 rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
