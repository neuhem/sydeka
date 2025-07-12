'use client'

import { useParams, useRouter } from 'next/navigation'
import { AS_MODULES, A2_MODULES } from '@/lib/constants'
import { Module } from '@/types'

export default function ModuleDetailPage() {
  const params = useParams()
  const router = useRouter()
  const moduleId = params.moduleId as string

  // Find the module from both AS and A2 modules
  const allModules = [...AS_MODULES, ...A2_MODULES]
  const module = allModules.find(m => m.id === moduleId)

  if (!module) {
    return (
      <div className="section">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h1 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Module Not Found</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              The module you're looking for doesn't exist.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => router.push('/modules')}
            >
              Back to Modules
            </button>
          </div>
        </div>
      </div>
    )
  }

  const handleStartLearning = () => {
    router.push(`/lessons?module=${module.id}`)
  }

  const handleBackToModules = () => {
    router.push('/modules')
  }

  return (
    <div className="section">
      <div className="container">
        {/* Navigation */}
        <div style={{ marginBottom: '2rem' }}>
          <button 
            className="btn btn-secondary"
            onClick={handleBackToModules}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            ← Back to Modules
          </button>
        </div>

        {/* Module Header */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <h1 style={{ color: 'var(--text-primary)', margin: 0 }}>{module.title}</h1>
                <span style={{ 
                  backgroundColor: module.level === 'AS' ? 'var(--primary-100)' : 'var(--primary-200)',
                  color: module.level === 'AS' ? 'var(--primary-700)' : 'var(--primary-800)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {module.level} Level
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', margin: 0 }}>
                {module.description}
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>📚</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Estimated Duration: {module.estimatedDuration} hours
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>🎯</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                {module.topics.length} main topics
              </span>
            </div>
          </div>

          <button 
            className="btn btn-primary btn-large"
            onClick={handleStartLearning}
          >
            Start Learning →
          </button>
        </div>

        {/* Topics Covered */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Topics Covered</h2>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {module.topics.map((topic, index) => (
              <div key={index} className="card" style={{ 
                padding: '1rem',
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--border-secondary)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ 
                    backgroundColor: 'var(--bg-accent)',
                    color: 'var(--text-inverse)',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {index + 1}
                  </span>
                  <h3 style={{ color: 'var(--text-primary)', margin: 0, fontSize: '1rem' }}>{topic}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                  Learn the fundamentals of {topic.toLowerCase()} and apply them to solve problems.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="card">
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Your Learning Path</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ 
                backgroundColor: 'var(--bg-accent)',
                color: 'var(--text-inverse)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem'
              }}>
                1
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Study the Lessons</h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
                  Work through interactive lessons with examples and explanations
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ 
                backgroundColor: 'var(--bg-accent)',
                color: 'var(--text-inverse)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem'
              }}>
                2
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Practice Problems</h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
                  Solve practice problems to reinforce your understanding
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ 
                backgroundColor: 'var(--bg-accent)',
                color: 'var(--text-inverse)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem'
              }}>
                3
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Take Quizzes</h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
                  Test your knowledge with quizzes and get instant feedback
                </p>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <button 
              className="btn btn-primary btn-large"
              onClick={handleStartLearning}
            >
              Begin Your Journey →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
