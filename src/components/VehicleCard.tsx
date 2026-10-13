import React from 'react';
import { 
  Fuel, 
  Gauge, 
  Calendar, 
  Cog, 
  ArrowRight,
  Info
} from 'lucide-react';
import { Vehicle, getVehicleSlug } from '../data/cars';

interface VehicleCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
  onEnquire?: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ 
  vehicle, 
  onViewDetails,
  onEnquire 
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between h-full hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md group">
      <div>
        {/* Image & Badges Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={vehicle.imageUrl}
            alt={`${vehicle.make} ${vehicle.model} (Example)`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              // Graceful fallback to avoid broken image display
              e.currentTarget.src = 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80';
            }}
          />

          {/* Demonstration Notice Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
            <span className="bg-red-600 text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded shadow-sm">
              EXAMPLE LISTING
            </span>
            <span className="bg-white/95 backdrop-blur-sm text-slate-700 text-[10px] font-medium px-2 py-0.5 rounded border border-slate-200 shadow-sm flex items-center gap-1">
              <Info className="w-3 h-3 text-slate-500" />
              Fictional Example Data
            </span>
          </div>

          {/* Year / Reg Plate Tag */}
          <div className="absolute top-3 right-3">
            <span className="bg-white/95 text-slate-900 font-mono font-bold text-xs px-2.5 py-1 rounded border border-slate-200 shadow-sm">
              {vehicle.year} ({vehicle.regPlate})
            </span>
          </div>
        </div>

        {/* Vehicle Info Content */}
        <div className="p-5">
          {/* Make and Model */}
          <div className="mb-3">
            <div className="text-xs font-bold text-red-600 uppercase tracking-widest">
              {vehicle.make}
            </div>
            <a
              href={`/cars/${getVehicleSlug(vehicle)}`}
              onClick={(e) => {
                e.preventDefault();
                onViewDetails(vehicle);
              }}
              className="text-lg font-bold text-slate-900 hover:text-red-600 transition-colors line-clamp-1 block"
            >
              {vehicle.model}
            </a>
            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
              {vehicle.variant}
            </p>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-slate-100 text-xs">
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Year: <strong className="text-slate-900">{vehicle.year}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Gauge className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{vehicle.mileage.toLocaleString()} miles</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Fuel className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{vehicle.fuelType}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Cog className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{vehicle.transmission}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Call to Action Footer */}
      <div className="px-5 pb-5 pt-1">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Example Price</div>
            <div className="text-2xl font-black text-slate-950 tracking-tight font-sans">
              £{vehicle.price.toLocaleString()}
            </div>
          </div>
          {vehicle.monthlyEstimate && (
            <div className="text-right">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Illustrative PCP</div>
              <div className="text-xs font-bold text-slate-700">
                £{vehicle.monthlyEstimate}/mo*
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={`/cars/${getVehicleSlug(vehicle)}`}
            onClick={(e) => {
              e.preventDefault();
              onViewDetails(vehicle);
            }}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs py-2.5 px-3 rounded text-center transition-colors border border-slate-200 flex items-center justify-center gap-1.5"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-red-600" />
          </a>
          <button
            onClick={() => onEnquire ? onEnquire(vehicle) : onViewDetails(vehicle)}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-2.5 px-3 rounded text-center transition-colors flex items-center justify-center shadow-sm"
          >
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
};
