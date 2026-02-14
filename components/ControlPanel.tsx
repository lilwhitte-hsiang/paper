import React from 'react';
import { RewriteMode } from '../types';
import Button from './Button';
import { Icons } from '../constants';

interface ControlPanelProps {
  mode: RewriteMode;
  setMode: (mode: RewriteMode) => void;
  onRewrite: () => void;
  isStreaming: boolean;
  disabled?: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ 
  mode, 
  setMode, 
  onRewrite, 
  isStreaming,
  disabled 
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white rounded-xl shadow-sm border border-brand-100">
      <div className="flex items-center gap-2 w-full md:w-auto">
        <label htmlFor="mode-select" className="text-sm font-medium text-brand-600 whitespace-nowrap">
            Mode:
        </label>
        <div className="relative w-full md:w-64">
            <select
                id="mode-select"
                value={mode}
                onChange={(e) => setMode(e.target.value as RewriteMode)}
                disabled={isStreaming}
                className="w-full appearance-none bg-brand-50 border border-brand-200 text-brand-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block p-2.5 pr-8 disabled:opacity-50"
            >
                {Object.values(RewriteMode).map((m) => (
                    <option key={m} value={m}>{m}</option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-brand-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
      </div>

      <Button 
        onClick={onRewrite} 
        isLoading={isStreaming} 
        disabled={disabled}
        className="w-full md:w-auto min-w-[160px]"
      >
        {!isStreaming && <Icons.Sparkles className="w-4 h-4 mr-2" />}
        {isStreaming ? 'Humanizing...' : 'Start Humanizing'}
      </Button>
    </div>
  );
};

export default ControlPanel;