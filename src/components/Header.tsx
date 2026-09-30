import React, { useState } from 'react';
import { PageView } from '../types/banking';
import { 
  Building2, 
  ChevronDown, 
  Menu, 
  X, 
  Lock, 
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Briefcase,
  User,
  Landmark,
  PiggyBank,
  TrendingUp,
  Smartphone,
  HelpCircle,
  MapPin,
  PhoneCall
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenAccount: () => void;
  onOpenLogin: () => void;
  isLoggedInDemo: boolean;
  onLogoutDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenAccount,
  onOpenLogin,
  isLoggedInDemo,
  onLogoutDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro security bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              FDIC Insured · Official Banking Portal
            </span>
            <span className="hidden md:inline text-slate-500">·</span>
            <span className="hidden md:inline text-slate-400">256-Bit Hardware Encryption Active</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <button 
              onClick={() => handleNavClick('branches')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <MapPin className="w-3 h-3" />
              <span>Find Branch / ATM</span>
            </button>
            <span className="text-slate-600">·</span>
            <button 
              onClick={() => handleNavClick('contact')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span className="font-mono">1-800-555-TRUST</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Zone 1: Single text wordmark with brand crest */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-lg bg-slate-950 flex items-center justify-center text-amber-400 shadow-sm border border-slate-800 group-hover:border-amber-400/50 transition-colors">
            <Building2 className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-slate-950 block leading-tight font-display">
              Meridian<span className="text-amber-600">Trust</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium block">
              National Association
            </span>
          </div>
        </button>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700">
          {/* Personal Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen('personal')}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <button
              onClick={() => handleNavClick('personal')}
              className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 ${
                ['personal', 'savings', 'current'].includes(currentPage)
                  ? 'text-slate-950 font-semibold bg-slate-100'
                  : 'hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <span>Personal</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {dropdownOpen === 'personal' && (
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-xl shadow-xl py-2 mt-1 z-50">
                <button
                  onClick={() => handleNavClick('personal')}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-start gap-3 transition-colors"
                >
                  <User className="w-4 h-4 text-blue-900 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-slate-900">Personal Overview</div>
                    <div className="text-[11px] text-slate-500">Checking, savings, & family banking</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('savings')}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-start gap-3 transition-colors"
                >
                  <PiggyBank className="w-4 h-4 text-amber-600 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-slate-900">High-Yield Savings</div>
                    <div className="text-[11px] text-slate-500">Earn up to 4.85% APY</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('current')}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-start gap-3 transition-colors"
                >
                  <Landmark className="w-4 h-4 text-blue-900 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-slate-900">Current & Checking</div>
                    <div className="text-[11px] text-slate-500">Everyday accounts with $0 fees</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Business */}
          <button
            onClick={() => handleNavClick('business')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPage === 'business'
                ? 'text-slate-950 font-semibold bg-slate-100'
                : 'hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            Business Banking
          </button>

          {/* Loans */}
          <button
            onClick={() => handleNavClick('loans')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPage === 'loans'
                ? 'text-slate-950 font-semibold bg-slate-100'
                : 'hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            Loans
          </button>

          {/* Investments */}
          <button
            onClick={() => handleNavClick('investments')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPage === 'investments' || currentPage === 'deposits'
                ? 'text-slate-950 font-semibold bg-slate-100'
                : 'hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            Investments & FDs
          </button>

          {/* Cards */}
          <button
            onClick={() => handleNavClick('cards')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPage === 'cards'
                ? 'text-slate-950 font-semibold bg-slate-100'
                : 'hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            Cards
          </button>

          {/* Digital Banking */}
          <button
            onClick={() => handleNavClick('digital')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPage === 'digital'
                ? 'text-slate-950 font-semibold bg-slate-100'
                : 'hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            Digital Banking
          </button>

          {/* Support */}
          <button
            onClick={() => handleNavClick('help')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPage === 'help'
                ? 'text-slate-950 font-semibold bg-slate-100'
                : 'hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            Support
          </button>
        </nav>

        {/* Zone 3: 1-2 Primary Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {isLoggedInDemo ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavClick('dashboard')}
                className="px-3.5 py-2 text-xs font-semibold text-slate-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Demo Portal</span>
              </button>
              <button
                onClick={onLogoutDemo}
                className="px-2.5 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                title="Exit Demo Session"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenLogin}
              className="px-3.5 py-2 text-xs font-semibold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 border border-slate-200"
            >
              <Lock className="w-3.5 h-3.5 text-slate-600" />
              <span>Login</span>
            </button>
          )}

          <button
            onClick={onOpenAccount}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Open an Account</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-800">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('personal')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Personal Banking</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('savings')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between pl-4 text-slate-600"
            >
              <span>High-Yield Savings (4.85% APY)</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('current')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between pl-4 text-slate-600"
            >
              <span>Current & Checking Accounts</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('business')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Business Banking</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('loans')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Loans & Mortgage Calculator</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('investments')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Investments & Fixed Deposits</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('cards')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Credit & Debit Cards</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('digital')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Digital Banking Services</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>About Meridian Trust</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('branches')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Branch & ATM Locator</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNavClick('help')}
              className="text-left py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Help & Support Center</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-2.5 text-center font-semibold text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Online Banking Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccount();
                }}
                className="w-full py-2.5 text-center font-semibold text-white bg-slate-950 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Open an Account
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
