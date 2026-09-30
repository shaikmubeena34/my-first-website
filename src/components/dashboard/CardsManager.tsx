import React, { useState } from 'react';
import { CreditCard, Lock, Unlock, Eye, EyeOff, ShieldCheck, AlertTriangle, Sliders, CheckCircle2 } from 'lucide-react';

export const CardsManager: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [cardsState, setCardsState] = useState([
    {
      id: 'card-1',
      name: 'Meridian Obsidian Elite',
      type: 'Credit Card · World Elite Metal',
      maskedNumber: '•••• •••• •••• 7712',
      fullNumberDemo: '4192 8840 1934 7712',
      exp: '09/30',
      cvv: '891',
      isFrozen: false,
      dailyPosLimit: 5000,
      dailyAtmLimit: 1500,
      currentBalance: 1240.20,
      creditLimit: 25000.00,
      gradient: 'from-slate-950 via-slate-900 to-indigo-950',
    },
    {
      id: 'card-2',
      name: 'Meridian Preferred Debit',
      type: 'Debit Card · Primary Checking',
      maskedNumber: '•••• •••• •••• 4829',
      fullNumberDemo: '4929 1104 3829 4829',
      exp: '11/29',
      cvv: '302',
      isFrozen: false,
      dailyPosLimit: 3000,
      dailyAtmLimit: 1000,
      currentBalance: 0,
      creditLimit: 0,
      gradient: 'from-blue-950 via-slate-900 to-slate-800',
    },
  ]);

  const [revealedCardId, setRevealedCardId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string>('');

  const currentCard = cardsState[activeCardIndex];

  const handleToggleFreeze = (id: string) => {
    setCardsState((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const nextState = !c.isFrozen;
          setToastMessage(
            nextState
              ? `${c.name} has been temporarily FROZEN. All new card charges are blocked.`
              : `${c.name} is now ACTIVE and authorized for transactions.`
          );
          setTimeout(() => setToastMessage(''), 4000);
          return { ...c, isFrozen: nextState };
        }
        return c;
      })
    );
  };

  const handleToggleReveal = (id: string) => {
    if (revealedCardId === id) {
      setRevealedCardId(null);
    } else {
      setRevealedCardId(id);
      // Auto-hide after 8 seconds for security
      setTimeout(() => {
        setRevealedCardId(null);
      }, 8000);
    }
  };

  const handleLimitChange = (id: string, field: 'dailyPosLimit' | 'dailyAtmLimit', val: number) => {
    setCardsState((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: val } : c))
    );
  };

  return (
    <div className="space-y-6">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="p-3.5 bg-slate-900 text-white rounded-xl text-xs flex items-center justify-between shadow-lg border border-slate-700 animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <button onClick={() => setToastMessage('')} className="text-slate-400 hover:text-white text-xs">
            Dismiss
          </button>
        </div>
      )}

      {/* Cards Selector Tabs */}
      <div className="flex gap-2">
        {cardsState.map((card, idx) => (
          <button
            key={card.id}
            onClick={() => setActiveCardIndex(idx)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${
              activeCardIndex === idx
                ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {card.name} ({card.maskedNumber.slice(-4)})
            {card.isFrozen && <span className="ml-1.5 text-rose-400 font-mono text-[10px]">(FROZEN)</span>}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Realistic Virtual Card Presentation (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div
            className={`relative w-full aspect-[1.586/1] rounded-2xl p-6 text-white bg-gradient-to-br ${currentCard.gradient} shadow-2xl border border-slate-700/60 flex flex-col justify-between overflow-hidden select-none transition-all duration-300 ${
              currentCard.isFrozen ? 'opacity-70 saturate-50' : ''
            }`}
          >
            {/* Frozen Overlay */}
            {currentCard.isFrozen && (
              <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs flex flex-col items-center justify-center text-center p-4 z-20">
                <Lock className="w-8 h-8 text-rose-400 mb-1" />
                <span className="font-bold text-sm text-white">CARD TEMPORARILY FROZEN</span>
                <span className="text-[11px] text-slate-300 mt-1">Tap Unfreeze to reactivate</span>
              </div>
            )}

            {/* Top row */}
            <div className="flex items-center justify-between">
              <div>
                <span className="font-display font-bold text-sm tracking-wide text-white">
                  Meridian<span className="text-amber-400">Trust</span>
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-slate-400">
                  {currentCard.type}
                </span>
              </div>

              {/* EMV Chip Representation */}
              <div className="w-9 h-7 rounded bg-amber-400/80 border border-amber-300/50 flex items-center justify-center">
                <div className="w-6 h-4 border border-amber-600/40 rounded-xs" />
              </div>
            </div>

            {/* Card Number */}
            <div className="my-auto pt-4">
              <div className="font-mono text-base sm:text-lg tracking-widest font-semibold text-white">
                {revealedCardId === currentCard.id ? currentCard.fullNumberDemo : currentCard.maskedNumber}
              </div>
              {revealedCardId === currentCard.id && (
                <span className="text-[10px] text-amber-400 font-mono block mt-0.5 animate-pulse">
                  Auto-hiding in security countdown...
                </span>
              )}
            </div>

            {/* Cardholder & Exp */}
            <div className="flex items-end justify-between text-xs font-mono">
              <div>
                <span className="block text-[9px] uppercase text-slate-400">Cardholder</span>
                <span className="font-bold tracking-wider text-slate-200">ALEXANDER VANCE</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase text-slate-400">Expires</span>
                <span className="font-bold text-slate-200">{currentCard.exp}</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase text-slate-400">CVV</span>
                <span className="font-bold text-slate-200">
                  {revealedCardId === currentCard.id ? currentCard.cvv : '•••'}
                </span>
              </div>
            </div>
          </div>

          {/* Reveal & Freeze Fast Toggles */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleToggleReveal(currentCard.id)}
              className="py-2.5 px-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              {revealedCardId === currentCard.id ? (
                <>
                  <EyeOff className="w-4 h-4 text-slate-500" />
                  <span>Hide Details</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 text-slate-500" />
                  <span>Reveal Details</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleToggleFreeze(currentCard.id)}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs ${
                currentCard.isFrozen
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700'
              }`}
            >
              {currentCard.isFrozen ? (
                <>
                  <Unlock className="w-4 h-4" />
                  <span>Unfreeze Card</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Freeze Card</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Security & Limits Configuration (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          
          <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Card Controls & Limits
              </h4>
              <p className="text-xs text-slate-500">
                Adjust daily spending authorizations and security safeguards in real-time
              </p>
            </div>
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>

          {/* Daily POS Limit Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-700">
                Daily POS & Online Purchase Limit
              </label>
              <span className="font-mono font-bold text-xs text-slate-900">
                ${currentCard.dailyPosLimit.toLocaleString('en-US')}
              </span>
            </div>
            <input
              type="range"
              min={500}
              max={10000}
              step={250}
              value={currentCard.dailyPosLimit}
              onChange={(e) => handleLimitChange(currentCard.id, 'dailyPosLimit', Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
              <span>$500</span>
              <span>$5,000</span>
              <span>$10,000</span>
            </div>
          </div>

          {/* Daily ATM Limit Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-700">
                Daily ATM Cash Withdrawal Limit
              </label>
              <span className="font-mono font-bold text-xs text-slate-900">
                ${currentCard.dailyAtmLimit.toLocaleString('en-US')}
              </span>
            </div>
            <input
              type="range"
              min={200}
              max={3000}
              step={100}
              value={currentCard.dailyAtmLimit}
              onChange={(e) => handleLimitChange(currentCard.id, 'dailyAtmLimit', Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
              <span>$200</span>
              <span>$1,500</span>
              <span>$3,000</span>
            </div>
          </div>

          {/* Emergency Card Services */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500">
              Card misplaced, compromised, or retained by an ATM?
            </div>
            <button
              onClick={() => {
                handleToggleFreeze(currentCard.id);
                alert(`Emergency protocol activated: ${currentCard.name} has been frozen. Replacement card has been queued for dispatch to your address on file.`);
              }}
              className="px-3.5 py-2 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-colors whitespace-nowrap"
            >
              Report Lost / Request Replacement
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
