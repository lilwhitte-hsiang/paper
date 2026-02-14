import React, { useState } from 'react';
import { Icons } from '../constants';
import Button from './Button';

interface OutputPanelProps {
  value: string;
  isStreaming: boolean;
}

const OutputPanel: React.FC<OutputPanelProps> = ({ value, isStreaming }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-brand-100 overflow-hidden ring-1 ring-brand-900/5">
      <div className="px-4 py-3 bg-white border-b border-brand-100 flex justify-between items-center">
        <h2 className="font-semibold text-brand-800 flex items-center">
            <span className={`w-2 h-2 rounded-full mr-2 ${isStreaming ? 'bg-green-500 animate-pulse' : 'bg-brand-600'}`}></span>
            Rewritten Result
        </h2>
        <div className="flex space-x-1">
            <Button 
                variant="ghost" 
                onClick={handleCopy} 
                disabled={!value || isStreaming}
                className={copied ? "text-green-600 hover:text-green-700 hover:bg-green-50" : ""}
                title="Copy to clipboard"
            >
                {copied ? <Icons.Check className="w-4 h-4 mr-1" /> : <Icons.Copy className="w-4 h-4 mr-1" />}
                <span className="text-xs font-medium">{copied ? "Copied" : "Copy"}</span>
            </Button>
        </div>
      </div>
      <div className="flex-1 relative bg-brand-50/10">
        {!value && !isStreaming && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-300 pointer-events-none p-8 text-center">
                <Icons.Sparkles className="w-12 h-12 mb-3 opacity-50" />
                <p className="text-sm">Select a mode and click Humanize to start</p>
            </div>
        )}
        <div className="w-full h-full p-4 overflow-y-auto leading-relaxed text-brand-900 whitespace-pre-wrap font-sans text-base">
            {value}
            {isStreaming && <span className="inline-block w-1.5 h-4 ml-1 bg-brand-400 animate-pulse align-middle"></span>}
        </div>
      </div>
    </div>
  );
};

export default OutputPanel;