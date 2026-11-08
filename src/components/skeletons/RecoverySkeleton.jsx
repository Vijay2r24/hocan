import React from 'react';
import Skeleton from '../common/Skeleton';

export default function RecoverySkeleton() {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton variant="pill" className="w-24 h-5" />
            <Skeleton variant="text" className="w-48 h-4" />
          </div>
          <Skeleton variant="text" className="w-80 max-w-full h-8 rounded-lg" />
          <Skeleton variant="text" className="w-96 max-w-full h-4 rounded-md" />
        </div>
        <Skeleton variant="pill" className="w-44 h-10" />
      </div>

      {/* 4 Score Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
            <Skeleton variant="text" className="w-24 h-3 rounded-md" />
            <div className="flex items-baseline gap-2">
              <Skeleton variant="text" className="w-16 h-7 rounded-md" />
              <Skeleton variant="pill" className="w-20 h-4" />
            </div>
            <Skeleton variant="rect" className="w-full h-2 rounded-full mt-2" />
          </div>
        ))}
      </div>

      {/* 2-Column Progression and Care Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Recovery Chart & Rehab Schedule */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton variant="text" className="w-48 h-5 rounded-md" />
              <Skeleton variant="pill" className="w-28 h-5" />
            </div>
            <Skeleton variant="rect" className="w-full h-52 rounded-2xl" />
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
            <Skeleton variant="text" className="w-44 h-5 rounded-md" />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <Skeleton variant="circle" className="w-10 h-10 rounded-xl flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <Skeleton variant="text" className="w-36 h-4 rounded-md" />
                      <Skeleton variant="pill" className="w-20 h-4" />
                    </div>
                    <Skeleton variant="text" className="w-full h-3 rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Nutrition and Prescriptions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
            <Skeleton variant="text" className="w-48 h-5 rounded-md" />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <Skeleton variant="text" className="w-32 h-4 rounded-md" />
                  <Skeleton variant="text" className="w-full h-3 rounded-md" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
            <Skeleton variant="text" className="w-40 h-5 rounded-md" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="space-y-1">
                    <Skeleton variant="text" className="w-28 h-4 rounded-md" />
                    <Skeleton variant="text" className="w-20 h-3 rounded-md" />
                  </div>
                  <Skeleton variant="pill" className="w-16 h-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
