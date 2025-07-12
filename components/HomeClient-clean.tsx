'use client'

import Link from "next/link";
import { useState } from "react";

export default function HomeClient() {
  const [selectedYear, setSelectedYear] = useState<'AS' | 'A2'>('AS');

  const courseModules = {
    AS: [
      {
        number: 1,
        title: "Algebra & Functions",
        description: "Laws of indices, surds, quadratics, inequalities, sketching curves",
        progress: 0
      },
      {
        number: 2,
        title: "Coordinate Geometry",
        description: "Straight lines, circles, parametric equations",
        progress: 0
      },
      {
        number: 3,
        title: "Sequences & Series",
        description: "Arithmetic and geometric progressions, binomial expansion",
        progress: 0
      }
    ],
    A2: [
      {
        number: 1,
        title: "Further Algebra",
        description: "Partial fractions, complex numbers, matrices",
        progress: 0
      },
      {
        number: 2,
        title: "Advanced Calculus",
        description: "Integration techniques, differential equations",
        progress: 0
      },
      {
        number: 3,
        title: "Vectors & Statistics",
        description: "3D vectors, hypothesis testing, correlation",
        progress: 0
      }
    ]
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '6rem 2rem 4rem', 
        textAlign: 'center',
        background: 'var(--bg-primary)'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: 'var(--text-primary)',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em'
        }}>
          sydeka Learning
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 3rem',
          lineHeight: '1.6'
        }}>
          Complete AS and A2 courses with AI-powered lessons, interactive practice, and progress tracking.
        </p>
        <Link 
          href="/lessons" 
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--bg-accent)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: 'var(--radius-md)',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'all 0.2s ease',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-600)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-accent)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Start Learning
        </Link>
      </section>

      {/* Course Structure Section */}
      <section style={{ 
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '600',
          color: 'var(--text-primary)',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Course Structure
        </h2>
        
        {/* Search Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '400px'
          }}>
            <input
              type="text"
              placeholder="Search for a topic (e.g., 'calculus', 'vectors')..."
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '1rem'
              }}
            />
            <span style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
              fontSize: '1.2rem'
            }}>
              🔍
            </span>
          </div>
        </div>

        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          marginBottom: '2rem'
        }}>
          Select a year to view the modules.
        </p>

        {/* Year Selection */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <button
            onClick={() => setSelectedYear('AS')}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: selectedYear === 'AS' ? 'var(--bg-accent)' : 'var(--bg-secondary)',
              color: selectedYear === 'AS' ? 'white' : 'var(--text-primary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
          >
            AS Level (Year 1)
          </button>
          <button
            onClick={() => setSelectedYear('A2')}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: selectedYear === 'A2' ? 'var(--bg-accent)' : 'var(--bg-secondary)',
              color: selectedYear === 'A2' ? 'white' : 'var(--text-primary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
          >
            A2 Level (Year 2)
          </button>
        </div>

        {/* Course Modules */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {courseModules[selectedYear].map((module) => (
            <div
              key={module.number}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-accent)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                {module.number}. {module.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                lineHeight: '1.5'
              }}>
                {module.description}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem'
                }}>
                  {module.progress}% Complete
                </span>
                <div style={{
                  width: '100px',
                  height: '4px',
                  backgroundColor: 'var(--bg-tertiary)',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${module.progress}%`,
                    height: '100%',
                    backgroundColor: 'var(--bg-accent)',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
