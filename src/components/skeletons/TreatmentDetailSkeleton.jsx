import React from 'react';
import Skeleton from '../common/Skeleton';
import DoctorCardSkeleton from './DoctorCardSkeleton';

export default function TreatmentDetailSkeleton() {
  return (
    <div className="space-y-12 pb-16 animate-in fade-in duration-200">
      {/* Top Breadcrumb & Hero */}
      <section className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Skeleton variant="text" dark className="w-36 h-4 mb-4 rounded-md" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Skeleton variant="pill" dark className="w-32 h-6" />
              <Skeleton variant="text" dark className="w-3/4 h-10 rounded-lg" />
              <Skeleton variant="text" dark className="w-full h-4 rounded-md" />
              <Skeleton variant="text" dark className="w-5/6 h-4 rounded-md" />
              <div className="flex flex-wrap gap-4 pt-2">
                <Skeleton variant="pill" dark className="w-36 h-6" />
                <Skeleton variant="pill" dark className="w-36 h-6" />
                <Skeleton variant="pill" dark className="w-40 h-6" />
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-3xl shadow-2xl space-y-4">
              <Skeleton variant="text" className="w-36 h-3 rounded-md" />
              <Skeleton variant="text" className="w-48 h-8 rounded-lg" />
              <Skeleton variant="text" className="w-40 h-3 rounded-md" />
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <Skeleton variant="text" className="w-full h-3 rounded-md" />
                <Skeleton variant="text" className="w-4/5 h-3 rounded-md" />
              </div>
              <Skeleton variant="rect" className="w-full h-11 rounded-xl mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Treatment Details */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <Skeleton variant="text" className="w-48 h-6 rounded-md" />
              <div className="space-y-2 pt-2">
                <Skeleton variant="text" className="w-full h-4 rounded-md" />
                <Skeleton variant="text" className="w-full h-4 rounded-md" />
                <Skeleton variant="text" className="w-3/4 h-4 rounded-md" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <Skeleton variant="circle" className="w-5 h-5 rounded-md" />
                    <Skeleton variant="text" className="w-44 h-3.5 rounded-md" />
                  </div>
                ))}
              </div>
            </div>

            {/* Doctors */}
            <div className="space-y-4">
              <Skeleton variant="text" className="w-56 h-6 rounded-md" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DoctorCardSkeleton />
                <DoctorCardSkeleton />
              </div>
            </div>
          </div>

          {/* Right: Hospital Accreditation */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
            <Skeleton variant="text" className="w-40 h-5 rounded-md" />
            <Skeleton variant="rect" className="w-full h-48 rounded-2xl" />
            <Skeleton variant="text" className="w-full h-3 rounded-md" />
            <Skeleton variant="text" className="w-4/5 h-3 rounded-md" />
          </div>
        </div>
      </section>
    </div>
  );
}
