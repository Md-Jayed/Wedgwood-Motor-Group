import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CarFront, 
  ArrowUpRight 
} from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/cars';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 text-sm">
      {/* Pre-footer compliance banner */}
      <div className="bg-[#F7F7F7] border-b border-slate-200 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-800">
            <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
            <span>
              <strong>Premises Reference:</strong> Unit 7, Wedgwood Rd, Bicester, OX26 4UL, United Kingdom.
            </span>
          </div>
          <div className="text-slate-500 text-center md:text-right">
            Prepared for insurance audit and operational verification.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-red-600 flex items-center justify-center text-white shadow-md">
                <CarFront className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold tracking-wider text-lg text-slate-950 block">
                  WEDGE WOOD
                </span>
                <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase font-semibold">
                  MOTOR GROUP
                </span>
              </div>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Professional car dealership frontend displaying used vehicle sales, workshop servicing, part exchange, and customer courtesy mobility.
            </p>
            <div className="pt-1">
              <span className="inline-block bg-[#F7F7F7] text-slate-700 border border-slate-200 text-[11px] px-2.5 py-1 rounded font-medium">
                Bicester, Oxfordshire, UK
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-widest uppercase mb-4 border-l-2 border-red-600 pl-2">
              DEPARTMENTS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleNav('sales')}
                  className="hover:text-red-600 text-slate-600 flex items-center gap-1.5 transition-colors"
                >
                  <ArrowUpRight className="w-3 h-3 text-red-600" />
                  Vehicle Sales (Example Stock)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('service')}
                  className="hover:text-red-600 text-slate-600 flex items-center gap-1.5 transition-colors"
                >
                  <ArrowUpRight className="w-3 h-3 text-red-600" />
                  Servicing &amp; Maintenance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('partex')}
                  className="hover:text-red-600 text-slate-600 flex items-center gap-1.5 transition-colors"
                >
                  <ArrowUpRight className="w-3 h-3 text-red-600" />
                  Part Exchange Enquiry
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('courtesy')}
                  className="hover:text-red-600 text-slate-600 flex items-center gap-1.5 transition-colors"
                >
                  <ArrowUpRight className="w-3 h-3 text-red-600" />
                  Courtesy Vehicles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')}
                  className="hover:text-red-600 text-slate-600 flex items-center gap-1.5 transition-colors"
                >
                  <ArrowUpRight className="w-3 h-3 text-red-600" />
                  Contact &amp; Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours of Operation (Unverified Placeholder) */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-widest uppercase mb-4 border-l-2 border-red-600 pl-2">
              OPENING HOURS
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-600 font-medium">
                {DEALERSHIP_INFO.hoursPlaceholder}
              </p>
              <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
                Operating schedule is marked as a placeholder pending client confirmation.
              </p>
            </div>
          </div>

          {/* Column 4: Dealership Location */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-widest uppercase mb-4 border-l-2 border-red-600 pl-2">
              LOCATION &amp; CONTACT
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="text-slate-700 leading-snug">
                  <strong className="text-slate-900 block font-semibold">WEDGE WOOD MOTOR GROUP</strong>
                  Unit 7, Wedgwood Rd<br />
                  Bicester<br />
                  OX26 4UL<br />
                  United Kingdom
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <a 
                  href={`tel:${DEALERSHIP_INFO.phoneRaw}`} 
                  className="text-slate-700 hover:text-red-600 font-semibold transition-colors"
                >
                  {DEALERSHIP_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <a 
                  href={`mailto:${DEALERSHIP_INFO.email}`} 
                  className="text-slate-700 hover:text-red-600 font-semibold transition-colors"
                >
                  {DEALERSHIP_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Audit Notice */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-xs text-slate-500 space-y-3">
          <div className="p-3.5 bg-[#F7F7F7] rounded border border-slate-200 text-[11px] leading-relaxed text-slate-600">
            <strong className="text-slate-800">Notice for Insurance Audit &amp; Demonstration:</strong> {DEALERSHIP_INFO.auditNotice}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} WEDGE WOOD MOTOR GROUP. All Rights Reserved.
            </div>
            <div className="flex gap-4">
              <span>Unit 7, Wedgwood Rd, Bicester, OX26 4UL, United Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
