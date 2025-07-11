import { AQA_A_LEVEL_MATHEMATICS_CURRICULUM, CurriculumModule, CurriculumTopic } from './curriculum';

export interface UserProgress {
  completedTopics: string[];
  completedModules: string[];
  quizScores: Record<string, QuizScore>;
  studyTimeMinutes: number;
  lastActiveDate: string;
  startDate: string;
  achievements: Achievement[];
  learningStreak: number;
  weeklyGoalMinutes: number;
  currentWeekMinutes: number;
}

export interface QuizScore {
  score: number;
  totalQuestions: number;
  completedAt: string;
  timeSpentMinutes: number;
  attempts: number;
  bestScore: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
  category: 'milestone' | 'streak' | 'performance' | 'completion';
}

export interface StudySession {
  date: string;
  minutesStudied: number;
  topicsCompleted: string[];
  modulesWorkedOn: string[];
  quizzesTaken: number;
  averageQuizScore: number;
}

export interface LearningAnalytics {
  totalStudyTime: number;
  averageSessionLength: number;
  topicsPerWeek: number;
  strengthAreas: string[];
  improvementAreas: string[];
  progressByModule: Record<string, number>;
  studyPattern: StudySession[];
  predictedCompletionDate: string;
}

export class ProgressService {
  private static readonly PROGRESS_KEY = 'sydeka_user_progress';
  private static readonly SESSION_KEY = 'sydeka_study_sessions';

  static getDefaultProgress(): UserProgress {
    return {
      completedTopics: [],
      completedModules: [],
      quizScores: {},
      studyTimeMinutes: 0,
      lastActiveDate: new Date().toISOString(),
      startDate: new Date().toISOString(),
      achievements: [],
      learningStreak: 0,
      weeklyGoalMinutes: 300, // 5 hours default
      currentWeekMinutes: 0
    };
  }

  static getUserProgress(): UserProgress {
    try {
      const stored = localStorage.getItem(this.PROGRESS_KEY);
      if (!stored) return this.getDefaultProgress();
      
      const progress = JSON.parse(stored);
      return { ...this.getDefaultProgress(), ...progress };
    } catch (error) {
      console.error('Error loading user progress:', error);
      return this.getDefaultProgress();
    }
  }

  static saveUserProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(this.PROGRESS_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving user progress:', error);
    }
  }

  static markTopicCompleted(topicId: string): void {
    const progress = this.getUserProgress();
    
    if (!progress.completedTopics.includes(topicId)) {
      progress.completedTopics.push(topicId);
      progress.lastActiveDate = new Date().toISOString();
      
      // Check if module is completed
      const moduleId = this.getModuleIdFromTopicId(topicId);
      if (moduleId && this.isModuleCompleted(moduleId, progress.completedTopics)) {
        progress.completedModules.push(moduleId);
        this.checkAndAwardAchievements(progress);
      }
      
      this.saveUserProgress(progress);
    }
  }

  static recordQuizScore(topicId: string, score: number, totalQuestions: number, timeSpentMinutes: number): void {
    const progress = this.getUserProgress();
    
    const existingScore = progress.quizScores[topicId];
    const newScore: QuizScore = {
      score,
      totalQuestions,
      completedAt: new Date().toISOString(),
      timeSpentMinutes,
      attempts: existingScore ? existingScore.attempts + 1 : 1,
      bestScore: existingScore ? Math.max(existingScore.bestScore, score) : score
    };
    
    progress.quizScores[topicId] = newScore;
    progress.lastActiveDate = new Date().toISOString();
    
    this.checkAndAwardAchievements(progress);
    this.saveUserProgress(progress);
  }

  static addStudyTime(minutes: number): void {
    const progress = this.getUserProgress();
    progress.studyTimeMinutes += minutes;
    progress.currentWeekMinutes += minutes;
    progress.lastActiveDate = new Date().toISOString();
    
    this.updateLearningStreak(progress);
    this.checkAndAwardAchievements(progress);
    this.saveUserProgress(progress);
  }

  static getModuleProgress(moduleId: string): {
    totalTopics: number;
    completedTopics: number;
    progressPercentage: number;
    averageQuizScore: number;
    estimatedTimeRemaining: number;
  } {
    const progress = this.getUserProgress();
    const module = AQA_A_LEVEL_MATHEMATICS_CURRICULUM.find(m => m.id === moduleId);
    
    if (!module) {
      return {
        totalTopics: 0,
        completedTopics: 0,
        progressPercentage: 0,
        averageQuizScore: 0,
        estimatedTimeRemaining: 0
      };
    }

    const totalTopics = module.topics.length;
    const completedTopics = module.topics.filter(topic => 
      progress.completedTopics.includes(topic.id)
    ).length;
    
    const progressPercentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    
    // Calculate average quiz score for this module
    const moduleTopicIds = module.topics.map(t => t.id);
    const moduleQuizScores = moduleTopicIds
      .map(topicId => progress.quizScores[topicId])
      .filter(score => score !== undefined);
    
    const averageQuizScore = moduleQuizScores.length > 0 
      ? Math.round(moduleQuizScores.reduce((sum, score) => sum + (score.score / score.totalQuestions * 100), 0) / moduleQuizScores.length)
      : 0;
    
    // Estimate time remaining based on remaining topics
    const remainingTopics = totalTopics - completedTopics;
    const estimatedTimeRemaining = remainingTopics > 0 
      ? module.topics
          .filter(topic => !progress.completedTopics.includes(topic.id))
          .reduce((sum, topic) => sum + topic.estimatedTime, 0)
      : 0;

    return {
      totalTopics,
      completedTopics,
      progressPercentage,
      averageQuizScore,
      estimatedTimeRemaining
    };
  }

  static getOverallProgress(): {
    totalModules: number;
    completedModules: number;
    totalTopics: number;
    completedTopics: number;
    overallPercentage: number;
    averageQuizScore: number;
    studyTimeHours: number;
    learningStreak: number;
    weeklyGoalProgress: number;
  } {
    const progress = this.getUserProgress();
    
    const totalModules = AQA_A_LEVEL_MATHEMATICS_CURRICULUM.length;
    const completedModules = progress.completedModules.length;
    
    const totalTopics = AQA_A_LEVEL_MATHEMATICS_CURRICULUM.reduce((sum, module) => sum + module.topics.length, 0);
    const completedTopics = progress.completedTopics.length;
    
    const overallPercentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    
    // Calculate overall average quiz score
    const allQuizScores = Object.values(progress.quizScores);
    const averageQuizScore = allQuizScores.length > 0 
      ? Math.round(allQuizScores.reduce((sum, score) => sum + (score.score / score.totalQuestions * 100), 0) / allQuizScores.length)
      : 0;
    
    const studyTimeHours = Math.round(progress.studyTimeMinutes / 60 * 10) / 10;
    
    const weeklyGoalProgress = progress.weeklyGoalMinutes > 0 
      ? Math.round((progress.currentWeekMinutes / progress.weeklyGoalMinutes) * 100)
      : 0;

    return {
      totalModules,
      completedModules,
      totalTopics,
      completedTopics,
      overallPercentage,
      averageQuizScore,
      studyTimeHours,
      learningStreak: progress.learningStreak,
      weeklyGoalProgress
    };
  }

  static getLearningAnalytics(): LearningAnalytics {
    const progress = this.getUserProgress();
    const sessions = this.getStudySessions();
    
    // Calculate study patterns
    const averageSessionLength = sessions.length > 0 
      ? sessions.reduce((sum, session) => sum + session.minutesStudied, 0) / sessions.length
      : 0;
    
    const topicsPerWeek = sessions.length > 0 
      ? sessions.reduce((sum, session) => sum + session.topicsCompleted.length, 0) / Math.max(1, sessions.length / 7)
      : 0;
    
    // Identify strengths and improvement areas
    const moduleScores = AQA_A_LEVEL_MATHEMATICS_CURRICULUM.map(module => {
      const moduleProgress = this.getModuleProgress(module.id);
      return {
        moduleId: module.id,
        moduleName: module.title,
        score: moduleProgress.averageQuizScore,
        progress: moduleProgress.progressPercentage
      };
    });
    
    const strengthAreas = moduleScores
      .filter(m => m.score >= 80)
      .map(m => m.moduleName);
    
    const improvementAreas = moduleScores
      .filter(m => m.score < 60 && m.progress > 0)
      .map(m => m.moduleName);
    
    // Calculate progress by module
    const progressByModule: Record<string, number> = {};
    AQA_A_LEVEL_MATHEMATICS_CURRICULUM.forEach(module => {
      progressByModule[module.id] = this.getModuleProgress(module.id).progressPercentage;
    });
    
    // Predict completion date
    const remainingTopics = AQA_A_LEVEL_MATHEMATICS_CURRICULUM.reduce((sum, module) => sum + module.topics.length, 0) - progress.completedTopics.length;
    const currentPace = topicsPerWeek > 0 ? topicsPerWeek : 1;
    const weeksToComplete = Math.ceil(remainingTopics / currentPace);
    const predictedCompletionDate = new Date(Date.now() + weeksToComplete * 7 * 24 * 60 * 60 * 1000).toISOString();

    return {
      totalStudyTime: progress.studyTimeMinutes,
      averageSessionLength,
      topicsPerWeek,
      strengthAreas,
      improvementAreas,
      progressByModule,
      studyPattern: sessions,
      predictedCompletionDate
    };
  }

  private static getModuleIdFromTopicId(topicId: string): string | null {
    for (const module of AQA_A_LEVEL_MATHEMATICS_CURRICULUM) {
      if (module.topics.some(topic => topic.id === topicId)) {
        return module.id;
      }
    }
    return null;
  }

  private static isModuleCompleted(moduleId: string, completedTopics: string[]): boolean {
    const module = AQA_A_LEVEL_MATHEMATICS_CURRICULUM.find(m => m.id === moduleId);
    if (!module) return false;
    
    return module.topics.every(topic => completedTopics.includes(topic.id));
  }

  private static updateLearningStreak(progress: UserProgress): void {
    const today = new Date().toDateString();
    const lastActive = new Date(progress.lastActiveDate).toDateString();
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
    
    if (lastActive === today) {
      // Already counted today
      return;
    } else if (lastActive === yesterday) {
      // Continuing streak
      progress.learningStreak += 1;
    } else {
      // Reset streak
      progress.learningStreak = 1;
    }
  }

  private static checkAndAwardAchievements(progress: UserProgress): void {
    const achievements: Achievement[] = [];
    
    // First topic achievement
    if (progress.completedTopics.length === 1 && !progress.achievements.some(a => a.id === 'first_topic')) {
      achievements.push({
        id: 'first_topic',
        title: 'First Steps',
        description: 'Completed your first topic!',
        icon: '🎯',
        unlockedAt: new Date().toISOString(),
        category: 'milestone'
      });
    }
    
    // First module achievement
    if (progress.completedModules.length === 1 && !progress.achievements.some(a => a.id === 'first_module')) {
      achievements.push({
        id: 'first_module',
        title: 'Module Master',
        description: 'Completed your first module!',
        icon: '📚',
        unlockedAt: new Date().toISOString(),
        category: 'milestone'
      });
    }
    
    // Streak achievements
    if (progress.learningStreak === 7 && !progress.achievements.some(a => a.id === 'week_streak')) {
      achievements.push({
        id: 'week_streak',
        title: 'Weekly Warrior',
        description: 'Studied for 7 days in a row!',
        icon: '🔥',
        unlockedAt: new Date().toISOString(),
        category: 'streak'
      });
    }
    
    // Quiz performance achievement
    const perfectQuizzes = Object.values(progress.quizScores).filter(score => score.score === score.totalQuestions);
    if (perfectQuizzes.length >= 5 && !progress.achievements.some(a => a.id === 'perfect_five')) {
      achievements.push({
        id: 'perfect_five',
        title: 'Perfect Performance',
        description: 'Got perfect scores on 5 quizzes!',
        icon: '⭐',
        unlockedAt: new Date().toISOString(),
        category: 'performance'
      });
    }
    
    // Study time achievements
    if (progress.studyTimeMinutes >= 60 * 10 && !progress.achievements.some(a => a.id === 'ten_hours')) {
      achievements.push({
        id: 'ten_hours',
        title: 'Dedicated Learner',
        description: 'Studied for 10 hours total!',
        icon: '⏰',
        unlockedAt: new Date().toISOString(),
        category: 'milestone'
      });
    }
    
    progress.achievements.push(...achievements);
  }

  private static getStudySessions(): StudySession[] {
    try {
      const stored = localStorage.getItem(this.SESSION_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading study sessions:', error);
      return [];
    }
  }

  static clearAllProgress(): void {
    localStorage.removeItem(this.PROGRESS_KEY);
    localStorage.removeItem(this.SESSION_KEY);
  }
  
  static exportProgress(): string {
    const progress = this.getUserProgress();
    const sessions = this.getStudySessions();
    
    return JSON.stringify({
      progress,
      sessions,
      exportDate: new Date().toISOString()
    }, null, 2);
  }
  
  static importProgress(data: string): boolean {
    try {
      const imported = JSON.parse(data);
      
      if (imported.progress) {
        this.saveUserProgress(imported.progress);
      }
      
      if (imported.sessions) {
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(imported.sessions));
      }
      
      return true;
    } catch (error) {
      console.error('Error importing progress:', error);
      return false;
    }
  }
}