import React from 'react';
import Skeleton from '../common/Skeleton';

export default function EnquiryListSkeleton({ rows = 3, fullPage = false }) {
  if (fullPage) {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        {/* Header Skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <Skeleton variant="text" className="w-64 max-w-full h-8 rounded-lg" />
            <Skeleton variant="text" className="w-96 max-w-full h-4 rounded-md" />
          </div>
          <Skeleton variant="pill" className="w-44 h-10" />
        </div>

        {/* Enquiry Cards List Skeleton */}
        <div className="space-y-4">
          {Array.from({ length: rows }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2.5 max-w-2xl flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Skeleton variant="rect" className="w-24 h-6 rounded-md" />
                  <Skeleton variant="pill" className="w-24 h-6" />
                  <Skeleton variant="text" className="w-36 h-4 rounded-md" />
                </div>

                <Skeleton variant="text" className="w-3/4 h-5 rounded-md" />
                <Skeleton variant="text" className="w-full h-4 rounded-md" />

                <div className="flex flex-wrap gap-4 pt-1">
                  <Skeleton variant="text" className="w-32 h-3.5 rounded-xs" />
                  <Skeleton variant="text" className="w-36 h-3.5 rounded-xs" />
                  <Skeleton variant="text" className="w-28 h-3.5 rounded-xs" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Skeleton variant="rect" className="w-24 h-9 rounded-xl" />
                <Skeleton variant="rect" className="w-32 h-9 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {Array.from({ length: rows }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="space-y-2.5 max-w-2xl flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <Skeleton variant="rect" className="w-24 h-6 rounded-md" />
              <Skeleton variant="pill" className="w-20 h-6" />
              <Skeleton variant="text" className="w-32 h-4 rounded-md" />
            </div>

            <Skeleton variant="text" className="w-3/4 h-5 rounded-md" />
            <Skeleton variant="text" className="w-full h-4 rounded-md" />

            <div className="flex flex-wrap gap-4 pt-1">
              <Skeleton variant="text" className="w-32 h-3.5 rounded-xs" />
              <Skeleton variant="text" className="w-36 h-3.5 rounded-xs" />
              <Skeleton variant="text" className="w-28 h-3.5 rounded-xs" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Skeleton variant="rect" className="w-24 h-9 rounded-xl" />
            <Skeleton variant="rect" className="w-32 h-9 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
