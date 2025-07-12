'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AS_MODULES, A2_MODULES } from "@/lib/constants";

export default function HomeClient() {
  const [selectedYear, setSelectedYear] = useState<'AS' | 'A2'>('AS');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const router = useRouter();

  // Check for mobile and tablet on mount and resize
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const courseModules = {
    AS: AS_MODULES,
    A2: A2_MODULES
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: isMobile ? '4rem 1rem 3rem' : isTablet ? '5rem 1.5rem 3.5rem' : '6rem 2rem 4rem', 
        textAlign: 'center',
        background: 'var(--bg-primary)'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '1.5rem' : '2rem'
        }}>
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : isTablet ? '3rem' : '3.5rem',
            fontWeight: '900',
            fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive, system-ui',
            color: '#dc2626',
            marginBottom: '1rem',
            letterSpacing: '0.05em',
            lineHeight: '1.2',
            paddingBottom: '0.2rem',
            textShadow: '0 0 30px rgba(220, 38, 38, 0.3)',
            filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.2))',
            transform: 'scaleY(1.1)'
          }}>
            Sydeka
          </h1>
          <p style={{
            fontSize: isMobile ? '1.1rem' : isTablet ? '1.2rem' : '1.3rem',
            color: 'var(--text-secondary)',
            margin: '0',
            fontWeight: '300',
            letterSpacing: '0.1em'
          }}>
            Learning
          </p>
        </div>
        <p style={{
          fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.25rem',
          color: 'var(--text-secondary)',
          maxWidth: isMobile ? '100%' : '600px',
          margin: isMobile ? '0 auto 2rem' : '0 auto 3rem',
          lineHeight: '1.6',
          padding: isMobile ? '0 0.5rem' : '0'
        }}>
          Complete AS and A2 courses with AI-powered lessons, interactive practice, and progress tracking.
        </p>
        <Link 
          href="/lessons" 
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--bg-accent)',
            color: 'white',
            padding: isMobile ? '1rem 2rem' : isTablet ? '1.1rem 2.2rem' : '1.25rem 2.5rem',
            borderRadius: 'var(--radius-md)',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.2rem',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-600)';
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-accent)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.3)';
          }}
        >
          Start Learning
        </Link>
      </section>

      {/* Course Structure Section */}
      <section style={{ 
        padding: isMobile ? '3rem 1rem' : isTablet ? '3.5rem 1.5rem' : '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
          fontWeight: '600',
          color: 'var(--text-primary)',
          textAlign: 'center',
          marginBottom: isMobile ? '1.5rem' : '2rem'
        }}>
          Course Structure
        </h2>
        
        {/* Search Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: isMobile ? '2rem' : '3rem'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: isMobile ? '100%' : '400px',
            padding: isMobile ? '0 0.5rem' : '0'
          }}>
            <input
              type="text"
              placeholder={isMobile ? "Search topics..." : "Search for a topic (e.g., 'calculus', 'vectors')..."}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value) {
                  window.location.href = `/lessons?search=${encodeURIComponent(e.currentTarget.value)}`;
                }
              }}
              style={{
                width: '100%',
                padding: isMobile ? '0.8rem 0.8rem 0.8rem 2.5rem' : '1rem 1rem 1rem 3rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}
            />
            <span style={{
              position: 'absolute',
              left: isMobile ? '0.8rem' : '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
              fontSize: isMobile ? '1rem' : '1.2rem'
            }}>
              🔍
            </span>
          </div>
        </div>

        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          marginBottom: isMobile ? '1.5rem' : '2rem',
          fontSize: isMobile ? '0.9rem' : '1rem',
          padding: isMobile ? '0 0.5rem' : '0'
        }}>
          Select a year to view the modules.
        </p>

        {/* Year Selection */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          gap: isMobile ? '0.75rem' : '1rem',
          marginBottom: isMobile ? '2rem' : '3rem',
          padding: isMobile ? '0 0.5rem' : '0'
        }}>
          <button
            onClick={() => setSelectedYear('AS')}
            style={{
              padding: isMobile ? '0.75rem 1.5rem' : '0.75rem 2rem',
              backgroundColor: selectedYear === 'AS' ? 'var(--bg-accent)' : 'var(--bg-secondary)',
              color: selectedYear === 'AS' ? 'white' : 'var(--text-primary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
          >
            AS Level (Year 1)
          </button>
          <button
            onClick={() => setSelectedYear('A2')}
            style={{
              padding: isMobile ? '0.75rem 1.5rem' : '0.75rem 2rem',
              backgroundColor: selectedYear === 'A2' ? 'var(--bg-accent)' : 'var(--bg-secondary)',
              color: selectedYear === 'A2' ? 'white' : 'var(--text-primary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              fontSize: isMobile ? '0.9rem' : '1rem',
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
          gridTemplateColumns: isMobile 
            ? '1fr' 
            : isTablet 
              ? 'repeat(2, 1fr)' 
              : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isMobile ? '1rem' : '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: isMobile ? '0 0.5rem' : '0'
        }}>
          {courseModules[selectedYear].map((module) => (
            <div
              key={module.id}
              onClick={() => router.push(`/lessons?module=${module.id}`)}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
                borderRadius: 'var(--radius-md)',
                padding: isMobile ? '1.25rem' : '1.5rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-accent)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(204, 37, 37, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start', 
                marginBottom: isMobile ? '0.8rem' : '1rem',
                flexWrap: isMobile ? 'wrap' : 'nowrap',
                gap: isMobile ? '0.5rem' : '0'
              }}>
                <h3 style={{
                  fontSize: isMobile ? '1rem' : isTablet ? '1.05rem' : '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: '1.3',
                  flex: isMobile ? '1 1 100%' : 'auto'
                }}>
                  {module.title}
                </h3>
                <span style={{ 
                  backgroundColor: module.level === 'AS' ? 'rgba(255, 59, 48, 0.1)' : 'rgba(255, 59, 48, 0.2)',
                  color: 'var(--bg-accent)',
                  padding: '0.2rem 0.4rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  flexShrink: 0,
                  marginLeft: isMobile ? '0' : '0.5rem'
                }}>
                  {module.level}
                </span>
              </div>
              
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: isMobile ? '0.8rem' : '1rem',
                lineHeight: '1.4',
                fontSize: isMobile ? '0.85rem' : '0.9rem'
              }}>
                {module.description}
              </p>

              <div style={{ marginBottom: isMobile ? '0.8rem' : '1rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {module.topics.slice(0, isMobile ? 3 : 4).map((topic, topicIndex) => (
                    <span key={topicIndex} style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-secondary)',
                      padding: '0.2rem 0.4rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: isMobile ? '0.65rem' : '0.7rem'
                    }}>
                      {topic}
                    </span>
                  ))}
                  {module.topics.length > (isMobile ? 3 : 4) && (
                    <span style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-muted)',
                      padding: '0.2rem 0.4rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: isMobile ? '0.65rem' : '0.7rem'
                    }}>
                      +{module.topics.length - (isMobile ? 3 : 4)} more
                    </span>
                  )}
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: isMobile ? 'wrap' : 'nowrap',
                gap: isMobile ? '0.5rem' : '0'
              }}>
                <span style={{
                  color: 'var(--text-muted)',
                  fontSize: isMobile ? '0.75rem' : '0.8rem'
                }}>
                  ~{module.estimatedDuration} hours
                </span>
                <span style={{
                  color: 'var(--text-accent)',
                  fontSize: isMobile ? '0.75rem' : '0.8rem',
                  fontWeight: '500'
                }}>
                  0% Complete
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
