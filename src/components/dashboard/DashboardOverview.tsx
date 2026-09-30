import React, { useState } from 'react';
import { 
  BankAccount, 
  Transaction, 
  DashboardTab 
} from '../../types/banking';
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Send, 
  Receipt, 
  CreditCard, 
  FileText, 
  Search, 
  Eye, 
  EyeOff, 
  TrendingUp, 
  ShieldCheck, 
  X,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

interface DashboardOverviewProps {
  accounts: BankAccount[];
  transactions: Transaction[];
  onTabChange: (tab: DashboardTab) => void;
  onOpenTransfer: () => void;
  onOpenBillPay: () => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  accounts,
  transactions,
  onTabChange,
  onOpenTransfer,
  onOpenBillPay,
}) => {
  const [hideBalances, setHideBalances] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'credit' | 'debit'>('all');
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);

  // Total balance computation
  const totalLiquidAssets = accounts
    .filter((a) => a.type !== 'Credit')
    .reduce((sum, a) => sum + a.balance, 0);

  const filteredTransactions = transactions.filter((tx) => {
    const matchesFilter = filterType === 'all' || tx.type === filterType;
    const matchesSearch =
      tx.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.reference.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Balance Privacy Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Total Liquid Portfolio
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-mono tabular-nums">
              {hideBalances
                ? '••••••••••'
                : `$${totalLiquidAssets.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            </span>
            <button
              onClick={() => setHideBalances(!hideBalances)}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              title={hideBalances ? 'Show balances' : 'Hide balances for privacy'}
            >
              {hideBalances ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
            <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
              <TrendingUp className="w-3.5 h-3.5" />
              +$348.65 this month
            </span>
            <span>·</span>
            <span>FDIC Insured to $250k</span>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onOpenTransfer}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors shadow-xs flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5 text-amber-400" />
            <span>Send Money</span>
          </button>
          <button
            onClick={onOpenBillPay}
            className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Receipt className="w-3.5 h-3.5 text-slate-600" />
            <span>Pay a Bill</span>
          </button>
          <button
            onClick={() => onTabChange('cards')}
            className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <CreditCard className="w-3.5 h-3.5 text-slate-600" />
            <span>Manage Cards</span>
          </button>
        </div>
      </div>

      {/* Account Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {accounts.map((acc) => (
          <div
            key={acc.id}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">
                  {acc.type}
                </span>
                <span className="font-mono text-slate-400 text-xs">
                  {acc.accountNumberMasked}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {acc.name}
              </h4>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100">
              <div className="text-[11px] text-slate-500">
                {acc.type === 'Credit' ? 'Current Balance' : 'Available Balance'}
              </div>
              <div className={`text-xl font-bold font-mono tabular-nums ${acc.type === 'Credit' ? 'text-rose-600' : 'text-slate-950'}`}>
                {hideBalances
                  ? '••••••'
                  : `$${Math.abs(acc.availableBalance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
              </div>
              {acc.apy && (
                <div className="text-[10px] text-amber-700 font-semibold font-mono mt-1">
                  APY Yield: {acc.apy}%
                </div>
              )}
              {acc.creditLimit && (
                <div className="text-[10px] text-slate-400 font-mono mt-1">
                  Limit: ${acc.creditLimit.toLocaleString('en-US')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        
        {/* Table Header & Controls */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-950 font-display">
              Recent Transactions
            </h3>
            <p className="text-xs text-slate-500">
              Real-time ledger updates across all linked demo accounts
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Filter buttons */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  filterType === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType('credit')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  filterType === 'credit' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Credits
              </button>
              <button
                onClick={() => setFilterType('debit')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  filterType === 'debit' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Debits
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search ledger..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900 w-44"
              />
            </div>
          </div>
        </div>

        {/* Transactions Table Body */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-5">Description</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Account</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-5 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTransactions.map((tx) => (
                <tr
                  key={tx.id}
                  onClick={() => setSelectedTx(tx)}
                  className="hover:bg-slate-50/80 cursor-pointer transition-colors"
                >
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        tx.type === 'credit'
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {tx.type === 'credit' ? (
                          <ArrowDownLeft className="w-3.5 h-3.5" />
                        ) : (
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{tx.title}</div>
                        <div className="text-[10px] font-mono text-slate-400">{tx.reference}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {tx.category}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-500">
                    {tx.accountMasked}
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                    {tx.date}
                  </td>
                  <td className="py-3.5 px-5 text-right font-mono font-bold text-sm whitespace-nowrap tabular-nums">
                    <span className={tx.type === 'credit' ? 'text-emerald-600' : 'text-slate-900'}>
                      {tx.type === 'credit' ? '+' : '-'}${tx.amount.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredTransactions.length} of {transactions.length} records</span>
          <button
            onClick={() => onTabChange('statements')}
            className="font-semibold text-slate-900 hover:text-amber-600 transition-colors"
          >
            Export official statement (PDF/CSV) →
          </button>
        </div>

      </div>

      {/* Transaction Details Modal */}
      {selectedTx && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900">Transaction Receipt</span>
              <button
                onClick={() => setSelectedTx(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-6 text-center">
              <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-3 ${
                selectedTx.type === 'credit' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-700'
              }`}>
                {selectedTx.type === 'credit' ? <ArrowDownLeft className="w-6 h-6" /> : <ArrowUpRight className="w-6 h-6" />}
              </div>
              <div className="text-2xl font-bold font-mono tabular-nums text-slate-950">
                {selectedTx.type === 'credit' ? '+' : '-'}${selectedTx.amount.toFixed(2)}
              </div>
              <div className="text-xs text-slate-500 mt-1">{selectedTx.title}</div>
            </div>

            <div className="space-y-2.5 text-xs border-t border-b border-slate-100 py-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Status</span>
                <span className="font-semibold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {selectedTx.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Date & Time</span>
                <span className="text-slate-700">{selectedTx.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Category</span>
                <span className="text-slate-700">{selectedTx.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Account Used</span>
                <span className="font-mono text-slate-700">{selectedTx.accountMasked}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Reference ID</span>
                <span className="font-mono text-slate-700 text-[11px]">{selectedTx.reference}</span>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={() => setSelectedTx(null)}
                className="w-full py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg"
              >
                Close Receipt
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
