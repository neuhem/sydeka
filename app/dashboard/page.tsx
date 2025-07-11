'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { withAuth } from '@/lib/with-auth';
import { ProgressService } from '@/lib/progress-service';
import { AQA_A_LEVEL_MATHEMATICS_CURRICULUM } from '@/lib/curriculum';
import { 
  BookOpen, 
  Clock, 
  Target, 
  TrendingUp, 
  Award, 
  Brain, 
  BarChart3, 
  Calendar,
  Zap,
  CheckCircle,
  Star,
  Download,
  RefreshCw
} from 'lucide-react';

function Dashboard() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<any>(null);
  const [overallStats, setOverallStats] = useState<any>(null);
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProgressData = () => {
      try {
        const userProgress = ProgressService.getUserProgress();
        const stats = ProgressService.getOverallProgress();
        const learningAnalytics = ProgressService.getLearningAnalytics();
        
        setProgress(userProgress);
        setOverallStats(stats);
        setAnalytics(learningAnalytics);
      } catch (error) {
        console.error('Error loading progress data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProgressData();
  }, []);

  const exportProgress = () => {
    try {
      const data = ProgressService.exportProgress();
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sydeka-progress-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting progress:', error);
    }
  };

  const resetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
      ProgressService.clearAllProgress();
      window.location.reload();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your progress...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Learning Dashboard</h1>
              <p className="text-gray-600 mt-2">Welcome back, {user?.user_metadata?.name || user?.email}!</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={exportProgress}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                Export Progress
              </button>
              <button
                onClick={resetProgress}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Reset Progress
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Overall Progress</p>
                <p className="text-2xl font-bold text-blue-600">{overallStats?.overallPercentage || 0}%</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${overallStats?.overallPercentage || 0}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {overallStats?.completedTopics || 0} of {overallStats?.totalTopics || 0} topics completed
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Study Time</p>
                <p className="text-2xl font-bold text-green-600">{overallStats?.studyTimeHours || 0}h</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(overallStats?.weeklyGoalProgress || 0, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Weekly goal: {overallStats?.weeklyGoalProgress || 0}%
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Learning Streak</p>
                <p className="text-2xl font-bold text-orange-600">{overallStats?.learningStreak || 0} days</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-500">
                {overallStats?.learningStreak >= 7 ? 'Amazing consistency!' : 'Keep going!'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Quiz Average</p>
                <p className="text-2xl font-bold text-purple-600">{overallStats?.averageQuizScore || 0}%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-500">
                {overallStats?.averageQuizScore >= 80 ? 'Excellent performance!' : 'Room for improvement'}
              </p>
            </div>
          </div>
        </div>

        {/* Recent Achievements */}
        {progress?.achievements && progress.achievements.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              Recent Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {progress.achievements.slice(-6).map((achievement: any) => (
                <div key={achievement.id} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Module Progress */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            Module Progress
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {AQA_A_LEVEL_MATHEMATICS_CURRICULUM.map((module) => {
              const moduleProgress = ProgressService.getModuleProgress(module.id);
              return (
                <div key={module.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-gray-900">{module.title}</h3>
                      <p className="text-sm text-gray-600">{module.year} • {module.topics.length} topics</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-blue-600">{moduleProgress.progressPercentage}%</p>
                      <p className="text-xs text-gray-500">
                        {moduleProgress.completedTopics}/{moduleProgress.totalTopics}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${moduleProgress.progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      Avg Quiz: {moduleProgress.averageQuizScore}%
                    </span>
                    <span className="text-gray-600">
                      {moduleProgress.estimatedTimeRemaining}min remaining
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Learning Insights
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Average Session Length</p>
                <p className="text-xl font-semibold text-gray-900">
                  {Math.round(analytics?.averageSessionLength || 0)} minutes
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Topics per Week</p>
                <p className="text-xl font-semibold text-gray-900">
                  {Math.round(analytics?.topicsPerWeek || 0)} topics
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Predicted Completion</p>
                <p className="text-xl font-semibold text-gray-900">
                  {analytics?.predictedCompletionDate 
                    ? new Date(analytics.predictedCompletionDate).toLocaleDateString()
                    : 'N/A'
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Performance Areas
            </h2>
            <div className="space-y-4">
              {analytics?.strengthAreas && analytics.strengthAreas.length > 0 && (
                <div>
                  <p className="text-sm text-gray-600 mb-2">Strength Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {analytics.strengthAreas.map((area: string) => (
                      <span key={area} className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {analytics?.improvementAreas && analytics.improvementAreas.length > 0 && (
                <div>
                  <p className="text-sm text-gray-600 mb-2">Improvement Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {analytics.improvementAreas.map((area: string) => (
                      <span key={area} className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/ai-lesson-generator"
              className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">AI Generator</p>
                <p className="text-sm text-gray-600">Create custom lessons</p>
              </div>
            </Link>
            <Link
              href="/modules"
              className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <BookOpen className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Browse Modules</p>
                <p className="text-sm text-gray-600">Explore curriculum</p>
              </div>
            </Link>
            <Link
              href="/lessons"
              className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <CheckCircle className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-medium text-gray-900">Continue Learning</p>
                <p className="text-sm text-gray-600">Resume lessons</p>
              </div>
            </Link>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Calendar className="h-6 w-6 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">Study Schedule</p>
                <p className="text-sm text-gray-600">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Dashboard); 