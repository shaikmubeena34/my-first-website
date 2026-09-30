import React from 'react';
import { PageView } from '../../types/banking';
import { PiggyBank, Landmark, CreditCard, Home, ShieldCheck, ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';

interface PersonalBankingPageProps {
  onNavigate: (page: PageView) => void;
  onOpenAccount: (accountType?: string) => void;
}

export const PersonalBankingPage: React.FC<PersonalBankingPageProps> = ({ onNavigate, onOpenAccount }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
              Retail Banking Services
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
              Personal Banking Built Around Your Life Goals
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              From liquid high-yield savings to premium cash rewards cards and competitive mortgages, 
              Meridian Trust gives you the tools to grow, preserve, and access your wealth effortlessly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenAccount('High-Yield Savings')}
                className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                Open an Account in 5 Min
              </button>
              <button
                onClick={() => onNavigate('savings')}
                className="px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              >
                Explore High-Yield Savings (4.85% APY)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Suite */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-4">
                <PiggyBank className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">High-Yield Growth Reserve</h3>
              <div className="font-mono text-xl font-bold text-amber-600 my-2">4.85% APY</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Liquid FDIC-insured savings with daily compound interest and automatic recurring transfer rules.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button onClick={() => onNavigate('savings')} className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => onOpenAccount('High-Yield Savings')} className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg">
                Apply
              </button>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Preferred Checking</h3>
              <div className="font-mono text-xl font-bold text-slate-900 my-2">$0 Monthly Fee</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fee-free everyday checking with free nationwide ATM access, mobile check deposit, and overdraft guard.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button onClick={() => onNavigate('current')} className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => onOpenAccount('Premier Preferred Checking')} className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg">
                Apply
              </button>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-900 flex items-center justify-center mb-4">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Credit Cards Suite</h3>
              <div className="font-mono text-xl font-bold text-indigo-600 my-2">Up to 3x Points</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose from unlimited 2% cash back with zero annual fee to luxury metal Obsidian travel benefits.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button onClick={() => onNavigate('cards')} className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1">
                <span>Compare Cards</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-900 flex items-center justify-center mb-4">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Home Mortgages</h3>
              <div className="font-mono text-xl font-bold text-emerald-700 my-2">From 6.45% Fixed</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Purchase or refinance your home with transparent closing cost guarantees and fast underwriting.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button onClick={() => onNavigate('loans')} className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1">
                <span>Mortgage Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
