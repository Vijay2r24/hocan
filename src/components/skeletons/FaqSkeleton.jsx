import React from 'react';
import Skeleton from '../common/Skeleton';

export default function FaqSkeleton() {
  return (
    <div className="space-y-4 max-w-3xl mx-auto animate-in fade-in duration-200">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between"
        >
          <div className="flex items-center gap-3 flex-1">
            <Skeleton variant="circle" className="w-5 h-5 flex-shrink-0" />
            <Skeleton variant="text" className="w-4/5 h-5 rounded-md" />
          </div>
          <Skeleton variant="circle" className="w-6 h-6 flex-shrink-0" />
        </div>
      ))}
    </div>
  );
}
