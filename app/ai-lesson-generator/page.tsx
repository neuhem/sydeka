'use client';

import { useState, useEffect } from 'react';
import { aiContentService, AILesson, AIQuiz } from '@/lib/ai-service';
import { CacheService } from '@/lib/cache-service';
import { AQA_A_LEVEL_MATHEMATICS_CURRICULUM, CurriculumModule, CurriculumTopic } from '@/lib/curriculum';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css';
import { ChevronDown, ChevronUp, BookOpen, Brain, Clock, Target, Lightbulb, CheckCircle } from 'lucide-react';

export default function AILessonGenerator() {
  const [selectedModule, setSelectedModule] = useState<CurriculumModule | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<CurriculumTopic | null>(null);
  const [difficulty, setDifficulty] = useState<'foundation' | 'intermediate' | 'advanced'>('foundation');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLesson, setGeneratedLesson] = useState<AILesson | null>(null);
  const [generatedQuiz, setGeneratedQuiz] = useState<AIQuiz | null>(null);
  const [activeTab, setActiveTab] = useState<'lesson' | 'quiz'>('lesson');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['objectives']));
  const [cacheStats, setCacheStats] = useState<{ lessonCount: number; quizCount: number; totalSize: number }>({
    lessonCount: 0,
    quizCount: 0,
    totalSize: 0
  });

  useEffect(() => {
    const stats = CacheService.getCacheStats();
    setCacheStats(stats);
  }, [generatedLesson, generatedQuiz]);

  const handleModuleSelect = (moduleId: string) => {
    const module = AQA_A_LEVEL_MATHEMATICS_CURRICULUM.find(m => m.id === moduleId);
    setSelectedModule(module || null);
    setSelectedTopic(null);
    setGeneratedLesson(null);
    setGeneratedQuiz(null);
  };

  const handleTopicSelect = (topicId: string) => {
    const topic = selectedModule?.topics.find(t => t.id === topicId);
    setSelectedTopic(topic || null);
    setGeneratedLesson(null);
    setGeneratedQuiz(null);
  };

  const generateLesson = async () => {
    if (!selectedModule || !selectedTopic) return;

    setIsGenerating(true);
    try {
      const params = {
        topic: selectedModule.title,
        subtopic: selectedTopic.title,
        level: selectedModule.year,
        prerequisites: selectedModule.prerequisites,
        difficulty: difficulty,
        ageGroup: '17-18 years old'
      };

      // Check cache first
      const cached = CacheService.getCachedLesson(params);
      if (cached) {
        setGeneratedLesson(cached);
        setIsGenerating(false);
        return;
      }

      // Generate new lesson
      const lesson = await aiContentService.generateLesson(params);
      setGeneratedLesson(lesson);
      
      // Cache the result
      CacheService.cacheLesson(params, lesson);
      
      // Update cache stats
      const newStats = CacheService.getCacheStats();
      setCacheStats(newStats);
    } catch (error) {
      console.error('Error generating lesson:', error);
      alert('Failed to generate lesson. Please check your API configuration.');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateQuiz = async () => {
    if (!selectedModule || !selectedTopic) return;

    setIsGenerating(true);
    try {
      const params = {
        topic: selectedModule.title,
        subtopic: selectedTopic.title,
        level: selectedModule.year,
        questionCount: 10,
        difficulty: difficulty
      };

      // Check cache first
      const cached = CacheService.getCachedQuiz(params);
      if (cached) {
        setGeneratedQuiz(cached);
        setIsGenerating(false);
        return;
      }

      // Generate new quiz
      const quiz = await aiContentService.generateQuiz(params);
      setGeneratedQuiz(quiz);
      
      // Cache the result
      CacheService.cacheQuiz(params, quiz);
      
      // Update cache stats
      const newStats = CacheService.getCacheStats();
      setCacheStats(newStats);
    } catch (error) {
      console.error('Error generating quiz:', error);
      alert('Failed to generate quiz. Please check your API configuration.');
    } finally {
      setIsGenerating(false);
    }
  };

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const formatCacheSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Brain className="h-8 w-8 text-blue-600" />
                AI Lesson Generator
              </h1>
              <p className="mt-2 text-gray-600">
                Generate comprehensive A-Level Mathematics lessons using AI
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm text-blue-600 font-medium mb-1">Cache Status</div>
              <div className="text-xs text-blue-500">
                {cacheStats.lessonCount} lessons, {cacheStats.quizCount} quizzes
                <br />
                {formatCacheSize(cacheStats.totalSize)} stored
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Configuration */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Generate Content</h2>
              
              {/* Module Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Module
                </label>
                <select
                  value={selectedModule?.id || ''}
                  onChange={(e) => handleModuleSelect(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose a module...</option>
                  {AQA_A_LEVEL_MATHEMATICS_CURRICULUM.map((module) => (
                    <option key={module.id} value={module.id}>
                      {module.year} - {module.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Topic Selection */}
              {selectedModule && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Topic
                  </label>
                  <select
                    value={selectedTopic?.id || ''}
                    onChange={(e) => handleTopicSelect(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Choose a topic...</option>
                    {selectedModule.topics.map((topic) => (
                      <option key={topic.id} value={topic.id}>
                        {topic.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Difficulty Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['foundation', 'intermediate', 'advanced'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setDifficulty(level as any)}
                      className={`px-3 py-2 text-sm rounded-md transition-colors ${
                        difficulty === level
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topic Info */}
              {selectedTopic && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">{selectedTopic.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{selectedTopic.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {selectedTopic.estimatedTime} min
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      selectedTopic.difficulty === 'foundation' ? 'bg-green-100 text-green-800' :
                      selectedTopic.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {selectedTopic.difficulty}
                    </span>
                  </div>
                </div>
              )}

              {/* Generate Buttons */}
              <div className="space-y-3">
                <button
                  onClick={generateLesson}
                  disabled={!selectedModule || !selectedTopic || isGenerating}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <BookOpen className="h-4 w-4" />
                      Generate Lesson
                    </>
                  )}
                </button>
                
                <button
                  onClick={generateQuiz}
                  disabled={!selectedModule || !selectedTopic || isGenerating}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Target className="h-4 w-4" />
                      Generate Quiz
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Content */}
          <div className="lg:col-span-2">
            {(generatedLesson || generatedQuiz) && (
              <div className="bg-white rounded-lg shadow-sm border">
                {/* Tab Navigation */}
                <div className="border-b">
                  <nav className="flex">
                    <button
                      onClick={() => setActiveTab('lesson')}
                      className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === 'lesson'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <BookOpen className="h-4 w-4 inline mr-2" />
                      Lesson Content
                    </button>
                    <button
                      onClick={() => setActiveTab('quiz')}
                      className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === 'quiz'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <Target className="h-4 w-4 inline mr-2" />
                      Quiz
                    </button>
                  </nav>
                </div>

                {/* Lesson Content */}
                {activeTab === 'lesson' && generatedLesson && (
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      {generatedLesson.title}
                    </h2>

                    {/* Learning Objectives */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleSection('objectives')}
                        className="flex items-center justify-between w-full p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <span className="flex items-center gap-2 font-medium text-blue-900">
                          <Target className="h-5 w-5" />
                          Learning Objectives
                        </span>
                        {expandedSections.has('objectives') ? 
                          <ChevronUp className="h-5 w-5 text-blue-600" /> : 
                          <ChevronDown className="h-5 w-5 text-blue-600" />
                        }
                      </button>
                      {expandedSections.has('objectives') && (
                        <div className="mt-4 p-4 bg-white border rounded-lg">
                          <ul className="space-y-2">
                            {generatedLesson.learningObjectives.map((objective, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{objective}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Main Content */}
                    <div className="prose max-w-none mb-8">
                      <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                        components={{
                          h1: ({ children }) => <h1 className="text-2xl font-bold text-gray-900 mb-4">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-xl font-semibold text-gray-900 mb-3 mt-6">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-lg font-medium text-gray-900 mb-2 mt-4">{children}</h3>,
                          p: ({ children }) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">{children}</ol>,
                          strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                          em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
                          code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>,
                        }}
                      >
                        {generatedLesson.content}
                      </ReactMarkdown>
                    </div>

                    {/* Key Points */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleSection('keypoints')}
                        className="flex items-center justify-between w-full p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                      >
                        <span className="flex items-center gap-2 font-medium text-yellow-900">
                          <Lightbulb className="h-5 w-5" />
                          Key Points to Remember
                        </span>
                        {expandedSections.has('keypoints') ? 
                          <ChevronUp className="h-5 w-5 text-yellow-600" /> : 
                          <ChevronDown className="h-5 w-5 text-yellow-600" />
                        }
                      </button>
                      {expandedSections.has('keypoints') && (
                        <div className="mt-4 p-4 bg-white border rounded-lg">
                          <ul className="space-y-2">
                            {generatedLesson.keyPoints.map((point, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Worked Examples */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleSection('examples')}
                        className="flex items-center justify-between w-full p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                      >
                        <span className="flex items-center gap-2 font-medium text-green-900">
                          <BookOpen className="h-5 w-5" />
                          Worked Examples
                        </span>
                        {expandedSections.has('examples') ? 
                          <ChevronUp className="h-5 w-5 text-green-600" /> : 
                          <ChevronDown className="h-5 w-5 text-green-600" />
                        }
                      </button>
                      {expandedSections.has('examples') && (
                        <div className="mt-4 space-y-4">
                          {generatedLesson.workedExamples.map((example, index) => (
                            <div key={index} className="p-4 bg-white border rounded-lg">
                              <h4 className="font-medium text-gray-900 mb-2">Example {index + 1}</h4>
                              <div className="mb-3">
                                <strong className="text-gray-700">Question:</strong>
                                <div className="mt-1 text-gray-600">
                                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                    {example.question}
                                  </ReactMarkdown>
                                </div>
                              </div>
                              <div className="mb-3">
                                <strong className="text-gray-700">Solution:</strong>
                                <div className="mt-1 text-gray-600">
                                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                    {example.solution}
                                  </ReactMarkdown>
                                </div>
                              </div>
                              <div>
                                <strong className="text-gray-700">Explanation:</strong>
                                <div className="mt-1 text-gray-600">
                                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                    {example.explanation}
                                  </ReactMarkdown>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Practice Questions */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleSection('practice')}
                        className="flex items-center justify-between w-full p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                      >
                        <span className="flex items-center gap-2 font-medium text-purple-900">
                          <Target className="h-5 w-5" />
                          Practice Questions
                        </span>
                        {expandedSections.has('practice') ? 
                          <ChevronUp className="h-5 w-5 text-purple-600" /> : 
                          <ChevronDown className="h-5 w-5 text-purple-600" />
                        }
                      </button>
                      {expandedSections.has('practice') && (
                        <div className="mt-4 space-y-4">
                          {generatedLesson.practiceQuestions.map((question, index) => (
                            <div key={index} className="p-4 bg-white border rounded-lg">
                              <h4 className="font-medium text-gray-900 mb-2">Question {index + 1}</h4>
                              <div className="mb-3">
                                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                  {question.question}
                                </ReactMarkdown>
                              </div>
                              <details className="mt-3">
                                <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
                                  Show Answer & Working
                                </summary>
                                <div className="mt-3 p-3 bg-gray-50 rounded">
                                  <div className="mb-2">
                                    <strong className="text-gray-700">Answer:</strong>
                                    <div className="mt-1">
                                      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                        {question.answer}
                                      </ReactMarkdown>
                                    </div>
                                  </div>
                                  <div>
                                    <strong className="text-gray-700">Working Steps:</strong>
                                    <ol className="mt-1 list-decimal list-inside space-y-1">
                                      {question.workingSteps.map((step, stepIndex) => (
                                        <li key={stepIndex} className="text-gray-600">
                                          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} className="inline">
                                            {step}
                                          </ReactMarkdown>
                                        </li>
                                      ))}
                                    </ol>
                                  </div>
                                </div>
                              </details>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Quiz Content */}
                {activeTab === 'quiz' && generatedQuiz && (
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      {generatedQuiz.title}
                    </h2>
                    
                    <div className="space-y-6">
                      {generatedQuiz.questions.map((question, index) => (
                        <div key={index} className="p-6 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-gray-900 mb-4">
                            Question {index + 1}
                          </h3>
                          <div className="mb-4">
                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                              {question.question}
                            </ReactMarkdown>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                            {question.options.map((option, optionIndex) => (
                              <div
                                key={optionIndex}
                                className={`p-3 rounded-lg border-2 transition-colors ${
                                  optionIndex === question.correctAnswer
                                    ? 'border-green-500 bg-green-50'
                                    : 'border-gray-200 bg-white'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                                    optionIndex === question.correctAnswer
                                      ? 'bg-green-500 text-white'
                                      : 'bg-gray-200 text-gray-600'
                                  }`}>
                                    {String.fromCharCode(65 + optionIndex)}
                                  </span>
                                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} className="flex-1">
                                    {option}
                                  </ReactMarkdown>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <h4 className="font-medium text-green-900 mb-2">Explanation:</h4>
                            <div className="text-green-800">
                              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                {question.explanation}
                              </ReactMarkdown>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Empty State */}
            {!generatedLesson && !generatedQuiz && (
              <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
                <Brain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Ready to Generate AI Content
                </h3>
                <p className="text-gray-600 mb-6">
                  Select a module and topic from the left panel, then click generate to create comprehensive lesson content or interactive quizzes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-medium text-blue-900 mb-1">AI Lessons</h4>
                    <p className="text-sm text-blue-700">Complete lessons with examples and practice questions</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-medium text-green-900 mb-1">AI Quizzes</h4>
                    <p className="text-sm text-green-700">Interactive quizzes with detailed explanations</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}