import React, { useState } from 'react';
import { Plus, Search, Filter, FolderOpen, Users, User } from 'lucide-react';

const categories = [
  { id: 1, name: '公共知识库', icon: Users },
  { id: 2, name: '个人知识库', icon: User },
  { id: 3, name: '部门知识库', icon: FolderOpen },
];

export default function KnowledgeBase() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [documents] = useState([
    { id: 1, title: '企业文化手册', category: '公共知识库', date: '2024-03-15', author: '管理员' },
    { id: 2, title: '工作流程指南', category: '部门知识库', date: '2024-03-14', author: '张经理' },
    { id: 3, title: '项目总结报告', category: '个人知识库', date: '2024-03-13', author: '李工程师' },
  ]);

  return (
    <div className="flex-1 overflow-hidden bg-gray-50">
      <div className="h-full flex">
        {/* 左侧分类导航 */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <div className="mb-6">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Plus className="h-5 w-5" />
              <span>新建文档</span>
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
          {/* 搜索和筛选栏 */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索文档..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="h-5 w-5" />
                <span>筛选</span>
              </button>
            </div>
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
                    </div>
                    <div className="flex gap-2">
                      <button className="text-sm text-blue-600 hover:text-blue-700">编辑</button>
                      <button className="text-sm text-gray-600 hover:text-gray-700">删除</button>
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