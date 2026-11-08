import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Plane,
  Building,
  Car,
  MapPin,
  Clock,
  Phone,
  User,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { updateTravelDetails, setStage } from '../../store/journeySlice';
import { useToast } from '../../components/common/ToastNotification';
import { TravelPageSkeleton } from '../../components/skeletons';

export default function TravelStagePage() {
  const { travel } = useSelector((state) => state.journey);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related travel skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const [isEditingFlight, setIsEditingFlight] = useState(false);
  const [flightForm, setFlightForm] = useState({
    airline: travel.airline || 'British Airways',
    flightNumber: travel.flightNumber || 'BA 143',
    arrivalDate: travel.arrivalDate || '10 Nov 2024',
    arrivalTime: travel.arrivalTime || '07:45 AM IST',
    terminal: travel.terminal || 'Terminal 3 (International)'
  });

  const handleSaveFlight = (e) => {
    e.preventDefault();
    dispatch(updateTravelDetails(flightForm));
    setIsEditingFlight(false);
    showToast('Arrival flight details saved. Airport VIP chauffeur notified.', 'success');
  };

  if (isLoading) {
    return <TravelPageSkeleton />;
  }

  return (
    <div data-aos="fade-up" className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0B5678]/10 text-[#0B5678]">
              Stage 5 of 8
            </span>
            <span className="text-xs text-slate-400">• Logistics & Concierge Reception</span>
          </div>
          <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
            Travel, Airport Reception & Accommodation
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Complimentary VIP airport tarmac reception, dedicated chauffeur, hotel check-in and pre-admission schedule.
          </p>
        </div>

        <button
          onClick={() => {
            dispatch(setStage(6));
            showToast('Advanced to Stage 6: Hospital Inpatient Treatment', 'success');
            navigate('/patient/journey/treatment');
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white text-xs font-bold transition-all shadow-xs"
        >
          <span>Arrived in India • Advance to Stage 6</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Airport VIP Meet & Greet Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-xs">
            <Car className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-lg text-[#073B57]">
                Complimentary VIP Airport Chauffeur
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                {travel.airportPickup.status}
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Assigned Driver: <strong>{travel.airportPickup.driverName}</strong> • Phone:{' '}
              <span className="font-mono font-bold text-[#073B57]">{travel.airportPickup.driverPhone}</span>
            </p>
            <p className="text-xs text-slate-500">
              Vehicle: <strong>{travel.airportPickup.vehicleModel}</strong> ({travel.airportPickup.licensePlate})
            </p>
            <p className="text-xs text-slate-500">
              Meeting Point: <strong>{travel.airportPickup.pickupPoint}</strong> (Driver holds placard:{' '}
              <span className="font-mono font-bold text-[#FF791B]">{travel.airportPickup.meetingPlacard}</span>)
            </p>
          </div>
        </div>

        <a
          href={`tel:${travel.airportPickup.driverPhone}`}
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white text-xs font-bold transition-all shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#FF791B]" />
          <span>Call Assigned Chauffeur</span>
        </a>
      </div>

      {/* Flight Details & Accommodation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Flight Booking Information */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4 text-xs">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
              <Plane className="w-5 h-5 text-[#FF791B]" />
              Inbound Flight Booking Information
            </h3>
            <button
              onClick={() => setIsEditingFlight(!isEditingFlight)}
              className="text-xs font-bold text-[#0B5678] hover:text-[#FF791B]"
            >
              {isEditingFlight ? 'Cancel' : 'Edit Flight'}
            </button>
          </div>

          {isEditingFlight ? (
            <form onSubmit={handleSaveFlight} className="space-y-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Airline</label>
                <input
                  type="text"
                  required
                  value={flightForm.airline}
                  onChange={(e) => setFlightForm({ ...flightForm, airline: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Flight Number</label>
                  <input
                    type="text"
                    required
                    value={flightForm.flightNumber}
                    onChange={(e) => setFlightForm({ ...flightForm, flightNumber: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Arrival Terminal</label>
                  <input
                    type="text"
                    required
                    value={flightForm.terminal}
                    onChange={(e) => setFlightForm({ ...flightForm, terminal: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Arrival Date</label>
                  <input
                    type="text"
                    required
                    value={flightForm.arrivalDate}
                    onChange={(e) => setFlightForm({ ...flightForm, arrivalDate: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Arrival Time</label>
                  <input
                    type="text"
                    required
                    value={flightForm.arrivalTime}
                    onChange={(e) => setFlightForm({ ...flightForm, arrivalTime: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#073B57] text-white font-bold"
              >
                Update Flight Details
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Airline:</span>
                <span className="font-bold text-[#073B57]">{travel.airline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Flight Number:</span>
                <span className="font-mono font-bold text-slate-800">{travel.flightNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Arrival Date & Time:</span>
                <span className="font-bold text-[#FF791B]">{travel.arrivalDate} at {travel.arrivalTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Airport & Terminal:</span>
                <span className="text-slate-700">{travel.arrivalAirport} ({travel.terminal})</span>
              </div>
            </div>
          )}
        </div>

        {/* Serviced Accommodation Details */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4 text-xs">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
              <Building className="w-5 h-5 text-[#0B5678]" />
              Serviced Hotel & Apartment Booking
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
              Reserved
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h4 className="font-bold text-sm text-[#073B57]">{travel.accommodation.name}</h4>
            <p className="text-slate-600 flex items-start gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#FF791B] flex-shrink-0 mt-0.5" />
              <span>{travel.accommodation.address} ({travel.accommodation.distanceToHospital})</span>
            </p>
            <div className="flex justify-between pt-1 border-t border-slate-200 text-slate-600">
              <span>Room Type:</span>
              <span className="font-semibold">{travel.accommodation.roomType}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Stay Duration:</span>
              <span>{travel.accommodation.checkIn} → {travel.accommodation.checkOut}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase text-slate-400">Amenities:</span>
            <div className="flex flex-wrap gap-1.5">
              {travel.accommodation.amenities?.map((am, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px]">
                  ✓ {am}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arrival Day-by-Day Itinerary */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4 text-xs">
        <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#0B5678]" />
          Arrival & Pre-Admission Travel Itinerary
        </h3>

        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#073B57] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
              Day 1
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-[#073B57]">Landing at Delhi (DEL) & Hotel Check-in</h4>
              <p className="text-slate-600 leading-relaxed">
                Chauffeur meets you at Terminal 3 Gate 4. Complimentary transfer to The Palm Medisuites. Rest and recover from jet lag. Free 5G SIM activated.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0B5678] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
              Day 2
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-[#073B57]">Hospital OPD & Pre-Anesthesia Fitness Workup</h4>
              <p className="text-slate-600 leading-relaxed">
                Priya Sharma escorts you to Fortis Memorial OPD. Physical examination by Dr. Ashok Rajgopal, 3D CT scan, and anesthesia clearance.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FF791B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
              Day 3
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-[#073B57]">Hospital Inpatient Admission & Surgery</h4>
              <p className="text-slate-600 leading-relaxed">
                Morning admission to Deluxe Room 412. Robotic knee replacement surgery scheduled at 08:30 AM IST.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
