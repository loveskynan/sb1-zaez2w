import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <h1 className="ml-4 text-xl font-semibold text-gray-800">企业智能助手</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Bell className="h-6 w-6 text-gray-600" />
          </button>
          <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
            <User className="h-6 w-6 text-gray-600" />
            <span className="text-sm text-gray-700">管理员</span>
          </button>
        </div>
      </div>
    </header>
  );
}