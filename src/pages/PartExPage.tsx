import React, { useState } from 'react';
import { 
  Car, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Send, 
  HelpCircle, 
  ArrowRight,
  KeyRound,
  Banknote
} from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/cars';

interface PartExPageProps {
  onBrowseStock: () => void;
}

export const PartExPage: React.FC<PartExPageProps> = ({ onBrowseStock }) => {
  const [valuationSubmitted, setValuationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    registration: '',
    mileage: '',
    makeModel: '',
    year: '',
    transmission: 'Manual',
    fuel: 'Petrol',
    condition: 'Good',
    serviceHistory: 'Full Service History',
    hasOutstandingFinance: 'No',
    interestType: 'Part Exchange Against Stock Car',
    targetCar: '',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    postcode: '',
    additionalNotes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValuationSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <Car className="w-4 h-4 text-red-600" />
              <span>VEHICLE TRADE-IN &amp; VALUATION</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight uppercase">
              Part Exchange Valuations
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Receive a fair, realistic market valuation for your current vehicle. Apply the value directly as a deposit toward our stock or arrange a seamless handover at our Bicester dealership.
            </p>
          </div>

          <div className="bg-[#F7F7F7] border border-slate-200 p-3 rounded-lg text-xs text-slate-700">
            <span className="font-bold text-slate-900 block">Appraisal Location:</span>
            Unit 7, Wedgwood Rd, Bicester, OX26 4UL
          </div>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F7F7F7] p-6 rounded-xl border border-slate-200 relative">
            <div className="text-3xl font-black text-red-600/30 mb-2">01</div>
            <h3 className="text-base font-bold text-slate-950 mb-2">Submit Vehicle Details</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enter your vehicle registration, verified mileage, and honest condition overview in our simple online form.
            </p>
          </div>

          <div className="bg-[#F7F7F7] p-6 rounded-xl border border-slate-200 relative">
            <div className="text-3xl font-black text-red-600/30 mb-2">02</div>
            <h3 className="text-base font-bold text-slate-950 mb-2">Accurate Market Appraisal</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our appraisal team reviews current live UK trade values, vehicle provenance, and specification to deliver a genuine offer.
            </p>
          </div>

          <div className="bg-[#F7F7F7] p-6 rounded-xl border border-slate-200 relative">
            <div className="text-3xl font-black text-red-600/30 mb-2">03</div>
            <h3 className="text-base font-bold text-slate-950 mb-2">Seamless Handover</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Drive your old car to Wedgwood Motor Group in Bicester and drive away in your newly purchased vehicle with all paperwork settled.
            </p>
          </div>
        </div>

        {/* Main Part Ex Form & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-8 bg-[#F7F7F7] p-6 sm:p-8 rounded-xl border border-slate-200">
            <div className="mb-6">
              <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
                ONLINE APPRAISAL FORM
              </div>
              <h3 className="text-2xl font-bold text-slate-950">
                Part Exchange Enquiry Form
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Complete all known details below for an indicative vehicle valuation.
              </p>
            </div>

            {valuationSubmitted ? (
              <div className="bg-slate-100 border border-slate-300 p-6 rounded text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-slate-700 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">
                  Form Validated (Demonstration Mode)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto">
                  Thank you, {formData.customerName}. Your part-exchange appraisal request for registration <strong>{formData.registration.toUpperCase()}</strong> has been validated in browser. Please note: This website is currently in demonstration mode for insurance audit. Your details have not been sent externally because a live backend is not yet connected.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setValuationSubmitted(false)}
                    className="text-xs underline text-red-600 hover:text-red-700 font-medium inline-block"
                  >
                    Reset valuation form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Part 1: Your Current Vehicle */}
                <div className="space-y-4">
                  <div className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-200 flex items-center gap-2">
                    <Car className="w-3.5 h-3.5 text-red-600" />
                    <span>1. Your Current Vehicle Details</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Registration *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. KV19 XYY"
                        value={formData.registration}
                        onChange={(e) => setFormData({ ...formData, registration: e.target.value.toUpperCase() })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 uppercase font-mono tracking-wider focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Approx. Mileage *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 45,000"
                        value={formData.mileage}
                        onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Make &amp; Model
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ford Focus 1.0"
                        value={formData.makeModel}
                        onChange={(e) => setFormData({ ...formData, makeModel: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Overall Condition
                      </label>
                      <select
                        value={formData.condition}
                        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      >
                        <option value="Excellent">Excellent (Immaculate paint &amp; interior)</option>
                        <option value="Good">Good (Minor age-related stone chips)</option>
                        <option value="Fair">Fair (Noticeable scratches or small dents)</option>
                        <option value="Poor">Requires Body/Mechanical Work</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Service History
                      </label>
                      <select
                        value={formData.serviceHistory}
                        onChange={(e) => setFormData({ ...formData, serviceHistory: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      >
                        <option value="Full Main Dealer">Full Main Dealer History</option>
                        <option value="Full Service History">Full Service History (Mixed)</option>
                        <option value="Partial History">Partial Service History</option>
                        <option value="No History">No History / First Service Due</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Outstanding Finance?
                      </label>
                      <select
                        value={formData.hasOutstandingFinance}
                        onChange={(e) => setFormData({ ...formData, hasOutstandingFinance: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      >
                        <option value="No">No - Vehicle Fully Paid Off</option>
                        <option value="Yes - HP">Yes - Hire Purchase (HP)</option>
                        <option value="Yes - PCP">Yes - PCP Finance</option>
                        <option value="Personal Loan">Personal Bank Loan</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Part 2: Dealership Purchase Interest */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-200 flex items-center gap-2">
                    <Banknote className="w-3.5 h-3.5 text-red-600" />
                    <span>2. Intended Transaction</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Transaction Goal
                      </label>
                      <select
                        value={formData.interestType}
                        onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      >
                        <option value="Part Exchange Against Stock Car">Part Exchange against a Wedgwood car</option>
                        <option value="Outright Sale to Dealership">Outright sale to dealership (Cash buy)</option>
                        <option value="Just curious about valuation">Valuation exploration</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Stock Vehicle of Interest (if any)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. BMW 330e M Sport or Audi A4"
                        value={formData.targetCar}
                        onChange={(e) => setFormData({ ...formData, targetCar: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Part 3: Contact Information */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-950 uppercase tracking-wider pb-1 border-b border-slate-200 flex items-center gap-2">
                    <KeyRound className="w-3.5 h-3.5 text-red-600" />
                    <span>3. Your Contact Details</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="07123 456789"
                        value={formData.customerPhone}
                        onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.customerEmail}
                        onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Postcode *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. OX26"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value.toUpperCase() })}
                        className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 uppercase focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Additional Vehicle Information (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Mention any factory options, recent tyres, or work completed..."
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-3 rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Part-Exchange Appraisal</span>
                </button>
              </form>
            )}
          </div>

          {/* Handover Requirements & Documents Checklist */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-slate-950 uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-red-600" />
                <span>Documents Required</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                When bringing your vehicle for appraisal or part exchange handover at Unit 7, Wedgwood Rd, please have ready:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>V5C Logbook:</strong> Registered in your name and current address.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Service Records:</strong> Stamped service book and maintenance invoices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Current MOT:</strong> Valid MOT test certificate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>All Keys:</strong> Master and spare vehicle keys, plus locking wheel nut key.</span>
                </li>
              </ul>
            </div>

            {/* Quick Link to Cars */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-base font-bold text-slate-950 uppercase tracking-wider">
                Haven't Chosen Your Next Car?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Take a look at our current stock of prepared example vehicles ready for viewing and test drives in Bicester.
              </p>
              <button
                onClick={onBrowseStock}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider py-2.5 rounded transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
              >
                <span>Browse Available Stock</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
