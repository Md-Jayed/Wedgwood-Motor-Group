import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Car, 
  Send, 
  ShieldCheck, 
  Navigation, 
  Compass 
} from 'lucide-react';
import { DEALERSHIP_INFO, Vehicle } from '../data/cars';

interface ContactPageProps {
  selectedVehicle?: Vehicle | null;
}

export const ContactPage: React.FC<ContactPageProps> = ({ selectedVehicle }) => {
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    phone: '',
    email: '',
    visitReason: selectedVehicle ? 'Vehicle Viewing / Test Drive' : 'Vehicle Viewing / Test Drive',
    vehicleOfInterest: selectedVehicle ? `${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model} (£${selectedVehicle.price.toLocaleString()})` : '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 – 12:00)',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>BICESTER TRADING PREMISES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
              Contact &amp; Book Appointment
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Arrange an on-site vehicle viewing, schedule workshop maintenance drop-off, or speak directly with our team at Unit 7, Wedgwood Road in Bicester.
            </p>
          </div>

          <div className="bg-[#F7F7F7] border border-slate-200 p-3 rounded-lg text-xs text-slate-700">
            <span className="font-bold text-slate-900 block">Trading Postcode:</span>
            OX26 4UL (Oxfordshire)
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded bg-[#F7F7F7] flex items-center justify-center text-red-600 border border-slate-200">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider">Trading Address</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong className="text-slate-950 block font-semibold">WEDGE WOOD MOTOR GROUP</strong>
              Unit 7, Wedgwood Rd<br />
              Bicester<br />
              OX26 4UL<br />
              United Kingdom
            </p>
          </div>

          {/* Direct Communication */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded bg-[#F7F7F7] flex items-center justify-center text-red-600 border border-slate-200">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider">Phone &amp; Email</h3>
            <div className="text-xs text-slate-700 space-y-2">
              <div>
                <span className="text-slate-500 block text-[11px]">Dealership Line:</span>
                <a 
                  href={`tel:${DEALERSHIP_INFO.phoneRaw}`} 
                  className="text-slate-950 text-sm font-bold hover:text-red-600 transition-colors block"
                >
                  {DEALERSHIP_INFO.phone}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Enquiries Inbox:</span>
                <a 
                  href={`mailto:${DEALERSHIP_INFO.email}`} 
                  className="text-slate-950 font-bold hover:text-red-600 transition-colors block break-all"
                >
                  {DEALERSHIP_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded bg-[#F7F7F7] flex items-center justify-center text-red-600 border border-slate-200">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider">Operating Hours</h3>
            <div className="space-y-1.5 text-xs text-slate-700">
              <p className="font-medium text-slate-900">
                {DEALERSHIP_INFO.hoursPlaceholder}
              </p>
              <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                Operating schedule is marked as a placeholder pending client confirmation.
              </p>
            </div>
          </div>
        </div>

        {/* Appointment Booking Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Appointment Form */}
          <div className="lg:col-span-7 bg-[#F7F7F7] p-6 sm:p-8 rounded-xl border border-slate-200">
            <div className="mb-6">
              <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
                APPOINTMENT BOOKING
              </div>
              <h3 className="text-2xl font-bold text-slate-950">
                Schedule Your Dealership Visit
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Appointments ensure a dedicated staff member and vehicle are ready for your inspection at Unit 7, Wedgwood Rd.
              </p>
            </div>

            {appointmentSubmitted ? (
              <div className="bg-slate-100 border border-slate-300 p-6 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-slate-700 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">
                  Form Validated (Demonstration Mode)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto">
                  Thank you, {appointmentForm.name}. Your appointment enquiry for <strong>{appointmentForm.visitReason}</strong> on <strong>{appointmentForm.preferredDate || 'your preferred date'} ({appointmentForm.preferredTime})</strong> has been validated in browser. Please note: This website is currently in demonstration mode for insurance audit. Your details have not been sent externally because a live backend is not yet connected.
                </p>
                <button
                  onClick={() => setAppointmentSubmitted(false)}
                  className="text-xs underline text-red-600 hover:text-red-700 font-medium pt-2 inline-block"
                >
                  Reset appointment form
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
                      value={appointmentForm.name}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="07123 456789"
                      value={appointmentForm.phone}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={appointmentForm.email}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, email: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Reason for Appointment *
                    </label>
                    <select
                      value={appointmentForm.visitReason}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, visitReason: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    >
                      <option value="Vehicle Viewing / Test Drive">Vehicle Viewing / Test Drive</option>
                      <option value="Workshop Service Drop-off">Workshop Service Drop-off</option>
                      <option value="Part Exchange Appraisal">Part Exchange Vehicle Appraisal</option>
                      <option value="Courtesy Car Collection">Courtesy Car Handover</option>
                      <option value="General Consultation">General Trading Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Vehicle of Interest / Your Reg
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. BMW 330e or Your Car Reg"
                      value={appointmentForm.vehicleOfInterest}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, vehicleOfInterest: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={appointmentForm.preferredDate}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, preferredDate: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={appointmentForm.preferredTime}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, preferredTime: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    >
                      <option value="Morning (09:00 – 12:00)">Morning (09:00 – 12:00)</option>
                      <option value="Afternoon (12:00 – 15:00)">Afternoon (12:00 – 15:00)</option>
                      <option value="Late Afternoon (15:00 – 18:00)">Late Afternoon (15:00 – 18:00)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Additional Comments or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any specific requirements or questions..."
                    value={appointmentForm.notes}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, notes: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-3 rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Location & Map Section */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Location Card */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-wider">
                  <Navigation className="w-4 h-4" />
                  <span>How To Find Us</span>
                </div>
                <h4 className="text-lg font-bold text-slate-950">
                  Unit 7, Wedgwood Rd, Bicester
                </h4>
                <p className="text-xs text-slate-600">
                  Located in the established industrial trade quarter of Bicester, Oxfordshire.
                </p>
              </div>

              {/* Styled Map Graphic */}
              <div className="bg-slate-100 p-6 relative flex flex-col items-center justify-center min-h-[200px] border-b border-slate-200">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-white border border-red-600 text-red-600 flex items-center justify-center shadow-md">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="font-extrabold text-sm text-slate-950">
                    WEDGE WOOD MOTOR GROUP
                  </div>
                  <div className="text-xs text-slate-700 font-mono">
                    OX26 4UL • Bicester
                  </div>
                  <div className="text-[11px] text-slate-500">
                    51.8954° N, 1.1523° W
                  </div>
                </div>
              </div>

              {/* Directions Breakdown */}
              <div className="p-6 space-y-3 text-xs text-slate-700 bg-white">
                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-950 block mb-0.5">By Car (M40 / A41):</strong>
                    Take Junction 9 of the M40 onto the A41 towards Bicester. Follow signs toward Wedgwood Road business quarter. Free on-site customer parking is available.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-950 block mb-0.5">By Rail:</strong>
                    Conveniently situated 1.5 miles from both Bicester North and Bicester Village railway stations with direct links to London Marylebone and Oxford.
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance Audit Compliance Box */}
            <div className="bg-[#F7F7F7] p-5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Trading Premises Verification</span>
              </div>
              <p className="leading-relaxed">
                WEDGE WOOD MOTOR GROUP operates from commercial trading premises at Unit 7, Wedgwood Rd, Bicester, OX26 4UL, United Kingdom. Site visits for insurance verification, audit reviews, or customer handovers can be scheduled in advance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
