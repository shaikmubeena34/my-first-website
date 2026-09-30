import React from 'react';
import { 
  ShieldCheck, 
  Percent, 
  Smartphone, 
  MapPin, 
  Zap, 
  HeartHandshake 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Secure Banking',
      description: 'Hardware-backed 256-bit AES encryption, biometric authorization, and zero customer fraud liability backed by FDIC insurance up to $250,000.',
      stat: '100%',
      statLabel: 'Zero Fraud Liability',
    },
    {
      icon: Percent,
      title: 'Competitive Rates',
      description: 'Consistently higher deposit yields with 4.85% APY on savings reserves and wholesale mortgage lending rates tailored to your credit profile.',
      stat: '4.85%',
      statLabel: 'High-Yield Reserve APY',
    },
    {
      icon: Smartphone,
      title: '24/7 Digital Access',
      description: 'Manage accounts, wire funds, deposit checks remotely, freeze cards instantly, and configure automated rules from iOS, Android, and web.',
      stat: '99.98%',
      statLabel: 'Digital Platform Uptime',
    },
    {
      icon: MapPin,
      title: 'Nationwide Support',
      description: 'Seamless access across 55,000+ surcharge-free Allpoint ATMs and dedicated commercial centers in major financial capitals nationwide.',
      stat: '55,000+',
      statLabel: 'Surcharge-Free ATMs',
    },
    {
      icon: Zap,
      title: 'Fast Transactions',
      description: 'Instant settlement via real-time RTP and FedNow rails. Move funds to external accounts and beneficiaries within seconds, not business days.',
      stat: '< 15s',
      statLabel: 'Instant RTP Settlement',
    },
    {
      icon: HeartHandshake,
      title: 'Customer-First Service',
      description: 'Zero hidden maintenance fees or surprise overdraft penalties. Real licensed human bankers available 24/7 by phone, chat, or branch visit.',
      stat: '40+ Yrs',
      statLabel: 'Fiduciary Stewardship',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Institutional Strength · Client Commitment
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Why Discerning Individuals and Businesses Choose Meridian Trust
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            We unite the stability of a century-tested national financial institution with 
            the agility and transparency of modern financial technology.
          </p>
        </div>

        {/* 6 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/80 p-6 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-baseline justify-between">
                  <span className="text-xs text-slate-400">
                    {pillar.statLabel}
                  </span>
                  <span className="font-mono font-bold text-base text-amber-400 tabular-nums">
                    {pillar.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
