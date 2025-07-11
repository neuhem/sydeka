'use client'

import Link from 'next/link'
import { type Lesson } from '@/lib/content'

interface LessonsClientProps {
  lessons: Lesson[]
}

export default function LessonsClient({ lessons }: LessonsClientProps) {
  return (
    <div style={{minHeight: '100vh', padding: '3rem 1rem'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{
          fontSize: '3rem', 
          fontWeight: 'bold', 
          marginBottom: '3rem', 
          textAlign: 'center',
          color: '#f1f5f9',
          textShadow: '0 0 20px rgba(96, 165, 250, 0.5)'
        }}>
          Explore Our Lessons
        </h1>
        
        {lessons.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'rgba(30, 41, 59, 0.8)',
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(100, 116, 139, 0.3)'
          }}>
            <p style={{color: '#cbd5e1', fontSize: '1.1rem', marginBottom: '1rem'}}>
              No lessons available yet. Check back soon!
            </p>
            <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>
              We're working hard to bring you amazing content across mathematics, physics, computer science, and history.
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
          }}>
            {lessons.map((lesson: Lesson) => (
              <div key={lesson.slug} style={{
                background: 'rgba(30, 41, 59, 0.8)',
                padding: '2rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 116, 139, 0.3)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
              }}
              className="lesson-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.4)'
                e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)'
                e.currentTarget.style.borderColor = 'rgba(100, 116, 139, 0.3)'
              }}>
                
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
                  <span style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(59, 130, 246, 0.2)',
                    color: '#60a5fa',
                    fontSize: '0.75rem',
                    borderRadius: '9999px',
                    fontWeight: '600',
                    border: '1px solid rgba(59, 130, 246, 0.3)'
                  }}>
                    {lesson.meta.subject.toUpperCase()}
                  </span>
                  <span style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#34d399',
                    fontSize: '0.75rem',
                    borderRadius: '9999px',
                    fontWeight: '600',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    {lesson.meta.level.toUpperCase()}
                  </span>
                </div>
                
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#f1f5f9',
                  lineHeight: '1.3'
                }}>
                  {lesson.meta.title}
                </h2>
                
                <div style={{fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '1.5rem'}}>
                  <p style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <span style={{color: '#60a5fa'}}>⏱</span>
                    <span>{lesson.meta.estimatedTime} minutes</span>
                  </p>
                  {lesson.meta.prerequisites.length > 0 && (
                    <p style={{display: 'flex', alignItems: 'flex-start', gap: '0.5rem'}}>
                      <span style={{color: '#60a5fa', marginTop: '0.1rem'}}>📋</span>
                      <span>Prerequisites: {lesson.meta.prerequisites.join(', ')}</span>
                    </p>
                  )}
                </div>
                
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem'}}>
                  {lesson.meta.tags.map((tag: string) => (
                    <span key={tag} style={{
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(100, 116, 139, 0.3)',
                      color: '#e2e8f0',
                      fontSize: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid rgba(148, 163, 184, 0.2)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/lessons/${lesson.slug}`}
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  Start Lesson →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 