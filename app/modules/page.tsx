'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AQA_A_LEVEL_MATHEMATICS_CURRICULUM, CurriculumModule, getCurriculumByLevel } from '@/lib/curriculum';
import { BookOpen, Clock, Target, User, ChevronRight, Award, Brain, CheckCircle } from 'lucide-react';

export default function ModulesPage() {
  const [selectedYear, setSelectedYear] = useState<'AS' | 'A2' | 'both'>('both');
  
  const asModules = getCurriculumByLevel('AS');
  const a2Modules = getCurriculumByLevel('A2');
  
  const modulesToShow = selectedYear === 'both' ? 
    AQA_A_LEVEL_MATHEMATICS_CURRICULUM : 
    selectedYear === 'AS' ? asModules : a2Modules;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'foundation':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getYearColor = (year: string) => {
    return year === 'AS' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800';
  };

  const totalHours = modulesToShow.reduce((sum, module) => sum + module.estimatedHours, 0);
  const totalTopics = modulesToShow.reduce((sum, module) => sum + module.topics.length, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AQA A-Level Mathematics Curriculum
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete coverage of the AQA A-Level Mathematics specification from AS Year 1 through A2 Year 2
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Controls */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-sm border p-2 flex gap-2">
              <button
                onClick={() => setSelectedYear('both')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedYear === 'both'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All Modules
              </button>
              <button
                onClick={() => setSelectedYear('AS')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedYear === 'AS'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                AS Year 1
              </button>
              <button
                onClick={() => setSelectedYear('A2')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedYear === 'A2'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                A2 Year 2
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{modulesToShow.length}</div>
            <div className="text-gray-600">Modules</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{totalTopics}</div>
            <div className="text-gray-600">Topics</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{totalHours}</div>
            <div className="text-gray-600">Study Hours</div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modulesToShow.map((module) => (
            <div key={module.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              {/* Module Header */}
              <div className="p-6 border-b">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getYearColor(module.year)}`}>
                        {module.year}
                      </span>
                      <span className="text-sm text-gray-500">Module {module.order}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {module.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {module.estimatedHours}h
                  </div>
                </div>

                {/* Prerequisites */}
                {module.prerequisites.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Prerequisites:</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.prerequisites.map((prereq) => (
                        <span key={prereq} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {prereq}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Topics List */}
              <div className="p-6">
                <h4 className="text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Topics ({module.topics.length})
                </h4>
                <div className="space-y-3">
                  {module.topics.map((topic) => (
                    <div key={topic.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">
                          {topic.title}
                        </h5>
                        <p className="text-xs text-gray-600 mb-2">
                          {topic.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {topic.estimatedTime} min
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(topic.difficulty)}`}>
                            {topic.difficulty}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Module Footer */}
              <div className="p-6 border-t bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      17-18 years
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      AQA Specification
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/ai-lesson-generator?module=${module.id}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2"
                    >
                      <Brain className="h-4 w-4" />
                      Generate AI Content
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path Information */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Your Learning Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                AS Year 1 Foundation
              </h3>
              <p className="text-gray-600 mb-4">
                Build your mathematical foundation with core topics including algebra, functions, 
                coordinate geometry, and introduction to calculus.
              </p>
              <div className="space-y-2">
                {asModules.map((module) => (
                  <div key={module.id} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">{module.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                A2 Year 2 Advanced
              </h3>
              <p className="text-gray-600 mb-4">
                Master advanced mathematics with complex functions, advanced calculus, 
                vectors, and comprehensive statistical analysis.
              </p>
              <div className="space-y-2">
                {a2Modules.map((module) => (
                  <div key={module.id} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">{module.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ai-lesson-generator"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all inline-flex items-center gap-2"
            >
              <Brain className="h-5 w-5" />
              Start Learning with AI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}