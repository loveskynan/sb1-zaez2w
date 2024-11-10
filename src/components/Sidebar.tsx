import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, LucideIcon } from 'lucide-react';

interface Module {
  id: number;
  name: string;
  icon: LucideIcon;
  color: string;
  path: string;
}

interface SidebarProps {
  modules: Module[];
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ modules, isOpen, onToggle }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-white border-r border-gray-200 transition-all duration-300 ease-in-out`}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {isOpen && (
            <span className="text-lg font-semibold text-gray-800">功能导航</span>
          )}
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <ChevronLeft
              className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                !isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {modules.map((module) => {
            const Icon = module.icon;
            const isActive = location.pathname.startsWith(module.path);
            return (
              <button
                key={module.id}
                onClick={() => navigate(module.path)}
                className={`w-full flex items-center px-4 py-3 hover:bg-gray-50 ${
                  isActive ? 'bg-gray-50' : ''
                }`}
              >
                <Icon className={`h-6 w-6 ${module.color}`} />
                {isOpen && (
                  <span className={`ml-3 ${isActive ? 'font-medium' : ''} text-gray-700`}>
                    {module.name}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}