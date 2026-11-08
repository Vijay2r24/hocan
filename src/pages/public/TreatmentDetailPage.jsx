import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Clock,
  DollarSign,
  Building,
  User,
  ArrowRight,
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { TREATMENTS } from '../../data/mockData';
import { TreatmentDetailSkeleton } from '../../components/skeletons';

export default function TreatmentDetailPage() {
  const { slug } = useParams();
  const treatment = TREATMENTS.find((t) => t.slug === slug) || TREATMENTS[0];
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related treatment detail skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return <TreatmentDetailSkeleton />;
  }

  return (
    <div className="space-y-12 pb-16">
      {/* Top Breadcrumb & Hero */}
      <section data-aos="fade-down" className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            to="/treatments"
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Treatments</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF791B] text-white inline-block">
                {treatment.speciality}
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
                {treatment.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                {treatment.shortDesc}
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs">
                <span className="flex items-center gap-1.5 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4" /> Success Rate: {treatment.successRate}
                </span>
                <span className="flex items-center gap-1.5 text-sky-300">
                  <Clock className="w-4 h-4" /> Hospital Stay: {treatment.stayHospital}
                </span>
                <span className="flex items-center gap-1.5 text-amber-300">
                  <Clock className="w-4 h-4" /> Total Stay in India: {treatment.stayIndia}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white text-slate-800 p-6 rounded-3xl shadow-2xl border border-white/20">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Estimated All-Inclusive Package
              </span>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#073B57] font-mono mb-2">
                {treatment.costIndia}
              </div>
              <p className="text-xs text-emerald-700 font-semibold mb-4">
                Save {treatment.savings} compared to US/UK (Save up to ₹35+ Lakhs)
              </p>

              <Link
                to="/patient/journey/enquiry"
                className="w-full flex items-center justify-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white py-3 rounded-xl text-xs font-bold shadow-md transition-all hover:scale-105"
              >
                <span>Request Free Treatment Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <h2 className="font-display font-bold text-xl text-[#073B57]">
                Clinical Overview & Procedural Excellence
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {treatment.fullDesc}
              </p>
            </div>

            {/* Key Procedures */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="font-display font-bold text-lg text-[#073B57]">
                Key Procedural Steps & Clinical Protocol
              </h3>
              <div className="space-y-3">
                {treatment.keyProcedures?.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="w-6 h-6 rounded-lg bg-[#073B57] text-white flex items-center justify-center font-bold flex-shrink-0 text-[11px]">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700 font-medium leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Comparison Table */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="font-display font-bold text-lg text-[#073B57]">
                International Cost Comparison
              </h3>
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px]">
                    <tr>
                      <th className="p-3">Country / Health System</th>
                      <th className="p-3">Average Cost</th>
                      <th className="p-3">Typical Wait Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-emerald-50/50 font-bold">
                      <td className="p-3 text-[#073B57] flex items-center gap-1.5">
                        <span>🇮🇳 India (JCI Quaternary Care)</span>
                      </td>
                      <td className="p-3 text-emerald-800 font-mono">{treatment.costIndia}</td>
                      <td className="p-3 text-emerald-800">0 to 48 Hours</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-700">🇺🇸 United States (Private)</td>
                      <td className="p-3 text-rose-700 font-mono font-bold">{treatment.costUS}</td>
                      <td className="p-3 text-slate-500">2 - 4 Weeks</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-700">🇬🇧 United Kingdom (Private)</td>
                      <td className="p-3 text-rose-700 font-mono font-bold">{treatment.costUK}</td>
                      <td className="p-3 text-slate-500">12 - 18 Months (NHS Wait)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 text-xs">
              <h4 className="font-display font-bold text-sm text-[#073B57] uppercase tracking-wider">
                Recommended JCI Hospitals
              </h4>
              <ul className="space-y-2 text-slate-600">
                {treatment.recommendedHospitals?.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[#FF791B] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 text-xs">
              <h4 className="font-display font-bold text-sm text-[#073B57] uppercase tracking-wider">
                Renowned Lead Surgeons
              </h4>
              <ul className="space-y-2 text-slate-600">
                {treatment.topDoctors?.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <User className="w-4 h-4 text-[#0B5678] flex-shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#073B57] text-white space-y-3 text-xs">
              <h4 className="font-bold text-sm text-white">Need a Second Medical Opinion?</h4>
              <p className="text-slate-300 leading-relaxed">
                Send us your diagnostic scans. We will obtain written opinions from 3 leading Indian hospitals for free.
              </p>
              <Link
                to="/patient/journey/enquiry"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#FF791B] hover:bg-[#e6680f] text-white py-2.5 rounded-xl font-bold"
              >
                <span>Upload Scans for Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
