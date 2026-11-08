import React from 'react';
import {
  MapPin,
  Star,
  Bed,
  Plane,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HospitalCard({ hospital }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group card-hover h-full">
      <div className="relative h-56 overflow-hidden">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />

        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
          {hospital.accreditations?.slice(0, 2).map((acc) => (
            <span
              key={acc}
              className="bg-[#073B57]/90 text-white backdrop-blur-xs px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF791B]" />
              {acc}
            </span>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-amber-300 font-bold mb-1">
            <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            <span>{hospital.rating}</span>
            <span className="text-white/85 font-normal">({hospital.reviewsCount} international patient reviews)</span>
          </div>
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white leading-tight">
            {hospital.name}
          </h3>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
            <MapPin className="w-4 h-4 text-[#FF791B] flex-shrink-0" />
            <span className="font-semibold text-slate-800">{hospital.city}</span>
          </div>

          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {hospital.description}
          </p>

          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 mb-4 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-[#0B5678]" />
              <span className="font-bold">{hospital.beds}</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-[#FF791B]" />
              <span className="truncate">{hospital.distanceAirport}</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
              International Amenities
            </span>
            <ul className="space-y-1.5">
              {hospital.facilities?.slice(0, 3).map((f, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="truncate">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to="/patient/journey/enquiry"
            className="text-sm font-bold text-[#0B5678] hover:text-[#FF791B] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
          >
            <span>Request Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/doctors"
            className="bg-[#073B57] hover:bg-[#0B5678] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors"
          >
            View Specialists
          </Link>
        </div>
      </div>
    </div>
  );
}
