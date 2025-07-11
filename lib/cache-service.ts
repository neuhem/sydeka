import { AILesson, AIQuiz } from './ai-service';

export interface CacheItem<T> {
  data: T;
  timestamp: number;
  expires: number;
}

export class CacheService {
  private static readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  private static readonly LESSON_CACHE_KEY = 'sydeka_lesson_cache';
  private static readonly QUIZ_CACHE_KEY = 'sydeka_quiz_cache';

  private static generateCacheKey(params: any): string {
    return btoa(JSON.stringify(params)).replace(/[^a-zA-Z0-9]/g, '');
  }

  private static isExpired(item: CacheItem<any>): boolean {
    return Date.now() > item.expires;
  }

  private static getCache<T>(cacheKey: string): Map<string, CacheItem<T>> {
    try {
      const cached = localStorage.getItem(cacheKey);
      if (!cached) return new Map();
      
      const cacheData = JSON.parse(cached);
      const cacheMap = new Map<string, CacheItem<T>>();
      
      Object.entries(cacheData).forEach(([key, value]) => {
        cacheMap.set(key, value as CacheItem<T>);
      });
      
      return cacheMap;
    } catch (error) {
      console.error('Error loading cache:', error);
      return new Map();
    }
  }

  private static setCache<T>(cacheKey: string, cache: Map<string, CacheItem<T>>): void {
    try {
      const cacheObj = Object.fromEntries(cache);
      localStorage.setItem(cacheKey, JSON.stringify(cacheObj));
    } catch (error) {
      console.error('Error saving cache:', error);
    }
  }

  static cacheLesson(params: any, lesson: AILesson): void {
    const key = this.generateCacheKey(params);
    const cache = this.getCache<AILesson>(this.LESSON_CACHE_KEY);
    
    const cacheItem: CacheItem<AILesson> = {
      data: lesson,
      timestamp: Date.now(),
      expires: Date.now() + this.CACHE_DURATION
    };
    
    cache.set(key, cacheItem);
    this.setCache(this.LESSON_CACHE_KEY, cache);
  }

  static getCachedLesson(params: any): AILesson | null {
    const key = this.generateCacheKey(params);
    const cache = this.getCache<AILesson>(this.LESSON_CACHE_KEY);
    
    const item = cache.get(key);
    if (!item || this.isExpired(item)) {
      if (item) {
        cache.delete(key);
        this.setCache(this.LESSON_CACHE_KEY, cache);
      }
      return null;
    }
    
    return item.data;
  }

  static cacheQuiz(params: any, quiz: AIQuiz): void {
    const key = this.generateCacheKey(params);
    const cache = this.getCache<AIQuiz>(this.QUIZ_CACHE_KEY);
    
    const cacheItem: CacheItem<AIQuiz> = {
      data: quiz,
      timestamp: Date.now(),
      expires: Date.now() + this.CACHE_DURATION
    };
    
    cache.set(key, cacheItem);
    this.setCache(this.QUIZ_CACHE_KEY, cache);
  }

  static getCachedQuiz(params: any): AIQuiz | null {
    const key = this.generateCacheKey(params);
    const cache = this.getCache<AIQuiz>(this.QUIZ_CACHE_KEY);
    
    const item = cache.get(key);
    if (!item || this.isExpired(item)) {
      if (item) {
        cache.delete(key);
        this.setCache(this.QUIZ_CACHE_KEY, cache);
      }
      return null;
    }
    
    return item.data;
  }

  static clearCache(): void {
    localStorage.removeItem(this.LESSON_CACHE_KEY);
    localStorage.removeItem(this.QUIZ_CACHE_KEY);
  }

  static getCacheStats(): { lessonCount: number; quizCount: number; totalSize: number } {
    const lessonCache = this.getCache<AILesson>(this.LESSON_CACHE_KEY);
    const quizCache = this.getCache<AIQuiz>(this.QUIZ_CACHE_KEY);
    
    const lessonCacheSize = localStorage.getItem(this.LESSON_CACHE_KEY)?.length || 0;
    const quizCacheSize = localStorage.getItem(this.QUIZ_CACHE_KEY)?.length || 0;
    
    return {
      lessonCount: lessonCache.size,
      quizCount: quizCache.size,
      totalSize: lessonCacheSize + quizCacheSize
    };
  }

  static cleanExpiredCache(): void {
    const lessonCache = this.getCache<AILesson>(this.LESSON_CACHE_KEY);
    const quizCache = this.getCache<AIQuiz>(this.QUIZ_CACHE_KEY);
    
    let lessonCleaned = false;
    let quizCleaned = false;
    
    // Clean expired lesson cache
    lessonCache.forEach((item, key) => {
      if (this.isExpired(item)) {
        lessonCache.delete(key);
        lessonCleaned = true;
      }
    });
    
    // Clean expired quiz cache
    quizCache.forEach((item, key) => {
      if (this.isExpired(item)) {
        quizCache.delete(key);
        quizCleaned = true;
      }
    });
    
    if (lessonCleaned) {
      this.setCache(this.LESSON_CACHE_KEY, lessonCache);
    }
    
    if (quizCleaned) {
      this.setCache(this.QUIZ_CACHE_KEY, quizCache);
    }
  }
}

// Auto-cleanup expired cache on page load
if (typeof window !== 'undefined') {
  CacheService.cleanExpiredCache();
}