import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  LogOut,
  Settings,
  ChevronDown,
  UserCheck,
  Shield,
  FileText
} from 'lucide-react';
import { logout, switchProfile } from '../../store/authSlice';
import { setStage } from '../../store/journeySlice';
import { useToast } from '../common/ToastNotification';

export default function PatientProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, demoProfiles } = useSelector((state) => state.auth);
  const { showToast } = useToast();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    showToast('Logged out safely. See you soon!', 'info');
    navigate('/');
  };

  const handleSwitchPatient = (profile) => {
    dispatch(switchProfile(profile.id));
    dispatch(setStage(profile.currentStage));
    setIsOpen(false);
    showToast(`Switched to demo patient: ${profile.fullName} (${profile.country})`, 'success');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-2 rounded-xl hover:bg-slate-100 transition-colors"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#073B57] to-[#0B5678] text-white flex items-center justify-center font-bold text-sm shadow-xs">
          {user?.fullName?.charAt(0) || 'P'}
        </div>
        <div className="hidden md:flex flex-col text-left">
          <span className="text-xs font-bold text-[#073B57] leading-tight line-clamp-1">
            {user?.fullName || 'Patient'}
          </span>
          <span className="text-[10px] text-slate-500 font-mono">
            {user?.id || 'HKN-2024'}
          </span>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:inline" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-in fade-in zoom-in-95">
          {/* Header */}
          <div className="p-4 bg-slate-50 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#073B57] text-white flex items-center justify-center font-bold text-base shadow-xs">
                {user?.fullName?.charAt(0) || 'P'}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-[#073B57] truncate">
                  {user?.fullName}
                </h4>
                <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-sky-100 text-sky-800">
                    {user?.id}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-medium">● Active Patient</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Demo Profile Switcher */}
          <div className="p-3 bg-amber-50/60 border-b border-amber-100/60">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] uppercase font-bold text-amber-800 flex items-center gap-1">
                <UserCheck className="w-3 h-3" />
                Switch Demo Patient
              </span>
              <span className="text-[9px] text-amber-700">Test different stages</span>
            </div>
            <div className="space-y-1">
              {demoProfiles?.map((dp) => (
                <button
                  key={dp.id}
                  onClick={() => handleSwitchPatient(dp)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                    user?.id === dp.id
                      ? 'bg-amber-200/70 font-bold text-[#073B57]'
                      : 'hover:bg-amber-100/60 text-slate-700'
                  }`}
                >
                  <span className="truncate">{dp.fullName}</span>
                  <span className="text-[10px] font-mono opacity-70">Stage {dp.currentStage}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="p-2 space-y-0.5 text-xs font-medium text-slate-700">
            <Link
              to="/patient/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#073B57] transition-colors"
            >
              <User className="w-4 h-4 text-[#0B5678]" />
              <span>My Profile & Passports</span>
            </Link>
            <Link
              to="/patient/enquiries"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#073B57] transition-colors"
            >
              <FileText className="w-4 h-4 text-[#0B5678]" />
              <span>My Medical Enquiries</span>
            </Link>
            <Link
              to="/patient/settings"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-[#073B57] transition-colors"
            >
              <Settings className="w-4 h-4 text-[#0B5678]" />
              <span>Account Settings</span>
            </Link>
          </div>

          {/* Logout */}
          <div className="p-2 border-t border-slate-100">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
