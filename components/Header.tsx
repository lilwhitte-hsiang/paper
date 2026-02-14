import React from 'react';
import { Icons } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-brand-100 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-brand-600 p-2 rounded-lg text-white">
            <Icons.Feather className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-bold text-brand-900 tracking-tight">
            PaperHumanizer
          </h1>
        </div>

        <div className="flex items-center space-x-4">
           {/* Visual indicator of API Status - No user interaction required per system instructions */}
           <div className="hidden md:flex items-center space-x-1 text-xs text-brand-500 bg-brand-50 px-2 py-1 rounded-full border border-brand-100">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="font-medium">Gemini Connected</span>
           </div>
           
           <a 
             href="#" 
             className="text-brand-400 hover:text-brand-700 transition-colors"
             aria-label="GitHub Repository"
           >
             <Icons.Github className="w-6 h-6" />
           </a>
        </div>
      </div>
    </header>
  );
};

export default Header;