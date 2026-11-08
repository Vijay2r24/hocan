import React, { useState, useEffect } from 'react';
import AppointmentCalendar from '../../components/journey/AppointmentCalendar';
import { ConsultationSkeleton } from '../../components/skeletons';

export default function MyConsultationsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ConsultationSkeleton showCoordinator={false} />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
          My Doctor Consultations & Telemedicine
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Schedule and attend live video consultations with chief Indian specialists and track pre-travel clinical recommendations.
        </p>
      </div>

      <AppointmentCalendar />
    </div>
  );
}
