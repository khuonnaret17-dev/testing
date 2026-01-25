
import React from 'react';
import { TabType } from '../types';

interface SidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems: { id: TabType; label: string; icon: React.ReactNode; labelKh: string }[] = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      labelKh: 'ទំព័រដើម',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg> 
    },
    { 
      id: 'booster', 
      label: 'Link Booster', 
      labelKh: 'រុញការមើលឃើញ',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> 
    },
    { 
      id: 'create', 
      label: 'Create Content', 
      labelKh: 'បង្កើតមាតិកា',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> 
    },
    { 
      id: 'schedule', 
      label: 'Scheduler', 
      labelKh: 'តារាងពេលវេលា',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 
    },
    { 
      id: 'analytics', 
      label: 'Analytics', 
      labelKh: 'ការវិភាគ',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> 
    },
    { 
      id: 'automation', 
      label: 'Automation', 
      labelKh: 'ស្វ័យប្រវត្តិកម្ម',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4 4 4"/><path d="M3 3.41 12 12l9-8.59"/><polyline points="8 22 12 18 16 22"/><path d="M12 18V9"/></svg> 
    },
    { 
      id: 'ads', 
      label: 'Ads Manager', 
      labelKh: 'ការផ្សាយពាណិជ្ជកម្ម',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> 
    },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-full shadow-lg z-10 transition-all duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        </div>
        <span className="text-xl font-bold text-slate-800 tracking-tight">SocialMate <span className="text-indigo-600">AI</span></span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
              activeTab === item.id 
                ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-sm' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
            }`}
          >
            <span className={`${activeTab === item.id ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`}>
              {item.icon}
            </span>
            <div className="flex flex-col items-start leading-tight">
               <span className="text-sm">{item.label}</span>
               <span className="text-[10px] opacity-70 font-normal">{item.labelKh}</span>
            </div>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100 bg-slate-50/50">
        <div className="bg-indigo-600 text-white rounded-2xl p-4 shadow-xl shadow-indigo-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-20 transform translate-x-2 -translate-y-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <p className="text-xs font-medium uppercase tracking-wider mb-1 opacity-80">AI Credits</p>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xl font-bold">450 / 500</span>
          </div>
          <div className="w-full bg-indigo-400/30 h-1.5 rounded-full mb-3">
            <div className="bg-white h-full rounded-full" style={{ width: '90%' }}></div>
          </div>
          <button className="w-full bg-white text-indigo-600 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-50 transition-colors shadow-sm">
            UPGRADE PLAN
          </button>
        </div>
      </div>
    </aside>
  );
};
