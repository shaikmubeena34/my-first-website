import React from 'react';
import { PageView } from '../../types/banking';
import { LoanCalculator } from '../LoanCalculator';
import { Home, UserCheck, Car, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface LoansPageProps {
  onOpenAccount: (accountType?: string) => void;
  onNavigate: (page: PageView) => void;
}

export const LoansPage: React.FC<LoansPageProps> = ({ onOpenAccount, onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
              Competitive Consumer & Commercial Lending
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
              Transparent Financing Tailored to Your Ambitions
            </h1>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              Whether purchasing a new family home, expanding commercial manufacturing lines, 
              or consolidating debt, Meridian Trust provides predictable fixed rates, fast digital approvals, and zero hidden prepayment fees.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Calculator */}
      <LoanCalculator
        onApplyLoan={(details) => {
          alert(`[Simulated Pre-Qualification] Application started for $${details.amount.toLocaleString()} over ${details.years} years at ${details.rate}% APR (Est. EMI: $${details.emi}/mo). A lending specialist will contact you.`);
        }}
      />

      {/* Lending Products Breakdown */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-2xl font-bold text-slate-950 font-display mb-8 text-center">
          Our Full Portfolio of Lending Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <Home className="w-8 h-8 text-blue-900 mb-3" />
            <h3 className="text-base font-bold text-slate-900">Residential Mortgages</h3>
            <div className="font-mono text-sm font-bold text-amber-700 my-1">From 6.45% Fixed APR</div>
            <p className="text-xs text-slate-600 mt-2">
              Conforming, jumbo, and FHA home purchase and cash-out refinancing loans up to $3.5 Million.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <UserCheck className="w-8 h-8 text-emerald-700 mb-3" />
            <h3 className="text-base font-bold text-slate-900">Personal Loans</h3>
            <div className="font-mono text-sm font-bold text-amber-700 my-1">From 6.99% Fixed APR</div>
            <p className="text-xs text-slate-600 mt-2">
              Unsecured loans from $5,000 to $50,000 with same-day decision and direct deposit funding.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <Car className="w-8 h-8 text-indigo-700 mb-3" />
            <h3 className="text-base font-bold text-slate-900">Auto Financing</h3>
            <div className="font-mono text-sm font-bold text-amber-700 my-1">From 7.20% Fixed APR</div>
            <p className="text-xs text-slate-600 mt-2">
              New and certified pre-owned vehicle purchases with terms up to 72 months and 0.25% autopay discount.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <Building2 className="w-8 h-8 text-slate-900 mb-3" />
            <h3 className="text-base font-bold text-slate-900">Commercial Term Loans</h3>
            <div className="font-mono text-sm font-bold text-amber-700 my-1">From 7.80% Fixed/Floating</div>
            <p className="text-xs text-slate-600 mt-2">
              Equipment leasing, commercial real estate acquisition, and acquisition capital up to $15 Million.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
