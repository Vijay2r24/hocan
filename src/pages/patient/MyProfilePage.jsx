import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  User,
  Mail,
  Phone,
  Globe,
  FileBadge,
  Heart,
  Save,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { updateProfile } from '../../store/authSlice';
import { useToast } from '../../components/common/ToastNotification';
import { COUNTRIES } from '../../data/countries';
import { ProfilePageSkeleton } from '../../components/skeletons';

export default function MyProfilePage() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related profile skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dob: user?.dob || '1972-04-18',
    gender: user?.gender || 'Male',
    nationality: user?.nationality || 'British',
    country: user?.country || 'United Kingdom',
    bloodGroup: user?.bloodGroup || 'O Positive',
    passportNumber: user?.passportNumber || 'GB94820194',
    passportExpiry: user?.passportExpiry || '2029-08-15',
    passportIssueCountry: user?.passportIssueCountry || 'United Kingdom',
    emergencyName: user?.emergencyContact?.name || 'Sarah Chen',
    emergencyRelationship: user?.emergencyContact?.relationship || 'Spouse & Caregiver',
    emergencyPhone: user?.emergencyContact?.phone || '+44 7911 654321',
    currentCondition: user?.currentCondition || 'Severe Osteoarthritis of Right Knee',
    allergies: 'Penicillin (mild rash), No other known drug allergies'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile({
        ...formData,
        emergencyContact: {
          name: formData.emergencyName,
          relationship: formData.emergencyRelationship,
          phone: formData.emergencyPhone
        }
      })
    );
    setIsEditing(false);
    showToast('Patient profile updated and verified successfully.', 'success');
  };

  if (isLoading) {
    return <ProfilePageSkeleton />;
  }

  return (
    <div data-aos="fade-up" className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
            Patient Profile & Travel Identification
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Official details used for hospital clinical registry, medical visa letters and embassy clearances.
          </p>
        </div>

        <div>
          {!isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-5 py-2.5 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white text-xs font-bold transition-all shadow-xs"
            >
              Edit Profile Details
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Card Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#073B57] to-[#0B5678] text-white flex items-center justify-center font-display font-extrabold text-2xl shadow-md border-4 border-slate-50">
            {formData.fullName?.charAt(0) || 'P'}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="font-display font-bold text-xl text-[#073B57]">
                {formData.fullName}
              </h2>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-sky-50 text-sky-800 border border-sky-200">
                {user?.id}
              </span>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              {formData.nationality} Citizen • Living in {formData.country}
            </p>
            <div className="flex items-center gap-3 text-xs text-emerald-700 font-semibold mt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Verified Patient Records
              </span>
              <span>•</span>
              <span>Blood Group: {formData.bloodGroup}</span>
            </div>
          </div>
        </div>

        {/* Section 1: Personal & Contact Information */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
            <User className="w-5 h-5 text-[#FF791B]" />
            Personal & Contact Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Full Legal Name</label>
              <input
                type="text"
                disabled={!isEditing}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Date of Birth</label>
              <input
                type="date"
                disabled={!isEditing}
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Gender</label>
              <select
                disabled={!isEditing}
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                disabled={!isEditing}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Phone / WhatsApp</label>
              <input
                type="tel"
                disabled={!isEditing}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Country of Residence</label>
              <select
                disabled={!isEditing}
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Passport & Visa Travel Details */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
            <FileBadge className="w-5 h-5 text-[#0B5678]" />
            Passport Information (Required for Medical Visa VAL)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Passport Number</label>
              <input
                type="text"
                disabled={!isEditing}
                value={formData.passportNumber}
                onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B] font-mono uppercase"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Passport Expiry Date</label>
              <input
                type="date"
                disabled={!isEditing}
                value={formData.passportExpiry}
                onChange={(e) => setFormData({ ...formData, passportExpiry: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Issuing Authority Country</label>
              <input
                type="text"
                disabled={!isEditing}
                value={formData.passportIssueCountry}
                onChange={(e) => setFormData({ ...formData, passportIssueCountry: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Emergency Attendant Contact & Medical Notes */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500" />
            Accompanying Attendant & Clinical History
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Accompanying Attendant Name</label>
              <input
                type="text"
                disabled={!isEditing}
                value={formData.emergencyName}
                onChange={(e) => setFormData({ ...formData, emergencyName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Relationship</label>
              <input
                type="text"
                disabled={!isEditing}
                value={formData.emergencyRelationship}
                onChange={(e) => setFormData({ ...formData, emergencyRelationship: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Attendant Phone</label>
              <input
                type="tel"
                disabled={!isEditing}
                value={formData.emergencyPhone}
                onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 mb-1">Primary Medical Condition</label>
              <input
                type="text"
                disabled={!isEditing}
                value={formData.currentCondition}
                onChange={(e) => setFormData({ ...formData, currentCondition: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Blood Group</label>
              <input
                type="text"
                disabled={!isEditing}
                value={formData.bloodGroup}
                onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block font-bold text-slate-700 mb-1">Drug Allergies & Precautions</label>
              <input
                type="text"
                disabled={!isEditing}
                value={formData.allergies}
                onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 disabled:bg-slate-50 disabled:text-slate-600 focus:outline-hidden focus:border-[#FF791B]"
              />
            </div>
          </div>
        </div>

        {/* Save button if editing */}
        {isEditing && (
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white px-7 py-2.5 rounded-xl text-xs font-bold shadow-md transition-all hover:scale-105"
            >
              <Save className="w-4 h-4" />
              <span>Save & Verify Changes</span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
