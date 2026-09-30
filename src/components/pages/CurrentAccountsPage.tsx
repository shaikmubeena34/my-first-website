import React from 'react';
import { PageView } from '../../types/banking';
import { Landmark, Check, CreditCard, ShieldCheck, ArrowRight, Zap, RefreshCw } from 'lucide-react';

interface CurrentAccountsPageProps {
  onOpenAccount: (accountType?: string) => void;
  onNavigate: (page: PageView) => void;
}

export const CurrentAccountsPage: React.FC<CurrentAccountsPageProps> = ({ onOpenAccount, onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
              Everyday Transaction Accounts
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
              Checking & Current Accounts with Zero Junk Fees
            </h1>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              Experience modern everyday banking: contactless Visa debit card, fee-free overdraft buffers, 
              surcharge-free access to 55,000+ ATMs, and instant peer-to-peer transfers.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenAccount('Premier Preferred Checking')}
                className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                Open Preferred Checking
              </button>
              <button
                onClick={() => onNavigate('cards')}
                className="px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              >
                Explore Debit & Credit Cards
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Account Comparison */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Standard Everyday Checking
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Premier Preferred Checking
              </h3>
              <div className="my-4 font-mono text-2xl font-bold text-slate-900">
                $0 Monthly Fee
              </div>
              <p className="text-xs text-slate-600 mb-6">
                No monthly maintenance fee with direct deposit of $500 or more, or $1,500 average daily balance.
              </p>

              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Free contactless Visa Debit Card with chip protection</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Free ATM access at 55,000+ Allpoint locations nationwide</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Early direct deposit (get paid up to 2 days sooner)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> $50 fee-free overdraft cushion on debit purchases</li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <button
                onClick={() => onOpenAccount('Premier Preferred Checking')}
                className="w-full py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg"
              >
                Open Preferred Checking
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-amber-400 shadow-md flex flex-col justify-between relative">
            <div className="absolute top-4 right-4 bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
              Private Tier
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                High Net Worth Relationship Checking
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Meridian Executive Checking
              </h3>
              <div className="my-4 font-mono text-2xl font-bold text-amber-600">
                Complimentary Worldwide
              </div>
              <p className="text-xs text-slate-600 mb-6">
                Designed for clients maintaining $50,000+ across combined Meridian deposit and investment accounts.
              </p>

              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Unlimited ATM fee rebates at ANY ATM worldwide</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Free incoming and outgoing domestic & international wires</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Weighted obsidian metal debit card with concierge</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Dedicated Senior Private Banker phone extension</li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <button
                onClick={() => onOpenAccount('Executive Private Checking')}
                className="w-full py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg"
              >
                Open Executive Checking
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
