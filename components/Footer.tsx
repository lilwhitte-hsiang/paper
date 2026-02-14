import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-50 border-t border-brand-100 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-500">
        <p>&copy; {new Date().getFullYear()} PaperHumanizer. All rights reserved.</p>
        <p className="mt-2 md:mt-0 italic flex items-center">
            <span className="bg-brand-200 text-brand-800 text-xs px-2 py-0.5 rounded mr-2 font-bold">Disclaimer</span>
            Tool for assistance only. Always verify academic accuracy manually.
        </p>
      </div>
    </footer>
  );
};

export default Footer;