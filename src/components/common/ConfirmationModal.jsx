import React from 'react';
import { X, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you wish to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'primary', // primary, danger, success
  children
}) {
  if (!isOpen) return null;

  let btnColor = 'bg-[#FF791B] hover:bg-[#e6680f] text-white';
  let icon = <AlertTriangle className="w-6 h-6 text-[#FF791B]" />;

  if (type === 'danger') {
    btnColor = 'bg-rose-600 hover:bg-rose-700 text-white';
    icon = <AlertTriangle className="w-6 h-6 text-rose-600" />;
  } else if (type === 'success') {
    btnColor = 'bg-[#16A36A] hover:bg-emerald-700 text-white';
    icon = <CheckCircle2 className="w-6 h-6 text-[#16A36A]" />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
              {icon}
            </div>
            <h3 className="font-bold text-lg text-[#073B57]">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-sm text-slate-600 leading-relaxed mb-4">{message}</p>
          {children}
        </div>

        <div className="flex items-center justify-end gap-3 p-5 bg-slate-50 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 transition-colors"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-all ${btnColor}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
