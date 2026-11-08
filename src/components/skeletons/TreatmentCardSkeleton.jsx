import React from 'react';
import Skeleton from '../common/Skeleton';

export default function TreatmentCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col">
      {/* Image Skeleton */}
      <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
        <Skeleton variant="rect" className="w-full h-full rounded-none" />
        <div className="absolute top-3.5 right-3.5">
          <Skeleton variant="pill" className="w-24 h-6" />
        </div>
        <div className="absolute bottom-3.5 left-3.5">
          <Skeleton variant="rect" className="w-28 h-6 rounded-lg" />
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <Skeleton variant="text" className="h-6 w-4/5 rounded-lg" />
          <Skeleton variant="text" className="h-4 w-full rounded-md" />
          <Skeleton variant="text" className="h-4 w-2/3 rounded-md" />
        </div>

        {/* Price comparison card skeleton */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
          <div className="space-y-1.5">
            <Skeleton variant="text" className="h-3 w-20 rounded-xs" />
            <Skeleton variant="text" className="h-6 w-24 rounded-md" />
          </div>
          <div className="space-y-1.5 text-right">
            <Skeleton variant="text" className="h-3 w-20 ml-auto rounded-xs" />
            <Skeleton variant="text" className="h-5 w-20 ml-auto rounded-md" />
          </div>
        </div>

        {/* Footer row */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <Skeleton variant="pill" className="w-24 h-6" />
          <Skeleton variant="text" className="w-24 h-5 rounded-md" />
        </div>
      </div>
    </div>
  );
}
