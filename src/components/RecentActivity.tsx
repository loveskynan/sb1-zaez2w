import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Module {
  id: number;
  name: string;
  icon: LucideIcon;
  color: string;
}

interface RecentActivityProps {
  modules: Module[];
}

const activities = [
  { title: '创建了新的工作报告', time: '2分钟前', moduleIndex: 0 },
  { title: '更新了会议记录', time: '5分钟前', moduleIndex: 4 },
  { title: '添加了新的知识库文档', time: '10分钟前', moduleIndex: 1 },
];

export default function RecentActivity({ modules }: RecentActivityProps) {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => {
        const module = modules[activity.moduleIndex];
        const Icon = module.icon;
        
        return (
          <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Icon className={`h-5 w-5 ${module.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700">查看</button>
          </div>
        );
      })}
    </div>
  );
}