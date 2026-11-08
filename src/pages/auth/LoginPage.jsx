import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  UserCheck,
  Eye,
  EyeOff
} from 'lucide-react';
import { login, switchProfile } from '../../store/authSlice';
import { setStage } from '../../store/journeySlice';
import { useToast } from '../../components/common/ToastNotification';

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('michael.chen@gmail.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { demoProfiles } = useSelector((state) => state.auth);
  const { showToast } = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!identifier || !password) {
      setErrorMessage('Please enter both your email/phone and password.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch(
        login({
          email: identifier,
          fullName: 'Michael Chen',
          country: 'United Kingdom'
        })
      );
      showToast('Welcome back, Michael! Redirecting to your dashboard...', 'success');
      navigate('/patient/dashboard');
    }, 750);
  };

  const handleDemoLogin = (profile) => {
    dispatch(switchProfile(profile.id));
    dispatch(setStage(profile.currentStage));
    showToast(`Logged in as demo patient: ${profile.fullName} (Stage ${profile.currentStage})`, 'success');
    navigate('/patient/dashboard');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 sm:p-6 py-14">
      <div className="max-w-md w-full space-y-7">
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-[#073B57] text-white flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-7 h-7 text-[#FF791B]" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#073B57]">
            Patient Portal Login
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Sign in to manage your medical journey, quotations & visas
          </p>
        </div>

        {/* 1-Click Demo Profiles Box */}
        <div className="p-5 rounded-3xl bg-amber-50/90 border border-amber-200 text-sm shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-amber-950 flex items-center gap-2 uppercase tracking-wider text-xs">
              <Sparkles className="w-4 h-4 text-[#FF791B]" />
              1-Click Demo Patient Accounts:
            </span>
          </div>
          <div className="space-y-2">
            {demoProfiles?.map((dp) => (
              <button
                key={dp.id}
                type="button"
                onClick={() => handleDemoLogin(dp)}
                className="w-full text-left p-3 rounded-2xl bg-white hover:bg-amber-100/80 border border-amber-200 flex items-center justify-between transition-colors shadow-2xs card-hover"
              >
                <div>
                  <span className="font-bold text-[#073B57] block text-sm sm:text-base">{dp.fullName}</span>
                  <span className="text-xs text-slate-500">{dp.country} • {dp.preferredTreatment}</span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#073B57] text-white">
                  Stage {dp.currentStage}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
          {errorMessage && (
            <div className="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-sm text-rose-700 font-medium">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5 text-sm">
            <div>
              <label className="block font-bold text-slate-700 mb-1.5">
                Email Address or Mobile Number
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="name@example.com or +44..."
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B] text-slate-800 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-bold text-slate-700">Password</label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-semibold text-[#0B5678] hover:text-[#FF791B]"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-11 py-3.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B] text-slate-800 text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer text-slate-600 font-medium text-sm">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded-md border-slate-300 text-[#FF791B] focus:ring-[#FF791B]"
                />
                <span>Remember me on this browser</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white font-bold text-base flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.01] disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? (
                <span>Authenticating patient...</span>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-5 h-5 text-[#FF791B]" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-100 text-center text-sm text-slate-500">
            <span>New international patient? </span>
            <Link to="/register" className="font-bold text-[#FF791B] hover:underline">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
