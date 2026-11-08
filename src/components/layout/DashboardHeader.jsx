import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Menu,
  MessageSquare,
  ShieldCheck,
  Compass,
  ArrowRight
} from 'lucide-react';
import NotificationDropdown from './NotificationDropdown';
import PatientProfileDropdown from './PatientProfileDropdown';
import LanguageSelector from '../common/LanguageSelector';
import { getStageName } from '../../utils/formatters';

export default function DashboardHeader({ onMobileMenuToggle }) {
  const { currentStage, journeyProgress } = useSelector((state) => state.journey);
  const { messages } = useSelector((state) => state.messages);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Hamburger & Current Stage Indicator */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-[#073B57] transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Quick Stage Indicator pill */}
          <Link
            to={`/patient/journey/${
              ['enquiry', 'consultation', 'confirmation', 'visa', 'travel', 'treatment', 'recovery', 'return-home'][currentStage - 1] || 'enquiry'
            }`}
            className="hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 hover:border-[#FF791B]/50 transition-all group"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF791B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF791B]"></span>
            </span>
            <span className="text-xs font-bold text-[#073B57]">
              Stage {currentStage}: {getStageName(currentStage)}
            </span>
            <span className="text-[11px] font-semibold text-[#FF791B] bg-orange-50 px-2 py-0.5 rounded-full">
              {journeyProgress}% Complete
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF791B] transition-colors" />
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector */}
          <LanguageSelector variant="light" />

          {/* Messages Link */}
          <Link
            to="/patient/messages"
            className="relative p-2.5 rounded-xl text-slate-600 hover:text-[#073B57] hover:bg-slate-100 transition-colors"
            title="Messages & Coordinator Chat"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 flex h-2 w-2 rounded-full bg-emerald-500" />
          </Link>

          {/* Notifications Dropdown */}
          <NotificationDropdown />

          <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block" />

          {/* Patient Profile Dropdown */}
          <PatientProfileDropdown />
        </div>
      </div>
    </header>
  );
}
