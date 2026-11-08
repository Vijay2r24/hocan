import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  FileBadge,
  FileCheck2,
  CheckCircle2,
  Clock,
  Download,
  Upload,
  AlertCircle,
  Building,
  User,
  ArrowRight,
  ShieldCheck,
  Printer
} from 'lucide-react';
import { updateVisaStatus, toggleVisaChecklist } from '../../store/journeySlice';
import { addNotification } from '../../store/notificationSlice';
import { useToast } from '../../components/common/ToastNotification';
import StatusBadge from '../../components/common/StatusBadge';
import confetti from 'canvas-confetti';
import { VisaPageSkeleton } from '../../components/skeletons';

export default function MedicalVisaStagePage() {
  const { visa, quotation } = useSelector((state) => state.journey);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [showValLetterModal, setShowValLetterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related visa skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <VisaPageSkeleton />;
  }

  const visaStatuses = [
    'Not Started',
    'Documents Pending',
    'Under Review',
    'Submitted',
    'Approved'
  ];

  const handleStatusChange = (newStatus) => {
    dispatch(updateVisaStatus(newStatus));
    dispatch(
      addNotification({
        title: `Visa Status: ${newStatus}`,
        message: `Your Indian e-Medical Visa application has moved to "${newStatus}".`,
        type: 'visa',
        link: '/patient/journey/visa'
      })
    );
    showToast(`Medical Visa status updated to: ${newStatus}`, 'success');

    if (newStatus === 'Approved') {
      try {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  const handleChecklistClick = (index) => {
    dispatch(toggleVisaChecklist(index));
  };

  const currentIdx = visaStatuses.indexOf(visa.currentStatus);

  return (
    <div data-aos="fade-up" className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#073B57]/10 text-[#073B57]">
              Stage 4 of 8
            </span>
            <span className="text-xs text-slate-400">• Indian e-Medical Visa Facilitation</span>
          </div>
          <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
            Medical Visa (e-Med Visa) Assistance
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Official Hospital Visa Assistance Letter (VAL), Embassy paperwork, checklist and application tracking.
          </p>
        </div>

        <StatusBadge status={visa.currentStatus} className="text-sm px-4 py-1.5" />
      </div>

      {/* Visa Status Progress Timeline */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
        <h3 className="font-display font-bold text-base text-[#073B57]">
          Medical Visa Application Status Timeline
        </h3>

        <div className="relative flex items-center justify-between">
          <div className="absolute top-5 left-5 right-5 h-1 bg-slate-100 -z-0">
            <div
              className="h-full bg-[#16A36A] transition-all duration-500 rounded-full"
              style={{
                width: `${Math.max(0, (currentIdx / (visaStatuses.length - 1)) * 100)}%`
              }}
            />
          </div>

          {visaStatuses.map((st, idx) => {
            const isCompleted = idx <= currentIdx;
            const isCurrent = idx === currentIdx;

            return (
              <button
                key={st}
                onClick={() => handleStatusChange(st)}
                className="relative z-10 flex flex-col items-center group focus:outline-hidden"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all shadow-xs ${
                    isCurrent
                      ? 'bg-[#16A36A] text-white ring-4 ring-emerald-100 scale-110'
                      : isCompleted
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-slate-400 border border-slate-300 hover:border-slate-400'
                  }`}
                >
                  {isCompleted ? '✓' : idx + 1}
                </div>
                <span
                  className={`text-[11px] font-bold mt-2 text-center max-w-[80px] leading-tight ${
                    isCurrent
                      ? 'text-emerald-700'
                      : isCompleted
                      ? 'text-slate-800'
                      : 'text-slate-400'
                  }`}
                >
                  {st}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hospital Visa Assistance Letter (VAL) Preview Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF791B] flex-shrink-0 shadow-xs">
            <FileCheck2 className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-lg text-[#073B57]">
                Official Hospital Visa Assistance Letter (VAL)
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                Ready for Download
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              Reference: {visa.hospitalLetterRef} • Issued by {visa.hospitalName}
            </p>
            <p className="text-xs text-slate-600 mt-2 max-w-xl leading-relaxed">
              This institutional letter confirms your planned admission for <strong>Robotic Knee Replacement</strong> under <strong>Dr. Ashok Rajgopal</strong>. Attach this PDF to your Indian e-Visa application for 48-hour approval.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <button
            onClick={() => setShowValLetterModal(true)}
            className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white text-xs font-bold transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>View & Download VAL</span>
          </button>
        </div>
      </div>

      {/* Document Checklist & Passenger Passport Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visa Document Checklist */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4 text-xs">
          <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Mandatory Medical Visa Document Checklist
          </h3>
          <p className="text-slate-500">
            Click items to toggle completion as you assemble your paperwork:
          </p>

          <div className="space-y-2.5">
            {visa.checklist?.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleChecklistClick(idx)}
                className={`p-3 rounded-xl border cursor-pointer flex items-center gap-3 transition-colors ${
                  item.completed
                    ? 'bg-emerald-50/50 border-emerald-200 text-slate-800'
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-white'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                    item.completed ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                  }`}
                >
                  {item.completed ? '✓' : ''}
                </div>
                <span className="font-medium flex-1">{item.item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Passport & Embassy Jurisdiction Details */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4 text-xs">
          <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
            <FileBadge className="w-5 h-5 text-[#0B5678]" />
            Traveler Details & Indian Embassy Jurisdiction
          </h3>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Primary Patient:</span>
              <span className="font-bold text-[#073B57]">{user?.fullName} ({visa.patientPassportNumber})</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Medical Attendant:</span>
              <span className="font-bold text-slate-700">{visa.attendantFullName} ({visa.attendantPassportNumber})</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Embassy Jurisdiction:</span>
              <span className="font-semibold text-slate-700">{visa.indianEmbassyJurisdiction}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Visa Category:</span>
              <span className="font-bold text-emerald-700">{visa.eMedVisaCategory}</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://indianvisaonline.gov.in/evisa/tvoa.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white py-3 rounded-xl font-bold shadow-md transition-all hover:scale-[1.01]"
            >
              <span>Apply Online on Govt Indian e-Visa Portal</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Advance to Stage 5 button */}
      <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-[#073B57]">Have you received your e-Medical Visa?</h4>
          <p className="text-xs text-slate-500">
            Once approved by the Indian Embassy, mark your visa as approved to unlock Travel & Airport Reception.
          </p>
        </div>

        <button
          onClick={() => {
            handleStatusChange('Approved');
            navigate('/patient/journey/travel');
          }}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all hover:scale-105"
        >
          Visa Approved • Proceed to Stage 5 (Travel)
        </button>
      </div>

      {/* VAL Letter Modal Preview */}
      {showValLetterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-slate-100 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <h3 className="font-display font-extrabold text-lg text-[#073B57]">
                  FORTIS MEMORIAL RESEARCH INSTITUTE
                </h3>
                <p className="text-xs text-slate-500 font-mono">Ref: {visa.hospitalLetterRef}</p>
              </div>
              <button
                onClick={() => setShowValLetterModal(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4 text-xs leading-relaxed text-slate-700">
              <div className="text-right text-[11px] text-slate-500">Date: {new Date().toLocaleDateString()}</div>

              <p>
                <strong>To:</strong><br />
                The Consular Officer / Visa Section,<br />
                High Commission of India, London, United Kingdom
              </p>

              <p className="font-bold text-center underline text-[#073B57]">
                SUBJECT: MEDICAL VISA ASSISTANCE LETTER FOR MR. MICHAEL CHEN & ATTENDANT
              </p>

              <p>
                This is to certify that <strong>Mr. Michael Chen</strong> (Passport No: <strong>{visa.patientPassportNumber}</strong>) is accepted as an inpatient at Fortis Memorial Research Institute, Gurugram, India under <strong>Dr. Ashok Rajgopal</strong> for <strong>Robotic Total Knee Replacement</strong>.
              </p>

              <p>
                The patient will be accompanied by his medical attendant and spouse, <strong>Mrs. Sarah Chen</strong> (Passport No: <strong>{visa.attendantPassportNumber}</strong>). Total estimated clinical duration in India is approximately 12 days.
              </p>

              <p>
                We kindly request you to issue a Medical Visa (MED) to the patient and Medical Attendant Visa (MEDX) to the accompanying caregiver.
              </p>

              <div className="pt-6 flex justify-between items-end text-[11px]">
                <div>
                  <p className="font-bold text-[#073B57]">Dr. Ashok Rajgopal</p>
                  <p>Chief Orthopedic Director</p>
                  <p>Fortis Memorial Research Institute</p>
                </div>
                <div className="border border-emerald-600 px-3 py-1 rounded text-emerald-700 font-bold">
                  OFFICIAL HOSPITAL SEAL VERIFIED
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowValLetterModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  window.print();
                }}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#073B57] text-white text-xs font-bold"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Official Letter</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
