import React from 'react';
import Skeleton from '../common/Skeleton';

export default function DoctorCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col h-full">
      {/* Top Section */}
      <div className="p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center border-b border-slate-100 flex-shrink-0 min-h-[148px] sm:min-h-[155px]">
        {/* Avatar skeleton */}
        <div className="relative flex-shrink-0">
          <Skeleton variant="rect" className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl" />
        </div>

        <div className="flex-1 min-w-0 space-y-2.5 w-full">
          {/* Badge & Rating */}
          <div className="flex items-center gap-2">
            <Skeleton variant="pill" className="w-28 h-6" />
            <Skeleton variant="pill" className="w-16 h-6" />
          </div>

          {/* Name & Title */}
          <Skeleton variant="text" className="h-6 w-3/4 rounded-lg" />
          <Skeleton variant="text" className="h-4 w-1/2 rounded-md" />

          {/* Hospital */}
          <div className="flex items-center gap-2 pt-1">
            <Skeleton variant="circle" className="w-4 h-4" />
            <Skeleton variant="text" className="h-4 w-2/3 rounded-md" />
          </div>
        </div>
      </div>

      {/* Details & CTA */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <Skeleton variant="circle" className="w-4 h-4 flex-shrink-0" />
            <Skeleton variant="text" className="h-4 w-40 rounded-md" />
          </div>
          <div className="flex items-center gap-2.5">
            <Skeleton variant="circle" className="w-4 h-4 flex-shrink-0" />
            <Skeleton variant="text" className="h-4 w-52 rounded-md" />
          </div>
          <div className="flex items-center gap-2.5">
            <Skeleton variant="circle" className="w-4 h-4 flex-shrink-0" />
            <Skeleton variant="text" className="h-4 w-48 rounded-md" />
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div className="space-y-1">
            <Skeleton variant="text" className="h-3 w-16 rounded-xs" />
            <Skeleton variant="text" className="h-4 w-28 rounded-md" />
          </div>
          <Skeleton variant="rect" className="w-36 h-10 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
