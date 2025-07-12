import { useState, useCallback, useEffect } from 'react';
import { GeneratedModuleContent } from '@/types';

interface ContentCache {
  [moduleId: string]: GeneratedModuleContent;
}

const CACHE_KEY = 'sydekaContentCache';

export const useContentCache = () => {
  const [cache, setCache] = useState<ContentCache>({});

  // Load cache from localStorage on initial render
  useEffect(() => {
    try {
      const savedCache = localStorage.getItem(CACHE_KEY);
      if (savedCache) {
        setCache(JSON.parse(savedCache));
      }
    } catch (error) {
      console.error("Failed to load content cache from localStorage", error);
    }
  }, []);

  const updateCacheInStorage = (newCache: ContentCache) => {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(newCache));
    } catch (error) {
      console.error("Failed to save content cache to localStorage", error);
    }
  };

  const getCachedContent = useCallback((moduleId: string): GeneratedModuleContent | null => {
    return cache[moduleId] || null;
  }, [cache]);

  const setCachedContent = useCallback((moduleId: string, content: GeneratedModuleContent) => {
    setCache(prevCache => {
      const newCache = { ...prevCache, [moduleId]: content };
      updateCacheInStorage(newCache);
      return newCache;
    });
  }, []);

  const clearCache = useCallback(() => {
    try {
      localStorage.removeItem(CACHE_KEY);
      setCache({});
    } catch (error) {
      console.error("Failed to clear content cache", error);
    }
  }, []);

  return { getCachedContent, setCachedContent, clearCache };
};
