import React, { useState } from 'react';
import { Save, Upload, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DocumentEditorProps {
  type: 'writing' | 'document' | 'material' | 'meeting';
  category?: string;
  initialData?: any;
  onSave?: (data: any) => void;
}

export default function DocumentEditor({ type, category, initialData, onSave }: DocumentEditorProps) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [participants, setParticipants] = useState(initialData?.participants || '');
  const [date, setDate] = useState(initialData?.date || new Date().toISOString().split('T')[0]);

  const getEditorTitle = () => {
    switch (type) {
      case 'writing': return '写作助手';
      case 'document': return '稿件编辑';
      case 'material': return '材料编辑';
      case 'meeting': return '会议记录';
      default: return '编辑器';
    }
  };

  const handleSave = () => {
    const data = {
      title,
      content,
      date,
      category,
      participants: type === 'meeting' ? participants : undefined,
      status: 'draft',
      lastModified: new Date().toISOString(),
    };
    onSave?.(data);
    navigate(-1);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* 顶部工具栏 */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <h2 className="text-xl font-semibold text-gray-800">{getEditorTitle()}</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Save className="h-4 w-4" />
              <span>保存</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Upload className="h-4 w-4" />
              <span>同步到知识库</span>
            </button>
          </div>
        </div>
      </div>

      {/* 编辑区域 */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-6">
              {/* 标题输入 */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  标题
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入标题..."
                />
              </div>

              {/* 日期选择 */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  日期
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* 会议参与人员 */}
              {type === 'meeting' && (
                <div>
                  <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-1">
                    参与人员
                  </label>
                  <input
                    type="text"
                    id="participants"
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="请输入参与人员..."
                  />
                </div>
              )}

              {/* 内容编辑器 */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  内容
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={15}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入内容..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}