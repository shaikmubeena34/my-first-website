import React from 'react';
import { PageView } from '../../types/banking';
import { CREDIT_CARDS } from '../../data/mockBankingData';
import { CreditCard, Check, ArrowRight, Star, ShieldCheck } from 'lucide-react';

interface CreditCardsPageProps {
  onOpenAccount: (accountType?: string) => void;
  onNavigate: (page: PageView) => void;
}

export const CreditCardsPage: React.FC<CreditCardsPageProps> = ({ onOpenAccount, onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
              Payment Cards & Concierge Privileges
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
              Rewards and Purchasing Power Engineered for High Performers
            </h1>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              From unlimited 2% cash back with zero annual fee to luxury tungsten metal cards offering 
              complimentary global airport lounge access, find the perfect payment instrument for your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Cards Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CREDIT_CARDS.map((card) => (
            <div
              key={card.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 ${
                card.metalFinish
                  ? 'bg-slate-950 text-white border-2 border-slate-800 shadow-xl'
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              <div>
                {/* Visual Card representation */}
                <div className={`aspect-[1.586/1] rounded-xl p-5 mb-6 text-white bg-gradient-to-br ${card.colorGradient} border border-white/10 shadow-md flex flex-col justify-between`}>
                  <div className="flex justify-between items-center">
                    <span className="font-display font-bold text-xs tracking-wider">
                      Meridian<span className="text-amber-400">Trust</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-300">{card.tier}</span>
                  </div>
                  <div className="font-mono tracking-widest text-sm text-slate-200">
                    •••• •••• •••• 7712
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-300">
                    <span>ALEXANDER VANCE</span>
                    <span>EXP 09/30</span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">
                  {card.tier}
                </div>
                <h3 className={`text-xl font-bold ${card.metalFinish ? 'text-white' : 'text-slate-950'}`}>
                  {card.name}
                </h3>
                <p className={`text-xs mt-2 ${card.metalFinish ? 'text-slate-300' : 'text-slate-600'}`}>
                  {card.tagline}
                </p>

                <div className="my-5 py-4 border-t border-b border-slate-200/40 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className={card.metalFinish ? 'text-slate-400' : 'text-slate-500'}>Annual Fee</span>
                    <span className="font-mono font-bold">${card.annualFee}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={card.metalFinish ? 'text-slate-400' : 'text-slate-500'}>Rewards Rate</span>
                    <span className="font-semibold text-amber-500 text-right text-[11px]">{card.cashbackRate}</span>
                  </div>
                </div>

                <div className="mb-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 text-xs text-amber-300">
                  <strong className="block text-[11px] uppercase tracking-wider">Welcome Offer</strong>
                  <span className="text-[11px] leading-tight text-amber-200/90">{card.welcomeBonus}</span>
                </div>

                <ul className="space-y-2 text-xs">
                  {card.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className={card.metalFinish ? 'text-slate-300' : 'text-slate-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => onOpenAccount(card.name)}
                  className={`w-full py-3 px-4 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 ${
                    card.metalFinish
                      ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                      : 'bg-slate-950 text-white hover:bg-slate-800'
                  }`}
                >
                  <span>Apply Now for {card.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
