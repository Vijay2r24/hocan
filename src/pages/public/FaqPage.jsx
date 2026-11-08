import React, { useState, useEffect } from 'react';
import { Search, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../../data/mockData';
import { FaqSkeleton } from '../../components/skeletons';

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndices, setOpenIndices] = useState([0, 1]);
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related FAQ skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', 'Medical Visa & FRRO', 'Costs & Quotations', 'Travel & Accommodation', 'Clinical Care & Language', 'Post-Treatment & Follow-up'];

  const filtered = FAQS.filter((f) => {
    const matchesTab = activeTab === 'All' || f.category === activeTab;
    const matchesSearch =
      f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const toggleAccordion = (idx) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section data-aos="fade-down" className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
            Got Questions? We Have Answers
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Learn about medical visa approvals, institutional hospital quotations, airport concierge, interpreter support, and post-discharge recovery.
          </p>

          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g. visa letter, currency, translator)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 text-xs sm:text-sm shadow-xl focus:outline-hidden focus:ring-2 focus:ring-[#FF791B]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs & List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === cat
                  ? 'bg-[#073B57] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isLoading ? (
          <FaqSkeleton count={5} />
        ) : (
          <div className="space-y-4">
            {filtered.map((item, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#073B57] hover:text-[#FF791B] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-orange-50 text-[#FF791B] flex items-center justify-center font-bold text-xs flex-shrink-0">
                        Q
                      </span>
                      <span>{item.question}</span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      <p className="pl-10">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
