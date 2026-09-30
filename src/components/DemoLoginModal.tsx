import React, { useState } from 'react';
import { X, Lock, ShieldCheck, ArrowRight, UserCheck, KeyRound, Sparkles } from 'lucide-react';

interface DemoLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const DemoLoginModal: React.FC<DemoLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [step, setStep] = useState<'credentials' | '2fa'>('credentials');
  const [username, setUsername] = useState('alex.vance');
  const [password, setPassword] = useState('••••••••••••');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');
    setTimeout(() => {
      setIsLoading(false);
      setStep('2fa');
      setOtp('482910'); // Pre-fill sample OTP for convenience
    }, 600);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
      onClose();
    }, 600);
  };

  const handleOneClickLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div 
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
              <Lock className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-display">
                Online Banking Sign In
              </h3>
              <p className="text-[11px] text-slate-400">
                Meridian Trust Demo Environment
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

        {/* Demo environment disclosure banner */}
        <div className="px-5 py-3 bg-amber-50 border-b border-amber-200/60 text-xs text-amber-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
          <span>Demo Simulation Mode: Safe sample data pre-filled.</span>
        </div>

        <div className="p-6">
          {step === 'credentials' ? (
            <div>
              {/* Quick 1-Click Access */}
              <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                <div className="text-xs font-semibold text-slate-900 mb-1 flex items-center justify-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  <span>Instant Demo Access</span>
                </div>
                <p className="text-[11px] text-slate-500 mb-3">
                  Log in as sample client: <strong className="text-slate-800">Alexander Vance (Premier Checking & High-Yield Reserve)</strong>
                </p>
                <button
                  type="button"
                  onClick={handleOneClickLogin}
                  disabled={isLoading}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                  <span>Sign In Immediately as Demo Client</span>
                </button>
              </div>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-xs text-slate-400">
                  <span className="bg-white px-2">or review simulated sign-in</span>
                </div>
              </div>

              <form onSubmit={handleCredentialsSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Online Banking Username
                  </label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900 font-mono"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Password
                    </label>
                    <span className="text-[10px] text-slate-400">Sample pre-filled</span>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900 font-mono"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-2.5 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  {isLoading ? <span>Verifying...</span> : <span>Proceed to 2FA Authentication</span>}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div className="text-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center mx-auto mb-2">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  Two-Factor Authentication
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  A demo security passcode has been sent to your simulated device ending in ••8910.
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
                <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">Demo One-Time Passcode</div>
                <div className="font-mono text-xl font-bold tracking-widest text-slate-950">
                  482910
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Enter 6-Digit Code
                </label>
                <input
                  type="text"
                  maxLength={6}
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full text-center tracking-widest font-mono text-base font-bold py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('credentials')}
                  className="w-1/3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-2/3 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  {isLoading ? <span>Authenticating...</span> : <span>Confirm & Enter Dashboard</span>}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 text-center">
          Protected by Meridian Trust Bank Identity Shield · TLS 1.3
        </div>

      </div>
    </div>
  );
};
