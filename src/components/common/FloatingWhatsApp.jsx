import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Popup */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-[#073B57] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=150&q=80"
                  alt="Coordinator"
                  className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#073B57]"></span>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Hokena Care Desk</h4>
                <p className="text-xs text-emerald-300">Typically replies in 5 mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-xs text-slate-700 leading-relaxed border border-slate-100">
              <p className="font-semibold text-[#073B57] mb-1">Namaste & Warm Greetings! 🙏</p>
              How can we assist your medical travel to India today? Feel free to ask about treatment costs, doctor availability or visa letters.
            </div>
            <a
              href="https://wa.me/919871044210?text=Hello%20Hokena%20Care,%20I%20would%20like%20to%20inquire%20about%20medical%20treatment%20in%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl text-xs font-semibold shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp (+91 98710 44210)
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Support"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="text-sm font-semibold tracking-wide pr-1 hidden sm:inline">
          {isOpen ? 'Close' : 'Chat With Us'}
        </span>
      </button>
    </div>
  );
}
