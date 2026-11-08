import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#073B57] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-white/10 text-sm">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-[#FF791B]/20 flex items-center justify-center text-[#FF791B] flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">JCI & NABH Accredited</h4>
              <p className="text-xs text-slate-300">Top 50+ super-speciality hospitals</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Zero Markups</h4>
              <p className="text-xs text-slate-300">100% Free concierge for patients</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">24h Visa Assistance</h4>
              <p className="text-xs text-slate-300">Fast medical invitation letters</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Bedside Concierge</h4>
              <p className="text-xs text-slate-300">Dedicated personal care manager</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#073B57]">
                <HeartHandshake className="w-6 h-6 text-[#FF791B]" />
              </div>
              <div className="flex items-center gap-1 font-display font-bold text-2xl tracking-tight">
                <span>HOKENA</span>
                <span className="text-[#FF791B]">CARE</span>
              </div>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Hokena Care is India's leading international patient assistance and medical travel platform. We connect patients from across Africa, the Middle East, CIS, Europe and North America with premier quaternary hospitals in India.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
                International Coordination Hubs
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                <span className="bg-white/10 px-2.5 py-1 rounded-md">New Delhi</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-md">London</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-md">Nairobi</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-md">Muscat</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-md">Tashkent</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-4">Patient Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/patient/journey/enquiry" className="hover:text-[#FF791B] transition-colors flex items-center gap-1">
                  <span>Submit Medical Enquiry</span>
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-[#FF791B] transition-colors">
                  Treatments & Costs
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-[#FF791B] transition-colors">
                  Find Specialist Doctors
                </Link>
              </li>
              <li>
                <Link to="/hospitals" className="hover:text-[#FF791B] transition-colors">
                  Partner JCI Hospitals
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-[#FF791B] transition-colors">
                  8-Stage Patient Journey
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-[#FF791B] transition-colors">
                  Patient Success Stories
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-[#FF791B] transition-colors">
                  Medical Visa & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-4">Major Specialities</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/treatments/coronary-bypass" className="hover:text-[#FF791B] transition-colors">
                  Cardiology & Heart Surgery
                </Link>
              </li>
              <li>
                <Link to="/treatments/knee-replacement" className="hover:text-[#FF791B] transition-colors">
                  Robotic Knee Replacement
                </Link>
              </li>
              <li>
                <Link to="/treatments/bone-marrow-transplant" className="hover:text-[#FF791B] transition-colors">
                  Bone Marrow Transplant (BMT)
                </Link>
              </li>
              <li>
                <Link to="/treatments/liver-transplant" className="hover:text-[#FF791B] transition-colors">
                  Living Donor Liver Transplant
                </Link>
              </li>
              <li>
                <Link to="/treatments/spine-surgery" className="hover:text-[#FF791B] transition-colors">
                  Minimally Invasive Spine Surgery
                </Link>
              </li>
              <li>
                <Link to="/treatments/ivf-fertility" className="hover:text-[#FF791B] transition-colors">
                  Advanced IVF & Embryology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-4">24/7 International Care</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF791B] flex-shrink-0 mt-1" />
                <span>Level 4, Two Horizon Center, Golf Course Road, Gurugram, Delhi NCR 122002, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>+91 98710 44210 (Direct / WA)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>care@hokenacare.com</span>
              </div>
              <div className="pt-2">
                <Link
                  to="/patient/journey/enquiry"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md"
                >
                  <span>Request Free Treatment Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Hokena Care Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/faqs" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/faqs" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
