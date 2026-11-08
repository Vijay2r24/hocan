import React from 'react';
import Skeleton from '../common/Skeleton';

export default function TravelPageSkeleton() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-200">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton variant="pill" className="w-40 h-6" />
        <Skeleton variant="text" className="w-80 h-7 rounded-lg" />
        <Skeleton variant="text" className="w-96 max-w-full h-4 rounded-md" />
      </div>

      {/* 3 Main Travel Cards */}
      <div className="space-y-6">
        {/* Flight Info Card Skeleton */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Skeleton variant="rect" className="w-10 h-10 rounded-xl" />
              <div className="space-y-1">
                <Skeleton variant="text" className="w-48 h-5 rounded-md" />
                <Skeleton variant="text" className="w-32 h-3 rounded-xs" />
              </div>
            </div>
            <Skeleton variant="rect" className="w-24 h-8 rounded-xl" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-1.5">
                <Skeleton variant="text" className="w-20 h-3 rounded-xs" />
                <Skeleton variant="text" className="w-32 h-4 rounded-md" />
              </div>
            ))}
          </div>
        </div>

        {/* Airport Chauffeur Card Skeleton */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <Skeleton variant="rect" className="w-10 h-10 rounded-xl" />
            <div className="space-y-1">
              <Skeleton variant="text" className="w-56 h-5 rounded-md" />
              <Skeleton variant="text" className="w-40 h-3 rounded-xs" />
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <Skeleton variant="text" className="w-48 h-4 rounded-md" />
            <Skeleton variant="text" className="w-72 h-4 rounded-md" />
          </div>
        </div>

        {/* Hotel / Apartment Booking Card Skeleton */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Skeleton variant="rect" className="w-10 h-10 rounded-xl" />
              <div className="space-y-1">
                <Skeleton variant="text" className="w-52 h-5 rounded-md" />
                <Skeleton variant="text" className="w-36 h-3 rounded-xs" />
              </div>
            </div>
            <Skeleton variant="pill" className="w-24 h-6" />
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <Skeleton variant="text" className="w-64 h-4 rounded-md" />
            <Skeleton variant="text" className="w-52 h-4 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
