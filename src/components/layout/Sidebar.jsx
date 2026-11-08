import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  LayoutDashboard,
  User,
  FileText,
  FolderOpen,
  Video,
  FileCheck2,
  FileBadge,
  Plane,
  Stethoscope,
  HeartPulse,
  Home,
  MessageSquare,
  Settings,
  LogOut,
  HeartHandshake,
  Phone,
  X,
  ExternalLink
} from 'lucide-react';
import { logout } from '../../store/authSlice';
import { useToast } from '../common/ToastNotification';

export default function Sidebar({ isOpen, onClose }) {
  const { user } = useSelector((state) => state.auth);
  const { currentStage } = useSelector((state) => state.journey);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleLogout = () => {
    dispatch(logout());
    showToast('Logged out successfully', 'info');
    navigate('/');
  };

  const navSections = [
    {
      label: 'Main',
      items: [
        { name: 'Dashboard', path: '/patient/dashboard', icon: LayoutDashboard },
        { name: 'My Profile', path: '/patient/profile', icon: User },
        { name: 'My Enquiries', path: '/patient/enquiries', icon: FileText },
        { name: 'Medical Documents', path: '/patient/documents', icon: FolderOpen },
      ]
    },
    {
      label: '8-Stage Patient Journey',
      items: [
        { name: '1. Enquiry Stage', path: '/patient/journey/enquiry', icon: FileText, stageNum: 1 },
        { name: '2. Consultation', path: '/patient/journey/consultation', icon: Video, stageNum: 2 },
        { name: '3. Treatment Plan', path: '/patient/journey/confirmation', icon: FileCheck2, stageNum: 3 },
        { name: '4. Medical Visa', path: '/patient/journey/visa', icon: FileBadge, stageNum: 4 },
        { name: '5. Travel Assistance', path: '/patient/journey/travel', icon: Plane, stageNum: 5 },
        { name: '6. Treatment Progress', path: '/patient/journey/treatment', icon: Stethoscope, stageNum: 6 },
        { name: '7. Recovery & Follow-up', path: '/patient/journey/recovery', icon: HeartPulse, stageNum: 7 },
        { name: '8. Return Home', path: '/patient/journey/return-home', icon: Home, stageNum: 8 },
      ]
    },
    {
      label: 'Support & Account',
      items: [
        { name: 'Messages & Support', path: '/patient/messages', icon: MessageSquare, badge: 'Active' },
        { name: 'Settings', path: '/patient/settings', icon: Settings },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 xl:w-72 bg-[#073B57] text-white flex flex-col transition-transform duration-300 ease-in-out border-r border-[#0B5678] ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 flex items-center justify-between border-b border-[#0B5678]/80">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#073B57] shadow-md">
              <HeartHandshake className="w-6 h-6 text-[#FF791B]" />
            </div>
            <div>
              <div className="flex items-center gap-1 font-display font-extrabold text-xl tracking-tight leading-none">
                <span>HOKENA</span>
                <span className="text-[#FF791B]">CARE</span>
              </div>
              <span className="text-[9px] uppercase font-bold tracking-widest text-slate-300 block mt-1">
                Patient Portal
              </span>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Patient Mini Banner */}
        <div className="p-4 bg-[#0B5678]/60 mx-3 my-3 rounded-2xl border border-[#0B5678] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF791B] to-amber-400 text-white flex items-center justify-center font-bold text-base shadow-sm">
            {user?.fullName?.charAt(0) || 'P'}
          </div>
          <div className="flex-1 min-w-0">
            <h5 className="font-bold text-xs text-white truncate">{user?.fullName || 'Patient'}</h5>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-1.5 py-0.5 rounded">
                {user?.id}
              </span>
              <span className="text-[10px] text-emerald-400 font-medium">Stage {currentStage}</span>
            </div>
          </div>
        </div>

        {/* Nav Links Menu */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6">
          {navSections.map((section) => (
            <div key={section.label}>
              <div className="px-3 mb-2 text-[10px] uppercase font-bold tracking-wider text-slate-400">
                {section.label}
              </div>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isCurrentJourneyStage = item.stageNum === currentStage;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        if (window.innerWidth < 1024) onClose();
                      }}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                          isActive
                            ? 'bg-[#FF791B] text-white shadow-md shadow-orange-500/25 font-bold'
                            : 'text-slate-200 hover:bg-[#0B5678] hover:text-white'
                        }`
                      }
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </div>

                      {isCurrentJourneyStage && (
                        <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-white text-[#073B57] animate-pulse">
                          Active
                        </span>
                      )}

                      {item.badge && !isCurrentJourneyStage && (
                        <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500 text-white">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Coordinator Contact Card at Bottom */}
        <div className="p-3 m-3 bg-[#0B5678]/50 rounded-2xl border border-[#0B5678] text-xs">
          <div className="flex items-center gap-2.5 mb-2">
            <img
              src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=150&q=80"
              alt="Coordinator"
              className="w-8 h-8 rounded-full object-cover border border-emerald-400"
            />
            <div className="min-w-0">
              <span className="font-bold text-white text-[11px] block truncate">Priya Sharma</span>
              <span className="text-[10px] text-emerald-300">Your Care Manager</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <Link
              to="/patient/messages"
              onClick={() => { if (window.innerWidth < 1024) onClose(); }}
              className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Chat</span>
            </Link>
            <a
              href="https://wa.me/919871044210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-medium transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Call Desk</span>
            </a>
          </div>
        </div>

        {/* Logout button */}
        <div className="p-3 border-t border-[#0B5678]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-rose-300 hover:bg-rose-900/30 hover:text-rose-100 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
