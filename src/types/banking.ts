export type PageView =
  | 'home'
  | 'personal'
  | 'business'
  | 'savings'
  | 'current'
  | 'loans'
  | 'cards'
  | 'deposits'
  | 'investments'
  | 'digital'
  | 'about'
  | 'branches'
  | 'contact'
  | 'help'
  | 'privacy'
  | 'terms'
  | 'dashboard';

export type DashboardTab =
  | 'overview'
  | 'transfer'
  | 'bills'
  | 'cards'
  | 'beneficiaries'
  | 'statements'
  | 'account_details'
  | 'security';

export interface BankAccount {
  id: string;
  name: string;
  type: 'Checking' | 'Savings' | 'Investment' | 'Credit';
  accountNumberMasked: string;
  balance: number;
  availableBalance: number;
  currency: string;
  apy?: number;
  creditLimit?: number;
}

export interface Transaction {
  id: string;
  date: string;
  title: string;
  category: 'Salary' | 'Transfer' | 'Shopping' | 'Utilities' | 'Dining' | 'Investment' | 'Refund';
  amount: number;
  type: 'credit' | 'debit';
  status: 'Completed' | 'Pending' | 'Scheduled';
  accountMasked: string;
  reference: string;
}

export interface Beneficiary {
  id: string;
  name: string;
  bankName: string;
  accountMasked: string;
  routingOrIban: string;
  avatarInitials: string;
  category: 'Personal' | 'Business' | 'Utility';
}

export interface CreditCardProduct {
  id: string;
  name: string;
  tier: string;
  tagline: string;
  annualFee: number;
  aprRange: string;
  cashbackRate: string;
  welcomeBonus: string;
  features: string[];
  colorGradient: string;
  metalFinish?: boolean;
}

export interface BranchLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  services: ('ATM 24/7' | 'Drive-Thru' | 'Safe Deposit' | 'Mortgage Specialist' | 'Commercial Banking' | 'Foreign Currency')[];
  distanceMiles: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  metric: string;
  stars: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Opening Account' | 'KYC & Verification' | 'Loans & Mortgages' | 'Rates & Deposits' | 'Digital Banking' | 'Cards & Security';
}
