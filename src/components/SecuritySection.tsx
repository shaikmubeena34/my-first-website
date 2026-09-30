import React from 'react';
import { 
  ShieldCheck, 
  KeyRound, 
  BellRing, 
  Lock, 
  UserCheck, 
  EyeOff, 
  FileCheck2,
  PhoneCall
} from 'lucide-react';
import { PageView } from '../types/banking';

interface SecuritySectionProps {
  onNavigate: (page: PageView) => void;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ onNavigate }) => {
  const securityFeatures = [
    {
      icon: KeyRound,
      title: 'Mandatory Two-Factor Authentication (2FA)',
      desc: 'Sensitive actions such as new payee registration and high-value wire transfers require time-based OTP or hardware token authorization.',
    },
    {
      icon: BellRing,
      title: 'Real-Time Transaction Alerts',
      desc: 'Instant push notifications and SMS alerts for any card swipe, online transaction, or balance drop exceeding your customizable threshold.',
    },
    {
      icon: Lock,
      title: '256-Bit Hardware-Backed Encryption',
      desc: 'Data in transit and at rest is safeguarded using TLS 1.3 and military-grade AES-256 cryptographic standards with automated key rotation.',
    },
    {
      icon: UserCheck,
      title: 'Biometric & Secure Adaptive Login',
      desc: 'Touch ID, Face ID, and device reputation scoring detect unauthorized login attempts before they reach your personal data vault.',
    },
    {
      icon: EyeOff,
      title: '24/7 Behavioral Fraud Monitoring',
      desc: 'Institutional heuristics analyze transaction patterns in real time to intercept suspicious charges, card skimming, and phishing vectors.',
    },
    {
      icon: FileCheck2,
      title: 'FDIC Insurance & Zero Liability Guarantee',
      desc: 'Full FDIC backing up to $250,000 per depositor. You are 100% reimbursed for any verified unauthorized card transactions.',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Bank-Grade Safeguards & Privacy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
            Multi-Layered Security Built for Absolute Peace of Mind
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Your financial assets and confidential records are protected by redundant, 
            rigorously audited banking safeguards that meet or exceed federal supervisory guidelines.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-950 mb-4 shadow-2xs">
                  <Icon className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-sm font-bold text-slate-950 mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Security hotline banner */}
        <div className="mt-10 p-6 bg-slate-100 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-800 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                Suspect unauthorized activity or lost your card?
              </h4>
              <p className="text-xs text-slate-500">
                Our Priority Fraud Emergency Center is staffed 24/7/365 by senior fraud specialists.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('help')}
              className="text-xs font-semibold text-slate-700 hover:text-slate-950 underline underline-offset-4"
            >
              Emergency Card Freeze Guide
            </button>
            <a
              href="tel:18005558787"
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors font-mono"
            >
              1-800-555-TRUST
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
