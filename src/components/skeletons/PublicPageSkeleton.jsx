import React from 'react';
import Skeleton from '../common/Skeleton';

export default function PublicPageSkeleton() {
  return (
    <div className="space-y-12 pb-20 animate-in fade-in duration-200">
      {/* Top Banner Skeleton */}
      <section className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="flex justify-center">
            <Skeleton dark variant="pill" className="w-36 h-6" />
          </div>
          <div className="flex justify-center">
            <Skeleton dark variant="text" className="w-3/4 sm:w-2/3 h-8 sm:h-10 rounded-xl" />
          </div>
          <div className="flex justify-center">
            <Skeleton dark variant="text" className="w-1/2 h-4 rounded-md" />
          </div>
          <div className="flex justify-center pt-2">
            <Skeleton dark variant="rect" className="w-full max-w-md h-12 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Main Content Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Filter / Tabs Row Skeleton */}
        <div className="flex items-center gap-3 overflow-hidden pb-1">
          <Skeleton variant="pill" className="w-28 h-9" />
          <Skeleton variant="pill" className="w-32 h-9" />
          <Skeleton variant="pill" className="w-24 h-9" />
          <Skeleton variant="pill" className="w-36 h-9" />
          <Skeleton variant="pill" className="w-28 h-9" />
        </div>

        {/* 6 Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col space-y-4 p-6"
            >
              <Skeleton variant="rect" className="w-full h-44 rounded-2xl" />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Skeleton variant="pill" className="w-24 h-5" />
                  <Skeleton variant="text" className="w-16 h-4 rounded-xs" />
                </div>
                <Skeleton variant="text" className="w-3/4 h-6 rounded-md" />
                <Skeleton variant="text" className="w-full h-4 rounded-md" />
                <Skeleton variant="text" className="w-2/3 h-4 rounded-md" />
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Skeleton variant="text" className="w-24 h-5 rounded-md" />
                <Skeleton variant="rect" className="w-28 h-9 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
