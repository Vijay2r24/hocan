import React from 'react';
import Skeleton from '../common/Skeleton';

export default function SettingsSkeleton() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton variant="text" className="w-80 max-w-full h-8 rounded-lg" />
        <Skeleton variant="text" className="w-96 max-w-full h-4 rounded-md" />
      </div>

      {/* Card 1: Notifications Settings */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Skeleton variant="circle" className="w-5 h-5 rounded-md" />
          <Skeleton variant="text" className="w-48 h-5 rounded-md" />
        </div>
        <div className="space-y-3 pt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="space-y-1">
                <Skeleton variant="text" className="w-40 h-4 rounded-md" />
                <Skeleton variant="text" className="w-64 h-3 rounded-md" />
              </div>
              <Skeleton variant="pill" className="w-12 h-6" />
            </div>
          ))}
        </div>
        <Skeleton variant="pill" className="w-28 h-9 ml-auto" />
      </div>

      {/* Card 2: Security & Password */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Skeleton variant="circle" className="w-5 h-5 rounded-md" />
          <Skeleton variant="text" className="w-44 h-5 rounded-md" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-1.5">
              <Skeleton variant="text" className="w-32 h-3.5 rounded-md" />
              <Skeleton variant="rect" className="w-full h-11 rounded-xl" />
            </div>
          ))}
        </div>
        <Skeleton variant="pill" className="w-36 h-9 ml-auto" />
      </div>

      {/* Card 3: Language & Localization */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Skeleton variant="circle" className="w-5 h-5 rounded-md" />
          <Skeleton variant="text" className="w-40 h-5 rounded-md" />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <Skeleton variant="rect" className="w-full sm:w-64 h-11 rounded-xl" />
          <Skeleton variant="pill" className="w-28 h-9" />
        </div>
      </div>
    </div>
  );
}
