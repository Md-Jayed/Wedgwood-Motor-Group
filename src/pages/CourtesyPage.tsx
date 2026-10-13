import React, { useState } from 'react';
import { 
  KeyRound, 
  Car, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileCheck, 
  Send, 
  HelpCircle, 
  ArrowRight 
} from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/cars';

interface CourtesyPageProps {
  onBookService: () => void;
}

export const CourtesyPage: React.FC<CourtesyPageProps> = ({ onBookService }) => {
  const [courtesySubmitted, setCourtesySubmitted] = useState(false);
  const [courtesyForm, setCourtesyForm] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleReg: '',
    serviceDate: '',
    estimatedDays: '1 Day',
    hasFullUkLicence: 'Yes',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCourtesySubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-red-600" />
              <span>CUSTOMER REPLACEMENT MOBILITY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
              Courtesy Vehicles
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Keep your day running seamlessly while your vehicle is in our workshop. Learn how our complimentary courtesy car service works and enquire about fleet availability.
            </p>
          </div>

          <div className="bg-[#F7F7F7] border border-slate-200 p-3 rounded-lg text-xs text-slate-700">
            <span className="font-bold text-slate-900 block">Depot Location:</span>
            Unit 7, Wedgwood Rd, Bicester, OX26 4UL
          </div>
        </div>

        {/* Value Proposition Hero Banner */}
        <div className="bg-[#F7F7F7] border border-slate-200 rounded-xl p-6 sm:p-10 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="bg-red-600 text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded">
              STAY MOBILE WITH WEDGWOOD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              No Downtime While Your Car Is In Our Workshop
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We recognise that being without your vehicle can cause major inconvenience. When booking mechanical servicing, scheduled maintenance, or diagnostic checks with Wedgwood Motor Group, you can reserve one of our well-maintained courtesy cars for the duration of the work.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Modern, reliable hatchbacks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Manual &amp; Automatic choices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Subject to advance reservation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Courtesy Car Terms & Driver Eligibility */}
        <div className="space-y-4">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-950 uppercase tracking-tight">
              Driver Eligibility &amp; Guidelines
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Clear, straightforward terms to ensure compliance with UK motor trade insurance regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded bg-[#F7F7F7] flex items-center justify-center text-red-600 border border-slate-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-950 uppercase">Valid UK Licence</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Drivers must hold a full, valid UK driving licence held for at least 12 months with no serious endorsements.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded bg-[#F7F7F7] flex items-center justify-center text-red-600 border border-slate-200">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-950 uppercase">Driver Age Requirement</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Courtesy vehicle drivers must be between 21 and 75 years of age as per standard motor fleet underwriting terms.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded bg-[#F7F7F7] flex items-center justify-center text-red-600 border border-slate-200">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-950 uppercase">Insurance Coverage</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cover can be extended from your own comprehensive policy, or arranged via our temporary fleet cover upon collection.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded bg-[#F7F7F7] flex items-center justify-center text-red-600 border border-slate-200">
                <Car className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-950 uppercase">Fair Fuel Policy</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vehicles are handed over with a noted fuel level and simply returned at the same level upon collection of your vehicle.
              </p>
            </div>
          </div>
        </div>

        {/* Availability Enquiry Form & Practical Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-[#F7F7F7] p-6 sm:p-8 rounded-xl border border-slate-200">
            <div className="mb-6">
              <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
                RESERVATION ENQUIRY
              </div>
              <h3 className="text-2xl font-bold text-slate-950">
                Check Courtesy Vehicle Availability
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Due to high demand, courtesy cars must be requested in advance alongside your workshop service booking.
              </p>
            </div>

            {courtesySubmitted ? (
              <div className="bg-slate-100 border border-slate-300 p-6 rounded text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-slate-700 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">
                  Form Validated (Demonstration Mode)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto">
                  Thank you, {courtesyForm.name}. Your courtesy vehicle enquiry for <strong>{courtesyForm.serviceDate || 'your preferred date'}</strong> has been validated in browser. Please note: This website is currently in demonstration mode for insurance audit. Your request has not been sent externally because a live backend is not yet connected.
                </p>
                <button
                  onClick={() => setCourtesySubmitted(false)}
                  className="text-xs underline text-red-600 hover:text-red-700 font-medium inline-block"
                >
                  Reset courtesy car enquiry form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={courtesyForm.name}
                      onChange={(e) => setCourtesyForm({ ...courtesyForm, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
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
                      value={courtesyForm.phone}
                      onChange={(e) => setCourtesyForm({ ...courtesyForm, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={courtesyForm.email}
                      onChange={(e) => setCourtesyForm({ ...courtesyForm, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Vehicle Registration *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AB21 CDE"
                      value={courtesyForm.vehicleReg}
                      onChange={(e) => setCourtesyForm({ ...courtesyForm, vehicleReg: e.target.value.toUpperCase() })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 uppercase font-mono tracking-wider focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Booking Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={courtesyForm.serviceDate}
                      onChange={(e) => setCourtesyForm({ ...courtesyForm, serviceDate: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Expected Duration Needed
                    </label>
                    <select
                      value={courtesyForm.estimatedDays}
                      onChange={(e) => setCourtesyForm({ ...courtesyForm, estimatedDays: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    >
                      <option value="Same Day (Morning to Afternoon)">Same Day (e.g. 08:30 drop-off, 17:30 collect)</option>
                      <option value="Overnight / 2 Days">Overnight / 2 Days</option>
                      <option value="3+ Days (Major mechanical / parts wait)">3+ Days (Major repairs)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Do you hold a Full UK Driving Licence? *
                  </label>
                  <select
                    value={courtesyForm.hasFullUkLicence}
                    onChange={(e) => setCourtesyForm({ ...courtesyForm, hasFullUkLicence: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                  >
                    <option value="Yes">Yes - Valid UK Photocard Licence held over 12 months</option>
                    <option value="EU / International">EU or International Licence</option>
                    <option value="No">No - Other driver will collect</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Requirements (Automatic gearbox preference, child seat, etc.)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Note any gearbox preference or accessibility requirements..."
                    value={courtesyForm.notes}
                    onChange={(e) => setCourtesyForm({ ...courtesyForm, notes: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-3 rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Courtesy Vehicle Availability</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick FAQ / Guidance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-slate-950 uppercase tracking-wider flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-red-600" />
                <span>Frequently Asked Questions</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="border-b border-slate-100 pb-2.5">
                  <strong className="text-slate-950 block mb-0.5">Is there a rental fee for the courtesy car?</strong>
                  Our courtesy vehicles are provided free of charge to customers undergoing scheduled servicing or major mechanical work, subject to fuel replacement and insurance compliance.
                </div>
                <div className="border-b border-slate-100 pb-2.5">
                  <strong className="text-slate-950 block mb-0.5">What happens if a courtesy car is unavailable?</strong>
                  We also offer a complimentary local drop-off and collection service within the Bicester area, or waiting facilities in our reception lounge.
                </div>
                <div>
                  <strong className="text-slate-950 block mb-0.5">What documents must I show on collection?</strong>
                  Your UK driving licence photocard and proof of your current insurance certificate (or temporary cover arrangement).
                </div>
              </div>
            </div>

            {/* Need to book workshop service first? */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-base font-bold text-slate-950 uppercase tracking-wider">
                Book Workshop Service
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Haven't scheduled your vehicle maintenance yet? Book your Interim, Full, or Major service first and bundle your courtesy car reservation.
              </p>
              <button
                onClick={onBookService}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
              >
                <span>Go To Service &amp; MOT Booking</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
