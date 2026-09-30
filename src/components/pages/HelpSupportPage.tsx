import React from 'react';
import { PageView } from '../../types/banking';
import { HelpCircle, ShieldAlert, FileText, PhoneCall, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HelpSupportPageProps {
  onNavigate: (page: PageView) => void;
  onOpenDemo: () => void;
}

export const HelpSupportPage: React.FC<HelpSupportPageProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
              Help Center & Emergency Assistance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              How Can Meridian Trust Assist You Today?
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Find immediate self-service solutions, security action checklists, 
              and priority communication numbers for urgent account matters.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Urgent Action Box */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-6 bg-rose-50 border border-rose-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 text-rose-700" />
            </div>
            <div>
              <h3 className="text-base font-bold text-rose-950">
                Card Lost, Stolen, or Suspicious Activity Detected?
              </h3>
              <p className="text-xs text-rose-800 mt-1 max-w-xl leading-relaxed">
                Freeze your card immediately in 1 click through the Digital Banking portal to block all new merchant charges, 
                or call our 24/7 dedicated Emergency Fraud Desk.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDemo}
              className="px-4 py-2.5 text-xs font-semibold text-rose-950 bg-white hover:bg-rose-100 border border-rose-300 rounded-xl transition-colors"
            >
              Freeze Card in Online Portal
            </button>
            <a
              href="tel:18005557233"
              className="px-4 py-2.5 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-800 rounded-xl transition-colors font-mono"
            >
              1-800-555-SAFE
            </a>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <Lock className="w-8 h-8 text-blue-900" />
            <h3 className="text-base font-bold text-slate-900">Online Banking & Security Access</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Assistance with multi-factor passcodes, biometric login setup, credential resets, and browser compatibility.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1"
            >
              <span>Contact Security Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <FileText className="w-8 h-8 text-amber-600" />
            <h3 className="text-base font-bold text-slate-900">Dispute a Transaction</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If you identify an unrecognized debit or card charge, file an electronic dispute within 60 days of your statement date.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1"
            >
              <span>Submit Dispute Claim</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <PhoneCall className="w-8 h-8 text-emerald-700" />
            <h3 className="text-base font-bold text-slate-900">Wire & Direct Deposit Setup</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Step-by-step instructions on locating your ABA routing number and generating direct deposit authorization letters.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1"
            >
              <span>View Routing Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
