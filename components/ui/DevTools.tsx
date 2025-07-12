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
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      backgroundColor: 'var(--bg-secondary)',
      color: 'var(--text-primary)',
      padding: '1rem',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      opacity: '0.75',
      transition: 'opacity 0.3s ease'
    }} 
    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.75'}>
      <h3 style={{
        fontSize: '0.875rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        color: 'var(--text-primary)'
      }}>Dev Tools</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <button 
          onClick={handleClearCache}
          style={{
            fontSize: '0.75rem',
            backgroundColor: 'var(--bg-accent)',
            color: 'white',
            padding: '0.25rem 0.5rem',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-accent-hover)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-accent)'}
        >
          Clear Cache
        </button>
        <button 
          onClick={handleClearProgress}
          style={{
            fontSize: '0.75rem',
            backgroundColor: '#d97706',
            color: 'white',
            padding: '0.25rem 0.5rem',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f59e0b'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d97706'}
        >
          Clear Progress
        </button>
        <button 
          onClick={handleClearAll}
          style={{
            fontSize: '0.75rem',
            backgroundColor: '#7c3aed',
            color: 'white',
            padding: '0.25rem 0.5rem',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8b5cf6'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default DevTools;
