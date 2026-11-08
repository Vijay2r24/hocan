import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, ArrowRight, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SUCCESS_STORIES } from '../../data/mockData';
import { SuccessStoriesSkeleton } from '../../components/skeletons';

export default function SuccessStoriesPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related success stories skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SuccessStoriesSkeleton />;
  }

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section data-aos="fade-down" className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
            Real Voices, Real Healing
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Patient Success Stories & Testimonials
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Read heartfelt experiences from patients across the world who entrusted their medical care and international travel to Hokena Care.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {SUCCESS_STORIES.map((story, idx) => (
            <div
              key={story.id}
              data-aos="fade-up"
              data-aos-delay={(idx % 2) * 150}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-6 card-hover h-full"
            >
              <div className="space-y-4">
                {/* Header: Flag, Patient Name, Condition & Savings Badge */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-1 border-b border-slate-100">
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <span className="text-2xl sm:text-3xl flex-shrink-0 pt-0.5" role="img" aria-label={story.country}>
                      {story.flag}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display font-extrabold text-base sm:text-lg text-[#073B57] leading-snug">
                        {story.patientName}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed mt-0.5">
                        From {story.country} • <span className="text-[#0B5678] font-semibold">{story.condition}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 self-start">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs whitespace-nowrap">
                      {story.savings}
                    </span>
                  </div>
                </div>

                {/* Hospital & Treating Doctor info */}
                <div className="p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-600">
                    <span className="text-slate-500 font-medium flex-shrink-0">Hospital:</span>
                    <strong className="text-slate-800 font-bold sm:text-right">{story.hospital}</strong>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-600">
                    <span className="text-slate-500 font-medium flex-shrink-0">Treating Surgeon:</span>
                    <strong className="text-[#0B5678] font-bold sm:text-right">{story.doctor}</strong>
                  </div>
                </div>

                {/* Patient Quote */}
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed pt-1">
                  "{story.quote}"
                </p>
              </div>

              {/* Bottom Rating and Timeline */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-slate-600 ml-1 font-bold">5.0 / 5.0</span>
                </div>
                <span className="text-slate-500 font-medium text-[11px] sm:text-xs">{story.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Guarantee Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-r from-[#073B57] to-[#0B5678] text-white p-10 sm:p-12 rounded-3xl shadow-xl space-y-4">
          <ShieldCheck className="w-12 h-12 text-[#FF791B] mx-auto" />
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            Ready to Begin Your Healing Journey?
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
            Send your medical reports today. Get a transparent hospital quotation and personalized itinerary within 24 hours.
          </p>
          <div className="pt-2">
            <Link
              to="/patient/journey/enquiry"
              className="inline-flex items-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              <span>Submit Free Medical Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
