import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  LayoutDashboard, 
  Send, 
  Receipt, 
  CreditCard, 
  Users, 
  FileText, 
  ShieldCheck, 
  Info, 
  LogOut, 
  Bell, 
  Clock, 
  ChevronRight, 
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Menu,
  X
} from 'lucide-react';
import { DashboardTab } from '../../types/banking';

interface DashboardLayoutProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
  onExitDashboard: () => void;
  unreadNotificationsCount: number;
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  activeTab,
  onTabChange,
  onExitDashboard,
  unreadNotificationsCount,
  children,
}) => {
  const [sessionSeconds, setSessionSeconds] = useState(895); // ~15 minutes demo timer
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Simulated session countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds((prev) => (prev > 0 ? prev - 1 : 900));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const navItems: { id: DashboardTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'overview', label: 'Overview & Balances', icon: LayoutDashboard },
    { id: 'transfer', label: 'Money Transfer', icon: Send },
    { id: 'bills', label: 'Bill Payments', icon: Receipt },
    { id: 'cards', label: 'Cards Management', icon: CreditCard },
    { id: 'beneficiaries', label: 'Beneficiaries', icon: Users },
    { id: 'statements', label: 'Statements & Tax', icon: FileText },
    { id: 'account_details', label: 'Account Details', icon: Info },
    { id: 'security', label: 'Security & 2FA', icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      
      {/* Top Demo Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-1.5 text-xs text-amber-900 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <strong className="font-semibold">Demo Simulation Environment:</strong>
          <span className="hidden sm:inline">Sample customer Alexander Vance. No real funds or sensitive credentials are used.</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 font-mono text-[11px] text-amber-800">
            <Clock className="w-3.5 h-3.5" />
            <span>Timeout in {formatTimer(sessionSeconds)}</span>
          </div>
          <button
            onClick={() => setSessionSeconds(900)}
            className="text-[11px] underline hover:text-amber-950 font-medium"
          >
            Extend
          </button>
        </div>
      </div>

      {/* Main App Bar */}
      <header className="bg-slate-950 text-white px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-slate-800">
        
        {/* Left: Brand + Breadcrumb */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onExitDashboard}
            className="flex items-center gap-2 group focus:outline-none"
            title="Return to Public Website"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
              <Building2 className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-base font-bold font-display tracking-tight text-white group-hover:text-amber-300 transition-colors">
              Meridian<span className="text-amber-400">Trust</span>
            </span>
          </button>

          <span className="text-slate-600">/</span>
          <span className="text-xs font-semibold text-slate-300 capitalize hidden sm:inline">
            Online Portal · {activeTab.replace('_', ' ')}
          </span>
        </div>

        {/* Right: Notifications & Profile */}
        <div className="flex items-center gap-3">
          {/* Notifications button */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg relative"
              aria-label="View notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-400 rounded-full" />
              )}
            </button>

            {/* Notifications Popover */}
            {notificationsOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 p-4 z-50 animate-in fade-in duration-100">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                  <span className="text-xs font-bold text-slate-900">Recent Alerts</span>
                  <span className="text-[10px] text-slate-500 font-mono">Demo Real-time</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Direct Deposit Credited</div>
                      <div className="text-[11px] text-slate-600">Acme Global Payroll $5,450.00 posted.</div>
                      <span className="text-[10px] text-slate-400 font-mono">Today, 09:24 AM</span>
                    </div>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Security Login Approved</div>
                      <div className="text-[11px] text-slate-600">Simulated 2FA verified for browser session.</div>
                      <span className="text-[10px] text-slate-400 font-mono">Today, 09:00 AM</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setNotificationsOpen(false)}
                  className="w-full mt-3 py-1.5 text-center text-[11px] font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 rounded"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Profile snippet */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
            <div className="w-7 h-7 rounded-full bg-amber-400/20 text-amber-300 font-bold text-xs flex items-center justify-center border border-amber-400/30">
              AV
            </div>
            <div className="hidden md:block text-left text-xs">
              <div className="font-semibold text-white leading-tight">Alexander Vance</div>
              <div className="text-[10px] text-slate-400 leading-tight">Premier Client</div>
            </div>
          </div>

          {/* Exit / Return button */}
          <button
            onClick={onExitDashboard}
            className="ml-2 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Exit Demo</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </header>

      {/* Main Workspace: Sidebar + Content */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 gap-6">
        
        {/* Sidebar Navigation */}
        <aside className={`lg:w-64 bg-white rounded-2xl border border-slate-200 shadow-xs p-4 flex flex-col justify-between shrink-0 ${mobileNavOpen ? 'block' : 'hidden lg:flex'}`}>
          <div className="space-y-1">
            <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Dashboard Navigation
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    setMobileNavOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                </button>
              );
            })}
          </div>

          {/* Sidebar quick support box */}
          <div className="mt-6 pt-4 border-t border-slate-100 p-3 bg-slate-50 rounded-xl text-xs">
            <div className="flex items-center gap-1.5 text-slate-900 font-bold mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>FDIC Protected</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">
              All accounts insured up to $250,000 per depositor category.
            </p>
            <div className="mt-2 text-[11px] font-mono text-slate-400">
              Cert #39281
            </div>
          </div>
        </aside>

        {/* Dynamic Content Viewport */}
        <main className="flex-1 min-w-0">
          {children}
        </main>

      </div>

    </div>
  );
};
