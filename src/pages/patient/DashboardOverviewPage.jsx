import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  FileText,
  Video,
  FileCheck2,
  FileBadge,
  Plane,
  Stethoscope,
  HeartPulse,
  Home,
  CheckCircle2,
  Clock,
  AlertCircle,
  Calendar,
  MessageSquare,
  Phone,
  ArrowRight,
  Sparkles,
  Download,
  Hospital,
  ShieldCheck,
  User,
  RefreshCw
} from 'lucide-react';
import JourneyProgressTracker from '../../components/journey/JourneyProgressTracker';
import DashboardCard from '../../components/patient/DashboardCard';
import StatusBadge from '../../components/common/StatusBadge';
import { getStageName } from '../../utils/formatters';
import { DashboardOverviewSkeleton } from '../../components/skeletons';

export default function DashboardOverviewPage() {
  const { user } = useSelector((state) => state.auth);
  const { currentStage, journeyProgress, quotation, visa, travel } = useSelector((state) => state.journey);
  const { documents } = useSelector((state) => state.documents);
  const safeDocs = Array.isArray(documents) ? documents : [];
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Automatically load page-related dashboard skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, [user?.id]);

  if (isLoading) {
    return <DashboardOverviewSkeleton />;
  }

  return (
    <div data-aos="fade-up" className="space-y-8">
      {/* Welcome Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#073B57] via-[#0B5678] to-[#073B57] text-white p-7 sm:p-9 shadow-md relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#FF791B]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-slate-100 border border-white/20">
                Patient ID: {user?.id}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Medical File
              </span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Welcome, {user?.fullName}
            </h1>
            <p className="text-base text-slate-200 max-w-xl leading-relaxed">
              Medical plan for <strong>{user?.preferredTreatment || user?.currentCondition}</strong> in India. Your personal coordinator is actively managing your case.
            </p>
          </div>

          {/* Current Stage Highlight Box */}
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 min-w-[260px]">
            <span className="text-xs uppercase font-bold tracking-wider text-[#FF791B] block mb-1">
              Active Stage
            </span>
            <h3 className="font-display font-extrabold text-lg text-white">
              Stage {currentStage}: {getStageName(currentStage)}
            </h3>
            <div className="mt-3 flex items-center justify-between text-xs sm:text-sm text-slate-200">
              <span>Overall Progress</span>
              <span className="font-bold text-white text-base">{journeyProgress}%</span>
            </div>
            <div className="w-full bg-white/20 h-2.5 rounded-full mt-1.5 overflow-hidden">
              <div
                className="bg-[#FF791B] h-full rounded-full transition-all duration-500"
                style={{ width: `${journeyProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 8-Stage Patient Journey Tracker */}
      <JourneyProgressTracker />

      {/* Main Grid: Pending Tasks + Key Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (8 cols): Action Items & Upcoming Events */}
        <div className="lg:col-span-8 space-y-8">
          {/* Action Required Banner */}
          <div className="p-6 rounded-3xl bg-orange-50 border border-orange-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#FF791B] text-white flex-shrink-0 shadow-md">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-base sm:text-lg text-[#073B57]">
                  {currentStage === 3
                    ? 'Action Required: Review Institutional Quotation'
                    : currentStage === 4
                    ? 'Action Required: Submit Passport for Medical Visa Letter'
                    : currentStage === 5
                    ? 'Action Required: Submit Arrival Flight Details'
                    : 'Action Required: Keep in Touch with Coordinator'}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentStage === 3
                    ? 'Fortis Memorial Hospital has prepared your customized robotic knee replacement quotation ($5,300).'
                    : currentStage === 4
                    ? 'Upload passport copies for yourself and attendant to generate official Embassy VAL.'
                    : currentStage === 5
                    ? 'Enter your flight booking info for VIP tarmac meet & greet in Delhi.'
                    : 'Your patient journey is progressing smoothly with Hokena Care.'}
                </p>
              </div>
            </div>

            <Link
              to={
                currentStage === 3
                  ? '/patient/journey/confirmation'
                  : currentStage === 4
                  ? '/patient/journey/visa'
                  : currentStage === 5
                  ? '/patient/journey/travel'
                  : '/patient/messages'
              }
              className="w-full sm:w-auto whitespace-nowrap px-6 py-3 rounded-xl bg-[#FF791B] hover:bg-[#e6680f] text-white text-sm font-bold transition-all shadow-md text-center hover:scale-105"
            >
              Take Action Now
            </Link>
          </div>

          {/* Next Confirmed Appointment Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF791B]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#073B57]">
                    Upcoming Doctor Consultation
                  </h3>
                  <p className="text-xs text-slate-400">Direct telemedicine conference</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                Confirmed
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-sm">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80"
                  alt="Doctor"
                  className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-xs"
                />
                <div>
                  <h4 className="font-bold text-base text-[#073B57]">
                    Dr. Ashok Rajgopal (Principal Director - Orthopedics)
                  </h4>
                  <p className="text-sm text-slate-600 font-medium">Fortis Memorial Research Institute, Gurugram</p>
                  <div className="flex items-center gap-3 text-slate-500 mt-1 font-semibold text-xs sm:text-sm">
                    <span className="text-[#0B5678] font-bold">12 Nov 2024</span>
                    <span>•</span>
                    <span>02:30 PM IST (09:00 AM UK Time)</span>
                  </div>
                </div>
              </div>

              <Link
                to="/patient/consultations"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white text-sm font-bold transition-colors shadow-xs"
              >
                <Video className="w-4 h-4 text-[#FF791B]" />
                <span>Join Video Room</span>
              </Link>
            </div>
          </div>

          {/* Quick Stage Shortcuts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              to="/patient/journey/enquiry"
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#FF791B] hover:shadow-md transition-all group card-hover"
            >
              <FileText className="w-6 h-6 text-[#073B57] group-hover:text-[#FF791B] mb-2" />
              <h5 className="font-bold text-sm text-[#073B57]">My Enquiries</h5>
              <p className="text-xs text-slate-400 mt-0.5">1 active file</p>
            </Link>

            <Link
              to="/patient/journey/confirmation"
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#FF791B] hover:shadow-md transition-all group card-hover"
            >
              <FileCheck2 className="w-6 h-6 text-[#FF791B] mb-2" />
              <h5 className="font-bold text-sm text-[#073B57]">Quotation</h5>
              <p className="text-xs text-emerald-700 font-bold mt-0.5">$5,300 Ready</p>
            </Link>

            <Link
              to="/patient/journey/visa"
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#FF791B] hover:shadow-md transition-all group card-hover"
            >
              <FileBadge className="w-6 h-6 text-[#073B57] group-hover:text-[#FF791B] mb-2" />
              <h5 className="font-bold text-sm text-[#073B57]">Medical Visa</h5>
              <p className="text-xs text-slate-400 mt-0.5">VAL Letter Ready</p>
            </Link>

            <Link
              to="/patient/journey/travel"
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#FF791B] hover:shadow-md transition-all group card-hover"
            >
              <Plane className="w-6 h-6 text-[#073B57] group-hover:text-[#FF791B] mb-2" />
              <h5 className="font-bold text-sm text-[#073B57]">Airport VIP</h5>
              <p className="text-xs text-slate-400 mt-0.5">Driver Assigned</p>
            </Link>
          </div>
        </div>

        {/* Right Column (4 cols): Coordinator & Quick Documents */}
        <div className="lg:col-span-4 space-y-8">
          {/* Assigned Coordinator Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-5">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
              Personal Patient Advocate
            </span>

            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=200&q=80"
                  alt="Coordinator"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400 shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-base text-[#073B57]">Ms. Priya Sharma</h4>
                <p className="text-xs text-slate-500">Senior International Care Manager</p>
                <span className="inline-block mt-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  Available 24/7 for you
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
              "Namaste Mr. Chen! I will coordinate your hospital admission, private interpreter, and travel logistics personally."
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link
                to="/patient/messages"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white font-bold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Now</span>
              </Link>
              <a
                href="https://wa.me/919871044210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Uploaded Documents Quick List */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#073B57]">
                Medical Records ({safeDocs.length})
              </h4>
              <Link
                to="/patient/documents"
                className="text-xs font-bold text-[#0B5678] hover:text-[#FF791B]"
              >
                Manage
              </Link>
            </div>

            <div className="space-y-2.5">
              {safeDocs.slice(0, 3).map((doc) => (
                <div
                  key={doc.id}
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FileText className="w-4 h-4 text-[#0B5678] flex-shrink-0" />
                    <span className="font-semibold text-slate-800 truncate">{doc.name}</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                    Verified
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/patient/documents"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-dashed border-slate-300 text-xs sm:text-sm font-bold text-slate-600 hover:border-[#FF791B] hover:text-[#FF791B] transition-colors"
            >
              <span>+ Upload New Scan</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
