import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail,
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  CarFront
} from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/cars';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onEnquireClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeTab, 
  setActiveTab,
  onEnquireClick 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'sales', label: 'SALES' },
    { id: 'service', label: 'SERVICE' },
    { id: 'partex', label: 'PART EX' },
    { id: 'courtesy', label: 'COURTESY' },
    { id: 'contact', label: 'CONTACT/BOOK' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white text-slate-900 shadow-sm border-b border-slate-200">
      {/* Top Utility Bar */}
      <div className="bg-[#F7F7F7] text-xs text-slate-600 border-b border-slate-200 px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Address */}
          <div className="flex items-center gap-1.5 hover:text-slate-950 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
            <span className="font-medium text-slate-700">{DEALERSHIP_INFO.address}</span>
          </div>

          {/* Direct Contact Links */}
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-700 font-medium">
              <Clock className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Mon – Sat: 8am – 6pm</span>
            </span>
            <a 
              href={`tel:${DEALERSHIP_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-700 hover:text-red-600 font-semibold transition-colors"
              title="Call Wedge Wood Motor Group"
            >
              <Phone className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>{DEALERSHIP_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-md shadow-red-900/20 group-hover:from-red-500 group-hover:to-red-600 transition-all">
              <CarFront className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold tracking-wider text-lg sm:text-xl text-slate-950 font-sans flex items-center gap-1.5">
                <span>WEDGE WOOD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block"></span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-slate-500 uppercase">
                MOTOR GROUP • BICESTER
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 text-xs font-bold tracking-wider uppercase transition-colors rounded ${
                activeTab === 'home'
                  ? 'text-slate-950 bg-slate-100 border-b-2 border-red-600'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              HOME
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 text-xs font-bold tracking-wider uppercase transition-colors rounded ${
                  activeTab === item.id
                    ? 'text-slate-950 bg-slate-100 border-b-2 border-red-600'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded transition-colors shadow-sm flex items-center gap-1.5"
            >
              <span>BOOK APPOINTMENT</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-3 rounded text-sm font-bold tracking-wider uppercase ${
              activeTab === 'home' 
                ? 'bg-red-600 text-white' 
                : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
            }`}
          >
            HOME
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded text-sm font-bold tracking-wider uppercase ${
                activeTab === item.id 
                  ? 'bg-red-600 text-white' 
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 space-y-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase py-3 rounded text-center transition-colors"
            >
              BOOK APPOINTMENT / CONTACT
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1 text-center text-xs">
              <a
                href={`tel:${DEALERSHIP_INFO.phoneRaw}`}
                className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>07888 090788</span>
              </a>
              <a
                href={`mailto:${DEALERSHIP_INFO.email}`}
                className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded flex items-center justify-center gap-1.5 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
