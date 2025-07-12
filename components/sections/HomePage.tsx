import React, { useState } from 'react';
import { AS_MODULES, A2_MODULES } from '@/lib/constants';
import { Module, UserProgress } from '@/types';
import { generateModuleContent, isAIContentGenerationAvailable } from '@/lib/ai-content-generator';

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
  onGenerateContent: () => void;
  progress: { lessonsCompleted: number; quizScore: number | null; };
  totalLessons: number;
  isGenerating: boolean;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick, onGenerateContent, progress, totalLessons, isGenerating }) => {
  const completionPercentage = totalLessons > 0 ? (progress.lessonsCompleted / totalLessons) * 100 : 0;

  return (
    <div className="module-card">
      <div className="module-card-content">
        <h3 className="module-title">{module.title}</h3>
        <p className="module-description">{module.description}</p>
        
        <div className="module-topics">
          {module.topics.map((topic, index) => (
            <span key={index} className="module-topic">
              {topic}
            </span>
          ))}
        </div>

        <div className="module-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="progress-text">{Math.round(completionPercentage)}% Complete</p>
        </div>
        
        <div className="module-buttons">
          <button
            onClick={onClick}
            className="module-btn module-btn-primary"
          >
            View Module
          </button>
          {isAIContentGenerationAvailable() && (
            <button
              onClick={onGenerateContent}
              disabled={isGenerating}
              className="module-btn module-btn-secondary"
            >
              {isGenerating ? 'Generating...' : 'AI Content'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

interface HomePageProps {
  onSelectModule: (module: Module) => void;
  progress: UserProgress;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectModule, progress }) => {
  const [activeTab, setActiveTab] = useState<'as' | 'a2'>('as');
  const [generatingModules, setGeneratingModules] = useState<Set<string>>(new Set());

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGenerateContent = async (module: Module) => {
    setGeneratingModules(prev => new Set(prev).add(module.id));
    
    try {
      const content = await generateModuleContent(module);
      console.log('Generated content for', module.title, ':', content);
      // In a real app, you would save this content to a database
      alert(`AI content generated for ${module.title}! Check the console for details.`);
    } catch (error) {
      console.error('Error generating content:', error);
      alert('Failed to generate AI content. Please try again.');
    } finally {
      setGeneratingModules(prev => {
        const newSet = new Set(prev);
        newSet.delete(module.id);
        return newSet;
      });
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Master AQA A-Level Mathematics</h1>
          <p>
            Complete AS and A2 courses with AI-powered lessons, interactive practice, and progress tracking.
          </p>
          <button onClick={scrollToCourses} className="btn btn-primary">
            Start Learning
          </button>
        </div>
      </section>

      {/* Course Structure Section */}
      <section id="courses" className="course-section">
        <div className="container">
          <h2 className="section-title">Course Structure</h2>
          <p className="section-subtitle">Select a year to view the modules.</p>
          
          <div className="tab-nav">
            <button
              onClick={() => setActiveTab('as')}
              className={`tab-button ${activeTab === 'as' ? 'active' : ''}`}
            >
              AS Level (Year 1)
            </button>
            <button
              onClick={() => setActiveTab('a2')}
              className={`tab-button ${activeTab === 'a2' ? 'active' : ''}`}
            >
              A2 Level (Year 2)
            </button>
          </div>

          <div className="module-grid">
            {(activeTab === 'as' ? AS_MODULES : A2_MODULES).map((module: Module) => (
              <ModuleCard
                key={module.id}
                module={module}
                onClick={() => onSelectModule(module)}
                onGenerateContent={() => handleGenerateContent(module)}
                progress={progress[module.id] || { lessonsCompleted: 0, quizScore: null }}
                totalLessons={5} // Simplified assumption for UI
                isGenerating={generatingModules.has(module.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
