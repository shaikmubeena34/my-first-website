import React, { useState } from 'react';
import { FileText, Download, Eye, Calendar, ShieldCheck, CheckCircle2, X } from 'lucide-react';

export const StatementsTab: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [previewDoc, setPreviewDoc] = useState<string | null>(null);

  const statements = [
    { id: 'stmt-09-26', month: 'September 2026', period: 'Sep 01 – Sep 30, 2026', size: '248 KB', type: 'Monthly Account Statement' },
    { id: 'stmt-08-26', month: 'August 2026', period: 'Aug 01 – Aug 31, 2026', size: '235 KB', type: 'Monthly Account Statement' },
    { id: 'stmt-07-26', month: 'July 2026', period: 'Jul 01 – Jul 31, 2026', size: '241 KB', type: 'Monthly Account Statement' },
    { id: 'stmt-06-26', month: 'June 2026', period: 'Jun 01 – Jun 30, 2026', size: '229 KB', type: 'Monthly Account Statement' },
    { id: 'stmt-05-26', month: 'May 2026', period: 'May 01 – May 31, 2026', size: '215 KB', type: 'Monthly Account Statement' },
    { id: 'tax-1099-25', month: 'Form 1099-INT (Tax Year 2025)', period: 'Jan 01 – Dec 31, 2025', size: '180 KB', type: 'IRS Tax Document' },
  ];

  const handleDownload = (docName: string) => {
    alert(`[Simulated PDF Export] Download initiated for: ${docName}. In live production, an encrypted, watermarked PDF is generated with transaction hashes.`);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-950 font-display">
            Official Statements & Electronic Tax Vault
          </h3>
          <p className="text-xs text-slate-500">
            Access 7 years of legally archived periodic account statements, notices, and IRS 1099-INT forms
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-slate-400" />
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800"
          >
            <option value="2026">Tax Year 2026</option>
            <option value="2025">Tax Year 2025</option>
            <option value="2024">Tax Year 2024</option>
          </select>
        </div>
      </div>

      {/* Notice */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-900 shrink-0" />
          <span>Paperless e-Statements Active: You save paper and protect sensitive data from mail theft.</span>
        </div>
        <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
          Enrolled
        </span>
      </div>

      {/* Statements Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Document Title</th>
              <th className="py-3 px-4">Reporting Period</th>
              <th className="py-3 px-4">Classification</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {statements.map((stmt) => (
              <tr key={stmt.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-slate-500 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900">{stmt.month}</div>
                      <div className="text-[10px] text-slate-400 font-mono">PDF · {stmt.size}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-slate-600 font-mono text-[11px]">
                  {stmt.period}
                </td>
                <td className="py-3.5 px-4 text-slate-500">
                  {stmt.type}
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setPreviewDoc(stmt.month)}
                      className="p-1.5 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors"
                      title="Preview Statement"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDownload(stmt.month)}
                      className="px-2.5 py-1 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <Download className="w-3 h-3 text-slate-600" />
                      <span>PDF</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Simulated Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-sm font-bold text-slate-900">Document Preview · {previewDoc}</span>
              <button onClick={() => setPreviewDoc(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="my-6 p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4 text-xs font-mono">
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <div>
                  <div className="font-bold text-slate-900">MERIDIAN TRUST BANK, N.A.</div>
                  <div className="text-[10px] text-slate-500">Member FDIC · Certificate #39281</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-900">OFFICIAL STATEMENT</div>
                  <div className="text-[10px] text-slate-500">Page 1 of 3</div>
                </div>
              </div>

              <div>
                <div className="text-slate-500 text-[10px]">ACCOUNT HOLDER:</div>
                <div className="font-bold text-slate-900">ALEXANDER VANCE</div>
                <div className="text-[11px] text-slate-600">Checking: •••• 4829 · Savings: •••• 9104</div>
              </div>

              <div className="border-t border-slate-200 pt-3 space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span>Starting Balance:</span>
                  <span className="font-bold">$21,840.40</span>
                </div>
                <div className="flex justify-between text-emerald-700">
                  <span>Total Deposits / Credits:</span>
                  <span className="font-bold">+$5,798.65</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Total Withdrawals / Debits:</span>
                  <span className="font-bold">-$2,788.65</span>
                </div>
                <div className="flex justify-between text-slate-900 font-bold border-t border-slate-200 pt-1 text-xs">
                  <span>Ending Statement Balance:</span>
                  <span>$24,850.40</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  setPreviewDoc(null);
                  handleDownload(previewDoc);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save to Device</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
