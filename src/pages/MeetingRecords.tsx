import React, { useState } from 'react';
import { Users, MessageSquare, FileText, CheckSquare, Calendar } from 'lucide-react';

const categories = [
  { id: 1, name: '会议发言', icon: MessageSquare },
  { id: 2, name: '会议记录', icon: FileText },
  { id: 3, name: '会议总结', icon: CheckSquare },
  { id: 4, name: '历史记录', icon: Calendar },
];

interface Meeting {
  id: number;
  title: string;
  category: string;
  date: string;
  participants: string;
  status: '进行中' | '已结束' | '待开始';
}

export default function MeetingRecords() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [meetings] = useState<Meeting[]>([
    { id: 1, title: '周例会', category: '会议记录', date: '2024-03-15', participants: '全体员工', status: '已结束' },
    { id: 2, title: '项目评审会', category: '会议发言', date: '2024-03-14', participants: '技术部', status: '进行中' },
    { id: 3, title: '管理层会议', category: '会议总结', date: '2024-03-13', participants: '管理层', status: '待开始' },
  ]);

  return (
    <div className="flex-1 overflow-hidden bg-gray-50">
      <div className="h-full flex">
        {/* 左侧分类导航 */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <div className="mb-6">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Users className="h-5 w-5" />
              <span>新建会议</span>
            </button>
          </div>
          <nav>
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1 ${
                    selectedCategory.id === category.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* 右侧内容区 */}
        <div className="flex-1 flex flex-col">
          {/* 标题栏 */}
          <div className="bg-white border-b border-gray-200 p-4">
            <h2 className="text-xl font-semibold text-gray-800">{selectedCategory.name}</h2>
          </div>

          {/* 会议列表 */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid gap-4">
              {meetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{meeting.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {meeting.category} · {meeting.participants} · {meeting.date}
                      </p>
                      <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                        meeting.status === '已结束' ? 'bg-gray-100 text-gray-800' :
                        meeting.status === '进行中' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {meeting.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-sm text-blue-600 hover:text-blue-700">查看</button>
                      <button className="text-sm text-gray-600 hover:text-gray-700">编辑</button>
                      <button className="text-sm text-gray-600 hover:text-gray-700">导出</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}