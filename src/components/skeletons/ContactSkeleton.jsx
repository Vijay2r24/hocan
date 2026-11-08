import React from 'react';
import Skeleton from '../common/Skeleton';

export default function ContactSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto animate-in fade-in duration-200">
      {/* Contact Form Skeleton (7 cols) */}
      <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
        <Skeleton variant="text" className="w-56 h-6 rounded-md" />
        <Skeleton variant="text" className="w-80 max-w-full h-4 rounded-md" />
        <div className="space-y-4 pt-2">
          <Skeleton variant="rect" className="w-full h-11 rounded-xl" />
          <div className="grid grid-cols-2 gap-3">
            <Skeleton variant="rect" className="w-full h-11 rounded-xl" />
            <Skeleton variant="rect" className="w-full h-11 rounded-xl" />
          </div>
          <Skeleton variant="rect" className="w-full h-24 rounded-xl" />
          <Skeleton variant="rect" className="w-full h-12 rounded-xl" />
        </div>
      </div>

      {/* Info Cards Skeleton (5 cols) */}
      <div className="lg:col-span-5 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-2">
            <Skeleton variant="circle" className="w-10 h-10 mb-2" />
            <Skeleton variant="text" className="w-40 h-5 rounded-md" />
            <Skeleton variant="text" className="w-56 h-4 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
