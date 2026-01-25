
import React, { useState } from 'react';

export const Automation: React.FC = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-800">Auto-Engagement Engine</h3>
            <p className="text-sm text-slate-500">Manage how AI interacts with your audience automatically.</p>
          </div>
          <button 
            onClick={() => setEnabled(!enabled)}
            className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${enabled ? 'bg-indigo-600' : 'bg-slate-200'}`}
          >
            <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${enabled ? 'translate-x-6' : ''}`}></div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Smart Auto-Reply', desc: 'AI answers common questions in Inbox based on your business info.', icon: '💬', kh: 'ការឆ្លើយតបសារស្វ័យប្រវត្តិ' },
            { title: 'Comment Moderation', desc: 'Automatically hides spam or offensive comments across platforms.', icon: '🛡️', kh: 'ការគ្រប់គ្រងមតិយោបល់' },
            { title: 'Welcome Messages', desc: 'Send a warm greeting to new followers or group members.', icon: '👋', kh: 'សារស្វាគមន៍អតិថិជន' },
            { title: 'Sentiment Analysis', desc: 'Notifies you if customers are unhappy based on comment tone.', icon: '📊', kh: 'ការវិភាគអារម្មណ៍អតិថិជន' },
            { title: 'Auto-Lead Capture', desc: 'Extract contact details from chats and save to CRM.', icon: '🎯', kh: 'ការប្រមូលទិន្នន័យអតិថិជន' },
            { title: 'Bulk Messaging', desc: 'Schedule announcements for Telegram channels and FB groups.', icon: '📢', kh: 'ការផ្ញើសារក្នុងពេលតែមួយ' },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/30 hover:shadow-md transition-all group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
              <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
              <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider mb-2">{item.kh}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] font-bold text-slate-400">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-2">Need a Custom Automation Workflow?</h3>
              <p className="text-indigo-100 text-sm opacity-80 leading-relaxed">
                Our AI can be trained on your specific business documents to handle complex customer support, appointments, and multi-step sales funnels.
              </p>
            </div>
            <button className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-2xl shadow-xl hover:scale-105 transition-transform whitespace-nowrap">
              Talk to AI Expert
            </button>
         </div>
      </div>
    </div>
  );
};
