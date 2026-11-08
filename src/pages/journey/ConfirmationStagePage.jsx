import React, { useState, useEffect } from 'react';
import TreatmentQuotation from '../../components/journey/TreatmentQuotation';
import { QuotationSkeleton } from '../../components/skeletons';
import { Sparkles } from 'lucide-react';

export default function ConfirmationStagePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related quotation skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <QuotationSkeleton />;
  }

  return (
    <div data-aos="fade-up" className="space-y-6 max-w-5xl mx-auto">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FF791B]/10 text-[#FF791B]">
            Stage 3 of 8
          </span>
          <span className="text-xs text-slate-400">• Institutional Treatment Plan & Financial Confirmation</span>
        </div>
        <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
          Treatment Plan Confirmation & Quotation
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Review your itemized surgical package, living expenses, and implant specifications. Accept your quotation to unlock Stage 4 (Medical Visa).
        </p>
      </div>

      <TreatmentQuotation />
    </div>
  );
}
