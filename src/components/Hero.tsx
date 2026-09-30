import React from 'react';
import { ArrowRight, ShieldCheck, Lock, CheckCircle2, ChevronRight, Play } from 'lucide-react';
import { PageView } from '../types/banking';

interface HeroProps {
  onOpenAccount: () => void;
  onExploreServices: () => void;
  onOpenDemo: () => void;
  onNavigate: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAccount,
  onExploreServices,
  onOpenDemo,
  onNavigate,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
      {/* Background subtle radial illumination */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed editorial kicker - NO PILL */}
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium tracking-wide uppercase mb-4">
              <span>National Member Bank</span>
              <span aria-hidden="true">·</span>
              <span>FDIC Insured to $250k</span>
              <span aria-hidden="true">·</span>
              <span>Est. 1984</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display max-w-2xl text-balance">
              Banking Made Simple. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
                Your Future, Secured.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Experience institutional financial strength paired with seamless digital technology. 
              Earn up to <strong className="text-white font-semibold">4.85% APY</strong> on deposits, access 
              competitive loan financing, and manage everyday wealth with zero hidden maintenance fees.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAccount}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-lg shadow-amber-400/10 flex items-center gap-2"
              >
                <span>Open an Account</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={onOpenDemo}
                className="px-4 py-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-2 underline underline-offset-4 decoration-slate-600 hover:decoration-amber-400"
              >
                <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Try Demo Online Banking</span>
              </button>
            </div>

            {/* Adjacent Proof Trust Markers */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">4.85%</div>
                <div className="text-xs text-slate-400 mt-0.5">High-Yield Reserve APY</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">$250K</div>
                <div className="text-xs text-slate-400 mt-0.5">FDIC Insurance per category</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">$0</div>
                <div className="text-xs text-slate-400 mt-0.5">Account maintenance fees</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container with Fallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <img
                src="/src/assets/images/hero_banking_executive_1790777009805.jpg"
                alt="Meridian Trust Bank premier institutional headquarters with advisors and executive clients"
                className="w-full h-80 sm:h-96 lg:h-[430px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle gradient contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating contextual indicator inside visual */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between text-xs text-slate-300 pb-2 border-b border-slate-800">
                  <span className="font-semibold text-white">Verified Security Protocol</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    256-Bit Protected
                  </span>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">High-Yield Growth Reserve</span>
                    <span className="font-semibold text-white font-mono text-sm">$85,210.15</span>
                  </div>
                  <button
                    onClick={() => onNavigate('savings')}
                    className="text-amber-400 hover:text-amber-300 text-xs font-semibold flex items-center gap-1"
                  >
                    <span>View Rates</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
