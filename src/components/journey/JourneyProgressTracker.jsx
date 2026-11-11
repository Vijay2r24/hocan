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
  UploadCloud,
  Globe,
  MessageSquareCheck,
  DollarSign,
  Zap,
  Users,
  Smartphone,
  HeartHandshake,
  Award,
  UserCheck,
  Utensils,
  PlaneTakeoff,
  Pill
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

// Visual-first, low-text data for the 8 medical journey milestones
const STAGE_VISUALS = {
  1: {
    title: 'Medical Enquiry & Scan Review',
    tagline: 'Upload your scans from home and get a free specialist review within 4 hours.',
    timeline: 'Day 1',
    badge: '100% Free Second Opinion',
    image: '/images/journey/stage-1-enquiry.jpg',
    actionText: 'Submit Free Enquiry',
    iconCards: [
      {
        icon: UploadCloud,
        color: 'bg-blue-50 text-blue-600 border-blue-200/80',
        title: 'Upload Scans',
        desc: 'MRI, CT & blood reports'
      },
      {
        icon: Clock,
        color: 'bg-amber-50 text-amber-600 border-amber-200/80',
        title: '4-Hour Review',
        desc: 'Senior surgical board'
      },
      {
        icon: ShieldCheck,
        color: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
        title: 'Zero Fees',
        desc: 'Free preliminary opinion'
      }
    ]
  },
  2: {
    title: 'Surgeon Video Consultation',
    tagline: 'Face-to-face HD telemedicine conference with your operating surgeon.',
    timeline: 'Day 2 – 3',
    badge: 'Telemedicine Call',
    image: '/images/journey/stage-2-consultation.jpg',
    actionText: 'Book Video Call',
    iconCards: [
      {
        icon: Video,
        color: 'bg-sky-50 text-sky-600 border-sky-200/80',
        title: 'Chief Surgeon Call',
        desc: 'Direct video conference'
      },
      {
        icon: Globe,
        color: 'bg-purple-50 text-purple-600 border-purple-200/80',
        title: 'Free Translators',
        desc: 'Arabic, French & Russian'
      },
      {
        icon: MessageSquareCheck,
        color: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
        title: 'Treatment Advice',
        desc: 'Robotic & implant plans'
      }
    ]
  },
  3: {
    title: 'Transparent Plan & Quotation',
    tagline: 'Itemized institutional hospital quotation with zero hidden markups.',
    timeline: 'Day 3 – 5',
    badge: 'Fixed Price Guarantee',
    image: '/images/journey/stage-3-quote.jpg',
    actionText: 'Review Quotation',
    iconCards: [
      {
        icon: DollarSign,
        color: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
        title: '0% Agency Markup',
        desc: 'Pay direct to hospital'
      },
      {
        icon: Sparkles,
        color: 'bg-orange-50 text-orange-600 border-orange-200/80',
        title: 'All-Inclusive',
        desc: 'Surgeon, theater & suite'
      },
      {
        icon: CheckCircle2,
        color: 'bg-blue-50 text-blue-600 border-blue-200/80',
        title: 'Zero Deposit',
        desc: 'No advance fee to accept'
      }
    ]
  },
  4: {
    title: 'Medical Visa (VAL) Assistance',
    tagline: 'Official hospital invitation letter issued in 24 hours for fast e-Visa approval.',
    timeline: 'Day 5 – 8',
    badge: '24h Fast Issuance',
    image: '/images/journey/stage-4-visa.jpg',
    actionText: 'Track Visa Process',
    iconCards: [
      {
        icon: Zap,
        color: 'bg-amber-50 text-amber-600 border-amber-200/80',
        title: '24-Hour Issuance',
        desc: 'Official hospital letter'
      },
      {
        icon: Users,
        color: 'bg-blue-50 text-blue-600 border-blue-200/80',
        title: '2 Attendants',
        desc: 'Family visas included'
      },
      {
        icon: ShieldCheck,
        color: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
        title: 'FRRO Police Desk',
        desc: 'Handled on arrival'
      }
    ]
  },
  5: {
    title: 'VIP Airport Welcome & Stay',
    tagline: 'Private chauffeur at airport terminal and serviced apartment near hospital.',
    timeline: 'Day 9 – 10',
    badge: 'Complimentary Chauffeur',
    image: '/images/journey/stage-5-travel.jpg',
    actionText: 'View Arrival Logistics',
    iconCards: [
      {
        icon: Plane,
        color: 'bg-sky-50 text-sky-600 border-sky-200/80',
        title: 'Private Chauffeur',
        desc: 'Meet & greet at terminal'
      },
      {
        icon: Smartphone,
        color: 'bg-purple-50 text-purple-600 border-purple-200/80',
        title: 'Free 5G SIM Card',
        desc: 'Wheelchair assistance ready'
      },
      {
        icon: Home,
        color: 'bg-orange-50 text-orange-600 border-orange-200/80',
        title: 'Serviced Suite',
        desc: '300m walk to hospital'
      }
    ]
  },
  6: {
    title: 'Hospital Surgery & Treatment',
    tagline: 'Advanced robotic precision surgery with a dedicated bedside care coordinator.',
    timeline: 'Day 11 – 18',
    badge: 'JCI Accredited OT',
    image: '/images/journey/stage-6-surgery.jpg',
    actionText: 'Explore Hospital Care',
    iconCards: [
      {
        icon: Stethoscope,
        color: 'bg-blue-50 text-blue-600 border-blue-200/80',
        title: 'Robotic Surgery',
        desc: 'Da Vinci & Mako precision'
      },
      {
        icon: HeartHandshake,
        color: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
        title: 'Bedside Manager',
        desc: '24/7 care coordinator'
      },
      {
        icon: Award,
        color: 'bg-amber-50 text-amber-600 border-amber-200/80',
        title: 'Deluxe Suite',
        desc: 'Attendant bed & Wi-Fi'
      }
    ]
  },
  7: {
    title: 'Supervised Recovery & Rehab',
    tagline: 'Targeted physical therapy, surgeon check-ups, and customized nutrition.',
    timeline: 'Day 19 – 25',
    badge: 'Personalized Rehab',
    image: '/images/journey/stage-7-recovery.jpg',
    actionText: 'View Recovery Steps',
    iconCards: [
      {
        icon: HeartPulse,
        color: 'bg-rose-50 text-rose-600 border-rose-200/80',
        title: 'Daily Physiotherapy',
        desc: 'Safe mobility recovery'
      },
      {
        icon: UserCheck,
        color: 'bg-sky-50 text-sky-600 border-sky-200/80',
        title: 'Doctor Rounds',
        desc: 'Daily surgeon evaluations'
      },
      {
        icon: Utensils,
        color: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
        title: 'Custom Diets',
        desc: 'Halal, veg & cultural meals'
      }
    ]
  },
  8: {
    title: 'Safe Return Home & Follow-up',
    tagline: 'Official Fit-to-Fly certificate and 6 months continuous telemedicine follow-up.',
    timeline: 'Day 26+',
    badge: 'Fit-to-Fly Clearance',
    image: '/images/journey/stage-8-return.jpg',
    actionText: 'View Follow-up Plan',
    iconCards: [
      {
        icon: PlaneTakeoff,
        color: 'bg-blue-50 text-blue-600 border-blue-200/80',
        title: 'Fit-to-Fly Letter',
        desc: 'Airline flight clearance'
      },
      {
        icon: Pill,
        color: 'bg-purple-50 text-purple-600 border-purple-200/80',
        title: '30-Day Medications',
        desc: 'Discharge pharmacy kit'
      },
      {
        icon: Video,
        color: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
        title: '6-Month Tele-Care',
        desc: 'Post-op video checkups'
      }
    ]
  }
};

export default function JourneyProgressTracker({ compact = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentStage } = useSelector((state) => state.journey);

  // Active tab/selected stage in the interactive viewer (defaults to currentStage or 1)
  const [selectedStageId, setSelectedStageId] = useState(currentStage || 1);

  const selectedStage = JOURNEY_STAGES.find((s) => s.id === selectedStageId) || JOURNEY_STAGES[0];
  const visual = STAGE_VISUALS[selectedStageId] || STAGE_VISUALS[1];

  const handleStageSelect = (stageId) => {
    setSelectedStageId(stageId);
  };

  const handleNavigateToStage = (path) => {
    navigate(path);
  };

  const progressPercent = Math.round((currentStage / 8) * 100);

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-9 shadow-lg border border-slate-200/90 transition-all duration-300">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-7 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-xs font-extrabold bg-[#FF791B]/15 text-[#FF791B] inline-flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              Patient Care Pathway
            </span>
            <span className="text-xs text-slate-400 font-semibold">• 8 Visual Steps to Recovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#073B57] tracking-tight">
            Your Medical Journey to India
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl leading-relaxed">
            Click on any milestone to see the visual roadmap, timeline, and key deliverables.
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
      <div className="mb-7">
        <div className="relative">
          {/* Background Connecting Track */}
          <div className="hidden lg:block absolute top-7 left-[6.25%] right-[6.25%] h-1 bg-slate-200/80 rounded-full z-0">
            {/* Clean Solid Progress Track (No Muddy Multi-Color Gradient) */}
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-700 ease-out"
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
                  className={`flex flex-col items-center p-2.5 sm:p-3 rounded-2xl transition-all duration-200 text-center cursor-pointer group focus:outline-hidden ${
                    isSelected
                      ? 'bg-white shadow-md shadow-slate-200/80 border border-slate-200/90 -translate-y-1'
                      : 'hover:bg-slate-50/80 hover:-translate-y-0.5'
                  }`}
                  aria-label={`View details for Stage ${stage.id}: ${stage.title}`}
                >
                  {/* Step Icon Badge */}
                  <div
                    className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                      isCompleted
                        ? 'bg-emerald-50 text-emerald-600 border-2 border-emerald-400/90 shadow-2xs group-hover:bg-emerald-100/80'
                        : isCurrent
                        ? 'bg-orange-50 text-[#FF791B] border-2 border-[#FF791B] ring-4 ring-orange-100 shadow-sm'
                        : 'bg-white text-slate-400 border border-slate-200 shadow-2xs group-hover:border-slate-300 group-hover:text-slate-600'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}

                    {/* Active Pulsing Indicator for Current Milestone */}
                    {isCurrent && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF791B] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF791B] border-2 border-white"></span>
                      </span>
                    )}
                  </div>

                  {/* Stage Tag */}
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider mt-2.5 px-2 py-0.5 rounded-full transition-colors ${
                      isCurrent
                        ? 'bg-[#FF791B] text-white shadow-2xs'
                        : isCompleted
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/70'
                        : 'text-slate-400 bg-slate-100/60'
                    }`}
                  >
                    Stage 0{stage.id}
                  </span>

                  {/* Title & Timeline */}
                  <span
                    className={`text-xs font-bold leading-tight mt-1 line-clamp-1 transition-colors ${
                      isCurrent
                        ? 'text-[#FF791B]'
                        : isSelected
                        ? 'text-[#073B57] font-black'
                        : isCompleted
                        ? 'text-slate-800'
                        : 'text-slate-500'
                    }`}
                  >
                    {stage.shortTitle}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {stage.estTime}
                  </span>

                  {/* Sleek Selection Indicator Bar */}
                  <div
                    className={`w-5 h-1 rounded-full mt-2 transition-all duration-300 ${
                      isSelected ? 'bg-[#FF791B]' : 'bg-transparent'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visual Stage Showcase Card (Visual Image + 3 Icon Cards - Low Text Design) */}
      <div className="bg-slate-50/80 rounded-2xl sm:rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
          {/* Left Column: Rich Visual Image (5 Cols) */}
          <div className="lg:col-span-5 relative aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-md group">
            <img
              src={visual.image}
              alt={visual.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-3 py-1 rounded-xl bg-[#073B57]/90 text-white text-xs font-black backdrop-blur-xs shadow-xs">
                Stage 0{selectedStage.id}
              </span>
              <span className="px-3 py-1 rounded-xl bg-white/95 text-[#073B57] text-xs font-bold backdrop-blur-xs shadow-xs flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FF791B]" />
                {visual.timeline}
              </span>
            </div>

            {/* Bottom Badge */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg bg-[#FF791B] text-white text-xs font-bold shadow-xs">
                {visual.badge}
              </span>
              {selectedStage.id < currentStage && (
                <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-xs flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  Done
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Visual Icon Highlights & Action (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#FF791B]">
                  Stage 0{selectedStage.id} of 08
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-black text-[#073B57] leading-tight">
                {visual.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-medium">
                {visual.tagline}
              </p>
            </div>

            {/* 3 Visual Icon Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {visual.iconCards.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-[#FF791B]/40 transition-all flex flex-col justify-between"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-2.5 ${item.color}`}>
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-xs text-[#073B57]">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Bar & Quick Nav */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-200/70">
              <button
                type="button"
                onClick={() => handleNavigateToStage(selectedStage.path)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 transition-all hover:scale-102 cursor-pointer"
              >
                <span>{visual.actionText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  disabled={selectedStageId === 1}
                  onClick={() => handleStageSelect(Math.max(1, selectedStageId - 1))}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 py-2 px-3.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>
                <button
                  type="button"
                  disabled={selectedStageId === 8}
                  onClick={() => handleStageSelect(Math.min(8, selectedStageId + 1))}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 py-2 px-3.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
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
