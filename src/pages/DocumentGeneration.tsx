import React, { useState } from 'react';
import { FileText, Mic, PenLine, CheckSquare } from 'lucide-react';

const categories = [
  { id: 1, name: '领导讲话', icon: Mic },
  { id: 2, name: '稿件撰写', icon: PenLine },
  { id: 3, name: '演讲稿', icon: FileText },
  { id: 4, name: '校对', icon: CheckSquare },
];

interface Document {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  status: '待审核' | '已审核' | '已发布';
}

export default function DocumentGeneration() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [documents] = useState<Document[]>([
    { id: 1, title: '年度工作会议讲话稿', category: '领导讲话', date: '2024-03-15', author: '张总', status: '已发布' },
    { id: 2, title: '项目启动仪式发言稿', category: '演讲稿', date: '2024-03-14', author: '李经理', status: '待审核' },
    { id: 3, title: '企业文化宣传稿', category: '稿件撰写', date: '2024-03-13', author: '王编辑', status: '已审核' },
  ]);

  return (
    <div className="flex-1 overflow-hidden bg-gray-50">
      <div className="h-full flex">
        {/* 左侧分类导航 */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <div className="mb-6">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <FileText className="h-5 w-5" />
              <span>新建稿件</span>
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
                        {doc.category} · {doc.author} · {doc.date}
                      </p>
                      <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                        doc.status === '已发布' ? 'bg-green-100 text-green-800' :
                        doc.status === '已审核' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-sm text-blue-600 hover:text-blue-700">编辑</button>
                      <button className="text-sm text-gray-600 hover:text-gray-700">审核</button>
                      <button className="text-sm text-gray-600 hover:text-gray-700">发布</button>
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