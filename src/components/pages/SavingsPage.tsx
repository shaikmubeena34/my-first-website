import React, { useState } from 'react';
import { PageView } from '../../types/banking';
import { PiggyBank, ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, DollarSign } from 'lucide-react';

interface SavingsPageProps {
  onOpenAccount: (accountType?: string) => void;
  onNavigate: (page: PageView) => void;
}

export const SavingsPage: React.FC<SavingsPageProps> = ({ onOpenAccount, onNavigate }) => {
  const [balanceInput, setBalanceInput] = useState<number>(25000);
  const apy = 4.85;
  const yearlyInterest = (balanceInput * (apy / 100)).toFixed(2);
  const fiveYearInterest = (balanceInput * (Math.pow(1 + apy / 100 / 12, 60) - 1)).toFixed(2);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
              High-Yield Deposit Accounts
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
              Grow Your Wealth with 4.85% APY High-Yield Savings
            </h1>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              Earn more than 10x the national bank average with complete liquidity. 
              No locking periods, zero maintenance fees with a $500 balance, and full FDIC insurance up to $250,000.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenAccount('High-Yield Savings')}
                className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                Open High-Yield Savings
              </button>
              <button
                onClick={() => onNavigate('deposits')}
                className="px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              >
                Compare Fixed Term CDs (Up to 5.20%)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Savings Yield Estimator */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950 mb-2">
            Interactive Compound Interest Growth Simulator
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            Enter your planned savings reserve to see how daily compounded interest accelerates your balance:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-slate-700">Planned Initial Deposit</label>
              <span className="font-mono font-bold text-base text-slate-950">${balanceInput.toLocaleString('en-US')}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={250000}
              step={1000}
              value={balanceInput}
              onChange={(e) => setBalanceInput(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-slate-900 text-white rounded-xl">
            <div>
              <div className="text-[11px] text-slate-400">Current APY Yield</div>
              <div className="font-mono text-2xl font-bold text-amber-400 mt-1">4.85%</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Compounded daily</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Estimated 1-Year Earnings</div>
              <div className="font-mono text-2xl font-bold text-white mt-1">+${yearlyInterest}</div>
              <div className="text-[10px] text-emerald-400 mt-0.5">Credited monthly</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Estimated 5-Year Earnings</div>
              <div className="font-mono text-2xl font-bold text-emerald-400 mt-1">+${fiveYearInterest}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Total interest earned</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => onOpenAccount('High-Yield Savings')}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors"
            >
              Start Earning 4.85% APY Today
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
