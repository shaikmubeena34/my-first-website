import React, { useState } from 'react';
import { PageView, DashboardTab, BankAccount, Transaction, Beneficiary } from './types/banking';
import { INITIAL_ACCOUNTS, INITIAL_TRANSACTIONS, INITIAL_BENEFICIARIES } from './data/mockBankingData';

// Public Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { QuickServices } from './components/QuickServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LoanCalculator } from './components/LoanCalculator';
import { FeaturedAccounts } from './components/FeaturedAccounts';
import { DigitalBankingSection } from './components/DigitalBankingSection';
import { SecuritySection } from './components/SecuritySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { OpenAccountModal } from './components/OpenAccountModal';
import { DemoLoginModal } from './components/DemoLoginModal';

// Dedicated Page Views
import { PersonalBankingPage } from './components/pages/PersonalBankingPage';
import { BusinessBankingPage } from './components/pages/BusinessBankingPage';
import { SavingsPage } from './components/pages/SavingsPage';
import { CurrentAccountsPage } from './components/pages/CurrentAccountsPage';
import { LoansPage } from './components/pages/LoansPage';
import { CreditCardsPage } from './components/pages/CreditCardsPage';
import { FixedDepositsPage } from './components/pages/FixedDepositsPage';
import { InvestmentsPage } from './components/pages/InvestmentsPage';
import { DigitalBankingPage } from './components/pages/DigitalBankingPage';
import { AboutUsPage } from './components/pages/AboutUsPage';
import { BranchLocatorPage } from './components/pages/BranchLocatorPage';
import { ContactPage } from './components/pages/ContactPage';
import { HelpSupportPage } from './components/pages/HelpSupportPage';
import { LegalPage } from './components/pages/LegalPage';

// Dashboard Components
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { DashboardOverview } from './components/dashboard/DashboardOverview';
import { TransferModal } from './components/dashboard/TransferModal';
import { BillPayModal } from './components/dashboard/BillPayModal';
import { CardsManager } from './components/dashboard/CardsManager';
import { BeneficiariesTab } from './components/dashboard/BeneficiariesTab';
import { StatementsTab } from './components/dashboard/StatementsTab';
import { AccountDetailsTab } from './components/dashboard/AccountDetailsTab';
import { SecuritySettingsTab } from './components/dashboard/SecuritySettingsTab';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [dashboardTab, setDashboardTab] = useState<DashboardTab>('overview');
  const [isLoggedInDemo, setIsLoggedInDemo] = useState<boolean>(false);
  
  // Dynamic State for live simulation
  const [accounts, setAccounts] = useState<BankAccount[]>(INITIAL_ACCOUNTS);
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>(INITIAL_BENEFICIARIES);
  const [unreadNotifications, setUnreadNotifications] = useState<number>(2);

  // Modals state
  const [isOpenAccountModalOpen, setIsOpenAccountModalOpen] = useState(false);
  const [openAccountType, setOpenAccountType] = useState('High-Yield Savings');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [preselectedTransferBeneficiary, setPreselectedTransferBeneficiary] = useState<Beneficiary | null>(null);

  // Navigation helper
  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Account Trigger
  const handleTriggerOpenAccount = (accountType: string = 'High-Yield Savings') => {
    setOpenAccountType(accountType);
    setIsOpenAccountModalOpen(true);
  };

  // Open Login Trigger
  const handleTriggerLogin = () => {
    setIsLoginModalOpen(true);
  };

  // Demo Login Success
  const handleLoginSuccess = () => {
    setIsLoggedInDemo(true);
    setCurrentPage('dashboard');
    setDashboardTab('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Demo Logout
  const handleLogoutDemo = () => {
    setIsLoggedInDemo(false);
    setCurrentPage('home');
  };

  // Successful new account creation from modal
  const handleAccountCreated = (newAccountName: string) => {
    const newId = `acc-${Date.now()}`;
    const newMasked = `•••• ${Math.floor(1000 + Math.random() * 9000)}`;
    const newAcc: BankAccount = {
      id: newId,
      name: newAccountName,
      type: newAccountName.toLowerCase().includes('checking') ? 'Checking' : 'Savings',
      accountNumberMasked: newMasked,
      balance: 500.00,
      availableBalance: 500.00,
      currency: 'USD',
      apy: newAccountName.toLowerCase().includes('savings') ? 4.85 : undefined,
    };

    setAccounts([newAcc, ...accounts]);
    setIsLoggedInDemo(true);
    setCurrentPage('dashboard');
    setDashboardTab('overview');
  };

  // Execute Transfer inside Dashboard
  const handleExecuteTransfer = (
    sourceAccountId: string,
    amount: number,
    beneficiaryName: string,
    accountMasked: string,
    category: 'Transfer',
    note: string
  ) => {
    // 1. Deduct from source account
    setAccounts((prev) =>
      prev.map((acc) => {
        if (acc.id === sourceAccountId) {
          const newBal = acc.balance - amount;
          return {
            ...acc,
            balance: Math.round(newBal * 100) / 100,
            availableBalance: Math.round(newBal * 100) / 100,
          };
        }
        return acc;
      })
    );

    // 2. Append new transaction record
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      date: 'Today, Just now',
      title: `Transfer to ${beneficiaryName}`,
      category: 'Transfer',
      amount,
      type: 'debit',
      status: 'Completed',
      accountMasked: accounts.find((a) => a.id === sourceAccountId)?.accountNumberMasked || '•••• 4829',
      reference: `TRF-RTP-${Math.floor(100000 + Math.random() * 900000)}`,
    };

    setTransactions([newTx, ...transactions]);
    setUnreadNotifications((prev) => prev + 1);
  };

  // Execute Bill Pay inside Dashboard
  const handleExecuteBillPay = (
    sourceAccountId: string,
    billerName: string,
    amount: number,
    accountNumberMasked: string,
    category: 'Utilities'
  ) => {
    setAccounts((prev) =>
      prev.map((acc) => {
        if (acc.id === sourceAccountId) {
          const newBal = acc.balance - amount;
          return {
            ...acc,
            balance: Math.round(newBal * 100) / 100,
            availableBalance: Math.round(newBal * 100) / 100,
          };
        }
        return acc;
      })
    );

    const newTx: Transaction = {
      id: `tx-bp-${Date.now()}`,
      date: 'Today, Just now',
      title: `Bill Pay: ${billerName}`,
      category: 'Utilities',
      amount,
      type: 'debit',
      status: 'Completed',
      accountMasked: accountNumberMasked,
      reference: `BP-ELEC-${Math.floor(10000 + Math.random() * 90000)}`,
    };

    setTransactions([newTx, ...transactions]);
    setUnreadNotifications((prev) => prev + 1);
  };

  // Add Beneficiary
  const handleAddBeneficiary = (benData: Omit<Beneficiary, 'id'>) => {
    const newBen: Beneficiary = {
      ...benData,
      id: `ben-${Date.now()}`,
    };
    setBeneficiaries([newBen, ...beneficiaries]);
  };

  // Initiate Transfer from Beneficiaries Tab
  const handleInitiateTransferFromBen = (ben: Beneficiary) => {
    setPreselectedTransferBeneficiary(ben);
    setDashboardTab('transfer');
  };

  // If in Dashboard View
  if (currentPage === 'dashboard') {
    return (
      <DashboardLayout
        activeTab={dashboardTab}
        onTabChange={(tab) => {
          setDashboardTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onExitDashboard={() => setCurrentPage('home')}
        unreadNotificationsCount={unreadNotifications}
      >
        {dashboardTab === 'overview' && (
          <DashboardOverview
            accounts={accounts}
            transactions={transactions}
            onTabChange={setDashboardTab}
            onOpenTransfer={() => setDashboardTab('transfer')}
            onOpenBillPay={() => setDashboardTab('bills')}
          />
        )}

        {dashboardTab === 'transfer' && (
          <TransferModal
            accounts={accounts}
            beneficiaries={beneficiaries}
            onExecuteTransfer={handleExecuteTransfer}
            preselectedBeneficiary={preselectedTransferBeneficiary}
          />
        )}

        {dashboardTab === 'bills' && (
          <BillPayModal
            accounts={accounts}
            onExecuteBillPay={handleExecuteBillPay}
          />
        )}

        {dashboardTab === 'cards' && <CardsManager />}

        {dashboardTab === 'beneficiaries' && (
          <BeneficiariesTab
            beneficiaries={beneficiaries}
            onAddBeneficiary={handleAddBeneficiary}
            onInitiateTransfer={handleInitiateTransferFromBen}
          />
        )}

        {dashboardTab === 'statements' && <StatementsTab />}

        {dashboardTab === 'account_details' && (
          <AccountDetailsTab accounts={accounts} />
        )}

        {dashboardTab === 'security' && <SecuritySettingsTab />}
      </DashboardLayout>
    );
  }

  // Public Website View
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-950">
      
      {/* Top Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAccount={() => handleTriggerOpenAccount()}
        onOpenLogin={handleTriggerLogin}
        isLoggedInDemo={isLoggedInDemo}
        onLogoutDemo={handleLogoutDemo}
      />

      {/* Main Page Routing */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero
              onOpenAccount={() => handleTriggerOpenAccount()}
              onExploreServices={() => {
                const el = document.getElementById('services-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenDemo={() => {
                setIsLoggedInDemo(true);
                setCurrentPage('dashboard');
              }}
              onNavigate={handleNavigate}
            />

            <QuickServices
              onNavigate={handleNavigate}
              onOpenAccount={() => handleTriggerOpenAccount()}
            />

            <WhyChooseUs />

            <LoanCalculator
              onApplyLoan={(details) => {
                alert(`[Estimate Saved] Application initiated for $${details.amount.toLocaleString()} at ${details.rate}% APR over ${details.years} years. (Est EMI: $${details.emi}/mo). Please complete the 5-minute application form.`);
                handleTriggerOpenAccount('Loan Application');
              }}
            />

            <FeaturedAccounts
              onOpenAccount={(type) => handleTriggerOpenAccount(type)}
              onNavigate={handleNavigate}
            />

            <DigitalBankingSection
              onOpenDemo={() => {
                setIsLoggedInDemo(true);
                setCurrentPage('dashboard');
              }}
              onNavigate={handleNavigate}
            />

            <SecuritySection onNavigate={handleNavigate} />

            <TestimonialsSection />

            <FaqSection onNavigate={handleNavigate} />

            <FinalCta
              onOpenAccount={() => handleTriggerOpenAccount()}
              onNavigate={handleNavigate}
            />
          </>
        )}

        {currentPage === 'personal' && (
          <PersonalBankingPage
            onNavigate={handleNavigate}
            onOpenAccount={handleTriggerOpenAccount}
          />
        )}

        {currentPage === 'business' && (
          <BusinessBankingPage
            onNavigate={handleNavigate}
            onOpenAccount={handleTriggerOpenAccount}
          />
        )}

        {currentPage === 'savings' && (
          <SavingsPage
            onOpenAccount={handleTriggerOpenAccount}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'current' && (
          <CurrentAccountsPage
            onOpenAccount={handleTriggerOpenAccount}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'loans' && (
          <LoansPage
            onOpenAccount={handleTriggerOpenAccount}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'cards' && (
          <CreditCardsPage
            onOpenAccount={handleTriggerOpenAccount}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'deposits' && (
          <FixedDepositsPage
            onOpenAccount={handleTriggerOpenAccount}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'investments' && (
          <InvestmentsPage
            onNavigate={handleNavigate}
            onOpenAccount={handleTriggerOpenAccount}
          />
        )}

        {currentPage === 'digital' && (
          <DigitalBankingPage
            onOpenDemo={() => {
              setIsLoggedInDemo(true);
              setCurrentPage('dashboard');
            }}
            onOpenAccount={() => handleTriggerOpenAccount()}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <AboutUsPage
            onNavigate={handleNavigate}
            onOpenAccount={() => handleTriggerOpenAccount()}
          />
        )}

        {currentPage === 'branches' && <BranchLocatorPage />}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'help' && (
          <HelpSupportPage
            onNavigate={handleNavigate}
            onOpenDemo={() => {
              setIsLoggedInDemo(true);
              setCurrentPage('dashboard');
              setDashboardTab('cards');
            }}
          />
        )}

        {currentPage === 'privacy' && <LegalPage initialTab="privacy" />}

        {currentPage === 'terms' && <LegalPage initialTab="terms" />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAccount={() => handleTriggerOpenAccount()}
      />

      {/* Modals */}
      <OpenAccountModal
        isOpen={isOpenAccountModalOpen}
        onClose={() => setIsOpenAccountModalOpen(false)}
        initialAccountType={openAccountType}
        onSuccess={handleAccountCreated}
      />

      <DemoLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

    </div>
  );
}
