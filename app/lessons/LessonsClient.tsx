'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { type Lesson } from '@/lib/content'
import { AS_MODULES, A2_MODULES } from '@/lib/constants'

interface LessonsClientProps {
  lessons: Lesson[]
}

export default function LessonsClient({ lessons }: LessonsClientProps) {
  const searchParams = useSearchParams()
  const [filteredLessons, setFilteredLessons] = useState(lessons)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedModule, setSelectedModule] = useState('')

  const searchTerm = searchParams.get('search')
  const moduleParam = searchParams.get('module')

  useEffect(() => {
    let filtered = lessons

    // Filter by search term
    if (searchTerm) {
      setSearchQuery(searchTerm)
      filtered = filtered.filter(lesson => {
        const tags = lesson.meta.tags || []
        return (
          lesson.meta.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lesson.meta.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      })
    }

    // Filter by module
    if (moduleParam) {
      setSelectedModule(moduleParam)
      // For now, we'll show lessons based on the module's topics
      const allModules = [...AS_MODULES, ...A2_MODULES]
      const module = allModules.find(m => m.id === moduleParam)
      if (module) {
        filtered = filtered.filter(lesson => {
          const tags = lesson.meta.tags || []
          return tags.some(tag => 
            module.topics.some(moduleTopic => 
              moduleTopic.toLowerCase().includes(tag.toLowerCase()) ||
              tag.toLowerCase().includes(moduleTopic.toLowerCase())
            )
          )
        })
      }
    }

    setFilteredLessons(filtered)
  }, [lessons, searchTerm, moduleParam])

  const allModules = [...AS_MODULES, ...A2_MODULES]
  const currentModule = moduleParam ? allModules.find(m => m.id === moduleParam) : null
  
  const handleSearch = (query: string) => {
    if (query.trim()) {
      window.location.href = `/lessons?search=${encodeURIComponent(query.trim())}`
    }
  }

  const handleModuleFilter = (moduleId: string) => {
    if (moduleId) {
      window.location.href = `/lessons?module=${moduleId}`
    } else {
      window.location.href = '/lessons'
    }
  }

  return (
    <div style={{minHeight: '100vh', padding: '3rem 1rem'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{
          fontSize: '3rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem', 
          textAlign: 'center',
          color: '#f1f5f9',
          textShadow: '0 0 20px rgba(239, 68, 68, 0.5)'
        }}>
          Explore Our Lessons
        </h1>
        
        {/* Search and Filter Controls */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '3rem',
          alignItems: 'center'
        }}>
          {/* Search Bar */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px'
          }}>
            <input
              type="text"
              placeholder="Search lessons by title, subject, or topic..."
              defaultValue={searchQuery}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(e.currentTarget.value)
                }
              }}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3rem',
                background: 'rgba(17, 24, 39, 0.8)',
                border: '1px solid rgba(75, 85, 99, 0.4)',
                borderRadius: '0.75rem',
                color: '#f1f5f9',
                fontSize: '1rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.4)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
            <span style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#9ca3af',
              fontSize: '1.2rem'
            }}>
              🔍
            </span>
          </div>
          
          {/* Module Filter */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <span style={{color: '#d1d5db', fontSize: '0.9rem', marginRight: '0.5rem'}}>
              Filter by module:
            </span>
            <select
              value={selectedModule}
              onChange={(e) => handleModuleFilter(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                background: 'rgba(17, 24, 39, 0.8)',
                border: '1px solid rgba(75, 85, 99, 0.4)',
                borderRadius: '0.5rem',
                color: '#f1f5f9',
                fontSize: '0.9rem',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
            >
              <option value="">All Modules</option>
              {allModules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.title} ({module.level})
                </option>
              ))}
            </select>
          </div>
          
          {/* Active Filters Display */}
          {(searchQuery || currentModule) && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              alignItems: 'center'
            }}>
              <span style={{color: '#9ca3af', fontSize: '0.9rem'}}>Active filters:</span>
              {searchQuery && (
                <span style={{
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#f87171',
                  fontSize: '0.8rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  Search: "{searchQuery}"
                  <button 
                    onClick={() => window.location.href = `/lessons${moduleParam ? `?module=${moduleParam}` : ''}`}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#f87171',
                      cursor: 'pointer',
                      padding: '0',
                      fontSize: '0.9rem'
                    }}
                  >
                    ×
                  </button>
                </span>
              )}
              {currentModule && (
                <span style={{
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#f87171',
                  fontSize: '0.8rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  Module: {currentModule.title}
                  <button 
                    onClick={() => window.location.href = `/lessons${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ''}`}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#f87171',
                      cursor: 'pointer',
                      padding: '0',
                      fontSize: '0.9rem'
                    }}
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
        
        {/* Results Counter */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#d1d5db'
        }}>
          <p style={{fontSize: '1.1rem'}}>
            {filteredLessons.length === 0 ? 'No lessons found' : 
             filteredLessons.length === 1 ? '1 lesson found' : 
             `${filteredLessons.length} lessons found`}
          </p>
          {(searchQuery || currentModule) && (
            <p style={{fontSize: '0.9rem', color: '#9ca3af', marginTop: '0.5rem'}}>
              {searchQuery && currentModule 
                ? `Showing lessons matching "${searchQuery}" in ${currentModule.title}`
                : searchQuery 
                  ? `Showing lessons matching "${searchQuery}"`
                  : `Showing lessons from ${currentModule?.title}`
              }
            </p>
          )}
        </div>
        
        {lessons.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'rgba(17, 24, 39, 0.9)',
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(75, 85, 99, 0.3)'
          }}>
            <p style={{color: '#d1d5db', fontSize: '1.1rem', marginBottom: '1rem'}}>
              No lessons available yet. Check back soon!
            </p>
            <p style={{color: '#9ca3af', fontSize: '0.9rem'}}>
              We're working hard to bring you amazing content across mathematics, physics, computer science, and history.
            </p>
          </div>
        ) : filteredLessons.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'rgba(17, 24, 39, 0.9)',
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(75, 85, 99, 0.3)'
          }}>
            <p style={{color: '#d1d5db', fontSize: '1.1rem', marginBottom: '1rem'}}>
              No lessons match your current filters.
            </p>
            <p style={{color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem'}}>
              Try adjusting your search terms or removing filters to see more results.
            </p>
            <button 
              onClick={() => window.location.href = '/lessons'}
              style={{
                background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
          }}>
            {filteredLessons.map((lesson: Lesson) => (
              <div key={lesson.slug} style={{
                background: 'rgba(17, 24, 39, 0.9)',
                padding: '2rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(75, 85, 99, 0.3)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
              }}
              className="lesson-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.4)'
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)'
                e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.3)'
              }}>
                
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
                  <span style={{fontSize: '1.2rem'}}>
                    {lesson.meta.subject.toLowerCase().includes('math') ? '📐' :
                     lesson.meta.subject.toLowerCase().includes('physics') ? '⚛️' :
                     lesson.meta.subject.toLowerCase().includes('computer') ? '💻' :
                     lesson.meta.subject.toLowerCase().includes('history') ? '📚' : '🎓'}
                  </span>
                  <span style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(239, 68, 68, 0.2)',
                    color: '#f87171',
                    fontSize: '0.75rem',
                    borderRadius: '9999px',
                    fontWeight: '600',
                    border: '1px solid rgba(239, 68, 68, 0.3)'
                  }}>
                    {lesson.meta.subject.toUpperCase()}
                  </span>
                  <span style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(75, 85, 99, 0.3)',
                    color: '#d1d5db',
                    fontSize: '0.75rem',
                    borderRadius: '9999px',
                    fontWeight: '600',
                    border: '1px solid rgba(107, 114, 128, 0.3)'
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
                
                <div style={{fontSize: '0.9rem', color: '#d1d5db', marginBottom: '1.5rem'}}>
                  <p style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <span style={{color: '#f87171'}}>⏱</span>
                    <span>{lesson.meta.estimatedTime} minutes</span>
                  </p>
                  {lesson.meta.prerequisites && lesson.meta.prerequisites.length > 0 && (
                    <p style={{display: 'flex', alignItems: 'flex-start', gap: '0.5rem'}}>
                      <span style={{color: '#f87171', marginTop: '0.1rem'}}>📋</span>
                      <span>Prerequisites: {lesson.meta.prerequisites.join(', ')}</span>
                    </p>
                  )}
                </div>
                
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem'}}>
                  {(lesson.meta.tags || []).map((tag: string) => (
                    <span key={tag} style={{
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(55, 65, 81, 0.6)',
                      color: '#e5e7eb',
                      fontSize: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid rgba(75, 85, 99, 0.3)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/lessons/${lesson.slug}`}
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.3)'
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