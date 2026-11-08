import React from 'react';
import Skeleton from '../common/Skeleton';

export default function AboutSkeleton() {
  return (
    <div className="space-y-16 pb-16 animate-in fade-in duration-200">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <Skeleton variant="pill" dark className="w-36 h-5 mx-auto" />
          <Skeleton variant="text" dark className="w-128 max-w-full h-10 rounded-lg mx-auto" />
          <Skeleton variant="text" dark className="w-96 max-w-full h-4 rounded-md mx-auto" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <Skeleton variant="rect" className="w-12 h-12 rounded-xl" />
              <Skeleton variant="text" className="w-36 h-6 rounded-md" />
              <div className="space-y-2 pt-2">
                <Skeleton variant="text" className="w-full h-3.5 rounded-md" />
                <Skeleton variant="text" className="w-full h-3.5 rounded-md" />
                <Skeleton variant="text" className="w-4/5 h-3.5 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-2.5">
              <Skeleton variant="circle" className="w-10 h-10 rounded-xl" />
              <Skeleton variant="text" className="w-28 h-5 rounded-md" />
              <Skeleton variant="text" className="w-full h-3 rounded-md" />
              <Skeleton variant="text" className="w-3/4 h-3 rounded-md" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
