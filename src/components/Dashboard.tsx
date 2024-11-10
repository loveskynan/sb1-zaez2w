import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import RecentActivity from './RecentActivity';

interface Module {
  id: number;
  name: string;
  icon: LucideIcon;
  color: string;
  path: string;
}

interface DashboardProps {
  modules: Module[];
}

export default function Dashboard({ modules }: DashboardProps) {
  const navigate = useNavigate();

  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">欢迎使用企业智能助手</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className={`inline-block p-3 rounded-lg ${module.color.replace('text', 'bg')}/10`}>
                    <Icon className={`h-6 w-6 ${module.color}`} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">
                    {module.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    点击进入{module.name}模块，开始智能辅助工作
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <button 
                    onClick={() => navigate(module.path)}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    立即使用 →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">最近活动</h3>
          <RecentActivity modules={modules} />
        </div>
      </div>
    </main>
  );
}