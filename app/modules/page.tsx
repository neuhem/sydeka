'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AS_MODULES, A2_MODULES } from '@/lib/constants'
import { Module } from '@/types'

export default function ModulesPage() {
  const [selectedLevel, setSelectedLevel] = useState<'AS' | 'A2' | 'ALL'>('ALL')
  const router = useRouter()

  const allModules = [...AS_MODULES, ...A2_MODULES]
  const displayModules = selectedLevel === 'ALL' ? allModules : 
                         selectedLevel === 'AS' ? AS_MODULES : A2_MODULES

  const handleViewModule = (moduleId: string) => {
    // Navigate to a specific module page
    router.push(`/modules/${moduleId}`)
  }

  const handleStartLearning = (moduleId: string) => {
    // Navigate to the first lesson of the module
    router.push(`/lessons?module=${moduleId}`)
  }

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">A-Level Mathematics Modules</h1>
        <p className="section-subtitle">
          Explore our comprehensive curriculum covering AS and A2 levels
        </p>

        {/* Level Filter */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', gap: '0.5rem', padding: '0.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
            <button
              onClick={() => setSelectedLevel('ALL')}
              className={`btn ${selectedLevel === 'ALL' ? 'btn-primary' : 'btn-secondary'}`}
            >
              All Modules
            </button>
            <button
              onClick={() => setSelectedLevel('AS')}
              className={`btn ${selectedLevel === 'AS' ? 'btn-primary' : 'btn-secondary'}`}
            >
              AS Level
            </button>
            <button
              onClick={() => setSelectedLevel('A2')}
              className={`btn ${selectedLevel === 'A2' ? 'btn-primary' : 'btn-secondary'}`}
            >
              A2 Level
            </button>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-2">
          {displayModules.map((module: Module) => (
            <div key={module.id} className="card">
              <div className="card-header">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 className="card-title">{module.title}</h3>
                  <span style={{ 
                    backgroundColor: module.level === 'AS' ? 'var(--primary-100)' : 'var(--primary-200)',
                    color: module.level === 'AS' ? 'var(--primary-700)' : 'var(--primary-800)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {module.level}
                  </span>
                </div>
                <p className="card-description">{module.description}</p>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Topics Covered:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {module.topics.map((topic, index) => (
                    <span key={index} style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-secondary)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem'
                    }}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  ~{module.estimatedDuration} hours
                </span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => handleViewModule(module.id)}
                  >
                    View Details
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleStartLearning(module.id)}
                  >
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}