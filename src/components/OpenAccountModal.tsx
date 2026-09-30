import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, User, Mail, Phone, DollarSign, Building2 } from 'lucide-react';

interface OpenAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAccountType?: string;
  onSuccess: (newAccountName: string) => void;
}

export const OpenAccountModal: React.FC<OpenAccountModalProps> = ({
  isOpen,
  onClose,
  initialAccountType = 'High-Yield Savings',
  onSuccess,
}) => {
  const [step, setStep] = useState<number>(1);
  const [accountType, setAccountType] = useState<string>(initialAccountType);
  const [formData, setFormData] = useState({
    firstName: 'Alexander',
    lastName: 'Vance',
    email: 'alex.vance@example.com',
    phone: '(415) 555-8910',
    initialDeposit: '500',
    idType: 'Driver License',
    idNumber: 'D8841920',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedAccountNum, setGeneratedAccountNum] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        const randomEnding = Math.floor(1000 + Math.random() * 9000);
        setGeneratedAccountNum(`•••• ${randomEnding}`);
        setStep(4);
      }, 1200);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
              <Building2 className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-display">
                Open an Account · Meridian Trust
              </h3>
              <p className="text-[11px] text-slate-400">
                Official Online Application Portal (Demo Mode)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicators */}
        {step < 4 && (
          <div className="px-6 pt-4 pb-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span className={step >= 1 ? 'font-bold text-slate-950' : ''}>
              1. Account Type
            </span>
            <span className="text-slate-300">→</span>
            <span className={step >= 2 ? 'font-bold text-slate-950' : ''}>
              2. Applicant Details
            </span>
            <span className="text-slate-300">→</span>
            <span className={step >= 3 ? 'font-bold text-slate-950' : ''}>
              3. Verification & Terms
            </span>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6">
          
          {/* STEP 1: Select Account */}
          {step === 1 && (
            <div className="space-y-3">
              <div className="text-xs text-slate-600 mb-2">
                Choose the primary financial account you wish to open today:
              </div>

              {[
                { name: 'High-Yield Savings', apy: '4.85% APY', desc: 'Liquid savings with daily compound growth and $0 monthly fees.' },
                { name: 'Premier Preferred Checking', apy: '$0 Fee', desc: 'Everyday checking with contactless debit card and free ATM rebates.' },
                { name: 'Apex Private Reserve', apy: '5.15% APY', desc: 'Premium private wealth tier with dedicated banker and unlimited wires.' },
                { name: 'Commercial Business Checking', apy: 'Business', desc: 'Tailored for operating cash flow, payroll, and merchant integration.' },
              ].map((acc) => (
                <label
                  key={acc.name}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    accountType === acc.name
                      ? 'border-blue-900 bg-blue-50/60 ring-1 ring-blue-900'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="accountType"
                      checked={accountType === acc.name}
                      onChange={() => setAccountType(acc.name)}
                      className="accent-blue-900"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{acc.name}</div>
                      <div className="text-[11px] text-slate-500 leading-tight">{acc.desc}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    {acc.apy}
                  </span>
                </label>
              ))}
            </div>
          )}

          {/* STEP 2: Personal Details */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 mb-1">
                Sample applicant information pre-filled for this demonstration:
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Initial Opening Deposit</label>
                  <div className="relative">
                    <span className="absolute left-2.5 top-2 text-xs text-slate-500 font-semibold">$</span>
                    <input
                      type="number"
                      min={25}
                      required
                      value={formData.initialDeposit}
                      onChange={(e) => setFormData({ ...formData, initialDeposit: e.target.value })}
                      className="w-full pl-6 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900 font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Verification & Compliance */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-950 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-900 mt-0.5 shrink-0" />
                <span>
                  USA PATRIOT Act Compliance: Identity verification simulated. No real credit check will be run in this prototype mode.
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked required className="mt-0.5 accent-blue-900" />
                  <span>I certify that the information provided is accurate and I am at least 18 years of age.</span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked required className="mt-0.5 accent-blue-900" />
                  <span>I agree to receive electronic disclosures and accept the Deposit Account Agreement.</span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked required className="mt-0.5 accent-blue-900" />
                  <span>I authorize initial opening funding of ${formData.initialDeposit} from the external linking demo account.</span>
                </label>
              </div>
            </div>
          )}

          {/* STEP 4: Success Confirmation */}
          {step === 4 && (
            <div className="py-4 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-950 font-display">
                  Welcome to Meridian Trust!
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                  Your <strong className="text-slate-900">{accountType}</strong> application has been approved 
                  and provisioned in our simulated banking system.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left space-y-2 max-w-sm mx-auto text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Account Holder:</span>
                  <span className="font-semibold text-slate-900">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Account Number:</span>
                  <span className="font-mono font-semibold text-slate-900">{generatedAccountNum}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Initial Balance:</span>
                  <span className="font-mono font-semibold text-emerald-600">${formData.initialDeposit}.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Routing Number:</span>
                  <span className="font-mono text-slate-900">121000358</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSuccess(accountType);
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Go to Demo Online Banking</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Controls Footer */}
          {step < 4 && (
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Verifying...</span>
                ) : (
                  <>
                    <span>{step === 3 ? 'Confirm & Open Account' : 'Continue'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          )}

        </form>

      </div>
    </div>
  );
};
