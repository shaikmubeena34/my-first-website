import React, { useState } from 'react';
import { BankAccount } from '../../types/banking';
import { Receipt, CheckCircle2, Zap, Droplet, Wifi, Smartphone, Home, CreditCard, ArrowRight, ShieldCheck } from 'lucide-react';

interface BillPayModalProps {
  accounts: BankAccount[];
  onExecuteBillPay: (
    sourceAccountId: string,
    billerName: string,
    amount: number,
    accountNumberMasked: string,
    category: 'Utilities'
  ) => void;
}

export const BillPayModal: React.FC<BillPayModalProps> = ({ accounts, onExecuteBillPay }) => {
  const billers = [
    { id: 'b1', name: 'Metro Electric & Power Grid', category: 'Electricity', icon: Zap, due: 142.80, dueDate: 'Oct 12, 2026', acct: '•••• 4812' },
    { id: 'b2', name: 'City Municipal Water District', category: 'Water', icon: Droplet, due: 64.50, dueDate: 'Oct 15, 2026', acct: '•••• 9931' },
    { id: 'b3', name: 'Horizon Fiber High-Speed Internet', category: 'Internet', icon: Wifi, due: 89.99, dueDate: 'Oct 18, 2026', acct: '•••• 1024' },
    { id: 'b4', name: 'Apex Wireless Cellular Network', category: 'Mobile', icon: Smartphone, due: 110.00, dueDate: 'Oct 20, 2026', acct: '•••• 7741' },
    { id: 'b5', name: 'Meridian Obsidian Elite Card Balance', category: 'Credit Card', icon: CreditCard, due: 1240.20, dueDate: 'Oct 25, 2026', acct: '•••• 7712' },
    { id: 'b6', name: 'Pacific Crest Property Management', category: 'Rent/Mortgage', icon: Home, due: 2850.00, dueDate: 'Nov 01, 2026', acct: '•••• 3320' },
  ];

  const [selectedBiller, setSelectedBiller] = useState(billers[0]);
  const [sourceId, setSourceId] = useState(accounts[0]?.id || '');
  const [customAmount, setCustomAmount] = useState(billers[0].due.toFixed(2));
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const selectedAccount = accounts.find((a) => a.id === sourceId) || accounts[0];

  const handleSelectBiller = (b: typeof billers[0]) => {
    setSelectedBiller(b);
    setCustomAmount(b.due.toFixed(2));
    setSuccessMsg('');
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(customAmount) || 0;
    if (amt <= 0) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onExecuteBillPay(
        selectedAccount.id,
        selectedBiller.name,
        amt,
        selectedAccount.accountNumberMasked,
        'Utilities'
      );
      setSuccessMsg(`Payment of $${amt.toFixed(2)} to ${selectedBiller.name} successfully scheduled and deducted!`);
    }, 700);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 max-w-2xl mx-auto space-y-6">
      
      {/* Title */}
      <div className="flex items-center justify-between pb-5 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-950 font-display">
            Automated Bill Pay & Invoices
          </h3>
          <p className="text-xs text-slate-500">
            Pay registered utility providers, telecom operators, and municipal agencies with zero fees
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 font-medium">
          <Receipt className="w-3.5 h-3.5" />
          <span>e-Bill Linked</span>
        </div>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-start gap-2.5 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div className="font-semibold">{successMsg}</div>
        </div>
      )}

      {/* Select Biller Cards Grid */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
          Select Linked Biller
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {billers.map((b) => {
            const Icon = b.icon;
            const isSelected = selectedBiller.id === b.id;
            return (
              <div
                key={b.id}
                onClick={() => handleSelectBiller(b)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'border-blue-900 bg-blue-50/50 ring-1 ring-blue-900'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-2xs">
                      <Icon className="w-3.5 h-3.5 text-slate-700" />
                    </div>
                    <span className="text-xs font-bold text-slate-900 line-clamp-1">{b.name}</span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between text-xs mt-2 pt-2 border-t border-slate-200/60">
                  <span className="text-[11px] text-slate-500">Due: {b.dueDate}</span>
                  <span className="font-mono font-bold text-slate-950 tabular-nums">
                    ${b.due.toFixed(2)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pay Details Form */}
      <form onSubmit={handlePay} className="space-y-4 pt-4 border-t border-slate-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
              Pay From Account
            </label>
            <select
              value={sourceId}
              onChange={(e) => setSourceId(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-900"
            >
              {accounts
                .filter((a) => a.type !== 'Credit')
                .map((acc) => (
                  <option key={acc.id} value={acc.id}>
                    {acc.name} (${acc.availableBalance.toFixed(2)})
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
              Payment Amount ($)
            </label>
            <input
              type="number"
              step="0.01"
              min="1"
              required
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono font-bold text-slate-900 tabular-nums"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="w-full py-3 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
        >
          {isProcessing ? (
            <span>Processing Electronic Remittance...</span>
          ) : (
            <>
              <span>Pay ${parseFloat(customAmount || '0').toFixed(2)} to {selectedBiller.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </>
          )}
        </button>
      </form>

    </div>
  );
};
