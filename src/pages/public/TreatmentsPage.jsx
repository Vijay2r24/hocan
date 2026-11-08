import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { TREATMENTS } from '../../data/mockData';
import { SPECIALITIES } from '../../data/countries';
import { TreatmentCardSkeleton } from '../../components/skeletons';

export default function TreatmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related treatment card skeletons on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const handleSpecialityChange = (spec) => {
    setSelectedSpeciality(spec);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 350);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const filtered = TREATMENTS.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpeciality =
      selectedSpeciality === 'All' || t.speciality.toLowerCase().includes(selectedSpeciality.toLowerCase());

    return matchesSearch && matchesSpeciality;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section data-aos="fade-down" className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
            Compare Costs & Procedures
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
            Medical Treatments & Surgeries in India
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Clear, transparent procedural pricing from top JCI-accredited hospitals. Compare costs with US and UK options.
          </p>

          {/* Search Input */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search treatments (e.g. knee replacement, bypass, spine)..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-800 text-sm sm:text-base shadow-xl focus:outline-hidden focus:ring-2 focus:ring-[#FF791B]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speciality Filters */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar mb-10">
          <button
            onClick={() => handleSpecialityChange('All')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
              selectedSpeciality === 'All'
                ? 'bg-[#073B57] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            All Specialities ({TREATMENTS.length})
          </button>
          {SPECIALITIES.slice(0, 6).map((spec) => (
            <button
              key={spec}
              onClick={() => handleSpecialityChange(spec)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                selectedSpeciality === spec
                  ? 'bg-[#073B57] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Results Grid with Skeleton State */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <TreatmentCardSkeleton key={`skeleton-treatment-${i}`} />
              ))
            : filtered.map((treatment, idx) => (
            <div
              key={treatment.id}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 120}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col group card-hover h-full"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3.5 right-3.5 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {treatment.successRate} Success
                </span>
                <span className="absolute bottom-3.5 left-3.5 bg-[#073B57]/95 text-white backdrop-blur-xs text-xs font-bold px-3 py-1 rounded-lg">
                  {treatment.speciality}
                </span>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-[#073B57] group-hover:text-[#FF791B] transition-colors mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {treatment.shortDesc}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-xs text-slate-400 block font-bold uppercase">Cost in India</span>
                    <span className="font-bold text-lg text-[#073B57] font-mono">{treatment.costIndia}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-bold uppercase">US/UK Cost</span>
                    <span className="font-bold text-sm text-rose-500 font-mono line-through">
                      {treatment.costUS}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Hospital Stay:</span>
                    <strong className="text-slate-800">{treatment.stayHospital}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Stay in India:</span>
                    <strong className="text-slate-800">{treatment.stayIndia}</strong>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                    Save {treatment.savings}
                  </span>
                  <Link
                    to={`/treatments/${treatment.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B5678] hover:text-[#FF791B] transition-colors"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
