import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  Hospital,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  User
} from 'lucide-react';
import { DOCTORS } from '../../data/mockData';
import { useToast } from '../common/ToastNotification';

export default function AppointmentCalendar() {
  const [selectedDoctor, setSelectedDoctor] = useState(DOCTORS[1]); // Dr. Ashok Rajgopal
  const [selectedDate, setSelectedDate] = useState('2024-11-15');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('02:30 PM');
  const [consultationType, setConsultationType] = useState('video');
  const [isInCall, setIsInCall] = useState(false);
  const { showToast } = useToast();

  const [appointments, setAppointments] = useState([
    {
      id: 'apt-1',
      doctor: 'Dr. Ashok Rajgopal',
      speciality: 'Institute of Orthopedics',
      hospital: 'Fortis Memorial Research Institute',
      date: '12 Nov 2024',
      time: '02:30 PM IST (09:00 AM UK)',
      type: 'Pre-Travel Video Consultation',
      status: 'Confirmed'
    }
  ]);

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM'
  ];

  const handleBook = (e) => {
    e.preventDefault();
    const newApt = {
      id: `apt-${Date.now()}`,
      doctor: selectedDoctor.name,
      speciality: selectedDoctor.speciality,
      hospital: selectedDoctor.hospital,
      date: selectedDate,
      time: `${selectedTimeSlot} IST`,
      type: consultationType === 'video' ? 'Online Video Consultation' : 'In-Person Hospital OPD',
      status: 'Confirmed'
    };

    setAppointments([newApt, ...appointments]);
    showToast(`Consultation with ${selectedDoctor.name} booked successfully!`, 'success');
  };

  return (
    <div className="space-y-6">
      {/* Simulated Live Video Call Room */}
      {isInCall && (
        <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 animate-in zoom-in-95">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
              <div>
                <h4 className="font-bold text-sm">Live Consultation: Dr. Ashok Rajgopal</h4>
                <p className="text-xs text-slate-400">Encrypted Telemedicine Session • 1080p HD</p>
              </div>
            </div>
            <button
              onClick={() => setIsInCall(false)}
              className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold"
            >
              End Call
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
            <div className="relative h-64 bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center border border-slate-700">
              <img
                src={DOCTORS[1].image}
                alt="Doctor"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/80 px-2.5 py-1 rounded text-xs">
                Dr. Ashok Rajgopal (Principal Orthopedic Surgeon)
              </div>
            </div>
            <div className="relative h-64 bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center border border-slate-700">
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-[#073B57] mx-auto flex items-center justify-center font-bold text-xl mb-2">
                  MC
                </div>
                <p className="font-bold text-sm">Michael Chen (You)</p>
                <p className="text-xs text-emerald-400">Audio & Camera Connected</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Book New Appointment Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
        <h3 className="font-display font-bold text-lg text-[#073B57] mb-2 flex items-center gap-2">
          <Video className="w-5 h-5 text-[#FF791B]" />
          Schedule a Specialist Consultation
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Connect directly with top quaternary Indian surgeons prior to booking flights or during your stay. Free of charge for Hokena Care patients.
        </p>

        <form onSubmit={handleBook} className="space-y-5">
          {/* Doctor Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Select Specialist Doctor:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {DOCTORS.slice(0, 3).map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDoctor(doc)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                    selectedDoctor.id === doc.id
                      ? 'border-[#FF791B] bg-orange-50/50 shadow-xs ring-1 ring-[#FF791B]'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-11 h-11 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <h5 className="font-bold text-xs text-[#073B57] truncate">{doc.name}</h5>
                    <p className="text-[10px] text-slate-500 truncate">{doc.speciality}</p>
                    <p className="text-[10px] text-emerald-700 font-semibold">{doc.experience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mode, Date & Time Slots */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Consultation Mode:
              </label>
              <select
                value={consultationType}
                onChange={(e) => setConsultationType(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-hidden focus:border-[#FF791B]"
              >
                <option value="video">Online Video Call (Telemedicine)</option>
                <option value="in-person">In-Person at Hospital OPD</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Preferred Date:
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Select Time Slot (IST):
              </label>
              <select
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-hidden focus:border-[#FF791B]"
              >
                {timeSlots.map((ts) => (
                  <option key={ts} value={ts}>{ts} IST</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="bg-[#FF791B] hover:bg-[#e6680f] text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-md transition-all hover:scale-105"
            >
              Confirm Appointment Booking
            </button>
          </div>
        </form>
      </div>

      {/* Confirmed Consultations List */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
        <h4 className="font-display font-bold text-base text-[#073B57] mb-4">
          Upcoming Consultations
        </h4>

        <div className="space-y-3">
          {appointments.map((apt) => (
            <div
              key={apt.id}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#073B57] text-white flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 text-[#FF791B]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h5 className="font-bold text-sm text-[#073B57]">{apt.doctor}</h5>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {apt.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{apt.speciality} • {apt.hospital}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                    <span className="flex items-center gap-1 font-semibold text-[#0B5678]">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {apt.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {apt.time}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => setIsInCall(true)}
                  className="w-full md:w-auto flex items-center justify-center gap-1.5 bg-[#073B57] hover:bg-[#0B5678] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition-all hover:scale-105"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Join Video Call</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
