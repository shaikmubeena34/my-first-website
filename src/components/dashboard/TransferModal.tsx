import React, { useState } from 'react';
import { BankAccount, Beneficiary, Transaction } from '../../types/banking';
import { Send, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2, User, Building2, KeyRound } from 'lucide-react';

interface TransferModalProps {
  accounts: BankAccount[];
  beneficiaries: Beneficiary[];
  onExecuteTransfer: (
    sourceAccountId: string,
    amount: number,
    beneficiaryName: string,
    accountMasked: string,
    category: 'Transfer',
    note: string
  ) => void;
  preselectedBeneficiary?: Beneficiary | null;
}

export const TransferModal: React.FC<TransferModalProps> = ({
  accounts,
  beneficiaries,
  onExecuteTransfer,
  preselectedBeneficiary,
}) => {
  const [sourceId, setSourceId] = useState<string>(accounts[0]?.id || '');
  const [transferType, setTransferType] = useState<'saved' | 'new'>('saved');
  const [selectedBenId, setSelectedBenId] = useState<string>(
    preselectedBeneficiary?.id || beneficiaries[0]?.id || ''
  );
  
  // New payee details
  const [newPayeeName, setNewPayeeName] = useState('');
  const [newPayeeBank, setNewPayeeBank] = useState('');
  const [newPayeeAccount, setNewPayeeAccount] = useState('');
  const [newPayeeRouting, setNewPayeeRouting] = useState('');
  
  const [amount, setAmount] = useState<string>('250.00');
  const [note, setNote] = useState<string>('Personal transfer');
  const [speed, setSpeed] = useState<'instant' | 'standard'>('instant');

  // Multi-step confirmation & 2FA
  const [step, setStep] = useState<'form' | 'confirm' | '2fa' | 'success'>('form');
  const [otp, setOtp] = useState('482910');
  const [errorMsg, setErrorMsg] = useState('');
  const [lastTxRef, setLastTxRef] = useState('');

  const selectedAccount = accounts.find((a) => a.id === sourceId) || accounts[0];
  const targetBeneficiary = beneficiaries.find((b) => b.id === selectedBenId);

  const parsedAmount = parseFloat(amount) || 0;

  const handleReview = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (parsedAmount <= 0) {
      setErrorMsg('Please enter a valid transfer amount greater than $0.00.');
      return;
    }

    if (selectedAccount && parsedAmount > selectedAccount.availableBalance) {
      setErrorMsg(`Insufficient funds. Your available balance in ${selectedAccount.name} is $${selectedAccount.availableBalance.toFixed(2)}.`);
      return;
    }

    if (transferType === 'new' && (!newPayeeName || !newPayeeAccount || !newPayeeRouting)) {
      setErrorMsg('Please enter all required recipient bank and routing details.');
      return;
    }

    setStep('confirm');
  };

  const handleConfirm = () => {
    setStep('2fa');
  };

  const handleVerify2fa = (e: React.FormEvent) => {
    e.preventDefault();
    const recipientName = transferType === 'saved' ? targetBeneficiary?.name || 'Beneficiary' : newPayeeName;
    const recipientMasked = transferType === 'saved' ? targetBeneficiary?.accountMasked || '•••• 0000' : `•••• ${newPayeeAccount.slice(-4) || '9910'}`;

    onExecuteTransfer(
      selectedAccount.id,
      parsedAmount,
      recipientName,
      recipientMasked,
      'Transfer',
      note
    );

    const ref = `TRF-RTP-${Math.floor(100000 + Math.random() * 900000)}`;
    setLastTxRef(ref);
    setStep('success');
  };

  const resetForm = () => {
    setStep('form');
    setAmount('250.00');
    setNote('Personal transfer');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 max-w-2xl mx-auto">
      
      {/* Title */}
      <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-950 font-display">
            Domestic & International Fund Transfer
          </h3>
          <p className="text-xs text-slate-500">
            Real-time RTP & FedNow settlements to any US financial institution
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100 font-medium">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Instant Settlement Ready</span>
        </div>
      </div>

      {errorMsg && (
        <div className="mb-6 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* STEP 1: FORM */}
      {step === 'form' && (
        <form onSubmit={handleReview} className="space-y-5">
          
          {/* Source Account */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
              From Account
            </label>
            <select
              value={sourceId}
              onChange={(e) => setSourceId(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
            >
              {accounts
                .filter((a) => a.type !== 'Credit')
                .map((acc) => (
                  <option key={acc.id} value={acc.id}>
                    {acc.name} ({acc.accountNumberMasked}) — Available: ${acc.availableBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </option>
                ))}
            </select>
          </div>

          {/* Transfer Type Segmented control */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
              Recipient
            </label>
            <div className="flex gap-2 mb-3">
              <button
                type="button"
                onClick={() => setTransferType('saved')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                  transferType === 'saved'
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Saved Beneficiary
              </button>
              <button
                type="button"
                onClick={() => setTransferType('new')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                  transferType === 'new'
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                New Payee (Account & Routing)
              </button>
            </div>

            {transferType === 'saved' ? (
              <div className="space-y-2">
                {beneficiaries.map((ben) => (
                  <label
                    key={ben.id}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      selectedBenId === ben.id
                        ? 'border-blue-900 bg-blue-50/50 ring-1 ring-blue-900'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="beneficiary"
                        checked={selectedBenId === ben.id}
                        onChange={() => setSelectedBenId(ben.id)}
                        className="accent-blue-900"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-900">{ben.name}</div>
                        <div className="text-[11px] text-slate-500">
                          {ben.bankName} · {ben.accountMasked}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      RT: {ben.routingOrIban}
                    </span>
                  </label>
                ))}
              </div>
            ) : (
              <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">Recipient Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jonathan Reynolds"
                    value={newPayeeName}
                    onChange={(e) => setNewPayeeName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">Bank Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chase, Wells Fargo"
                      value={newPayeeBank}
                      onChange={(e) => setNewPayeeBank(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">9-Digit Routing (ABA)</label>
                    <input
                      type="text"
                      maxLength={9}
                      required
                      placeholder="021000021"
                      value={newPayeeRouting}
                      onChange={(e) => setNewPayeeRouting(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-mono"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-700 block mb-1">Account Number</label>
                  <input
                    type="text"
                    required
                    placeholder="1234567890"
                    value={newPayeeAccount}
                    onChange={(e) => setNewPayeeAccount(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-mono"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Amount & Purpose */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                Transfer Amount ($)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-xs text-slate-500 font-semibold">$</span>
                <input
                  type="number"
                  step="0.01"
                  min="1"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-7 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono font-bold text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900 tabular-nums"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                Speed & Settlement
              </label>
              <select
                value={speed}
                onChange={(e) => setSpeed(e.target.value as any)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
              >
                <option value="instant">Instant RTP / FedNow (Within 10 seconds, $0 fee)</option>
                <option value="standard">ACH Standard (1-2 business days, $0 fee)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
              Payment Memo / Note
            </label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. Invoice #1029 settlement, rent split"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Review Transfer Details</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </form>
      )}

      {/* STEP 2: CONFIRMATION SCREEN */}
      {step === 'confirm' && (
        <div className="space-y-6">
          <div className="p-4 bg-amber-50 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              <strong>Confirmation Required:</strong> Please review all transfer details before initiating the real-time settlement transaction.
            </span>
          </div>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">From Account:</span>
              <span className="font-semibold text-slate-900">{selectedAccount.name} ({selectedAccount.accountNumberMasked})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Transfer To:</span>
              <span className="font-semibold text-slate-900">
                {transferType === 'saved' ? targetBeneficiary?.name : newPayeeName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Recipient Account:</span>
              <span className="font-mono text-slate-900">
                {transferType === 'saved' ? targetBeneficiary?.accountMasked : `•••• ${newPayeeAccount.slice(-4) || '9910'}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Settlement Method:</span>
              <span className="text-emerald-700 font-semibold">{speed === 'instant' ? 'Instant RTP (Real-time)' : 'Standard ACH'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Transfer Fee:</span>
              <span className="font-semibold text-slate-900">$0.00 (Waived)</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-slate-200 text-sm">
              <span className="font-bold text-slate-900">Total Deducted:</span>
              <span className="font-mono font-bold text-slate-950 text-base tabular-nums">
                ${parsedAmount.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep('form')}
              className="w-1/3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
            >
              Modify
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="w-2/3 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl flex items-center justify-center gap-1.5"
            >
              <span>Authorize with Security Code</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: 2FA AUTHORIZATION */}
      {step === '2fa' && (
        <form onSubmit={handleVerify2fa} className="space-y-5 text-center max-w-sm mx-auto py-2">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center mx-auto">
            <KeyRound className="w-6 h-6" />
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-950">
              Confirm Security Authorization
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              To finalize this payment of <strong className="text-slate-900">${parsedAmount.toFixed(2)}</strong>, enter your simulated one-time authentication passcode.
            </p>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
            <span className="block text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Demo Passcode</span>
            <span className="font-mono text-xl font-bold tracking-widest text-slate-900">482910</span>
          </div>

          <div>
            <input
              type="text"
              maxLength={6}
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full text-center tracking-widest font-mono text-base font-bold py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep('confirm')}
              className="w-1/3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-2/3 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg"
            >
              Verify & Complete
            </button>
          </div>
        </form>
      )}

      {/* STEP 4: SUCCESS CONFIRMATION */}
      {step === 'success' && (
        <div className="py-4 text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-950 font-display">
              Transfer Completed Successfully!
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Your transfer of <strong className="text-slate-900 font-mono">${parsedAmount.toFixed(2)}</strong> has been settled. 
              Your account balance has been updated in real-time.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left space-y-2 max-w-sm mx-auto text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Reference:</span>
              <span className="font-mono font-semibold text-slate-900">{lastTxRef}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Settled On:</span>
              <span className="text-slate-700">Today, Just now</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Recipient:</span>
              <span className="font-semibold text-slate-900">
                {transferType === 'saved' ? targetBeneficiary?.name : newPayeeName}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={resetForm}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors"
          >
            Initiate Another Transfer
          </button>
        </div>
      )}

    </div>
  );
};
