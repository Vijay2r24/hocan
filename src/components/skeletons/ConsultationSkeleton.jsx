import React from 'react';
import Skeleton from '../common/Skeleton';
import DoctorCardSkeleton from './DoctorCardSkeleton';

export default function ConsultationSkeleton({ showCoordinator = true }) {
  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton variant="pill" className="w-24 h-5" />
          <Skeleton variant="text" className="w-48 h-4" />
        </div>
        <Skeleton variant="text" className="w-80 max-w-full h-8 rounded-lg" />
        <Skeleton variant="text" className="w-96 max-w-full h-4 rounded-md" />
      </div>

      {/* Care Manager Card Skeleton */}
      {showCoordinator && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <Skeleton variant="circle" className="w-16 h-16 rounded-2xl flex-shrink-0" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton variant="text" className="w-36 h-5 rounded-md" />
                <Skeleton variant="pill" className="w-24 h-5" />
              </div>
              <Skeleton variant="text" className="w-64 h-3.5 rounded-md" />
              <Skeleton variant="text" className="w-56 h-3 rounded-md" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Skeleton variant="pill" className="w-28 h-9" />
            <Skeleton variant="pill" className="w-28 h-9" />
          </div>
        </div>
      )}

      {/* 2-Column Appointment Calendar Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Upcoming Consultations */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton variant="text" className="w-44 h-5 rounded-md" />
              <Skeleton variant="pill" className="w-16 h-5" />
            </div>
            
            {/* Appointment Card Skeleton 1 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <Skeleton variant="pill" className="w-32 h-5" />
                <Skeleton variant="pill" className="w-20 h-5" />
              </div>
              <div className="flex items-center gap-3">
                <Skeleton variant="circle" className="w-12 h-12 rounded-xl flex-shrink-0" />
                <div className="space-y-1.5 flex-1">
                  <Skeleton variant="text" className="w-40 h-4 rounded-md" />
                  <Skeleton variant="text" className="w-48 h-3 rounded-md" />
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
                <Skeleton variant="text" className="w-36 h-3 rounded-md" />
                <Skeleton variant="pill" className="w-28 h-8" />
              </div>
            </div>

            {/* Appointment Card Skeleton 2 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <Skeleton variant="pill" className="w-28 h-5" />
                <Skeleton variant="pill" className="w-16 h-5" />
              </div>
              <div className="flex items-center gap-3">
                <Skeleton variant="circle" className="w-12 h-12 rounded-xl flex-shrink-0" />
                <div className="space-y-1.5 flex-1">
                  <Skeleton variant="text" className="w-36 h-4 rounded-md" />
                  <Skeleton variant="text" className="w-44 h-3 rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Book Telemedicine Form */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
            <Skeleton variant="text" className="w-52 h-5 rounded-md" />
            
            {/* Doctor Picker */}
            <div className="space-y-1.5">
              <Skeleton variant="text" className="w-28 h-3.5 rounded-md" />
              <Skeleton variant="rect" className="w-full h-11 rounded-xl" />
            </div>

            {/* Mode selection toggle */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <Skeleton variant="rect" className="h-10 rounded-xl" />
              <Skeleton variant="rect" className="h-10 rounded-xl" />
            </div>

            {/* Date selection */}
            <div className="space-y-1.5 pt-1">
              <Skeleton variant="text" className="w-24 h-3.5 rounded-md" />
              <Skeleton variant="rect" className="w-full h-11 rounded-xl" />
            </div>

            {/* Time Slot Pills */}
            <div className="space-y-2 pt-1">
              <Skeleton variant="text" className="w-32 h-3.5 rounded-md" />
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} variant="rect" className="h-9 rounded-xl" />
                ))}
              </div>
            </div>

            {/* Book CTA */}
            <Skeleton variant="rect" className="w-full h-12 rounded-xl mt-4" />
          </div>
        </div>
      </div>

      {/* Specialists Section */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <Skeleton variant="text" className="w-56 h-6 rounded-md" />
          <Skeleton variant="pill" className="w-24 h-5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DoctorCardSkeleton />
          <DoctorCardSkeleton />
        </div>
      </div>
    </div>
  );
}
