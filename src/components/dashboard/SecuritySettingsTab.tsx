import React, { useState } from 'react';
import { ShieldCheck, KeyRound, Smartphone, Bell, Clock, CheckCircle2, AlertTriangle, Monitor } from 'lucide-react';

export const SecuritySettingsTab: React.FC = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [smsAlertsEnabled, setSmsAlertsEnabled] = useState(true);
  const [alertThreshold, setAlertThreshold] = useState('100');

  const sessions = [
    { device: 'Safari 18.2 on macOS Sonoma', ip: '198.51.100.44', location: 'San Francisco, CA', time: 'Active Now (Current Session)', status: 'Verified' },
    { device: 'Meridian Mobile App on iPhone 16 Pro', ip: '198.51.100.89', location: 'San Francisco, CA', time: 'Yesterday, 8:42 PM', status: 'Biometric Face ID' },
    { device: 'Chrome 129 on Windows 11', ip: '203.0.113.12', location: 'San Jose, CA', time: 'Sep 24, 2026, 11:15 AM', status: '2FA Confirmed' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-950 font-display">
            Security Controls & Authentication Safeguards
          </h3>
          <p className="text-xs text-slate-500">
            Configure multi-factor authentication, biometric access, and real-time fraud alert sensitivity
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100 font-medium self-start sm:self-auto">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Security Score: Optimum</span>
        </div>
      </div>

      {/* Security Switches */}
      <div className="space-y-4">
        
        {/* 2FA */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-900 mt-0.5">
              <KeyRound className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">
                Two-Factor Authentication (2FA)
              </div>
              <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                Requires one-time security passcode for all transfers to new payees and sensitive setting updates.
              </div>
            </div>
          </div>
          <button
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
              twoFactorEnabled ? 'bg-slate-950' : 'bg-slate-300'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                twoFactorEnabled ? 'right-1' : 'left-1'
              }`}
            />
          </button>
        </div>

        {/* Biometrics */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-900 mt-0.5">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">
                Biometric Login (Face ID & Touch ID)
              </div>
              <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                Enable instant biometric authentication on registered mobile smartphones and tablets.
              </div>
            </div>
          </div>
          <button
            onClick={() => setBiometricEnabled(!biometricEnabled)}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
              biometricEnabled ? 'bg-slate-950' : 'bg-slate-300'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                biometricEnabled ? 'right-1' : 'left-1'
              }`}
            />
          </button>
        </div>

        {/* Real-time Alerts */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-900 mt-0.5">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">
                Instant Transaction Push & SMS Alerts
              </div>
              <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                Notify instantly whenever an authorized charge exceeds:
                <select
                  value={alertThreshold}
                  onChange={(e) => setAlertThreshold(e.target.value)}
                  className="ml-2 font-mono font-bold text-xs bg-white border border-slate-200 rounded px-1.5 py-0.5"
                >
                  <option value="50">$50.00</option>
                  <option value="100">$100.00</option>
                  <option value="250">$250.00</option>
                  <option value="500">$500.00</option>
                </select>
              </div>
            </div>
          </div>
          <button
            onClick={() => setSmsAlertsEnabled(!smsAlertsEnabled)}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
              smsAlertsEnabled ? 'bg-slate-950' : 'bg-slate-300'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                smsAlertsEnabled ? 'right-1' : 'left-1'
              }`}
            />
          </button>
        </div>

      </div>

      {/* Active Login Sessions */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
          <Monitor className="w-3.5 h-3.5 text-slate-400" />
          <span>Active Authenticated Sessions & Devices</span>
        </h4>
        <div className="space-y-2">
          {sessions.map((s, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-slate-50/70 border border-slate-200 rounded-xl flex items-center justify-between text-xs"
            >
              <div>
                <div className="font-semibold text-slate-900">{s.device}</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                  IP: {s.ip} · {s.location}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-emerald-600 font-semibold block">{s.status}</span>
                <span className="text-[10px] text-slate-400">{s.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
