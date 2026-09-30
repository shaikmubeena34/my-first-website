import React from 'react';
import { PageView } from '../../types/banking';
import { TrendingUp, ShieldCheck, UserCheck, Calendar, ArrowRight, CheckCircle2, LineChart } from 'lucide-react';

interface InvestmentsPageProps {
  onNavigate: (page: PageView) => void;
  onOpenAccount: (accountType?: string) => void;
}

export const InvestmentsPage: React.FC<InvestmentsPageProps> = ({ onNavigate, onOpenAccount }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                Fiduciary Wealth Management
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
                Institutional Wealth Management & Private Advisory
              </h1>
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                Preserve generational wealth with tailored investment strategies, tax-efficient portfolio management, 
                and comprehensive estate planning under strict fiduciary standards.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  Schedule Private Client Consultation
                </button>
                <button
                  onClick={() => onOpenAccount('Meridian Private Wealth Portfolio')}
                  className="px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                >
                  Explore Managed Portfolios
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <img
                  src="/src/assets/images/wealth_investment_advisor_1790777047238.jpg"
                  alt="Senior private wealth advisor reviewing bespoke portfolio strategy with executive client"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Advisory Pillars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <LineChart className="w-8 h-8 text-blue-900" />
            <h3 className="text-base font-bold text-slate-900">Discretionary Portfolios</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Global multi-asset asset allocation models balancing equity growth, fixed income yield, and inflation hedging.
            </p>
            <div className="pt-2 text-xs text-amber-700 font-semibold font-mono">
              From $100,000 minimum
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <ShieldCheck className="w-8 h-8 text-emerald-700" />
            <h3 className="text-base font-bold text-slate-900">Retirement & IRA Rollovers</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seamless 401(k) rollover execution, Roth conversion modeling, and sustainable withdrawal rate planning.
            </p>
            <div className="pt-2 text-xs text-amber-700 font-semibold font-mono">
              Tax-advantaged architecture
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <UserCheck className="w-8 h-8 text-slate-900" />
            <h3 className="text-base font-bold text-slate-900">Estate & Trust Services</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Family trust administration, charitable foundations, and cross-generational succession structuring.
            </p>
            <div className="pt-2 text-xs text-amber-700 font-semibold font-mono">
              Full fiduciary responsibility
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
