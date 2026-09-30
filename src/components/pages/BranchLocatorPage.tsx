import React, { useState, useMemo } from 'react';
import { BRANCH_LOCATIONS } from '../../data/mockBankingData';
import { MapPin, Phone, Clock, Search, Filter, Check, Navigation, ExternalLink } from 'lucide-react';

export const BranchLocatorPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('All');
  const [activeBranch, setActiveBranch] = useState(BRANCH_LOCATIONS[0]);

  const serviceOptions = [
    'All',
    'ATM 24/7',
    'Safe Deposit',
    'Drive-Thru',
    'Commercial Banking',
    'Mortgage Specialist',
    'Foreign Currency',
  ];

  const filteredBranches = useMemo(() => {
    return BRANCH_LOCATIONS.filter((b) => {
      const matchesSearch =
        b.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.zip.includes(searchQuery) ||
        b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.address.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesService =
        selectedService === 'All' || b.services.includes(selectedService as any);

      return matchesSearch && matchesService;
    });
  }, [searchQuery, selectedService]);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
              Nationwide Presence
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Branch & 55,000+ ATM Network Locator
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Locate full-service advisory centers, safe deposit facilities, drive-thru teller windows, 
              and surcharge-free Allpoint network ATMs across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Main Locator Interface */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Search & Filter Bar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by City, State, ZIP or Branch name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 no-scrollbar">
            {serviceOptions.map((svc) => (
              <button
                key={svc}
                onClick={() => setSelectedService(svc)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedService === svc
                    ? 'bg-slate-950 text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {svc}
              </button>
            ))}
          </div>
        </div>

        {/* Results layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Branch List (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5 max-h-[600px] overflow-y-auto pr-1">
            <div className="text-xs font-semibold text-slate-500 mb-2">
              Found {filteredBranches.length} locations matching criteria:
            </div>

            {filteredBranches.map((branch) => {
              const isSelected = activeBranch.id === branch.id;
              return (
                <div
                  key={branch.id}
                  onClick={() => setActiveBranch(branch)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-blue-900 bg-white ring-2 ring-blue-900 shadow-md'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{branch.name}</h4>
                      <p className="text-xs text-slate-600 mt-1">{branch.address}</p>
                      <p className="text-xs text-slate-500">{branch.city}, {branch.state} {branch.zip}</p>
                    </div>
                    <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      {branch.distanceMiles} mi
                    </span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                    {branch.services.slice(0, 3).map((s, idx) => (
                      <span key={idx} className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                    {branch.services.length > 3 && (
                      <span className="text-[10px] text-slate-400 px-1 py-0.5">
                        +{branch.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Branch View / Map Preview (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              {/* Simulated Map Visual container */}
              <div className="w-full h-48 bg-slate-900 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-slate-800">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="z-10 text-center text-white">
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center mx-auto mb-2 shadow-lg font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-sm">{activeBranch.name}</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">GPS: 37.7925° N, 122.4014° W</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 font-display">
                    {activeBranch.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-600 mt-1">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{activeBranch.address}, {activeBranch.city}, {activeBranch.state} {activeBranch.zip}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 block mb-0.5">Operating Hours</span>
                      <span className="text-slate-600 leading-relaxed">{activeBranch.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 block mb-0.5">Telephone</span>
                      <span className="font-mono text-slate-800">{activeBranch.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-900 block mb-2">Available Services at this Hub:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeBranch.services.map((svc, i) => (
                      <span key={i} className="text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{svc}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex gap-3">
              <button
                onClick={() => alert(`[Directions Simulator] Opening navigation coordinates for ${activeBranch.name} at ${activeBranch.address}.`)}
                className="flex-1 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Get Driving Directions</span>
              </button>
              <a
                href={`tel:${activeBranch.phone}`}
                className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                <span>Call Branch</span>
              </a>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};
