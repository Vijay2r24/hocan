import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Stethoscope,
  Hospital,
  Bed,
  Calendar,
  Clock,
  User,
  Pill,
  Activity,
  FileCheck2,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import VitalsTrackerChart from '../../components/journey/VitalsTrackerChart';
import StatusBadge from '../../components/common/StatusBadge';
import { TreatmentProgressSkeleton } from '../../components/skeletons';

export default function TreatmentProgressPage() {
  const { treatment } = useSelector((state) => state.journey);
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related treatment progress skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <TreatmentProgressSkeleton />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FF791B]/10 text-[#FF791B]">
              Stage 6 of 8
            </span>
            <span className="text-xs text-slate-400">• Quaternary Inpatient Care</span>
          </div>
          <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
            Treatment & Clinical Progress in India
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Real-time inpatient updates, surgery schedule, daily doctor rounds, and medication dosage chart.
          </p>
        </div>

        <StatusBadge status={treatment.currentStatus} className="text-sm px-4 py-1.5" />
      </div>

      {/* Hospital Stay & Room Suite Details */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
          <div className="flex items-center gap-2 text-slate-400">
            <Hospital className="w-4 h-4 text-[#0B5678]" />
            <span className="uppercase font-bold tracking-wider">Hospital</span>
          </div>
          <h4 className="font-bold text-sm text-[#073B57]">{treatment.hospitalName}</h4>
          <p className="text-slate-500">JCI & NABH Accredited</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
          <div className="flex items-center gap-2 text-slate-400">
            <Bed className="w-4 h-4 text-[#0B5678]" />
            <span className="uppercase font-bold tracking-wider">Assigned Room</span>
          </div>
          <h4 className="font-bold text-sm text-[#073B57]">{treatment.roomNumber}</h4>
          <p className="text-emerald-700 font-semibold">Private Deluxe Attendant Suite</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
          <div className="flex items-center gap-2 text-slate-400">
            <User className="w-4 h-4 text-[#0B5678]" />
            <span className="uppercase font-bold tracking-wider">Treating Surgeon</span>
          </div>
          <h4 className="font-bold text-sm text-[#073B57]">{treatment.treatingSurgeon}</h4>
          <p className="text-slate-500">Chief Orthopedic Director</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-4 h-4 text-[#0B5678]" />
            <span className="uppercase font-bold tracking-wider">Surgery Timetable</span>
          </div>
          <h4 className="font-bold text-sm text-[#FF791B]">{treatment.surgeryDate}</h4>
          <p className="text-slate-500">Duration: {treatment.surgeryDuration}</p>
        </div>
      </div>

      {/* Vitals Trend Chart (Recharts) */}
      <VitalsTrackerChart data={treatment.vitalsHistory} />

      {/* Surgery Timetable & Implants Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Implant & Surgical Specification */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4 text-xs">
          <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Surgical Implants & Prosthetics Specification
          </h3>

          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-emerald-950">Approved Implant System:</span>
              <span className="font-mono text-emerald-800 font-bold">Stryker Triathlon USA</span>
            </div>
            <p className="text-emerald-800 leading-relaxed">
              Robotic knee replacement implant with crosslinked ultra-high-molecular-weight polyethylene and titanium-alloy femoral component. Serial registration number recorded on discharge certificate.
            </p>
          </div>

          <div className="space-y-2 text-slate-600">
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="font-semibold">Robotic Platform Used:</span>
              <span className="font-bold text-slate-800">Mako SmartRobotics System</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="font-semibold">Anesthesiologist:</span>
              <span className="font-bold text-slate-800">{treatment.anesthesiologist}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="font-semibold">Surgery Duration:</span>
              <span className="font-bold text-slate-800">75 Minutes</span>
            </div>
          </div>
        </div>

        {/* Prescription & Daily Medication Schedule */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4 text-xs">
          <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
            <Pill className="w-5 h-5 text-[#FF791B]" />
            Inpatient Medication & Prescription Schedule
          </h3>

          <div className="space-y-2">
            {treatment.medications?.map((med, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-3"
              >
                <div>
                  <h4 className="font-bold text-[#073B57]">{med.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{med.dosage}</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800">
                    {med.type}
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-1">{med.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
