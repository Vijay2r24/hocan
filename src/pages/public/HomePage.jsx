import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  HeartHandshake,
  CheckCircle2,
  Star,
  Users,
  Building,
  PhoneCall,
  Sparkles,
  Plane,
  FileText,
  DollarSign,
  Globe,
  ChevronRight,
  HelpCircle,
  Video,
  FileBadge,
  Stethoscope,
  HeartPulse,
  Home,
  Play,
  X
} from 'lucide-react';
import {
  JOURNEY_STAGES,
  TREATMENTS,
  HOSPITALS,
  DOCTORS,
  SUCCESS_STORIES,
  FAQS
} from '../../data/mockData';
import DoctorCard from '../../components/patient/DoctorCard';
import HospitalCard from '../../components/patient/HospitalCard';
import JourneyProgressTracker from '../../components/journey/JourneyProgressTracker';
import TrustedProcessCards from '../../components/common/TrustedProcessCards';
import { TreatmentCardSkeleton, JourneyTrackerSkeleton, DoctorCardSkeleton } from '../../components/skeletons';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Automatically load page-related section skeletons on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#073B57] via-[#0B5678] to-[#073B57] text-white pt-8 pb-16 md:pt-12 md:pb-24 xl:pt-14 xl:pb-28">
        {/* Subtle animated glowing backgrounds */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-float" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 xl:space-y-6 text-center lg:text-left">
              <div data-aos="fade-down" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-slate-100 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#FF791B]" />
                <span>Premier Medical Care in India • JCI Accredited Hospitals</span>
              </div>

              <h1 data-aos="fade-up" data-aos-delay="100" className="font-display font-extrabold text-3xl sm:text-5xl lg:text-4xl xl:text-6xl text-white tracking-tight leading-[1.15]">
                Your Journey to <span className="text-[#FF791B]">Healing</span> Starts Here
              </h1>

              <p data-aos="fade-up" data-aos-delay="200" className="text-sm sm:text-base lg:text-base xl:text-lg text-slate-100 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                World-class surgeries in India at <strong>70% to 85% lower costs</strong>. We take care of your doctor consultations, medical visa, airport pickup, and bedside care.
              </p>

              {/* CTAs */}
              <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 xl:gap-4 pt-1">
                <Link
                  to="/patient/journey/enquiry"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF791B] hover:bg-[#e6680f] text-white px-6 py-3.5 xl:px-8 xl:py-4 rounded-xl xl:rounded-2xl font-bold text-sm xl:text-base shadow-none transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5" />
                </Link>

                <Link
                  to="/treatments"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3.5 xl:px-6 xl:py-4 rounded-xl xl:rounded-2xl font-semibold text-sm xl:text-base backdrop-blur-xs transition-colors whitespace-nowrap"
                >
                  <span>Explore Treatments</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3.5 xl:px-6 xl:py-4 rounded-xl xl:rounded-2xl font-semibold text-sm xl:text-base backdrop-blur-xs transition-colors whitespace-nowrap cursor-pointer group"
                >
                  <span className="w-6 h-6 rounded-full bg-[#FF791B] text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </span>
                  <span>Watch 30s Video</span>
                </button>
              </div>

              {/* 3 Bold Visual Trust Pillars */}
              <div data-aos="fade-up" data-aos-delay="400" className="pt-5 xl:pt-7 border-t border-white/15 grid grid-cols-3 gap-3 sm:gap-4 xl:gap-6 text-left">
                <div className="bg-white/5 p-2.5 sm:p-3 xl:p-4 rounded-xl xl:rounded-2xl border border-white/10">
                  <div className="text-xl sm:text-2xl xl:text-3xl font-display font-extrabold text-white">50k+</div>
                  <div className="text-[11px] sm:text-xs xl:text-sm text-slate-300 font-medium mt-0.5">Patients Treated</div>
                </div>
                <div className="bg-white/5 p-2.5 sm:p-3 xl:p-4 rounded-xl xl:rounded-2xl border border-white/10">
                  <div className="text-xl sm:text-2xl xl:text-3xl font-display font-extrabold text-[#FF791B]">80%</div>
                  <div className="text-[11px] sm:text-xs xl:text-sm text-slate-300 font-medium mt-0.5">Cost Savings</div>
                </div>
                <div className="bg-white/5 p-2.5 sm:p-3 xl:p-4 rounded-xl xl:rounded-2xl border border-white/10">
                  <div className="text-xl sm:text-2xl xl:text-3xl font-display font-extrabold text-emerald-400">24h</div>
                  <div className="text-[11px] sm:text-xs xl:text-sm text-slate-300 font-medium mt-0.5">Visa Letters</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Premium International Healthcare Banner Image */}
            <div data-aos="fade-left" data-aos-duration="850" className="lg:col-span-5 relative mt-6 lg:mt-0">

              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#073B57]/60 backdrop-blur-md group">
                {/* Hero Banner Image */}
                <div className="relative h-[420px] sm:h-[480px] lg:h-[500px] xl:h-[530px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80"
                    alt="International Patient Care in India - Hokena Care"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay for contrast and depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#073B57] via-[#073B57]/30 to-black/20" />

                  {/* Top Floating Badge: JCI Accreditation */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073B57]/85 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-lg">
                      <ShieldCheck className="w-4 h-4 text-[#FF791B]" />
                      <span>JCI & NABH Accredited Network</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-500 text-white shadow-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      24/7 Desk
                    </span>
                  </div>

                  {/* Center Play Button Overlay for 30s Video */}
                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    className="absolute inset-0 m-auto w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/95 hover:bg-white text-[#FF791B] flex items-center justify-center shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 z-20 group cursor-pointer"
                    aria-label="Play 30s Video Overview"
                  >
                    <span className="absolute inset-0 rounded-full bg-[#FF791B]/20 animate-ping" />
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 relative z-10" />
                  </button>

                  {/* Floating Card: Assigned Patient Coordinator */}
                  <div className="absolute bottom-20 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/40 text-slate-800 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=200&q=80"
                      alt="Care Coordinator"
                      className="w-12 h-12 rounded-xl object-cover border-2 border-emerald-500 shadow-xs flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs sm:text-sm text-[#073B57] truncate">Ms. Priya Sharma</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-[11px] text-slate-500 truncate">Senior Care Coordinator</p>
                      <span className="text-[10px] font-bold text-[#FF791B] block mt-0.5">English • Arabic • French Support</span>
                    </div>
                  </div>

                  {/* Bottom Strip: Key Trust Highlights */}
                  <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 bg-[#073B57]/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs text-white">
                    <div className="flex items-center gap-1.5 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="font-semibold">Zero Agency Markup</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-200">
                      <Award className="w-4 h-4 text-[#FF791B] flex-shrink-0" />
                      <span className="font-semibold">Top 1% Indian Surgeons</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eight-Stage Patient Journey Tracker */}
      <section data-aos="fade-up" data-aos-duration="800" className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-16 relative z-20">
        <JourneyProgressTracker />
      </section>

      {/* Hospital Partner Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div data-aos="fade-up" className="text-center mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
            Accredited Hospital Network
          </span>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#073B57] mt-1">
            Treated at India's Renowned JCI Centers
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
          <div data-aos="fade-up" data-aos-delay="50" className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center justify-center text-center card-hover h-full">
            <span className="font-display font-extrabold text-xl text-[#073B57]">FORTIS</span>
            <span className="text-xs font-semibold text-slate-500 mt-1">Memorial Research Institute</span>
            <span className="mt-2 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              JCI Accredited
            </span>
          </div>

          <div data-aos="fade-up" data-aos-delay="150" className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center justify-center text-center card-hover h-full">
            <span className="font-display font-extrabold text-xl text-[#073B57]">MEDANTA</span>
            <span className="text-xs font-semibold text-slate-500 mt-1">The Medicity Gurugram</span>
            <span className="mt-2 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              1,250 Beds
            </span>
          </div>

          <div data-aos="fade-up" data-aos-delay="250" className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center justify-center text-center card-hover h-full">
            <span className="font-display font-extrabold text-xl text-[#073B57]">APOLLO</span>
            <span className="text-xs font-semibold text-slate-500 mt-1">Hospitals Chennai & Delhi</span>
            <span className="mt-2 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              Proton Cancer Beam
            </span>
          </div>

          <div data-aos="fade-up" data-aos-delay="350" className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center justify-center text-center card-hover h-full">
            <span className="font-display font-extrabold text-xl text-[#073B57]">MAX</span>
            <span className="text-xs font-semibold text-slate-500 mt-1">Super Speciality Hospital</span>
            <span className="mt-2 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              Robotic Surgery Wing
            </span>
          </div>
        </div>
      </section>

      {/* Medical Specialities Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
            Popular Surgeries
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#073B57] mt-1">
            Major Medical Treatments & Savings
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Click on any treatment to view transparent procedural costs and compare with UK/US prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <TreatmentCardSkeleton key={`home-treatment-skeleton-${i}`} />
            ))
          ) : (
            TREATMENTS.map((treatment, idx) => (
              <div
                key={treatment.id}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 120}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col card-hover group h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {treatment.successRate} Success
                  </span>
                  <span className="absolute bottom-3 left-3 bg-[#073B57]/95 text-white backdrop-blur-xs text-xs font-bold px-3 py-1 rounded-lg">
                    {treatment.speciality}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#073B57] group-hover:text-[#FF791B] transition-colors mb-2">
                      {treatment.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {treatment.shortDesc}
                    </p>
                  </div>

                  {/* Price highlight card */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-bold uppercase">Cost in India</span>
                      <span className="text-lg font-bold text-[#073B57] font-mono">{treatment.costIndia}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block font-bold uppercase">US / UK Price</span>
                      <span className="text-sm font-bold text-rose-500 font-mono line-through">
                        {treatment.costUS}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                      Save {treatment.savings}
                    </span>
                    <Link
                      to={`/treatments/${treatment.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B5678] hover:text-[#FF791B] transition-colors"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Why Choose India: Visual 4-Card Grid */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
              Global Medical Hub
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#073B57] mt-1">
              Why Travel to India for Surgery?
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Advanced clinical excellence and compassionate care without waiting lists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <div data-aos="fade-up" data-aos-delay="50" className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs card-hover space-y-3 h-full flex flex-col justify-start">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#FF791B] flex items-center justify-center font-bold">
                <DollarSign className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg text-[#073B57]">70% to 85% Savings</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Save tens of thousands of dollars on complex surgeries while receiving identical US FDA implants.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="150" className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs card-hover space-y-3 h-full flex flex-col justify-start">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0B5678] flex items-center justify-center font-bold">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg text-[#073B57]">Zero Waiting Lists</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Skip 12-month NHS and European backlogs. Get scheduled for surgery within 48 hours of landing.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="250" className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs card-hover space-y-3 h-full flex flex-col justify-start">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg text-[#073B57]">JCI Accreditations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hospitals accredited by Joint Commission International (USA) with top infection control protocols.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="350" className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs card-hover space-y-3 h-full flex flex-col justify-start">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg text-[#073B57]">English Fluent Staff</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                All surgeons and senior nurses speak fluent English. Dedicated translators for Arabic, French, and Russian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted, Transparent, Ethical: 9-Stage Process Cards */}
      <TrustedProcessCards />

      {/* Featured Hospitals & Renowned Doctors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div data-aos="fade-up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
              Leading Medical Directors
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#073B57] mt-1">
              Top Specialist Surgeons
            </h2>
          </div>
          <Link
            to="/doctors"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B5678] hover:text-[#FF791B] transition-colors"
          >
            <span>View All Doctors & Book</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <DoctorCardSkeleton key={`home-doctor-skeleton-${i}`} />
            ))
          ) : (
            DOCTORS.slice(0, 3).map((doctor, idx) => (
              <div key={doctor.id} data-aos="fade-up" data-aos-delay={idx * 150} className="h-full flex flex-col">
                <DoctorCard doctor={doctor} />
              </div>
            ))
          )}
        </div>
      </section>

      {/* Why Choose Hokena Care: Reassuring Banner */}
      <section data-aos="zoom-in" data-aos-duration="750" className="bg-gradient-to-br from-[#073B57] to-[#0B5678] text-white py-20 rounded-3xl mx-4 sm:mx-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-12">
          <div className="space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
              Patient First Promise
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
              Why Patients Trust Hokena Care
            </h2>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto">
              We guide you every step of the way with zero markups and complete transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-stretch">
            <div data-aos="fade-up" data-aos-delay="100" className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs space-y-3 card-hover h-full flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-[#FF791B] text-white flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">100% Free Concierge</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Zero fees for our patients. You pay the hospital billing counter directly with zero agency markup.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs space-y-3 card-hover h-full flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">Personal Care Manager</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A dedicated bedside coordinator like Priya Sharma is by your side 24/7 for language, appointments, and food.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs space-y-3 card-hover h-full flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-sky-400 text-[#073B57] flex items-center justify-center font-bold">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">Free Airport Transfers</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Complimentary private chauffeur meet & greet at Delhi airport terminal, plus local 5G SIM card.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Success Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
            Real Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#073B57] mt-1">
            Patient Stories & Testimonials
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Hear from international patients who travelled to India with Hokena Care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {SUCCESS_STORIES.slice(0, 4).map((story, idx) => (
            <div
              key={story.id}
              data-aos="fade-up"
              data-aos-delay={(idx % 2) * 150}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-4 card-hover h-full"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 pb-2 border-b border-slate-100">
                  <div className="flex items-start gap-2.5 min-w-0 flex-1">
                    <span className="text-2xl sm:text-3xl flex-shrink-0 pt-0.5" role="img" aria-label={story.country}>{story.flag}</span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-display font-bold text-base sm:text-lg text-[#073B57] leading-snug">{story.patientName}</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed mt-0.5">{story.country} • <span className="text-[#0B5678] font-semibold">{story.condition}</span></p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 self-start">
                    <span className="inline-flex items-center text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shadow-2xs">
                      {story.savings}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                <span className="font-semibold text-[#0B5678]">{story.doctor} ({story.hospital})</span>
                <span className="font-medium text-slate-400">{story.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div data-aos="fade-up" className="text-center mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#073B57] mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3.5">
          {FAQS.slice(0, 5).map((faq, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 70}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-base text-[#073B57] hover:text-[#FF791B] transition-colors"
              >
                <span>{faq.question}</span>
                <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {activeFaq === idx ? '−' : '+'}
                </span>
              </button>

              {activeFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Big Action CTA Banner */}
      <section data-aos="zoom-in" data-aos-duration="750" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#073B57] via-[#0B5678] to-[#073B57] text-white p-10 sm:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 animate-glow">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Upload your medical reports today. Get official hospital quotations and doctor opinions in 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link
              to="/patient/journey/enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-none transition-all hover:scale-105"
            >
              <span>Get Free Quotation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919871044210"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-4 rounded-2xl font-bold text-base transition-colors"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
      {/* 30-Second Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-sm sm:max-w-md bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/95 border-b border-white/10 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF791B] animate-pulse" />
                <span className="text-xs sm:text-sm font-bold tracking-wide">Hokena Care • 30s Overview</span>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative bg-black flex items-center justify-center max-h-[75vh]">
              <video
                src="/videos/hokena_intro_30s.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-auto max-h-[75vh] object-contain rounded-b-3xl"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
