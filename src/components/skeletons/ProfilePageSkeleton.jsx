import React from 'react';
import Skeleton from '../common/Skeleton';

export default function ProfilePageSkeleton() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-200">
      {/* Profile Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center gap-6">
        <Skeleton variant="circle" className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex-shrink-0" />
        <div className="flex-1 space-y-2 text-center sm:text-left w-full">
          <Skeleton variant="text" className="w-56 h-7 rounded-md mx-auto sm:mx-0" />
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
            <Skeleton variant="pill" className="w-28 h-6" />
            <Skeleton variant="pill" className="w-24 h-6" />
            <Skeleton variant="pill" className="w-32 h-6" />
          </div>
        </div>
      </div>

      {/* Form Sections */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
        <Skeleton variant="text" className="w-48 h-6 rounded-md" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton variant="text" className="w-28 h-3.5 rounded-xs" />
              <Skeleton variant="rect" className="w-full h-11 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
