import React from 'react';
import Skeleton from '../common/Skeleton';

export default function EnquiryFormSkeleton() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton variant="pill" className="w-24 h-5" />
          <Skeleton variant="text" className="w-48 h-4" />
        </div>
        <Skeleton variant="text" className="w-80 max-w-full h-8 rounded-lg" />
        <Skeleton variant="text" className="w-96 max-w-full h-4 rounded-md" />
      </div>

      {/* 3 Stepper Progress Pills */}
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="p-3 rounded-2xl bg-white border border-slate-200/90 flex items-center gap-3">
            <Skeleton variant="circle" className="w-8 h-8 rounded-xl flex-shrink-0" />
            <div className="space-y-1 hidden sm:block flex-1">
              <Skeleton variant="text" className="w-16 h-3 rounded-md" />
              <Skeleton variant="text" className="w-24 h-3.5 rounded-md" />
            </div>
          </div>
        ))}
      </div>

      {/* Large Form Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
        <div className="space-y-2 pb-2 border-b border-slate-100">
          <Skeleton variant="text" className="w-48 h-6 rounded-md" />
          <Skeleton variant="text" className="w-80 h-3.5 rounded-md" />
        </div>

        {/* 4 Form Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-1.5">
              <Skeleton variant="text" className="w-28 h-3.5 rounded-md" />
              <Skeleton variant="rect" className="w-full h-11 rounded-xl" />
            </div>
          ))}
        </div>

        {/* 2 Wider Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Skeleton variant="text" className="w-32 h-3.5 rounded-md" />
            <Skeleton variant="rect" className="w-full h-11 rounded-xl" />
          </div>
          <div className="space-y-1.5">
            <Skeleton variant="text" className="w-32 h-3.5 rounded-md" />
            <Skeleton variant="rect" className="w-full h-11 rounded-xl" />
          </div>
        </div>

        {/* Textarea Placeholder */}
        <div className="space-y-1.5">
          <Skeleton variant="text" className="w-40 h-3.5 rounded-md" />
          <Skeleton variant="rect" className="w-full h-24 rounded-2xl" />
        </div>

        {/* Drag & Drop Upload Dashed Area */}
        <div className="space-y-1.5">
          <Skeleton variant="text" className="w-44 h-3.5 rounded-md" />
          <Skeleton variant="rect" className="w-full h-28 rounded-2xl border-2 border-dashed border-slate-200" />
        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <Skeleton variant="pill" className="w-28 h-10" />
          <Skeleton variant="pill" className="w-36 h-10" />
        </div>
      </div>
    </div>
  );
}
