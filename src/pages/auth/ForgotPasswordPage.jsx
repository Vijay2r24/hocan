import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, ArrowRight, KeyRound, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../components/common/ToastNotification';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const { showToast } = useToast();

  const handleReset = (e) => {
    e.preventDefault();
    setIsSent(true);
    showToast(`Password recovery link sent to ${email}`, 'success');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 sm:p-6 py-12">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#073B57] text-white flex items-center justify-center mx-auto shadow-md">
            <KeyRound className="w-6 h-6 text-[#FF791B]" />
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#073B57]">
            Reset Password
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Enter your registered patient email address and we will send you a reset link
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          {isSent ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-[#073B57]">Check Your Email</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We sent a password reset link to <strong className="text-[#073B57]">{email}</strong>. Please check your inbox and spam folders.
              </p>
              <div className="pt-2">
                <Link
                  to="/login"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#073B57] text-white text-xs font-bold"
                >
                  Return to Patient Login
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleReset} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Registered Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="patient@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B] text-slate-800"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#FF791B] hover:bg-[#e6680f] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.01]"
              >
                <span>Send Reset Link</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-1.5 font-bold text-xs text-[#0B5678] hover:text-[#FF791B]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Sign In</span>
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
