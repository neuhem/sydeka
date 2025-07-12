import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

// This function determines the initial theme, acting as a single source of truth.
const getInitialTheme = (): Theme => {
  // Check for window to avoid SSR errors
  if (typeof window === 'undefined') {
    return 'light';
  }
  
  try {
    // 1. Check for a saved theme in localStorage
    const storedTheme = localStorage.getItem('sydeka-theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }
    
    // 2. If no saved theme, check the user's OS preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch (error) {
    console.error('Error reading theme preference:', error);
  }
  
  // 3. Default to light
  return 'light';
};

export const useTheme = () => {
  // Initialize state with light theme first to avoid hydration issues
  const [theme, setTheme] = useState<Theme>('light');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme after component mounts
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    setIsInitialized(true);
  }, []);

  // The toggle function simply sets the new state. No side effects here.
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  // This effect hook handles all side effects.
  // It runs whenever the `theme` state changes.
  useEffect(() => {
    if (!isInitialized) return;

    const root = window.document.documentElement;

    // Remove both data-theme attributes first
    root.removeAttribute('data-theme');
    
    // Set the current theme as data-theme attribute
    root.setAttribute('data-theme', theme);

    // Save the new theme to localStorage
    try {
      localStorage.setItem('sydeka-theme', theme);
    } catch (error) {
      console.error('Failed to save theme preference:', error);
    }
  }, [theme, isInitialized]); // The dependency array makes this effect run when `theme` changes.

  return { theme, toggleTheme, isInitialized };
};
