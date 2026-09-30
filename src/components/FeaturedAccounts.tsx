import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { PageView } from '../types/banking';

interface FeaturedAccountsProps {
  onOpenAccount: (accountType?: string) => void;
  onNavigate: (page: PageView) => void;
}

export const FeaturedAccounts: React.FC<FeaturedAccountsProps> = ({ onOpenAccount, onNavigate }) => {
  const accounts = [
    {
      id: 'savings',
      title: 'High-Yield Savings',
      kicker: 'Everyday Growth',
      apy: '4.85% APY',
      minDeposit: '$50 minimum opening deposit',
      popular: false,
      features: [
        'Interest compounded daily, credited monthly',
        'Zero monthly service charge with $500 balance',
        'Free automatic recurring savings sweeps',
        'Direct deposit switch in under 2 minutes',
        'FDIC insured up to $250,000',
      ],
      buttonText: 'Open Savings Account',
    },
    {
      id: 'premium-savings',
      title: 'Apex Private Reserve',
      kicker: 'Premier Wealth Tier',
      apy: '5.15% APY',
      minDeposit: '$25,000 qualifying balance',
      popular: true,
      features: [
        'Top-tier institutional yield rate lock',
        'Dedicated Private Client Relationship Manager',
        'Unlimited complimentary domestic & foreign wires',
        'Zero ATM fees worldwide with automatic fee rebates',
        'Complimentary safety deposit box and estate reviews',
      ],
      buttonText: 'Open Apex Reserve',
    },
    {
      id: 'business',
      title: 'Commercial Business Checking',
      kicker: 'Enterprise & Small Business',
      apy: 'Treasury Yield',
      minDeposit: '$100 opening deposit',
      popular: false,
      features: [
        'Up to 250 free monthly transactions',
        'Seamless QuickBooks, Xero, & NetSuite sync',
        'Multi-user role access controls with Dual Approval',
        'Integrated merchant processing & ACH payroll',
        'Extended commercial credit facility access',
      ],
      buttonText: 'Open Business Account',
    },
    {
      id: 'student',
      title: 'Meridian Future Student',
      kicker: 'Ages 16–24 / Campus Banking',
      apy: '3.20% APY',
      minDeposit: '$0 minimum balance',
      popular: false,
      features: [
        'Zero monthly service fees through graduation',
        'Up to $15 monthly out-of-network ATM fee rebates',
        'Free credit score monitoring & financial literacy hub',
        'Instant peer-to-peer split payment transfers',
        'Apple Pay, Google Pay, & contactless debit card',
      ],
      buttonText: 'Open Student Account',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
              Curated Banking Products
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
              Featured Accounts Designed for Every Milestone
            </h2>
          </div>
          <button
            onClick={() => onNavigate('personal')}
            className="mt-4 md:mt-0 text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1 transition-colors"
          >
            <span>Compare all personal & commercial tiers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accounts.map((acc) => (
            <div
              key={acc.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 ${
                acc.popular
                  ? 'bg-slate-950 text-white border-2 border-amber-400 shadow-xl relative'
                  : 'bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div>
                {/* Popular Marker */}
                {acc.popular ? (
                  <div className="flex items-center justify-between text-xs text-amber-400 mb-4 font-semibold">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      Client Choice
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">TIER-PREMIUM</span>
                  </div>
                ) : (
                  <div className="text-xs font-medium text-slate-500 mb-4">
                    {acc.kicker}
                  </div>
                )}

                <h3 className={`text-lg font-bold ${acc.popular ? 'text-white' : 'text-slate-950'}`}>
                  {acc.title}
                </h3>

                <div className="mt-4 pb-4 border-b border-slate-200/60 dark:border-slate-800">
                  <div className={`text-2xl sm:text-3xl font-extrabold font-mono tabular-nums ${acc.popular ? 'text-amber-400' : 'text-slate-950'}`}>
                    {acc.apy}
                  </div>
                  <div className={`text-xs mt-1 ${acc.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    {acc.minDeposit}
                  </div>
                </div>

                {/* Features List */}
                <ul className="mt-5 space-y-2.5 text-xs">
                  {acc.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${acc.popular ? 'text-amber-400' : 'text-emerald-600'}`} />
                      <span className={acc.popular ? 'text-slate-300' : 'text-slate-600'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => onOpenAccount(acc.title)}
                  className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                    acc.popular
                      ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <span>{acc.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
