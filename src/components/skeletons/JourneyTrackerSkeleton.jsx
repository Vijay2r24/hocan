import React from 'react';
import Skeleton from '../common/Skeleton';

export default function JourneyTrackerSkeleton() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton variant="pill" className="w-36 h-6" />
            <Skeleton variant="text" className="w-44 h-4 rounded-md" />
          </div>
          <Skeleton variant="text" className="w-64 h-7 rounded-lg" />
          <Skeleton variant="text" className="w-80 h-4 rounded-md" />
        </div>

        <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-100 self-start sm:self-auto">
          <div className="space-y-1 text-right">
            <Skeleton variant="text" className="w-20 h-3 ml-auto rounded-xs" />
            <Skeleton variant="text" className="w-24 h-4 ml-auto rounded-md" />
          </div>
          <Skeleton variant="rect" className="w-14 h-14 rounded-2xl" />
        </div>
      </div>

      {/* Desktop Horizontal 8-Step Tracker */}
      <div className="hidden xl:block">
        <div className="relative flex items-center justify-between">
          <div className="absolute top-7 left-7 right-7 h-1.5 bg-slate-100 -z-0 rounded-full" />
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="relative z-10 flex flex-col items-center space-y-2">
              <Skeleton variant="rect" className="w-14 h-14 rounded-2xl" />
              <Skeleton variant="text" className="w-14 h-3 rounded-xs" />
              <Skeleton variant="text" className="w-18 h-4 rounded-md" />
              <Skeleton variant="text" className="w-12 h-3 rounded-xs" />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet / Mobile Grid */}
      <div className="xl:hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 flex items-start gap-3">
              <Skeleton variant="rect" className="w-10 h-10 rounded-xl flex-shrink-0" />
              <div className="flex-1 space-y-1.5 min-w-0">
                <Skeleton variant="text" className="w-12 h-3 rounded-xs" />
                <Skeleton variant="text" className="w-20 h-4 rounded-md" />
                <Skeleton variant="text" className="w-14 h-3 rounded-xs" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
