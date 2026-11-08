import React from 'react';
import Skeleton from '../common/Skeleton';

export default function SuccessStoriesSkeleton() {
  return (
    <div className="space-y-16 pb-16 animate-in fade-in duration-200">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <Skeleton variant="pill" dark className="w-40 h-5 mx-auto" />
          <Skeleton variant="text" dark className="w-96 max-w-full h-10 rounded-lg mx-auto" />
          <Skeleton variant="text" dark className="w-128 max-w-full h-4 rounded-md mx-auto" />
        </div>
      </section>

      {/* Stories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xs space-y-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Skeleton variant="circle" className="w-10 h-10 rounded-xl" />
                  <div className="space-y-1.5">
                    <Skeleton variant="text" className="w-36 h-4 rounded-md" />
                    <Skeleton variant="text" className="w-48 h-3 rounded-md" />
                  </div>
                </div>
                <Skeleton variant="pill" className="w-24 h-6" />
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <Skeleton variant="text" className="w-32 h-3 rounded-md" />
                <Skeleton variant="text" className="w-48 h-4 rounded-md" />
              </div>

              <div className="space-y-2">
                <Skeleton variant="text" className="w-full h-3.5 rounded-md" />
                <Skeleton variant="text" className="w-full h-3.5 rounded-md" />
                <Skeleton variant="text" className="w-3/4 h-3.5 rounded-md" />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <Skeleton variant="text" className="w-28 h-4 rounded-md" />
                <Skeleton variant="pill" className="w-24 h-5" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
