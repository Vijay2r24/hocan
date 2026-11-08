import React from 'react';
import Skeleton from '../common/Skeleton';

export default function VisaPageSkeleton() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-200">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton variant="pill" className="w-40 h-6" />
        <Skeleton variant="text" className="w-80 h-7 rounded-lg" />
        <Skeleton variant="text" className="w-96 max-w-full h-4 rounded-md" />
      </div>

      {/* Visa Status Timeline Card Skeleton */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
          <div className="space-y-1.5">
            <Skeleton variant="text" className="w-36 h-3 rounded-xs" />
            <Skeleton variant="text" className="w-64 h-6 rounded-md" />
          </div>
          <Skeleton variant="pill" className="w-28 h-7" />
        </div>

        {/* 5-step status dots skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <Skeleton variant="circle" className="w-6 h-6" />
              <Skeleton variant="text" className="w-20 h-4 rounded-md" />
              <Skeleton variant="text" className="w-16 h-3 rounded-xs" />
            </div>
          ))}
        </div>
      </div>

      {/* Embassy VAL Letter Box */}
      <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <Skeleton variant="rect" className="w-14 h-14 rounded-2xl flex-shrink-0" />
          <div className="space-y-2">
            <Skeleton variant="text" className="w-72 h-5 rounded-md" />
            <Skeleton variant="text" className="w-96 max-w-full h-4 rounded-md" />
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton variant="rect" className="w-32 h-10 rounded-xl" />
          <Skeleton variant="rect" className="w-32 h-10 rounded-xl" />
        </div>
      </div>

      {/* 2-Column Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 space-y-4">
          <Skeleton variant="text" className="w-48 h-5 rounded-md" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Skeleton variant="circle" className="w-5 h-5 flex-shrink-0" />
              <div className="flex-1 space-y-1">
                <Skeleton variant="text" className="w-56 h-4 rounded-md" />
                <Skeleton variant="text" className="w-36 h-3 rounded-xs" />
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 space-y-4">
          <Skeleton variant="text" className="w-44 h-5 rounded-md" />
          <div className="space-y-3">
            <Skeleton variant="text" className="w-full h-4 rounded-md" />
            <Skeleton variant="text" className="w-5/6 h-4 rounded-md" />
            <Skeleton variant="rect" className="w-full h-11 rounded-xl mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
