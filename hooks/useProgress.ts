import { useState, useCallback, useEffect } from 'react';
import { UserProgress } from '@/types';

const PROGRESS_KEY = 'sydekaProgress';

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>({});

  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(PROGRESS_KEY);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
    }
  }, []);

  const updateProgress = useCallback((newProgress: UserProgress) => {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
      setProgress(newProgress);
    } catch (error) {
      console.error("Failed to save progress to localStorage", error);
    }
  }, []);

  const markLessonComplete = useCallback((moduleId: string, lessonIndex: number) => {
    const newProgress = { ...progress };
    if (!newProgress[moduleId]) {
      newProgress[moduleId] = { lessonsCompleted: 0, quizScore: null };
    }
    newProgress[moduleId].lessonsCompleted = Math.max(newProgress[moduleId].lessonsCompleted, lessonIndex + 1);
    newProgress[moduleId].lastAccessed = new Date();
    updateProgress(newProgress);
  }, [progress, updateProgress]);

  const updateQuizScore = useCallback((moduleId: string, score: number) => {
    const newProgress = { ...progress };
    if (!newProgress[moduleId]) {
      newProgress[moduleId] = { lessonsCompleted: 0, quizScore: null };
    }
    newProgress[moduleId].quizScore = Math.max(newProgress[moduleId].quizScore ?? 0, score);
    newProgress[moduleId].lastAccessed = new Date();
    updateProgress(newProgress);
  }, [progress, updateProgress]);

  const getModuleProgress = useCallback((moduleId: string) => {
    return progress[moduleId] || { lessonsCompleted: 0, quizScore: null };
  }, [progress]);

  const clearProgress = useCallback(() => {
    try {
      localStorage.removeItem(PROGRESS_KEY);
      setProgress({});
    } catch (error) {
      console.error("Failed to clear progress", error);
    }
  }, []);
  
  return { 
    progress, 
    markLessonComplete, 
    updateQuizScore, 
    getModuleProgress,
    clearProgress,
    setProgress: updateProgress
  };
};
