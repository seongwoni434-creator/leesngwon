import React from 'react';

export const DesignerInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 max-w-4xl mx-auto border border-gray-100">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
          <img 
            src="https://picsum.photos/400/400?grayscale" 
            alt="Designer Portrait" 
            className="w-full h-full object-cover rounded-full border-4 border-blue-50 shadow-md"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Alex Kim</h2>
          <p className="text-blue-600 font-medium mb-4">Senior Interior & Spatial Designer</p>
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              With over 10 years of experience in spatial design, I specialize in creating immersive environments that tell a story. 
              My work bridges the gap between functionality and artistic expression, focusing on human-centric design principles.
            </p>
            <p>
              From large-scale exhibitions to intimate residential spaces, my approach remains the same: 
              listen to the client, understand the space, and deliver a unique solution that exceeds expectations.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-800">10+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Years Exp</div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-800">50+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Projects</div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-800">12</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Awards</div>
            </div>
             <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-800">100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 border-t pt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Contact & Social</h3>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors">
            <span>Email Me</span>
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <span>LinkedIn</span>
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors">
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};
