
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { PostEditor } from './components/PostEditor';
import { Analytics } from './components/Analytics';
import { Automation } from './components/Automation';
import { AdsManager } from './components/AdsManager';
import { LinkBooster } from './components/LinkBooster';
import { TabType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onNavigate={setActiveTab} />;
      case 'create':
      case 'schedule':
        return <PostEditor />;
      case 'analytics':
        return <Analytics />;
      case 'automation':
        return <Automation />;
      case 'ads':
        return <AdsManager />;
      case 'booster':
        return <LinkBooster />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 capitalize">
              {activeTab === 'dashboard' ? 'ទិដ្ឋភាពទូទៅ (Dashboard)' : 
               activeTab === 'create' ? 'បង្កើតមាតិកា (Create Post)' :
               activeTab === 'analytics' ? 'ការវិភាគទិន្នន័យ (Analytics)' : 
               activeTab === 'automation' ? 'ស្វ័យប្រវត្តិកម្ម (Automation)' : 
               activeTab === 'ads' ? 'គ្រប់គ្រងការផ្សាយពាណិជ្ជកម្ម (Ads)' : 
               activeTab === 'booster' ? 'រុញការមើលឃើញ (Link Booster)' : activeTab}
            </h1>
            <p className="text-slate-500 text-sm">Welcome back to your social ecosystem.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-full relative transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 border-l pl-4 border-slate-200">
              <img src="https://picsum.photos/seed/user/40/40" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100 shadow-sm" />
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-slate-800 leading-tight">Admin User</p>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Premium Plan</p>
              </div>
            </div>
          </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
