import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, CheckCircle2, DollarSign, Calendar, Percent } from 'lucide-react';

interface LoanCalculatorProps {
  onApplyLoan?: (details: { amount: number; rate: number; years: number; emi: number }) => void;
}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({ onApplyLoan }) => {
  const [loanType, setLoanType] = useState<'home' | 'personal' | 'auto' | 'business'>('home');
  const [amount, setAmount] = useState<number>(350000);
  const [rate, setRate] = useState<number>(6.85);
  const [tenureYears, setTenureYears] = useState<number>(25);

  // Quick preset switcher
  const handlePresetChange = (type: 'home' | 'personal' | 'auto' | 'business') => {
    setLoanType(type);
    if (type === 'home') {
      setAmount(380000);
      setRate(6.85);
      setTenureYears(30);
    } else if (type === 'personal') {
      setAmount(25000);
      setRate(10.50);
      setTenureYears(4);
    } else if (type === 'auto') {
      setAmount(42000);
      setRate(7.20);
      setTenureYears(5);
    } else if (type === 'business') {
      setAmount(175000);
      setRate(7.95);
      setTenureYears(7);
    }
  };

  // Monthly EMI Calculation: [P * r * (1+r)^n] / [(1+r)^n - 1]
  const calculation = useMemo(() => {
    const principal = amount;
    const monthlyRate = rate / 12 / 100;
    const totalMonths = tenureYears * 12;

    if (monthlyRate === 0 || totalMonths === 0) {
      const emi = principal / (totalMonths || 1);
      return {
        monthlyEmi: emi,
        totalRepayment: principal,
        totalInterest: 0,
        principalPercent: 100,
        interestPercent: 0,
      };
    }

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalRepayment = emi * totalMonths;
    const totalInterest = totalRepayment - principal;
    const principalPercent = (principal / totalRepayment) * 100;
    const interestPercent = (totalInterest / totalRepayment) * 100;

    return {
      monthlyEmi: Math.round(emi * 100) / 100,
      totalRepayment: Math.round(totalRepayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      principalPercent: Math.round(principalPercent),
      interestPercent: Math.round(interestPercent),
    };
  }, [amount, rate, tenureYears]);

  return (
    <section id="loan-calculator" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Interactive Financial Planning
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
            Personal & Commercial Loan Calculator
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Calculate your estimated monthly installment (EMI), total interest liability, 
            and complete repayment schedule with transparent institutional terms.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Preset Buttons Bar (Interactive Buttons) */}
          <div className="p-3 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center gap-1.5 justify-center">
            <button
              onClick={() => handlePresetChange('home')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                loanType === 'home'
                  ? 'bg-white text-slate-950 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Home Mortgage (6.85%)
            </button>
            <button
              onClick={() => handlePresetChange('personal')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                loanType === 'personal'
                  ? 'bg-white text-slate-950 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Personal Loan (10.50%)
            </button>
            <button
              onClick={() => handlePresetChange('auto')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                loanType === 'auto'
                  ? 'bg-white text-slate-950 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Auto & Vehicle (7.20%)
            </button>
            <button
              onClick={() => handlePresetChange('business')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                loanType === 'business'
                  ? 'bg-white text-slate-950 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Commercial Credit (7.95%)
            </button>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Input Controls (7 Columns) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Loan Amount */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                    Loan Amount
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-lg px-2.5 py-1 bg-slate-50">
                    <span className="text-xs font-semibold text-slate-500 mr-1">$</span>
                    <input
                      type="number"
                      min={1000}
                      max={2000000}
                      step={5000}
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value) || 0)}
                      className="w-28 text-right font-mono font-bold text-sm text-slate-900 bg-transparent focus:outline-none tabular-nums"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={1500000}
                  step={5000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>$5,000</span>
                  <span>$750,000</span>
                  <span>$1,500,000</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Percent className="w-3.5 h-3.5 text-slate-400" />
                    Annual Interest Rate (APR)
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-lg px-2.5 py-1 bg-slate-50">
                    <input
                      type="number"
                      min={1.0}
                      max={25.0}
                      step={0.05}
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value) || 0)}
                      className="w-20 text-right font-mono font-bold text-sm text-slate-900 bg-transparent focus:outline-none tabular-nums"
                    />
                    <span className="text-xs font-semibold text-slate-500 ml-1">%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={3.0}
                  max={20.0}
                  step={0.05}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>3.0%</span>
                  <span>11.5%</span>
                  <span>20.0%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    Loan Tenure (Years)
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-lg px-2.5 py-1 bg-slate-50">
                    <input
                      type="number"
                      min={1}
                      max={30}
                      step={1}
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Number(e.target.value) || 1)}
                      className="w-16 text-right font-mono font-bold text-sm text-slate-900 bg-transparent focus:outline-none tabular-nums"
                    />
                    <span className="text-xs font-semibold text-slate-500 ml-1">Yrs ({tenureYears * 12} Mos)</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Perks highlights */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No prepayment penalties</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Rate discount with autopay</span>
                </div>
              </div>

            </div>

            {/* Output Display Card (5 Columns) */}
            <div className="lg:col-span-5 bg-slate-950 text-white p-6 sm:p-8 rounded-xl flex flex-col justify-between border border-slate-800">
              
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-amber-400 mb-1">
                  Estimated Monthly Repayment (EMI)
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                  ${calculation.monthlyEmi.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  <span className="text-xs font-sans text-slate-400 font-normal ml-1">/ month</span>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Principal Borrowed</span>
                    <span className="font-mono font-semibold text-white tabular-nums">
                      ${amount.toLocaleString('en-US')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Total Interest Payable</span>
                    <span className="font-mono font-semibold text-amber-400 tabular-nums">
                      ${calculation.totalInterest.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
                    <span className="text-slate-300 font-medium">Total Amount Payable</span>
                    <span className="font-mono font-bold text-base text-white tabular-nums">
                      ${calculation.totalRepayment.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                {/* Breakdown Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1.5">
                    <span>Principal: {calculation.principalPercent}%</span>
                    <span>Interest: {calculation.interestPercent}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden flex">
                    <div 
                      style={{ width: `${calculation.principalPercent}%` }} 
                      className="bg-blue-500 h-full"
                    />
                    <div 
                      style={{ width: `${calculation.interestPercent}%` }} 
                      className="bg-amber-400 h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => {
                    if (onApplyLoan) {
                      onApplyLoan({
                        amount,
                        rate,
                        years: tenureYears,
                        emi: calculation.monthlyEmi,
                      });
                    }
                  }}
                  className="w-full py-3 px-4 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Apply with This Estimate</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2">
                  Sample estimate. Actual terms subject to credit score and underwriting.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
