import React, { useState } from 'react';
import { PenLine, Book, FileText, BarChart, Upload } from 'lucide-react';

const categories = [
  { id: 1, name: '心得体会', icon: PenLine },
  { id: 2, name: '会议发言', icon: FileText },
  { id: 3, name: '工作汇报', icon: BarChart },
  { id: 4, name: '工作总结', icon: Book },
];

interface Document {
  id: number;
  title: string;
  category: string;
  date: string;
  status: 'draft' | 'completed';
  content?: string;
}

export default function WritingAssistant() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [documents] = useState<Document[]>([
    { id: 1, title: '季度工作总结', category: '工作总结', date: '2024-03-15', status: 'completed' },
    { id: 2, title: '部门会议发言稿', category: '会议发言', date: '2024-03-14', status: 'draft' },
    { id: 3, title: '项目心得分享', category: '心得体会', date: '2024-03-13', status: 'completed' },
  ]);

  return (
    <div className="flex-1 overflow-hidden bg-gray-50">
      <div className="h-full flex">
        {/* 左侧分类导航 */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <div className="mb-6">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <PenLine className="h-5 w-5" />
              <span>开始写作</span>
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

          {/* 文档列表 */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid gap-4">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{doc.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {doc.category} · {doc.date} · 
                        <span className={`${
                          doc.status === 'completed' ? 'text-green-600' : 'text-orange-600'
                        }`}>
                          {doc.status === 'completed' ? '已完成' : '草稿'}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-sm text-blue-600 hover:text-blue-700">编辑</button>
                      <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700">
                        <Upload className="h-4 w-4" />
                        同步到知识库
                      </button>
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