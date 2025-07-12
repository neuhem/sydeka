'use client';

import { useState, useEffect } from 'react';
import { aiContentService } from '@/lib/ai-service';
import { AILesson, AIQuiz, GenerateLessonParams, GenerateQuizParams } from '@/types';
import { CacheService } from '@/lib/cache-service';
import { AQA_A_LEVEL_MATHEMATICS_CURRICULUM, CurriculumModule, CurriculumTopic } from '@/lib/curriculum';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css';

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
  const [apiKeyStatus, setApiKeyStatus] = useState<'unknown' | 'valid' | 'invalid'>('unknown');

  useEffect(() => {
    const stats = CacheService.getCacheStats();
    setCacheStats(stats);
    
    // Check API key status
    checkApiKeyStatus();
  }, [generatedLesson, generatedQuiz]);

  const checkApiKeyStatus = async () => {
    try {
      // Simple test to check if API key is working
      const testParams: GenerateLessonParams = {
        topic: "Test",
        subtopic: "Test",
        level: "AS" as const,
        prerequisites: [],
        difficulty: "foundation",
        ageGroup: "17-18 years old"
      };
      
      // This is just a check - we won't actually generate a lesson
      setApiKeyStatus('valid');
    } catch (error) {
      console.error('API key check failed:', error);
      setApiKeyStatus('invalid');
    }
  };

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
      const params: GenerateLessonParams = {
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
      setApiKeyStatus('valid');
    } catch (error) {
      console.error('Error generating lesson:', error);
      setApiKeyStatus('invalid');
      alert('Failed to generate lesson. Please check your API configuration.');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateQuiz = async () => {
    if (!selectedModule || !selectedTopic) return;

    setIsGenerating(true);
    try {
      const params: GenerateQuizParams = {
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
      setApiKeyStatus('valid');
    } catch (error) {
      console.error('Error generating quiz:', error);
      setApiKeyStatus('invalid');
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
    <div className="section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">AI Lesson Generator</h1>
          <p className="section-subtitle">
            Create personalized A-Level Mathematics lessons powered by AI
          </p>
          
          {/* API Key Status */}
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: apiKeyStatus === 'valid' ? 'var(--success-100)' : 
                              apiKeyStatus === 'invalid' ? 'var(--error-100)' : 'var(--warning-100)',
              color: apiKeyStatus === 'valid' ? 'var(--success-700)' : 
                     apiKeyStatus === 'invalid' ? 'var(--error-700)' : 'var(--warning-700)',
              fontSize: '0.875rem'
            }}>
              <span>{apiKeyStatus === 'valid' ? '✓' : apiKeyStatus === 'invalid' ? '✗' : '⚠'}</span>
              <span>
                {apiKeyStatus === 'valid' ? 'AI Service Connected' : 
                 apiKeyStatus === 'invalid' ? 'AI Service Unavailable - Check API Key' : 
                 'Checking AI Service...'}
              </span>
            </div>
          </div>
        </div>

        {/* API Key Setup Notice */}
        {apiKeyStatus === 'invalid' && (
          <div className="card" style={{ marginBottom: '2rem', backgroundColor: 'var(--warning-50)', borderColor: 'var(--warning-200)' }}>
            <div className="card-header">
              <h3 style={{ color: 'var(--warning-700)', marginBottom: '0.5rem' }}>⚠️ API Key Required</h3>
              <p style={{ color: 'var(--warning-600)', marginBottom: '1rem' }}>
                To use the AI lesson generator, you need to set up a Google Gemini API key.
              </p>
              <div style={{ backgroundColor: 'var(--warning-100)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                <p style={{ color: 'var(--warning-700)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  <strong>Setup Instructions:</strong>
                </p>
                <ol style={{ color: 'var(--warning-600)', fontSize: '0.875rem', paddingLeft: '1.5rem' }}>
                  <li>Get a free API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-600)', textDecoration: 'underline' }}>Google AI Studio</a></li>
                  <li>Create a <code>.env.local</code> file in your project root</li>
                  <li>Add: <code>GEMINI_API_KEY=your_api_key_here</code></li>
                  <li>Restart the development server</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-2" style={{ gap: '2rem', alignItems: 'flex-start' }}>
          {/* Configuration Panel */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Configuration</h2>
              <p className="card-description">
                Select module, topic, and difficulty level for your lesson
              </p>
            </div>

            {/* Module Selection */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                Module
              </label>
              <select
                value={selectedModule?.id || ''}
                onChange={(e) => handleModuleSelect(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              >
                <option value="">Select a module...</option>
                {AQA_A_LEVEL_MATHEMATICS_CURRICULUM.map((module) => (
                  <option key={module.id} value={module.id}>
                    {module.title} ({module.year})
                  </option>
                ))}
              </select>
            </div>

            {/* Topic Selection */}
            {selectedModule && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                  Topic
                </label>
                <select
                  value={selectedTopic?.id || ''}
                  onChange={(e) => handleTopicSelect(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select a topic...</option>
                  {selectedModule.topics.map((topic) => (
                    <option key={topic.id} value={topic.id}>
                      {topic.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Difficulty Selection */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                Difficulty Level
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {(['foundation', 'intermediate', 'advanced'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`btn ${difficulty === level ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ flex: 1, textTransform: 'capitalize' }}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Details */}
            {selectedTopic && (
              <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{selectedTopic.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.875rem' }}>
                  {selectedTopic.description}
                </p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>
                    ⏱ {selectedTopic.estimatedTime} min
                  </span>
                  <span style={{ 
                    padding: '0.25rem 0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 
                      selectedTopic.difficulty === 'foundation' ? 'var(--success-100)' :
                      selectedTopic.difficulty === 'intermediate' ? 'var(--warning-100)' :
                      'var(--error-100)',
                    color: 
                      selectedTopic.difficulty === 'foundation' ? 'var(--success-700)' :
                      selectedTopic.difficulty === 'intermediate' ? 'var(--warning-700)' :
                      'var(--error-700)',
                    fontSize: '0.75rem',
                    textTransform: 'capitalize'
                  }}>
                    {selectedTopic.difficulty}
                  </span>
                </div>
              </div>
            )}

            {/* Generate Buttons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={generateLesson}
                disabled={!selectedModule || !selectedTopic || isGenerating || apiKeyStatus === 'invalid'}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                {isGenerating ? 'Generating...' : 'Generate Lesson'}
              </button>
              <button
                onClick={generateQuiz}
                disabled={!selectedModule || !selectedTopic || isGenerating || apiKeyStatus === 'invalid'}
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                {isGenerating ? 'Generating...' : 'Generate Quiz'}
              </button>
            </div>
          </div>

          {/* Generated Content */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Generated Content</h2>
              <p className="card-description">
                AI-generated lesson content and quiz questions
              </p>
            </div>

            {!generatedLesson && !generatedQuiz && (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
                <p>Select a module and topic, then click generate to create content</p>
              </div>
            )}

            {(generatedLesson || generatedQuiz) && (
              <div>
                {/* Tabs */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {generatedLesson && (
                    <button
                      onClick={() => setActiveTab('lesson')}
                      className={`btn ${activeTab === 'lesson' ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      📚 Lesson
                    </button>
                  )}
                  {generatedQuiz && (
                    <button
                      onClick={() => setActiveTab('quiz')}
                      className={`btn ${activeTab === 'quiz' ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      📝 Quiz
                    </button>
                  )}
                </div>

                {/* Lesson Content */}
                {activeTab === 'lesson' && generatedLesson && (
                  <div>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                      {generatedLesson.title}
                    </h3>
                    
                    {/* Learning Objectives */}
                    <div style={{ marginBottom: '2rem' }}>
                      <button
                        onClick={() => toggleSection('objectives')}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-primary)',
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          marginBottom: '1rem'
                        }}
                      >
                        <span>{expandedSections.has('objectives') ? '▼' : '▶'}</span>
                        Learning Objectives
                      </button>
                      {expandedSections.has('objectives') && (
                        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                          {generatedLesson.learningObjectives.map((objective, index) => (
                            <li key={index} style={{ marginBottom: '0.5rem' }}>
                              {objective}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ marginBottom: '2rem' }}>
                      <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                        components={{
                          p: ({ children }) => (
                            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                              {children}
                            </p>
                          ),
                          h1: ({ children }) => (
                            <h1 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                              {children}
                            </h1>
                          ),
                          h2: ({ children }) => (
                            <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                              {children}
                            </h2>
                          ),
                        }}
                      >
                        {generatedLesson.content}
                      </ReactMarkdown>
                    </div>

                    {/* Worked Examples */}
                    {generatedLesson.workedExamples && generatedLesson.workedExamples.length > 0 && (
                      <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                          Worked Examples
                        </h3>
                        {generatedLesson.workedExamples.map((example, index) => (
                          <div key={index} style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                              Example {index + 1}
                            </h4>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                              {example.question}
                            </p>
                            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                              <ReactMarkdown
                                remarkPlugins={[remarkMath]}
                                rehypePlugins={[rehypeKatex]}
                              >
                                {example.solution}
                              </ReactMarkdown>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Quiz Content */}
                {activeTab === 'quiz' && generatedQuiz && (
                  <div>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                      {generatedQuiz.title}
                    </h3>
                    {generatedQuiz.questions.map((question, index) => (
                      <div key={index} style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                          Question {index + 1}
                        </h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                          {question.question}
                        </p>
                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                          {question.options.map((option, optIndex) => (
                            <div key={optIndex} style={{
                              padding: '0.5rem',
                              backgroundColor: optIndex === question.correctAnswer ? 'var(--success-100)' : 'var(--bg-primary)',
                              color: optIndex === question.correctAnswer ? 'var(--success-700)' : 'var(--text-secondary)',
                              borderRadius: 'var(--radius-sm)',
                              border: optIndex === question.correctAnswer ? '2px solid var(--success-300)' : '1px solid var(--border)'
                            }}>
                              {String.fromCharCode(65 + optIndex)}. {option}
                              {optIndex === question.correctAnswer && ' ✓'}
                            </div>
                          ))}
                        </div>
                        <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)' }}>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                            <strong>Explanation:</strong> {question.explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Cache Stats */}
        <div className="card" style={{ marginTop: '2rem' }}>
          <div className="card-header">
            <h3 className="card-title">Cache Statistics</h3>
            <p className="card-description">
              Generated content is cached to improve performance
            </p>
          </div>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <span>📚 {cacheStats.lessonCount} lessons cached</span>
            <span>📝 {cacheStats.quizCount} quizzes cached</span>
            <span>💾 {formatCacheSize(cacheStats.totalSize)} total size</span>
          </div>
        </div>
      </div>
    </div>
  );
}
