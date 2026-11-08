import React from 'react';
import Skeleton from '../common/Skeleton';

export default function TimelineSkeleton({ count = 4 }) {
  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-200">
      <div className="space-y-2 text-center pb-4">
        <Skeleton variant="pill" className="w-36 h-6 mx-auto" />
        <Skeleton variant="text" className="w-80 max-w-full h-8 rounded-lg mx-auto" />
        <Skeleton variant="text" className="w-96 max-w-full h-4 rounded-md mx-auto" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4"
          >
            <Skeleton variant="rect" className="w-12 h-12 rounded-2xl flex-shrink-0" />
            <div className="flex-1 space-y-2.5">
              <div className="flex items-center justify-between">
                <Skeleton variant="text" className="w-48 h-5 rounded-md" />
                <Skeleton variant="pill" className="w-20 h-5" />
              </div>
              <Skeleton variant="text" className="w-full h-4 rounded-md" />
              <Skeleton variant="text" className="w-4/5 h-4 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
