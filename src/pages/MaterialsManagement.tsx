import React, { useState } from 'react';
import { FileSpreadsheet, FileText, Presentation, Users, MessageSquare, PenLine } from 'lucide-react';

const categories = [
  { id: 1, name: '材料撰写', icon: PenLine },
  { id: 2, name: '汇报材料', icon: FileText },
  { id: 3, name: '宣传材料', icon: Presentation },
  { id: 4, name: '交流材料', icon: MessageSquare },
  { id: 5, name: '专家材料', icon: Users },
];

interface Material {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  type: string;
}

export default function MaterialsManagement() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [materials] = useState<Material[]>([
    { id: 1, title: '企业发展历程材料', category: '宣传材料', date: '2024-03-15', author: '张编辑', type: '文档' },
    { id: 2, title: '季度工作汇报材料', category: '汇报材料', date: '2024-03-14', author: '李经理', type: '演示文稿' },
    { id: 3, title: '技术创新交流材料', category: '交流材料', date: '2024-03-13', author: '王工程师', type: '文档' },
  ]);

  return (
    <div className="flex-1 overflow-hidden bg-gray-50">
      <div className="h-full flex">
        {/* 左侧分类导航 */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <div className="mb-6">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <FileSpreadsheet className="h-5 w-5" />
              <span>新建材料</span>
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

          {/* 材料列表 */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid gap-4">
              {materials.map((material) => (
                <div
                  key={material.id}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{material.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {material.category} · {material.author} · {material.date}
                      </p>
                      <span className="inline-block mt-2 px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                        {material.type}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-sm text-blue-600 hover:text-blue-700">编辑</button>
                      <button className="text-sm text-gray-600 hover:text-gray-700">导出</button>
                      <button className="text-sm text-gray-600 hover:text-gray-700">分享</button>
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