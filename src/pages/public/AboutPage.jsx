import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  HeartHandshake,
  Award,
  Globe,
  Users,
  Building,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { AboutSkeleton } from '../../components/skeletons';

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related about skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AboutSkeleton />;
  }

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section data-aos="fade-down" className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
            About Hokena Care
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Connecting Global Patients with India's Premier Medical Centers
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Founded with a heartfelt mission: to eliminate medical barriers, long waiting times, and prohibitive healthcare costs for international patients.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF791B] flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#073B57]">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To provide international patients with transparent, uncompromised access to high-precision quaternary medical care in India. We eliminate the stress of foreign medical travel by managing invitations, visas, travel, clinical admissions, and post-discharge recovery.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0B5678] flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#073B57]">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be the world’s most trusted patient-centric healthcare facilitation network, recognized globally for ethical pricing, zero markups, patient advocacy, and seamless continuity of telemedicine care across borders.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section data-aos="fade-up" className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#073B57]">
              Our Guiding Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Every patient journey is governed by unwavering clinical ethics and empathetic care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <span className="font-bold text-base text-[#FF791B] block">01. Absolute Transparency</span>
              <p className="text-slate-600 leading-relaxed">
                We never add markups. All quotations are institutional and payable directly at hospital cashiers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <span className="font-bold text-base text-[#073B57] block">02. Patient Advocacy</span>
              <p className="text-slate-600 leading-relaxed">
                We advocate exclusively for the patient and family, verifying clinical recommendations and second opinions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <span className="font-bold text-base text-emerald-700 block">03. End-to-End Concierge</span>
              <p className="text-slate-600 leading-relaxed">
                From embassy visa paperwork to airport tarmac pickup and custom halal/special dietary meals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <span className="font-bold text-base text-sky-700 block">04. Lifelong Continuity</span>
              <p className="text-slate-600 leading-relaxed">
                Care does not stop at the airport. Our 6-month telemedicine follow-up ensures complete healing at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs uppercase font-bold tracking-wider text-[#FF791B]">
              International Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#073B57]">
              Regional Patient Assistance Desks Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hokena Care operates dedicated regional liaison hubs in London (UK), Nairobi (Kenya), Muscat (Oman), Lagos (Nigeria), and Tashkent (Uzbekistan) to assist patients with physical consultations before departing for India.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-700">🇬🇧 United Kingdom</span>
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-700">🇰🇪 Kenya</span>
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-700">🇴🇲 Oman</span>
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-700">🇳🇬 Nigeria</span>
              <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-700">🇺🇿 Uzbekistan</span>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <Link
              to="/patient/journey/enquiry"
              className="inline-flex items-center justify-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all hover:scale-105"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
