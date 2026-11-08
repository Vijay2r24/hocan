import React from 'react';
import Skeleton from '../common/Skeleton';

export default function DocumentListSkeleton({ rows = 4, fullPage = false }) {
  if (fullPage) {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        {/* Header Skeleton */}
        <div className="space-y-2">
          <Skeleton variant="text" className="w-80 max-w-full h-8 rounded-lg" />
          <Skeleton variant="text" className="w-128 max-w-full h-4 rounded-md" />
        </div>

        {/* Upload Card Skeleton */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <Skeleton variant="text" className="w-64 h-5 rounded-md" />
          <Skeleton variant="rect" className="w-full h-32 rounded-2xl border-2 border-dashed border-slate-200" />
        </div>

        {/* Records Management Section Skeleton */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {['All', 'Radiology', 'Laboratory', 'Imaging', 'Clearance', 'Passport'].map((cat) => (
                <Skeleton key={cat} variant="pill" className="w-20 h-7" />
              ))}
            </div>
            <Skeleton variant="rect" className="w-48 h-8 rounded-xl" />
          </div>

          <div className="divide-y divide-slate-100">
            {Array.from({ length: rows }).map((_, idx) => (
              <div
                key={idx}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <Skeleton variant="rect" className="w-10 h-10 rounded-xl flex-shrink-0" />
                  <div className="space-y-1.5 min-w-0">
                    <Skeleton variant="text" className="w-48 sm:w-64 h-4 rounded-md" />
                    <div className="flex items-center gap-2">
                      <Skeleton variant="text" className="w-20 h-3 rounded-xs" />
                      <Skeleton variant="text" className="w-12 h-3 rounded-xs" />
                      <Skeleton variant="text" className="w-24 h-3 rounded-xs" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <Skeleton variant="pill" className="w-20 h-6" />
                  <Skeleton variant="rect" className="w-8 h-8 rounded-lg" />
                  <Skeleton variant="rect" className="w-8 h-8 rounded-lg" />
                  <Skeleton variant="rect" className="w-8 h-8 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="divide-y divide-slate-100">
      {Array.from({ length: rows }).map((_, idx) => (
        <div
          key={idx}
          className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2"
        >
          <div className="flex items-start gap-3 min-w-0">
            <Skeleton variant="rect" className="w-10 h-10 rounded-xl flex-shrink-0" />
            <div className="space-y-1.5 min-w-0">
              <Skeleton variant="text" className="w-48 sm:w-64 h-4 rounded-md" />
              <div className="flex items-center gap-2">
                <Skeleton variant="text" className="w-20 h-3 rounded-xs" />
                <Skeleton variant="text" className="w-12 h-3 rounded-xs" />
                <Skeleton variant="text" className="w-24 h-3 rounded-xs" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <Skeleton variant="pill" className="w-20 h-6" />
            <Skeleton variant="rect" className="w-8 h-8 rounded-lg" />
            <Skeleton variant="rect" className="w-8 h-8 rounded-lg" />
            <Skeleton variant="rect" className="w-8 h-8 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
}
