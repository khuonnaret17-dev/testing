
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TabType } from '../types';

const data = [
  { name: 'Mon', reach: 4000, engagement: 2400 },
  { name: 'Tue', reach: 3000, engagement: 1398 },
  { name: 'Wed', reach: 2000, engagement: 9800 },
  { name: 'Thu', reach: 2780, engagement: 3908 },
  { name: 'Fri', reach: 1890, engagement: 4800 },
  { name: 'Sat', reach: 2390, engagement: 3800 },
  { name: 'Sun', reach: 3490, engagement: 4300 },
];

interface DashboardProps {
  onNavigate: (tab: TabType) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Reach', value: '1.2M', change: '+12%', color: 'text-emerald-500', kh: 'ចំនួនអ្នកមើលសរុប' },
          { label: 'Engagements', value: '45.2K', change: '+5.4%', color: 'text-emerald-500', kh: 'ចំនួនអន្តរកម្ម' },
          { label: 'Followers', value: '89.1K', change: '-0.8%', color: 'text-rose-500', kh: 'ចំនួនអ្នកតាមដាន' },
          { label: 'Ads Spending', value: '$1,200', change: '+20%', color: 'text-slate-400', kh: 'ការចំណាយលើការផ្សាយ' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <p className="text-xs text-slate-400 mb-1">{stat.kh}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
              <span className={`text-xs font-bold px-2 py-1 rounded-full bg-slate-50 ${stat.color}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Visibility Growth</h3>
              <p className="text-xs text-slate-500">How many eyes are on your brand this week</p>
            </div>
            <select className="bg-slate-50 border border-slate-200 text-sm rounded-xl px-4 py-2 text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="reach" stroke="#4f46e5" fillOpacity={1} fill="url(#colorReach)" strokeWidth={4} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Platform Status */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Active Channels</h3>
          <div className="space-y-4">
            {[
              { name: 'Facebook', id: '@mybiz_page', status: 'Connected', icon: 'bg-blue-600' },
              { name: 'Instagram', id: '@mybiz_official', status: 'Connected', icon: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' },
              { name: 'TikTok', id: '@mybiz_viral', status: 'Active', icon: 'bg-black' },
              { name: 'Telegram', id: 't.me/mybiz_updates', status: 'Connected', icon: 'bg-sky-500' },
            ].map((platform, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${platform.icon} flex items-center justify-center text-white shadow-sm`}>
                    <span className="font-bold text-lg">{platform.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{platform.name}</p>
                    <p className="text-xs text-slate-400">{platform.id}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${platform.status === 'Connected' || platform.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                    {platform.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => onNavigate('create')}
            className="w-full mt-8 bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Post Viral Content
          </button>
        </div>
      </div>

      {/* Recent Activity with Viral Indicator */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
           <h3 className="text-lg font-bold text-slate-800">Recent Post Optimization</h3>
           <span className="text-xs font-bold text-indigo-600">AI Enabled</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-50">
                <th className="pb-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Content Preview</th>
                <th className="pb-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Viral Potential</th>
                <th className="pb-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Est. Reach</th>
                <th className="pb-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { content: 'New collection launching this Sunday! #fashion #summer', score: 85, reach: '45k', status: 'Scheduled' },
                { content: 'How to use SocialMate AI to boost your reach by 200%.', score: 94, reach: '120k', status: 'Optimized' },
                { content: 'We are hiring! Join our creative team in Phnom Penh.', score: 72, reach: '12k', status: 'Draft' },
              ].map((post, i) => (
                <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="py-5">
                    <p className="text-sm font-medium text-slate-700 line-clamp-1 max-w-md">{post.content}</p>
                  </td>
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                       <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${post.score > 90 ? 'bg-indigo-500' : post.score > 80 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${post.score}%` }}></div>
                       </div>
                       <span className="text-xs font-bold text-slate-600">{post.score}%</span>
                    </div>
                  </td>
                  <td className="py-5 text-sm font-bold text-slate-800">{post.reach}</td>
                  <td className="py-5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg ${
                      post.status === 'Optimized' ? 'bg-indigo-50 text-indigo-600' : 
                      post.status === 'Scheduled' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
