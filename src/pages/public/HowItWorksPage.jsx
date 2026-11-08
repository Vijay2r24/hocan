import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Video,
  FileCheck2,
  FileBadge,
  Plane,
  Stethoscope,
  HeartPulse,
  Home,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { TimelineSkeleton } from '../../components/skeletons';

const stepDetails = [
  {
    stage: 1,
    title: 'ENQUIRY & SCAN REVIEW',
    subtitle: 'From the comfort of your home',
    icon: FileText,
    action: 'Submit Medical Enquiry',
    link: '/patient/journey/enquiry',
    points: [
      'Upload your existing MRI, CT scan, or blood reports through our secure portal.',
      'Our senior medical board reviews your diagnosis within 4 to 6 hours.',
      'Receive initial specialist opinions and cost estimates with zero fees.'
    ]
  },
  {
    stage: 2,
    title: 'DOCTOR VIDEO CONSULTATION',
    subtitle: 'Direct face-to-face video conference with your chief surgeon',
    icon: Video,
    action: 'Book Free Video Call',
    link: '/patient/journey/consultation',
    points: [
      'Speak directly with your operating surgeon via secure video telemedicine.',
      'Discuss robotic surgery options, implant brands, and recovery duration.',
      'Get your treatment questions answered before booking travel.'
    ]
  },
  {
    stage: 3,
    title: 'TREATMENT PLAN & QUOTATION',
    subtitle: 'Transparent institutional billing with zero markups',
    icon: FileCheck2,
    action: 'View Quotation Demo',
    link: '/patient/journey/confirmation',
    points: [
      'Receive official itemized package quotes directly from hospital finance.',
      'Includes surgeon fees, robotic theater, implants, and private deluxe suite stay.',
      'Estimated accommodation cost for patient and attendant near hospital.',
      'Accept quotation online to unlock your Medical Visa letter.'
    ]
  },
  {
    stage: 4,
    title: 'MEDICAL VISA (VAL) ASSISTANCE',
    subtitle: 'Fast e-Medical Visa approvals within 24 to 72 hours',
    icon: FileBadge,
    action: 'Visa Assistance Details',
    link: '/patient/journey/visa',
    points: [
      'Hospital issues official Visa Assistance Letter (VAL) within 24 hours.',
      'Up to two family attendants receive Medical Attendant Visas.',
      'We guide your online submission on the official Indian e-Visa portal.',
      'Our hospital team handles local FRRO police registration upon arrival.'
    ]
  },
  {
    stage: 5,
    title: 'TRAVEL & AIRPORT VIP RECEPTION',
    subtitle: 'Complimentary private chauffeur meet & greet in Delhi',
    icon: Plane,
    action: 'View Airport Logistics',
    link: '/patient/journey/travel',
    points: [
      'Dedicated private air-conditioned car and driver waiting at terminal arrivals.',
      'Complimentary local high-speed 5G SIM card and wheelchair assistance.',
      'Escort to your serviced apartment (450m from hospital) with kitchen amenities.'
    ]
  },
  {
    stage: 6,
    title: 'HOSPITAL ADMISSION & SURGERY',
    subtitle: 'Cutting-edge clinical intervention by renowned clinicians',
    icon: Stethoscope,
    action: 'View Clinical Care',
    link: '/patient/journey/treatment',
    points: [
      'Private deluxe inpatient suite with attendant bed and television.',
      'Robotic surgical precision (Mako & Da Vinci) minimizing recovery time.',
      'Bedside international coordinator fluent in your language.',
      'Daily morning rounds by chief surgeon and live updates sent to family.'
    ]
  },
  {
    stage: 7,
    title: 'RECOVERY & PHYSIOTHERAPY',
    subtitle: 'Supervised recuperation and gentle rehabilitation',
    icon: HeartPulse,
    action: 'Recovery Milestones',
    link: '/patient/journey/recovery',
    points: [
      'Personalized physiotherapy sessions twice daily for rapid mobility.',
      'Customized meals prepared to your dietary or religious preferences.',
      'Pain management titration to ensure comfortable, painless healing.'
    ]
  },
  {
    stage: 8,
    title: 'SAFE RETURN HOME & TELEMEDICINE',
    subtitle: '6-Month continuous telemedicine continuity of care',
    icon: Home,
    action: 'Post-Treatment Program',
    link: '/patient/journey/return-home',
    points: [
      'Chief surgeon issues official Fit-to-Fly Medical Certificate for airlines.',
      'Airport departure chauffeur transfer with wheelchair assistance.',
      'Consolidated medical discharge summary and 30-day medication pack.',
      'Scheduled video follow-ups at 2 weeks, 6 weeks, and 3 months after landing.'
    ]
  }
];

export default function HowItWorksPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related timeline skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section data-aos="fade-down" className="bg-gradient-to-b from-[#073B57] to-[#0B5678] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block">
            Simple 8-Step Pathway
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white">
            How Hokena Care Works
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
            From your first inquiry at home to safe return and long-term recovery, here is your complete journey in plain language.
          </p>
        </div>
      </section>

      {/* 8 Clear Steps with Page-Related Skeleton State */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        {isLoading ? (
          <TimelineSkeleton count={6} />
        ) : (
          <div className="space-y-8">
          {stepDetails.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.stage}
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-xs card-hover grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-4 flex items-center md:items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#073B57] to-[#0B5678] text-white flex items-center justify-center font-display font-extrabold text-2xl shadow-md flex-shrink-0">
                    {step.stage}
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#FF791B] block">
                      Stage 0{step.stage}
                    </span>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#073B57] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{step.subtitle}</p>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-2.5">
                  <ul className="space-y-2">
                    {step.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-3 flex justify-start md:justify-end">
                  <Link
                    to={step.link}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#073B57] hover:bg-[#FF791B] text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
                  >
                    <span>{step.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        )}
      </section>

      {/* CTA Box */}
      <section data-aos="zoom-in" className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-white p-10 sm:p-14 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#073B57]">
            Start Your Stage 1 Medical Enquiry
          </h3>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            It takes just 2 minutes to submit your details. Our clinical team will reach out with a customized plan.
          </p>
          <div className="pt-2">
            <Link
              to="/patient/journey/enquiry"
              className="inline-flex items-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-md transition-all hover:scale-105"
            >
              <span>Submit Free Enquiry Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
