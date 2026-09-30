import React from 'react';
import { 
  PiggyBank, 
  Landmark, 
  UserCheck, 
  Home, 
  CreditCard, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { PageView } from '../types/banking';

interface QuickServicesProps {
  onNavigate: (page: PageView) => void;
  onOpenAccount: () => void;
}

export const QuickServices: React.FC<QuickServicesProps> = ({ onNavigate, onOpenAccount }) => {
  const services = [
    {
      id: 'savings',
      title: 'Savings Accounts',
      kicker: '4.85% APY Yield',
      desc: 'Liquid high-yield accounts with daily compounded growth and zero monthly fees.',
      icon: PiggyBank,
      actionPage: 'savings' as PageView,
      highlight: 'Earn 10x national average',
    },
    {
      id: 'current',
      title: 'Current Accounts',
      kicker: 'Everyday Checking',
      desc: 'Smart debit cards, zero overdraft fees, nationwide surcharge-free ATM network.',
      icon: Landmark,
      actionPage: 'current' as PageView,
      highlight: '$0 monthly minimum',
    },
    {
      id: 'personal-loans',
      title: 'Personal Loans',
      kicker: 'From 6.99% Fixed APR',
      desc: 'Unsecured personal financing with same-day approvals and zero origination penalties.',
      icon: UserCheck,
      actionPage: 'loans' as PageView,
      highlight: 'Borrow up to $50,000',
    },
    {
      id: 'home-loans',
      title: 'Home Loans',
      kicker: 'Fixed & Adjustable',
      desc: 'Mortgage refinancing and purchase loans with dedicated lending specialists.',
      icon: Home,
      actionPage: 'loans' as PageView,
      highlight: 'Lock in 6.45% rate',
    },
    {
      id: 'credit-cards',
      title: 'Credit Cards',
      kicker: 'CashBack & Travel',
      desc: 'Up to 3x travel rewards, 0% introductory APR, and luxury metal concierge cards.',
      icon: CreditCard,
      actionPage: 'cards' as PageView,
      highlight: 'Up to $750 welcome bonus',
    },
    {
      id: 'fixed-deposits',
      title: 'Fixed Deposits',
      kicker: 'Up to 5.20% APY',
      desc: 'Guaranteed term deposit certificates spanning 3 to 60 months with FDIC insurance.',
      icon: Clock,
      actionPage: 'deposits' as PageView,
      highlight: 'Guaranteed fixed returns',
    },
    {
      id: 'investments',
      title: 'Investments',
      kicker: 'Wealth Management',
      desc: 'Bespoke portfolios, fiduciary financial advisory, and automated rebalancing.',
      icon: TrendingUp,
      actionPage: 'investments' as PageView,
      highlight: 'Personal portfolio manager',
    },
    {
      id: 'insurance',
      title: 'Insurance',
      kicker: 'Asset & Life Coverage',
      desc: 'Comprehensive term life, mortgage protection, and commercial liability policies.',
      icon: ShieldCheck,
      actionPage: 'personal' as PageView,
      highlight: 'Multi-policy discounts',
    },
  ];

  return (
    <section id="services-section" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-100">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
              Comprehensive Financial Products
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
              Quick Banking Services
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-sm text-slate-600 max-w-md">
            Tailored solutions designed for personal financial freedom and commercial enterprise growth.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                onClick={() => onNavigate(svc.actionPage)}
                className="group relative p-6 bg-slate-50 hover:bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-950 group-hover:text-amber-400 transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-amber-700 bg-amber-50/80 px-2 py-0.5 rounded">
                      {svc.kicker}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-900 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    {svc.highlight}
                  </span>
                  <span className="font-semibold text-slate-900 group-hover:text-amber-600 flex items-center gap-1 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action bar below services */}
        <div className="mt-10 p-5 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <p className="text-sm font-medium">
              Need assistance selecting the right account or credit product?
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs text-slate-300 hover:text-white underline underline-offset-4"
            >
              Speak with a Banker
            </button>
            <button
              onClick={onOpenAccount}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              Open an Account in 5 Min
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
