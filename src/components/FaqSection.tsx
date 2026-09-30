import React, { useState, useMemo } from 'react';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockBankingData';
import { PageView } from '../types/banking';

interface FaqSectionProps {
  onNavigate: (page: PageView) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-01': true,
    'faq-03': true,
  });

  const categories = [
    'All',
    'Opening Account',
    'KYC & Verification',
    'Loans & Mortgages',
    'Rates & Deposits',
    'Digital Banking',
    'Cards & Security',
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
            Clear Answers to Your Banking Inquiries
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Learn about account opening, regulatory disclosures, loan calculations, 
            and our enterprise-level security architecture.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. KYC, APY rates, FDIC, wire transfers, lost card)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <div className="text-sm font-semibold text-slate-900">No matching questions found</div>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for a different keyword or contact our support team directly.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-all bg-slate-50/60"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-white transition-colors"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-6 h-6 rounded-full bg-slate-200/80 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-slate-900 text-white' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support CTA */}
        <div className="mt-10 p-6 bg-slate-100 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-blue-900 shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900">Have a specific question not covered here?</div>
              <div className="text-xs text-slate-500">Our customer advisory desk is available 24 hours a day, 7 days a week.</div>
            </div>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
          >
            Contact Customer Support
          </button>
        </div>

      </div>
    </section>
  );
};
