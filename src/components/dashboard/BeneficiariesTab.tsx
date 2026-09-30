import React, { useState } from 'react';
import { Beneficiary } from '../../types/banking';
import { Users, Plus, Send, Search, Trash2, CheckCircle2, Building2, X } from 'lucide-react';

interface BeneficiariesTabProps {
  beneficiaries: Beneficiary[];
  onAddBeneficiary: (ben: Omit<Beneficiary, 'id'>) => void;
  onInitiateTransfer: (ben: Beneficiary) => void;
}

export const BeneficiariesTab: React.FC<BeneficiariesTabProps> = ({
  beneficiaries,
  onAddBeneficiary,
  onInitiateTransfer,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [category, setCategory] = useState<'Personal' | 'Business' | 'Utility'>('Personal');

  const filtered = beneficiaries.filter(
    (b) =>
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.bankName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !bankName || !accountNumber || !routingNumber) return;

    const initials = name
      .split(' ')
      .map((p) => p[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    onAddBeneficiary({
      name,
      bankName,
      accountMasked: `•••• ${accountNumber.slice(-4) || '1234'}`,
      routingOrIban: routingNumber,
      avatarInitials: initials,
      category,
    });

    setName('');
    setBankName('');
    setAccountNumber('');
    setRoutingNumber('');
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-950 font-display">
            Saved Beneficiaries & Payees
          </h3>
          <p className="text-xs text-slate-500">
            Pre-registered external accounts verified for fast real-time RTP & ACH transfers
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors shadow-xs flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Plus className="w-3.5 h-3.5 text-amber-400" />
          <span>Add New Beneficiary</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search saved contacts by name or bank..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
        />
      </div>

      {/* Beneficiaries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((ben) => (
          <div
            key={ben.id}
            className="p-5 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between bg-slate-50/50"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center font-mono">
                  {ben.avatarInitials}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-950">{ben.name}</h4>
                  <div className="text-[11px] text-slate-500">{ben.bankName}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                    Acct: {ben.accountMasked} · RT: {ben.routingOrIban}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                {ben.category}
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Verified
              </span>
              <button
                onClick={() => onInitiateTransfer(ben)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Send className="w-3 h-3 text-slate-600" />
                <span>Send Money</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Beneficiary Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <span className="text-sm font-bold text-slate-900">Add Trusted Beneficiary</span>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Recipient Legal Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Financial Institution</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. JPMorgan Chase, Wells Fargo"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Routing Number</label>
                  <input
                    type="text"
                    maxLength={9}
                    required
                    placeholder="021000021"
                    value={routingNumber}
                    onChange={(e) => setRoutingNumber(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Account Number</label>
                  <input
                    type="text"
                    required
                    placeholder="•••• 6621"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Classification</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                >
                  <option value="Personal">Personal Contact</option>
                  <option value="Business">Business Vendor / Partner</option>
                  <option value="Utility">Utility / Municipal Billing</option>
                </select>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg"
                >
                  Save & Verify Beneficiary
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
