import React, { useMemo } from 'react';
import { Icons } from '../constants';
import Button from './Button';

interface InputPanelProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const InputPanel: React.FC<InputPanelProps> = ({ value, onChange, disabled }) => {
  
  const stats = useMemo(() => {
    const trimmed = value.trim();
    if (!trimmed) return { chars: 0, words: 0 };
    return {
        chars: trimmed.length,
        words: trimmed.split(/\s+/).length
    };
  }, [value]);

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-brand-100 overflow-hidden">
      <div className="px-4 py-3 bg-brand-50 border-b border-brand-100 flex justify-between items-center">
        <h2 className="font-semibold text-brand-800 flex items-center">
            <span className="w-2 h-2 rounded-full bg-brand-400 mr-2"></span>
            Source Text
        </h2>
        <div className="flex items-center space-x-2">
            <span className="text-xs text-brand-500 font-mono">
                {stats.words} words / {stats.chars} chars
            </span>
            {value && (
                <Button 
                    variant="ghost" 
                    onClick={() => onChange('')} 
                    title="Clear text"
                    disabled={disabled}
                    className="!p-1 h-7 w-7"
                >
                    <Icons.Eraser className="w-4 h-4" />
                </Button>
            )}
        </div>
      </div>
      <div className="flex-1 relative">
        <textarea
          className="w-full h-full p-4 resize-none focus:outline-none focus:bg-brand-50/30 text-brand-900 leading-relaxed font-sans placeholder-brand-300 text-base"
          placeholder="Paste your abstract or paragraph here..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          spellCheck={false}
        />
      </div>
    </div>
  );
};

export default InputPanel;