import React from 'react';
import Skeleton from '../common/Skeleton';

export default function DashboardPageSkeleton() {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Title & Subtitle */}
      <div className="space-y-2">
        <Skeleton variant="text" className="w-64 h-8 rounded-lg" />
        <Skeleton variant="text" className="w-96 max-w-full h-4 rounded-md" />
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <Skeleton variant="rect" className="w-8 h-8 rounded-lg mb-2" />
            <Skeleton variant="text" className="w-24 h-4 rounded-md" />
            <Skeleton variant="text" className="w-16 h-3 rounded-xs" />
          </div>
        ))}
      </div>

      {/* Main Content Card Skeleton */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-5">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <Skeleton variant="text" className="w-48 h-6 rounded-md" />
          <Skeleton variant="pill" className="w-24 h-6" />
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-none">
              <div className="flex items-center gap-3">
                <Skeleton variant="circle" className="w-10 h-10" />
                <div className="space-y-1.5">
                  <Skeleton variant="text" className="w-52 h-4 rounded-md" />
                  <Skeleton variant="text" className="w-32 h-3 rounded-xs" />
                </div>
              </div>
              <Skeleton variant="rect" className="w-24 h-8 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
