import React from 'react';
import { PageView } from '../../types/banking';
import { Briefcase, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2, DollarSign, Building } from 'lucide-react';

interface BusinessBankingPageProps {
  onNavigate: (page: PageView) => void;
  onOpenAccount: (accountType?: string) => void;
}

export const BusinessBankingPage: React.FC<BusinessBankingPageProps> = ({ onNavigate, onOpenAccount }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                Commercial & Enterprise Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
                Treasury & Credit Facilities Built for Enterprise Velocity
              </h1>
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                Empower your operating cash flow with automated liquidity sweeps, multi-entity checking, 
                revolving lines of credit, and dedicated Commercial Relationship Managers.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenAccount('Commercial Business Checking')}
                  className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  Open Business Account
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                >
                  Schedule Commercial Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <img
                  src="/src/assets/images/business_commercial_banking_1790777036487.jpg"
                  alt="Meridian Trust commercial banking team in executive boardroom"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
            Comprehensive Corporate Treasury Architecture
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Engineered to streamline accounts payable, optimize yield on idle reserves, and finance capital expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <Briefcase className="w-8 h-8 text-blue-900" />
            <h3 className="text-base font-bold text-slate-900">Commercial Checking & Sweeps</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated end-of-day cash concentration sweeps from operating accounts into high-yield overnight money market vehicles.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Free monthly electronic wires</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Multi-user permissions & Dual Approval</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <DollarSign className="w-8 h-8 text-amber-600" />
            <h3 className="text-base font-bold text-slate-900">Revolving Lines of Credit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Flexible liquidity facilities from $100,000 to $25 Million to bridge working capital cycles and inventory acquisitions.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Prime-based competitive spreads</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Same-day draw request turnaround</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <Building className="w-8 h-8 text-indigo-900" />
            <h3 className="text-base font-bold text-slate-900">Merchant Acquiring & Payroll</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Next-day merchant settlement, POS card terminals, and integrated batch ACH payroll disbursement with automated tax filing.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> QuickBooks and NetSuite direct sync</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Dedicated fraud analyst monitoring</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};
