import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧', label: 'English' },
  { code: 'ar', name: 'العربية', flag: '🇦🇪', label: 'Arabic' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', label: 'French' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', label: 'Russian' },
  { code: 'sw', name: 'Kiswahili', flag: '🇰🇪', label: 'Swahili' },
  { code: 'uz', name: 'Oʻzbekcha', flag: '🇺🇿', label: 'Uzbek' }
];

export default function LanguageSelector({ variant = 'light' }) {
  const [selected, setSelected] = useState(LANGUAGES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const buttonStyles =
    variant === 'dark'
      ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
      : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${buttonStyles}`}
      >
        <span className="text-sm">{selected.flag}</span>
        <span className="hidden md:inline">{selected.name}</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in zoom-in-95">
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400">
            Select Language
          </div>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{lang.flag}</span>
                <span>{lang.name}</span>
                <span className="text-[11px] text-slate-400">({lang.label})</span>
              </div>
              {selected.code === lang.code && (
                <Check className="w-3.5 h-3.5 text-[#16A36A]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
