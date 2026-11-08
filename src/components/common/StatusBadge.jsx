import React from 'react';

export default function StatusBadge({ status, className = '' }) {
  let colorStyles = 'bg-slate-100 text-slate-700 border-slate-200';

  const normalized = (status || '').toLowerCase();

  if (
    normalized.includes('approved') ||
    normalized.includes('completed') ||
    normalized.includes('accepted') ||
    normalized.includes('verified') ||
    normalized.includes('confirmed')
  ) {
    colorStyles = 'bg-emerald-50 text-emerald-700 border-emerald-200';
  } else if (
    normalized.includes('pending') ||
    normalized.includes('review') ||
    normalized.includes('progress') ||
    normalized.includes('revision')
  ) {
    colorStyles = 'bg-amber-50 text-amber-700 border-amber-200';
  } else if (
    normalized.includes('urgent') ||
    normalized.includes('rejected') ||
    normalized.includes('cancelled')
  ) {
    colorStyles = 'bg-rose-50 text-rose-700 border-rose-200';
  } else if (
    normalized.includes('submitted') ||
    normalized.includes('ready') ||
    normalized.includes('scheduled')
  ) {
    colorStyles = 'bg-sky-50 text-sky-700 border-sky-200';
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${colorStyles} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
      {status}
    </span>
  );
}
