
import React from 'react';

export const AdsManager: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Active Ad Campaigns</h3>
            <div className="space-y-4">
              {[
                { name: 'Summer Launch Promo', budget: '$500', spent: '$230', reach: '45k', status: 'Running', platform: 'FB/IG' },
                { name: 'TikTok Viral Hook', budget: '$1,200', spent: '$1,200', reach: '180k', status: 'Completed', platform: 'TikTok' },
                { name: 'New Year Hiring Drive', budget: '$200', spent: '$15', reach: '2.3k', status: 'Paused', platform: 'FB' },
              ].map((ad, i) => (
                <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 font-bold">
                      {ad.platform.split('/')[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{ad.name}</h4>
                      <p className="text-xs text-slate-400">Total Budget: {ad.budget}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 w-full md:w-auto">
                    <div className="text-center">
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Spent</p>
                      <p className="text-sm font-bold text-slate-800">{ad.spent}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Reach</p>
                      <p className="text-sm font-bold text-slate-800">{ad.reach}</p>
                    </div>
                    <div className="ml-auto md:ml-0">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                        ad.status === 'Running' ? 'bg-emerald-50 text-emerald-600' : 
                        ad.status === 'Completed' ? 'bg-slate-100 text-slate-600' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {ad.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Targeting Profile (AI Suggested)</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase block mb-2">Location</label>
                <div className="flex flex-wrap gap-2">
                  {['Phnom Penh', 'Siem Reap', 'Sihanoukville'].map(l => (
                    <span key={l} className="bg-slate-100 px-3 py-1 rounded-lg text-xs font-semibold text-slate-600">{l}</span>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase block mb-2">Demographics</label>
                <p className="text-sm text-slate-700">Ages 18 - 45, Interests: E-commerce, Fashion, Technology.</p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <button className="w-full bg-slate-800 text-white py-3 rounded-xl font-bold hover:bg-slate-900 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                  Optimize Audience with AI
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white">
            <h4 className="text-lg font-bold mb-4">Ad Budget Advisor</h4>
            <p className="text-xs text-indigo-100 leading-relaxed mb-6">
              "Based on your current performance, increasing your TikTok budget by $200 could result in an additional 40k views this weekend."
            </p>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl font-bold text-sm backdrop-blur-md transition-all">
              View Detailed Forecast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
