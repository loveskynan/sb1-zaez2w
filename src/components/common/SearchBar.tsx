import React from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter?: () => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, onFilter, placeholder = '搜索...' }: SearchBarProps) {
  return (
    <div className="flex gap-4 p-4 bg-white border-b border-gray-200">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {onFilter && (
        <button 
          onClick={onFilter}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>筛选</span>
        </button>
      )}
    </div>
  );
}