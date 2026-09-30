import React from 'react';
import { Building2, ShieldCheck, Landmark, MapPin, PhoneCall, Mail, ExternalLink } from 'lucide-react';
import { PageView } from '../types/banking';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenAccount: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAccount }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Upper Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 text-left focus:outline-none"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
                <Building2 className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white block font-display">
                  Meridian<span className="text-amber-500">Trust</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium block">
                  National Banking Association
                </span>
              </div>
            </button>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Providing premier retail banking, commercial treasury solutions, mortgage financing, 
              and private wealth advisory with institutional stability since 1984.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-slate-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono">1-800-555-TRUST (8787) · 24/7 Priority</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>clientcare@meridiantrustdemo.bank</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Executive Office: 450 California St, San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Col 2: Personal & Accounts */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Personal Banking
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onNavigate('personal')} className="hover:text-amber-400 transition-colors">
                  Personal Banking Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('savings')} className="hover:text-amber-400 transition-colors">
                  High-Yield Savings (4.85% APY)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('current')} className="hover:text-amber-400 transition-colors">
                  Current & Checking Accounts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('deposits')} className="hover:text-amber-400 transition-colors">
                  Fixed Term Certificates (CDs)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cards')} className="hover:text-amber-400 transition-colors">
                  Credit & Debit Cards
                </button>
              </li>
              <li>
                <button onClick={onOpenAccount} className="text-amber-400 font-semibold hover:underline">
                  Open an Account Online
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Lending & Business */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Commercial & Lending
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onNavigate('business')} className="hover:text-amber-400 transition-colors">
                  Business Banking Suite
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('loans')} className="hover:text-amber-400 transition-colors">
                  Home Mortgages & Refinancing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('loans')} className="hover:text-amber-400 transition-colors">
                  Personal Installment Loans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('investments')} className="hover:text-amber-400 transition-colors">
                  Private Wealth Management
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('business')} className="hover:text-amber-400 transition-colors">
                  Merchant & Treasury Sweeps
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company & Help
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors">
                  About Meridian Trust
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('branches')} className="hover:text-amber-400 transition-colors">
                  Branch & ATM Locator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('help')} className="hover:text-amber-400 transition-colors">
                  Help & Support Center
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-400 transition-colors">
                  Contact Financial Advisory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-amber-400 transition-colors">
                  Privacy Policy & Disclosures
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-amber-400 transition-colors">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclosures & Badges */}
        <div className="mt-14 pt-8 border-t border-slate-900 grid grid-cols-1 md:grid-cols-12 gap-6 text-[11px] text-slate-400 leading-relaxed">
          
          <div className="md:col-span-8 space-y-2">
            <p>
              <strong className="text-slate-300">Regulatory Disclosures:</strong> Meridian Trust Bank, N.A. Member FDIC. 
              Accounts are insured up to $250,000 per depositor, per insured bank, for each account ownership category. 
              Equal Housing Lender <Landmark className="w-3 h-3 inline mx-0.5 text-slate-400" />. All loans subject to credit approval. 
              Rates, terms, and programs subject to change without prior notice.
            </p>
            <p className="text-amber-400/90 font-medium">
              Simulation Disclaimer: This website is an interactive educational demonstration and prototype. 
              All financial figures, card accounts, and credentials shown are simulated sample data and do not represent real accounts or actual funds.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end gap-2 text-slate-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                FDIC Certificate #39281
              </span>
              <span>·</span>
              <span className="font-mono">Routing: 121000358</span>
            </div>
            <div className="text-[11px] text-slate-400">
              © 2026 Meridian Trust Bank, N.A. All rights reserved.
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
};
