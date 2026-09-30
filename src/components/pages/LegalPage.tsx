import React, { useState } from 'react';
import { PageView } from '../../types/banking';
import { ShieldCheck, FileText, Landmark, Lock } from 'lucide-react';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
              Legal, Regulatory & Consumer Protections
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              {activeTab === 'privacy' ? 'Consumer Privacy Policy & Disclosures' : 'Deposit Terms, Disclosures & Operating Rules'}
            </h1>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Meridian Trust Bank, N.A. operates under national bank regulatory oversight 
              and upholds rigorous financial privacy and electronic transaction standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Toggle */}
        <div className="flex gap-2 mb-8 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'privacy'
                ? 'bg-slate-950 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Privacy Policy (Gramm-Leach-Bliley Act)
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'terms'
                ? 'bg-slate-950 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Terms of Service & Deposit Agreement
          </button>
        </div>

        {/* Prototype Disclaimer Box */}
        <div className="mb-8 p-4 bg-amber-50 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Interactive Prototype Disclosure:</strong> This website represents a financial institution prototype demonstration. 
            All numbers, card identities, account balances, and regulatory certificate numbers shown on this site are safe sample data for demonstration. 
            No real monetary deposits or sensitive credentials are processed.
          </div>
        </div>

        {activeTab === 'privacy' ? (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6 text-xs text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-950 font-display">
              1. Information Collection & Use
            </h2>
            <p>
              Under federal law, financial institutions must explain how they collect, share, and protect consumer personal information. 
              We collect information you provide directly when opening an account, applying for credit, or initiating transfers, including your legal name, 
              taxpayer identification number, residential address, income details, and transaction history.
            </p>

            <h2 className="text-lg font-bold text-slate-950 font-display">
              2. How We Protect Your Personal Information
            </h2>
            <p>
              To protect your personal information from unauthorized access and use, we use security measures that comply with federal law. 
              These measures include hardware-backed 256-bit AES encryption, biometric authentication controls, secured communications protocols (TLS 1.3), 
              and restricted physical access to data centers.
            </p>

            <h2 className="text-lg font-bold text-slate-950 font-display">
              3. Non-Affiliate Marketing & Opt-Out Rights
            </h2>
            <p>
              Meridian Trust Bank, N.A. does not sell personal customer financial information to third-party data brokers or non-affiliated entities for marketing purposes. 
              Information is shared strictly to process transactions, maintain accounts, and fulfill statutory legal reporting.
            </p>

            <h2 className="text-lg font-bold text-slate-950 font-display">
              4. Cookies, Session Tokens, and Device Telemetry
            </h2>
            <p>
              Our online portal employs encrypted session tokens to identify authorized browser sessions and safeguard against cross-site request forgery. 
              These tokens expire automatically upon manual sign-out or 15 minutes of inactivity.
            </p>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6 text-xs text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-950 font-display">
              1. Deposit Account Agreement (Regulation DD & CC)
            </h2>
            <p>
              By opening or maintaining an account with Meridian Trust Bank, N.A., you agree to the terms, fees, and rules outlined in our Account Disclosure Schedule. 
              Funds deposited via automated clearing house (ACH) or remote check capture are subject to funds availability schedules under federal Regulation CC.
            </p>

            <h2 className="text-lg font-bold text-slate-950 font-display">
              2. Electronic Funds Transfers (Regulation E)
            </h2>
            <p>
              Regulation E protects individual consumers against unauthorized electronic fund transfers, ATM transactions, and debit card charges. 
              You must report any unauthorized transaction within 60 days after the statement was transmitted to preserve zero-liability protections.
            </p>

            <h2 className="text-lg font-bold text-slate-950 font-display">
              3. Interest Accrual and Compounding
            </h2>
            <p>
              For interest-bearing deposit products, including High-Yield Savings and Certificates of Deposit, interest is calculated using the daily balance method 
              and is credited to your account on the final business day of each calendar month.
            </p>

            <h2 className="text-lg font-bold text-slate-950 font-display">
              4. FDIC Insurance Coverage
            </h2>
            <p>
              Meridian Trust Bank is an FDIC Member Institution (FDIC Certificate #39281). 
              Funds in eligible deposit accounts are insured up to $250,000 for single accounts, joint accounts, and individual retirement accounts.
            </p>
          </div>
        )}

      </section>

    </div>
  );
};
