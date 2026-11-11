import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROCESS_STEPS = [
  {
    step: '01',
    image: '/images/process/01-initial-contact.jpg',
    title: 'INITIAL CONTACT',
    desc: 'We understand your medical condition, collect essential details, and begin guiding you with clarity and care from your very first enquiry.'
  },
  {
    step: '02',
    image: '/images/process/02-case-review.jpg',
    title: 'CASE REVIEW',
    desc: 'Your medical reports, history, and condition are reviewed by experts to ensure accurate understanding and treatment direction.'
  },
  {
    step: '03',
    image: '/images/process/03-specialist-matching.jpg',
    title: 'SPECIALIST MATCHING',
    desc: 'We connect you with the most suitable specialist in India, ensuring expert care tailored to your specific medical condition.'
  },
  {
    step: '04',
    image: '/images/process/04-online-consultation.jpg',
    title: 'ONLINE CONSULTATION',
    desc: 'Consult with your specialist through a secure video call to discuss your condition and treatment options before planning travel.'
  },
  {
    step: '05',
    image: '/images/process/05-medical-evaluation.jpg',
    title: 'MEDICAL EVALUATION',
    desc: 'The specialist evaluates your case and provides clear advice, treatment recommendations, and next steps for your healthcare journey.'
  },
  {
    step: '06',
    image: '/images/process/06-decision-next-steps.jpg',
    title: 'DECISION & NEXT STEPS',
    desc: 'Based on medical advice, proceed with local tests, travel to India, or receive referral guidance for further expert consultation.'
  },
  {
    step: '07',
    image: '/images/process/07-treatment-plan-cost.jpg',
    title: 'TREATMENT PLAN & COST',
    desc: 'Receive a detailed treatment plan, timeline, and transparent cost estimate to help you make informed and confident healthcare decisions.'
  },
  {
    step: '08',
    image: '/images/process/08-travel-coordination.jpg',
    title: 'TRAVEL COORDINATION',
    desc: 'We manage visa assistance, hospital booking, travel, and recovery planning to ensure a smooth and stress-free experience.'
  },
  {
    step: '09',
    image: '/images/process/09-global-support.jpg',
    title: 'SUPPORT WHEREVER YOU ARE',
    desc: 'Our global network provides continuous support across regions including the US, UK, Saudi Arabia and Africa throughout your medical journey.'
  }
];

export default function TrustedProcessCards({ defaultShowAll = true }) {
  const [showAll, setShowAll] = useState(defaultShowAll);
  const displayedSteps = showAll ? PROCESS_STEPS : PROCESS_STEPS.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block mb-2.5">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#073B57] tracking-tight">
            Trusted, Transparent, Ethical
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 sm:mt-4 leading-relaxed max-w-2xl mx-auto">
            From your very first enquiry to your safe return home, we guide you every step of the way with compassionate clinical expertise and zero hidden costs.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-16 sm:gap-y-20 items-stretch">
          {displayedSteps.map((card, idx) => (
            <div
              key={card.step}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 120}
              className="group relative flex flex-col h-full"
            >
              {/* Image Frame with Number Badge */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100/90 flex-shrink-0">
                {/* Number Badge (Dark Navy Rectangle matching reference) */}
                <div className="absolute top-0 left-0 bg-[#073B57] text-white font-mono font-bold text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5 z-10 shadow-xs tracking-wider">
                  {card.step}
                </div>

                {/* Card Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Overlapping Content Box */}
              <div className="relative -mt-14 sm:-mt-16 mx-3 sm:mx-5 bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-xl shadow-slate-900/6 border border-slate-100 z-20 flex flex-col justify-start flex-1 min-h-[145px] sm:min-h-[160px] transition-all duration-300 group-hover:-translate-y-1">
                {/* Title Line with Vertical Orange Accent Bar */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-1.5 h-4 sm:h-5 bg-[#FF791B] rounded-full shrink-0" />
                  <h3 className="font-display font-extrabold text-sm sm:text-base tracking-wider text-[#FF791B] uppercase">
                    {card.title}
                  </h3>
                </div>

                {/* Description Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Toggle Button & CTA */}
        <div className="mt-14 sm:mt-18 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 hover:border-[#FF791B] text-[#073B57] hover:text-[#FF791B] font-bold text-sm bg-white hover:bg-orange-50/40 shadow-xs transition-all duration-200 cursor-pointer"
          >
            <span>{showAll ? 'Show Overview (3 Steps)' : 'View All 9 Process Steps'}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <Link
            to="/patient/journey/enquiry"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#FF791B] hover:bg-[#e06512] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>Start Step 01 Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
