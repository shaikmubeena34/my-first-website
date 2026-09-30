import React, { useState } from 'react';
import { BankAccount } from '../../types/banking';
import { Info, Copy, Check, ShieldCheck, Download, Landmark } from 'lucide-react';

interface AccountDetailsTabProps {
  accounts: BankAccount[];
}

export const AccountDetailsTab: React.FC<AccountDetailsTabProps> = ({ accounts }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const primaryChecking = accounts.find((a) => a.type === 'Checking') || accounts[0];
  const savingsAccount = accounts.find((a) => a.type === 'Savings') || accounts[1];

  const details = [
    { label: 'Bank Legal Name', value: 'Meridian Trust Bank, National Association', key: 'bankName' },
    { label: 'Routing Transit Number (ACH & Direct Deposit)', value: '121000358', key: 'routingAch' },
    { label: 'Wire Routing Number (Fedwire / RTP)', value: '121000359', key: 'routingWire' },
    { label: 'SWIFT / BIC Code (International)', value: 'MRDNUS33SFX', key: 'swift' },
    { label: 'FDIC Certificate ID', value: '#39281', key: 'fdic' },
    { label: 'Primary Checking Account', value: '8841-9920-4829', key: 'chkNum', masked: '•••• 4829' },
    { label: 'High-Yield Growth Reserve', value: '9902-1402-9104', key: 'svgNum', masked: '•••• 9104' },
    { label: 'Origin Branch', value: 'California Flagship Branch · 450 California St, San Francisco, CA', key: 'branch' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-950 font-display">
            Account Specifications & Routing Codes
          </h3>
          <p className="text-xs text-slate-500">
            Use these verified numbers for payroll direct deposits, electronic tax refunds, and incoming wire transfers
          </p>
        </div>

        <button
          onClick={() => alert('[Simulated Download] Direct Deposit Authorization Form pre-filled for Alexander Vance has been downloaded.')}
          className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors flex items-center gap-1.5 shadow-2xs self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5 text-slate-600" />
          <span>Download Direct Deposit Form</span>
        </button>
      </div>

      {/* Grid of details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {details.map((item) => (
          <div
            key={item.key}
            className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between"
          >
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                {item.label}
              </div>
              <div className="text-xs font-bold text-slate-900 font-mono">
                {item.masked ? item.masked : item.value}
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(item.value, item.key)}
              className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-white transition-colors"
              title="Copy to clipboard"
            >
              {copiedKey === item.key ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Deposit Insurance Banner */}
      <div className="p-5 bg-blue-50/60 rounded-xl border border-blue-200/80 flex items-start gap-3">
        <Landmark className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
        <div className="text-xs text-blue-950 space-y-1">
          <div className="font-bold">Federal Deposit Insurance Corporation (FDIC) Backing</div>
          <p className="text-blue-900/80 leading-relaxed">
            Your deposits with Meridian Trust Bank, N.A. are insured up to $250,000 per depositor for each ownership category. 
            For commercial sweep arrangements and multi-tier private wealth accounts exceeding this limit, IntraFi network coverage provides extended protection up to $50 Million.
          </p>
        </div>
      </div>

    </div>
  );
};
