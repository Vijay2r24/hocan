import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Building,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useToast } from '../../components/common/ToastNotification';
import { ContactSkeleton } from '../../components/skeletons';

export default function ContactPage() {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related contact skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your message has been sent to our medical desk. We will respond within 2 hours.', 'success');
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section data-aos="fade-down" className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
            We Are Here for You
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Contact Hokena Care Patient Support
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Our multi-lingual medical desk is available 24 hours a day, 7 days a week to answer your inquiries, evaluate reports, and arrange urgent travel.
          </p>
        </div>
      </section>

      {/* Main Contact Grid with Page-Related Skeleton */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6">
        {isLoading ? (
          <ContactSkeleton />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info */}
          <div data-aos="fade-right" className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <h3 className="font-display font-bold text-xl text-[#073B57]">
                24/7 International Desk
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF791B] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#073B57]">Emergency Helpline & WhatsApp</h4>
                    <p className="text-slate-600 font-mono">+91 98710 44210</p>
                    <p className="text-[11px] text-emerald-600 font-semibold">Available 24 hours daily</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0B5678] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#073B57]">Clinical Email Triage</h4>
                    <p className="text-slate-600">care@hokenacare.com</p>
                    <p className="text-[11px] text-slate-400">Reports evaluated within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#16A36A] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#073B57]">Global Headquarters</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Level 4, Two Horizon Center, Golf Course Road, DLF Phase 5, Gurugram, Delhi NCR 122002, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/919871044210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl text-xs font-bold shadow-md transition-all hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Direct WhatsApp Chat (+91 98710 44210)</span>
                </a>
              </div>
            </div>

            {/* Regional Hubs */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3 text-xs">
              <h4 className="font-bold text-sm text-[#073B57] uppercase tracking-wider">
                International Representation Desks
              </h4>
              <div className="grid grid-cols-2 gap-2 text-slate-600">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold block text-[#073B57]">🇬🇧 London Office</span>
                  <span>10 Harley Street, London W1G 9PF</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold block text-[#073B57]">🇰🇪 Nairobi Hub</span>
                  <span>Westlands Medical Plaza, Nairobi</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold block text-[#073B57]">🇴🇲 Muscat Desk</span>
                  <span>Al Khuwair, Muscat, Sultanate of Oman</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold block text-[#073B57]">🇺🇿 Tashkent Desk</span>
                  <span>Amir Timur Ave, Tashkent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
              <div className="mb-6">
                <span className="text-xs uppercase font-bold tracking-wider text-[#FF791B]">
                  Send an Inquiry
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#073B57] mt-1">
                  Connect with a Medical Travel Advisor
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out this form and our international patient team will reach out within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h4 className="font-bold text-lg text-emerald-900">Message Received!</h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our patient coordinator has received your request and will contact you via WhatsApp and Email promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Miller"
                        className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7911 123456"
                        className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Country of Residence *</label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. United Kingdom"
                        className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Message / Treatment Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know your diagnosis, preferred hospital or travel dates..."
                      className="w-full p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#FF791B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4 text-[#FF791B]" />
                    <span>Send Message to Medical Team</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        )}
      </section>
    </div>
  );
}
