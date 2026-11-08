import React from 'react';
import Skeleton from '../common/Skeleton';
import JourneyTrackerSkeleton from './JourneyTrackerSkeleton';

export default function DashboardOverviewSkeleton() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Welcome Banner Skeleton */}
      <div className="rounded-3xl bg-gradient-to-r from-[#073B57] via-[#0B5678] to-[#073B57] p-7 sm:p-9 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <Skeleton dark variant="pill" className="w-36 h-6" />
              <Skeleton dark variant="pill" className="w-32 h-6" />
            </div>
            <Skeleton dark variant="text" className="h-9 w-72 rounded-lg" />
            <Skeleton dark variant="text" className="h-4 w-96 rounded-md" />
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 min-w-[260px] space-y-3">
            <Skeleton dark variant="text" className="w-24 h-3 rounded-xs" />
            <Skeleton dark variant="text" className="w-44 h-6 rounded-md" />
            <div className="flex items-center justify-between">
              <Skeleton dark variant="text" className="w-24 h-4 rounded-xs" />
              <Skeleton dark variant="text" className="w-10 h-4 rounded-xs" />
            </div>
            <Skeleton dark variant="rect" className="w-full h-2.5 rounded-full" />
          </div>
        </div>
      </div>

      {/* 8-Stage Patient Journey Tracker Skeleton */}
      <JourneyTrackerSkeleton />

      {/* Main Grid: Left (8 cols) & Right (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Action Required Banner Skeleton */}
          <div className="p-6 rounded-3xl bg-orange-50/70 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <Skeleton variant="rect" className="w-12 h-12 rounded-2xl flex-shrink-0" />
              <div className="space-y-2">
                <Skeleton variant="text" className="w-72 h-5 rounded-md" />
                <Skeleton variant="text" className="w-96 h-4 rounded-md" />
              </div>
            </div>
            <Skeleton variant="rect" className="w-36 h-10 rounded-xl" />
          </div>

          {/* Upcoming Consultation Skeleton */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <Skeleton variant="rect" className="w-10 h-10 rounded-xl" />
                <div className="space-y-1.5">
                  <Skeleton variant="text" className="w-56 h-5 rounded-md" />
                  <Skeleton variant="text" className="w-40 h-3 rounded-xs" />
                </div>
              </div>
              <Skeleton variant="pill" className="w-24 h-6" />
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <Skeleton variant="rect" className="w-16 h-16 rounded-2xl flex-shrink-0" />
                <div className="space-y-2">
                  <Skeleton variant="text" className="w-64 h-5 rounded-md" />
                  <Skeleton variant="text" className="w-52 h-4 rounded-md" />
                  <Skeleton variant="text" className="w-44 h-3.5 rounded-xs" />
                </div>
              </div>
              <Skeleton variant="rect" className="w-40 h-10 rounded-xl" />
            </div>
          </div>

          {/* Quick Stage Shortcuts (4 cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <Skeleton variant="rect" className="w-8 h-8 rounded-lg mb-2" />
                <Skeleton variant="text" className="w-24 h-4 rounded-md" />
                <Skeleton variant="text" className="w-16 h-3 rounded-xs" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 space-y-8">
          {/* Coordinator Card Skeleton */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-5">
            <Skeleton variant="text" className="w-36 h-3 rounded-xs" />
            <div className="flex items-center gap-4">
              <Skeleton variant="circle" className="w-16 h-16 rounded-2xl" />
              <div className="space-y-2 min-w-0 flex-1">
                <Skeleton variant="text" className="w-32 h-5 rounded-md" />
                <Skeleton variant="text" className="w-40 h-3.5 rounded-xs" />
                <Skeleton variant="pill" className="w-28 h-5" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Skeleton variant="rect" className="h-10 rounded-xl" />
              <Skeleton variant="rect" className="h-10 rounded-xl" />
            </div>
          </div>

          {/* Quick Document Status Skeleton */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-4">
            <Skeleton variant="text" className="w-40 h-5 rounded-md" />
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-none">
                  <div className="space-y-1">
                    <Skeleton variant="text" className="w-36 h-4 rounded-md" />
                    <Skeleton variant="text" className="w-20 h-3 rounded-xs" />
                  </div>
                  <Skeleton variant="pill" className="w-16 h-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
