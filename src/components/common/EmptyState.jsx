import React from 'react';
import { FileQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmptyState({
  icon: Icon = FileQuestion,
  title = 'No Records Found',
  description = 'There are no active records in this section yet.',
  actionText,
  actionLink,
  onAction
}) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-2xl border border-dashed border-slate-200">
      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-4 shadow-sm">
        <Icon className="w-8 h-8 text-[#0B5678]" />
      </div>
      <h3 className="text-base font-semibold text-[#073B57] mb-1">{title}</h3>
      <p className="text-sm text-slate-500 max-w-sm mb-6">{description}</p>
      {actionText && actionLink && (
        <Link
          to={actionLink}
          className="inline-flex items-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105"
        >
          {actionText}
        </Link>
      )}
      {actionText && onAction && !actionLink && (
        <button
          onClick={onAction}
          className="inline-flex items-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}
