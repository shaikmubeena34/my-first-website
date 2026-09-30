import React, { useState } from 'react';
import { PageView } from '../../types/banking';
import { Clock, ShieldCheck, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

interface FixedDepositsPageProps {
  onOpenAccount: (accountType?: string) => void;
  onNavigate: (page: PageView) => void;
}

export const FixedDepositsPage: React.FC<FixedDepositsPageProps> = ({ onOpenAccount, onNavigate }) => {
  const cdTiers = [
    { term: '6 Months', apy: 5.20, min: '$1,000', popular: true },
    { term: '12 Months', apy: 5.05, min: '$1,000', popular: false },
    { term: '18 Months', apy: 4.80, min: '$1,000', popular: false },
    { term: '24 Months', apy: 4.65, min: '$1,000', popular: false },
    { term: '36 Months', apy: 4.40, min: '$1,000', popular: false },
    { term: '60 Months', apy: 4.25, min: '$1,000', popular: false },
  ];

  const [selectedTier, setSelectedTier] = useState(cdTiers[0]);
  const [depositAmount, setDepositAmount] = useState(50000);

  // Maturity calculation
  const months = parseInt(selectedTier.term);
  const totalMaturity = depositAmount * Math.pow(1 + (selectedTier.apy / 100) / 12, months);
  const totalProfit = totalMaturity - depositAmount;

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
              Guaranteed Term Deposit Certificates
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
              Lock in Guaranteed Yields Up to 5.20% APY
            </h1>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              Shield your idle cash reserves against market volatility with FDIC-insured fixed certificates. 
              Enjoy guaranteed yields, flexible renewal options, and automated interest sweeps into your checking account.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive CD Calculator */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-slate-950">
            Fixed Deposit Maturity Calculator
          </h2>

          {/* Select Term */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
              Select Certificate Tenure
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {cdTiers.map((t) => (
                <button
                  key={t.term}
                  onClick={() => setSelectedTier(t)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedTier.term === t.term
                      ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="text-xs font-bold">{t.term}</div>
                  <div className={`text-xs font-mono font-bold mt-1 ${selectedTier.term === t.term ? 'text-amber-400' : 'text-amber-600'}`}>
                    {t.apy}% APY
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Slider for Deposit */}
          <div>
            <div className="flex justify-between items-center text-xs mb-2">
              <label className="font-semibold text-slate-700">Certificate Principal Deposit</label>
              <span className="font-mono font-bold text-base text-slate-950">${depositAmount.toLocaleString('en-US')}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={500000}
              step={1000}
              value={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
            />
          </div>

          {/* Payout Display */}
          <div className="p-6 bg-slate-900 text-white rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <span className="text-xs text-slate-400">Guaranteed Return APY</span>
              <div className="text-3xl font-extrabold font-mono text-amber-400 mt-1">{selectedTier.apy}%</div>
              <span className="text-[10px] text-slate-400">Fixed rate lock</span>
            </div>
            <div>
              <span className="text-xs text-slate-400">Total Interest Earned</span>
              <div className="text-3xl font-extrabold font-mono text-emerald-400 mt-1">
                +${totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <span className="text-[10px] text-slate-400">Compounded monthly</span>
            </div>
            <div>
              <span className="text-xs text-slate-400">Total Payout at Maturity</span>
              <div className="text-3xl font-extrabold font-mono text-white mt-1">
                ${totalMaturity.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <span className="text-[10px] text-slate-400">Principal + Returns</span>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onOpenAccount(`${selectedTier.term} CD at ${selectedTier.apy}% APY`)}
              className="px-6 py-3 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors"
            >
              Open {selectedTier.term} Certificate of Deposit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
