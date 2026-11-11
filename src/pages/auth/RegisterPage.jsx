import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  UserPlus,
  Mail,
  Lock,
  Phone,
  Globe,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Eye,
  EyeOff
} from 'lucide-react';
import { COUNTRIES } from '../../data/countries';
import { register } from '../../store/authSlice';
import { useToast } from '../../components/common/ToastNotification';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState(COUNTRIES[0].name);
  const [dialCode, setDialCode] = useState(COUNTRIES[0].dial_code);
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCountryChange = (e) => {
    const selectedCountry = COUNTRIES.find((c) => c.name === e.target.value);
    if (selectedCountry) {
      setCountry(selectedCountry.name);
      setDialCode(selectedCountry.dial_code);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match. Please verify both password fields.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password should be at least 6 characters long.');
      return;
    }

    if (!agreeTerms) {
      setErrorMsg('Please agree to the Terms of Service and Medical Privacy Policy to register.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch(
        register({
          fullName,
          email,
          country,
          dialCode,
          phone: `${dialCode} ${mobileNumber}`,
          currentCondition: 'General International Patient Inquiry'
        })
      );
      showToast('Registration successful! Welcome to Hokena Care.', 'success');
      navigate('/patient/dashboard');
    }, 750);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 sm:p-6 py-12">
      <div className="max-w-lg w-full space-y-6">
        <div className="text-center space-y-2">
          <img
            src="/logo.png"
            alt="Hokena Care Logo"
            className="w-16 h-16 rounded-full mx-auto shadow-md object-contain"
          />
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#073B57]">
            Register as a Patient
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Create an international patient account to receive treatment quotations & visas
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4 text-xs">
            {/* Full Name */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Patient Full Name (as per Passport) *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Michael James Chen"
                className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B] text-slate-800"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Email Address *
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

            {/* Country & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Country of Residence *
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={country}
                    onChange={handleCountryChange}
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B] text-slate-800 appearance-none bg-white"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.code} value={c.name}>
                        {c.flag} {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <div className="flex gap-2">
                  <span className="w-20 p-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-600 font-mono text-center flex items-center justify-center font-bold">
                    {dialCode}
                  </span>
                  <input
                    type="tel"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="7911 123456"
                    className="flex-1 p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B] text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* Password & Confirm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Password *</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 chars"
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B] text-slate-800"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Confirm Password *</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter password"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B] text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer text-slate-600">
                <input
                  type="checkbox"
                  required
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded-md border-slate-300 text-[#FF791B] focus:ring-[#FF791B]"
                />
                <span className="leading-relaxed">
                  I agree to the{' '}
                  <Link to="/faqs" className="text-[#FF791B] font-bold underline">
                    Terms & Conditions
                  </Link>{' '}
                  and consent to medical records evaluation under HIPAA/GDPR clinical privacy regulations.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-[#FF791B] hover:bg-[#e6680f] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 transition-all hover:scale-[1.01] disabled:opacity-50"
            >
              {isLoading ? (
                <span>Registering patient profile...</span>
              ) : (
                <>
                  <span>Create Patient Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-100 text-center text-xs text-slate-500">
            <span>Already have an account? </span>
            <Link to="/login" className="font-bold text-[#073B57] hover:underline">
              Sign In here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
