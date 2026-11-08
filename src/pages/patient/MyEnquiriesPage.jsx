import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FileText,
  Plus,
  Clock,
  Building,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';
import EmptyState from '../../components/common/EmptyState';
import { EnquiryListSkeleton } from '../../components/skeletons';
import { Sparkles } from 'lucide-react';

export default function MyEnquiriesPage() {
  const { enquiries } = useSelector((state) => state.enquiry);
  const enquiryList = Array.isArray(enquiries) ? enquiries : [];
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related enquiry skeletons on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <EnquiryListSkeleton rows={3} fullPage={true} />;
  }

  return (
    <div data-aos="fade-up" className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
            My Medical Enquiries
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Track status of your submitted clinical inquiries and specialist hospital reviews.
          </p>
        </div>

        <Link
          to="/patient/journey/enquiry"
          className="inline-flex items-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md transition-all hover:scale-105"
        >
          <Plus className="w-4 h-4" />
          <span>Submit New Enquiry</span>
        </Link>
      </div>

      {/* Enquiries List */}
      {enquiryList.length === 0 ? (
        <EmptyState
          icon={FileText}
          title="No Medical Enquiries Yet"
          description="Submit your first medical inquiry along with MRI or lab reports to receive hospital quotations."
          actionText="Submit Medical Enquiry"
          actionLink="/patient/journey/enquiry"
        />
      ) : (
        <div className="space-y-4">
          {enquiryList.map((enq) => (
            <div
              key={enq.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-[#073B57] bg-slate-100 px-2.5 py-1 rounded-md">
                    {enq.id}
                  </span>
                  <StatusBadge status={enq.status} />
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Submitted: {enq.date}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-[#073B57]">
                  {enq.condition || enq.preferredTreatment}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {enq.symptoms || enq.medicalHistory || 'Case under specialist evaluation.'}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-1">
                  <span>Speciality: <strong className="text-slate-700">{enq.speciality}</strong></span>
                  <span>Hospital: <strong className="text-slate-700">{enq.preferredHospital || 'Multi-Hospital Review'}</strong></span>
                  <span>Reports: <strong className="text-[#0B5678]">{enq.documentsCount || 2} files uploaded</strong></span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedEnquiry(enq)}
                  className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
                >
                  View Details
                </button>
                <Link
                  to="/patient/journey/confirmation"
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white text-xs font-bold transition-colors"
                >
                  <span>View Quotation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Enquiry Details Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#FF791B] uppercase">
                  Enquiry Reference
                </span>
                <h3 className="font-bold text-lg text-[#073B57]">{selectedEnquiry.id}</h3>
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <p><strong>Primary Condition:</strong> {selectedEnquiry.condition}</p>
                <p><strong>Medical Speciality:</strong> {selectedEnquiry.speciality}</p>
                <p><strong>Submission Date:</strong> {selectedEnquiry.date}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-700 mb-1">Symptoms Described:</h4>
                <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {selectedEnquiry.symptoms || 'None specified.'}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-700 mb-1">Medical Board Notes:</h4>
                <p className="text-emerald-800 leading-relaxed bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                  {selectedEnquiry.notes || 'Evaluated by Dr. Ashok Rajgopal team. Patient is suitable for robotic knee arthroplasty.'}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-2">
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <Link
                to="/patient/journey/confirmation"
                onClick={() => setSelectedEnquiry(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#FF791B] text-white"
              >
                Open Treatment Plan
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
