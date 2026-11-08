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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUCCESS_STORIES.map((story, idx) => (
            <div
              key={story.id}
              data-aos="fade-up"
              data-aos-delay={(idx % 2) * 150}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{story.flag}</span>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#073B57]">
                        {story.patientName}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        From {story.country} • {story.condition}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {story.savings}
                  </span>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Hospital:</span>
                    <strong className="text-slate-800">{story.hospital}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Treating Surgeon:</span>
                    <strong className="text-[#0B5678]">{story.doctor}</strong>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-slate-400 ml-1 font-semibold">5.0 / 5.0</span>
                </div>
                <span className="text-slate-400 font-medium">{story.date}</span>
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
