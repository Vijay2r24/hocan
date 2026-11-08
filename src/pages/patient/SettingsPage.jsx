import React, { useState, useEffect } from 'react';
import {
  Bell,
  Lock,
  Globe,
  Shield,
  Save,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { useToast } from '../../components/common/ToastNotification';
import { SettingsSkeleton } from '../../components/skeletons';

export default function SettingsPage() {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related settings skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const [notificationPrefs, setNotificationPrefs] = useState({
    emailUpdates: true,
    whatsappAlerts: true,
    smsReminders: true,
    doctorMessageAlerts: true
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const [language, setLanguage] = useState('English');
  const [dataSharing, setDataSharing] = useState(true);

  if (isLoading) {
    return <SettingsSkeleton />;
  }

  const handleSaveNotifications = (e) => {
    e.preventDefault();
    showToast('Notification preferences updated.', 'success');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      showToast('New passwords do not match.', 'error');
      return;
    }
    showToast('Password changed successfully.', 'success');
    setPasswordData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
          Account & Privacy Settings
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Manage your security credentials, notification channels and medical data privacy preferences.
        </p>
      </div>

      {/* Notifications Settings */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
        <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
          <Bell className="w-5 h-5 text-[#FF791B]" />
          Notification Channels & Alerts
        </h3>

        <form onSubmit={handleSaveNotifications} className="space-y-3 text-xs">
          <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 cursor-pointer">
            <div>
              <p className="font-bold text-slate-700">WhatsApp Instant Alerts</p>
              <p className="text-slate-400">Receive flight updates, appointment links & visa approvals via WhatsApp</p>
            </div>
            <input
              type="checkbox"
              checked={notificationPrefs.whatsappAlerts}
              onChange={(e) => setNotificationPrefs({ ...notificationPrefs, whatsappAlerts: e.target.checked })}
              className="w-4 h-4 rounded text-[#FF791B] focus:ring-[#FF791B]"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 cursor-pointer">
            <div>
              <p className="font-bold text-slate-700">Email Dossier & Document Copies</p>
              <p className="text-slate-400">Receive official PDF quotations, medical invitations and receipts</p>
            </div>
            <input
              type="checkbox"
              checked={notificationPrefs.emailUpdates}
              onChange={(e) => setNotificationPrefs({ ...notificationPrefs, emailUpdates: e.target.checked })}
              className="w-4 h-4 rounded text-[#FF791B] focus:ring-[#FF791B]"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 cursor-pointer">
            <div>
              <p className="font-bold text-slate-700">SMS Reminders</p>
              <p className="text-slate-400">Flight landing notifications and pickup driver phone numbers</p>
            </div>
            <input
              type="checkbox"
              checked={notificationPrefs.smsReminders}
              onChange={(e) => setNotificationPrefs({ ...notificationPrefs, smsReminders: e.target.checked })}
              className="w-4 h-4 rounded text-[#FF791B] focus:ring-[#FF791B]"
            />
          </label>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white text-xs font-bold"
            >
              Save Notification Preferences
            </button>
          </div>
        </form>
      </div>

      {/* Change Password */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
        <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
          <Lock className="w-5 h-5 text-[#0B5678]" />
          Change Password
        </h3>

        <form onSubmit={handlePasswordChange} className="space-y-4 text-xs max-w-md">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Current Password</label>
            <input
              type="password"
              required
              value={passwordData.currentPassword}
              onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">New Password</label>
            <input
              type="password"
              required
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Confirm New Password</label>
            <input
              type="password"
              required
              value={passwordData.confirmNewPassword}
              onChange={(e) => setPasswordData({ ...passwordData, confirmNewPassword: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#FF791B] hover:bg-[#e6680f] text-white text-xs font-bold"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Privacy & Compliance */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4 text-xs">
        <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-600" />
          HIPAA & Clinical Data Governance
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Your diagnostic medical scans and clinical reports are stored under AES-256 end-to-end encryption. They are shared strictly with accredited hospital clinical boards for the explicit purpose of surgical evaluation.
        </p>
        <div className="flex items-center gap-2 pt-2">
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
            ✓ HIPAA Verified
          </span>
          <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-800 font-bold border border-sky-200">
            ✓ GDPR Data Protection Certified
          </span>
        </div>
      </div>
    </div>
  );
}
