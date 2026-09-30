import React from 'react';
import { PageView } from '../../types/banking';
import { Smartphone, Zap, ShieldCheck, Send, Receipt, CreditCard, FileText, ArrowRight, Play } from 'lucide-react';

interface DigitalBankingPageProps {
  onOpenDemo: () => void;
  onOpenAccount: () => void;
  onNavigate: (page: PageView) => void;
}

export const DigitalBankingPage: React.FC<DigitalBankingPageProps> = ({
  onOpenDemo,
  onOpenAccount,
  onNavigate,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                Digital Omnichannel Infrastructure
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
                Frictionless Banking on Any Screen, Anywhere on Earth
              </h1>
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                Experience uninterrupted access to your wealth with real-time fund transfers, 
                instant mobile check deposit, biometric card management, and automated utility bill payments.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={onOpenDemo}
                  className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Launch Interactive Online Demo</span>
                </button>
                <button
                  onClick={onOpenAccount}
                  className="px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                >
                  Open an Account Online
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <img
                  src="/src/assets/images/digital_banking_app_1790777023823.jpg"
                  alt="Meridian Trust mobile digital banking application"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
            <Zap className="w-7 h-7 text-amber-500" />
            <h3 className="text-base font-bold text-slate-950">Instant Real-Time Payments (RTP)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Send and receive funds in under 15 seconds across US banks with zero transaction charges.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
            <Receipt className="w-7 h-7 text-blue-900" />
            <h3 className="text-base font-bold text-slate-950">Smart Bill Pay & e-Invoices</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consolidate utilities, cell phone bills, and credit cards with scheduled automated debits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
            <CreditCard className="w-7 h-7 text-emerald-700" />
            <h3 className="text-base font-bold text-slate-950">Card Freeze & Limit Guard</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Temporarily freeze cards with 1 tap. Adjust daily ATM and point-of-sale spending limits on the fly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
            <Smartphone className="w-7 h-7 text-indigo-700" />
            <h3 className="text-base font-bold text-slate-950">Mobile Remote Check Deposit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Snap a photo of any check for immediate funds availability up to $25,000 per business day.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
            <FileText className="w-7 h-7 text-slate-800" />
            <h3 className="text-base font-bold text-slate-950">Digital Tax & Statement Vault</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instant PDF export of 7 years of statements, tax 1099 forms, and raw CSV transaction ledgers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
            <ShieldCheck className="w-7 h-7 text-blue-950" />
            <h3 className="text-base font-bold text-slate-950">Adaptive Fraud Sentinel</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Real-time anomaly scoring, automated SMS transaction verification, and zero customer fraud liability.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
