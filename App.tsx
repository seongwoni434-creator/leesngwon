import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProjectCard } from './components/ProjectCard';
import { DesignerInfo } from './components/DesignerInfo';
import { PROJECTS } from './constants';
import { Category } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALL);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === Category.ALL) {
      return PROJECTS;
    }
    return PROJECTS.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex bg-slate-50">
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-20 flex items-center justify-between px-4">
        <span className="text-lg font-bold text-blue-600">Portfolio</span>
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 w-full lg:ml-0 p-4 pt-20 lg:p-10 transition-all duration-300">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {activeCategory === Category.INFO ? 'About Me' : activeCategory}
          </h1>
          {isAdmin && activeCategory !== Category.INFO && (
             <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-md transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add Project
             </button>
          )}
        </header>

        {activeCategory === Category.INFO ? (
          <DesignerInfo />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isAdmin={isAdmin}
              />
            ))}
            
            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-400">
                <p>No projects found in this category.</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Admin Toggle Button */}
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className={`
          fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl transition-all duration-300 z-40
          ${isAdmin ? 'bg-gray-900 rotate-180' : 'bg-blue-600 hover:bg-blue-700 hover:rotate-12'}
          text-white
        `}
        title={isAdmin ? "Exit Admin Mode" : "Enter Admin Mode"}
      >
        {isAdmin ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          '🔑'
        )}
      </button>

      {/* Admin Status Indicator (Small Toast) */}
      {isAdmin && (
        <div className="fixed bottom-24 right-6 bg-black/80 text-white text-xs px-3 py-1 rounded-md backdrop-blur-sm z-40 animate-bounce">
          Admin Mode Active
        </div>
      )}

    </div>
  );
}

export default App;
