import React from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Hospital,
  Clock,
  Award,
  Video,
  CheckCircle,
  Calendar
} from 'lucide-react';

export default function DoctorCard({ doctor, onBook, selected = false }) {
  return (
    <div
      className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col card-hover h-full w-full ${
        selected
          ? 'border-[#FF791B] ring-2 ring-orange-200 shadow-md'
          : 'border-slate-200/90 shadow-xs hover:border-slate-300'
      }`}
    >
      <div className="p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center border-b border-slate-100 flex-shrink-0 min-h-[148px] sm:min-h-[155px]">
        <div className="relative flex-shrink-0">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-white shadow-md"
          />
          <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-1 border-2 border-white shadow-xs">
            <CheckCircle className="w-4 h-4" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span className="px-3 py-1 rounded-lg text-xs font-bold bg-sky-50 text-sky-800 border border-sky-200 truncate max-w-[170px] sm:max-w-[200px]">
              {doctor.speciality}
            </span>
            <div className="flex items-center gap-1 text-sm font-bold text-amber-500 flex-shrink-0">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{doctor.rating}</span>
              <span className="text-slate-400 font-normal text-xs">({doctor.reviewsCount})</span>
            </div>
          </div>

          <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#073B57] truncate">
            {doctor.name}
          </h3>
          <p className="text-sm text-slate-600 font-medium line-clamp-1 mt-0.5">
            {doctor.designation}
          </p>

          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#0B5678] font-bold mt-1.5">
            <Hospital className="w-4 h-4 text-[#FF791B] flex-shrink-0" />
            <span className="truncate">{doctor.hospital}</span>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-sm">
        <div className="space-y-2.5 text-slate-600 flex-1">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#FF791B] flex-shrink-0" />
            <span><strong>Experience:</strong> {doctor.experience}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Award className="w-4 h-4 text-[#0B5678] flex-shrink-0" />
            <span className="truncate"><strong>Track Record:</strong> {doctor.surgeries}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span><strong>OPD Days:</strong> {doctor.availableDays?.join(', ')}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 sm:gap-3 flex-shrink-0">
          <div className="min-w-0">
            <span className="text-[10px] sm:text-xs text-slate-400 block uppercase font-bold tracking-wider">Video Call</span>
            <span className="text-xs sm:text-sm font-bold text-emerald-700 whitespace-nowrap">100% Free</span>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {onBook ? (
              <button
                type="button"
                onClick={() => onBook(doctor)}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
              >
                <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Book Video Call</span>
              </button>
            ) : (
              <Link
                to="/patient/journey/consultation"
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#073B57] hover:bg-[#0B5678] text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
              >
                <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF791B]" />
                <span>Book Consultation</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
