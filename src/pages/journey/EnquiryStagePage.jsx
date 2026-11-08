import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  User,
  Activity,
  Upload,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Save,
  Clock,
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';
import { COUNTRIES, SPECIALITIES } from '../../data/countries';
import { HOSPITALS } from '../../data/mockData';
import { addEnquiry, saveDraft } from '../../store/enquirySlice';
import { setStage } from '../../store/journeySlice';
import { addNotification } from '../../store/notificationSlice';
import { useToast } from '../../components/common/ToastNotification';
import MedicalDocumentUpload from '../../components/patient/MedicalDocumentUpload';
import confetti from 'canvas-confetti';
import { EnquiryFormSkeleton } from '../../components/skeletons';

export default function EnquiryStagePage() {
  const { user } = useSelector((state) => state.auth);
  const { draftEnquiry } = useSelector((state) => state.enquiry);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [submittedId, setSubmittedId] = useState(null);

  // Automatically load page-related enquiry form skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  // Form state
  const [formData, setFormData] = useState(
    draftEnquiry || {
      fullName: user?.fullName || 'Michael Chen',
      dob: user?.dob || '1972-04-18',
      gender: user?.gender || 'Male',
      nationality: user?.nationality || 'British',
      country: user?.country || 'United Kingdom',
      email: user?.email || 'michael.chen@gmail.com',
      phone: user?.phone || '+44 7911 123456',
      speciality: 'Orthopedics & Joint Replacement',
      medicalCondition: 'Severe Osteoarthritis Right Knee with joint stiffness',
      preferredTreatment: 'Robotic Total Knee Replacement',
      symptoms: 'Extreme pain while bearing weight, difficulty climbing stairs for past 8 months.',
      medicalHistory: 'Mild hypertension controlled with Lisinopril 5mg daily. No previous surgeries.',
      preferredHospital: 'Fortis Memorial Research Institute, Gurugram',
      additionalNotes: 'Require urgent second opinion and quotation for patient and spouse accommodation.',
      uploadedFiles: [
        { name: 'Knee_MRI_Pelvis_Scan.pdf', size: '4.8 MB', category: 'Radiology' }
      ]
    }
  );

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveDraft = () => {
    dispatch(saveDraft(formData));
    showToast('Enquiry progress saved as draft.', 'info');
  };

  const handleFileUploaded = (file) => {
    setFormData((prev) => ({
      ...prev,
      uploadedFiles: [...(prev.uploadedFiles || []), file]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRefId = `HKN-ENQ-${Math.floor(1000 + Math.random() * 9000)}`;

    dispatch(
      addEnquiry({
        id: newRefId,
        condition: formData.medicalCondition,
        speciality: formData.speciality,
        preferredTreatment: formData.preferredTreatment,
        preferredHospital: formData.preferredHospital,
        symptoms: formData.symptoms,
        medicalHistory: formData.medicalHistory,
        documents: formData.uploadedFiles
      })
    );

    dispatch(
      addNotification({
        title: `Enquiry ${newRefId} Received`,
        message: 'Your medical reports have been relayed to Fortis & Medanta orthopedic boards.',
        type: 'enquiry',
        link: '/patient/enquiries'
      })
    );

    setSubmittedId(newRefId);
    showToast('Medical Enquiry submitted successfully!', 'success');

    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch (e) {}
  };

  if (isLoading) {
    return <EnquiryFormSkeleton />;
  }

  return (
    <div data-aos="fade-up" className="space-y-6 max-w-4xl mx-auto">
      {/* Stage Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#073B57]/10 text-[#073B57]">
              Stage 1 of 8
            </span>
            <span className="text-xs text-slate-400">• Medical Assessment</span>
          </div>
          <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
            Medical Enquiry & Diagnostic Review
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Submit your medical diagnosis and imaging files. Receive multi-hospital clinical opinions within 24 hours.
          </p>
        </div>

        {!submittedId && (
          <button
            type="button"
            onClick={handleSaveDraft}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <Save className="w-3.5 h-3.5 text-[#0B5678]" />
            <span>Save Draft</span>
          </button>
        )}
      </div>

      {/* Success Confirmation View */}
      {submittedId ? (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-center space-y-6 animate-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#073B57] text-white">
              Reference: {submittedId}
            </span>
            <h2 className="font-display font-bold text-2xl text-[#073B57]">
              Your Enquiry Has Been Submitted Successfully!
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Our clinical advisory board and senior surgical faculty at <strong>{formData.preferredHospital}</strong> are reviewing your case. Your dedicated coordinator Ms. Priya Sharma will reach out shortly.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 max-w-md mx-auto text-xs text-left space-y-1.5">
            <div className="flex justify-between">
              <span className="text-slate-500">Patient:</span>
              <span className="font-bold text-[#073B57]">{formData.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Condition:</span>
              <span className="font-bold text-slate-700">{formData.medicalCondition}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Diagnostic Reports:</span>
              <span className="font-bold text-emerald-700">{formData.uploadedFiles?.length || 1} files uploaded</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => navigate('/patient/journey/consultation')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white text-xs font-bold transition-all shadow-md"
            >
              Proceed to Stage 2: Consultation
            </button>
            <button
              onClick={() => navigate('/patient/enquiries')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              View in My Enquiries
            </button>
          </div>
        </div>
      ) : (
        /* Multi-step Form Workflow */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-8">
          {/* Step Indicator */}
          <div className="grid grid-cols-4 gap-2 border-b border-slate-100 pb-6 text-center text-xs">
            {[
              { step: 1, title: 'Patient Info', icon: User },
              { step: 2, title: 'Condition & Hospital', icon: Activity },
              { step: 3, title: 'Upload Scans', icon: Upload },
              { step: 4, title: 'Review & Submit', icon: CheckCircle2 }
            ].map((s) => {
              const Icon = s.icon;
              const isActive = currentStep === s.step;
              const isPast = currentStep > s.step;
              return (
                <div
                  key={s.step}
                  onClick={() => setCurrentStep(s.step)}
                  className={`flex flex-col items-center gap-1.5 cursor-pointer transition-colors ${
                    isActive
                      ? 'text-[#FF791B] font-bold'
                      : isPast
                      ? 'text-emerald-700 font-semibold'
                      : 'text-slate-400'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs transition-all ${
                      isActive
                        ? 'bg-[#FF791B] text-white shadow-xs scale-105'
                        : isPast
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] truncate max-w-[80px] sm:max-w-none">
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Step 1: Patient Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-4 text-xs animate-in fade-in">
              <h3 className="font-display font-bold text-base text-[#073B57]">
                Step 1: Patient Identification
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Patient Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Date of Birth *</label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Gender *</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Country of Residence *</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.code} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Medical Condition & Preferences */}
          {currentStep === 2 && (
            <div className="space-y-4 text-xs animate-in fade-in">
              <h3 className="font-display font-bold text-base text-[#073B57]">
                Step 2: Medical Condition & Clinical Preferences
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Required Speciality *</label>
                  <select
                    value={formData.speciality}
                    onChange={(e) => setFormData({ ...formData, speciality: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  >
                    {SPECIALITIES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Treatment *</label>
                  <input
                    type="text"
                    required
                    value={formData.preferredTreatment}
                    onChange={(e) => setFormData({ ...formData, preferredTreatment: e.target.value })}
                    placeholder="e.g. Robotic Total Knee Replacement"
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Primary Medical Condition *</label>
                  <input
                    type="text"
                    required
                    value={formData.medicalCondition}
                    onChange={(e) => setFormData({ ...formData, medicalCondition: e.target.value })}
                    placeholder="Diagnosis or condition title"
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Current Symptoms & Pain Profile *</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    placeholder="Describe symptoms, walking limitation, duration..."
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Medical History & Chronic Conditions</label>
                  <textarea
                    rows={2}
                    value={formData.medicalHistory}
                    onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
                    placeholder="e.g. Diabetes, Hypertension, Heart stents, previous surgeries..."
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Preferred Hospital in India (Optional)</label>
                  <select
                    value={formData.preferredHospital}
                    onChange={(e) => setFormData({ ...formData, preferredHospital: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                  >
                    {HOSPITALS.map((h) => (
                      <option key={h.id} value={h.name}>{h.name} ({h.city})</option>
                    ))}
                    <option value="Any Top Quaternary Hospital">Recommend the Best Hospital for My Budget</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Medical Report Upload */}
          {currentStep === 3 && (
            <div className="space-y-4 text-xs animate-in fade-in">
              <h3 className="font-display font-bold text-base text-[#073B57]">
                Step 3: Upload Diagnostic Reports & Scans
              </h3>
              <p className="text-slate-500">
                Please attach any existing MRI, CT scans, X-rays, biopsy or local doctor referral letters.
              </p>

              <MedicalDocumentUpload onUploaded={handleFileUploaded} />

              {/* Uploaded Files preview */}
              <div className="space-y-2 pt-2">
                <h4 className="font-bold text-slate-700">Attached Reports ({formData.uploadedFiles?.length || 0}):</h4>
                {formData.uploadedFiles?.map((f, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#0B5678]" />
                      <span className="font-bold text-[#073B57]">{f.name}</span>
                      <span className="text-slate-400">({f.size})</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                      Attached
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 4 && (
            <div className="space-y-4 text-xs animate-in fade-in">
              <h3 className="font-display font-bold text-base text-[#073B57]">
                Step 4: Review Enquiry Summary & Submit
              </h3>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-slate-500">Patient:</span>
                    <p className="font-bold text-[#073B57]">{formData.fullName} ({formData.gender}, {formData.dob})</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Origin:</span>
                    <p className="font-bold text-[#073B57]">{formData.country} • {formData.phone}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-slate-500">Speciality:</span>
                    <p className="font-bold text-slate-700">{formData.speciality}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Preferred Hospital:</span>
                    <p className="font-bold text-slate-700">{formData.preferredHospital}</p>
                  </div>
                </div>

                <div>
                  <span className="text-slate-500">Condition & Symptoms:</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{formData.medicalCondition}</p>
                  <p className="text-slate-600 italic mt-0.5">{formData.symptoms}</p>
                </div>

                <div>
                  <span className="text-slate-500">Attached Reports:</span>
                  <p className="font-bold text-emerald-700 mt-0.5">
                    {formData.uploadedFiles?.length || 1} diagnostic files attached for hospital evaluation.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>
                  No fees charged. You will receive direct institutional hospital quotations with 0% markup.
                </span>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : <div />}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white text-xs font-bold transition-all hover:scale-105"
              >
                <span>Continue to Step {currentStep + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[#FF791B] hover:bg-[#e6680f] text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 transition-all hover:scale-105"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Medical Enquiry</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
