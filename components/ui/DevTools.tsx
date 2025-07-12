'use client'

import React from 'react';
import { useContentCache, useProgress } from '@/hooks';

const DevTools: React.FC = () => {
  const { clearCache } = useContentCache();
  const { clearProgress } = useProgress();

  const handleClearCache = () => {
    clearCache();
    alert('Content cache cleared!');
  };

  const handleClearProgress = () => {
    clearProgress();
    alert('Progress cleared!');
  };

  const handleClearAll = () => {
    clearCache();
    clearProgress();
    alert('All data cleared!');
  };

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg opacity-75 hover:opacity-100 transition-opacity">
      <h3 className="text-sm font-bold mb-2">Dev Tools</h3>
      <div className="flex flex-col gap-2">
        <button 
          onClick={handleClearCache}
          className="text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
        >
          Clear Cache
        </button>
        <button 
          onClick={handleClearProgress}
          className="text-xs bg-yellow-600 hover:bg-yellow-700 px-2 py-1 rounded"
        >
          Clear Progress
        </button>
        <button 
          onClick={handleClearAll}
          className="text-xs bg-purple-600 hover:bg-purple-700 px-2 py-1 rounded"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default DevTools;
