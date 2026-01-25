
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from 'recharts';

const data = [
  { name: 'FB', followers: 12400, postCount: 45, clicks: 1200 },
  { name: 'IG', followers: 28900, postCount: 82, clicks: 4500 },
  { name: 'TikTok', followers: 85200, postCount: 120, clicks: 12800 },
  { name: 'TG', followers: 5600, postCount: 210, clicks: 890 },
];

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Follower Growth by Platform</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                <Bar dataKey="followers" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Click-Through Rate (CTR) Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                <Line type="monotone" dataKey="clicks" stroke="#10b981" strokeWidth={3} dot={{fill: '#10b981', r: 4}} activeDot={{r: 8}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
           <div>
              <h3 className="text-lg font-bold text-slate-800">Content Performance Leaderboard</h3>
              <p className="text-xs text-slate-500">Top performing posts across all platforms</p>
           </div>
           <button className="bg-slate-50 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold border border-slate-200 hover:bg-slate-100 transition-all flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
             Export Full Report
           </button>
        </div>
        
        <div className="space-y-4">
           {[
             { title: 'The secret to brewing the perfect espresso...', reach: '1.2M', engagement: '12%', color: 'bg-emerald-500' },
             { title: 'Behind the scenes at our new warehouse.', reach: '890K', engagement: '9.5%', color: 'bg-indigo-500' },
             { title: 'Flash sale starts in 3 hours! ⚡', reach: '450K', engagement: '18.2%', color: 'bg-amber-500' },
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all">
                <div className={`w-2 h-12 rounded-full ${item.color}`}></div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{item.title}</h4>
                  <div className="flex gap-4 mt-1">
                    <span className="text-[10px] font-bold text-slate-400">REACH: {item.reach}</span>
                    <span className="text-[10px] font-bold text-indigo-500">ENGAGEMENT: {item.engagement}</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
