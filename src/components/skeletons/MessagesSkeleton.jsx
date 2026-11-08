import React from 'react';
import Skeleton from '../common/Skeleton';

export default function MessagesSkeleton() {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton variant="text" className="w-80 max-w-full h-8 rounded-lg" />
        <Skeleton variant="text" className="w-96 max-w-full h-4 rounded-md" />
      </div>

      {/* Chat Window Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col h-[640px]">
        {/* Top Coordinator Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton variant="circle" className="w-12 h-12 rounded-2xl" />
            <div className="space-y-1.5">
              <Skeleton variant="text" className="w-36 h-4 rounded-md" />
              <Skeleton variant="pill" className="w-20 h-3.5" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Skeleton variant="circle" className="w-9 h-9 rounded-xl" />
            <Skeleton variant="circle" className="w-9 h-9 rounded-xl" />
          </div>
        </div>

        {/* Message Thread Body */}
        <div className="flex-1 p-5 sm:p-6 space-y-4 overflow-hidden bg-slate-50/40">
          {/* Quick chips placeholder */}
          <div className="flex gap-2 pb-2 overflow-hidden">
            <Skeleton variant="pill" className="w-48 h-7 flex-shrink-0" />
            <Skeleton variant="pill" className="w-56 h-7 flex-shrink-0" />
            <Skeleton variant="pill" className="w-44 h-7 flex-shrink-0" />
          </div>

          {/* Incoming Coordinator Message */}
          <div className="flex items-start gap-3 max-w-md">
            <Skeleton variant="circle" className="w-8 h-8 rounded-xl flex-shrink-0" />
            <div className="p-4 rounded-2xl rounded-tl-xs bg-white border border-slate-200/80 space-y-2 w-full">
              <Skeleton variant="text" className="w-full h-3.5 rounded-md" />
              <Skeleton variant="text" className="w-4/5 h-3.5 rounded-md" />
              <Skeleton variant="text" className="w-20 h-2.5 rounded-md pt-1" />
            </div>
          </div>

          {/* Outgoing Patient Message */}
          <div className="flex items-start justify-end gap-3 ml-auto max-w-md">
            <div className="p-4 rounded-2xl rounded-tr-xs bg-[#073B57]/15 border border-[#073B57]/20 space-y-2 w-full">
              <Skeleton variant="text" className="w-full h-3.5 rounded-md" />
              <Skeleton variant="text" className="w-2/3 h-3.5 rounded-md" />
              <Skeleton variant="text" className="w-16 h-2.5 rounded-md ml-auto" />
            </div>
          </div>

          {/* Incoming Coordinator Message with file attachment */}
          <div className="flex items-start gap-3 max-w-md">
            <Skeleton variant="circle" className="w-8 h-8 rounded-xl flex-shrink-0" />
            <div className="p-4 rounded-2xl rounded-tl-xs bg-white border border-slate-200/80 space-y-2.5 w-full">
              <Skeleton variant="text" className="w-full h-3.5 rounded-md" />
              <div className="p-2.5 rounded-xl bg-slate-100 flex items-center gap-2">
                <Skeleton variant="rect" className="w-6 h-6 rounded-md" />
                <Skeleton variant="text" className="w-40 h-3 rounded-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Input Area */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center gap-3">
          <Skeleton variant="circle" className="w-10 h-10 rounded-xl flex-shrink-0" />
          <Skeleton variant="rect" className="flex-1 h-11 rounded-xl" />
          <Skeleton variant="circle" className="w-11 h-11 rounded-xl flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}
