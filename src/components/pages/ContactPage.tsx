import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General Account Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
              Customer Advisory & Care
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Connect with a Senior Financial Specialist
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need mortgage pre-approval guidance, commercial credit line structuring, 
              or 24/7 technical assistance, our licensed advisors are ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Direct Numbers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-slate-950 font-display">
                Dedicated Communication Channels
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">24/7 Client Advisory Line</div>
                    <div className="font-mono text-slate-700 text-sm mt-0.5">1-800-555-TRUST (8787)</div>
                    <div className="text-[11px] text-slate-500">Toll-free across the United States</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Priority Fraud & Card Emergency</div>
                    <div className="font-mono text-rose-700 text-sm mt-0.5">1-800-555-SAFE (7233)</div>
                    <div className="text-[11px] text-slate-500">Immediate card freeze & dispute dispatch</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Secure Message Dispatch</div>
                    <div className="text-slate-700 mt-0.5">clientcare@meridiantrustdemo.bank</div>
                    <div className="text-[11px] text-slate-500">Encrypted electronic response within 2 hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">National Executive Headquarters</div>
                    <div className="text-slate-700 mt-0.5">450 California Street, Suite 100, San Francisco, CA 94104</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 text-xs space-y-2">
              <div className="font-bold text-amber-400">Schedule In-Branch Appointment</div>
              <p className="text-slate-300 leading-relaxed">
                Prefer an in-person meeting? Reserve dedicated time with a private banker or mortgage underwriter at any of our flagship centers.
              </p>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 font-display">
                  Message Dispatched to Advisory Desk
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name || 'Valued Client'}</strong>. 
                  A licensed Meridian Trust relationship specialist will review your inquiry regarding 
                  "{formData.topic}" and contact you at <strong className="text-slate-900">{formData.email || 'your email'}</strong> within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', topic: 'General Account Inquiry', message: '' });
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-950 font-display">
                    Send an Encrypted Inquiry
                  </h3>
                  <p className="text-xs text-slate-500">
                    All electronic communications are protected by bank-grade TLS 1.3 encryption
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Full Legal Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jonathan Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jonathan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="(415) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900 font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Advisory Topic</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                    >
                      <option value="General Account Inquiry">General Account Inquiry</option>
                      <option value="High-Yield Savings & CDs">High-Yield Savings & CDs</option>
                      <option value="Home Mortgage Application">Home Mortgage Application</option>
                      <option value="Commercial Lending & Credit Lines">Commercial Lending & Credit Lines</option>
                      <option value="Private Wealth Management">Private Wealth Management</option>
                      <option value="Report Card Fraud / Dispute">Report Card Fraud / Dispute</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How may our advisory team assist you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Encrypted Inquiry</span>
                      <Send className="w-3.5 h-3.5 text-amber-400" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
