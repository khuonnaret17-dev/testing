
import React, { useState } from 'react';
import { analyzePostLink } from '../services/geminiService';

export const LinkBooster: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isBoosting, setIsBoosting] = useState(false);
  const [strategy, setStrategy] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleBoost = async () => {
    if (!url) return;
    setIsBoosting(true);
    setStrategy(null);
    setProgress(0);

    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress(prev => (prev < 90 ? prev + 10 : prev));
    }, 300);

    const result = await analyzePostLink(url);
    
    clearInterval(interval);
    setProgress(100);
    setStrategy(result || 'Could not generate strategy.');
    setIsBoosting(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-100 border border-slate-100 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        
        <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-50 rounded-3xl mb-6 text-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </div>
        
        <h2 className="text-3xl font-black text-slate-800 mb-2">Link Booster (ជំនួយការរុញផុស)</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
          គ្រាន់តែដាក់ Link នៃផុសរបស់អ្នក AI នឹងវិភាគ និងផ្ដល់យុទ្ធសាស្ត្រដើម្បីឱ្យផុសនោះមានអ្នកមើល (Reach) កាន់តែច្រើន។
        </p>

        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <input 
            type="text" 
            placeholder="បញ្ចូល Link ផុសនៅទីនេះ (Facebook, TikTok, IG...)"
            className="flex-1 bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all font-medium"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button 
            onClick={handleBoost}
            disabled={isBoosting || !url}
            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-black disabled:opacity-50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200"
          >
            {isBoosting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>កំពុងវិភាគ...</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.5-1 1-4c2 0 3 0 3 0"/><path d="M12 15v5s1-.5 4-1c0-2 0-3 0-3"/></svg>
                <span>BOOST NOW</span>
              </>
            )}
          </button>
        </div>

        {isBoosting && (
          <div className="mt-8 max-w-md mx-auto">
             <div className="flex justify-between mb-2">
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Post Analysis Progress</span>
                <span className="text-[10px] font-black text-indigo-600">{progress}%</span>
             </div>
             <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
             </div>
          </div>
        )}
      </div>

      {strategy && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in slide-in-from-top-10 duration-700">
           <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                 </div>
                 <h3 className="text-xl font-bold text-slate-800">Boosting Strategy (យុទ្ធសាស្ត្ររុញផុស)</h3>
              </div>
              <div className="prose prose-slate max-w-none">
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-700 whitespace-pre-wrap leading-relaxed">
                    {strategy}
                 </div>
              </div>
           </div>

           <div className="space-y-6">
              <div className="bg-indigo-600 p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.5-1 1-4c2 0 3 0 3 0"/><path d="M12 15v5s1-.5 4-1c0-2 0-3 0-3"/></svg>
                 </div>
                 <h4 className="text-lg font-black mb-2">Automated Distribution</h4>
                 <p className="text-indigo-100 text-xs leading-relaxed mb-6">
                   ចុចប៊ូតុងខាងក្រោមដើម្បីឱ្យ AI ចែករំលែកផុសនេះទៅកាន់បណ្ដាញ Groups និង Telegram Channels ដែលពាក់ព័ន្ធ។
                 </p>
                 <button className="w-full bg-white text-indigo-600 py-3 rounded-xl font-black text-xs hover:bg-indigo-50 transition-all shadow-lg">
                   START SMART SHARING
                 </button>
              </div>

              <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-100">
                 <h4 className="font-bold text-slate-800 mb-4">Ad Spend Optimization</h4>
                 <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                       <span className="text-slate-500 font-medium">Potential ROI</span>
                       <span className="text-emerald-600 font-black">+340%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                       <span className="text-slate-500 font-medium">Rec. Daily Spend</span>
                       <span className="text-slate-800 font-black">$5 - $15</span>
                    </div>
                    <div className="pt-4 mt-2 border-t border-slate-50">
                       <button className="w-full bg-slate-50 text-slate-600 py-3 rounded-xl font-bold text-[10px] uppercase tracking-wider hover:bg-slate-100 transition-all">
                         Launch Micro-Ad Campaign
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};
