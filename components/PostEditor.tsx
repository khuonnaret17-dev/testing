
import React, { useState, useEffect } from 'react';
import { generateCaption, generateImagePrompt, generateViralHooks, analyzeVisibility } from '../services/geminiService';
import { Platform } from '../types';

export const PostEditor: React.FC = () => {
  const [content, setContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([Platform.FACEBOOK]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingImg, setIsGeneratingImg] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [topic, setTopic] = useState('');
  const [hooks, setHooks] = useState<string | null>(null);
  const [visibilityFeedback, setVisibilityFeedback] = useState<string | null>(null);
  const [visibilityScore, setVisibilityScore] = useState(0);

  const handleGenerateCaption = async () => {
    if (!topic) return;
    setIsGenerating(true);
    const result = await generateCaption(topic, selectedPlatforms.join(', '), 'km');
    if (result) setContent(result);
    setIsGenerating(true);
    const viralHooks = await generateViralHooks(topic);
    setHooks(viralHooks);
    setIsGenerating(false);
  };

  const handleVisibilityCheck = async () => {
    if (!content) return;
    setIsAnalyzing(true);
    const feedback = await analyzeVisibility(content);
    setVisibilityFeedback(feedback);
    setVisibilityScore(Math.floor(Math.random() * (95 - 70 + 1)) + 70); // Simulated score logic for UI
    setIsAnalyzing(false);
  };

  const handleGenerateImage = async () => {
    if (!topic) return;
    setIsGeneratingImg(true);
    const url = await generateImagePrompt(topic);
    if (url) setMediaUrl(url);
    setIsGeneratingImg(false);
  };

  const togglePlatform = (p: Platform) => {
    setSelectedPlatforms(prev => 
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6">
        {/* Main Editor Section */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <h3 className="text-lg font-bold text-slate-800">Viral Optimization Hub</h3>
          </div>
          
          <div className="flex gap-2 mb-6">
            <input 
              type="text" 
              placeholder="តើអ្នកចង់ផុសអំពីអ្វី? (Topic)..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <button 
              onClick={handleGenerateCaption}
              disabled={isGenerating || !topic}
              className="bg-indigo-600 text-white px-6 rounded-2xl hover:bg-indigo-700 disabled:opacity-50 font-bold transition-all shadow-lg shadow-indigo-100"
            >
              {isGenerating ? "..." : "Generate Viral Post"}
            </button>
          </div>

          {hooks && (
            <div className="mb-6 p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <p className="text-xs font-bold text-amber-700 uppercase mb-2">Recommended Viral Hooks (ឃ្លាទាក់ទាញ):</p>
              <div className="text-xs text-amber-800 whitespace-pre-wrap italic">{hooks}</div>
            </div>
          )}

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Caption Content</label>
              <button onClick={handleVisibilityCheck} className="text-xs font-bold text-indigo-600 hover:underline">Check Visibility Score</button>
            </div>
            <textarea 
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none h-48 resize-none transition-all leading-relaxed"
              placeholder="សរសេរអត្ថបទរបស់អ្នកនៅទីនេះ..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Target Audience Reach</p>
              <p className="text-sm font-bold text-slate-800">Estimated: 15k - 45k impressions</p>
            </div>
            <button 
               onClick={handleGenerateImage}
               className="p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-400 transition-all shadow-sm"
               title="AI Viral Image"
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </button>
          </div>
        </div>

        {visibilityFeedback && (
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 animate-in slide-in-from-top-4">
             <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-800">AI Visibility Analysis</h4>
                <div className="flex items-center gap-2">
                   <span className="text-2xl font-black text-indigo-600">{visibilityScore}</span>
                   <span className="text-xs font-bold text-slate-400">/100</span>
                </div>
             </div>
             <div className="w-full bg-slate-100 h-2 rounded-full mb-4 overflow-hidden">
                <div className="bg-indigo-600 h-full rounded-full transition-all duration-1000" style={{ width: `${visibilityScore}%` }}></div>
             </div>
             <div className="text-xs text-slate-600 leading-relaxed bg-indigo-50/50 p-4 rounded-xl border border-indigo-50">
                {visibilityFeedback}
             </div>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 sticky top-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">Live Preview</h3>
            <div className="flex gap-1">
               {selectedPlatforms.map(p => (
                 <span key={p} className="w-2 h-2 rounded-full bg-indigo-500"></span>
               ))}
            </div>
          </div>
          
          {/* Social Media Card Mockup */}
          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 max-w-sm mx-auto transition-all hover:scale-[1.02]">
            <div className="p-4 border-b border-slate-50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-md"></div>
              <div>
                <div className="w-24 h-3 bg-slate-100 rounded-full mb-1"></div>
                <div className="w-16 h-2 bg-slate-50 rounded-full"></div>
              </div>
            </div>
            
            {mediaUrl ? (
              <img src={mediaUrl} className="w-full aspect-[4/5] object-cover" alt="Viral content" />
            ) : (
              <div className="w-full aspect-[4/5] bg-slate-50 flex items-center justify-center border-y border-slate-100">
                 <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="1"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              </div>
            )}

            <div className="p-5">
              <div className="flex gap-4 mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-800"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-800"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-800"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </div>
              <p className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
                {content || "មាតិកាកំពុងរង់ចាំការបង្កើត..."}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
             <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7-3 5 3 5"/><path d="m19 7 3 5-3 5"/></svg>
                </div>
                <div>
                   <p className="text-xs font-bold text-emerald-700">Multi-Channel Distribution</p>
                   <p className="text-[10px] text-emerald-600">Post will be automatically formatted for FB, IG, and Telegram.</p>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-3">
                <button className="bg-slate-50 text-slate-600 py-4 rounded-2xl font-bold border border-slate-200 hover:bg-slate-100 transition-all">
                  Save Draft
                </button>
                <button className="bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all transform active:scale-95">
                  Schedule Post
                </button>
             </div>
             
             <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all group">
               <span>Publish for Maximum Reach</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
