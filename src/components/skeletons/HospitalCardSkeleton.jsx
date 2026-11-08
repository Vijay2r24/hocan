import React from 'react';
import Skeleton from '../common/Skeleton';

export default function HospitalCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col">
      {/* Top Banner Skeleton */}
      <div className="relative h-56 bg-slate-100 overflow-hidden">
        <Skeleton variant="rect" className="w-full h-full rounded-none" />
        <div className="absolute top-3.5 left-3.5 flex gap-2">
          <Skeleton variant="rect" className="w-24 h-6 rounded-lg" />
          <Skeleton variant="rect" className="w-20 h-6 rounded-lg" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <Skeleton variant="text" className="w-32 h-4 rounded-md" />
          <Skeleton variant="text" className="w-2/3 h-7 rounded-lg" />
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Location */}
          <div className="flex items-center gap-2 mb-3">
            <Skeleton variant="circle" className="w-4 h-4" />
            <Skeleton variant="text" className="w-32 h-4 rounded-md" />
          </div>

          {/* Description */}
          <div className="space-y-1.5 mb-4">
            <Skeleton variant="text" className="w-full h-4 rounded-md" />
            <Skeleton variant="text" className="w-4/5 h-4 rounded-md" />
          </div>

          {/* Beds & Airport Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-2">
              <Skeleton variant="circle" className="w-4 h-4" />
              <Skeleton variant="text" className="w-20 h-4 rounded-md" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton variant="circle" className="w-4 h-4" />
              <Skeleton variant="text" className="w-24 h-4 rounded-md" />
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-2">
            <Skeleton variant="text" className="w-28 h-3 rounded-xs" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton variant="circle" className="w-3.5 h-3.5" />
                <Skeleton variant="text" className="w-48 h-3.5 rounded-md" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton variant="circle" className="w-3.5 h-3.5" />
                <Skeleton variant="text" className="w-40 h-3.5 rounded-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Skeleton variant="text" className="w-32 h-5 rounded-md" />
          <Skeleton variant="rect" className="w-32 h-9 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
