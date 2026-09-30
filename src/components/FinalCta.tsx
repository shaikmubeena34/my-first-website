import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Check } from 'lucide-react';
import { PageView } from '../types/banking';

interface FinalCtaProps {
  onOpenAccount: () => void;
  onNavigate: (page: PageView) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenAccount, onNavigate }) => {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background illumination */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-900/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Start in Under 5 Minutes Online</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display max-w-2xl mx-auto text-balance">
          Ready to take control of your finances?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Join thousands of individuals and growing enterprises who trust Meridian Trust 
          for high-yield savings, competitive loans, and uninterrupted digital banking.
        </p>

        {/* Benefits bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>No impact on your credit score to check rates</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>FDIC Insured to federal limits</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>$0 hidden fees</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenAccount}
            className="px-7 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-lg shadow-amber-400/10 flex items-center gap-2"
          >
            <span>Open an Account</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-slate-400" />
            <span>Contact Us</span>
          </button>
        </div>

      </div>
    </section>
  );
};
