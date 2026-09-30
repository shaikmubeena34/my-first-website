import React from 'react';
import { 
  Smartphone, 
  Send, 
  Receipt, 
  CreditCard, 
  FileText, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PageView } from '../types/banking';

interface DigitalBankingSectionProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageView) => void;
}

export const DigitalBankingSection: React.FC<DigitalBankingSectionProps> = ({ 
  onOpenDemo, 
  onNavigate 
}) => {
  const features = [
    {
      icon: Smartphone,
      title: 'Next-Gen Mobile & Internet Banking',
      desc: 'Seamless unified experience across iPhone, Android, tablet, and desktop with real-time sync.',
    },
    {
      icon: Zap,
      title: 'Instant RTP & UPI Payments',
      desc: 'Move funds across banks in under 10 seconds with zero clearing delay or weekend lag.',
    },
    {
      icon: Send,
      title: 'Domestic & Global Fund Transfers',
      desc: 'ACH, Fedwire, and SWIFT international wires with transparent real-time FX exchange rates.',
    },
    {
      icon: Receipt,
      title: 'Automated Bill Payments',
      desc: 'Schedule recurring utility, telecom, and municipal invoices with intelligent auto-debit alerts.',
    },
    {
      icon: CreditCard,
      title: 'Granular Card Controls',
      desc: 'Instant 1-click card freeze, custom daily POS/ATM limits, and temporary virtual card numbers.',
    },
    {
      icon: FileText,
      title: 'Digital Statements & Tax Vault',
      desc: '7 years of downloadable monthly PDF statements, 1099-INT summaries, and CSV expense exports.',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Asset & Interactive Teaser */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
              <img
                src="/src/assets/images/digital_banking_app_1790777023823.jpg"
                alt="Meridian Trust mobile digital banking interface with high-yield account balances"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Inset demo launcher card */}
              <div className="absolute bottom-5 left-5 right-5 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-5 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-semibold text-white">Interactive Demo Environment</span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400">DEMO V4.0</span>
                </div>
                <p className="text-xs text-slate-300 mb-3.5">
                  Test-drive our full online banking suite: simulate transfers, card freeze, 
                  utility bill pay, and instant statements with safe sample balances.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={onOpenDemo}
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Launch Demo Banking</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                  </button>
                  <button
                    onClick={() => onNavigate('digital')}
                    className="text-xs text-slate-300 hover:text-white underline underline-offset-4"
                  >
                    Explore App Features
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities & Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Empowering Convenience
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
              Total Financial Command at Your Fingertips
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Designed from the ground up for speed, security, and institutional clarity. 
              Eliminate branch friction with comprehensive digital self-service tools.
            </p>

            {/* Feature Matrix */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center text-amber-400 shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-white leading-tight">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Biometric Face ID & Touch ID Integrated
              </span>
              <span>Available on iOS, Android & Web</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
