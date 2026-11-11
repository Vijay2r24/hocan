import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Menu,
  X,
  User,
  ArrowRight,
  ChevronDown,
  Info,
  HelpCircle,
  Mail
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const moreDropdownRef = useRef(null);

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    function handleClickOutside(event) {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setMoreMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary links visible on all desktop viewports
  const primaryNavLinks = [
    { name: 'Treatments', path: '/treatments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Hospitals', path: '/hospitals' },
    { name: 'How It Works', path: '/how-it-works' },
  ];

  // Secondary items in the "More" dropdown
  const secondaryNavLinks = [
    { name: 'Patient Success Stories', path: '/success-stories', icon: ArrowRight, desc: 'Real outcomes from international patients' },
    { name: 'About Hokena Care', path: '/about', icon: Info, desc: 'Our mission, accreditation & international desks' },
    { name: 'FAQs & Medical Visa', path: '/faqs', icon: HelpCircle, desc: 'Visa letters, hospital costs & travel guidelines' },
    { name: 'Contact & 24/7 Helpline', path: '/contact', icon: Mail, desc: 'Reach our multi-lingual medical desk directly' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md w-full">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[70px] gap-2 lg:gap-3 xl:gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 xl:gap-3 group flex-shrink-0">
            <img
              src="/logo.png"
              alt="Hokena Care - Heal in India"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-full shadow-2xs group-hover:scale-105 transition-transform duration-200 flex-shrink-0"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1 leading-none">
                <span className="font-display font-extrabold text-lg sm:text-xl xl:text-2xl tracking-tight text-[#073B57]">
                  HOKENA
                </span>
                <span className="font-display font-extrabold text-lg sm:text-xl xl:text-2xl tracking-tight text-[#FF791B]">
                  CARE
                </span>
              </div>
              <span className="text-[8px] xl:text-[9px] uppercase font-bold tracking-wider text-[#0B5678] mt-0.5 hidden sm:inline">
                International Patient Care
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Fluid & Optimized for Small Laptops & Desktops) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-shrink min-w-0">
            {primaryNavLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-2 py-1.5 xl:px-3 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'text-[#073B57] bg-slate-100 font-bold shadow-2xs'
                      : 'text-[#263746] hover:text-[#073B57] hover:bg-slate-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Stories link: Visible on XL screens, folded into "More" on LG small laptops */}
            <NavLink
              to="/success-stories"
              className={({ isActive }) =>
                `hidden xl:inline-block px-3 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'text-[#073B57] bg-slate-100 font-bold shadow-2xs'
                    : 'text-[#263746] hover:text-[#073B57] hover:bg-slate-50'
                }`
              }
            >
              Stories
            </NavLink>

            {/* "More" / Support Dropdown */}
            <div className="relative" ref={moreDropdownRef}>
              <button
                type="button"
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className={`flex items-center gap-1 px-2 py-1.5 xl:px-2.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors ${
                  moreMenuOpen ? 'text-[#073B57] bg-slate-100' : 'text-[#263746] hover:text-[#073B57] hover:bg-slate-50'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreMenuOpen ? 'rotate-180 text-[#FF791B]' : 'text-slate-400'}`} />
              </button>

              {moreMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {secondaryNavLinks.map((sec) => {
                    const Icon = sec.icon;
                    return (
                      <Link
                        key={sec.path}
                        to={sec.path}
                        onClick={() => setMoreMenuOpen(false)}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#FF791B] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#073B57] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-xs xl:text-sm font-bold text-[#073B57] group-hover:text-[#FF791B] transition-colors">
                            {sec.name}
                          </span>
                          <span className="block text-[11px] text-slate-500 leading-tight mt-0.5">
                            {sec.desc}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Action CTAs: Guaranteed Never-Truncated on Small Laptops */}
          <div className="hidden sm:flex items-center gap-1.5 xl:gap-3 flex-shrink-0">
            {isAuthenticated ? (
              <Link
                to="/patient/dashboard"
                className="flex items-center gap-1.5 px-2 py-1.5 xl:px-3.5 xl:py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#073B57] text-xs xl:text-sm font-bold border border-slate-200/90 transition-colors whitespace-nowrap"
              >
                <div className="w-6 h-6 rounded-lg bg-[#073B57] text-white flex items-center justify-center text-[10px] font-bold">
                  {user?.fullName?.charAt(0) || 'P'}
                </div>
                <span className="hidden md:inline lg:hidden xl:inline">Patient Portal</span>
                <span className="hidden lg:inline xl:hidden">Portal</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1 px-2 py-1.5 xl:px-3 xl:py-2 rounded-xl text-xs xl:text-sm font-bold text-[#073B57] hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                <User className="w-3.5 h-3.5 text-[#0B5678]" />
                <span>Login</span>
              </Link>
            )}

            <Link
              to="/patient/journey/enquiry"
              className="flex items-center gap-1.5 bg-[#FF791B] hover:bg-[#e6680f] text-white px-3 py-1.5 xl:px-4 xl:py-2 rounded-xl text-xs xl:text-sm font-bold shadow-xs transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span className="hidden xl:inline">Get Free Quote</span>
              <span className="xl:hidden">Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-1.5">
            <Link
              to={isAuthenticated ? '/patient/dashboard' : '/login'}
              className="p-2 rounded-xl bg-slate-100 text-[#073B57]"
              title="Portal"
            >
              <User className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col gap-1 mb-4">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 px-3 py-1">
              Main Menu
            </span>
            {primaryNavLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive
                      ? 'text-[#073B57] bg-slate-100 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                <span>{item.name}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </NavLink>
            ))}

            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 px-3 pt-3 pb-1">
              About & Support
            </span>
            {secondaryNavLinks.map((sec) => (
              <NavLink
                key={sec.path}
                to={sec.path}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>{sec.name}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-100">
            {isAuthenticated ? (
              <Link
                to="/patient/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#073B57] text-white text-sm font-bold"
              >
                Go to Patient Dashboard
              </Link>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center py-3 rounded-xl border border-slate-200 text-[#073B57] text-sm font-bold"
                >
                  Patient Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center py-3 rounded-xl bg-slate-100 text-[#073B57] text-sm font-bold"
                >
                  Register
                </Link>
              </div>
            )}
            <Link
              to="/patient/journey/enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF791B] text-white text-sm font-bold shadow-md shadow-orange-500/20"
            >
              Get Free Consultation & Quotation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
