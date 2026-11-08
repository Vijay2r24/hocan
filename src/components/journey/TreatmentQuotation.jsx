import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Download,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  Hospital,
  User,
  Clock,
  ShieldCheck,
  DollarSign,
  AlertCircle,
  FileText,
  Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { acceptQuotation, requestQuotationClarification } from '../../store/journeySlice';
import { addNotification } from '../../store/notificationSlice';
import { useToast } from '../common/ToastNotification';
import ConfirmationModal from '../common/ConfirmationModal';

export default function TreatmentQuotation() {
  const dispatch = useDispatch();
  const { quotation } = useSelector((state) => state.journey);
  const { user } = useSelector((state) => state.auth);
  const { showToast } = useToast();

  const [currency, setCurrency] = useState('INR');
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showClarifyModal, setShowClarifyModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [questionText, setQuestionText] = useState('');

  // Exchange rates relative to USD
  const rates = {
    USD: { rate: 1, symbol: '$' },
    GBP: { rate: 0.79, symbol: '£' },
    EUR: { rate: 0.92, symbol: '€' },
    AED: { rate: 3.67, symbol: 'AED ' },
    INR: { rate: 84.2, symbol: '₹' }
  };

  const convert = (usdAmount) => {
    const val = usdAmount * rates[currency].rate;
    const locale = currency === 'INR' ? 'en-IN' : 'en-US';
    return `${rates[currency].symbol}${Math.round(val).toLocaleString(locale)}`;
  };

  const handleAcceptConfirm = () => {
    dispatch(acceptQuotation());
    dispatch(
      addNotification({
        title: 'Treatment Plan Confirmed!',
        message: 'You have accepted the quotation from Fortis Memorial. Medical Visa Stage 4 is now unlocked!',
        type: 'visa',
        link: '/patient/journey/visa'
      })
    );
    showToast('Quotation accepted! Stage 4 (Medical Visa) is now active.', 'success');

    // Confetti effect
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const handleClarifySubmit = (e) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    dispatch(requestQuotationClarification(questionText));
    dispatch(
      addNotification({
        title: 'Clarification Request Sent',
        message: `Your inquiry has been relayed to coordinator Priya Sharma and Dr. Ashok Rajgopal's team.`,
        type: 'coordinator',
        link: '/patient/messages'
      })
    );
    showToast('Your question has been sent to your coordinator. We will reply promptly.', 'success');
    setShowClarifyModal(false);
    setQuestionText('');
  };

  const isAccepted = quotation.status === 'ACCEPTED';

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Quotation Header Banner */}
      <div className="p-6 bg-[#073B57] text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#FF791B] text-white">
              {quotation.quotationId}
            </span>
            <span className="text-xs text-slate-300">
              Issued: {quotation.dateIssued} • Valid until: {quotation.validUntil}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
            Official Treatment Plan & Institutional Quotation
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Provided directly by hospital finance board with 0% markup via Hokena Care
          </p>
        </div>

        {/* Currency Switcher & Status */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl border border-white/20">
            {['USD', 'GBP', 'EUR', 'AED', 'INR'].map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  currency === curr
                    ? 'bg-white text-[#073B57] shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowPrintModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Printable View</span>
          </button>
        </div>
      </div>

      {/* Hospital & Clinical Summary Cards */}
      <div className="p-6 border-b border-slate-100 bg-slate-50/60 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
          <div className="flex items-center gap-2 text-slate-400 mb-1">
            <Hospital className="w-4 h-4 text-[#0B5678]" />
            <span className="uppercase font-bold tracking-wider">Partner Hospital</span>
          </div>
          <h4 className="font-bold text-sm text-[#073B57]">{quotation.hospital}</h4>
          <p className="text-slate-500 mt-0.5">{quotation.hospitalLocation}</p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
          <div className="flex items-center gap-2 text-slate-400 mb-1">
            <User className="w-4 h-4 text-[#0B5678]" />
            <span className="uppercase font-bold tracking-wider">Chief Surgeon</span>
          </div>
          <h4 className="font-bold text-sm text-[#073B57]">{quotation.doctorName}</h4>
          <p className="text-slate-500 mt-0.5">{quotation.treatmentName}</p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
          <div className="flex items-center gap-2 text-slate-400 mb-1">
            <Clock className="w-4 h-4 text-[#0B5678]" />
            <span className="uppercase font-bold tracking-wider">Estimated Stay</span>
          </div>
          <h4 className="font-bold text-sm text-[#073B57]">{quotation.estimatedDuration}</h4>
          <p className="text-emerald-700 font-semibold mt-0.5">3 Nights Deluxe Inpatient + Hotel</p>
        </div>
      </div>

      {/* Itemized Cost Breakdown Table */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold text-base text-[#073B57] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Itemized Hospital Cost Breakdown
          </h3>
          <span className="text-xs text-slate-500">All prices in {currency}</span>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-xl mb-6">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase font-bold text-[11px] border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Component</th>
                <th className="py-3 px-4">Clinical Inclusions & Specification</th>
                <th className="py-3 px-4 text-right">Estimated Cost ({currency})</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {quotation.costBreakdown.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#073B57]">{item.item}</td>
                  <td className="py-3.5 px-4 text-slate-600">{item.notes}</td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-[#073B57]">
                    {item.cost === 0 ? (
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        FREE ($0)
                      </span>
                    ) : (
                      convert(item.cost)
                    )}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-50/80 font-bold text-sm border-t-2 border-slate-200">
                <td colSpan="2" className="py-3.5 px-4 text-[#073B57]">
                  Subtotal: Hospital Medical Package
                </td>
                <td className="py-3.5 px-4 text-right font-mono text-[#073B57]">
                  {convert(quotation.hospitalTotal)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Accommodation & Living Expenses Estimates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 text-xs">
            <h4 className="font-bold text-[#073B57] mb-2 flex items-center justify-between">
              <span>Accommodation Estimate (Patient + Attendant)</span>
              <span className="font-mono text-slate-800 font-bold">
                {convert(quotation.accommodationEstimate.total)}
              </span>
            </h4>
            <p className="text-slate-600 mb-1 font-medium">
              {quotation.accommodationEstimate.type}
            </p>
            <p className="text-slate-500 mb-2">
              {quotation.accommodationEstimate.nights} nights @ {convert(quotation.accommodationEstimate.ratePerNight)}/night
            </p>
            <p className="text-[11px] text-slate-500 italic">
              {quotation.accommodationEstimate.notes}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 text-xs">
            <h4 className="font-bold text-[#073B57] mb-2 flex items-center justify-between">
              <span>Local Expenses & Pharmacy Estimate</span>
              <span className="font-mono text-slate-800 font-bold">
                {convert(quotation.otherExpensesEstimate.total)}
              </span>
            </h4>
            <div className="space-y-1 text-slate-600">
              <div className="flex justify-between">
                <span>Local Transit & Hospital Commute</span>
                <span className="font-mono">{convert(quotation.otherExpensesEstimate.localTransportation)}</span>
              </div>
              <div className="flex justify-between">
                <span>Dietary Meals & Mineral Water</span>
                <span className="font-mono">{convert(quotation.otherExpensesEstimate.patientSpecialDiet)}</span>
              </div>
              <div className="flex justify-between">
                <span>Post-discharge Pharmacy Take-home</span>
                <span className="font-mono">{convert(quotation.otherExpensesEstimate.miscellaneousMedicinesPostDischarge)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grand Total & International Savings Comparison Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#073B57] via-[#0B5678] to-[#073B57] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md mb-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#FF791B] block mb-1">
              Total Estimated Investment
            </span>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-display font-extrabold text-white font-mono">
                {convert(quotation.grandTotal)}
              </span>
              <span className="text-xs text-slate-300">
                (Hospital + Stay + Local Logistics)
              </span>
            </div>
            <p className="text-xs text-slate-200 mt-2">
              Payment is made directly at Fortis Hospital billing desk upon admission.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/10 border border-white/20 text-xs max-w-sm">
            <div className="flex items-center gap-1.5 text-emerald-300 font-bold mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>You save approx. {quotation.savingsPercentage}% vs UK / US private care</span>
            </div>
            <p className="text-slate-300">
              Equivalent surgery in UK/US private hospitals averages approx.{' '}
              <span className="font-bold text-white line-through">{convert(quotation.comparisonUK)}</span>.
            </p>
          </div>
        </div>

        {/* Terms & Conditions list */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 mb-6">
          <h5 className="font-bold text-[#073B57] mb-2 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-slate-400" />
            Terms & Medical Package Conditions:
          </h5>
          <ul className="list-disc pl-5 space-y-1 text-slate-500">
            {quotation.termsAndConditions.map((term, i) => (
              <li key={i}>{term}</li>
            ))}
          </ul>
        </div>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setShowClarifyModal(true)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-[#0B5678]" />
              <span>Request Clarification</span>
            </button>

            <button
              onClick={() => setShowPrintModal(true)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="w-full sm:w-auto">
            {isAccepted ? (
              <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Quotation Accepted! Medical Visa Stage 4 Unlocked.</span>
              </div>
            ) : (
              <button
                onClick={() => setShowAcceptModal(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF791B] hover:bg-[#e6680f] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Accept Quotation & Unlock Medical Visa</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Accept Confirmation Modal */}
      <ConfirmationModal
        isOpen={showAcceptModal}
        onClose={() => setShowAcceptModal(false)}
        onConfirm={handleAcceptConfirm}
        title="Accept Treatment Quotation"
        message="By accepting this institutional quotation, your case will transition to Stage 4 (Medical Visa). Hokena Care will issue your official Hospital Visa Assistance Letter within 24 hours. No upfront payment is required now."
        confirmText="Confirm & Accept Plan"
        type="primary"
      />

      {/* Clarification Request Modal */}
      {showClarifyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 animate-in zoom-in-95">
            <h3 className="font-bold text-lg text-[#073B57] mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#FF791B]" />
              Ask Doctor or Coordinator a Question
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Have doubts about implant brands, room upgrade options, or stay duration? Ask your dedicated coordinator Priya Sharma.
            </p>
            <form onSubmit={handleClarifySubmit} className="space-y-4">
              <textarea
                rows={4}
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="Type your question or alternative budget request here..."
                required
                className="w-full p-3 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:border-[#FF791B] focus:ring-1 focus:ring-[#FF791B]"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowClarifyModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-[#073B57] hover:bg-[#0B5678] text-white shadow-xs"
                >
                  Submit Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Printable Preview Modal */}
      {showPrintModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-6 border-b border-slate-200">
              <div>
                <h3 className="font-display font-extrabold text-xl text-[#073B57]">
                  HOKENA CARE <span className="text-[#FF791B]">ESTIMATE</span>
                </h3>
                <p className="text-xs text-slate-500">Ref: {quotation.quotationId}</p>
              </div>
              <button
                onClick={() => setShowPrintModal(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-semibold"
              >
                Close Preview
              </button>
            </div>

            <div className="py-6 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl">
                <div>
                  <p className="font-bold text-[#073B57]">Patient:</p>
                  <p>{user?.fullName} ({user?.id})</p>
                  <p>{user?.country}</p>
                </div>
                <div>
                  <p className="font-bold text-[#073B57]">Provider:</p>
                  <p>{quotation.hospital}</p>
                  <p>Surgeon: {quotation.doctorName}</p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-100 text-[10px] font-bold uppercase text-slate-600">
                    <tr>
                      <th className="p-2">Item</th>
                      <th className="p-2 text-right">Cost ({currency})</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {quotation.costBreakdown.map((c, i) => (
                      <tr key={i}>
                        <td className="p-2">{c.item}</td>
                        <td className="p-2 text-right font-mono">{c.cost === 0 ? 'FREE' : convert(c.cost)}</td>
                      </tr>
                    ))}
                    <tr className="bg-slate-50 font-bold">
                      <td className="p-2">Grand Total Estimate</td>
                      <td className="p-2 text-right font-mono text-[#073B57]">{convert(quotation.grandTotal)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[11px] text-slate-400">
                Official document issued via Hokena Care Patient Support Services. Valid for 30 days.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end gap-2">
              <button
                onClick={() => {
                  window.print();
                }}
                className="flex items-center gap-2 bg-[#073B57] text-white px-4 py-2 rounded-xl text-xs font-bold"
              >
                <Printer className="w-4 h-4" />
                <span>Print Document</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
