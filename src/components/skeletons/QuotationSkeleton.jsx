import React from 'react';
import Skeleton from '../common/Skeleton';

export default function QuotationSkeleton() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Stage 3 Header Skeleton */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton variant="pill" className="w-24 h-5" />
          <Skeleton variant="text" className="w-80 h-4" />
        </div>
        <Skeleton variant="text" className="w-96 max-w-full h-8 rounded-lg" />
        <Skeleton variant="text" className="w-128 max-w-full h-4 rounded-md" />
      </div>

      {/* Main Quotation Card Skeleton - Pin to Pin Match */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        {/* Navy Header Banner Skeleton */}
        <div className="p-6 bg-[#073B57] text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-1">
              <Skeleton variant="pill" dark className="w-32 h-5" />
              <Skeleton variant="text" dark className="w-56 h-3.5 rounded-md" />
            </div>
            <Skeleton variant="text" dark className="w-80 sm:w-96 h-7 rounded-lg" />
            <Skeleton variant="text" dark className="w-96 max-w-full h-3.5 rounded-md" />
          </div>

          {/* Currency Switcher & Printable View Skeleton */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl border border-white/20">
              {['USD', 'GBP', 'EUR', 'AED', 'INR'].map((curr) => (
                <Skeleton key={curr} variant="rect" dark className="w-10 h-6 rounded-lg" />
              ))}
            </div>
            <Skeleton variant="rect" dark className="w-28 h-8 rounded-xl" />
          </div>
        </div>

        {/* 3 Summary Cards Grid Skeleton */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/60 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Partner Hospital */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton variant="circle" className="w-4 h-4 rounded-md" />
              <Skeleton variant="text" className="w-28 h-3 rounded-md" />
            </div>
            <Skeleton variant="text" className="w-48 h-5 rounded-md" />
            <Skeleton variant="text" className="w-36 h-3.5 rounded-md" />
          </div>

          {/* Chief Surgeon */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton variant="circle" className="w-4 h-4 rounded-md" />
              <Skeleton variant="text" className="w-24 h-3 rounded-md" />
            </div>
            <Skeleton variant="text" className="w-40 h-5 rounded-md" />
            <Skeleton variant="text" className="w-52 h-3.5 rounded-md" />
          </div>

          {/* Estimated Stay */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton variant="circle" className="w-4 h-4 rounded-md" />
              <Skeleton variant="text" className="w-24 h-3 rounded-md" />
            </div>
            <Skeleton variant="text" className="w-44 h-5 rounded-md" />
            <Skeleton variant="text" className="w-48 h-3.5 rounded-md" />
          </div>
        </div>

        {/* Itemized Hospital Cost Breakdown Table Skeleton */}
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Skeleton variant="circle" className="w-5 h-5 rounded-md" />
              <Skeleton variant="text" className="w-64 h-5 rounded-md" />
            </div>
            <Skeleton variant="pill" className="w-28 h-5" />
          </div>

          {/* Table Container */}
          <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white">
            {/* Table Header */}
            <div className="bg-slate-50 p-4 border-b border-slate-200/80 grid grid-cols-12 gap-4">
              <Skeleton variant="text" className="col-span-4 h-3.5 rounded-md" />
              <Skeleton variant="text" className="col-span-5 h-3.5 rounded-md" />
              <Skeleton variant="text" className="col-span-3 h-3.5 rounded-md ml-auto w-24" />
            </div>

            {/* Table Rows (5 itemized rows) */}
            <div className="divide-y divide-slate-100">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div key={idx} className="p-4 grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-4 space-y-1">
                    <Skeleton variant="text" className="w-36 h-4 rounded-md" />
                    <Skeleton variant="text" className="w-24 h-3 rounded-md" />
                  </div>
                  <Skeleton variant="text" className="col-span-5 h-3.5 rounded-md w-5/6" />
                  <Skeleton variant="text" className="col-span-3 h-4 rounded-md w-20 ml-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* Living Expenses Section Header */}
          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Skeleton variant="circle" className="w-5 h-5 rounded-md" />
              <Skeleton variant="text" className="w-56 h-5 rounded-md" />
            </div>
          </div>

          {/* Living Expenses Mini Table */}
          <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white divide-y divide-slate-100">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-4 items-center">
                <Skeleton variant="text" className="col-span-4 h-4 rounded-md w-40" />
                <Skeleton variant="text" className="col-span-5 h-3.5 rounded-md w-3/4" />
                <Skeleton variant="text" className="col-span-3 h-4 rounded-md w-16 ml-auto" />
              </div>
            ))}
          </div>

          {/* Total Cost Highlight Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 border border-orange-200/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton variant="text" className="w-48 h-5 rounded-md" />
                <Skeleton variant="pill" className="w-36 h-5" />
              </div>
              <Skeleton variant="text" className="w-64 h-3.5 rounded-md" />
            </div>
            <div className="flex items-center gap-4">
              <Skeleton variant="text" className="w-36 h-9 rounded-lg" />
              <Skeleton variant="pill" className="w-28 h-7" />
            </div>
          </div>

          {/* Action Buttons Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <Skeleton variant="pill" className="w-36 h-10" />
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Skeleton variant="pill" className="w-40 h-11 flex-1 sm:flex-none" />
              <Skeleton variant="pill" className="w-48 h-11 flex-1 sm:flex-none bg-[#FF791B]/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
