import React from 'react';
import { ArrowLeft, Edit, Trash, Download, Share } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DetailViewProps {
  title: string;
  type: string;
  data: any;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function DetailView({ title, type, data, onEdit, onDelete }: DetailViewProps) {
  const navigate = useNavigate();

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
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          </div>
          <div className="flex items-center gap-2">
            {onEdit && (
              <button
                onClick={onEdit}
                className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                <Edit className="h-4 w-4" />
                <span>编辑</span>
              </button>
            )}
            {onDelete && (
              <button
                onClick={onDelete}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <Trash className="h-4 w-4" />
                <span>删除</span>
              </button>
            )}
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg">
              <Download className="h-4 w-4" />
              <span>导出</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg">
              <Share className="h-4 w-4" />
              <span>分享</span>
            </button>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{data.title}</h1>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                  <span>{type}</span>
                  <span>•</span>
                  <span>{data.date}</span>
                  {data.author && (
                    <>
                      <span>•</span>
                      <span>{data.author}</span>
                    </>
                  )}
                  {data.status && (
                    <>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        data.status === '已完成' || data.status === '已发布'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {data.status}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {data.participants && (
                <div>
                  <h3 className="text-sm font-medium text-gray-700">参与人员</h3>
                  <p className="mt-1 text-gray-600">{data.participants}</p>
                </div>
              )}

              <div>
                <h3 className="text-sm font-medium text-gray-700">内容</h3>
                <div className="mt-2 prose max-w-none">
                  {data.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}