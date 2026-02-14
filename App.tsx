import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InputPanel from './components/InputPanel';
import OutputPanel from './components/OutputPanel';
import ControlPanel from './components/ControlPanel';
import { RewriteMode } from './types';
import { streamRewriteText } from './services/geminiService';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [mode, setMode] = useState<RewriteMode>(RewriteMode.STANDARD);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);

  const handleRewrite = useCallback(async () => {
    if (!inputText.trim() || isStreaming) return;

    setIsStreaming(true);
    setOutputText(''); // Clear previous output

    try {
      await streamRewriteText(inputText, mode, (chunk) => {
        setOutputText((prev) => prev + chunk);
      });
    } catch (error) {
      console.error("Failed to rewrite:", error);
      setOutputText(prev => prev + "\n\n[Error: Failed to process text. Please try again later.]");
    } finally {
      setIsStreaming(false);
    }
  }, [inputText, mode, isStreaming]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-900 bg-brand-50/50">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
        
        {/* Workspace - Flex Column on mobile, Row on desktop */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-[500px]">
            
            {/* Left Column - Input */}
            <div className="flex-1 min-h-[300px]">
                <InputPanel 
                    value={inputText} 
                    onChange={setInputText} 
                    disabled={isStreaming}
                />
            </div>

            {/* Desktop: Middle divider controls hidden, shown in separate bar below or between */}
            {/* Mobile: Controls appear between panels */}
            
            {/* Right Column - Output */}
            <div className="flex-1 min-h-[300px]">
                <OutputPanel 
                    value={outputText} 
                    isStreaming={isStreaming} 
                />
            </div>
        </div>

        {/* Control Bar - Sticky bottom or just placed below on large screens */}
        <div className="sticky bottom-4 z-20">
             <ControlPanel 
                mode={mode} 
                setMode={setMode} 
                onRewrite={handleRewrite} 
                isStreaming={isStreaming}
                disabled={!inputText.trim()}
            />
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default App;