import React, { useState, useEffect } from 'react';
import { ShieldCheck, MapPin, Bed, Plane, Sparkles } from 'lucide-react';
import { HOSPITALS } from '../../data/mockData';
import HospitalCard from '../../components/patient/HospitalCard';
import { HospitalCardSkeleton } from '../../components/skeletons';

export default function HospitalsPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related hospital skeletons on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section data-aos="fade-down" className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
            JCI & NABH Quaternary Centers
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Partner Hospitals & Medical Centers in India
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Hokena Care partners with top 50+ super-speciality hospitals across Delhi NCR, Mumbai, Chennai, and Bangalore with dedicated international patient wings.
          </p>
        </div>
      </section>

      {/* Hospital Grid with Skeleton State */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <HospitalCardSkeleton key={`skeleton-hospital-${i}`} />
              ))
            : HOSPITALS.map((hospital, idx) => (
                <div key={hospital.id} data-aos="fade-up" data-aos-delay={(idx % 2) * 150} className="h-full flex flex-col">
                  <HospitalCard hospital={hospital} />
                </div>
              ))}
        </div>
      </section>
    </div>
  );
}
