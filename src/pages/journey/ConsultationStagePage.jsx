import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Video,
  User,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock
} from 'lucide-react';
import AppointmentCalendar from '../../components/journey/AppointmentCalendar';
import { DOCTORS } from '../../data/mockData';
import DoctorCard from '../../components/patient/DoctorCard';
import { ConsultationSkeleton } from '../../components/skeletons';

export default function ConsultationStagePage() {
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ConsultationSkeleton showCoordinator={true} />;
  }

  return (
    <div data-aos="fade-up" className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0B5678]/10 text-[#0B5678]">
            Stage 2 of 8
          </span>
          <span className="text-xs text-slate-400">• Doctor Evaluation & Video Telemedicine</span>
        </div>
        <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
          Specialist Consultation & Second Opinion
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Connect directly with accredited Indian surgeons. Review clinical opinions and discuss procedure details before traveling.
        </p>
      </div>

      {/* Assigned Care Manager Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <img
            src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=200&q=80"
            alt="Coordinator"
            className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400 shadow-sm flex-shrink-0"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-lg text-[#073B57]">
                Ms. Priya Sharma
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Assigned Coordinator
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Senior International Patient Care Manager • Hokena Care Desk
            </p>
            <p className="text-xs text-slate-600 mt-2 max-w-lg leading-relaxed">
              "I have arranged for Dr. Ashok Rajgopal’s clinical team at Fortis Memorial to review your right knee MRI scans. You can book an online video consultation below to speak directly with him."
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <a
            href="https://wa.me/919871044210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>WhatsApp Coordinator</span>
          </a>
        </div>
      </div>

      {/* Recommended Doctors for Case */}
      <div>
        <h3 className="font-display font-bold text-lg text-[#073B57] mb-4">
          Recommended Orthopedic Specialists for Your Case
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOCTORS.slice(1, 3).map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </div>

      {/* Appointment Calendar Booking Component */}
      <AppointmentCalendar />
    </div>
  );
}
