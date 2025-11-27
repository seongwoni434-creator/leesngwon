import React from 'react';
import { Category } from '../types';

interface SidebarProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory, isOpen, onClose }) => {
  const categories = Object.values(Category);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <aside 
        className={`
          fixed top-0 left-0 z-30 h-full w-64 bg-white border-r border-gray-200 
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:block
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-8">Portfolio</h2>
          <nav>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat);
                      onClose(); // Close sidebar on mobile after selection
                    }}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg transition-colors duration-200
                      ${activeCategory === cat 
                        ? 'bg-blue-50 text-blue-600 font-medium shadow-sm' 
                        : 'text-gray-600 hover:bg-slate-50 hover:text-blue-600'}
                    `}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-full p-8 text-xs text-gray-400">
          © 2024 Designer Portfolio
        </div>
      </aside>
    </>
  );
};
