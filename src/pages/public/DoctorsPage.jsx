import React, { useState, useEffect } from 'react';
import { Search, UserCheck, Sparkles } from 'lucide-react';
import { DOCTORS } from '../../data/mockData';
import { SPECIALITIES } from '../../data/countries';
import DoctorCard from '../../components/patient/DoctorCard';
import { DoctorCardSkeleton } from '../../components/skeletons';

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related doctor card skeletons on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  // Trigger brief realistic skeleton loader when changing filter or searching
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

  const filtered = DOCTORS.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.hospital.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpeciality =
      selectedSpeciality === 'All' || d.speciality.toLowerCase().includes(selectedSpeciality.toLowerCase());

    return matchesSearch && matchesSpeciality;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section data-aos="fade-down" className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
            Renowned Clinical Faculty
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Find Top Specialists & Chief Surgeons in India
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Consult directly with internationally acclaimed surgeons. Complimentary pre-travel video consultations arranged through Hokena Care.
          </p>

          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by doctor name, speciality or hospital..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 text-xs sm:text-sm shadow-xl focus:outline-hidden focus:ring-2 focus:ring-[#FF791B]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar mb-8">
          <button
            onClick={() => handleSpecialityChange('All')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedSpeciality === 'All'
                ? 'bg-[#073B57] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            All Specialities ({DOCTORS.length})
          </button>
          {SPECIALITIES.slice(0, 5).map((spec) => (
            <button
              key={spec}
              onClick={() => handleSpecialityChange(spec)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedSpeciality === spec
                  ? 'bg-[#073B57] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Doctors Grid with Skeleton State */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <DoctorCardSkeleton key={`skeleton-${i}`} />
              ))
            : filtered.map((doctor, idx) => (
                <div key={doctor.id} data-aos="fade-up" data-aos-delay={(idx % 3) * 120} className="h-full flex flex-col">
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
        </div>
      </section>
    </div>
  );
}
