import React from 'react';
import Skeleton from '../common/Skeleton';

export default function ReturnHomeSkeleton() {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton variant="pill" className="w-24 h-5" />
            <Skeleton variant="text" className="w-52 h-4" />
          </div>
          <Skeleton variant="text" className="w-80 max-w-full h-8 rounded-lg" />
          <Skeleton variant="text" className="w-96 max-w-full h-4 rounded-md" />
        </div>
        <Skeleton variant="pill" className="w-44 h-10" />
      </div>

      {/* 3 Travel Logistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton variant="pill" className="w-28 h-5" />
              <Skeleton variant="circle" className="w-8 h-8 rounded-xl" />
            </div>
            <Skeleton variant="text" className="w-44 h-5 rounded-md" />
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <Skeleton variant="text" className="w-full h-3 rounded-md" />
              <Skeleton variant="text" className="w-4/5 h-3 rounded-md" />
            </div>
          </div>
        ))}
      </div>

      {/* 2-Column: Continuous Care & Review Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 6-Month Telehealth Schedule */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <Skeleton variant="text" className="w-48 h-5 rounded-md" />
            <Skeleton variant="pill" className="w-20 h-5" />
          </div>

          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                <Skeleton variant="circle" className="w-10 h-10 rounded-xl flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <Skeleton variant="text" className="w-40 h-4 rounded-md" />
                    <Skeleton variant="pill" className="w-24 h-4" />
                  </div>
                  <Skeleton variant="text" className="w-full h-3 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Experience Review & Star Rating Form */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
          <Skeleton variant="text" className="w-44 h-5 rounded-md" />
          <Skeleton variant="text" className="w-full h-3.5 rounded-md" />

          {/* Star rating skeleton */}
          <div className="flex gap-2 py-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} variant="circle" className="w-8 h-8 rounded-lg" />
            ))}
          </div>

          <Skeleton variant="rect" className="w-full h-28 rounded-2xl" />
          <Skeleton variant="rect" className="w-full h-11 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
