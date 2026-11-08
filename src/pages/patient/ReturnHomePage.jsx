import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Home,
  Plane,
  FileCheck2,
  Calendar,
  Star,
  Download,
  ShieldCheck,
  CheckCircle2,
  Printer,
  Sparkles,
  Award
} from 'lucide-react';
import { submitFeedback } from '../../store/journeySlice';
import { useToast } from '../../components/common/ToastNotification';
import confetti from 'canvas-confetti';
import { ReturnHomeSkeleton } from '../../components/skeletons';

export default function ReturnHomePage() {
  const { returnHome } = useSelector((state) => state.journey);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState('');
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // Automatically load page-related return home skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ReturnHomeSkeleton />;
  }

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    dispatch(
      submitFeedback({
        rating,
        feedback: feedbackText,
        submittedAt: new Date().toLocaleDateString()
      })
    );
    showToast('Thank you for your generous feedback! Safe travels back home.', 'success');
    try {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    } catch (e) {}
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#073B57]/10 text-[#073B57]">
              Stage 8 of 8
            </span>
            <span className="text-xs text-slate-400">• Safe Return & Continuous Telemedicine</span>
          </div>
          <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
            Return Home & Extended Care Program
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Fit-to-Fly airline medical certificates, departure airport VIP transfers, and 6-month post-treatment telemedicine follow-ups.
          </p>
        </div>

        <button
          onClick={() => setShowCertificateModal(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-[#FF791B] text-white text-xs font-bold shadow-md transition-all hover:scale-105"
        >
          <Award className="w-4 h-4" />
          <span>View Treatment Certificate</span>
        </button>
      </div>

      {/* Flight & Fit-to-Fly Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fit-to-Fly Medical Clearance */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4 text-xs">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Fit-to-Fly Medical Airline Clearance
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
              {returnHome.fitToFlyCertificate.status}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-500">Certificate Reference:</span>
              <span className="font-mono font-bold text-[#073B57]">{returnHome.fitToFlyCertificate.certificateNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Issued By:</span>
              <span className="font-bold text-slate-700">{returnHome.fitToFlyCertificate.issuedBy}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Hospital:</span>
              <span className="font-bold text-slate-700">{returnHome.fitToFlyCertificate.hospital}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Airlines Assistance:</span>
              <span className="text-emerald-700 font-semibold">{returnHome.fitToFlyCertificate.specialAssistance}</span>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => showToast('Fit-to-Fly Certificate downloaded for airline counter.', 'success')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white text-xs font-bold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Fit-to-Fly Document</span>
            </button>
          </div>
        </div>

        {/* Departure Flight & Airport Chauffeur */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4 text-xs">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
              <Plane className="w-5 h-5 text-[#FF791B]" />
              Departure Flight & Airport Transfer
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800">
              Transfer Arranged
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-500">Flight:</span>
              <span className="font-bold text-[#073B57] font-mono">{returnHome.departureFlight.flightNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Departure:</span>
              <span className="font-bold text-slate-700">
                {returnHome.departureFlight.date} at {returnHome.departureFlight.time}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Route:</span>
              <span className="text-slate-700">
                {returnHome.departureFlight.departureAirport} → {returnHome.departureFlight.destinationAirport}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Hotel Pickup:</span>
              <span className="text-emerald-700 font-bold">{returnHome.departureFlight.airportTransferTime}</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 italic">
            * 30-day supply of branded medications packaged in sealed customs travel pouch with doctor’s authorization.
          </p>
        </div>
      </div>

      {/* 6-Month Post-Treatment Telemedicine Schedule */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
        <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#0B5678]" />
          6-Month Post-Treatment Telemedicine Follow-up Plan
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {returnHome.telemedicineFollowUpSchedule?.map((sess, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2"
            >
              <span className="text-[10px] uppercase font-bold text-[#FF791B] block">
                Session 0{idx + 1}
              </span>
              <h4 className="font-bold text-sm text-[#073B57]">{sess.session}</h4>
              <p className="text-slate-600 font-medium">{sess.date} • {sess.time}</p>
              <p className="text-slate-400">Doctor: {sess.doctor}</p>
              <span className="inline-block mt-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Video Link Reserved
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Patient Experience Feedback Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
        <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-500" />
          Share Your Medical Travel Feedback & Rate Us
        </h3>

        {returnHome.patientFeedbackSubmitted ? (
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2 text-xs">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-sm text-emerald-900">Thank you for sharing your experience!</h4>
            <p className="text-emerald-800">
              Your feedback inspires international patients across the globe who are considering surgery in India.
            </p>
          </div>
        ) : (
          <form onSubmit={handleFeedbackSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-2">Overall Patient Experience Rating:</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-amber-400 hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`w-7 h-7 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
                    />
                  </button>
                ))}
                <span className="ml-2 font-bold text-slate-700 text-sm">{rating} / 5 Stars</span>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Your Review of Hospital, Doctors & Care Manager Priya:
              </label>
              <textarea
                rows={3}
                required
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="How was your surgery outcome, hospital stay and Hokena Care assistance?..."
                className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#FF791B] hover:bg-[#e6680f] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              Submit Patient Testimonial
            </button>
          </form>
        )}
      </div>

      {/* Treatment Completion Certificate Modal */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-slate-100 text-center space-y-6">
            <div className="border-4 border-amber-200 p-8 rounded-2xl relative bg-amber-50/20">
              <Award className="w-16 h-16 text-[#FF791B] mx-auto mb-2" />
              <h2 className="font-display font-extrabold text-2xl text-[#073B57] uppercase tracking-wide">
                Certificate of Successful Treatment
              </h2>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                Issued by Hokena Care & Fortis Memorial Research Institute
              </p>

              <div className="my-6 space-y-2 text-xs">
                <p className="text-slate-600">This certifies that</p>
                <h3 className="font-display font-bold text-xl text-[#073B57] underline">
                  {user?.fullName}
                </h3>
                <p className="text-slate-500 font-mono">Patient ID: {user?.id} • Country: {user?.country}</p>
                <p className="text-slate-700 max-w-md mx-auto pt-2 leading-relaxed">
                  Has successfully undergone <strong>Robotic Total Knee Replacement</strong> under Chief Surgeon <strong>Dr. Ashok Rajgopal</strong> with exemplary clinical recovery and fit-to-fly clearance.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <div>
                  <p className="font-bold text-[#073B57]">Dr. Ashok Rajgopal</p>
                  <p>Chief Orthopedic Director</p>
                </div>
                <div>
                  <p className="font-bold text-[#FF791B]">Priya Sharma</p>
                  <p>Hokena Care International Director</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowCertificateModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  window.print();
                }}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#073B57] text-white text-xs font-bold"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Certificate</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
