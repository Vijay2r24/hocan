import React from 'react';
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
  Sparkles
} from 'lucide-react';
import { JOURNEY_STAGES } from '../../data/mockData';
import { setStage } from '../../store/journeySlice';

const iconMap = {
  FileText,
  Video,
  FileCheck2,
  FileBadge,
  Plane,
  Stethoscope,
  HeartPulse,
  Home
};

export default function JourneyProgressTracker({ compact = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentStage } = useSelector((state) => state.journey);

  const handleStageClick = (stage) => {
    navigate(stage.path);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 mb-8">
      {/* Title & Progress Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF791B]/15 text-[#FF791B] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Patient Treatment Path
            </span>
            <span className="text-xs text-slate-400 font-semibold">• 8 Guided Steps to Recovery</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#073B57] mt-1.5">
            Your Medical Journey to India
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Follow each stage from initial inquiry to your safe return home with full telemedicine follow-up.
          </p>
        </div>

        <div className="flex items-center gap-3.5 self-start sm:self-auto bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
          <div className="text-right">
            <span className="text-xs font-semibold text-slate-500 block">Overall Status</span>
            <span className="text-sm font-bold text-[#073B57]">
              Stage {currentStage} of 8
            </span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-[#073B57] text-white flex items-center justify-center font-display font-extrabold text-lg shadow-sm">
            {Math.round((currentStage / 8) * 100)}%
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Tracker */}
      <div className="hidden xl:block">
        <div className="relative flex items-center justify-between">
          {/* Connecting line */}
          <div className="absolute top-7 left-7 right-7 h-1.5 bg-slate-100 -z-0 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-[#073B57] via-[#0B5678] to-[#FF791B] transition-all duration-500 rounded-full"
              style={{
                width: `${((currentStage - 1) / 7) * 100}%`
              }}
            />
          </div>

          {JOURNEY_STAGES.map((stage) => {
            const Icon = iconMap[stage.iconName] || FileText;
            const isCompleted = stage.id < currentStage;
            const isCurrent = stage.id === currentStage;

            return (
              <button
                key={stage.id}
                onClick={() => handleStageClick(stage)}
                className="relative z-10 flex flex-col items-center group focus:outline-hidden cursor-pointer"
              >
                {/* Node Circle */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                    isCompleted
                      ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                      : isCurrent
                      ? 'bg-[#FF791B] text-white ring-4 ring-orange-200 shadow-orange-500/30 scale-110 animate-pulse-soft'
                      : 'bg-white text-slate-400 border-2 border-slate-200 group-hover:border-[#073B57] group-hover:text-[#073B57]'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6 stroke-[3]" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>

                {/* Stage Badge & Label */}
                <span
                  className={`text-xs font-bold uppercase tracking-wider mt-3 transition-colors ${
                    isCurrent
                      ? 'text-[#FF791B]'
                      : isCompleted
                      ? 'text-emerald-700'
                      : 'text-slate-400'
                  }`}
                >
                  {stage.badge}
                </span>
                <span
                  className={`text-sm font-bold text-center max-w-[105px] leading-snug mt-0.5 ${
                    isCurrent
                      ? 'text-[#073B57]'
                      : isCompleted
                      ? 'text-slate-800'
                      : 'text-slate-500'
                  }`}
                >
                  {stage.shortTitle}
                </span>
                <span className="text-xs text-slate-400 mt-1">{stage.estTime}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tablet & Mobile Grid */}
      <div className="xl:hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {JOURNEY_STAGES.map((stage) => {
            const Icon = iconMap[stage.iconName] || FileText;
            const isCompleted = stage.id < currentStage;
            const isCurrent = stage.id === currentStage;

            return (
              <button
                key={stage.id}
                onClick={() => handleStageClick(stage)}
                className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                  isCurrent
                    ? 'bg-orange-50/80 border-[#FF791B] ring-1 ring-[#FF791B] shadow-xs'
                    : isCompleted
                    ? 'bg-emerald-50/50 border-emerald-200'
                    : 'bg-slate-50/70 border-slate-200 hover:bg-white'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold ${
                    isCompleted
                      ? 'bg-emerald-600 text-white'
                      : isCurrent
                      ? 'bg-[#FF791B] text-white'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {isCompleted ? <Check className="w-5 h-5 stroke-[2.5]" /> : stage.id}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold uppercase text-slate-400">{stage.badge}</span>
                    {isCurrent && (
                      <span className="w-2 h-2 rounded-full bg-[#FF791B] animate-ping" />
                    )}
                  </div>
                  <h5 className="font-bold text-sm text-[#073B57] truncate mt-0.5">{stage.shortTitle}</h5>
                  <p className="text-xs text-slate-500 truncate">{stage.estTime}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
