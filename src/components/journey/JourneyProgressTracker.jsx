import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  FileText,
  Video,
  FileCheck2,
  FileBadge,
  Plane,
  Stethoscope,
  HeartPulse,
  Home,
  Check,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Calendar,
  Lock
} from 'lucide-react';
import { JOURNEY_STAGES } from '../../data/mockData';
import { setStage } from '../../store/journeySlice';

const iconMap = {
  FileText,
  Video,
  FileCheck2,
  CheckCircle2,
  FileBadge,
  Plane,
  Stethoscope,
  HeartPulse,
  Home
};

// Rich details for each milestone
const STAGE_DETAILS = {
  1: {
    subtitle: 'From the comfort of your home',
    timeline: 'Day 1 • 100% Complimentary',
    deliverable: 'Free Clinical Second Opinion & Estimate',
    actionLabel: 'Start Stage 1 Enquiry',
    highlights: [
      'Upload your MRI, CT scans, and diagnostic reports to our HIPAA-compliant portal',
      'Multidisciplinary clinical board review within 4 to 6 hours',
      'Receive preliminary doctor assessments and hospital options at zero cost'
    ]
  },
  2: {
    subtitle: 'Face-to-face telemedicine conference',
    timeline: 'Day 2 – 3 • Tele-Consultation',
    deliverable: 'Chief Surgeon Recommendation & Case Plan',
    actionLabel: 'Book Surgeon Consultation',
    highlights: [
      'Direct HD video call with your chief operating surgeon',
      'Discuss robotic surgical approaches, implant options, and recovery time',
      'Complimentary multi-lingual interpreter assistance (Arabic, French, Russian)'
    ]
  },
  3: {
    subtitle: 'Official institutional hospital quote with 0% agency markup',
    timeline: 'Day 3 – 5 • Financial Lock',
    deliverable: 'Itemized Hospital Financial Quotation',
    actionLabel: 'Review Quotation & Treatment Plan',
    highlights: [
      'Itemized hospital package covering surgeon fees, OT, implants, and deluxe room',
      'Transparent attendant accommodation and local living expense estimates',
      'Accept quotation online with zero advance deposit to unlock Medical Visa'
    ]
  },
  4: {
    subtitle: 'Priority embassy clearance & invitation letters',
    timeline: 'Day 5 – 8 • 24h Issuance',
    deliverable: 'Official Hospital Visa Assistance Letter (VAL)',
    actionLabel: 'Track Medical Visa Process',
    highlights: [
      'Hospital issues government-registered Visa Assistance Letter within 24 hours',
      'Coverage for up to 2 family attendants under Indian Medical Attendant Visas',
      'Hokena Care liaison desk handles local FRRO police registration upon arrival'
    ]
  },
  5: {
    subtitle: 'Complimentary airport VIP reception & private transfer',
    timeline: 'Day 9 – 10 • Arrival & Check-in',
    deliverable: 'Private Airport Chauffeur & Serviced Apartment',
    actionLabel: 'View Arrival Logistics',
    highlights: [
      'Private air-conditioned chauffeur waiting at Delhi airport arrival terminal',
      'Complimentary local high-speed 5G SIM card and wheelchair escort',
      'Check-in to verified serviced apartment (300m from hospital) with kitchen'
    ]
  },
  6: {
    subtitle: 'Advanced robotic surgical intervention by leading faculty',
    timeline: 'Day 11 – 18 • Inpatient Care',
    deliverable: 'Surgical Procedure & Daily Clinical Updates',
    actionLabel: 'Explore Hospital Clinical Protocol',
    highlights: [
      'Private deluxe inpatient room with dedicated companion couch and Wi-Fi',
      'Minimally invasive & robotic precision (Da Vinci & Mako) for rapid recovery',
      'Bedside personal care manager + daily morning clinical updates to family'
    ]
  },
  7: {
    subtitle: 'Targeted physiotherapy & supervised recuperation',
    timeline: 'Day 19 – 25 • Rehabilitation',
    deliverable: 'Physiotherapy & Healing Assessment',
    actionLabel: 'View Recovery & Rehab Steps',
    highlights: [
      'Specialized physical therapy and mobility rehabilitation in guest suite',
      'Daily vital signs tracking and chief surgeon post-op review',
      'Customized cultural dietary meal planning and medication administration'
    ]
  },
  8: {
    subtitle: 'Fit-to-Fly clearance & 6-month continuous telemedicine',
    timeline: 'Day 26+ • Long-Term Healing',
    deliverable: 'Airline Fit-to-Fly Certificate & Tele-Followups',
    actionLabel: 'View Post-Care & Return Home',
    highlights: [
      'Chief surgeon issues official Airline Fit-to-Fly Medical Certificate',
      'Consolidated medical discharge summary and 30-day medication pack',
      'Scheduled video follow-ups at 2 weeks, 6 weeks, and 3 months after departure'
    ]
  }
};

export default function JourneyProgressTracker({ compact = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentStage } = useSelector((state) => state.journey);

  // Active tab/selected stage in the interactive viewer (defaults to currentStage or 3)
  const [selectedStageId, setSelectedStageId] = useState(currentStage || 3);

  const selectedStage = JOURNEY_STAGES.find((s) => s.id === selectedStageId) || JOURNEY_STAGES[2];
  const selectedDetails = STAGE_DETAILS[selectedStageId] || STAGE_DETAILS[3];

  const handleStageSelect = (stageId) => {
    setSelectedStageId(stageId);
  };

  const handleNavigateToStage = (path) => {
    navigate(path);
  };

  const progressPercent = Math.round((currentStage / 8) * 100);

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg border border-slate-200/90 transition-all duration-300">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#FF791B]/15 text-[#FF791B] inline-flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              Patient Care Pathway
            </span>
            <span className="text-xs text-slate-400 font-semibold">• 8 Milestone Steps to Full Recovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#073B57] tracking-tight">
            Your Medical Journey to India
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
            Click on any milestone below to preview clinical protocols, deliverables, and timelines from home inquiry to safe return.
          </p>
        </div>

        {/* Live Patient Journey Status Pill */}
        <div className="flex items-center gap-3.5 self-start md:self-auto bg-slate-50 hover:bg-slate-100/80 p-3 rounded-2xl border border-slate-200/80 transition-colors shadow-2xs">
          <div className="text-right">
            <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block">
              Current Patient Progress
            </span>
            <span className="text-sm font-bold text-[#073B57]">
              Stage {currentStage} of 8 • <strong className="text-[#FF791B]">{progressPercent}%</strong>
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#073B57] to-[#0B5678] text-white flex items-center justify-center font-display font-black text-base shadow-sm">
            {progressPercent}%
          </div>
        </div>
      </div>

      {/* 8-Stage Interactive Milestone Stepper (Desktop & Tablet) */}
      <div className="mb-8">
        <div className="relative">
          {/* Background Connecting Track */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-2 bg-slate-100 rounded-full z-0">
            {/* Colored Active Track */}
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-[#0B5678] to-[#FF791B] rounded-full transition-all duration-700 ease-out shadow-xs"
              style={{
                width: `${Math.min(100, Math.max(0, ((currentStage - 1) / 7) * 100))}%`
              }}
            />
          </div>

          {/* Milestone Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-2 relative z-10">
            {JOURNEY_STAGES.map((stage) => {
              const Icon = iconMap[stage.iconName] || FileText;
              const isCompleted = stage.id < currentStage;
              const isCurrent = stage.id === currentStage;
              const isSelected = stage.id === selectedStageId;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => handleStageSelect(stage.id)}
                  className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-200 text-center cursor-pointer group focus:outline-hidden ${
                    isSelected
                      ? 'bg-slate-50/90 ring-2 ring-[#FF791B] shadow-md -translate-y-1'
                      : 'hover:bg-slate-50/60 hover:-translate-y-0.5'
                  }`}
                  aria-label={`View details for Stage ${stage.id}: ${stage.title}`}
                >
                  {/* Step Icon Badge */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md relative ${
                      isCompleted
                        ? 'bg-emerald-600 text-white shadow-emerald-600/25 group-hover:bg-emerald-700'
                        : isCurrent
                        ? 'bg-gradient-to-tr from-[#FF791B] to-amber-500 text-white ring-4 ring-orange-200 shadow-orange-500/30 scale-105'
                        : isSelected
                        ? 'bg-[#073B57] text-white shadow-[#073B57]/20 ring-4 ring-slate-200'
                        : 'bg-white text-slate-500 border-2 border-slate-200/90 group-hover:border-[#073B57] group-hover:text-[#073B57]'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-6 h-6 stroke-[3]" />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}

                    {/* Active Pulsing Indicator */}
                    {isCurrent && (
                      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF791B] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
                      </span>
                    )}
                  </div>

                  {/* Stage Tag */}
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider mt-3 px-2 py-0.5 rounded-md transition-colors ${
                      isSelected
                        ? 'bg-[#073B57] text-white'
                        : isCurrent
                        ? 'bg-orange-100 text-[#FF791B]'
                        : isCompleted
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'text-slate-400'
                    }`}
                  >
                    Stage 0{stage.id}
                  </span>

                  {/* Title & Timeline */}
                  <span
                    className={`text-xs font-bold leading-tight mt-1.5 line-clamp-1 transition-colors ${
                      isSelected
                        ? 'text-[#073B57] font-black'
                        : isCurrent
                        ? 'text-[#FF791B]'
                        : isCompleted
                        ? 'text-slate-800'
                        : 'text-slate-600'
                    }`}
                  >
                    {stage.shortTitle}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {stage.estTime}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Stage Showcase Card (Expanded Preview for Selected Milestone) */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-orange-50/30 rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left: Milestone Header, Timeline & Highlights */}
          <div className="space-y-4 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-xl bg-[#073B57] text-white text-xs font-extrabold uppercase tracking-wider shadow-2xs">
                Stage 0{selectedStage.id} of 08
              </span>
              <span className="px-3 py-1 rounded-xl bg-orange-100/90 text-[#FF791B] text-xs font-bold flex items-center gap-1.5 border border-orange-200">
                <Clock className="w-3.5 h-3.5 text-[#FF791B]" />
                {selectedDetails.timeline}
              </span>
              {selectedStage.id < currentStage && (
                <span className="px-3 py-1 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Completed Milestone
                </span>
              )}
              {selectedStage.id === currentStage && (
                <span className="px-3 py-1 rounded-xl bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1.5 border border-amber-300 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Active In Progress
                </span>
              )}
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#073B57]">
                {selectedStage.title}: {selectedDetails.subtitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {selectedStage.description}
              </p>
            </div>

            {/* 3 Key Clinical Deliverables */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400 block">
                Key Milestone Deliverables & Hospital Actions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {selectedDetails.highlights.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-snug font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stage Action & Stepper Navigation Controls */}
          <div className="lg:w-64 flex flex-col justify-between gap-4 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-4 lg:pt-0 lg:pl-6 flex-shrink-0">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400 block mb-1">
                Primary Deliverable
              </span>
              <p className="text-xs font-bold text-[#073B57] bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                {selectedDetails.deliverable}
              </p>
            </div>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => handleNavigateToStage(selectedStage.path)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>{selectedDetails.actionLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Prev / Next Stage Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={selectedStageId === 1}
                  onClick={() => handleStageSelect(Math.max(1, selectedStageId - 1))}
                  className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>
                <button
                  type="button"
                  disabled={selectedStageId === 8}
                  onClick={() => handleStageSelect(Math.min(8, selectedStageId + 1))}
                  className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
