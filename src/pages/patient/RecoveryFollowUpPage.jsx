import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Activity,
  Calendar,
  CheckCircle2,
  FileText,
  Clock,
  Apple,
  Dumbbell,
  ArrowRight
} from 'lucide-react';
import RecoveryTrackerChart from '../../components/journey/RecoveryTrackerChart';
import { RecoverySkeleton } from '../../components/skeletons';

export default function RecoveryFollowUpPage() {
  const { recovery } = useSelector((state) => state.journey);
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related recovery skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <RecoverySkeleton />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#16A36A]/10 text-[#16A36A]">
              Stage 7 of 8
            </span>
            <span className="text-xs text-slate-400">• Post-Operative Rehabilitation</span>
          </div>
          <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
            Recovery, Physiotherapy & Follow-up
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Monitor healing progression, joint flexion angles, daily physical therapy exercises, and dietary guidelines.
          </p>
        </div>

        <Link
          to="/patient/consultations"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white text-xs font-bold transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 text-[#FF791B]" />
          <span>Book Follow-up Doctor OPD</span>
        </Link>
      </div>

      {/* Recovery Score Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">Recovery Score</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-display font-extrabold text-emerald-700">
              {recovery.recoveryScore}%
            </span>
            <span className="text-[11px] text-emerald-600 font-bold">Excellent Healing</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${recovery.recoveryScore}%` }} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">Mobility Progression</span>
          <p className="font-bold text-xs text-[#073B57]">{recovery.mobilityIndex}</p>
          <p className="text-[10px] text-slate-400 mt-1">Independent stairs climbing targeted</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">Joint Flexion Range</span>
          <p className="font-bold text-xs text-[#073B57]">{recovery.kneeFlexionDegree}</p>
          <p className="text-[10px] text-emerald-600 font-semibold mt-1">Normal anatomical range</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400">Current Pain Level</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-display font-extrabold text-[#073B57]">
              {recovery.painLevel}
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Well controlled with oral medication</p>
        </div>
      </div>

      {/* Recovery Chart */}
      <RecoveryTrackerChart />

      {/* Physiotherapy Exercises & Dietary Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Physiotherapy Exercise Plan */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4 text-xs">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-[#FF791B]" />
              Supervised Physical Rehabilitation Exercises
            </h3>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Physio: Dr. Alok Kumar
            </span>
          </div>

          <div className="space-y-2.5">
            {recovery.physioExercises?.map((ex, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-4"
              >
                <div>
                  <h4 className="font-bold text-[#073B57]">{ex.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{ex.frequency}</p>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    ex.status === 'Completed' || ex.status === 'Mastered'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {ex.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Post-Op Dietary & Activity Guidelines */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4 text-xs">
          <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
            <Apple className="w-5 h-5 text-emerald-600" />
            Post-Op Clinical & Nutritional Guidelines
          </h3>

          <ul className="space-y-2.5">
            {recovery.dietaryGuidelines?.map((g, idx) => (
              <li
                key={idx}
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-slate-700 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
