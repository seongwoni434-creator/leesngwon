import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isAdmin: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isAdmin }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative border border-gray-100">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-1">{project.category}</p>
        <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
      </div>

      {isAdmin && (
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className="bg-white/90 p-1.5 rounded-full text-blue-600 hover:text-blue-700 shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button className="bg-white/90 p-1.5 rounded-full text-red-500 hover:text-red-600 shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
