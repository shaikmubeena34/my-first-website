import React from 'react';
import { PageView } from '../../types/banking';
import { Building2, ShieldCheck, Landmark, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (page: PageView) => void;
  onOpenAccount: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate, onOpenAccount }) => {
  const leadership = [
    { name: 'Arthur Pendelton', title: 'President & Chief Executive Officer', tenure: '28 Years Banking Leadership' },
    { name: 'Dr. Evelyn Morales', title: 'Chief Risk Officer & Head of Regulatory Compliance', tenure: 'Former Federal Reserve Examiner' },
    { name: 'Marcus Sterling', title: 'Chief Information & Security Officer', tenure: 'Ex-Department of Defense Cyber Directorate' },
    { name: 'Clara Chen', title: 'Head of Private Wealth & Commercial Banking', tenure: '22 Years Institutional Asset Management' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
              Our Heritage & Stewardship
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
              Over Four Decades of Institutional Trust
            </h1>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              Founded in 1984, Meridian Trust Bank, N.A. was chartered with a singular mission: 
              to provide uncompromising financial stability, honest transparent lending, and disciplined fiduciary guidance 
              to families and enterprises across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics of Strength */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-slate-950">$38.4B</div>
            <div className="text-xs text-slate-500 mt-1">Total Assets Under Management</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-slate-950">420,000+</div>
            <div className="text-xs text-slate-500 mt-1">Active Retail & Business Clients</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-emerald-600">14.2%</div>
            <div className="text-xs text-slate-500 mt-1">Tier 1 Capital Ratio (Well Above Regulatory Min)</div>
          </div>
          <div>
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-amber-600">42 Years</div>
            <div className="text-xs text-slate-500 mt-1">Continuous Banking Stewardship</div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
            The Three Pillars of Meridian Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <Landmark className="w-8 h-8 text-blue-900" />
            <h3 className="text-base font-bold text-slate-900">Capital Conservatism</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We maintain capital buffers significantly above Basel III requirements, keeping depositor funds secure through all economic cycles.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <ShieldCheck className="w-8 h-8 text-emerald-700" />
            <h3 className="text-base font-bold text-slate-900">Zero Predatory Practices</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We eliminated deceptive account maintenance penalties, punitive overdraft traps, and fine-print rate escalators.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <Award className="w-8 h-8 text-amber-600" />
            <h3 className="text-base font-bold text-slate-900">Community Reinvestment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Over $450 Million deployed in CRA qualified community development, affordable housing financing, and local small business grants.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-slate-950 font-display mb-6">
            Executive Governance & Risk Committee
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadership.map((leader, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-sm text-slate-900">{leader.name}</div>
                <div className="text-xs text-slate-600 mt-1">{leader.title}</div>
                <div className="text-[11px] font-mono text-slate-400 mt-3 pt-2 border-t border-slate-100">
                  {leader.tenure}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
