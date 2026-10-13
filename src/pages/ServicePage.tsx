import React, { useState } from 'react';
import { 
  Wrench, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Car, 
  ShieldCheck, 
  HelpCircle,
  FileCheck,
  Send,
  AlertCircle
} from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/cars';

interface ServicePageProps {
  onCourtesyClick: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ onCourtesyClick }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [serviceForm, setServiceForm] = useState({
    name: '',
    phone: '',
    email: '',
    registration: '',
    makeModel: '',
    serviceType: 'Full Service',
    preferredDate: '',
    requestCourtesyCar: false,
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const serviceTiers = [
    {
      title: 'Interim Service',
      price: 'From £119',
      schedule: 'Every 6 Months or 6,000 Miles',
      ideal: 'Ideal for frequent commuting and high-mileage drivers',
      features: [
        'Oil and oil filter replacement',
        'Top-up of essential fluids (coolant, screenwash, brake fluid)',
        '35-point safety inspection',
        'Tyre condition, tread depth & pressure check',
        'Brake pad and disc visual examination',
        'Steering and suspension check'
      ]
    },
    {
      title: 'Full Service',
      price: 'From £199',
      schedule: 'Every 12 Months or 12,000 Miles',
      ideal: 'Our most popular annual maintenance check',
      popular: true,
      features: [
        'Everything included in Interim Service',
        'Engine oil & premium filter replacement',
        'Air filter & pollen cabin filter renewal',
        'Full wheels-off brake system inspection',
        'Battery health test & charging rate check',
        'Underbody corrosion & exhaust system inspection',
        'Service interval light reset & service book stamping'
      ]
    },
    {
      title: 'Major Service',
      price: 'From £299',
      schedule: 'Every 24 Months or 24,000 Miles',
      ideal: 'Comprehensive multi-system mechanical overhaul',
      features: [
        'Everything included in Full Service',
        'Spark plugs replacement (petrol engines)',
        'Fuel filter replacement (diesel engines)',
        'Brake fluid boiling point check & test',
        '70-point comprehensive diagnostic scan',
        'Gearbox and drivetrain fluid level inspection',
        'Full road test and mechanical report'
      ]
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-red-600" />
              <span>WORKSHOP &amp; MAINTENANCE FACILITIES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
              Vehicle Servicing &amp; MOT
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Professional vehicle servicing, MOT testing arrangements, and mechanical diagnostics carried out at our Bicester workshop by trained motor trade technicians.
            </p>
          </div>

          <div className="bg-[#F7F7F7] border border-slate-200 p-3 rounded-lg text-xs text-slate-700">
            <span className="font-bold text-slate-900 block">Trading Location:</span>
            Unit 7, Wedgwood Rd, Bicester, OX26 4UL
          </div>
        </div>

        {/* Overview of Service Packages */}
        <div className="space-y-4">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-tight">
              Service Schedule Packages
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Transparent, fixed servicing options for all vehicle makes and models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {serviceTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 flex flex-col justify-between border relative transition-all shadow-sm ${
                  tier.popular 
                    ? 'border-red-600 ring-1 ring-red-600/20 shadow-md' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white font-bold text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow">
                    MOST RECOMMENDED
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-950">{tier.title}</h3>
                    <div className="text-right">
                      <span className="text-lg font-black text-red-600">{tier.price}</span>
                    </div>
                  </div>
                  <div className="text-xs text-red-600 font-medium mb-1">{tier.schedule}</div>
                  <p className="text-xs text-slate-600 mb-4">{tier.ideal}</p>

                  <ul className="space-y-2 border-t border-slate-100 pt-4 text-xs">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setServiceForm((prev) => ({ ...prev, serviceType: tier.title }));
                      const formElement = document.getElementById('service-enquiry-form');
                      if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                      tier.popular
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200'
                    }`}
                  >
                    Select {tier.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Workshop Services Breakdown */}
        <div className="bg-[#F7F7F7] border border-slate-200 rounded-xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-slate-950 uppercase tracking-wider mb-4 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-red-600" />
            <span>Additional Workshop &amp; MOT Capabilities</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-700">
            <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
              <strong className="text-slate-950 block mb-1">MOT Arrangements:</strong>
              Arranged with certified testing stations alongside pre-MOT inspections and minor rectifications.
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
              <strong className="text-slate-950 block mb-1">Electronic Diagnostics:</strong>
              Engine management warning lights, ABS/airbag fault-code clearing, and sensor diagnostics.
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
              <strong className="text-slate-950 block mb-1">Brakes &amp; Suspension:</strong>
              Replacement brake pads, vented discs, shock absorbers, coil springs, and wishbone bushes.
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
              <strong className="text-slate-950 block mb-1">Courtesy Vehicle:</strong>
              Courtesy car mobility available on request while your vehicle undergoes scheduled maintenance.
            </div>
          </div>
        </div>

        {/* Service Booking Enquiry Form */}
        <div id="service-enquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-[#F7F7F7] p-6 sm:p-8 rounded-xl border border-slate-200">
            <div className="mb-6">
              <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
                ONLINE ENQUIRY
              </div>
              <h3 className="text-2xl font-bold text-slate-950">
                Book a Vehicle Service or MOT
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Enter your vehicle details and preferred date. Our workshop staff will contact you to confirm slot availability.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-slate-100 border border-slate-300 p-6 rounded text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-slate-700 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">
                  Form Validated (Demonstration Mode)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto">
                  Thank you, {serviceForm.name}. Your enquiry for a <strong>{serviceForm.serviceType}</strong> on registration <strong>{serviceForm.registration.toUpperCase()}</strong> has been validated in browser. Please note: This website is currently in demonstration mode for insurance audit. Your enquiry has not been sent externally because a live backend is not yet connected.
                </p>
                {serviceForm.requestCourtesyCar && (
                  <div className="text-xs text-slate-700 bg-white border border-slate-200 p-2.5 rounded max-w-md mx-auto">
                    Note: Courtesy vehicle reservation requested for this enquiry.
                  </div>
                )}
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs underline text-red-600 hover:text-red-700 font-medium inline-block"
                >
                  Reset service booking form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Vehicle Reg & Make/Model */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Vehicle Registration Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AB21 CDE"
                      value={serviceForm.registration}
                      onChange={(e) => setServiceForm({ ...serviceForm, registration: e.target.value.toUpperCase() })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 uppercase placeholder-slate-400 font-mono tracking-wider focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Make &amp; Model *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. BMW 320d or Ford Fiesta"
                      value={serviceForm.makeModel}
                      onChange={(e) => setServiceForm({ ...serviceForm, makeModel: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                {/* Service Type & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Required *
                    </label>
                    <select
                      value={serviceForm.serviceType}
                      onChange={(e) => setServiceForm({ ...serviceForm, serviceType: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    >
                      <option value="Full Service">Full Service (Recommended Annual)</option>
                      <option value="Interim Service">Interim Service (6-Month)</option>
                      <option value="Major Service">Major Service (24-Month Comprehensive)</option>
                      <option value="MOT Only">MOT Test Only</option>
                      <option value="Service + MOT Combined">Service + MOT Combined</option>
                      <option value="Diagnostics / Warning Light">Diagnostics / Warning Light Investigation</option>
                      <option value="Brake Inspection">Brake Inspection &amp; Pads/Discs</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={serviceForm.preferredDate}
                      onChange={(e) => setServiceForm({ ...serviceForm, preferredDate: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                {/* Customer Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={serviceForm.name}
                      onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
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
                      value={serviceForm.phone}
                      onChange={(e) => setServiceForm({ ...serviceForm, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={serviceForm.email}
                      onChange={(e) => setServiceForm({ ...serviceForm, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                {/* Courtesy Car Checkbox */}
                <div className="bg-white p-3 rounded border border-slate-200 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="courtesy-check"
                    checked={serviceForm.requestCourtesyCar}
                    onChange={(e) => setServiceForm({ ...serviceForm, requestCourtesyCar: e.target.checked })}
                    className="mt-1 rounded border-slate-300 text-red-600 focus:ring-red-500"
                  />
                  <label htmlFor="courtesy-check" className="text-xs text-slate-700 cursor-pointer">
                    <strong className="text-slate-950">Request a courtesy vehicle:</strong> Check this if you require replacement transport while your vehicle is in our Bicester workshop. Subject to driver eligibility.
                  </label>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Symptoms or Additional Work
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any squeaks, warning lights, or specific requests..."
                    value={serviceForm.notes}
                    onChange={(e) => setServiceForm({ ...serviceForm, notes: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-3 rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Service Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Workshop Details & Policies */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-slate-950 uppercase tracking-wider">
                Workshop Location &amp; Hours
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vehicle servicing takes place on-site at our Bicester location:
              </p>
              <div className="bg-[#F7F7F7] p-4 rounded border border-slate-200 text-xs text-slate-700 leading-snug">
                <strong className="text-slate-950 block font-semibold mb-1">{DEALERSHIP_INFO.name}</strong>
                {DEALERSHIP_INFO.addressLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
                <div className="pt-2 text-slate-500 space-y-1">
                  <div>
                    Telephone: <a href={`tel:${DEALERSHIP_INFO.phoneRaw}`} className="text-slate-900 font-bold hover:text-red-600 transition-colors">{DEALERSHIP_INFO.phone}</a>
                  </div>
                  <div>
                    Email: <a href={`mailto:${DEALERSHIP_INFO.email}`} className="text-slate-900 font-bold hover:text-red-600 transition-colors">{DEALERSHIP_INFO.email}</a>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F7F7] p-4 rounded border border-slate-200 space-y-1.5 text-xs text-slate-700">
                <div className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-red-600" />
                  <span>Workshop &amp; MOT Operating Hours</span>
                </div>
                <div className="text-xs text-slate-900 font-bold text-sm">
                  8:00am – 6:00pm
                </div>
                <p className="text-[11px] text-slate-600 pt-1">
                  Vehicle drop-off, collection &amp; workshop service available from 8:00am till 6:00pm.
                </p>
              </div>
            </div>

            {/* Courtesy Car Highlight Card */}
            <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-wider">
                <Car className="w-4 h-4" />
                <span>Need To Stay On The Move?</span>
              </div>
              <h4 className="text-base font-bold text-slate-950">
                Courtesy Vehicles Available
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Don't let vehicle servicing disrupt your daily schedule. Book one of our clean, insured courtesy cars when scheduling your service visit.
              </p>
              <button
                onClick={onCourtesyClick}
                className="text-xs font-bold text-red-600 hover:text-red-700 underline pt-1 inline-block"
              >
                Learn more about courtesy vehicle eligibility &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
