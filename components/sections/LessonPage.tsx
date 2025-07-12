import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Module, GeneratedModuleContent } from '@/types';
import { generateModuleContent } from '@/lib/ai-content-generator';
import { useContentCache } from '@/hooks';

// --- Helper Components ---

const Spinner: React.FC = () => (
  <svg className="animate-spin h-12 w-12 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const MathJaxWrapper: React.FC<{ children: React.ReactNode; dependencies: any[] }> = ({ children, dependencies }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).MathJax && ref.current) {
        (window as any).MathJax.typesetPromise([ref.current]).catch((err: any) => console.error('MathJax typeset error:', err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return <div ref={ref}>{children}</div>;
};

interface QuizComponentProps {
    quiz: GeneratedModuleContent['quiz'];
    moduleTitle: string;
    onQuizComplete: (score: number) => void;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ quiz, moduleTitle, onQuizComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const currentQuestion = quiz[currentQuestionIndex];
    
    if (!currentQuestion) {
        return (
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-red-600 dark:text-red-400">Error: No quiz questions available</h2>
            </div>
        );
    }

    const isCorrect = selectedAnswer === currentQuestion.correctAnswerIndex;

    const handleSubmit = () => {
        if (selectedAnswer === null) return;
        setIsSubmitted(true);
        if (isCorrect) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setIsSubmitted(false);
        } else {
            setShowResults(true);
            const percentage = Math.round(((score + (isCorrect ? 1 : 0)) / quiz.length) * 100);
            onQuizComplete(percentage);
        }
    };

    const handleRetake = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setIsSubmitted(false);
        setScore(0);
        setShowResults(false);
    }
    
    if (showResults) {
        const finalScore = score + (isCorrect ? 1 : 0);
        const percentage = Math.round((finalScore / quiz.length) * 100);
        return (
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Quiz Complete!</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">{moduleTitle}</p>
                <p className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 my-6">{percentage}%</p>
                <p className="text-lg text-gray-700 dark:text-gray-300">You scored {finalScore} out of {quiz.length}</p>
                <button onClick={handleRetake} className="mt-8 bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all">Retake Quiz</button>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="mb-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">Question {currentQuestionIndex + 1} of {quiz.length}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                    <div className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / quiz.length) * 100}%` }}></div>
                </div>
            </div>
            <MathJaxWrapper dependencies={[currentQuestion]}>
                <div className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6" dangerouslySetInnerHTML={{ __html: currentQuestion.question }}/>
            </MathJaxWrapper>
            <div className="space-y-4">
                {currentQuestion.options.map((option, index) => {
                    let optionClass = "border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:border-indigo-500";
                    if(isSubmitted) {
                        if (index === currentQuestion.correctAnswerIndex) {
                            optionClass = "border-green-500 bg-green-100 text-green-800 font-semibold dark:bg-green-500/20 dark:border-green-500 dark:text-green-300";
                        } else if (index === selectedAnswer) {
                            optionClass = "border-red-500 bg-red-100 text-red-800 dark:bg-red-500/20 dark:border-red-500 dark:text-red-300";
                        }
                    } else if (index === selectedAnswer) {
                        optionClass = "border-indigo-600 bg-indigo-100 ring-2 ring-indigo-400 dark:bg-indigo-500/30 dark:border-indigo-500 dark:text-indigo-200";
                    }

                    return (
                        <MathJaxWrapper key={index} dependencies={[option]}>
                            <button
                                onClick={() => !isSubmitted && setSelectedAnswer(index)}
                                disabled={isSubmitted}
                                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${optionClass} ${isSubmitted ? 'cursor-not-allowed' : ''}`}
                                dangerouslySetInnerHTML={{ __html: option }}
                            />
                        </MathJaxWrapper>
                    );
                })}
            </div>
            {isSubmitted && (
                 <MathJaxWrapper dependencies={[currentQuestion]}>
                    <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200 dark:bg-green-900/50 dark:border-green-700' : 'bg-red-50 border border-red-200 dark:bg-red-900/50 dark:border-red-700'}`}>
                        <h4 className={`font-bold ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>{isCorrect ? 'Correct!' : 'Incorrect'}</h4>
                        <div className="text-sm mt-2 text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: currentQuestion.explanation }}/>
                    </div>
                </MathJaxWrapper>
            )}
            <div className="mt-8 text-right">
                {isSubmitted ? (
                    <button onClick={handleNext} className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all">
                        {currentQuestionIndex < quiz.length - 1 ? 'Next Question' : 'Show Results'}
                    </button>
                ) : (
                    <button onClick={handleSubmit} disabled={selectedAnswer === null} className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full hover:bg-rose-600 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed dark:disabled:bg-gray-600">
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
}

// --- Interactive Practice Component ---
const InteractivePractice: React.FC<{ problem: GeneratedModuleContent['lessons'][0]['practiceProblems'][0] }> = ({ problem }) => {
    const [params, setParams] = useState<Record<string, number>>({});
    const [revealedSteps, setRevealedSteps] = useState(0);

    const getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const generateNewProblem = useCallback(() => {
        const newParams: Record<string, number> = {};
        problem.parameters.forEach(p => {
            newParams[p.name] = getRandomInt(p.min, p.max);
        });
        setParams(newParams);
        setRevealedSteps(0);
    }, [problem.parameters]);

    useEffect(() => {
        generateNewProblem();
    }, [generateNewProblem]);

    const renderWithParams = (template: string) => {
        return template.replace(/\$\{(\w+)\}/g, (_, key) => {
            return params[key]?.toString() || `\${${key}}`;
        });
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <MathJaxWrapper dependencies={[params]}>
                <div className="font-semibold text-gray-800 dark:text-gray-200 mb-2" dangerouslySetInnerHTML={{ __html: `<strong>Problem:</strong> ${renderWithParams(problem.problemTemplate)}` }} />
            </MathJaxWrapper>
            
            {problem.solutionTemplate.slice(0, revealedSteps).map((step, i) => (
                <MathJaxWrapper key={i} dependencies={[params, revealedSteps]}>
                    <div className="text-gray-700 dark:text-gray-300 mt-2 p-2 bg-white dark:bg-gray-800/60 rounded-md" dangerouslySetInnerHTML={{ __html: `<strong>Step ${i + 1}:</strong> ${renderWithParams(step)}` }} />
                </MathJaxWrapper>
            ))}

            <div className="mt-4 flex flex-wrap gap-2">
                <button
                    onClick={() => setRevealedSteps(s => s + 1)}
                    disabled={revealedSteps >= problem.solutionTemplate.length}
                    className="flex-grow bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed dark:disabled:bg-gray-600 transition-colors"
                >
                    Reveal Next Step
                </button>
                <button
                    onClick={generateNewProblem}
                    className="flex-grow bg-purple-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-600 transition-colors"
                >
                    New Problem
                </button>
            </div>
        </div>
    );
};

// --- Main LessonPage Component ---

interface LessonPageProps {
  module: Module;
  onBack: () => void;
  onLessonComplete: (moduleId: string, lessonIndex: number) => void;
  onQuizComplete: (moduleId: string, score: number) => void;
}

const LessonPage: React.FC<LessonPageProps> = ({ module, onBack, onLessonComplete, onQuizComplete }) => {
  const [content, setContent] = useState<GeneratedModuleContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [view, setView] = useState<'lesson' | 'quiz'>('lesson');
  const { getCachedContent, setCachedContent } = useContentCache();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const cachedContent = getCachedContent(module.id);
        if (cachedContent) {
          setContent(cachedContent);
          return;
        }

        const moduleContent = await generateModuleContent(module);
        
        setContent(moduleContent);
        setCachedContent(module.id, moduleContent);

      } catch (e: any) {
        setError(e.message || "An unknown error occurred.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchContent();
  }, [module, getCachedContent, setCachedContent]);

  const currentLesson = useMemo(() => content?.lessons[currentLessonIndex], [content, currentLessonIndex]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spinner />
        <p className="loading-text">Generating lessons for "{module.title}"...</p>
        <p className="loading-subtext">This may take a moment. The content will be cached for next time.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2 className="error-title">Oops! Something went wrong.</h2>
        <p className="error-message">{error}</p>
        <button onClick={onBack} className="btn btn-primary">Go Back</button>
      </div>
    );
  }

  if (!content) return null;
  
  const handleQuizComplete = (score: number) => {
    onQuizComplete(module.id, score);
  };

  return (
    <div className="lesson-page">
      <div className="lesson-container">
        <div className="mb-8">
          <button onClick={onBack} className="back-button">
            ← Back to Modules
          </button>
        </div>

        <header className="lesson-header">
          <h1 className="lesson-title">{module.title}</h1>
          <p className="lesson-description">{module.description}</p>
        </header>

        {view === 'lesson' && currentLesson && (
          <div>
             <div className="lesson-navigation">
                <button 
                  onClick={() => setCurrentLessonIndex(i => Math.max(0, i - 1))}
                  disabled={currentLessonIndex === 0}
                  className="btn btn-secondary"
                >
                  ← Previous
                </button>
                <span className="font-semibold">Lesson {currentLessonIndex + 1} of {content.lessons.length}</span>
                 <button 
                  onClick={() => setCurrentLessonIndex(i => Math.min(content.lessons.length - 1, i + 1))}
                  disabled={currentLessonIndex === content.lessons.length - 1}
                  className="btn btn-secondary"
                >
                  Next →
                </button>
            </div>
            <div className="lesson-content">
              <MathJaxWrapper dependencies={[currentLesson]}>
                <h2>{currentLesson.title}</h2>
                <div className="prose prose-indigo dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: currentLesson.content }}/>
                
                {currentLesson.examples.length > 0 && (
                  <div className="lesson-examples">
                    <h3>Worked Examples</h3>
                    <div className="space-y-6">
                        {currentLesson.examples.map((ex, i) => (
                            <div key={i} className="lesson-example">
                                <div className="font-semibold mb-2" dangerouslySetInnerHTML={{__html: `<strong>Problem:</strong> ${ex.problem}`}}/>
                                <div dangerouslySetInnerHTML={{__html: `<strong>Solution:</strong> ${ex.solution}`}}/>
                            </div>
                        ))}
                    </div>
                  </div>
                )}

                {currentLesson.practiceProblems.length > 0 && (
                   <div className="lesson-practice">
                    <h3>Interactive Practice</h3>
                     <div className="space-y-6">
                        {currentLesson.practiceProblems.map((p, i) => (
                           <InteractivePractice key={i} problem={p} />
                        ))}
                    </div>
                   </div>
                )}
              </MathJaxWrapper>
               <div className="lesson-actions">
                  <button onClick={() => onLessonComplete(module.id, currentLessonIndex)} className="btn btn-primary">Mark as Complete</button>
                  <button onClick={() => setView('quiz')} className="btn btn-secondary">Take Module Quiz</button>
              </div>
            </div>
          </div>
        )}
        
        {view === 'quiz' && (
            <div>
                 <div className="text-center mb-4">
                     <button onClick={() => setView('lesson')} className="text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">&larr; Back to Lessons</button>
                 </div>
                 <QuizComponent quiz={content.quiz} moduleTitle={module.title} onQuizComplete={handleQuizComplete}/>
            </div>
        )}

      </div>
    </div>
  );
};

export default LessonPage;
